"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const services = [
  { name: "Spotify Premium", nameFa: "اسپاتیفای پریمیوم", slug: "spotify" },
  { name: "Netflix Premium", nameFa: "نتفلیکس پریمیوم", slug: "netflix" },
  { name: "Apple Music", nameFa: "اپل موزیک", slug: "apple-music" },
  { name: "YouTube Premium", nameFa: "یوتیوب پریمیوم", slug: "youtube" },
  { name: "NordVPN", nameFa: "نورد وی‌پی‌ان", slug: "nordvpn" },
  { name: "ChatGPT Plus", nameFa: "چت‌جی‌پی‌تی پلاس", slug: "chatgpt" },
  { name: "Adobe Creative Cloud", nameFa: "ادوبی کریتیو کلود", slug: "adobe" },
  { name: "Canva Pro", nameFa: "کانوا پرو", slug: "canva" },
  { name: "CapCut Pro", nameFa: "کپ‌کات پرو", slug: "capcut" },
  { name: "HBO Max", nameFa: "اچ‌بی‌او مکس", slug: "hbo" },
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // تابع تشخیص فارسی
  const isPersian = (text: string) => /[\u0600-\u06FF]/.test(text);
  const typingEnglish = query && !isPersian(query);

  // trim و بررسی اینکه فقط space نباشه
  const trimmedQuery = query.trim();

  const filtered = services.filter((service) =>
    trimmedQuery
      ? typingEnglish
        ? service.name.toLowerCase().includes(trimmedQuery.toLowerCase())
        : service.nameFa.includes(trimmedQuery)
      : false
  );

  const handleSearchClick = () => {
    if (!trimmedQuery) {
      router.push("/categories"); // صفحه دسته‌بندی‌ها
    } else if (filtered.length > 0) {
      router.push(`/${filtered[0].slug}`); // اولین پیشنهاد
    }
  };

  return (
    <div className="relative flex flex-col z-30">
      <div className="flex gap-5 lg:mt-5 mt-16">
        <div
          className={`lg:w-96 h-12 w-64 lg:h-14 rounded-full bg-gradient-to-br from-white/5 from-10% to-transparent to-60% border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10 backdrop-blur-lg overflow-hidden backdrop-brightness-105
        ${typingEnglish ? "eng" : ""}`}
        >
          <input
            type="text"
            placeholder="اسم سرویس یا دسته بندی"
            className={`font-extralight text-white/90 w-full h-full outline-none  px-5 caret-white/30
          ${typingEnglish ? "eng text-left" : "text-right"}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            dir={typingEnglish ? "ltr" : "rtl"}
          />

          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className={`absolute lg:top-[28px] top-[23px] -translate-y-1/2 text-white/60 hover:text-white
            ${typingEnglish ? "right-5" : "left-5"}`}
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={handleSearchClick}
          className="lg:w-14 w-12 h-12 lg:h-14 rounded-full group bg-gradient-to-br flex justify-center items-center from-white/5 from-10% to-transparent to-60% border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10 backdrop-blur-lg overflow-hidden backdrop-brightness-105"
        >
          <Image
            src="/icons/search-icon.svg"
            alt=""
            width={25}
            height={25}
            className="opacity-50 lg:w-[25px] w-[20px]"
          />
        </button>
      </div>

      {/* Suggestions dropdown */}
      {trimmedQuery && filtered.length > 0 && (
        <ul
          className={`absolute top-full mt-2 w-64 lg:w-96  text-white/90 max-h-60 overflow-y-auto overflow-x-hidden rounded-4xl shadow-lg z-50 border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10 backdrop-blur-lg transition-all duration-500 dropdown-scroll 
      ${typingEnglish ? "eng" : ""}`}
        >
          {filtered.map((service) => (
            <li
              key={service.slug}
              className="lg:w-96 h-12 w-64 lg:h-14 hover:bg-white/2 rounded-full border border-white/0 hover:border-white/20 transition-all duration-300"
            >
              <Link
                href={`/${service.slug}`}
                className="w-full h-full  flex justify-start items-center px-5 font-extralight"
              >
                {typingEnglish ? service.name : service.nameFa}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
