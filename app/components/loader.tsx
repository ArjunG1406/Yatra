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
    // 0.0s - 1.55s: pink writing stroke animation draws "Yathra" and fills in
    // 1.05s: "'27" badge pops in on the RIGHT side
    // 1.25s: "Hult Prize UCEK • Technopark" subline fades in
    // 2.10s: start smooth exit transition
    // 2.70s: completely remove from DOM
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2100);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2700);

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
        @keyframes drawOutfitPinkStroke {
          0% {
            stroke-dashoffset: 1500;
            fill: rgba(255, 45, 135, 0);
          }
          65% {
            stroke-dashoffset: 0;
            fill: rgba(255, 45, 135, 0);
          }
          85%, 100% {
            stroke-dashoffset: 0;
            fill: #ff2d87;
          }
        }

        @keyframes popBadgeRight {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-8deg);
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

        .outfit-pink-draw-text {
          font-family: 'Outfit', sans-serif;
          stroke: #ff2d87;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          letter-spacing: 0.08em;
          animation: drawOutfitPinkStroke 1.65s cubic-bezier(0.42, 0, 0.22, 1) forwards;
        }

        .yathra-right-badge {
          opacity: 0;
          transform-origin: center;
          animation: popBadgeRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards;
        }

        .yathra-subline {
          opacity: 0;
          animation: fadeInSubline 0.6s ease-out 1.25s forwards;
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
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none yathra-bg-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 45, 135, 0.16) 0%, rgba(255, 45, 135, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Central Brand Lockup */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-lg w-full">
          {/* Main Wordmark Row: 'Yathra' on Left + ''27' Badge Strictly on the RIGHT */}
          <div className="relative flex items-start justify-center">
            {/* SVG Canvas for 'Yathra' Writing Animation with generous letter spacing */}
            <svg
              viewBox="0 0 320 85"
              className="w-[260px] sm:w-[325px] h-[70px] sm:h-[86px] overflow-visible"
              fill="none"
            >
              {/* Subtle Ghost Under-layer for Instant Legibility */}
              <text
                x="4"
                y="66"
                className="select-none"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "70px",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  fill: "rgba(255, 45, 135, 0.06)",
                }}
              >
                Yathra
              </text>

              {/* Main Animated Pink Stroke Writing with Clean Letter Spacing */}
              <text
                x="4"
                y="66"
                className="outfit-pink-draw-text select-none"
                style={{
                  fontSize: "70px",
                  fontWeight: 900,
                  filter: "drop-shadow(0 2px 12px rgba(255, 45, 135, 0.38))",
                }}
              >
                Yathra
              </text>
            </svg>

            {/* ’27 Badge: Physically Placed on the RIGHT Side */}
            <div
              className="yathra-right-badge ml-2 sm:ml-3 mt-1 sm:mt-1.5 shrink-0"
              style={{
                padding: "3px 9px",
                borderRadius: "10px",
                backgroundColor: "#ffe4f0",
                border: "1.5px solid #ffb3d6",
                boxShadow: "0 2px 8px rgba(255, 45, 135, 0.18)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "16px",
                  fontWeight: 900,
                  color: PINK,
                  lineHeight: 1,
                  display: "block",
                }}
              >
                ’27
              </span>
            </div>
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
