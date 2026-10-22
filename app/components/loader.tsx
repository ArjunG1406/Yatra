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
    // 1.05s: "'27" badge slingshots and pops in close to the letter 'a'
    // 1.30s: "Hult Prize UCEK • Technopark" subline fades in
    // 2.15s: start smooth exit transition
    // 2.75s: completely remove from DOM
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2150);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2750);

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

        /* Dynamic Slingshot Pop & Elastic Bounce for '27 */
        @keyframes slingPopBadge {
          0% {
            opacity: 0;
            transform: scale(0.1) translate(50px, 30px) rotate(26deg);
          }
          48% {
            opacity: 1;
            transform: scale(1.32) translate(-7px, -4px) rotate(-9deg);
          }
          72% {
            transform: scale(0.92) translate(3px, 2px) rotate(3deg);
          }
          88% {
            transform: scale(1.05) translate(-1px, -1px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0, 0) rotate(0deg);
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

        .yathra-sling-badge {
          opacity: 0;
          transform-origin: center;
          animation: slingPopBadge 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.05s forwards;
        }

        .yathra-subline {
          opacity: 0;
          animation: fadeInSubline 0.6s ease-out 1.3s forwards;
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
          {/* Main Wordmark Canvas: Yathra + '27 snug right beside the final letter */}
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 306 85"
              className="w-[280px] sm:w-[350px] h-[78px] sm:h-[96px] overflow-visible"
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

              {/* ’27 Badge: Snug and close to the top-right shoulder of 'a' with Slingshot Pop Animation */}
              <g className="yathra-sling-badge" transform="translate(254, 25)">
                <rect
                  x="-3"
                  y="-16"
                  width="44"
                  height="26"
                  rx="8"
                  fill="#ffe4f0"
                  stroke="#ffb3d6"
                  strokeWidth="1.3"
                  style={{
                    filter: "drop-shadow(0 2px 6px rgba(255, 45, 135, 0.22))",
                  }}
                />
                <text
                  x="19"
                  y="2.5"
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16px",
                    fontWeight: 900,
                    fill: PINK,
                  }}
                >
                  ’27
                </text>
              </g>
            </svg>
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
