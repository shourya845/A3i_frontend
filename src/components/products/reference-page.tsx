'use client';
import { useEffect, useRef, useState, type MouseEvent, type FormEvent } from 'react';
import Link from 'next/link';

export default function ReferencePage({ html, title }: { html: string; title: string }) {
  const [notice,setNotice]=useState('');
  const status=useRef<HTMLDivElement>(null);
  const surface=useRef<HTMLDivElement>(null);
  const [slide,setSlide]=useState(0);
  const [autoplay,setAutoplay]=useState(false);
  useEffect(()=>{
    const cards=surface.current?.querySelectorAll<HTMLElement>('.cs-card');
    if(!cards?.length)return;
    cards.forEach((card,index)=>{card.hidden=index!==slide%cards.length;});
    const pause=surface.current?.querySelector<HTMLButtonElement>('.cs-pause-btn');
    if(pause){pause.setAttribute('aria-label',autoplay?'Pause autoplay':'Start autoplay');pause.title=autoplay?'Pause autoplay':'Start autoplay';}
    if(!autoplay)return;
    const timer=setInterval(()=>setSlide(previous=>(previous+1)%cards.length),7000);
    return ()=>clearInterval(timer);
  },[slide,autoplay]);
  function notify(message:string) {setNotice(message);requestAnimationFrame(()=>status.current?.focus());}
  function submit(event:FormEvent) {event.preventDefault();notify('This imported form is a frontend preview. Your details have not been sent. Use the demo request page to contact the configured service.');}
  function interact(event:MouseEvent<HTMLDivElement>) {
    const target=event.target as HTMLElement;
    const button=target.closest('button');
    if(!button)return;
    const count=surface.current?.querySelectorAll('.cs-card').length||0;
    if(button.classList.contains('cs-btn-next')&&count){setSlide(previous=>(previous+1)%count);return;}
    if(button.classList.contains('cs-btn-prev')&&count){setSlide(previous=>(previous+count-1)%count);return;}
    if(button.classList.contains('cs-pause-btn')){setAutoplay(previous=>!previous);return;}
    if(button.type==='submit'&&button.closest('form'))return;
    const accordion=button.getAttribute('aria-controls');
    if(accordion){const panel=document.getElementById(accordion);if(panel){const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));panel.hidden=expanded;return;}}
    event.preventDefault();
    notify('This original-site interaction needs its supporting application script. No request has been sent.');
  }
  return <>
    <div className="page-breadcrumb content-container"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{title}</span></div>
    <div className="reference-status" ref={status} tabIndex={-1} role="status">{notice}</div>
    <div className="official-surface" ref={surface} onSubmit={submit} onClick={interact} dangerouslySetInnerHTML={{__html:html}} />
    <div className="reference-end content-container"><h2>Let’s talk about your workflow.</h2><Link className="dark-action" href="/demo">Request a demo</Link></div>
  </>;
}
