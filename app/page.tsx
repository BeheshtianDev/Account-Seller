import Faq from "@/components/Faq";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative  select-none">
      <HeroSection />
      <div className="max-h-[50vh] w-full z-20 bg-[#161218]  p-5 flex justify-center items-center">
        <div dir="ltr" className="lg:grid flex lg:grid-cols-3 2xl:grid-cols-6 gap-5  justify-start lg:place-items-center  lg:w-10/12 w-full overflow-x-scroll dropdown-scroll ">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="lg:h-52 lg:w-52 w-20 h-20 rounded-3xl shrink-0  lg:hover:h-60 lg:hover:w-60 transition-all duration-300  lg:hover:mx-5 lg:rounded-[35px] border border-white/20 shadow-xl shadow-black/20 backdrop-blur-lg group backdrop-brightness-200 bg-gradient-to-br from-white/5 from-10% to-transparent to-60%"
            ></div>
          ))}
        </div>
      </div>
      <div className="h-screen w-full z-20 bg-[#161218] rounded-b-4xl">
        <Faq />
      </div>
      <div className="h-screen w-full"></div>
      <Footer />
    </div>
  );
}
