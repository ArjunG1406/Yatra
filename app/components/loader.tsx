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
    // 0.0s - 1.65s: handwriting stroke draws "Yathra"
    // 1.15s: hand-drawn underline doodle draws in
    // 1.25s: "'27" badge pops in
    // 1.40s: "Hult Prize UCEK" fades in
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
        @keyframes drawCaveatStroke {
          0% {
            stroke-dashoffset: 1300;
            fill: transparent;
          }
          65% {
            stroke-dashoffset: 0;
            fill: transparent;
          }
          85%, 100% {
            stroke-dashoffset: 0;
            fill: #ff2d87;
          }
        }

        @keyframes drawDoodleLine {
          0% {
            stroke-dashoffset: 320;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes popBadge {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-14deg);
          }
          65% {
            transform: scale(1.15) rotate(4deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fadeInSubline {
          0% {
            opacity: 0;
            transform: translateY(6px);
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

        .caveat-draw-text {
          font-family: 'Caveat', cursive;
          stroke: #ff2d87;
          stroke-width: 3.6;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1300;
          stroke-dashoffset: 1300;
          animation: drawCaveatStroke 1.7s cubic-bezier(0.42, 0, 0.22, 1) forwards;
        }

        .caveat-underline-doodle {
          stroke: #ff2d87;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          animation: drawDoodleLine 0.75s ease-out 1.1s forwards;
        }

        .yathra-year-badge {
          opacity: 0;
          transform-origin: center;
          animation: popBadge 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.25s forwards;
        }

        .yathra-subline {
          opacity: 0;
          animation: fadeInSubline 0.55s ease-out 1.4s forwards;
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
          className="absolute w-[380px] h-[380px] rounded-full pointer-events-none yathra-bg-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 45, 135, 0.14) 0%, rgba(255, 45, 135, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Central Writing Canvas */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-md w-full">
          <svg
            viewBox="0 0 460 170"
            className="w-[300px] sm:w-[410px] overflow-visible"
            fill="none"
          >
            <defs>
              {/* Soft Luminous Drop Shadow */}
              <filter id="caveatGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rotated handwriting group with natural spontaneous upward tilt */}
            <g transform="rotate(-7 230 85)">
              {/* 1. Ghost Under-layer for Instant Legibility */}
              <text
                x="210"
                y="98"
                textAnchor="middle"
                className="select-none font-bold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "112px",
                  fontWeight: 700,
                  fill: "rgba(255, 45, 135, 0.05)",
                }}
              >
                Yathra
              </text>

              {/* 2. Main Animated Handwriting Stroke */}
              <text
                x="210"
                y="98"
                textAnchor="middle"
                className="caveat-draw-text select-none font-bold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "112px",
                  fontWeight: 700,
                  filter: "drop-shadow(0 2px 8px rgba(255, 45, 135, 0.35))",
                }}
              >
                Yathra
              </text>

              {/* 3. Hand-drawn Underline Doodle */}
              <path
                d="M 85 118 C 160 134, 255 132, 345 112"
                className="caveat-underline-doodle"
                style={{
                  filter: "drop-shadow(0 1px 4px rgba(255, 45, 135, 0.3))",
                }}
              />

              {/* 4. Pop-in Year Tag: ’27 */}
              <g className="yathra-year-badge" transform="translate(345, 30)">
                <rect
                  x="-4"
                  y="-18"
                  width="44"
                  height="28"
                  rx="8"
                  fill="#ffe4f0"
                  stroke="#ffb3d6"
                  strokeWidth="1"
                />
                <text
                  x="18"
                  y="2"
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "18px",
                    fontWeight: 900,
                    fill: PINK,
                  }}
                >
                  ’27
                </text>
              </g>
            </g>
          </svg>

          {/* Subtitle & Status */}
          <div className="yathra-subline mt-2 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px] font-bold tracking-[0.22em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87] animate-pulse" />
              <span>Hult Prize UCEK</span>
              
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
