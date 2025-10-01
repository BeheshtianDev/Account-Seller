import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  const particles = Array.from({ length: 30 }); // 20 particles
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative bg-[#161218] select-none">
      <div className="h-screen w-full flex flex-col gap-2 justify-start items-center relative overflow-hidden ">
        {/* gradiant start */}
        <div className="w-[145vw] h-[100vw] rounded-[50%]   border-8 absolute opacity-35 blur-lg -bottom-[79.5vw] z-20"></div>
        <div className="w-[150vw] h-[100vw] rounded-[50%]  bg-[#111111]  absolute opacity-90 lg:-bottom-[80vw] md:-bottom-[72vw] -bottom-[42vw] blur-[1.5px] z-20"></div>
        <div className="w-[130vw] h-[105vw] rounded-[50%]  bg-[#46205d] absolute hue-rotate-[1deg]  lg:-bottom-[78vw] md:-bottom-[70vw] -bottom-[40vw]  blur-[50px] z-10"></div>

        <Image
          src="/hollow.png"
          draggable="false"
          alt=""
          width={1300}
          height={1200}
          className="animate-float-1 absolute opacity-90 mix-blend-lighten  hue-rotate-[-15deg] -left-80 bottom-0 scale-x-75 -rotate-45 select-none"
        />
        <Image
          src="/hollow.png"
          alt=""
          width={1000}
          draggable="false"
          height={1000}
          className="animate-float-2 absolute opacity-90 mix-blend-lighten  hue-rotate-[-15deg] right-0 bottom-0 select-none"
        />
        {/* White Particles */}
        {particles.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 2}px`, // 2–6px size
              height: `${Math.random() * 1 + 2}px`,
              animationDuration: `${Math.random() * 5 + 4}s`, // 4–9s speed
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        {/* gradiant end */}

        {/* content start */}
        <Header />
        <span className="lg:text-[3.5vw] text-[6vw] text-center  mt-[22vh] select-none">
          دسترسی به تمام سرویس‌های پرمیوم <br />
          در یک کلیک
        </span>
        <span className="lg:text-[1.3vw] text-[3vw] font-thin ">
          ابزارهای ادیت , هوش مصنوعی و سرویس های سرگرمی و موزیک
        </span>
        <div className="w-auto flex h-[50px] z-20 rounded-full bg-gradient-to-br  from-white/5 from-10% to-transparent to-60%  border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10  backdrop-blur-lg overflow-hidden backdrop-brightness-105 ">
          <input
            placeholder="اسم سرویس یا دسته بندی"
            type="text"
            className="w-96 font-extralight text-white/80  h-full outline-none pr-10 caret-white/30"
          />
          <button className="h-full w-[50px] rounded-full flex justify-center items-center font-extralight bg-purple-800/90 relative">
            <div className="shadow-1 w-full h-full rounded-full bg-gradient-to-br absolute from-white/25 from-10% to-transparent to-60% border border-white/20  shadow-inner shadow-white/10" />
            <Image
              src="/search-icon.svg"
              alt=""
              width={25}
              height={25}
              className="opacity-50 "
            />
          </button>
        </div>

              <div className="flex gap-5 z-20 mt-10">
          <div className="w-96 h-14 rounded-full bg-gradient-to-br  from-white/5 from-10% to-transparent to-60%  border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10  backdrop-blur-lg overflow-hidden backdrop-brightness-105 ">
            <input
              placeholder="اسم سرویس یا دسته بندی"
              type="text"
              className=" font-extralight text-white/80 w-full h-full outline-none pr-10 caret-white/30"
            />
          </div>
          <button className="w-14 h-14 rounded-full group bg-gradient-to-br flex justify-center items-center from-white/5 from-10% to-transparent to-60%  border-t border-l border-t-white/20 border-l-white/20 border-b border-b-white/10 border-r border-r-white/10  backdrop-blur-lg overflow-hidden backdrop-brightness-105">
            <Image
              src="/search-icon.svg"
              alt=""
              width={25}
              height={25}
              className="opacity-50 "
            />
          </button>
        </div>
        {/* content end */}
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
