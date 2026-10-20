# Scoped design toolkit integration

Status: user approved this scoped integration. The existing desktop preview now has a small decorative pointer light; product actions have consistent hover/focus feedback. PRODUCT.md and docs/DESIGN.md document the incumbent system. Backend and content remain unchanged.

## Existing authority

Preserve the current scenic hero, official logo, Georgia display face, Arial body face, navy palette, five-product navigation, six-product story sequence, approved copy and backend. The user's requirement to approve changes remains in force. `docs/DESIGN.md` and current rendered components are the design authority.

## Each tool's role

| Tool | Application to this project | Boundary |
| --- | --- | --- |
| Impeccable | Context-aware refinement, review of actual desktop/mobile output and final scoped defect scan | No automatic redesign or hooks |
| Awesome DESIGN.md | Use its explicit token/spacing/state documentation approach to record the incumbent A3i system | Do not import another brand's fonts, colors or identity |
| React Bits | Adapt the SpotlightCard pointer-light idea to the desktop product preview with minimal local code | No WebGL, continuous effects or replacement text animation |
| Realtime Colors | Preview the existing A3i palette and verify its important foreground/background pairs | Do not randomize or replace approved colors |
| Ponytail | Reuse installed dependencies and existing components; keep the change scoped and explainable | Do not copy a large configurable component when a small equivalent solves the request |

## Proposed changes requiring approval

1. Product preview: low-opacity navy pointer spotlight on fine-pointer desktop devices. Decorative and pointer-events-none, preserving text readability and all product transition behavior. Disable with reduced motion and on touch devices. No new tab stop and no idle animation loop.
2. Product action controls: consistent quick hover/focus arrow feedback and a visible keyboard focus outline. Keep destination, label, button shape and existing layout. Preserve Request a demo and the H3ive demo-only behavior.
3. Add durable product/design context only after confirming the inferred product facts. Link to existing docs rather than introduce conflicting brand guidance.

Expected runtime files: a small UI spotlight helper and scoped styles, plus its placement in product-grid.tsx; product-stories.css for action-state refinements. Exact implementation should reuse the current wrapper and not alter scrolling hooks or content registries.

## Palette baseline

Existing pairs checked mathematically using WCAG relative luminance: navy #0b223c on white, muted #536578 on white and #f3f6f9, white on #163a63. All exceed 4.5:1. The palette was also previewed in Realtime Colors; link in docs/DESIGN.md. These checks do not replace a full accessibility audit.

## Verification after approval

Production build/TypeScript; one batched desktop/mobile browser pass including keyboard and reduced-motion checks; the scoped Impeccable detector; confirm no page overflow, no blocked product links and no new dependency. Measure performance if the added effect creates unresolved concern. Report actual checks and changes; retain all backend behavior.
