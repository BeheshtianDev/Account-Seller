import CategorySuggest from "@/components/CategorySuggest";
import Faq from "@/components/Faq";
import FooterTwo from "@/components/FooterTwo";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative  select-none">
      <HeroSection />
      <CategorySuggest />
      <div className="h-screen w-full z-20 bg-[#161218] ">
        <Faq />
      </div>
      <div className="h-screen w-full z-20 bg-[#161218]">
        <div className="w-64 h-64 bg-white/40  [mask-image:url('/mask.svg')] mx-auto flex justify-center items-center [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]">
          <div className="w-[calc(100%-3px)] h-[calc(100%-3px)] bg-[#2C2430]  [mask-image:url('/mask.svg')] [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]"></div>
        </div>
        <div className="w-64 h-64 bg-white/40  [mask-image:url('/mask-2.svg')] mx-auto flex justify-center items-center [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]">
          <div className="w-[253px] h-[253px] bg-[#2C2430]  [mask-image:url('/mask-2.svg')] [mask-size:contain] overflow-visible [mask-repeat:no-repeat] [mask-position:center]"></div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-[#161218]  "></div>
      <FooterTwo />
    </div>
  );
}
