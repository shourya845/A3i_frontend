"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // A failed animation download never hides the page content.
    import("@/lib/motion")
      .then(({ enhancePage }) => {
        if (!cancelled) cleanup = enhancePage(pathname);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
