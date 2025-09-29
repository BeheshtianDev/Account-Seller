import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  const particles = Array.from({ length: 30 }); // 20 particles
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative bg-[#161218]">
      <div className="h-screen w-full flex flex-col gap-2 justify-start items-center relative overflow-hidden ">
        {/* gradiant start */}
        <div className="w-[145vw] h-[100vw] rounded-[50%]   border-8 absolute opacity-35 blur-lg -bottom-[79.5vw] z-20"></div>
        <div className="w-[150vw] h-[100vw] rounded-[50%]  bg-[#111111]  absolute opacity-90 lg:-bottom-[80vw] md:-bottom-[72vw] -bottom-[42vw] blur-[1.5px] z-20"></div>
        <div className="w-[130vw] h-[105vw] rounded-[50%]  bg-[#46205d] absolute hue-rotate-[1deg]  lg:-bottom-[78vw] md:-bottom-[70vw] -bottom-[40vw]  blur-[50px] z-10"></div>

        <Image
          src="/HOLLOW.png"
          alt=""
          width={1300}
          height={1200}
          className="animate-float-1 absolute opacity-90 mix-blend-lighten  hue-rotate-[-15deg] -left-80 bottom-0 scale-x-75 -rotate-45 "
        />
        <Image
          src="/HOLLOW.png"
          alt=""
          width={1000}
          height={1000}
          className="animate-float-2 absolute opacity-90 mix-blend-lighten  hue-rotate-[-15deg] right-0 bottom-0"
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
        <span className="lg:text-[3.5vw] text-[6vw] text-center  mt-[22vh] ">
          دسترسی به تمام سرویس‌های پرمیوم <br />
          در یک کلیک
        </span>
        <span className="lg:text-[1.3vw] text-[3vw] font-thin ">
          ابزارهای ادیت , هوش مصنوعی و سرویس های سرگرمی و موزیک
        </span>
        {/* content end */}
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
