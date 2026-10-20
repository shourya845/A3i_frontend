# Netlify deployment handoff

Status: instructions prepared; no site has been published by this document.

Backend update, 20 October 2026: the user deployed the Python service at `https://a31-assistance.onrender.com`. Its OpenAPI schema exposes `/chat`, `/chat/stream` and `/leads`, and a direct streaming chat request returned HTTP 200 with NDJSON session, answer-delta and done events. Local `.env.local` now sets `A3I_API_URL` to this address and remains ignored by Git. Configure the same server-side variable in Netlify when deploying the frontend. This check does not establish production lead persistence, uptime or complete assistant accuracy. `/health` currently returns 404; do not select it as a Render health check without adding that endpoint separately.

Official reference, reviewed 19 October 2026: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/

## Frontend

Push the reviewed frontend to the user's GitHub repository, excluding `.env`, `.next`, `node_modules`, `.tmp` and private lead data. Connect that repository in Netlify and use the Next.js framework detection, build command `npm run build` and publish directory `.next`. Commit the lockfile and use a Node version supported by the installed Next.js release. Keep the automatic Netlify Next.js adapter; do not convert this app to a static export because `/api/chat` and `/api/leads` require server execution.

No custom adapter dependency or redirect-all rule is needed. This preserves the existing application configuration.

## Backend boundary

The frontend proxies to `A3I_API_URL` on the server. The local default `http://127.0.0.1:8000` works only when Python runs on the same machine. A Netlify function cannot reach the developer's laptop through that address.

Before publishing working chat, provide a reachable HTTPS Python API and set `A3I_API_URL` in Netlify's server environment. Keep model/search keys in the Python service, never in `NEXT_PUBLIC_*` variables. Ensure its lead database is stored on durable storage. A process-local SQLite file on ephemeral hosting does not satisfy durable capture.

Local backend layout currently has `main.py` in the Chatbot root; run from that folder:

```powershell
.\.venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000
```

Recheck layout before using a command: `app.main:app` is appropriate only if the backend actually contains `app/main.py`.

## Release checks

1. TypeScript, production build and imported-route verification pass.
2. Confirm the published homepage, product route and demo route respond correctly.
3. Chat streams a supported answer; off-topic requests are refused; failures remain honest.
4. Submit synthetic demo details only after approval of the destination; verify persistence and retry behavior without duplicate leads.
5. Record production Lighthouse mobile/desktop results and manual keyboard/mobile checks.
6. Keep optional marketing embeds disabled until account ownership and settings are supplied.

## Existing changes requiring approval

The current root metadata asks crawlers not to index pages. Decide whether this assignment preview should remain private to search engines before changing it. Do not silently remove that setting. Product names, public copy, UI, API behavior and dependency changes also require the user's agreement in this completion pass.

## External inputs still needed

GitHub repository URL and publishing access; Netlify project/account access; approved backend hosting and persistent storage; Figma destination for design deliverables. Do not put credentials in this document.
