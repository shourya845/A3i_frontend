# Design Direction

## Objective
Help visitors understand the offering quickly, see an example, explore relevant products, and request a demo.

## Brand
- Preserve the supplied official logo; the available source is PNG, not SVG.
- Use black and dark blue as the brand palette, following the assignment.
- Confirm precise colour tokens and accessible neutral surfaces/text during design.
- Use strong typography, deliberate spacing, clear hierarchy, and restrained linework.
- Do not add unsupported metrics, testimonials, customer logos, or certifications.

## Homepage narrative
What A3i does → Apps / Ants / Agents → concrete workflow → product portfolio → relevant use cases → responsible AI → demo request.

## Interaction
- Primary CTA: Book a demo.
- Secondary CTA: Explore products.
- Conversational entry point: Ask A3i.
- Keep mobile navigation, forms, and chat operable with keyboard and touch.
- Provide visible labels, focus indicators, and loading, empty, error, and success states.

## Motion
Use subtle transitions to explain state changes and guide attention. Respect `prefers-reduced-motion`, avoid scroll hijacking, and keep essential information available without animation.

## Validation
Review desktop and mobile layouts, colour contrast, focus behaviour, zoom/reflow, and reduced motion. Figma home and product screens remain required deliverables.

## Cohesion pass — 18 October 2026
- Preserve the approved scenic hero and sticky product sequence.
- Navy #0b223c and ink #11283f anchor the brand; muted #536578, panel #f3f6f9, line #dce4eb, and white provide readable surfaces.
- Georgia is the display face; Arial/Helvetica is the interface and body face. Product headings now share the display treatment.
- Shared content width is 1200px. Section spacing, 8px controls, restrained 12px containers, and compact labels are defined in src/app/design-system.css.
- Each product has a distinct explanatory diagram. These are labelled product illustrations, never presented as live interfaces or verified results.
- Product names come from product-stories.ts across navigation, homepage and footer. Navigation links to the matching homepage story while detail-page naming is unresolved.
- Remove character-by-character heading animation and generic card entrances. Retain hero entrance, sticky-product transitions, and interaction feedback with reduced-motion support.

## Approved homepage order
Navigation; scenic motto hero; platform introduction; six-product sticky showcase; Why A3i; interactive workflow demonstration; full Apps/Ants/Agents explanation; nine-example discovery carousel; closing demo CTA; footer.
- Intro defines the three levels briefly before product discovery; full comparison follows the demo.
- Desktop product stories use 440–560px height to reduce scrolling. Carousel copy emphasizes discovering another task.


## Hulio-inspired product showcase
- Apply Hulio's generous whitespace, strong sans-serif headings, image-led previews and restrained CTA styling to six-product showcase while preserving existing hero/navigation.
- Desktop has wider sticky preview with existing company photography above labelled explanatory diagrams. Background artwork remains within panels. Native six-product jump navigation complements scrolling.
- Use Explore labels for actual product destinations, Ask about for contact destinations, and consistent pill-shaped Request a demo buttons. H3ive retains demo only.

## Approved toolkit refinement — 19 October 2026

The user approved documenting the incumbent system, validating its palette, a subtle desktop product-preview spotlight and consistent product-action hover/focus feedback. Preserve other implemented content and behavior. Impeccable informs review; Awesome DESIGN.md informs explicit token/state documentation, rather than importing another brand's design.

| Role | Existing value | Usage |
| --- | --- | --- |
| Primary navy | #0b223c | Navigation and primary controls |
| Ink | #11283f | Main text on light surfaces |
| Muted text | #536578 | Secondary copy on white/light panel |
| Panel | #f3f6f9 | Supporting surfaces |
| Accent navy | #163a63 | Active controls and decorative preview light |
| Line | #dce4eb | Boundaries |
| Display | Georgia / Times New Roman | Existing editorial headings |
| Interface | Arial / Helvetica | Body and controls; preserve product-section sans-serif headings |

Previewed current colors/fonts in Realtime Colors: https://www.realtimecolors.com/?colors=11283f-ffffff-0b223c-f3f6f9-163a63&fonts=Georgia-Arial . This is a review link, not a runtime integration. Calculated contrast: navy on white 16.05:1; muted on white 6.00:1; muted on panel 5.53:1; white on accent navy 11.54:1. These checks do not replace rendered accessibility testing.

Product action states use 160ms color/background feedback, a visible 3px keyboard outline and a 2px diagonal Explore arrow movement. Reduced motion removes transitions and arrow translation; focus remains visible. Keep existing labels, destinations, shapes and dimensions.

The React Bits SpotlightCard pattern is adapted as a decorative low-opacity navy light over the existing sticky preview. It is mouse-only at desktop widths, has no pointer hit area or tab stop, and is hidden on touch/reduced-motion devices. No canvas, WebGL, timer or animation loop. Attribution/license: THIRD_PARTY_NOTICES.md and docs/licenses/react-bits-LICENSE.md.

