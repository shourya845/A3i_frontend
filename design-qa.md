# Hero implementation review — 18 October 2026

Scope: selected company-motto hero only. Source: supplied codex-clipboard-f66812f8 image (1536×1024). Browser CSS viewport: 1536×1024; screenshot provider returns a 1521×990 visible capture. Comparison preserves aspect ratios and excludes capture-edge differences from layout findings.

Evidence: .tmp/design-cohesion/motto-comparison-final.png; motto-hero-desktop.png; motto-hero-mobile.png.

First review: caption sat too close to the captured bottom edge (P2). Raised desktop caption to 40px from hero bottom, mobile to 24px. Rebuilt, captured again, and compared both designs together. Caption now visible and clear of launcher.

Required surfaces reviewed:
- Typography: Georgia display headline, two desktop lines, sans-serif tagline; exact selected motto and tagline. Mobile wraps naturally.
- Layout: removed bottom panel, left-aligned copy and CTAs, open scenic composition, comfortable mobile spacing. Previously approved 52px animated buttons intentionally retained rather than mockup's larger buttons.
- Colours: white text/navy interface and original scenic background retained; secondary button fills white on hover/focus.
- Assets: supplied original background and official aperture logo retained. Mockup's generated road geometry and shared header spacing differ slightly; acceptable existing-asset/scope constraints, not substituted placeholder imagery.
- Content: exact approved headline/tagline/caption, functional Book a demo link and Explore products menu opener.

Validation: production build and TypeScript passed (64 pages); desktop menu opens original five products and Escape closes it. Mobile document width 375px equals viewport client width 375px with 390px browser override (scrollbar excluded); both CTAs fit. Reduced-motion rules preserved. No new backend behaviour introduced.

Remaining P3: minor font/road-crop differences from generated reference; shared header remains existing implementation.

final result: passed
