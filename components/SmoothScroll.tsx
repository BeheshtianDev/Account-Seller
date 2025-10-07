"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    // Allow nested scrollable elements to scroll normally
    function stopPropagationOnNestedScroll(e: WheelEvent) {
      const target = e.target as HTMLElement;
      if (!target) return;

      // check if element or its parent has 'dropdown-scroll' class
      if (target.closest('.dropdown-scroll')) {
        e.stopPropagation(); // prevent Lenis from hijacking the scroll
      }
    }

    document.addEventListener('wheel', stopPropagationOnNestedScroll, { passive: false });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('wheel', stopPropagationOnNestedScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
