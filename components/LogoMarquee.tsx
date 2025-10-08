"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  "/logos/Spotify-logo.png",
  "/logos/PS-logo.png",
  "/logos/HBO-logo.png",
  "/logos/Netflix-logo.png",
  "/logos/AppleMusic-logo.png",
  "/logos/YouTube-logo.png",
  "/logos/ChatGPT-logo.png",
];

export default function LogoMarquee() {
  return (
    <div
      dir="LTR"
      className="w-3/4 overflow-hidden absolute bottom-[3vw] h-32 z-20"
    >
      {/* Gradient overlays */}
      <div className="absolute w-1/12 h-full bg-gradient-to-l from-[#161218] to-transparent right-0 z-10" />
      <div className="absolute w-1/12 h-full bg-gradient-to-r from-[#161218] to-transparent left-0 z-10" />

      {/* Scrolling logos */}
      <div className="animate-marquee lg:gap-16 gap-5 brightness-75 flex justify-center items-center">
        {[...logos, ...logos].map((logo, i) => {
          const slug = logo
            .replace("/", "")
            .replace("-logo", "")
            .replace(/\.(png|jpg|jpeg|svg)/gi, "")
            .toLowerCase();

          return (
            <div key={i}>
              <Link href={`/${slug}`}>
                <Image
                  src={logo}
                  alt={`${slug}-logo`}
                  width={200}
                  height={25}
                  className="object-contain lg:w-[8vw] w-[15vw]"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
