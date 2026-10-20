'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './final-cta.module.css';

export default function FinalCta({ onExplore }: { onExplore: () => void }) {
  return (
    <section id="closing-demo" aria-labelledby="closing-demo-title"
      className="relative isolate overflow-hidden bg-[#071D3A] px-5 py-14 text-white sm:px-7 sm:py-16 lg:px-12 lg:py-[72px]">
      <Image src="/images/hero-background.jpg" alt="" fill sizes="100vw"
        className="-z-20 object-cover object-[65%_55%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,20,40,0.88)_0%,rgba(3,20,40,0.65)_45%,rgba(3,20,40,0.08)_100%)]" />
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[760px]">
          <h2 id="closing-demo-title" className="m-0 max-w-[24ch] font-[family-name:var(--display-font)] text-[clamp(34px,4.2vw,60px)] font-bold leading-[1.1] tracking-[-1.4px]">
            What would you take off your team’s plate?
          </h2>
          <p className="mb-0 mt-5 max-w-[52ch] text-lg leading-relaxed text-[#f0f4f9] sm:text-xl">
            Let’s explore a workflow that fits your business.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-7">
            <Link href="/demo" className={`${styles.demo} group inline-flex min-h-[52px] items-center justify-center gap-6 rounded-lg bg-white px-6 py-3 text-base font-semibold no-underline transition-colors hover:bg-[#e8eff7] focus-visible:outline-white motion-reduce:transition-none`}>
              Book a demo<ArrowRight size={21} aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" />
            </Link>
            <button type="button" onClick={onExplore} className="group inline-flex min-h-[52px] items-center gap-4 bg-transparent px-1 py-3 text-base font-semibold text-white focus-visible:outline-white">
              <span className="underline underline-offset-4">Explore products</span><ArrowRight size={21} aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" />
            </button>
          </div>
          <p className="mb-0 mt-6 text-sm leading-relaxed text-[#c7d3e1]">Strong data. Proven execution. Purposeful AI.</p>
        </div>
      </div>
    </section>
  );
}
