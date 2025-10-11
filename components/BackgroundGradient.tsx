"use client";

import Image from "next/image";
import { useMemo } from "react";

export default function BackgroundGradient() {
  // Memoize random particle positions to prevent re-randomization on re-renders
  const particles = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <>
      {/* --- Gradient Layers --- */}
      <div className="w-[145vw] h-[100vw] rounded-[50%] border-8 absolute opacity-35 blur-lg -bottom-[79.5vw] z-20"></div>
      <div className="w-[150vw] h-[100vw] rounded-[50%] bg-[#111111] absolute opacity-90 lg:-bottom-[80vw] md:-bottom-[72vw] -bottom-[42vw] blur-[1.5px] z-20"></div>
      <div className="w-[130vw] h-[105vw] rounded-[50%] bg-[#46205d] absolute hue-rotate-[1deg] lg:-bottom-[78vw] md:-bottom-[70vw] -bottom-[40vw] blur-[50px] z-10"></div>

      {/* --- Floating Hollow Images --- */}
      <Image
        src="/logos/hollow.webp"
        draggable={false}
        alt="background-float-left"
        width={1300}
        height={1200}
        className="animate-float-1 absolute opacity-90 mix-blend-lighten hue-rotate-[-15deg] -left-80 bottom-0 scale-x-75 -rotate-45 select-none"
      />
      <Image
        src="/logos/hollow.webp"
        draggable={false}
        alt="background-float-right"
        width={1000}
        height={1000}
        className="animate-float-2 absolute opacity-90 mix-blend-lighten hue-rotate-[-15deg] right-0 bottom-0 select-none"
      />

      {/* --- White Particles --- */}
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 1 + 2}px`,
            height: `${Math.random() * 1 + 2}px`,
            animationDuration: `${Math.random() * 5 + 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  );
}
