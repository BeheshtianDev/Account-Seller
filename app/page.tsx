import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative  select-none">
      <HeroSection />
      <div className="h-screen w-full z-20 bg-[#161218]"></div>
      <div className="h-screen w-full z-20 bg-[#161218] rounded-b-4xl"></div>
      <div className="h-screen w-full"></div>
      <Footer />
    </div>
  );
}
