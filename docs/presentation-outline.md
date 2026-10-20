# Ten slide presentation and live demo script

Target: ten minutes of slides and five minutes of demonstration. This is a content outline, not a finished slide deck. Replace pending evidence with verified results before presenting.

## 1 The problem

A growing AI portfolio needs a clear first impression and a direct route to a relevant demo. Show the existing homepage. Explain that success means comprehension and a useful next step, not animation alone. Time: 45 seconds.

## 2 Who the website serves

SMB owner: reduce administration. Operations leader: evaluate repeatable workflows and oversight. Investor: understand the portfolio and business focus. Label these as provisional personas until tested. Time: 45 seconds.

## 3 Research and decisions

Five benchmarks: LangChain, Intercom, Notion AI, Linear and Zapier. Summarize activity-led navigation, concrete product examples and progressive detail. Cite docs/research.md and its primary sources. Distinguish observations from hypotheses. Time: one minute.

## 4 Information architecture

Show homepage narrative, product discovery, company/industry paths and demo conversion. Explain why brief Apps/Ants/Agents context comes before products and a fuller comparison follows examples. Include the final Figma sitemap when available. Time: one minute.

## 5 Design and responsive behavior

Show actual desktop/mobile homepage and one product frame. Explain official logo, navy/black palette, hierarchy, keyboard states and reduced-motion support. State any unresolved assignment palette or naming differences honestly. Time: one minute.

## 6 Frontend architecture

Next.js App Router and TypeScript; Tailwind plus scoped styles; reusable homepage/shared components; content registries; existing Motion/GSAP interactions. Imported public content is sanitized and scoped; original scripts are not executed. Time: one minute.

## 7 Concierge inputs and outputs

Visitor message/session/page path → `/api/chat` → FastAPI `/chat/stream` → typed streamed events. Explain the actual approved source policy, provider requirements, uncertainty and off-topic behavior. Do not describe planned intent routing as implemented. Time: one minute.

## 8 Demo lead flow

Confirmed `{name, company, need}` plus retry request ID → `/api/leads` → FastAPI `/leads` → storage → saved/error UI. Explain that a saved lead is a request, not a calendar booking. Show synthetic data only. Time: one minute.

## 9 Results and limitations

Insert actual build/typecheck, Lighthouse mobile/desktop, ten-question evaluation and five-second test results. Include source reports and test dates. If evidence remains missing, show pending rather than invented scores. Explain any unavailable backend or imported preview limitations. Time: one minute.

## 10 Business benefit and next steps

The intended benefit is clearer discovery and fewer steps to a relevant demo; conversion improvement is not yet measured. Next: resolve naming, complete user validation, production-host the backend safely and validate the published experience. Show repository, Netlify and Figma links only after they exist. Time: 45 seconds.

## Five minute live demo

1. Open homepage and explain offering in plain language (45 seconds).
2. Explore one product and switch a workflow example using keyboard (60 seconds).
3. Ask a supported question, pricing question and off-topic question (90 seconds).
4. Submit approved synthetic demo details; show confirmation only when saved (60 seconds).
5. Show mobile layout and evidence links (45 seconds).

Before rehearsal: start frontend and backend, verify provider readiness without printing keys, use a fresh session and confirm the lead destination. If a live service fails, show the real error and explain the boundary; a recording may be identified as a recording but must not be represented as a live result.
