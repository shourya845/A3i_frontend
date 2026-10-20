# A3i-Accel Frontend

A responsive marketing frontend for A3i-Accel, built with Next.js, React and TypeScript. It presents AI products, explains Apps / Ants / Agents, and lets visitors explore example workflows and request a demo.

## Features

- Scenic homepage hero with product and demo calls to action.
- Responsive navigation with product, industry and company dropdowns.
- Six-product showcase with sticky illustrations.
- Animated Why A3i section with a task-to-output diagram.
- Nine interactive workflow examples and a filterable accelerator carousel.
- Apps / Ants / Agents overview and closing demo section.
- Glass-effect login preview with password visibility control.
- Chat widget and demo-request form connected through server-side API proxies.
- Imported product, company, industry and resource content pages.
- Keyboard focus styles and support for reduced-motion preferences.

## Technology

| Area | Tools |
| --- | --- |
| Framework | Next.js App Router, React |
| Language | TypeScript |
| Styling | Tailwind CSS, global styles and CSS Modules |
| Motion | Motion, GSAP |
| UI utilities | Lucide icons, Swiper, Tippy.js, Lottie |
| Optional backend | Separate Python / FastAPI service |

## Run locally

Use Node.js **20.9 or newer** and npm.

```bash
git clone https://github.com/shourya845/A3i_frontend.git
cd A3i_frontend
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Press **Ctrl + C** in the terminal to stop the server.

### Production preview

```bash
npm run build
npm run start
```

### Checks

```bash
npm run typecheck
node scripts/verify-frontend.mjs
npm run build
```

The frontend verification script checks imported routes, local assets, links and workflow data. It does not verify live backend services.

## Environment configuration

The frontend can be explored without configuring a backend. To enable integrations, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

| Variable | Purpose | Default |
| --- | --- | --- |
| `A3I_API_URL` | Server-side URL of the separate assistant backend | `http://127.0.0.1:8000` |
| `A3I_ENABLE_MARKETING_INTEGRATIONS` | Enables optional configured marketing embeds | `false` |

See [.env.example](.env.example) for the optional service settings. Keep private credentials out of browser code and Git.

## Backend and current limitations

The Python backend is a separate project and is **not included in this repository**.

- **Chat:** `/api/chat` forwards messages to the backend's streaming chat endpoint. The backend and its model/search services must be available for replies.
- **Demo requests:** `/api/leads` forwards confirmed contact details to the backend. A saved request is not a calendar booking, and the frontend does not send an email.
- **Login:** the glass login screen is a frontend preview. It does not authenticate users or transmit/store passwords. Social sign-in is disabled, and password recovery is not connected.
- **Imported pages:** original site scripts are not executed. Imported forms and live tools may require their own backend integrations.
- **Marketing services:** optional embeds remain disabled until account settings are supplied.

## Project structure

```text
src/
  app/                  Pages, API routes and shared styles
    api/chat/           Chat proxy
    api/leads/          Demo-request proxy
    login/              Glass login preview
    products/[slug]/    Product pages
  components/
    chat/               Assistant interface
    forms/              Demo-request form
    home/               Homepage sections and illustrations
    layout/             Header, footer and navigation
    products/           Imported content rendering
    ui/                 Shared UI elements
  content/              Product and navigation data
  hooks/                Shared React hooks
  lib/                  Frontend and server utilities
  types/                Shared TypeScript types
public/                 Images, logo and local assets
scripts/                Import and verification utilities
tests/                  Existing project checks
docs/                   Architecture, design and evaluation notes
```

## Documentation

- [Product requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design direction](docs/DESIGN.md)
- [Frontend import details](docs/FRONTEND_IMPORT.md)
- [Third-party notices](THIRD_PARTY_NOTICES.md)

## Assets and attribution

A3i branding and supplied website assets belong to their respective owners. Third-party code and references are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This repository does not grant additional rights to those assets.
