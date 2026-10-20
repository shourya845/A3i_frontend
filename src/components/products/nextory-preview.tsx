'use client';

import { useState } from 'react';
import { Check, FileText, ListChecks, AudioLines, ArrowRight } from 'lucide-react';
import styles from './nextory.module.css';

const views = ['Summary', 'Action items', 'Transcript'] as const;
type View = typeof views[number];

export default function NextoryPreview() {
  const [view, setView] = useState<View>('Summary');
  return <div className={styles.preview} aria-label="Illustrative NeXtory meeting workspace">
    <div className={styles.workspaceBar}><span><FileText size={16} aria-hidden="true" /> NeXtory workspace</span><span>Sample meeting</span></div>
    <div className={styles.meetingHeader}><span className={styles.meetingIcon}><AudioLines size={23} aria-hidden="true" /></span><div><h2>Monday, moving forward.</h2><p>Team planning · Illustrative example</p></div></div>
    <div className={styles.viewSwitch} role="group" aria-label="Meeting example views">
      {views.map(label => <button key={label} type="button" aria-pressed={view === label} aria-controls="nextory-sample-panel" onClick={() => setView(label)}>{label}</button>)}
    </div>
    <div id="nextory-sample-panel" className={styles.samplePanel} aria-live="polite" aria-atomic="true">
      {view === 'Summary' && <><p className={styles.panelLabel}>The conversation, made clear.</p><h3>A smaller launch. A clear next step.</h3><p>The team agreed to start with the customer onboarding flow and review the first version together before expanding the scope.</p><div className={styles.decision}><Check size={18} aria-hidden="true" /><span><strong>Decision captured</strong>Start with onboarding. Review before rollout.</span></div></>}
      {view === 'Action items' && <><p className={styles.panelLabel}>What happens next.</p><h3>Everyone knows their next move.</h3><ul className={styles.sampleActions}><li><ListChecks size={18} aria-hidden="true" /><span>Share the updated onboarding outline<small>Priya · Friday</small></span></li><li><ListChecks size={18} aria-hidden="true" /><span>Arrange the first-version review<small>Sam · Tuesday</small></span></li></ul></>}
      {view === 'Transcript' && <><p className={styles.panelLabel}>Keep the context.</p><h3>Back to the original conversation.</h3><div className={styles.transcript}><p><strong>Priya <time>02:14</time></strong>“Let’s start with onboarding and keep the first version focused.”</p><p><strong>Sam <time>02:28</time></strong>“I’ll set up a review for Tuesday so we can agree on the next step.”</p></div></>}
    </div>
    <div className={styles.previewFooter}><span><Check size={15} aria-hidden="true" /> Conversation → next steps</span><ArrowRight size={17} aria-hidden="true" /></div>
    <p className={styles.sampleCaption}>Interactive illustration. Sample content, not a live recording.</p>
  </div>;
}
