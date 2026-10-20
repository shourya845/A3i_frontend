# Design handoff for the existing A3i frontend

This documents the approved implementation. It does not authorize redesign. Transfer it to Figma after a destination is supplied; a Markdown specification is not the required Figma artifact.

## Sitemap

- Home `/`: navigation, motto hero, platform introduction, six-product showcase, Why A3i, workflow explorer, Apps/Ants/Agents, nine examples, closing demo CTA, footer.
- Product destinations: use `src/content/products.ts` for original navigation and `src/content/product-stories.ts` for the approved six-story homepage mapping. Preserve the distinction until naming is approved.
- Product design exemplar `/products/ai-note`: existing NeXtory/AI-Note content, product explanation and real demo destination.
- Demo `/demo`: name, company, need and confirmation → `/api/leads` → confirmed saved/error result.
- Company, industry, services and legal: existing local public routes. Imported tools remain previews when their integrations are unavailable.
- Ask A3i: floating launcher → question → streamed answer or retry → independent demo route.

## Required Figma pages and frames

1. Research: benchmark summary, personas and decisions.
2. Sitemap: the actual implemented routes and journeys above.
3. Wireframes: Home desktop 1440px, Home mobile 390px, Product desktop 1440px, Product mobile 390px.
4. Hi-fi: the same four frames using the existing content and styling, captured from the current implementation rather than a new design direction.
5. States: menu open, mobile navigation, chat empty/loading/error, demo validation/success/error.

Use auto-layout, content-driven frame heights and reusable navigation, button, card and form components. Record typography and colors from the actual CSS. Use the official supplied logo and existing assets; do not redraw it or add unsupported claims.

## Wireframe structure

Desktop home: full-width navigation; scenic hero with left content and two actions; platform explanation; product text paired with sticky illustration; left-aligned Why A3i intro and benefit grid; workflow sidebar and detail panel; three-level model; example browser; short scenic CTA; multi-column footer.

Mobile home: navigation with menu control; wrapped hero heading and usable CTAs; stacked sections; product illustration fallback without mandatory pinning; single-column benefits; reachable workflow selector and detail; stacked model; swipe/previous-next examples; compact CTA; wrapping footer links. Floating chat must not cover essential controls.

Desktop product: shared navigation; existing product intro and visual; approved capability content; relevant demo action; shared footer. Mobile product: same reading order with stacked visuals and reachable actions. Imported interactive tools must not be represented as working in Figma unless verified.

## Interaction annotations

- Explore products opens the existing Products dropdown where currently implemented.
- Request demo uses the real demo route; saved request is not a booked appointment.
- Why A3i entrances replay on re-entry, per the user's latest approval; reduced-motion visitors receive settled readable content.
- Product story navigation and workflow controls preserve keyboard operation.
- Talk to Accel visual remains disconnected from chat at the user's request.

## Review before delivery

Compare every Figma frame with the running site at its target width. Verify natural wrapping, focus states, contrast and image crops. Record the Figma URL and frame links in submission-plan.md. Do not claim Figma completion until the actual editable file exists.
