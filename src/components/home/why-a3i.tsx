'use client';

import { ArrowRight, Check, Clock3, Gauge, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimationControls, useInView, type Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import styles from './why-a3i.module.css';

const benefits = [
  { icon: Gauge, title: 'Minimize cost through optimizing AI', description: 'We match each task to the leanest model that does it well — optimized AI, not just more AI — so you get the result without paying for overkill.' },
  { icon: Clock3, title: 'Reduce time without disruption', description: 'Apps, Ants and Agents drop into the tools you already use, so work speeds up from day one — no rip-and-replace, nothing to relearn.' },
  { icon: ShieldCheck, title: 'Responsible use and scale', description: 'Guardrails, human oversight and audit trails are built in — so you can roll AI out wider with confidence, not risk.' },
];

const industries = [
  { name: 'Hedge Funds', slug: 'hedge-funds' },
  { name: 'Financial Advisors', slug: 'financial-advisors' },
  { name: 'Restaurants', slug: 'restaurants' },
  { name: 'Clinics', slug: 'clinics' },
  { name: 'Hospitality', slug: 'hospitality' },
];

const headingWords = 'Optimize AI. Build local. Scale impact.'.split(' ');
const entrance = { type: 'spring' as const, duration: 0.8, bounce: 0.08 };
const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyA3i() {
  const reduced = useReducedMotion();
  const [twoColumns, setTwoColumns] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);
  const diagramVisible = useInView(diagramRef, { amount: 0.35 });
  const diagramControls = useAnimationControls();

  useEffect(() => {
    if (reduced || !diagramVisible) {
      diagramControls.stop();
      diagramControls.set('readable');
    } else {
      void diagramControls.start('diagram');
    }
  }, [reduced, diagramVisible, diagramControls]);

  useEffect(() => {
    const layout = window.matchMedia('(min-width: 768px)');
    const update = () => setTwoColumns(layout.matches);
    update();
    layout.addEventListener('change', update);
    return () => layout.removeEventListener('change', update);
  }, []);

  // Start from readable server HTML. Keyframes only run after entering view;
  // failed animation loading never leaves words masked or cards hidden.
  const reveal = (delay = 0, lift = 18): Variants => ({
    readable: { opacity: 1, y: 0 },
    visible: reduced
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: [0.4, 1], y: [lift, 0], transition: { ...entrance, delay } },
  });
  const diagramStep = (delay: number): Variants => ({
    readable: { opacity: 1, y: 0 },
    diagram: reduced
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: [0.35, 1], y: [8, 0], transition: { duration: 0.6, ease, delay } },
  });
  const connector = (delay: number): Variants => ({
    readable: { scaleY: 1 },
    diagram: reduced
      ? { scaleY: 1, transition: { duration: 0 } }
      : { scaleY: [0, 1], transition: { duration: 0.32, ease, delay } },
  });

  return (
    <section id="why-a3i" aria-labelledby="why-a3i-title" data-motion={reduced ? 'reduced' : 'full'}
      className={`${styles.section} px-5 pb-8 pt-16 text-[#071D3A] sm:px-7 sm:pt-20 lg:px-12 lg:pt-24`}>
      <div className="mx-auto max-w-[1200px]">
        <motion.header initial={false} animate="readable" whileInView={reduced ? undefined : 'visible'} viewport={{ amount: 0.25 }}
          transition={{ staggerChildren: reduced ? 0 : 0.07 }}
          className="mb-10 max-w-[760px] text-left sm:mb-12">
          <motion.p variants={reveal(0, 13)}
            className="mb-4 text-sm font-semibold text-[#536B8A]">Why A3i</motion.p>
          <h2 id="why-a3i-title" className="m-0 font-[family-name:var(--display-font)] text-[clamp(34px,4vw,54px)] font-bold leading-[1.12] tracking-[-1.4px]">
            <span className="sr-only">Optimize AI. Build local. Scale impact.</span>
            <motion.span aria-hidden="true" className="block"
              variants={{ visible: { transition: { delayChildren: reduced ? 0 : 0.12, staggerChildren: reduced ? 0 : 0.08 } } }}>
              {headingWords.map((word, index) => <span key={`${word}-${index}`}>
                <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                  <motion.span className="inline-block"
                    variants={{ readable: { opacity: 1, y: 0 }, visible: reduced
                      ? { opacity: 1, y: 0, transition: { duration: 0 } }
                      : { opacity: [0.4, 1], y: ['105%', '0%'], transition: { duration: 0.75, ease } } }}>{word}</motion.span>
                </span>{index < headingWords.length - 1 ? ' ' : ''}
              </span>)}
            </motion.span>
          </h2>
          <motion.p variants={reveal(0.32, 24)}
            className="mb-0 mt-5 max-w-[650px] text-base leading-[1.75] text-[#536B8A] sm:text-lg">
            One platform of Apps, Ants and Agents that quietly does the work your team shouldn’t have to.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} aria-labelledby={`why-benefit-${index}`}
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileInView={reduced ? undefined : { opacity: [0.4, 1], y: [36, 0], scale: [0.98, 1] }}
              viewport={{ amount: 0.15 }}
              transition={reduced ? { duration: 0 } : { ...entrance, delay: twoColumns && index === 2 ? 0.1 : 0 }}
              className={`${styles.benefit} rounded-[20px] border border-[#DCE5F0] bg-white p-7 transition-[translate,border-color,box-shadow] duration-200 hover:border-[#b7c9dd] hover:shadow-[0_10px_30px_#071d3a0a] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-9 ${index === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:p-10' : ''}`}>
              <div>
                <span className={`${styles.icon} mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-[#F2F6FB] text-[#163A63]`}>
                  <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 id={`why-benefit-${index}`} className="m-0 max-w-[25ch] text-[23px] font-semibold leading-[1.3] tracking-[-0.5px] sm:text-[26px]">{title}</h3>
                <p className={`${styles.description} mb-0 mt-4 max-w-[58ch] text-base leading-[1.8] text-[#536B8A]`}>{description}</p>
              </div>
              {index === 0 && (
                <motion.div ref={diagramRef} aria-hidden="true" initial={false} animate={diagramControls}
                  className={`${styles.diagram} mt-8 rounded-2xl border border-[#DCE5F0] bg-[#F2F6FB] p-5 sm:p-7 lg:mt-0`}>
                  <motion.div variants={diagramStep(0)} className="flex items-center gap-3 text-sm font-medium"><span className={`${styles.taskDot} size-2 rounded-full bg-[#163A63]`} />Your task</motion.div>
                  <motion.div variants={connector(0.28)} className="ml-[3px] my-3 h-6 origin-top border-l border-dashed border-[#bacbde]" />
                  <motion.div variants={{ readable: { opacity: 1, y: 0, borderColor: '#DCE5F0' }, diagram: reduced
                    ? { opacity: 1, y: 0, borderColor: '#DCE5F0', transition: { duration: 0 } }
                    : { opacity: [0.35, 1], y: [8, 0], borderColor: ['#DCE5F0', '#163A63', '#DCE5F0'], transition: { duration: 0.7, ease, delay: 0.6 } } }}
                    className={`${styles.model} flex items-center gap-3 rounded-xl border border-[#DCE5F0] bg-white px-4 py-5 text-sm font-semibold`}><Gauge size={21} strokeWidth={1.6} />The right model for the job</motion.div>
                  <motion.div variants={connector(1.05)} className="ml-[3px] my-3 h-6 origin-top border-l border-dashed border-[#bacbde]" />
                  <motion.div variants={diagramStep(1.37)} className="flex items-center gap-3 text-sm font-medium"><Check size={18} />Focused output</motion.div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.nav aria-label="Explore industries" initial={false} animate="readable" whileInView={reduced ? undefined : 'visible'}
          viewport={{ amount: 0.2 }} transition={{ staggerChildren: reduced ? 0 : 0.07 }}
          className="mt-10 border-t border-[#DCE5F0] pt-8 sm:mt-12">
          <p className="mb-5 mt-0 text-left text-sm font-medium text-[#536B8A]">Built for teams like yours</p>
          <div className="flex flex-wrap justify-start gap-3">
            {industries.map(({ name, slug }) => (
              <motion.div key={slug} variants={reveal()}>
              <Link href={`/industries/${slug}`}
                className={`${styles.industryLink} group inline-flex min-h-11 max-w-full items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-medium no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#163A63]`}>
                {name}<ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      </div>
    </section>
  );
}
