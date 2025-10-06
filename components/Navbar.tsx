"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = ["خانه", " دسته بندی ها", "تخفیف ها", "راهنما", "تماس"];

export default function Navbar() {
  const defaultIndex = 0; // highlight starts at خانه
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div
      className={`relative w-[35vw] rounded-[30px] border border-white/20 shadow-xl shadow-black/20 backdrop-blur-lg group backdrop-brightness-200 bg-gradient-to-br hidden from-white/5 from-10% to-transparent to-60% lg:flex flex-col font-extralight overflow-hidden select-none items-center justify-between transition-all duration-300  ${
        activeIndex === 1 ? "h-[400px] rounded-[30px]" : "h-[50px]"
      }`}
      onMouseLeave={() => setActiveIndex(defaultIndex)} // reset to خانه
    >
      <div className="w-full h-[50px] flex ">
        {menuItems.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            className="w-1/5 h-full flex justify-center items-center cursor-pointer xl:text-base lg:text-sm md:text-xs transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className={` w-full transition-all delay-300  duration-1000 bg-red-50 ${
          activeIndex === 1 ? "h-[300px]" : "h-0"
        }`}
      ></div>
      {/* Highlight Indicator */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          delay: 0.15,
        }}
        className="absolute top-0 h-[50px] w-1/5 rounded-[100px] bg-gradient-to-br  from-white/10 group-hover:rounded-[50px] from-10% to-transparent to-60% shadow-inner shadow-white/10 border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10 "
        style={{
          left: `${
            ((menuItems.length - 1 - activeIndex) / menuItems.length) * 100
          }%`, // LTR: 0% → خانه, 100% → last item
        }}
      />
    </div>
  );
}
