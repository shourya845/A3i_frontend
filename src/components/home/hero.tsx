'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import ButtonArrow from '@/components/ui/button-arrow';

const MotionLink = motion.create(Link);

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const feedback = reducedMotion ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.98 } };
  return <section className="hero hero-motto-layout" aria-labelledby="hero-title">
    <Image className="hero-background" src="/images/hero-background.jpg" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" />
    <div className="hero-overlay" />
    <div className="hero-inner">
      <motion.div className="hero-copy"
        initial={reducedMotion ? false : { opacity: 0.85, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' }}>
        <h1 id="hero-title"><span>Company that gets work done.</span>{' '}<span>Built around your business.</span></h1>
        <p className="hero-motto">Strong data. Proven execution. Purposeful AI.</p>
        <div className="hero-actions">
          <MotionLink className="hero-demo" href="/demo" {...feedback}>Book a demo <ButtonArrow /></MotionLink>
          <MotionLink className="hero-explore" href="#products" {...feedback}>Explore products <ButtonArrow /></MotionLink>
        </div>
      </motion.div>
    </div>
    <motion.a className="hero-scroll-cue" href="#platform-title" {...feedback}>
      <ArrowDown size={18} aria-hidden="true" /> See how it works
    </motion.a>
    <p className="hero-caption">Different solutions. Powered by the same Apps, Ants, and Agents.</p>
  </section>;
}
