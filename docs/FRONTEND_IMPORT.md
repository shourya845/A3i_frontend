# Public frontend implementation

Implemented on 2026-10-17 from the user-supplied official index HTML and stylesheet, plus the public partials explicitly referenced by that index.

## Available surfaces
- Existing approved navigation, scenic hero, and Apps / Ants / Agents section are preserved.
- Homepage now includes five product cards, Why A3i, nine selectable workflow examples, accelerator filtering and browsing, a final demo CTA, and the footer.
- Five product pages use the original public content and artwork.
- Fifty-one additional public routes cover services, company, industries, resources, contact, responsible AI, and workflows.
- Navigation and footer destinations point to the local public routes.
- Existing chat, lead API proxy, and demo form logic were preserved. The demo page now shares the site header/footer.

## Source handling
- `src/content/imported/pages.json` contains 56 public page snapshots.
- `src/content/imported/workflows.json` contains the nine examples from the supplied index.
- `src/app/reference.css` is derived from the supplied stylesheet and scoped to `.official-surface` to protect the approved header and hero.
- `public/reference/` contains downloaded original page artwork; original Font Awesome icons are hosted in `public/vendor/fontawesome/`.
- Scripts, inline event handlers, iframes, and form actions were removed from imported markup. Original analytics, authentication, microphone, payment, and upload scripts are not loaded.
- Imported forms remain local previews and explicitly report that nothing was sent. The separately implemented `/demo` flow retains its existing API integration.
- The resources carousel supports previous/next controls and optional autoplay; autoplay starts off.
- Legal links continue to open the official site's legal documents.
- Original product capabilities and case-study statements are reproduced from source, not independently verified. Naming and claim approval remain a content-review task.

## Checks performed
- `npm run build` passed, including TypeScript and static page generation.
- `node scripts/verify-frontend.mjs` verified all 56 imported route records, local asset and internal-link references, nine workflow examples, and the removal of executable original scripts/event handlers.
- HTTP checks returned 200 for 60 local public/preview routes.
- Browser checks covered desktop product layout, AI-Note content, workflow mouse and keyboard selection, mobile portfolio and workflow layouts, and imported contact-form preview feedback.
- No horizontal overflow or broken loaded images was observed in the checked mobile homepage state.

## Remaining integration boundaries
Account authentication, original application dashboards, live AI tools, voice, career applications, and original form submissions need their supporting application files and API configuration. References to these tools open an explanatory preview page rather than claiming they work. Full accessibility, Lighthouse, and every original application interaction have not been audited.

## Maintenance
Edit the React homepage components for layout changes. Edit imported JSON content for small copy changes; inspect and sanitise source again when importing new pages. `scripts/import-reference.py` records the source paths and reproducible import procedure, but importing again will replace the imported snapshots and stylesheet. Avoid rerunning it over manual edits without review.

Additional browser verification: the resources case-study carousel advances correctly using its Next control. Original contact inputs have accessible names, and the contact form shows local preview feedback without submitting a request.

