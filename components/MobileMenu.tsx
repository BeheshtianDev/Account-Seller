"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const menuItems = ["خانه", "دسته بندی ", "تخفیف ها", "راهنما", "تماس"];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      if (!isOpen) {
        // opening → wait for container animation before showing items
        setIsOpen(true);
        setTimeout(() => setShowItems(true), 400); // wait until height transition finishes
      } else {
        // closing → hide items immediately before collapse starts
        setShowItems(false);
        setTimeout(() => setIsOpen(false), 50);
      }
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowItems(false);
        setTimeout(() => setIsOpen(false), 50);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:w-40 w-1/2 flex justify-start items-start" ref={menuRef}>
      <div
        className="menu-button lg:w-12 w-[42px] lg:h-12 h-[42px] relative flex justify-center items-center
          bg-gradient-to-br border border-white/10 shadow-xl shadow-black/20 backdrop-blur-lg backdrop-brightness-200 
          from-white/10 from-10% to-transparent to-60%"
        style={{
          borderRadius: isOpen ? "40px" : "9999px",
          width: isOpen ? "100%" : "42px",
          height: isOpen ? "50vh" : "42px",
          transition: isOpen
            ? `
              border-radius 0.2s ease,
              width 0.3s ease 0.2s,
              height 0.3s ease 0.2s
            `
            : `
              height 0.3s ease,
              width 0.3s ease ,
              border-radius 0.2s ease 0.2s
            `,
        }}
      >
        <Image
          src="/home-icon.svg"
          alt=""
          width={22}
          height={22}
          className="z-10 mb-[2.1px] lg:block hidden"
        />

        {/* Hamburger / Close button */}
        <div
          onClick={handleToggle}
          className={`open-close-button flex flex-col gap-1 absolute lg:hidden cursor-pointer z-10
            ${isOpen ? "top-7 right-5" : "top-[12px] right-[10px]"}`}
          style={{
            transition: "all 0.3s ease",
            transitionDelay: isOpen ? "0.2s" : "0.1s",
          }}
        >
          {/* Top bar */}
          <span
            className="w-[20px] h-0.5 bg-white/80 rounded-full"
            style={{
              transition: "all 0.3s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              transform: isOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          {/* Middle bar */}
          <span
            className="w-[20px] h-0.5 bg-white/80 rounded-full"
            style={{
              transition: "all 0.2s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              opacity: isOpen ? 0 : 1,
            }}
          />
          {/* Bottom bar */}
          <span
            className="w-[20px] h-0.5 bg-white/80 rounded-full"
            style={{
              transition: "all 0.3s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </div>

        {/* Menu items */}
        <div className="w-full h-full flex justify-around pt-[5vh] pb-[3vh] items-center flex-col font-extralight lg:hidden overflow-hidden">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-500 transform 
                ${
                  showItems
                    ? "opacity-100 translate-y-0"
                    : " opacity-0 -translate-y-5"
                }`}
              style={{ transitionDelay: showItems ? `${i * 0.15}s` : "-0.5s" }}
              onClick={() => {
                // close after selecting an item
                setShowItems(false);
                setTimeout(() => setIsOpen(false), 50);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
