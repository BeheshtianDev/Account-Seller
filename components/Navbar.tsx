"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = ["خانه", "دسته بندی ها", "تخفیف ها", "راهنما", "تماس"];

export default function Navbar() {
  const defaultIndex = 0; // highlight starts at خانه
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div
      className="relative w-[35vw] h-[50px] rounded-full border border-white/10 shadow-xl shadow-black/20 backdrop-blur-lg backdrop-brightness-200 bg-gradient-to-br from-white/5 from-10% to-transparent to-60% flex font-extralight overflow-hidden"
      onMouseLeave={() => setActiveIndex(defaultIndex)} // reset to خانه
    >
      {menuItems.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setActiveIndex(i)}
          className="w-1/5 h-full flex justify-center items-center cursor-pointer"
        >
          {item}
        </div>
      ))}

      {/* Highlight Indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.15 }}
        className="absolute top-0 h-full w-1/5 rounded-full bg-white/5"
        style={{
          left: `${
            ((menuItems.length - 1 - activeIndex) / menuItems.length) * 100
          }%`, // LTR: 0% → خانه, 100% → last item
        }}
      />
    </div>
  );
}
