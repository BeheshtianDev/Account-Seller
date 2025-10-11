"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const menuItems = [
  {
    label: "خانه",
    icon: "/icons/home-icon.svg",
    width: 16,
    height: 22,
    href: "/",
  },
  {
    label: "دسته بندی ها",
    icon: "/icons/category-icon.svg",
    width: 18,
    height: 22,
    href: "/categories",
  },
  {
    label: "تخفیف ها",
    icon: "/icons/category-icon.svg",
    width: 18,
    height: 20,
    href: "/discounts",
  },
  {
    label: "راهنما",
    icon: "/icons/category-icon.svg",
    width: 18,
    height: 21,
    href: "/help",
  },
  {
    label: "تماس",
    icon: "/icons/phone-icon.svg",
    width: 16,
    height: 22,
    href: "/contact",
  },
];
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
          borderRadius: isOpen ? "30px" : "9999px",
          width: isOpen ? "100%" : "42px",
          height: isOpen ? "350px" : "42px",
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
        <Link
          href="/"
          className="w-[42px] h-[42px] justify-center items-center lg:flex hidden"
        >
          <Image
            src="/icons/home-icon.svg"
            alt=""
            width={20}
            height={22}
            className="z-10 mb-[2.1px] "
          />
        </Link>

        {/* Hamburger / Close button */}
        <div
          onClick={handleToggle}
          className={`open-close-button  w-[42px] h-[42px] flex flex-col gap-1 absolute  justify-center items-center lg:hidden cursor-pointer z-10
            ${isOpen ? "top-2 right-2" : "-top-0.5 -right-px"}`}
          style={{
            transition: "all 0.3s ease",
            transitionDelay: isOpen ? "0.2s" : "0.1s",
          }}
        >
          {/* Top bar */}
          <span
            className="w-[20px] h-[1px] bg-white/80 rounded-full"
            style={{
              transition: "all 0.3s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          {/* Middle bar */}
          <span
            className="w-[20px] h-[1px] bg-white/80 rounded-full"
            style={{
              transition: "all 0.2s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              opacity: isOpen ? 0 : 1,
            }}
          />
          {/* Bottom bar */}
          <span
            className="w-[20px] h-[1px] bg-white/80 rounded-full"
            style={{
              transition: "all 0.3s ease",
              transitionDelay: isOpen ? "0.2s" : "0.1s",
              transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </div>

        {/* Menu items */}

        <div className="w-full h-full flex justify-end pt-[5vh] gap-8 pb-7 items-center flex-col font-extralight lg:hidden overflow-hidden">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href || "#"} // Add href property to your menuItems
              className={`transition-all w-full justify-between items-center px-5 flex duration-500 transform 
        ${
          showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
              style={{ transitionDelay: showItems ? `${i * 0.15}s` : "-0.5s" }}
              onClick={() => {
                setShowItems(false);
                setTimeout(() => setIsOpen(false), 50);
              }}
            >
              <div className="flex gap-5 items-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                />
                {item.label}
              </div>

              <div className="w-4 h-4 flex justify-center items-center rounded-full border opacity-90">
                <Image
                  src="/icons/arrow-left.svg"
                  alt=""
                  width={10}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
