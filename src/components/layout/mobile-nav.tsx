'use client';
import { useState } from 'react';
import ButtonArrow from '@/components/ui/button-arrow';
import { NavContent, Icon, type MenuName } from './nav-content';

export default function MobileNav({ select, initialExpanded = null }: { select: (label: string) => void; initialExpanded?: MenuName | null }) {
  const [expanded, setExpanded] = useState<MenuName | null>(initialExpanded);
  return <div className="mobile-panel" id="mobile-navigation">
    {(['Products', 'Industry'] as MenuName[]).map(menu => <div key={menu} className="mobile-section"><button className="mobile-heading" aria-expanded={expanded === menu} aria-controls={`mobile-${menu}`} onClick={() => setExpanded(expanded === menu ? null : menu)}>{menu}<span aria-hidden="true">{expanded === menu ? '−' : '+'}</span></button><div id={`mobile-${menu}`} hidden={expanded !== menu}><NavContent menu={menu} select={select} /></div></div>)}
    <button className="mobile-heading" onClick={() => select('Services')}>Services</button>
    <div className="mobile-section"><button className="mobile-heading" aria-expanded={expanded === 'Company'} aria-controls="mobile-Company" onClick={() => setExpanded(expanded === 'Company' ? null : 'Company')}>Company<span aria-hidden="true">{expanded === 'Company' ? '−' : '+'}</span></button><div id="mobile-Company" hidden={expanded !== 'Company'}><NavContent menu="Company" select={select} /></div></div>
    <div className="mobile-actions"><button onClick={() => select('Responsible AI')}><Icon name="scales" />Responsible AI</button><button onClick={() => select('Login')}>Login</button><button className="start-button" onClick={() => select('Get Started')}>Get Started <ButtonArrow /></button></div>
  </div>;
}
