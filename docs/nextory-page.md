# NeXtory product page

Route: `/products/ai-note`. Built 20 October 2026 as the assignment's alternative product page. Existing homepage and navigation links already point here; other product routes retain their imported implementation.

## Content and boundaries

The supplied company graphic identifies NeXtory with meeting capture and action outcomes. The imported official Notes AI page (`sol-notes-ai` in `src/content/imported/pages.json`) supplies the summary, action-owner, recording-upload, searchable-history and recording-policy themes. This new page brings that meeting story together under NeXtory / AI-Notes, as requested by the user; it does not establish a legal product rename.

The current official public site is https://a3i-accel.com/#sol-notes-ai. Initial feature copy used the supplied import. The user subsequently supplied `20261020-0748-36.7554001.mp4`, a 24.43-second official-page recording, which was inspected in extracted frames. The recording confirms the product details, plans and recording defaults now presented on this page. Pricing is explicitly attributed to that recording and visitors are asked to confirm current terms. No performance claims or invented customer testimonials are added.

The workspace is an interactive illustration using fictional meeting text. Summary, Action items and Transcript buttons change the visible example. No microphone, recording, upload, transcription or task delivery is implemented or claimed by this frontend. The preview is readable with JavaScript disabled in its default Summary state.

Demo links use the existing `/demo` request form; they do not book an appointment. FAQ accordions use native HTML disclosure controls. Product photography remains in its original colors and is stored locally. Shared navigation, footer, chat and backend behavior are unchanged.

## Implementation

- `src/components/products/nextory-page.tsx`: server-rendered product content.
- `src/components/products/nextory-preview.tsx`: the small client-side example switcher.
- `src/components/products/nextory.module.css`: scoped responsive layout and motion.
- `src/app/products/[slug]/page.tsx`: selects this page for `ai-note` only.

The photo-led hero includes a finite waveform animation (two iterations), with a replay control and a no-recording caption. Scroll reveals use the existing Motion dependency and shared reduced-motion hook, with readable server-rendered defaults. Keyboard workspace view changes are immediate. Photography and the supplied NeXtory artwork retain original colors. No dependencies were added.

Graphic references: https://reactbits.dev/animations/animated-content and https://storyset.com/meeting were reviewed for visual direction. No third-party illustration or component source was downloaded or copied; the page uses the existing supplied artwork and locally authored layout/motion.

The user subsequently selected https://overtake-wbs.framer.website/ as a visual reference. The revised page adopts a centered sans-serif hero, inset rounded light surface, paired photographic/graphic panels, pill-shaped CTAs and alternating dark navy sections. It retains A3i's palette, product photography, recorded features/plans and functional page interactions. No Overtake images, testimonials, customer logos, business statistics or template code are copied.

## Recording content coverage

| Recording content | New implementation |
| --- | --- |
| Product graphic and meeting-focused hero | Original-color hero photo and supplied NeXtory artwork |
| Six capabilities | Notes/transcription, owners/actions, follow-up, summary formats, searchable history, consent/retention |
| Product versus services | What you deploy and the calendar/tools/policy/setup/month-one review |
| Usual workflow versus AI-Note | Semantic comparison table |
| Inside the product | Illustrative summary/actions/transcript workspace, seven write-up styles, date-aware Ask, split-recording uploads |
| A3i's own use and privacy defaults | Source-attributed retention section: seven styles, five-day bot retention, no uploaded media kept after saved transcript |
| Plans | Free $0/5 hours, Pro $29/40 hours, Business $49/60 hours, custom Enterprise/unlimited hours, recorded feature lists |
| Licensing | Separate subscription, platform-credit distinction, account/settings/bot-address/approval flow, monthly metering and extra-hour requests |
| Next step | Demo/working session, scheduling workflow and Enterprise contact links |

Commercial plan buttons request a discussion through the existing demo form; they do not activate payment, authentication or the real meeting product. This distinction is stated in the licensing section. No recording files are shipped as website assets.

Run `node scripts/verify-nextory.mjs` with a running frontend, or set `FRONTEND_URL` to the local verification server. Also run the production build and the existing imported-route verification. Figma screens are a separate assignment deliverable and are not created by this implementation.

Recorded validation: final production build and TypeScript passed (64 pages). Existing verification passed for 56 imported routes and nine workflows; the NeXtory assertion script passed. Browser checks covered 1440px desktop, 390px and 320px widths with no horizontal overflow, all three preview states, Enter activation, visible focus, native FAQ expansion and unfiltered product photography. The reduced-motion CSS guard was inspected; OS preference switching and physical-phone testing were not performed. No demo lead was submitted.
