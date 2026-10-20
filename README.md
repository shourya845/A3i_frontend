# A3i-Accel Frontend v2

Assignment project to research, design, and build a clearer A3i-Accel website with an Ask A3i concierge and demo lead capture.

## Status
The public frontend is implemented using Next.js, TypeScript, and Tailwind, including the approved hero and navigation, homepage portfolio, workflow examples, accelerator browsing, footer, and 56 original public content pages. Existing chat and demo-request integrations are preserved. Original-site applications and imported forms remain explicitly marked previews where their scripts/backend are not connected.

Run `npm install`, then `npm run dev` to preview locally. Use `npm run build` for the production build and `npm run typecheck` for TypeScript checks.

Product photography is sourced from the official website and saved under `public/images/products/`. The supplied logo is stored at `public/logo.png`.

## Project guide
- [Product requirements](docs/PRD.md): purpose, users, scope, and success criteria.
- [Architecture](docs/ARCHITECTURE.md): planned stack, module boundaries, and request flow.
- [Design](docs/DESIGN.md): visual direction, page narrative, accessibility, and motion.
- [Rules](docs/RULES.md): implementation and content working agreements.
- [Memory](docs/MEMORY.md): current state, references, and open decisions.
- [Tasks](TASKS.md): project checklist and remaining milestones.

## Planned folders
`src/` contains React components, shared content, local page routes, imported public page snapshots, and API proxies. Unimplemented reserved App Router files retain `.placeholder` suffixes. The imported frontend verification is available through `node scripts/verify-frontend.mjs`; existing backend-related tests are separate.

## Setup
Requires Node.js 20.9 or newer. No environment variables are needed for the navigation preview. Backend services and deployment remain unconfigured.
## a31-assistance integration

Run the FastAPI backend from the Chatbot folder, then run `npm run dev` here.
`A3I_API_URL` is a server-only setting and defaults to http://127.0.0.1:8000.
The chat widget uses `/api/chat` to proxy the streaming Python endpoint.
It keeps the session ID in sessionStorage, shows loading and retry controls, and
retains the conversation when the panel is closed. New chat clears the session.

`/demo` posts confirmed name/company/need fields through `/api/leads` to SQLite
in the Python project. Submissions reuse an ID on retries to avoid duplicate leads.
No email is sent and this does not book a calendar appointment.

Checks: `npm run typecheck` and `npm run build`.

## Public frontend expansion
The homepage now includes the portfolio, Why A3i, nine interactive workflow examples, accelerator browsing, final demo CTA, and footer. Fifty-six original public content pages are available through local product, company, industry, resource, and workflow routes. Existing chat and demo API integrations are preserved.

Imported HTML/CSS is sanitised and scoped; original site scripts are not executed. Imported forms and unimplemented live tools show explicit preview limits. Read [frontend import details](docs/FRONTEND_IMPORT.md) for source handling and verification coverage. Run `node scripts/verify-frontend.mjs` to check imported routes, links, and assets.

### Assistant unavailable locally
The frontend and Python chat service must both be running. If the widget says the assistant is unavailable, open a terminal in the sibling Chatbot folder and run:

    .\.venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000

Keep that terminal running alongside the frontend. Ollama must also be running; factual website answers require the backend's configured Tavily account. After a backend restart, use New chat if an old conversation has expired.
