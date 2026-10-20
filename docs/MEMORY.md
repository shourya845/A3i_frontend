# Project Memory

Last updated: 2026-10-17.

## Current state
- User supplied the assignment, company website, research PDF, and official logo image.
- A Next.js structure was recommended and the user requested these project documentation files.
- The workspace was empty before the documentation scaffold was created.
- The recommended folders and empty source, test, and configuration placeholders are now present at the user's request.
- No implementation code, dependencies, executable tests, Figma screens, or deployment have been created.
- Configuration placeholders, including package.json and tsconfig.json, are intentionally empty and are not runnable configurations.

## References
- Company website: https://a3i-accel.com/
- Assignment: `C:/Users/Asus/Downloads/A3i_Assignment_3_Frontend_v2-1-1.docx`.
- Research: `C:/Users/Asus/Downloads/A3i‑Accel Frontend v2 — Redesign Research and Prioritised Feature Tracker-1.pdf`.
- Supplied logo: `C:/Users/Asus/AppData/Local/Temp/codex-clipboard-2f822c7f-6b11-4433-bfe7-4f407458c7e7.png`.
- The supplied logo has been copied to `public/logo.png` for durable project storage.

## Agreed direction
- Clarity, workflow evidence, and demo conversion guide the redesign.
- Website and concierge should share approved content.
- Both form and concierge should use `/api/leads`.
- Use the existing workspace as project root; do not create an extra nested project directory.

## Open questions
- Canonical naming: SpeedHire vs SpeedRec, H3iVE casing, Invenio AI, A3i Video Studio, and 3i Voice Assist relationships.
- Approved product descriptions, model provider, and durable lead destination.
- Exact colour tokens and accessible interpretation of the palette restriction.

## Navigation implementation
- User authorised building only the navigation, following the official screenshots.
- Implemented Next.js 16, React 19, TypeScript, and Tailwind 4 configuration with npm lockfile.
- Header, mobile accordion, shared panel components, and navigation content are implemented.
- Official product images are stored locally. Menu labels/statuses follow the user's supplied screenshots, independently of unresolved portfolio naming.
- Unbuilt destinations show a notification; no lead or login functionality is claimed.
- Reserved empty routes are renamed with `.placeholder` suffixes to avoid invalid App Router modules.
- Production build passed; desktop dropdowns, Escape behaviour, and mobile accordions were checked in the browser.
- Earlier scaffold-only status above describes the previous milestone; navigation code and dependencies now exist.

## Next milestone
Review the hero with the user, then build further sections only when requested.

## Hero implementation
- User selected a full-width scenic hero with white headline, supporting text, two buttons, and brand motto.
- Copied the supplied background unchanged to `public/images/hero-background.jpg`; the user chose to retain its sunset colours.
- Implemented responsive hero text and an optimised Next.js background image with readability overlays.
- Explore products opens the existing desktop Products dropdown or mobile Products accordion and moves focus into the navigation.
- Book a demo remains a preview-only button as requested; no booking or lead submission is implemented.
- Apps / Ants / Agents strip remains unbuilt in this step.
- Checked the hero visually on desktop and verified the product action on desktop and mobile.

## Hero reference revision
- Updated to the user's latest reference: oversized Georgia serif headline across three desktop lines, dark navy header, serif wordmark, and a bottom translucent panel containing revised copy, motto, and both actions.
- Retained existing dropdown content and direct Services behaviour; no Services dropdown contents have been supplied.
- Desktop and 390px mobile layouts visually reviewed; prior production build passed before a final CSS-only headline fit adjustment.


## Automation section
- Added the screenshot-based Apps / Ants / Agents section below the hero with original tier photos from the official site, Lucide icons, pale-blue background, and responsive white cards.
- Original asset paths were confirmed in the user-supplied HTML. No extra page routes or CTA flows were added.


## Public frontend expansion
- User authorised building the complete public frontend from the supplied official HTML/CSS, preserving prior layout work; user does not have a source ZIP.
- Added homepage product portfolio, Why A3i, nine interactive workflow examples, accelerator filters/carousel, final CTA, and footer.
- Imported 56 public page partials using the exact file convention present in the original index/app loader, including five product pages and 51 marketing/workflow pages.
- Original CSS is scoped to imported surfaces. Page assets and icon fonts are local; executable original scripts and form actions are stripped.
- Header destinations now navigate to local routes. Imported forms explicitly remain previews; login and unimplemented original tools explain their unavailable integration.
- Preserved pre-existing a31 chat, demo form, and API proxy implementation found in the workspace; no backend logic was overwritten.
- Build, source/asset/link verification, and HTTP checks of 60 routes passed. Representative desktop/mobile browser checks passed.
- Full details and limitations are documented in FRONTEND_IMPORT.md. Next step is user screenshot feedback and targeted refinements.

## Motion and integrations
- Added GSAP/ScrollTrigger/SplitText, Swiper, Lottie Web, and Tippy.js with reduced-motion handling and cleanup.
- Header is sticky; mobile menu locks background scrolling. Accelerator carousel supports touch, buttons, keyboard, and filters.
- Optional third-party loader scaffold is disabled by default; no A3i provider accounts have been supplied. User asked where to obtain installation values; use official provider setup links.
- Webflow/jQuery/WebFont Loader and Webflow-specific wrappers are not duplicated in the React app; equivalent behaviours and rationale are in MOTION_AND_INTEGRATIONS.md.
- Existing assistant and backend request behaviour preserved. Lottie only renders as an activity indicator during busy state.

## Motion refinement
- Centralised GSAP timing/setup in src/lib/motion.ts; kept its React lifecycle wrapper small.
- Added motion.css and reusable WorkflowSteps for readable, editable interaction styling.
- Replaced assistant launcher text with official logo and accessible open/close controls.
- Build/TypeScript and desktop/mobile interaction checks passed. Backend calls and optional provider accounts were not exercised.

## Product video reference
- Replaced homepage five-card portfolio with six two-column product stories: NeXtory, H3ive, SpeedRec, Invenio, Video AI, Send3r, from the supplied company graphic.
- Reviewed the 12-second recording using extracted frames. Implemented scroll-linked copy/preview reveals with GSAP, no pinned scrolling, and the existing reduced-motion guard.
- Content is in product-stories.ts, layout in product-grid.tsx, styles in product-stories.css, animation in lib/motion.ts.
- Preview interfaces are explicitly illustrative. CTAs use /demo until real destinations are supplied; original navigation and imported product pages remain unchanged pending naming/route confirmation.
- Production build/TypeScript passed. Browser verified six rows, scroll transforms changing from 65px to 0, and single-column mobile layout without horizontal overflow.

## Confirmed sticky product showcase
- User clarified the Echo reference: one persistent preview on the right; six descriptions scroll on the left; preview switches in both scroll directions.
- Replaced independent row reveals with CSS sticky and a small requestAnimationFrame-throttled scroll selection effect in product-grid.tsx. Removed superseded product GSAP logic from lib/motion.ts.
- Shared ProductPreview renders desktop transition layers and mobile inline previews. Inactive desktop layers are hidden from accessibility; focus on product links selects the matching preview.
- Reduced-motion uses instant changes. Mobile uses normal reading order with inline previews, no sticky panel.
- Build and TypeScript passed. Browser verified forward/back product selection, sticky top staying at 100px, Video AI keyboard selection, and mobile fallback/no horizontal overflow. Illustrative content and generic demo destinations remain pending real product assets and routing confirmation.

## Local assistant connection restored
- Screenshot error traced to no listener at 127.0.0.1:8000; the frontend proxy was returning its network-failure 503 fallback.
- Started existing sibling Chatbot FastAPI service using its virtual environment. Ollama port 11434 was already listening.
- Verified hello through the browser widget returned the backend greeting without an error. This does not verify factual retrieval/model answers.
- Added local restart guidance to README. Backend remains a separate local process; it must stay running.

## Homepage and shared shell cohesion pass
- Unified six product names across navigation and footer with the homepage registry; removed unconfirmed live/early-access badges from the new navigation.
- Product destinations now target the matching homepage article, with scroll offset below the sticky header. Original imported detail pages and historical routes remain available with their supplied content.
- Added shared visual tokens and typography/layout rules in design-system.css; reduced oversized cards, heavy shadows, spacing mismatches, and inconsistent control shapes.
- Added reusable ProductPreview with six different explanatory diagrams in product-preview.tsx, preserving the approved sticky sequence and inline mobile fallback.
- Removed SplitText heading effects and generic card reveals. Retained minimal hero motion and user-triggered transitions.
- UI branding now says A3i Assistant. Backend, message streaming, lead submission, and secret configuration were preserved.
- Final production build/TypeScript passed; import verification passed for 56 routes and 9 workflows. Browser checks covered product-menu destinations, desktop sticky selection, mobile navigation/layout, chat open/close, keyboard workflow selection, carousel next, and footer contrast.
- Real screenshots, published product detail mapping, and full factual-chat evaluation remain separate pending work.

## Official Products dropdown restored
- User requested retaining the screenshot's official navigation products: AI-Note, AI-Hire, AI-Lead, AI-Advisor, AI-Marketing, with original photos and Live/Early access badges.
- Restored navigation data from the original portfolio and original product page destinations. Homepage sticky stories and other design refinements are preserved. This explicit preference supersedes the earlier shared-name navigation choice.

## Hero button refinement
- Added CSS-only sliding arrow interaction inspired by the selected Uiverse button, using white/navy colours and fixed 8px corners.
- Hero CTAs use 52px height and 16px text. Book a demo links to /demo; Explore products opens the original Products dropdown.
- Added focus-visible treatment and reduced-motion rules. Production build passed; browser verified menu opening, keyboard focus and mobile sizing without button overflow.


## Approved company-motto hero
- Replaced repetitive-work headline with Company that gets work done. Built around your business. matching selected mockup.
- Removed bottom conversion panel; tagline and animated CTAs now follow headline directly. Preserved original background, navigation, logo and menu behaviour.
- Updated GSAP entrance target to the new tagline/actions. Responsive mobile wrapping verified without horizontal overflow; production build passed.


## Framer recommendations setup
- Installed Motion for React as requested; Lucide React and lottie-web were already installed. Existing visual behaviour is unchanged until Motion is used.
- Recommended Framer editor plugins require access inside a Framer project. Supplied Framer folder currently redirects to login in the task browser; no editor plugins installed yet.


## Interactive hero with Motion
- Motion for React now owns gentle copy entrance and CTA hover/tap feedback, with useReducedMotion support. Removed duplicate GSAP text entrance; existing background parallax retained.
- Added native See how it works anchor to Apps/Ants/Agents section. Browser verified destination heading at 115px below viewport top and correct fragment.
- Production build/TypeScript passed; screenshot saved in .tmp/design-cohesion/hero-interactive.png. No Framer editor plugins were installed or claimed used.


## Navigation interaction refinement
- Added 200ms dropdown fade/8px slide, clearer hover/focus backgrounds and focus outlines. Original five product cards preserved.
- Extracted shared ButtonArrow for hero and desktop/mobile Get Started controls. Existing reduced-motion global rules and arrow fallback apply.
- Production build passed. Browser verified Products ArrowDown opening, original items, 200ms animation, Escape close, mobile menu open/close and 350px mobile CTA within 390px viewport.


## Homepage narrative reordered
- Added PlatformIntro after hero with clear everyday-work message, brief Apps/Ants/Agents definitions, workflow anchor and services link.
- Moved full AutomationModel below WorkflowShowcase. Preserved six-product sticky stories, Why A3i, nine-example carousel, closing CTA and footer.
- Hero scroll cue targets platform introduction; shortened desktop product row heights and clarified carousel discovery copy.
- Production build passed. Browser confirmed exact section order, working intro anchor, and one-column mobile intro without horizontal overflow (375px page/client width).


## Original platform band selected
- User selected original screenshot instead of workflow-preview alternative. PlatformIntro now uses existing band-accel.webp, sans-serif Supercharge Every headline with five rotating topics, services/demo links and circular Talk to Accel control.
- Added pause/play and reduced-motion support. Circle opens the shared existing text assistant through a local event; helper text makes clear it is text, not a live voice integration. Closing chat restores focus to this control.
- Production build passed. Browser verified pause state, circle opening existing chat, close/focus return, original background and mobile page/client width equality (375px). Screenshot: .tmp/design-cohesion/platform-original-band.png.


## Talk to Accel left inactive
- At user request, removed the platform circle's chat event and helper text. It is a visual button only. Removed the corresponding widget listener; floating assistant remains independent.


## Product demo buttons and background
- Added separate Request a demo CTA to all six stories, linking to /demo. Existing Ask about links remain unchanged pending user-provided product URLs; do not claim product navigation is complete.
- Saved supplied wave artwork copy at public/images/backgrounds/product-showcase.webp and applied to desktop/mobile illustration panels.
- Production build passed; browser verified six demo buttons and local background URL. Asked user for all six product URLs and local/external preference; answer pending.


## Original source product destinations recovered
- Re-read original supplied HTML product overlay anchors: NeXtory -> sol-notes-ai, SpeedRec -> ind-recruiters, Send3r -> https://send3r.a3i-accel.com/, Invenio and Video AI -> contact. Original H3ive card has no link.
- Added href values to product-stories registry and restored five Ask about destinations using local routes for original data-nav targets. H3ive shows only Request a demo. All six demo actions retained.
- Build/TypeScript passed; browser verified all rendered hrefs. This supersedes prior request for URLs.


## Six-product showcase visual refinement
- Added supplied photographic assets to productStories and reusable ProductPreview; kept explanatory labels and existing diagrams, without claiming actual product screenshots.
- Refined showcase type/spacing, widened sticky column, added six named jump anchors with current-location indicator, and simplified demo CTA styling. Preserved recovered hrefs and hero/nav.
- Build/TypeScript passed; browser verified NeXtory/H3ive jump/reverse selection and sticky top 100px. Desktop active layer content height equals available 594px; six mobile panels fit without horizontal overflow (375px page/client width).
- Evidence: .tmp/design-cohesion/products-hulio-desktop.png and products-hulio-mobile.png.


## Verified source and CSS cleanup
- Inspected source references, dynamic imports, imported HTML and file contents before removal. Removed 20 empty source/route scaffold files and three empty test files; none contained implementation or reference data.
- Preserved the unused PlatformWorkflow component and retired CSS snippets in docs/archive, including the Documents/Meetings/Translation examples, keyboard handling and motion behavior. A full pre-cleanup source snapshot remains locally under ignored .tmp/cleanup-backup/src.
- Removed 43 reviewed retired CSS rules and 161 declarations superseded by a later identical selector/property/importance in the same at-rule context. Kept winning declarations in their original cascade positions and reformatted four active stylesheets. Imported reference.css, assets, active backend proxy, dynamic chat/motion modules and dependencies were retained.
- TypeScript, production build (64 pages) and imported content verification (56 routes, assets/links, nine workflows) passed. Before/after comparison of 36 computed properties across 884 homepage elements matched exactly at 1280x800 and 390x844, excluding animated/variable content. Official product dropdown, forward/back sticky selection, chat open/close and mobile menu checked; mobile page/client widths both 390px and six inline illustrations retained.
- This is a frontend cleanup verification, not a new backend answer or lead-submission test.


## Why A3i bento redesign
- Updated only WhyA3i and its superseded stylesheet rules. Preserved the supplied headline, subtitle, all three descriptions and five industry routes.
- Uses existing Tailwind, Motion and Lucide packages: full-width Cost card with a decorative task/model/output illustration, two supporting cards, 20px corners, restrained borders/shadows and industry pills.
- Desktop/tablet use two columns with the Cost card spanning both; mobile stacks. Motion fades remain readable before reveal, reduced motion disables fades/elevation/transitions, and industry links have visible keyboard focus.
- Production build/TypeScript passed (64 pages). Browser checked 1280/768/390/320 widths: no overflow or card clipping, all industry targets unchanged and 46px link heights. Clinics navigation verified, hover elevation/shadow verified, no console errors observed.
- Screenshots in .tmp/why-a3i/. No backend/API or unrelated component changes, no new dependencies.

## Imported page banner removed
- Removed the permanent Frontend preview banner from shared ReferencePage, covering every imported route. Contextual disconnected-tool/form feedback retained. Production build passed; generated HTML and live AI-Note route checked for banner absence.

## Why A3i motion sequence — 19 October 2026
- Scoped implementation to why-a3i.tsx, retaining all content, palette, typography, bento sizing and industry destinations. Reuses motion/react plus the existing reactive reduced-motion hook; no dependencies added.
- Label leads masked word reveals (80ms intervals), then supporting copy. Cards rise 36px from 0.98 scale with an 800ms low-bounce spring; the second card in a shared row receives a 100ms delay, omitted on single-column layouts.
- Diagram has independent once-only in-view controls: task, downward connector, model with brief border emphasis, second connector, checked output. Industry pills reveal at 70ms intervals; arrows respond to hover and keyboard focus.
- Default server HTML stays readable (initial=false plus readable variants). Reduced mode removes entrance triggers, settles diagram controls, and retains existing CSS reduced-motion interaction rules. This current user-requested section motion supersedes earlier guidance against generic heading/card entrances for this section only.
- Production build/TypeScript passed (64 pages). Real browser captured staggered word matrices and a partially drawn first connector with model/output waiting. Keyboard focus produced a visible outline and 2px arrow movement. Width checks at 1280/768/390/320 showed no page overflow, heading overflow or card clipping. Browser reported no console errors.
- Real SSR render checks exercised both reduced and full modes, confirming readable output and all five industry links; browser was checked in normal-motion mode, without OS media emulation. Evidence and checks are in ignored .tmp/why-motion/.

## Compact scenic closing section
- Replaced final CTA with supplied reference headline, supporting copy, motto, existing road background and readable navy shading. Desktop banner is approximately 442px tall; mobile uses natural content height.
- Book a demo retains /demo. Explore products reuses the homepage/header request state to open the official Products dropdown.
- Added a homepage-only compact Footer variant with official five product destinations and Company/Explore columns. Other pages keep the default footer. Preserved LinkedIn and all legal links; Industry leads to the homepage Why A3i/industry links section.
- Styling is Tailwind plus two scoped CSS modules; explicit CTA anchor color avoids the existing global anchor-inheritance rule. No API/backend or dependency changes.
- Production build/TypeScript passed (64 pages). Browser confirmed loaded artwork, navy demo label, working Products dropdown, and no page/heading overflow at 1280/768/390/320 widths. Screenshot: .tmp/closing-section/desktop.png.

## Why A3i alignment and background
- Left-aligned the section introduction and industry navigation with the card grid, retaining all copy, card layout and motion.
- Added scoped background styling using existing soft wave artwork plus a lightweight decorative navy contour SVG at public/images/backgrounds/why-a3i-contours.svg. Pale overlay keeps body copy readable.
- Production build/TypeScript passed (64 pages). Browser confirmed matching heading/card left edges and no horizontal overflow at 1280/390/320 widths; industry pills use flex-start.

## Workflow explorer visual refinement
- Reduced Why A3i bottom padding to 32px and workflow top padding to 36px (28px mobile); measured 69px between the industry links and next section label in the browser.
- Left-aligned See it working, heading and description. Added pale blue section/contour background, navy toolbar/active tabs, white outlined inactive tabs and richer industry pills with navy hover/focus states.
- Added readable viewport entrances and quick tab press/panel transitions through existing Motion. Retained workflow step/outcome animation, keyboard navigation and all nine examples; disabled duplicate detail CSS animation in this scope and respected reduced motion.
- Production build/TypeScript passed (64 pages). Browser verified click/ArrowRight switching to Multi-Language, Home selection, left alignment and no page/panel overflow at 1280/768/390/320 widths.

## Why A3i replay on scroll
- Removed once-only viewport options from the Why A3i heading, cards and industry pills. Diagram now stops/resets to readable when it leaves view and restarts on each re-entry; removed the played flag. This supersedes the earlier once-only requirement at the user's request.
- Production build/TypeScript passed. Browser verified two successive complete heading exits/re-entries and captured nonzero word transforms/opacity during both replays. Reduced-motion behavior retained.

## Assignment completion with Ponytail — 19 October 2026
- Applied installed Ponytail skill: minimal scoped work, no new app dependencies. User requires approval before changing implemented features.
- Wrote previously empty research/evaluation/deployment documents; added design handoff, submission ledger, presentation outline and assistant-change proposal. Research is a five-site primary-source desk review plus three provisional personas, not participant findings.
- User explicitly kept current product names; Figma/GitHub/Netlify creation deferred. Assistant proposal preparation approved, implementation not approved.
- Only app source change is one scoped inactive workflow small-label color in workflow-showcase.module.css, #536578, explicitly approved. Active color/layout/copy/behavior unchanged.
- TypeScript and builds passed (64 pages); imported-route verification passed (56 routes and nine examples); sibling backend existing unittest suite passed all 44 tests. Tests do not establish live factual accuracy.
- Lighthouse 13.5.0 baseline local port 3000: mobile 72 performance/97 accessibility; desktop 98/97. Fresh production port 3002 after contrast fix: accessibility 100, contrast audit passed. No performance improvement claimed.
- Ten-slide editable PPTX created in output/assignment/A3i-assignment-review.pptx; first-party export/import, structure, fonts, geometry validated and every slide rendered/inspected. Notes disclose pending real evaluations and deferred publishing. Existing screenshots are illustrative implementation evidence.
- Remaining work needs approval or real external evidence: supplied-content backend proposal, mobile performance optimization, ten reviewed live answers, five participant tests and deferred Figma/GitHub/Netlify.
- Subsequent current-assistant live baseline invoked agent.chat for ten main questions plus two refusals, without API service startup/lead writes/backend changes. Raw output output/assignment/agent-baseline.json; manual review docs/agent-baseline-review.md. Seven main passes, two partial, one fail; both refusals pass. Industry retrieval missed available facts, contact lacked direct destination and price reply overgeneralized. Provider rate limiting/fallback observed, longest response about 37s. Not acceptance of proposed supplied-content behavior or browser streaming.
- Final deck supersedes the earlier review draft: output/assignment/A3i-assignment-presentation.pptx includes live-baseline and post-contrast results. Structure/font/layout and first-party import checks pass; revised slides rendered and inspected. Local production server restarted on port 3000 to serve approved contrast fix; temporary port 3002 stopped.

## Approved hero loading hint
- User declined backend changes and approved only the first hero loading-hint improvement. Backend source remains untouched; proposal retained as reference.
- Installed Next.js Image docs advise against combining preload and fetchPriority. Replaced preload with loading=eager and fetchPriority=high on the existing hero image. No visual/animation/quality changes.
- Production build/TypeScript passed (64 pages); restarted local production server on 3000. Served HTML verifies both attributes.
- Mobile Lighthouse 13.5.0 after change: performance 72, accessibility 100, FCP 2.7s, LCP 5.4s, TBT 170ms. LCP discovery audit passes. Overall performance unchanged; do not claim improvement. Raw .tmp/assignment-lighthouse-hero-priority.report.json/html. Broader performance edits remain unapproved.

## Approved design toolkit integration
- User approved documenting the existing design, verifying palette, subtle pointer light on desktop product illustrations and consistent product-action hover/focus feedback. Existing content, names, hero, navigation, scrolling and backend preserved.
- ProductGrid adds one small mouse handler and aria-hidden decorative span on the existing sticky wrapper. Media guard requires desktop width, fine hover pointer and no reduced-motion preference. CSS hides overlay otherwise; pointer-events none. No animation loop, dependencies or duplicated component framework.
- Product actions get 160ms state transitions, 3px focus outline and 2px Explore-arrow movement. Reduced-motion CSS removes transition/translation while preserving focus.
- PRODUCT.md records confirmed product context; docs/DESIGN.md documents actual tokens, type and states using Awesome DESIGN.md's documentation approach. No other brand style imported. Realtime Colors palette/font preview was actually opened and inspected; reproducible link recorded. Primary pairs pass calculated contrast.
- React Bits attribution and full upstream license retained in THIRD_PARTY_NOTICES.md and docs/licenses/react-bits-LICENSE.md. Only the lightweight pointer-light pattern adapted; no wholesale 300-line component copy.
- Build/TypeScript passed (64 pages), imported verification passed (56 routes/nine examples), Impeccable scan on product-grid.tsx returned []. Real browser verified nonzero pointer coords, opacity 1, pointer-events none, 3px keyboard outline, arrow matrix translation (2,-2), no overflow at normal desktop and 390px. Mobile hides spotlight/sticky preview and retains inline previews/links. Viewport override reset.
- Assert-based self-check .tmp/toolkit-verification/spotlight-check.cjs validates actual handler's touch/media guards and coordinate mapping. Reduced-motion CSS reviewed; OS/browser preference emulation was not available in this pass. Screenshots .tmp/toolkit-verification/desktop.png and mobile.png. No new Lighthouse score claimed for this pass.

## Why A3i color treatment
- User requested color for the section. Kept copy/layout/motion intact; scoped color roles in why-a3i.module.css with class hooks in why-a3i.tsx.
- Richer pale-blue section, navy first card with white headings and blue-white secondary copy, blue diagram surface with light model step, two blue-tinted lower cards and tinted icons.
- Production build/TypeScript passed (64 pages), Impeccable component scan returned []. Browser confirmed intended computed foreground/background colors and no horizontal overflow at 390px; desktop/mobile screenshots saved in .tmp/why-color/. Viewport reset. Body/diagram text pairs checked with WCAG luminance calculation.
- User subsequently requested a faded low-to-medium treatment for the first card: replaced dark navy with muted #cadbec, diagram #dce7f3, navy text and softer icon colors in the same CSS module only. Layout/content/motion unchanged. Build/TypeScript passed; browser confirmed muted background/navy heading. Screenshot .tmp/why-color/softened.png. This supersedes the dark first-card palette above.
- Latest user supplied a blue shade chart and found the muted card too light. Selected Lapis Blue-inspired #0b528c for the first card, lighter #256596 diagram, white headings and #e1effb body text. Scoped CSS only; no layout/motion changes. Build/TypeScript passed and browser screenshot .tmp/why-color/lapis.png confirms result. This supersedes the pale first-card treatment.

## Hero Explore products destination
- User changed hero action to scroll down to products. Replaced hero callback button with existing MotionLink styled identically, href #products; removed unused Hero prop/caller. Footer/closing CTA and header dropdown behavior unchanged.
- Build/TypeScript passed. Browser click changed hash to #products and placed section at about 115px beneath sticky navigation; no dropdown opened. Screenshot .tmp/toolkit-verification/hero-explore-scroll.png.

## Apps / Ants / Agents motion
- User approved proposed masked heading, staggered card entry, photo zoom and subtle hover lift. Converted automation-model.tsx to a client component using existing motion/react and reduced-motion hook; added scoped automation-model.module.css. Copy, layout, images and backend unchanged; no dependencies added.
- Heading uses 700ms top-to-bottom clip reveal with natural wrapping and 24px rise. Cards rise 28px over 650ms with 100ms sibling offsets and replay on re-entry. Defaults remain readable using initial=false and settled animate values.
- Fine-pointer desktop widths above 900px receive 4px CSS translate lift, soft shadow/border feedback and 500ms image scale 1.04 within clipped frame. Hover is disabled on mobile/touch and reduced-motion devices. Reduced preference disables viewport triggers and sets transition duration/delay to zero.
- Build/TypeScript passed (64 pages), Impeccable scan returned []. Browser captured live staggered opacity/transform differences and heading mask; hover showed translate -4px and image scale 1.0399. At 390px cards stack, no overflow and lift none. Screenshots .tmp/automation-motion/desktop.png/mobile.png; viewport restored.
- Assert-based real Motion SSR check .tmp/automation-motion/check-fallback.cjs passed both full and reduced modes: three readable cards, no hidden server heading/content and no reduced-mode entrance triggers/durations. OS-level preference was not toggled. Local production server restarted with final build.
