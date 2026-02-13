"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const router = useRouter();

  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Don't do this to me",
    "I will be very sad...",
    "I will be very very very sad"
  ];

  const handleNoClick = () => {
    const nextCount = noClickCount + 1;
    setNoClickCount(nextCount);

    // Full screen after the 5th click (index 5 in noTexts or after "I will be very sad...")
    // Matching script.js behavior: noClickCount >= 5 trigger
    if (nextCount > 5) {
      setIsFullScreen(true);
    }
  };

  const handleYesClick = () => {
    router.push("/success");
  };

  const currentNoText = noClickCount < noTexts.length
    ? noTexts[noClickCount]
    : "Please? 🥺";

  // Growth logic: extremely dramatic growth to cover most of the screen quickly
  const scaleFactor = 1 + (noClickCount * 4);

  // Further increase movement to stay ahead of the massive Yes button
  // 15vw per click, capped at 48vw to stay inside the screen
  const moveX = Math.min(noClickCount * 15, 48);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4 relative overflow-hidden">
      <div className="text-center relative z-[1] w-full flex flex-col items-center px-4">
        <h1 className="text-[3rem] font-bold text-[#ff6b9d] mb-[40px] leading-tight transition-opacity duration-300" style={{ opacity: isFullScreen ? 0 : 1 }}>
          Will you be my valentine
        </h1>

        <div className="relative w-[280px] h-[280px] mx-auto transition-opacity duration-300" style={{ opacity: isFullScreen ? 0 : 1 }}>
          <Image
            src="/bugcat.webp"
            alt="Cute Bugcat"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-center relative min-h-[200px] w-full gap-[40px] max-w-5xl">
          <button
            onClick={handleYesClick}
            style={{
              "--scale": scaleFactor,
              transformOrigin: "center center",
              zIndex: 50, // Yes button stays prominent
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
            } as React.CSSProperties}
            className={`btn yes-btn-custom ${isFullScreen ? 'full-screen-btn' : ''}`}
          >
            {isFullScreen ? "YES! 💕" : "Yes"}
          </button>

          {!isFullScreen && (
            <button
              onClick={handleNoClick}
              style={{
                transform: `translateX(${moveX}vw)`,
                zIndex: 1000, // No button MUST be on top to be clickable
                transition: "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                backgroundColor: "white"
              }}
              className="btn no-btn-custom absolute left-1/2 whitespace-nowrap shadow-2xl"
            >
              {currentNoText}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
