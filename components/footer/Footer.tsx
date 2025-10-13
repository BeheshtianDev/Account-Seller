import React from "react";
import BackgroundGradient from "../BackgroundGradient";
import SearchBox from "../SearchBox";
import LogoMarquee from "../LogoMarquee";

function Footer() {
  return (
    <div className="h-[70vh] w-full flex flex-col gap-2 justify-start items-center bottom-0 overflow-hidden fixed">
      {/* gradiant start */}
      <BackgroundGradient />

      <span className="lg:text-[3.5vw] text-[6vw] text-center  mt-[22vh] select-none">
        دسترسی به تمام سرویس‌های پرمیوم <br />
        در یک کلیک
      </span>
      <span className="lg:text-[1.3vw] text-[3vw] font-thin ">
        ابزارهای ادیت , هوش مصنوعی و سرویس های سرگرمی و موزیک
      </span>

      <SearchBox />
      <LogoMarquee />
      {/* content end */}
    </div>
  );
}

export default Footer;
