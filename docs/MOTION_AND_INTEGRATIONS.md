# Motion and optional integrations

## Implemented in the frontend
- GSAP 3.15 with ScrollTrigger: hero entrance, desktop background parallax, grouped card entrances, and scroll-triggered heading emphasis.
- GSAP SplitText: accessible word/character splitting for selected homepage headings. SplitType is intentionally not duplicated.
- Swiper 14: accelerator browsing with touch gestures, buttons, focusable keyboard navigation, filtering, inactive-slide focus exclusion, and accessible announcements.
- Lottie Web: an original small activity animation, loaded only while the existing chat waits for a response.
- Tippy.js: hover/focus tooltips on accelerator controls, replacing the Webflow-specific Flowbase wrapper.
- Native React effect: background-scroll locking while mobile navigation is open, replacing the Webflow-specific Finsweet helper.
- Sticky navigation preserves access while scrolling.

Effects are optional enhancements. Core content is present before animation modules load. GSAP context/matchMedia cleanup runs on navigation and preference changes. Reduced-motion users get static content, instant carousel transitions, and no animated activity graphic.

## Not added as duplicate dependencies
Webflow is a separate website platform, not a Next.js package. jQuery would duplicate React DOM management. WebFont Loader is unnecessary for the existing system-font setup. Finsweet and Flowbase are Webflow integration wrappers; equivalent behaviour is implemented using React and Tippy. Only one GSAP version and one text splitter are used.

## Optional account integrations
`MarketingIntegrations` includes an opt-in script-loader scaffold. All third-party services are disabled by default. It is not a completed, tested integration with any provider account.

Set `A3I_ENABLE_MARKETING_INTEGRATIONS=true` only after entering the site's own public installation values from the provider. `.env.example` lists Plausible, Google Tag Manager, Qualified, Chili Piper, Navattic, BugHerd, HubSpot, Mailchimp, and Intellimize fields.

Account-specific router/form/experience setup may require provider-specific initialisation beyond loading a script. Qualified also needs an active experience; Chili Piper needs a configured router. Mailchimp embedded forms need an audience/form destination. None of those are claimed to work from an empty configuration. Do not add both a provider directly and the same provider through GTM.

The existing A3i assistant and demo API proxy remain unchanged. No competitor tokens, IDs, tracking configuration, or customer data were copied. Private API keys belong in server-side configuration, not in public embed script URLs.

## Verification
Production build and TypeScript checks passed. Browser checks confirmed Swiper initialisation, slide navigation, text-splitting markup, and that no optional marketing scripts load with the default configuration. Live third-party accounts and the chat activity animation during an actual backend response have not been tested.

## Readable motion refinement
- Shared GSAP timings and setup live in src/lib/motion.ts; MotionEnhancements only handles loading and cleanup.
- src/app/motion.css contains button/card transitions, sequential workflow steps, and assistant presentation.
- WorkflowSteps is a small reusable component using the original workflow labels; selecting a tab restarts the sequence.
- The assistant uses the official A3i logo in a circular launcher with accessible open/close labels and a close icon.
- Production build and TypeScript passed. Browser checks covered desktop/mobile layout, assistant open/Escape close, workflow arrow keys, and mobile scroll lock/restoration. Reduced-motion fallbacks are implemented; preference emulation was not tested.


## Sticky product showcase (supersedes product row reveals)
The homepage product section now uses native CSS sticky for one persistent desktop visual. A small scroll effect in product-grid.tsx selects the description nearest the viewport centre and CSS transitions switch the preview layers. No new dependency or scroll interception is needed. Keyboard focus updates the preview; reduced-motion changes are immediate. Mobile shows each illustration inline. The previous animateProductStories GSAP function was removed.

## Current motion policy after the visual cohesion pass
Character-level heading effects and generic card entrances were removed. The homepage now keeps its hero entrance and desktop scenery motion, reversible sticky-product transitions, and feedback for user interactions. Core headings render normally. GSAP remains the shared animation library; no extra motion dependency was added.
