"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const columns = [
  [
    {
      title: "استریم موسیقی",
      items: ["Spotify Premium", "Apple Music", "SoundCloud"],
    },
    {
      title: "فیلم، سریال و ویدیو",
      items: ["Netflix Premium", "YouTube Premium", "HBO Max"],
    },
    {
      title: "VPN و امنیت",
      items: ["NordVPN", "Surfshark VPN", "ExpressVPN"],
    },
  ],
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

interface TiltCardProps {
  service: string;
  category: string;
}
const TiltCard: React.FC<TiltCardProps> = ({ service, category }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    // tilt
    setRotateY(((x - halfWidth) / halfWidth) * 15);
    setRotateX(((halfHeight - y) / halfHeight) * 15);

    // spotlight position
    setSpot({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    // keep spotlight position, just remove tilt
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-80 h-96 bg-[#1f1826] border border-[#2d2235] hover:border-purple-600 hover:shadow-purple-800/30 hover:shadow-xl rounded-2xl p-4 flex flex-col items-start justify-between cursor-pointer overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* inner spotlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity blur-2xl duration-200"
        style={{
          background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, #9810fa 0%, transparent 50%)`,
          opacity: hovered ? 0.5 : 0,
        }}
      />

      <span className="text-sm text-purple-400 mb-2 font-light z-10 relative">
        {category}
      </span>
      <h2 className="text-lg eng font-extralight z-10 relative">{service}</h2>
    </motion.div>
  );
};

export default function Page() {
  const allServices = columns.flatMap((col) =>
    col.flatMap((section) =>
      section.items.map((service) => ({
        service,
        category: section.title,
      }))
    )
  );

  return (
    <div className="min-h-screen bg-[#161218] text-white flex flex-col items-center py-52 px-6">
      <h1 className="text-3xl md:text-5xl font-thin mb-40 text-center">
        همهٔ سرویس‌ها
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 w-full max-w-[1500px]">
        {allServices.map((item, i) => (
          <TiltCard key={i} service={item.service} category={item.category} />
        ))}
      </div>
    </div>
  );
}
