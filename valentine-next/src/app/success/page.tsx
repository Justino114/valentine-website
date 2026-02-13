"use client";

import Image from "next/image";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-success-page p-4 text-center overflow-hidden">
      <div className="max-w-md w-full animate-bounce-slow">
        <h1 className="text-[3rem] font-bold text-[#ff4d8d] mb-[30px] leading-tight">
          Hehehe I knew it! 💕
        </h1>

        <div className="relative w-[300px] h-[300px] mx-auto mb-[30px]">
          <Image
            src="/Bugcat End.webp"
            alt="Happy Bugcat"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-[1.5rem] text-[#ff8fab] font-semibold italic">
          See you on Valentine's Day! 🌹
        </p>
      </div>
    </main>
  );
}
