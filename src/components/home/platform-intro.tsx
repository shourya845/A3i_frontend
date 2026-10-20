'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Mic, Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'motion/react';

const topics = ['Audio Analysis', 'Document Understanding', 'Real-time Translation', 'Data Matching', 'Human Workflow'];

export default function PlatformIntro() {
  const [topic, setTopic] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => setTopic(current => (current + 1) % topics.length), 3200);
    return () => window.clearInterval(timer);
  }, [reduced, paused]);

  return <section className="platform-intro platform-reference content-section" aria-labelledby="platform-title">
    <div className="content-container platform-intro-layout">
      <div>
        <p className="platform-eyebrow">AI-powered acceleration platform</p>
        <h2 id="platform-title">Supercharge Every<span className="platform-topic" key={topic} aria-hidden="true">{topics[topic]}</span><span className="sr-only">human workflow.</span></h2>
        {!reduced && <button className="platform-animation-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play headline animation' : 'Pause headline animation'}>{paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}{paused ? 'Play animation' : 'Pause animation'}</button>}
        <p className="platform-description">A3i Accel delivers a suite of intelligent accelerators that amplify human productivity—from document understanding and audio intelligence to real-time translation and smart matching.</p>
        <div className="platform-reference-actions">
          <Link className="platform-services" href="/services">See Our Services</Link>
          <Link className="platform-demo" href="/demo"><Play size={16} aria-hidden="true" />Schedule a Demo</Link>
        </div>
      </div>
      <div className="platform-assistant-entry">
        <button className="platform-talk" type="button">
          <Mic size={30} aria-hidden="true" /><span>Talk to Accel</span>
        </button>
      </div>
    </div>
  </section>;
}
