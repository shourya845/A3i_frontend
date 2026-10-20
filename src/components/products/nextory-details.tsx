import Link from 'next/link';
import { ArrowRight, Check, CalendarDays, ShieldCheck } from 'lucide-react';
import { nextoryPlans, nextoryComparison } from '@/content/nextory';
import NextoryReveal from './nextory-reveal';
import styles from './nextory.module.css';

export function NextorySetup() {
  return <section className={`${styles.section} ${styles.setupSection}`} aria-labelledby="nextory-setup-title"><div className={styles.container}>
    <div className={styles.sectionIntro}><h2 id="nextory-setup-title">The product. The setup.<br />A workflow that fits.</h2><p>Understand what you deploy and how A3i helps connect it to your team.</p></div>
    <NextoryReveal className={styles.setupGrid}>
      <article><FileHeading icon="product" title="What you deploy" /><ul className={styles.checkList}>
        <li>A meeting bot that joins video calls and captures the conversation.</li><li>Summaries in your format, with actions pushed to the tools your team uses.</li><li>Searchable history with recording and retention controls.</li><li>Pair it with the <Link href="/workflows/scheduling">Scheduling Bot</Link> for the calendar side of the workflow.</li>
      </ul></article>
      <article><FileHeading icon="setup" title="How A3i gets you there" /><ul className={styles.checkList}>
        <li>Connect your calendar, conferencing and task tools.</li><li>Tune the summary format around your meetings.</li><li>Set consent, recording and retention policy before rollout.</li><li>Review after a month what is being captured and what needs adjusting.</li>
      </ul></article>
    </NextoryReveal>
    <Link className={styles.textLink} href="/demo">Book a working session <ArrowRight size={18} aria-hidden="true" /></Link>
  </div></section>;
}

function FileHeading({ icon, title }: { icon: 'product' | 'setup'; title: string }) {
  return <h3 className={styles.detailHeading}>{icon === 'product' ? <CalendarDays size={22} aria-hidden="true" /> : <ShieldCheck size={22} aria-hidden="true" />}{title}</h3>;
}

export function NextoryComparison() {
  return <section className={styles.section} aria-labelledby="nextory-comparison-title"><div className={styles.container}>
    <div className={styles.sectionIntro}><h2 id="nextory-comparison-title">Built for the follow-up.</h2><p>From keeping a record to keeping the work moving. Here is the workflow difference described in the official product overview.</p></div>
    <NextoryReveal><div className={styles.comparisonScroll}><table className={styles.comparison}><caption>Meeting workflow comparison</caption><thead><tr><th scope="col">Without a follow-up workflow</th><th scope="col">With AI-Notes</th></tr></thead><tbody>{nextoryComparison.map(([before, after]) => <tr key={before}><td>{before}</td><td><span><Check size={17} aria-hidden="true" />{after}</span></td></tr>)}</tbody></table></div></NextoryReveal>
  </div></section>;
}

export function NextoryRetention() {
  return <section className={`${styles.section} ${styles.retentionSection}`} aria-labelledby="nextory-retention-title"><div className={`${styles.container} ${styles.retentionGrid}`}>
    <div><h2 id="nextory-retention-title">Clear notes.<br />Clear recording rules.</h2><p className={styles.exampleIntro}>A3i describes using AI-Note in its own stand-ups, engineering calls and customer sessions. The same workflow covers bot-attended meetings and recordings uploaded later.</p><p className={styles.retentionNote}>The official product overview states these defaults. Discuss consent and your organization’s retention requirements before rollout.</p></div>
    <NextoryReveal><dl className={styles.retentionFacts}><div><dt>7 write-up styles</dt><dd>Match the format to the session: meeting minutes, class notes, brainstorms, interviews and more.</dd></div><div><dt>5-day default</dt><dd>Bot recordings are retained for five days unless a different policy is chosen.</dd></div><div><dt>0 uploaded recordings retained</dt><dd>Uploaded media is deleted once its transcript has been saved.</dd></div></dl></NextoryReveal>
  </div></section>;
}

export function NextoryPlans() {
  return <section className={styles.section} id="nextory-plans" aria-labelledby="nextory-plans-title"><div className={styles.container}>
    <div className={styles.sectionIntro}><h2 id="nextory-plans-title">A plan for your meeting hours.</h2><p>AI-Note has its own subscription. Platform credits cover A3i’s prompt-based apps; this product is licensed separately.</p></div>
    <p className={styles.priceSource}>Plan details from the official AI-Note overview. Confirm current pricing and terms with A3i.</p>
    <NextoryReveal className={styles.plans}>{nextoryPlans.map(plan => <article key={plan.name} className={plan.name === 'Pro' ? styles.featuredPlan : undefined}>
      <h3>{plan.name}</h3><p className={styles.planPrice}>{plan.price}<span>{plan.period}</span></p><p className={styles.planHours}>{plan.hours}</p>
      <ul>{plan.points.map(point => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}</ul>
      <Link href="/demo" aria-label={`Discuss the ${plan.name} plan`} className={styles.planAction}>Discuss {plan.name}<ArrowRight size={17} aria-hidden="true" /></Link>
    </article>)}</NextoryReveal>
    <div className={styles.licensing}><h3>How licensing works</h3><p>In the official AI-Note application, sign in with your A3i account, open Settings, choose your bot’s address and plan, and wait for approval. Once approved, the bot can join the next meeting. Hours are metered monthly across live meetings and uploads, and additional hours can be requested.</p><p>Plan activation takes place in the official AI-Note application. The links here request a demo or plan discussion.</p><Link className={styles.textLink} href="/contact">Talk about Enterprise <ArrowRight size={18} aria-hidden="true" /></Link></div>
  </div></section>;
}
