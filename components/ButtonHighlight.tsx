"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ButtonHighlight() {
  const defaultIndex = 1; // highlight default = ثبت نام
  const [activeIndex, setActiveIndex] = useState<0 | 1>(1); // initial = ورود

  return (
    <div
      className="w-40 h-[42px] flex justify-between flex-row-reverse font-thin items-center backdrop-blur-lg backdrop-brightness-200 bg-gradient-to-br from-white/10 from-10% to-transparent to-60% rounded-full border border-white/20 shadow-xl shadow-black/20 relative"
      onMouseLeave={() => setActiveIndex(defaultIndex)} // reset to default
    >
      {/* Buttons */}
      <button
        className="register w-[80px] pb-[3px] h-full flex justify-center items-center z-10 rounded-full"
        onMouseEnter={() => setActiveIndex(0)}
      >
        ثبت نام
      </button>

      <button
        className="w-[80px] pb-1 flex justify-center items-center h-full z-10 rounded-full"
        onMouseEnter={() => setActiveIndex(1)}
      >
        ورود
      </button>

      {/* Highlight */}
      <motion.div
        className="absolute top-0 h-full w-[80px] rounded-full bg-purple-800/90"
        animate={{
          left: activeIndex === 0 ? 0 : 80, // moves to ثبت نام (0) or ورود (80px)
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.2 }}
      >
        <div className="shadow-1 w-full h-full rounded-full bg-gradient-to-br absolute from-white/25 from-10% to-transparent to-60% border border-white/20  shadow-inner shadow-white/10" />
      </motion.div>
    </div>
  );
}
