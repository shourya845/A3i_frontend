# Architecture

## Planned stack
Next.js App Router, TypeScript, and Tailwind CSS, deployed on Netlify. Versions and dependencies will be selected during implementation.

## Structure
- `src/app`: page routes, root layout, global styles, and API route handlers.
- `src/components`: reusable UI, layout, homepage, product, chat, and form components.
- `src/content`: approved company, product, workflow, navigation, and FAQ content.
- `src/lib/server`: server-only agent orchestration, grounding, model adapter, and lead persistence adapter.
- `src/lib/validation.ts`: shared request validation schemas.
- `src/types`: shared product, chat, and lead types.
- `tests`: grounding, validation, and critical visitor journey checks.
- `public`: official logo and static assets.
- `docs`: requirements, technical decisions, design direction, and current state.

## Request flow
1. Page components read approved content and render the core narrative on the server.
2. Chat submits to `/api/chat`; the server validates input, routes intent, retrieves approved context, and generates a supported answer or fallback.
3. Demo form and concierge submit confirmed lead details to `/api/leads`.
4. The lead endpoint validates input and calls the configured storage or forwarding adapter.
5. The frontend shows success only after a successful backend response.

## Boundaries
- Keep model calls, secrets, and lead storage on the server; protect server modules with `server-only`.
- Use the same approved content registry for page copy and concierge grounding.
- Keep client components limited to interactive features.
- Validate API input server-side even when client validation exists.
- Do not treat browser state or serverless process memory as durable lead storage.

## Open decisions
LLM provider, lead destination, dependency versions, and hosting account configuration remain unselected. A vector database is not required unless corpus needs justify it.

## Source cleanup — 18 October 2026
The structure above describes intended responsibilities; empty scaffold modules have been removed. The current `src/lib/server/agent.ts` forwards requests to the separate Python backend. Do not recreate validation, model, grounding or lead modules until a real implementation needs them. Retired platform illustration source is preserved as documentation in `docs/archive/`, outside application imports. Keep CSS import order in `src/app/layout.tsx`: the cascade is intentional across shared and imported pages.
