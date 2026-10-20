import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const pages=JSON.parse(fs.readFileSync('src/content/imported/pages.json','utf8'));
const workflows=JSON.parse(fs.readFileSync('src/content/imported/workflows.json','utf8'));
const routes=new Set(['/', '/demo', '/preview', '/login', ...pages.map(page=>page.path)]);
assert.equal(routes.size,pages.length+4,'Duplicate imported routes');
const problems=[];
for(const page of pages){
  if(/<script\b|\son\w+\s*=|javascript:/i.test(page.html)) problems.push(`${page.path}: executable source content`);
  for(const match of page.html.matchAll(/(?:href|src)="([^"]*)"/g)){
    const value=match[1].replaceAll('&#x27;',"'").replaceAll('&amp;','&');
    if(value.startsWith('/reference/')){
      if(!fs.existsSync(path.join(root,'public',value.split('?')[0])))problems.push(`${page.path}: missing asset ${value}`);
    }else if(value.startsWith('/')&&!routes.has(value.split(/[?#]/)[0])) problems.push(`${page.path}: unresolved local link ${value}`);
  }
}
for(const item of workflows){assert.equal(item.steps.length,4);assert.ok(item.example.includes('pain-shot'));}
assert.equal(workflows.length,9);
assert.deepEqual(problems,[]);
console.log(`Verified ${pages.length} imported routes, their local image assets and links, and ${workflows.length} workflow examples. No executable original scripts or event handlers.`);
