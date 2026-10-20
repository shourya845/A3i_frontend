# Mobile performance proposal for approval

The user approved the first hero loading-hint change only. In hero.tsx, the preloaded Image now uses `loading="eager" fetchPriority="high"`, following the installed Next.js guide's recommendation against combining preload and fetchPriority. Image source, size, crop, quality and animation are unchanged. All other proposed performance changes below remain unapproved.

Post-change local mobile Lighthouse 13.5.0: performance 72, accessibility 100, FCP 2.7s, LCP 5.4s, total blocking time 170ms. LCP discovery audit now passes. Overall performance did not improve in this run. Report: `.tmp/assignment-lighthouse-hero-priority.report.{json,html}`. Do not expand the change without user approval.

## Measurement

Local production Lighthouse 13.5.0, 19 October 2026: mobile performance 72, desktop performance 98. The mobile run measured FCP 2.7 seconds, LCP 5.4 seconds and total blocking time 180ms. These are one-run baselines and can vary.

## Proposed order

1. In `src/components/home/hero.tsx`, assess adding `fetchPriority="high"` to the existing preloaded Next Image. Keep the image, crop, quality and layout unchanged. The report identified the hero as LCP and flagged its missing high-priority hint. Verify against the installed Next Image docs before applying. Rerun mobile Lighthouse to measure the actual effect; do not promise a score.
2. Review global imports in `src/app/layout.tsx`. The report lists the Font Awesome stylesheet and shared CSS as render-blocking. Determine which imported pages need those assets before proposing route-scoped loading. Moving them can break imported icons or change CSS order, so it requires a separate reviewed diff and imported-page visual checks.
3. Inspect existing GSAP/Motion/Swiper paths before deferring any code. Keep every current interaction and reduced-motion fallback. Only change loading when a measured improvement and regression checks justify it.

## Preservation contract

No library removal, animation removal, hero redesign, image replacement, reduced image quality, product renaming or CSS cleanup is authorized by this proposal. Changes must preserve visible behavior and be approved individually. Stop after the smallest measured fix meets the target; do not rebuild the site to chase a score.

## Acceptance

Compare multiple production mobile runs under the same profile and retain raw reports. Check home, one imported product and demo routes; verify normal and reduced motion, keyboard navigation, mobile overflow and product interactions. Public deployment testing remains deferred.
