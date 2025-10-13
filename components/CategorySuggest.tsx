"use client";
import Image from "next/image";

const icons = [
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",
  "/icons/headphone-icon.svg",
  "/icons/gpt-icon.svg",

];

export default function CategorySuggest() {
  return (
    <div className="h-auto min-h-[30vh] pb-10 w-full z-20 bg-[#161218] lg:px-5 px-2 flex justify-center items-center">
      <div
        dir="ltr"
        className="lg:grid flex lg:grid-cols-3 2xl:grid-cols-6 gap-5 sm:justify-center justify-start lg:place-items-center items-center lg:w-10/12 w-full overflow-x-scroll"
      >
        {icons.map((src, i) => (
          <div
            key={i}
            className="lg:h-52 lg:w-52 w-20 h-20 eng rounded-3xl shrink-0 lg:hover:h-60 lg:hover:w-60 transition-all duration-300 lg:hover:mx-5 lg:rounded-[35px] border border-white/20 shadow-xl shadow-black/20 backdrop-blur-lg font-extralight text-6xl group backdrop-brightness-200 flex justify-center items-center bg-gradient-to-br from-white/5 from-10% to-transparent to-60%"
          >
            <Image
              src={src}
              draggable={false}
              alt={`category-icon-${i}`}
              width={200}
              height={200}
              className="w-2/5 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
