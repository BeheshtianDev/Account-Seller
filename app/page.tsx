import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative ">
      <div className="h-screen w-full flex flex-col gap-2 justify-start items-center relative overflow-hidden ">
        {/* gradiant start */}
        <div className="w-[145vw] h-[100vw] rounded-[50%]   border-8 absolute opacity-35 blur-lg -bottom-[79.5vw] z-20"></div>
        <div className="w-[150vw] h-[100vw] rounded-[50%]  bg-[#111111]  absolute opacity-90 lg:-bottom-[80vw] md:-bottom-[72vw] -bottom-[42vw] blur-[3px] z-20"></div>
        <div className="w-[130vw] h-[105vw] rounded-[50%]  bg-purple-800 absolute lg:opacity-40 opacity-80 lg:-bottom-[78vw] md:-bottom-[70vw] -bottom-[40vw]  blur-[50px] z-10"></div>
        <div className="flex  absolute top-48 rotate-45 -left-[8vw] blur-[200px] opacity-50  z-30">
          <div className="w-[20vw] h-[20vw] rounded-full   shadow-2xl shadow-purple-800   bg-purple-800"></div>
          <div className="w-[20vw] h-[20vw] rounded-full   shadow-2xl shadow-purple-800   bg-purple-800"></div>
        </div>
        <div className="w-[20vw] h-[20vw] rounded-full blur-[200px] opacity-50 shadow-2xl shadow-purple-800 absolute right-[8vw] z-20 top-[30vh] bg-purple-800 "></div>
        {/* gradiant end */}

        {/* content start */}
        <Header />
        <span className="lg:text-[3.5vw] text-[6vw] text-center  mt-52 ">
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
