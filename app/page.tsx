import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full flex justify-start flex-col items-center h-auto relative ">
      <div className="h-screen w-full flex flex-col justify-start items-center relative overflow-hidden ">
        <div className="w-[145vw] h-[100vw] rounded-[50%]   border-8 absolute opacity-35 blur-lg -bottom-[79.5vw] z-20"></div>
        <div className="w-[150vw] h-[100vw] rounded-[50%]  bg-[#111111]  absolute opacity-90 -bottom-[80vw] blur-[3px] z-20"></div>
        {/* <div className="w-[150vw] h-[100vw] rounded-[50%]  border-4 absolute border-orange-700 opacity-20 -bottom-[80vw] z-20"></div> */}
        <div className="w-[130vw] h-[105vw] rounded-[50%]  bg-orange-700 absolute opacity-20 -bottom-[78vw] blur-[50px] z-10"></div>
        <div className="flex  absolute top-48 rotate-45 -left-[8vw] blur-[200px] opacity-50  z-30">
          <div className="w-[20vw] h-[20vw] rounded-full   shadow-2xl shadow-orange-700   bg-orange-700"></div>
          <div className="w-[20vw] h-[20vw] rounded-full   shadow-2xl shadow-orange-700   bg-orange-700"></div>
        </div>
        <div className="w-[20vw] h-[20vw] rounded-full blur-[200px] opacity-50 shadow-2xl shadow-orange-700 absolute right-[8vw] z-20 top-[30vh] bg-orange-700"></div>
        <span className="lg:text-[4vw] text-[6vw] text-center font-light mt-40 ">
          دسترسی به تمام سرویس‌های پرمیوم <br />
          در یک کلیک
        </span>
        <span className="lg:text-[1.5vw] text-[3vw] font-thin opacity-80">
          ابزارهای ادیت , هوش مصنوعی و سرویس های سرگرمی و موزیک
        </span>
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
