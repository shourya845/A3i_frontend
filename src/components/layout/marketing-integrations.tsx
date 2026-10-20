import Script from 'next/script';

// Account-specific scripts are opt-in and disabled in the default local setup.
const providers = [
  ['qualified','A3I_QUALIFIED_SCRIPT_URL','js.qualified.com'],
  ['chili-piper','A3I_CHILI_PIPER_SCRIPT_URL','js.chilipiper.com'],
  ['navattic','A3I_NAVATTIC_SCRIPT_URL','js.navattic.com'],
  ['bugherd','A3I_BUGHERD_SCRIPT_URL','www.bugherd.com'],
  ['hubspot','A3I_HUBSPOT_SCRIPT_URL','js.hs-scripts.com'],
  ['mailchimp','A3I_MAILCHIMP_SCRIPT_URL','chimpstatic.com'],
  ['intellimize','A3I_INTELLIMIZE_SCRIPT_URL','cdn.intellimize.co'],
] as const;
export default function MarketingIntegrations(){
  if(process.env.A3I_ENABLE_MARKETING_INTEGRATIONS!=='true')return null;
  const domain=process.env.A3I_PLAUSIBLE_DOMAIN;
  const tag=process.env.A3I_GTM_ID;
  return <>
    {domain?<Script id="a3i-plausible" src="https://plausible.io/js/script.js" data-domain={domain} strategy="lazyOnload"/>:null}
    {tag&&/^GTM-[A-Z0-9]+$/.test(tag)?<><Script id="a3i-gtm-init" strategy="afterInteractive">{'window.dataLayer=window.dataLayer||[];window.dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});'}</Script><Script id="a3i-gtm" src={`https://www.googletagmanager.com/gtm.js?id=${tag}`} strategy="lazyOnload"/></>:null}
    {providers.map(([id,key,host])=>{
      const src=process.env[key];if(!src)return null;
      try{const url=new URL(src);const tenantHost=id==='chili-piper'&&url.hostname.endsWith('.chilipiper.com');if(url.protocol!=='https:'||(url.hostname!==host&&!tenantHost))return null;}catch{return null;}
      return <Script key={id} id={`a3i-${id}`} src={src} strategy="lazyOnload"/>;
    })}
  </>;
}
