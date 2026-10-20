import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

export default function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="workflow-steps">
      {steps.map((step, index) => (
        <li key={step} style={{ "--step": index } as CSSProperties}>
          <span>{index + 1}</span>
          {step}
          {index < steps.length - 1 && (
            <ArrowRight size={16} aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
