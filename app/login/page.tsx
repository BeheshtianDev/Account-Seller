"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log(isLogin ? "Logging in..." : "Registering...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#161218] to-[#2a1e35] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#221a2b] w-full max-w-md p-8 rounded-2xl shadow-2xl border border-[#3a2f45] text-white"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "ورود به حساب" : "ساخت حساب جدید"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="نام کاربری"
              className="p-3 rounded-lg bg-[#2f2538] border border-[#3f334a] focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="ایمیل"
            className="p-3 rounded-lg bg-[#2f2538] border border-[#3f334a] focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              className="w-full p-3 rounded-lg bg-[#2f2538] border border-[#3f334a] focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            ></button>
          </div>

          <button
            type="submit"
            className="mt-2 bg-purple-600 hover:bg-purple-700 transition-all p-3 rounded-lg font-semibold"
          >
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          {isLogin ? "حسابی ندارید؟" : "قبلاً ثبت‌نام کرده‌اید؟"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
          </button>
        </p>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#3f334a]"></div>
          <span className="text-gray-400 text-sm">یا</span>
          <div className="flex-1 h-px bg-[#3f334a]"></div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="bg-[#2f2538] hover:bg-[#3a2f45] transition-all p-3 rounded-lg font-medium">
            ورود با    <span className="eng">Google</span>
          </button>
          <button className="bg-[#2f2538] hover:bg-[#3a2f45] transition-all p-3 rounded-lg font-medium">
            ورود با    <span className="eng">GitHub</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
