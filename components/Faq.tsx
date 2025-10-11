"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { motion } from "framer-motion";

type FaqItem = {
  q: string;
  a: string;
  img: string; // path from /public
};
const faqItems: FaqItem[] = [
  {
    q: "آیا طلای موجود در سایت اصل و دارای کد استاندارد هست؟",
    a: "بله، تمامی طلاهای ارائه‌شده در سایت اصل بوده و همراه با کد استاندارد معتبر، فاکتور رسمی و مهر سازنده ارائه می‌شن. این موارد تضمین می‌کنن که شما با اطمینان کامل از اصالت کالا خرید کنید و هیچ نگرانی بابت تقلبی بودن یا بی‌کیفیت بودن محصول نداشته باشید.",
    img: "/model-2.webp",
  },
  {
    q: "اجرت ساخت طلا چطور محاسبه می‌شه؟",
    a: "اجرت ساخت بر اساس میزان ظرافت، پیچیدگی طراحی و تکنیک‌های به‌کاررفته در ساخت طلا متفاوته. تمامی این مبالغ به‌طور شفاف در فاکتور نهایی درج می‌شن تا شما دقیق بدونید چه مقدار بابت وزن طلا و چه مقدار بابت هنر و زمان صرف‌شده در ساخت پرداخت کرده‌اید.",
    img: "/model-3.jpg",
  },
  {
    q: "آیا برای خرید طلا از سایت مالیات هم باید پرداخت کنم؟",
    a: "بله، طبق قوانین کشور، ۹ درصد مالیات بر ارزش افزوده روی اجرت ساخت طلا محاسبه می‌شه. این مبلغ قانونی بوده و در فاکتور رسمی درج می‌شه تا روند خرید شفاف و بدون ابهام باشه.",
    img: "/model-4.webp",
  },
  {
    q: "ارسال طلا از سایت به چه صورت انجام می‌شه؟",
    a: "سفارش‌ها با بسته‌بندی امن و بیمه کامل ارسال می‌شن. در تهران معمولاً از طریق پیک‌های مطمئن و در سایر شهرها با تیپاکس یا پست ویژه تحویل داده می‌شن. بیمه باعث می‌شه در صورت بروز هرگونه مشکل در مسیر، مشتری متضرر نشه.",
    img: "/model.jpg",
  },
  {
    q: "زمان تحویل طلا چقدره؟",
    a: "زمان تحویل برای تهران معمولاً یک روز کاریه. برای سایر شهرها بین ۲ تا ۴ روز کاری متفاوته. در صورتی که سفارش به‌صورت سفارشی‌سازی‌شده باشه، مدت زمان بیشتری (۷ تا ۱۴ روز) برای آماده‌سازی نیاز خواهد داشت.",
    img: "/braclet.webp",
  },
  {
    q: "اگر سایز یا طرح انتخابی مناسب نبود امکان تغییر یا مرجوع هست؟",
    a: "بله، یک‌بار تغییر سایز رایگان برای همه محصولات امکان‌پذیره. همچنین اگر به هر دلیلی از خرید رضایت نداشتید، تا ۷ روز کاری فرصت دارید محصول استفاده‌نشده رو مرجوع کنید تا یا تعویض بشه یا هزینه بازگردونده بشه.",
    img: "/chain.png",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExp: boolean) => {
      setExpanded(isExp ? panel : false);
    };

  const activeIdx = React.useMemo(() => {
    if (!expanded) return 0;
    const i = faqItems.findIndex((_, idx) => `panel-${idx + 1}` === expanded);
    return i === -1 ? 0 : i;
  }, [expanded]);

  return (
    <div className="w-full h-screen flex mt-[5vw] text-black">
      {/* Left: FAQ Accordions */}
      <div className="faq lg:w-1/2 w-full h-full flex flex-col justify-start  items-start overflow-y-auto lg:pr-[5vw] lg:px-0 px-5">
        <div
          className="w-full   
     border-[#111111]/7  rounded-2xl  flex justify-center gap-2 px-5  items-center flex-col"
        >
          {faqItems.map((item, i) => {
            const panelId = `panel-${i + 1}`;
            return (
              <Accordion
                key={panelId}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                TransitionProps={{ timeout: 300, easing: "ease-in-out" }} // <-- increase duration here
                sx={{
                  width: "100%",
                  mb: 1.5,
                  "&:before": { display: "none" },
                }}
                className="!rounded-[35px]  !border !border-white/20 !shadow-xl !shadow-black/20 !backdrop-blur-lg group !backdrop-brightness-200 !bg-gradient-to-br  !from-white/5 !from-10% !to-transparent !to-60%   !text-white/90 !bg-transparent
     !my-0 "
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      transition: "all 400ms ease",
                      opacity: "90%",

                      color: "white",
                      "& svg": {
                        fontSize: "17px", // smaller arrow icon
                      },
                    },
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                      transform: "rotate(180deg)",
                    },
                  }}
                  className="h-[75px] "
                >
                  <Typography
                    sx={{ fontFamily: "var(--font-peyda)" }}
                    className="!font-extralight"
                  >
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="opacity-70  !mb-6 !py-0">
                  <Typography
                    sx={{
                      fontFamily: "var(--font-peyda)",
                      lineHeight: 1.8,
                      fontSize: "14px",
                    }}
                    variant="body1"
                    className="!pl-[35px] !font-extralight"
                  >
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>

      {/* Right: Dynamic Image (only fade in new one) */}
      <div className="w-1/2 h-full lg:flex hidden justify-center items-start relative">
        <motion.div
          key={faqItems[activeIdx].img}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-2/3 h-2/3 !rounded-[35px]  !border !border-white/20 !shadow-xl !shadow-black/20 !backdrop-blur-lg group !backdrop-brightness-200 !bg-gradient-to-br  !from-white/5 !from-10% !to-transparent !to-60%"
        >
          <Image
            src={faqItems[activeIdx].img}
            alt={`faq-image-${activeIdx + 1}`}
            fill
            className="object-cover object-top rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
