'use client';

import Image from 'next/image';
import { AudioLines, Check, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import styles from './nextory.module.css';

const heights = [14, 23, 35, 20, 42, 30, 18, 38, 48, 25, 36, 19, 43, 31, 49, 27, 39, 18, 34, 45, 24, 16, 32, 42, 28, 19, 36, 23];

export default function NextoryVisual() {
  const [replay, setReplay] = useState(0);
  return <figure className={styles.heroVisual}>
    <div className={styles.heroPhoto}>
      <Image src="/images/products/notes-ai.jpg" alt="Colleagues sharing ideas around a meeting table" fill sizes="(max-width: 760px) 100vw, 50vw" loading="eager" fetchPriority="high" />
      <div className={styles.photoTag}><AudioLines size={16} aria-hidden="true" /> Make room for the conversation.</div>
    </div>
    <div className={styles.audioGraphic}>
      <div className={styles.audioHeading}><span><AudioLines size={18} aria-hidden="true" /> The conversation, captured.</span><button type="button" onClick={() => setReplay(value => value + 1)} aria-label="Replay waveform illustration"><RotateCcw size={16} aria-hidden="true" /></button></div>
      <div key={replay} className={styles.waveform} aria-hidden="true">{heights.map((height, index) => <i key={index} style={{ height, animationDelay: `${index * 35}ms` }} />)}</div>
      <div className={styles.captureResult}><span><Check size={16} aria-hidden="true" /> Meeting notes</span><span><Check size={16} aria-hidden="true" /> Clear next steps</span></div>
    </div>
    <figcaption>Illustration only. No audio is being recorded.</figcaption>
  </figure>;
}
