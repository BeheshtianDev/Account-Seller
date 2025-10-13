"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  breakpoint?: number; // مثلا 768 یا 1024 یا هر چی خواستی
}

export default function SmoothScroll({ breakpoint }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function stopPropagationOnNestedScroll(e: WheelEvent) {
      const target = e.target as HTMLElement;
      if (!target) return;

      // اگه breakpoint مشخص شده، فقط در اون محدوده اعمال بشه
      if (
        (!breakpoint || window.innerWidth <= breakpoint) &&
        target.closest(".dropdown-scroll")
      ) {
        e.stopPropagation();
      }
    }

    document.addEventListener("wheel", stopPropagationOnNestedScroll, {
      passive: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("wheel", stopPropagationOnNestedScroll);
      lenis.destroy();
    };
  }, [breakpoint]);

  return null;
}
