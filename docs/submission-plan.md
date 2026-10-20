# Assignment completion ledger

19 October 2026. Preserve implemented features. Any proposed change to existing UI, content or runtime behavior must be described and approved before implementation. Ponytail is the implementation method, not a replacement frontend template.

| Deliverable | Evidence / next action | Status |
| --- | --- | --- |
| Five benchmark teardowns | research.md includes five primary-source reviews | Written desk research |
| Three personas | research.md, explicitly provisional | Written; needs validation |
| Sitemap and design specification | design-handoff.md | Prepared locally; Figma pending |
| Homepage and product desktop/mobile Figma | Need user's Figma destination | Pending external access |
| Working frontend | Existing src; preserve current implementation | Implemented; verify checks |
| Concierge and demo API | Existing proxy and sibling Chatbot | Implemented partially; live acceptance pending |
| Ten factual answers/refusals | agent-baseline-review.md, output/assignment/agent-baseline.json | Live baseline reviewed: 7 pass, 2 partial, 1 fail; two refusals pass; acceptance not met |
| Five-second test | evaluation.md | Needs five real participants |
| Lighthouse ≥90 | Raw reports required | Pending measurement |
| GitHub and Netlify | deployment.md | Handoff prepared; publishing pending access |
| Ten-slide deck | output/assignment/A3i-assignment-presentation.pptx and presentation-outline.md | Ten editable slides and speaker notes created; rehearsal and final acceptance evidence pending |

## Approval queue

1. Assignment product names differ from the approved six-product showcase. User decision: keep existing names. Do not rename or add Voice Assist.
2. Agent scope currently includes official-domain web retrieval. The assignment asks for provided-content grounding. Propose an approved local content source and explicit learn/pricing/demo routing only after reading the actual backend and obtaining agreement to alter its behavior.
3. Any Lighthouse or accessibility failure may require modifying implemented components. Present the concrete finding, proposed diff and expected effect before editing.
4. Public backend hosting and durable lead storage require an agreed destination; do not expose a local model or database automatically.

Do not mark user tests, Figma delivery, deployment or live model accuracy complete merely because a plan or script exists.

## Confirmed user decisions

- Keep existing product names.
- Defer Figma, GitHub and Netlify creation for now.
- Approve only the small inactive workflow-label contrast correction.
- Prepare the assistant change proposal; do not implement it without further approval. See assistant-change-proposal.md.
- Subsequent decision: keep the current backend unchanged. Assistant proposal is reference only, not an active implementation task.
- Approve the first hero loading-hint change only. Follow installed Next.js guidance with eager loading and high fetch priority, preserving all visual properties. Broader performance changes remain unapproved.
