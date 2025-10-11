"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "خانه", href: "/" },
  { label: "دسته بندی ها", href: "/categories" },
  { label: "تخفیف ها", href: "/discounts" },
  { label: "راهنما", href: "/help" },
  { label: "تماس", href: "/contact" },
];

const columns = [
  // ستون اول
  [
    {
      title: "استریم موسیقی",
      items: ["Spotify Premium", "Apple Music", "SoundCloud"],
    },
    {
      title: "فیلم، سریال و ویدیو",
      items: ["Netflix Premium", "YouTube Premium", "HBO Max"],
    },
    { title: "VPN و امنیت", items: ["NordVPN", "Surfshark VPN", "ExpressVPN"] },
  ],
  // ستون دوم
  [
    {
      title: "هوش مصنوعی",
      items: ["ChatGPT Plus", "Midjourney", "QuillBot Premium"],
    },
    {
      title: "طراحی و ادیت",
      items: ["Adobe Creative", "Canva Pro", "CapCut Pro"],
    },
    {
      title: "موسیقی و پادکست",
      items: ["Deezer Premium", "SoundCloud Go+", "Apple Music"],
    },
  ],
  // ستون سوم
  [
    {
      title: "گیمینگ و سرگرمی",
      items: ["Xbox Game Pass", "PlayStation Plus", "EA Play"],
    },
    {
      title: "فضای ذخیره‌سازی",
      items: ["Google One", "Dropbox Premium", "iCloud+"],
    },
    {
      title: "ابزارهای کاری",
      items: ["Notion Plus", "Slack Pro", "Microsoft 365"],
    },
  ],
];

export default function Navbar() {
  const pathname = usePathname();

  const [pageIndex, setPageIndex] = useState(0); // آیتم صفحه فعلی
  const [activeIndex, setActiveIndex] = useState(0); // Highlight فعلی
  const [showDropdown, setShowDropdown] = useState(false); // نمایش Dropdown

  // آپدیت آیتم صفحه فعلی وقتی مسیر تغییر کرد
  useEffect(() => {
    const foundIndex = menuItems.findIndex((item) => item.href === pathname);
    setPageIndex(foundIndex !== -1 ? foundIndex : 0);
    setActiveIndex(foundIndex !== -1 ? foundIndex : 0); // Highlight روی صفحه فعلی
  }, [pathname]);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index); // Highlight روی هاور

    if (index === 1) {
      setShowDropdown(true); // فقط وقتی روی دسته‌بندی‌ها هستیم
    } else {
      setShowDropdown(false); // در غیر این صورت ببندش
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(pageIndex); // Highlight برمیگرده روی صفحه فعلی
    setShowDropdown(false); // Dropdown بسته میشه
  };

  return (
    <div
      className={`relative w-[35vw] rounded-[30px] border border-white/20 shadow-xl shadow-black/20 backdrop-blur-lg group backdrop-brightness-200 bg-gradient-to-br hidden from-white/5 from-10% to-transparent to-60% lg:flex flex-col font-extralight overflow-hidden select-none items-center justify-between transition-all duration-[400ms]`}
      onMouseLeave={handleMouseLeave}
    >
      {/* منو اصلی */}
      <div className="w-full h-[50px] flex">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            onMouseEnter={() => handleMouseEnter(i)}
            className="w-1/5 h-full flex justify-center items-center cursor-pointer xl:text-base lg:text-sm md:text-xs z-10 transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Dropdown فقط وقتی هاور روی دسته بندی ها */}
      <div
        className={`w-full transition-all duration-[400ms] flex pr-[2vw]  overflow-hidden ${
          showDropdown ? "h-[500px] opacity-100 pt-5" : "h-0 opacity-0 pt-0"
        }`}
      >
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col w-1/3 h-full justify-around items-center"
          >
            {column.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex w-full flex-col justify-center items-start gap-5 mb-8"
              >
                <h2 className="text-white">{group.title}</h2>
                <ul className="space-y-2 text-white/80 font-light text-right eng">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className={`transition-all duration-500 transform ${
                        showDropdown
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-5"
                      }`}
                      style={{
                        transitionDelay: showDropdown
                          ? `${i * 0.15 + groupIndex * 0.3 + colIndex * 0.3}s`
                          : "0s",
                      }}
                    >
                      <Link
                        href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                        className="animated-link"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Highlight Indicator */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="absolute top-0 h-[50px] w-1/5 rounded-[100px] bg-gradient-to-br from-white/10 from-10% to-transparent to-60% shadow-inner shadow-white/10 border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10"
        style={{
          left: `${
            ((menuItems.length - 1 - activeIndex) / menuItems.length) * 100
          }%`,
        }}
      />
    </div>
  );
}
