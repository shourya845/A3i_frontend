'use client';

import Image from 'next/image';
import { Rocket, Bug, Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import styles from './automation-model.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

const levels = [
  {
    name: 'Apps', icon: Rocket, image: '/images/tier-apps.webp',
    description: 'Single-purpose tools for documents, audio, video, translation, and more.',
    points: ['Ready in seconds', 'Focused outputs', 'Easy starting point'],
  },
  {
    name: 'Ants', icon: Bug, image: '/images/tier-ants.webp',
    description: 'Reusable workflow endpoints — small, repeatable jobs you can call anywhere.',
    points: ['One job per endpoint', 'Consistent, templated output', 'Drop into any product'],
  },
  {
    name: 'Agents', icon: Bot, image: '/images/tier-agents.webp',
    description: 'Multi-step workers that reason, decide, and carry a complete job forward.',
    points: ['Own the workflow', 'Connect multiple tasks', 'Keep humans in review'],
  },
];

export default function AutomationModel() {
  const reduced = useReducedMotion();
  return <section className="automation-section" aria-labelledby="automation-title">
    <div className="automation-container">
      <motion.h2 id="automation-title" initial={false}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
        whileInView={reduced ? undefined : {
          opacity: [0.55, 1], y: [24, 0],
          clipPath: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
        }}
        viewport={{ amount: 0.7 }} transition={{ duration: reduced ? 0 : 0.7, ease }}>
        Choose how much work to hand over.
      </motion.h2>
      <div className="automation-grid">
        {levels.map(({ name, icon: LevelIcon, image, description, points }, index) => <motion.article
          className={`automation-card ${styles.card}`} key={name} aria-labelledby={`level-${name.toLowerCase()}`}
          initial={false} animate={{ opacity: 1, y: 0 }}
          whileInView={reduced ? undefined : { opacity: [0.4, 1], y: [28, 0] }}
          viewport={{ amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.65, ease, delay: reduced ? 0 : index * 0.1 }}>
          <div className="automation-body">
            <span className="automation-icon" aria-hidden="true"><LevelIcon size={38} strokeWidth={1.8} /></span>
            <h3 id={`level-${name.toLowerCase()}`}>{name}</h3>
            <p>{description}</p>
            <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
          </div>
          <div className={`automation-image ${styles.image}`}><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1099px) 50vw, 33vw" /></div>
        </motion.article>)}
      </div>
    </div>
  </section>;
}
