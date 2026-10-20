import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tippy from "tippy.js";

export function enhancePage(pathname: string) {
  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tooltips = tippy("[data-tooltip]", {
    content: (element) => element.getAttribute("data-tooltip") || "",
    trigger: "mouseenter focus",
    duration: reduced ? 0 : [140, 100],
    delay: [250, 0],
    maxWidth: 250,
    theme: "a3i",
    touch: false,
  });
  const media = gsap.matchMedia();

  if (pathname === "/") {
    // Motion for React owns hero text and button feedback.
    // Remove this block to disable parallax without changing other motion.
    media.add(
      "(min-width: 1100px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(".hero-background", {
          yPercent: 6,
          scale: 1.07,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      },
    );
  }

  return () => {
    media.revert();
    tooltips.forEach((tooltip) => tooltip.destroy());
  };
}
