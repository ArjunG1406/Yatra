"use client";

import React, { useEffect, useState } from "react";

const PINK = "#ff2d87";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setVisible(false);
        return;
      }
    }

    // Sequence timing:
    // 0.0s - 0.75s: standard wordmark reveals
    // 0.55s: "'27" badge pops in on the right
    // 0.85s: "Hult Prize UCEK • Technopark" fades in
    // 2.05s: start smooth exit transition
    // 2.65s: completely remove from DOM
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2050);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2650);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Allow clicking anywhere to skip
  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes titleEntrance {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes popBadge {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          65% {
            transform: scale(1.15) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fadeInSubline {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ambientGlowPulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.08);
          }
        }

        .yathra-title-reveal {
          animation: titleEntrance 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .yathra-year-badge {
          opacity: 0;
          transform-origin: center;
          animation: popBadge 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s forwards;
        }

        .yathra-subline {
          opacity: 0;
          animation: fadeInSubline 0.6s ease-out 0.85s forwards;
        }

        .yathra-bg-glow {
          animation: ambientGlowPulse 3s ease-in-out infinite;
        }
      `}</style>

      <div
        role="status"
        aria-label="Loading Yathra ’27"
        onClick={handleSkip}
        className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white cursor-pointer select-none transition-all duration-600 ease-out ${
          exiting
            ? "opacity-0 pointer-events-none scale-105 blur-sm"
            : "opacity-100 pointer-events-auto scale-100 blur-0"
        }`}
      >
        {/* Soft Radial Ambient Pink Glow Behind Writing */}
        <div
          className="absolute w-[360px] h-[360px] rounded-full pointer-events-none yathra-bg-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 45, 135, 0.14) 0%, rgba(255, 45, 135, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Central Brand Lockup */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-md w-full">
          {/* Wordmark: Standard Font 'Outfit' with '27 on the RIGHT side */}
          <div className="relative inline-flex items-start">
            <h1
              className="yathra-title-reveal text-5xl sm:text-7xl font-black tracking-[-0.04em] text-zinc-950 uppercase select-none leading-none"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra
            </h1>

            {/* ’27 Badge on the RIGHT side */}
            <span
              className="yathra-year-badge ml-2 sm:ml-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-sm sm:text-base font-black bg-[#ffe4f0] text-[#ff2d87] border border-[#ffb3d6] shadow-2xs self-start leading-none"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ’27
            </span>
          </div>

          {/* Subtitle & Status */}
          <div className="yathra-subline mt-4 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px] font-bold tracking-[0.22em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87] animate-pulse" />
              <span>Hult Prize UCEK</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-400 font-medium">Technopark</span>
            </div>

            {/* Sleek Minimal Progress Fill Rail */}
            <div className="w-24 h-1 rounded-full bg-zinc-100 overflow-hidden relative">
              <div
                className="h-full rounded-full bg-[#ff2d87] transition-all duration-1700 ease-out"
                style={{
                  width: exiting ? "100%" : "85%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Subtle Tap to Skip Hint */}
        <span className="absolute bottom-6 text-[10px] font-mono tracking-wider uppercase text-zinc-400/80">
          Tap anywhere to skip
        </span>
      </div>
    </>
  );
}
