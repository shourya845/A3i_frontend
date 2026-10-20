"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Original small vector animation: three work signals moving through a workflow.
const animation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 48,
  w: 60,
  h: 24,
  nm: "A3i activity",
  ddd: 0,
  assets: [],
  layers: [0, 1, 2].map((index) => ({
    ddd: 0,
    ind: index + 1,
    ty: 4,
    nm: `Signal ${index + 1}`,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { t: index * 5, s: [35], e: [100] },
          { t: 16 + index * 5, s: [100], e: [35] },
          { t: 32 + index * 5, s: [35] },
        ],
      },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [12 + index * 18, 12, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] },
    },
    shapes: [
      {
        ty: "el",
        d: 1,
        s: { a: 0, k: [8, 8] },
        p: { a: 0, k: [0, 0] },
        nm: "Signal",
      },
      {
        ty: "fl",
        c: { a: 0, k: [0.07, 0.13, 0.27, 1] },
        o: { a: 0, k: 100 },
        r: 1,
        nm: "Ink",
      },
    ],
    ip: 0,
    op: 48,
    st: 0,
    bm: 0,
  })),
};
export default function ActivityAnimation() {
  const container = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !container.current) return;
    let disposed = false;
    let destroy: (() => void) | undefined;
    void import("lottie-web")
      .then(({ default: lottie }) => {
        if (disposed || !container.current) return;
        const player = lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animation,
          rendererSettings: { progressiveLoad: true },
        });
        destroy = () => player.destroy();
      })
      .catch(() => {});
    return () => {
      disposed = true;
      destroy?.();
    };
  }, [reduced]);
  return (
    <span className="activity-animation" ref={container} aria-hidden="true" />
  );
}
