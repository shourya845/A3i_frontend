import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, AudioLines, FileText, ListChecks, Search, ShieldCheck, Send } from 'lucide-react';
import NextoryPreview from './nextory-preview';
import NextoryVisual from './nextory-visual';
import NextoryReveal from './nextory-reveal';
import { NextorySetup, NextoryComparison, NextoryRetention, NextoryPlans } from './nextory-details';
import styles from './nextory.module.css';

const features = [
  { icon: AudioLines, title: 'Notes that get written.', text: 'The bot joins, transcribes and produces a clean summary, so the notes do not depend on someone volunteering.' },
  { icon: FileText, title: 'Notes in your team’s format.', text: 'Keep the summary focused on decisions, next steps, owners and dates, rather than a wall of transcript.' },
  { icon: ListChecks, title: 'Give the next step an owner.', text: 'Bring action items out of the conversation and into a clear follow-up your team can work from.' },
  { icon: Search, title: 'Find the conversation later.', text: 'Search meeting history to revisit a decision with the exact moment it was discussed, rather than searching through a full transcript.' },
  { icon: Send, title: 'The follow-up gets sent.', text: 'Share the recap while the meeting is fresh, with decisions and next steps ready for the team.' },
  { icon: ShieldCheck, title: 'Consent and retention built in.', text: 'Recording notices, participant consent and retention rules are handled through policy, with requirements agreed before rollout.' },
];

const steps = [
  { icon: AudioLines, title: 'Capture the conversation', text: 'Bring the meeting bot into a call, or start with a recording you already have.' },
  { icon: FileText, title: 'Make sense of the meeting', text: 'Turn the discussion into a structured summary with decisions and relevant context.' },
  { icon: ListChecks, title: 'Carry the work forward', text: 'Review the owners and next steps, then share the follow-up with your team.' },
];

export default function NextoryPage() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="nextory-title">
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#products">Products</Link><span aria-hidden="true">/</span><span>NeXtory · AI-Notes</span></nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="nextory-title">Be in the meeting.<br />Leave with a plan.</h1>
            <p className={styles.lead}>Meeting notes, decisions and next steps, brought together. NeXtory helps your team keep the conversation in focus and the work moving afterward.</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/demo">Book a demo <ArrowRight size={19} aria-hidden="true" /></Link>
              <a className={styles.secondary} href="#nextory-workflow">See how it works <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
            <a className={styles.heroPricing} href="#nextory-plans">Explore plans and meeting hours <ArrowRight size={15} aria-hidden="true" /></a>
            <p className={styles.heroFootnote}>Meeting captured. Actions taken.</p>
          </div>
          <NextoryReveal><NextoryVisual /></NextoryReveal>
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.exampleSection}`} aria-labelledby="nextory-example-title">
      <div className={`${styles.container} ${styles.exampleGrid}`}>
        <NextoryReveal><h2 id="nextory-example-title">One place your<br />meetings land.</h2><p className={styles.exampleIntro}>Live meetings and uploaded recordings sit in the same history, with summaries, action items and full transcripts.</p><ul className={styles.checkList}><li>Seven write-up styles, including meeting minutes, class notes, brainstorms and interviews.</li><li>Ask A3i across meeting history, with date-aware questions such as what was decided in March.</li><li>Upload split recordings in order to combine the parts into one meeting.</li></ul><div className={styles.exampleKey}><FileText size={21} aria-hidden="true" /><span>One conversation.<br /><strong>Three ways to move forward.</strong></span></div><a className={styles.textLink} href="#nextory-sample-panel">Explore the example <ArrowRight size={18} aria-hidden="true" /></a></NextoryReveal>
        <NextoryReveal><NextoryPreview /></NextoryReveal>
      </div>
    </section>

    <section className={`${styles.section} ${styles.workflow}`} id="nextory-workflow" aria-labelledby="nextory-workflow-title">
      <div className={styles.container}>
        <div className={styles.sectionIntro}><h2 id="nextory-workflow-title">A conversation is only the beginning.</h2><p>From the first discussion to the next action, keep the important pieces together.</p></div>
        <NextoryReveal><ol className={styles.steps}>{steps.map(({ icon: Icon, title, text }, index) => <li key={title}>
          <div className={styles.stepTop}><span>0{index + 1}</span><Icon size={22} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p>
        </li>)}</ol></NextoryReveal>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="nextory-features-title">
      <div className={styles.container}>
        <div className={styles.featureHeading}><h2 id="nextory-features-title">Less note-taking.<br />More following through.</h2><p>The useful part of a meeting is what your team can do with it. Keep the summary, the context and the next steps close at hand.</p></div>
        <NextoryReveal className={styles.features}>{features.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</NextoryReveal>
      </div>
    </section>

    <NextorySetup />
    <NextoryComparison />

    <section className={`${styles.section} ${styles.teamSection}`} aria-labelledby="nextory-team-title">
      <div className={`${styles.container} ${styles.teamGrid}`}>
        <NextoryReveal><div className={styles.brandArtwork}><Image src="/reference/assets/products/nextory-hero.webp" alt="NeXtory: every conversation, a new chapter. A supplied product illustration showing meeting context, conversation and next steps." width={1672} height={941} sizes="(max-width: 760px) 100vw, 50vw" /></div></NextoryReveal>
        <div className={styles.teamCopy}><h2 id="nextory-team-title">Stay with the people in the room.</h2><p>Customer calls, team catch-ups and planning sessions all leave work behind. Give that work a home, without making one person responsible for remembering everything.</p>
          <div className={styles.privacy}><ShieldCheck size={25} aria-hidden="true" /><div><h3>Discuss your recording policy before rollout.</h3><p>Consent, recording and retention settings are part of the implementation conversation. Confirm your team’s requirements in a working session.</p></div></div>
          <Link className={styles.textLink} href="/demo">Talk about your workflow <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <NextoryRetention />
    <NextoryPlans />

    <section className={styles.section} aria-labelledby="nextory-faq-title">
      <div className={`${styles.container} ${styles.faqGrid}`}>
        <div><h2 id="nextory-faq-title">Before your<br />next meeting.</h2><p className={styles.faqIntro}>A few things worth knowing.<br />Have another question? <Link href="/contact">Talk to A3i.</Link></p></div>
        <div className={styles.faqs}>
          <details><summary>What is NeXtory?</summary><p>NeXtory focuses on what a meeting leaves behind: the notes, decisions and next steps. The AI-Notes workflow helps turn that conversation into a summary your team can work from.</p></details>
          <details><summary>What comes out of a meeting?</summary><p>A structured summary, decisions and action items with owners and dates. The format can be discussed around how your team runs meetings.</p></details>
          <details><summary>Can I use an existing recording?</summary><p>The supplied AI-Note product information includes recording uploads as well as bot-attended meetings. Confirm supported files and setup with A3i.</p></details>
          <details><summary>Is the example on this page a live product?</summary><p>No. It is an interactive illustration using sample meeting content. It does not record audio, join a meeting or send any of the example actions.</p></details>
          <details><summary>How do I get pricing and a demo?</summary><p><a href="#nextory-plans">Compare the plans</a> shown in the official-site recording, then <Link href="/demo">request a demo</Link> to confirm current pricing, meeting volume and setup. A demo request is not a confirmed appointment or subscription.</p></details>
        </div>
      </div>
    </section>

    <section className={styles.closing} aria-labelledby="nextory-demo-title"><div className={`${styles.container} ${styles.closingInner}`}><div><h2 id="nextory-demo-title">Make your next meeting<br />the start of something.</h2><p>Let’s explore where NeXtory fits in your team’s day.</p></div><Link className={styles.primary} href="/demo">Book a demo <ArrowRight size={19} aria-hidden="true" /></Link></div></section>
  </div>;
}
