'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export default function NextoryReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false}
    whileInView={reduced ? undefined : { opacity: [.65, 1], transform: ['translateY(24px)', 'translateY(0px)'] }}
    viewport={{ amount: .15 }} transition={{ duration: .65, ease: [.23, 1, .32, 1] }}>
    {children}
  </motion.div>;
}
