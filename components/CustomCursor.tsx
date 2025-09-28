"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const blinkTimeline = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const killBlink = () => {
      if (blinkTimeline.current) {
        blinkTimeline.current.kill();
        blinkTimeline.current = null;
        gsap.set(innerRef.current, { opacity: 1 });
      }
    };

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isTextInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("input") !== null ||
        target.closest("textarea") !== null;

      const isCursorPointer =
        target.closest("a, button, [role='button'], .cursor-pointer") !== null;

      if (isTextInput) {
        // caret mode with blinking
        gsap.to(innerRef.current, {
          width: 2,
          height: 19,
          borderRadius: 1,
          duration: 0.2,
        });
        if (!blinkTimeline.current) {
          blinkTimeline.current = gsap.to(innerRef.current, {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
          });
        }
      } else if (isCursorPointer) {
        // contract smaller
        gsap.to(innerRef.current, {
          width: 10,
          height: 10,
          borderRadius: 9999,
          opacity: 1,
          duration: 0.2,
        });
        killBlink();
      } else {
        // default circle
        gsap.to(innerRef.current, {
          width: 20,
          height: 20,
          borderRadius: 9999,
          opacity: 1,
          duration: 0.25,
        });
        killBlink();
      }
    };

    const render = () => {
      const { x, y } = mouse.current;
      gsap.to(innerRef.current, { x, y, duration: 0.3 });
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    render();

    return () => {
      window.removeEventListener("mousemove", move);
      if (blinkTimeline.current) blinkTimeline.current.kill();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={innerRef}
      className="pointer-events-none fixed top-0 left-0 w-5 h-5 bg-[#f8f8f8] rounded-full mix-blend-difference z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
