"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export default function FooterTwo() {
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = innerRef.current;
    if (!target) return;

    // Animate from 25rem down to 0rem
    gsap.fromTo(
      target,
      { y: "25rem" }, // initial offset
      {
        y: "0rem",     // final position
        ease: "none",
        scrollTrigger: {
          trigger: document.body,   // scroll the whole page
          start: "bottom-=1100 bottom", // start 400px before bottom
          end: "bottom-=400 bottom",        // finish at bottom
          scrub: true,                 // scroll-sensitive
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <footer className="w-full bg-[#0f0c11] md:fixed bottom-0 text-white pt-16 pb-6 ">
      <div
        ref={innerRef}
        className="footer-inner max-w-7xl mx-auto px-6 lg:px-10 translate-y-96"
      >
        {/* Brand + Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3">
              {/* <Image
                src="/logo.png"
                alt="ACCMarket"
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <h2 className="text-2xl font-bold tracking-wide eng">
                ACCMarket
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="eng">ACCMarket </span>مرجع تخصصی فروش اکانت
              سرویس‌های بین‌المللی مثل{" "}
              <span className="eng">
                Spotify، Netflix، ChatGPT، Midjourney و VPN
              </span>
              های امن با تحویل فوری و پشتیبانی ۲۴ ساعته است.
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-3">
            <Image
              src="/payment-visa.svg"
              alt="Visa"
              width={40}
              height={40}
              className="opacity-70 eng"
            />
            <Image
              src="/payment-master.svg"
              alt="Mastercard"
              width={40}
              height={40}
              className="opacity-70 eng"
            />
            <Image
              src="/payment-paypal.svg"
              alt="PayPal"
              width={40}
              height={40}
              className="opacity-70 eng"
            />
          </div> */}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 py-10 border-b border-white/10 text-sm">
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="text-white  mb-4 text-lg"> لینک‌های سریع</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/">خانه</Link>
              </li>
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/contact">تماس با ما</Link>
              </li>
              <li>
                <Link href="/privacy">حریم خصوصی</Link>
              </li>
              <li>
                <Link href="/terms">قوانین سایت</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h3 className="text-white  mb-4 text-lg"> خدمات</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/spotify" className="eng">
                  Spotify Premium
                </Link>
              </li>
              <li>
                <Link href="/netflix" className="eng">
                  Netflix
                </Link>
              </li>
              <li>
                <Link href="/chatgpt" className="eng">
                  ChatGPT Plus
                </Link>
              </li>
              <li>
                <Link href="/midjourney" className="eng">
                  Midjourney
                </Link>
              </li>
              <li>
                <Link href="/vpn" className="eng">
                  VPN & Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-white  mb-4 text-lg"> پشتیبانی</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/faq">سوالات متداول</Link>
              </li>
              <li>
                <Link href="/support">درخواست پشتیبانی</Link>
              </li>
              <li>
                <Link href="/refund">درخواست بازگشت وجه</Link>
              </li>
              <li>
                <Link href="/orders">پیگیری سفارش</Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Socials */}
          <div>
            <h3 className="text-white  mb-4 text-lg"> شبکه‌ها</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="eng"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://t.me" target="_blank" className="eng">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="mailto:support@accmarket.com" className="eng">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/989000000000" className="eng">
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6 text-sm text-white/60 gap-4">
          <p>
            © {new Date().getFullYear()} <span className="eng">ACCMarket</span>{" "}
            — تمام حقوق محفوظ است.
          </p>
          {/* <p className="text-white/70">
            ساخته‌شده با ❤️ توسط تیم <span className="eng">Beheshtian</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
