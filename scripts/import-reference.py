"""Import public presentation content; never execute the original site's scripts."""
from html.parser import HTMLParser
from html import escape
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor
import json, re, subprocess

ROOT = Path(__file__).resolve().parents[1]
HTML_SOURCE = Path(r'C:/Users/Asus/.codex/attachments/833aa566-b59b-4894-bd9d-e83c763e0a7b/Pasted text.txt')
CSS_SOURCE = Path(r'C:/Users/Asus/.codex/attachments/ada863fd-49a2-4c0b-8ccc-d03f17e21535/Pasted text.txt')
BASE = 'https://a3i-accel.com/'
ROUTES = {
 'sol-notes-ai': '/products/ai-note', 'ind-recruiters': '/products/ai-hire',
 'prod-lead': '/products/ai-lead', 'prod-advisor': '/products/ai-advisor',
 'prod-marketing': '/products/ai-marketing', 'services': '/services',
 'about': '/company/about', 'contact': '/contact', 'collaborations': '/company/collaborations',
 'careers': '/company/careers', 'competitions': '/company/competitions',
 'responsible-ai': '/responsible-ai', 'resources': '/resources',
 'ind-banks': '/industries/banks', 'fin-advisor': '/industries/financial-advisors',
 'ind-hedge-funds': '/industries/hedge-funds', 'ind-fintech': '/industries/fintechs',
 'ind-grid-ops': '/industries/grid-operations', 'ind-circuit-design': '/industries/circuit-design',
 'ind-renewables': '/industries/renewable-energy', 'ind-energy-trading': '/industries/energy-trading',
 'restaurants': '/industries/restaurants', 'ind-clinics': '/industries/clinics',
 'ind-hospitality': '/industries/hospitality', 'wf-email': '/workflows/email',
 'wf-invoice': '/workflows/invoice', 'wf-meeting': '/workflows/meeting',
 'wf-report': '/workflows/report', 'sol-voice-agents': '/workflows/voice',
 'sol-scheduling-bot': '/workflows/scheduling', 'sol-personal-assistant': '/workflows/personal',
 'solutions': '/solutions', 'sol-data-streamline': '/solutions/data-streamline',
 'sol-unstructured': '/solutions/unstructured-data', 'sol-ocr-scan': '/solutions/ocr-scan',
 'sol-rpa-ipa': '/solutions/process-automation', 'sol-research': '/solutions/research',
 'sol-web-crawlers': '/solutions/web-crawlers', 'sol-video-agent': '/solutions/video-agent',
 'sol-physical-ai': '/solutions/physical-ai', 'ai-data': '/solutions/ai-data',
 'res-roi': '/resources/roi', 'res-optimized-ai': '/resources/optimized-ai',
 'res-voice-field-notes': '/resources/voice-field-notes', 'ind-sme': '/industries/small-business',
 'careers-agentic-ai': '/company/careers/agentic-ai', 'careers-ml-engineer': '/company/careers/ml-engineer',
 'careers-data-metadata': '/company/careers/data-metadata', 'careers-ai-engineer-intern': '/company/careers/ai-engineer-intern',
 'careers-marketing-intern': '/company/careers/marketing-intern', 'careers-sales-nextory': '/company/careers/sales-nextory',
 'careers-sales-speedhire': '/company/careers/sales-speedhire', 'careers-sales-send3r': '/company/careers/sales-send3r',
 'careers-sales-invenio': '/company/careers/sales-invenio', 'careers-sales-h3ive': '/company/careers/sales-h3ive',
 'careers-experts': '/company/careers/experts',
}
assets = set()
VOID = {'img','input','br','hr','meta','link','source','wbr','area','base','col','embed','param','track'}
class Node:
 def __init__(self, tag='', attrs=None): self.tag, self.attrs, self.children = tag, dict(attrs or []), []
 def has(self, name): return name in self.attrs.get('class','').split()
 def all(self, test):
  result = [self] if test(self) else []
  for child in self.children:
   if isinstance(child, Node): result.extend(child.all(test))
  return result
 def text(self): return re.sub(r'\s+', ' ', ''.join(c.text() if isinstance(c,Node) else c for c in self.children)).strip()
 def first(self, cls): return next(iter(self.all(lambda n:n.has(cls))), Node())
 def render(self):
  if self.tag in {'script','iframe','object','embed','canvas'}: return ''
  if self.tag == 'a' and self.attrs.get('href','').startswith('javascript:'): return ''
  attrs = {k:v or '' for k,v in self.attrs.items() if not k.startswith('on') and k not in {'srcdoc','action','method','formaction','autofocus'}}
  if self.tag == 'img':
   src=attrs.get('src','')
   if src and not src.startswith(('data:','http','/')):
    assets.add(src); attrs['src']='/reference/'+src
   attrs['loading']='lazy'; attrs.pop('fetchpriority',None)
  if 'style' in attrs:
   def style_url(m):
    path=m[1]
    if path.startswith(('data:','http','/')): return m[0]
    assets.add(path); return "url('/reference/"+path+"')"
   attrs['style']=re.sub(r'url\([\'"]?([^\'"\)]+)[\'"]?\)',style_url,attrs['style'])
  if self.tag == 'a':
   nav=attrs.get('data-nav')
   if nav in ROUTES: attrs['href']=ROUTES[nav]
   elif nav: attrs['href']='/preview?feature='+nav
   href=attrs.get('href','')
   if href in {'#',''} and not nav: attrs['href']='/contact'
   if href.startswith('/legal/'): attrs['href']=BASE.rstrip('/')+href
  if self.tag == 'form': attrs['data-preview-form']='true'
  if self.tag in {'input','select','textarea'} and not attrs.get('aria-label'):
   attrs['aria-label']=attrs.get('placeholder') or attrs.get('name','').replace('_',' ').title() or 'Form field'
  if self.tag == 'i': attrs['aria-hidden']='true'
  if self.tag in {'button','input'} and attrs.get('type') in {'submit','file'}: attrs['data-preview-only']='true'
  attrtext=''.join(' '+k+'="'+escape(v,quote=True)+'"' for k,v in attrs.items())
  content=''.join(c.render() if isinstance(c,Node) else escape(c) for c in self.children)
  if not self.tag: return content
  return '<'+self.tag+attrtext+'>'+('' if self.tag in VOID else content+'</'+self.tag+'>')

class Parser(HTMLParser):
 def __init__(self, text):
  super().__init__(convert_charrefs=True); self.root=Node(); self.stack=[self.root]; self.feed(text)
 def handle_starttag(self,tag,attrs):
  node=Node(tag,attrs); self.stack[-1].children.append(node)
  if tag not in VOID: self.stack.append(node)
 def handle_startendtag(self,tag,attrs): self.handle_starttag(tag,attrs); self.handle_endtag(tag)
 def handle_endtag(self,tag):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==tag: self.stack=self.stack[:i]; break
 def handle_data(self,data): self.stack[-1].children.append(data)

def fetch(path):
 # Node uses the host's current CA trust; the bundled Python CA bundle is stale.
 code="let u='';process.stdin.on('data',d=>u+=d);process.stdin.on('end',async()=>{try{const r=await fetch(u.trim(),{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('HTTP '+r.status);process.stdout.write(Buffer.from(await r.arrayBuffer()))}catch(e){process.stderr.write(String(e));process.exitCode=1}})"
 result=subprocess.run(['node','-e',code],input=urljoin(BASE,path).encode(),capture_output=True,timeout=40)
 if result.returncode: raise ValueError(result.stderr.decode(errors='replace'))
 return result.stdout

def main():
 destination=ROOT/'src/content/imported'; destination.mkdir(parents=True,exist_ok=True)
 source=Parser(HTML_SOURCE.read_text(encoding='utf-8')).root
 workflows=[]
 names={n.attrs['data-pain']:n.first('pain-item-name').text() for n in source.all(lambda n:'data-pain' in n.attrs)}
 for panel in source.all(lambda n:'data-pain-panel' in n.attrs):
  key=panel.attrs['data-pain-panel']
  workflows.append({'id':key,'name':names.get(key,key),'title':next(n for n in panel.all(lambda n:n.tag=='h3')).text(),
   'type':'App' if key in ['scan','lang','dataentry'] else 'Ant' if key in ['meeting','schedule','email'] else 'Agent',
   'problem':panel.first('pain-problem').text(), 'description':panel.first('pain-solve').text(),
   'steps':[n.text() for n in panel.all(lambda n:n.has('flow-lbl'))],
   'integrations':[n.text() for n in panel.all(lambda n:n.has('int-chip'))],
   'example':panel.first('pain-shot').render()})
 (destination/'workflows.json').write_text(json.dumps(workflows,ensure_ascii=False,indent=2),encoding='utf-8')
 (destination/'why.json').write_text(json.dumps({'html':source.first('why-section').render()},ensure_ascii=False),encoding='utf-8')
 pages=[]; failures=[]
 def download_page(item):
  key,path=item
  try:
   raw=fetch('partials/'+key+'.html').decode('utf-8')
   if '<!DOCTYPE' in raw[:100] or not raw.strip(): raise ValueError('not a partial')
   tree=Parser(raw).root
   headings=tree.all(lambda n:n.tag in ['h1','h2'])
   title=headings[0].text() if headings else key.replace('-',' ').title()
   content=tree.render().replace('href="/video"','href="/preview?feature=video"')
   if '<h1' not in content: content=re.sub(r'<h2(\b[^>]*)>([\s\S]*?)</h2>',r'<h1\1>\2</h1>',content,count=1)
   return {'id':key,'path':path,'title':title,'html':content}
  except Exception as e: return {'id':key,'error':str(e)}
 with ThreadPoolExecutor(max_workers=6) as pool:
  for result in pool.map(download_page,ROUTES.items()):
   if 'error' in result: failures.append(result)
   else: pages.append(result)
 (destination/'pages.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2),encoding='utf-8')
 # The original CSS is scoped so its resets and hero rules cannot overwrite the approved design.
 css=CSS_SOURCE.read_text(encoding='utf-8')
 css=css.replace('.nt-app @keyframes','@keyframes')
 css=re.sub(r'/\*[\s\S]*?\*/','',css)
 css=re.sub(r'@import[^;]+;','',css)
 css=css.replace(':root',':scope')
 css=re.sub(r'(?<![-\w.])(?:body|html)(?![-\w])',':scope',css)
 def css_url(m):
  path=m[1]
  if path.startswith(('data:','http','/','#')): return m[0]
  assets.add(path); return "url('/reference/"+path+"')"
 css=re.sub(r'url\([\'"]?([^\'"\)]+)[\'"]?\)',css_url,css)
 # Avoid references to missing source scripts controlling visibility.
 css+='\n:scope{--primary:#122144;--primary-dk:#071a30;--primary-lt:#edf2f8;--bg-navy:#071b30;--ink-accent:#122144;--ink-accent-dk:#071a30;--gradient-brand:linear-gradient(135deg,#122144,#27466a);--gradient-glow:0 4px 22px #12214422;color:#152137;background:#e9ecf1;font-family:Arial,Helvetica,sans-serif} .reveal,.reveal-up,.scroll-reveal,[data-reveal]{opacity:1!important;transform:none!important} .pain-panel{display:block!important} .section-header h1,.section-header h2{font-family:Georgia,serif} img{max-width:100%} :focus-visible{outline:3px solid #4e75a8;outline-offset:4px}'
 (ROOT/'src/app/reference.css').write_text('@scope (.official-surface) {\n'+css+'\n}',encoding='utf-8')
 def download_asset(path):
  try:
   clean=path.split('?')[0]; target=ROOT/'public/reference'/clean
   if '..' in Path(clean).parts: return
   target.parent.mkdir(parents=True,exist_ok=True)
   if not target.exists(): target.write_bytes(fetch(path))
  except Exception as e: failures.append({'asset':path,'error':str(e)})
 with ThreadPoolExecutor(max_workers=6) as pool: list(pool.map(download_asset,sorted(assets)))
 # Font Awesome is the icon set used in the supplied HTML. Host it locally.
 vendor=ROOT/'public/vendor/fontawesome'; (vendor/'webfonts').mkdir(parents=True,exist_ok=True);(vendor/'css').mkdir(exist_ok=True)
 cdn='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/'
 for file in ['css/all.min.css','webfonts/fa-solid-900.woff2','webfonts/fa-regular-400.woff2','webfonts/fa-brands-400.woff2']:
  try:
   with urlopen(cdn+file,timeout=30) as res: (vendor/file).write_bytes(res.read())
  except Exception as e: failures.append({'asset':file,'error':str(e)})
 report={'pages':len(pages),'workflows':len(workflows),'assets':len(assets),'missing':failures}
 (ROOT/'docs/import-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
 print(json.dumps(report,indent=2))
if __name__=='__main__': main()
