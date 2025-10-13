import React from "react";
import BackgroundGradient from "../BackgroundGradient";
import SearchBox from "../SearchBox";
import LogoMarquee from "../LogoMarquee";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-2 justify-start items-center relative overflow-hidden bg-[#161218] z-20">
      {/* gradiant start */}
      <BackgroundGradient />
      {/* gradiant end */}

      {/* content start */}
      <span className="lg:text-[3.5vw] text-[6vw] text-center  mt-[22vh] select-none">
        دسترسی به تمام سرویس‌های پرمیوم <br />
        در یک کلیک
      </span>

      <div className="w-64 h-64  z-50  [mask-image:url('/mask-border.svg')] mx-auto flex justify-center items-center [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]">
        <div className="w-64 h-64  bg-white [mask-image:url('/mask-body.svg')] [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]"></div>
      </div>
      <span className="lg:text-[1.3vw] text-[3vw] font-thin ">
        ابزارهای ادیت , هوش مصنوعی و سرویس های سرگرمی و موزیک
      </span>

      <SearchBox />
      <LogoMarquee />
      {/* content end */}
    </div>
  );
};

export default HeroSection;
