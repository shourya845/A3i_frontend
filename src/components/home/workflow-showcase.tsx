"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  Check,
  FileText,
  CalendarDays,
  Languages,
  Mail,
  Mic,
  Target,
  UserRound,
  Keyboard,
  ScanLine,
} from "lucide-react";
import examples from "@/content/imported/workflows.json";
import WorkflowSteps from "./workflow-steps";
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import styles from './workflow-showcase.module.css';
const order = [
  "dataentry",
  "scan",
  "lang",
  "meeting",
  "schedule",
  "email",
  "voice",
  "lead",
  "personal",
];
const workflows = [...examples].sort(
  (a, b) => order.indexOf(a.id) - order.indexOf(b.id),
);
const icons = {
  dataentry: Keyboard,
  scan: ScanLine,
  lang: Languages,
  meeting: FileText,
  schedule: CalendarDays,
  email: Mail,
  voice: Mic,
  lead: Target,
  personal: UserRound,
};

export default function WorkflowShowcase() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState("meeting");
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const active = workflows.find((item) => item.id === selected)!;
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % workflows.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + workflows.length - 1) % workflows.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = workflows.length - 1;
    else return;
    event.preventDefault();
    setSelected(workflows[next].id);
    buttons.current[next]?.focus();
  }
  return (
    <section
      className={`workflow-section content-section ${styles.section}`}
      id="workflows"
      aria-labelledby="workflow-title"
    >
      <div className="content-container">
        <motion.div className={styles.intro} initial={false} animate={{ opacity: 1, y: 0 }}
          whileInView={reduced ? undefined : { opacity: [0.6, 1], y: [18, 0] }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <p className="section-label">See it working</p>
          <h2 id="workflow-title">The mundane work, handled.</h2>
          <p>
            Choose an accelerator to see the task, the steps, and an example
            outcome.
          </p>
        </motion.div>
        <motion.div className="workflow-frame" initial={false} animate={{ opacity: 1, y: 0 }}
          whileInView={reduced ? undefined : { opacity: [0.7, 1], y: [24, 0] }}
          viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="workflow-toolbar">
            <span className="toolbar-mark" aria-hidden="true" />
            <span>Workflow explorer</span>
            <span>Illustrative workflows</span>
          </div>
          <div className="workflow-layout">
            <div
              className="workflow-tabs"
              role="tablist"
              aria-label="Accelerator examples"
            >
              {workflows.map((item, index) => {
                const ItemIcon = icons[item.id as keyof typeof icons];
                return (
                  <motion.button
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    type="button"
                    key={item.id}
                    ref={(node) => {
                      buttons.current[index] = node;
                    }}
                    id={`tab-${item.id}`}
                    role="tab"
                    aria-selected={selected === item.id}
                    aria-controls="workflow-panel"
                    tabIndex={selected === item.id ? 0 : -1}
                    onClick={() => setSelected(item.id)}
                    onKeyDown={(event) => navigate(event, index)}
                  >
                    <ItemIcon size={19} aria-hidden="true" />
                    <span>
                      {item.name}
                      <small>{item.type}</small>
                    </span>
                    {selected === item.id ? (
                      <Check size={16} aria-hidden="true" />
                    ) : null}
                  </motion.button>
                );
              })}
            </div>
            <motion.div
              initial={reduced ? false : { opacity: 0.7, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              key={selected}
              className="workflow-detail"
              id="workflow-panel"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${selected}`}
            >
              <p className="workflow-problem">{active.problem}</p>
              <h3>{active.title}</h3>
              <p className="workflow-description">{active.description}</p>
              <h4>How it works</h4>
              <WorkflowSteps steps={active.steps} />
              <div className="workflow-example official-surface">
                <p className="example-label">Example outcome · sample data</p>
                <div dangerouslySetInnerHTML={{ __html: active.example }} />
              </div>
              <h4>Key integrations</h4>
              <div className="integration-list">
                {active.integrations.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        <p className="workflow-footnote">
          Small teams get an always-on back office. Enterprises get scale
          without headcount. Same platform.
        </p>
      </div>
    </section>
  );
}
