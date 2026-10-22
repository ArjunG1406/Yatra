"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Trophy, Globe, Handshake } from "lucide-react";

const PINK = "#ff2d87";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ["about", "editions", "theme", "how-it-works", "partners"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Left Navigation Items: About & Past Chapters/Winners
  const leftItems: NavItem[] = [
    {
      id: "about",
      label: "About Yathra",
      href: "#about",
      icon: (active) => (
        <Home
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            active ? "text-[#ff2d87] scale-110 drop-shadow-xs" : "text-zinc-600 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.3 : 2}
        />
      ),
    },
    {
      id: "editions",
      label: "Past Editions & Winners",
      href: "#editions",
      icon: (active) => (
        <Trophy
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            active ? "text-[#ff2d87] scale-110 drop-shadow-xs" : "text-zinc-600 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.3 : 2}
        />
      ),
    },
  ];

  // Right Navigation Items: 17 UN SDGs & Partners
  const rightItems: NavItem[] = [
    {
      id: "theme",
      label: "17 UN SDGs",
      href: "#theme",
      icon: (active) => (
        <Globe
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            active ? "text-[#ff2d87] scale-110 drop-shadow-xs" : "text-zinc-600 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.3 : 2}
        />
      ),
    },
    {
      id: "partners",
      label: "Partners & Sponsors",
      href: "#partners",
      icon: (active) => (
        <Handshake
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            active ? "text-[#ff2d87] scale-110 drop-shadow-xs" : "text-zinc-600 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.3 : 2}
        />
      ),
    },
  ];

  return (
    <>
      <style>{`
        @keyframes liquidFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes centerPulseGlow {
          0%, 100% {
            box-shadow: 0 4px 18px rgba(255, 45, 135, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(0, 0, 0, 0.08);
          }
          50% {
            box-shadow: 0 6px 28px rgba(255, 45, 135, 0.65), inset 0 2px 6px rgba(255, 255, 255, 1), inset 0 -2px 4px rgba(0, 0, 0, 0.08);
          }
        }
        .liquid-dock {
          animation: liquidFloat 4s ease-in-out infinite;
        }
        .center-glass-button {
          animation: centerPulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* ─────────────────── FLOATING LIQUID GLASS DOCK ─────────────────── */}
      <nav
        aria-label="Liquid Glass Navigation"
        className="fixed bottom-4 sm:bottom-7 inset-x-0 z-[999] mx-auto w-[330px] sm:w-[440px] max-w-[calc(100vw-24px)] h-[62px] select-none liquid-dock pointer-events-auto"
      >
        {/* ─── DOCK GLASS BACKDROP (PILL CONTAINER) ─── */}
        <div
          className="absolute inset-0 w-full h-full rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.82) 100%)",
            border: "1.5px solid rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(28px) saturate(190%)",
            WebkitBackdropFilter: "blur(28px) saturate(190%)",
            boxShadow:
              "0 16px 36px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.95)",
          }}
        />

        {/* ─── UPWARD CREST DOME (INTEGRATED BEHIND CENTER MEDALLION) ─── */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[16px] w-[116px] h-[36px] pointer-events-none z-0">
          <svg
            viewBox="0 0 120 36"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="crestGlassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.92)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.85)" />
              </linearGradient>
              <linearGradient id="crestRimLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.85)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
              </linearGradient>
            </defs>

            {/* Smooth convex crest body merging seamlessly into the dock */}
            <path
              d="M 0 18 C 24 18, 34 0, 60 0 C 86 0, 96 18, 120 18 L 120 36 L 0 36 Z"
              fill="url(#crestGlassGrad)"
              style={{
                backdropFilter: "blur(28px) saturate(190%)",
                WebkitBackdropFilter: "blur(28px) saturate(190%)",
              }}
            />

            {/* Crisp top rim highlight */}
            <path
              d="M 0 18 C 24 18, 34 0, 60 0 C 86 0, 96 18, 120 18"
              stroke="url(#crestRimLight)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* ─── CENTER ELEVATED GLASS MEDALLION WITH LETTER 'Y' OF YATHRA (NON-CLICKABLE) ─── */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 z-20 flex flex-col items-center select-none pointer-events-none">
          <div
            className="center-glass-button relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-default"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 238, 246, 0.92) 100%)",
              border: "1.5px solid rgba(255, 255, 255, 1)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Stylized 'Y' of Yathra */}
            <span
              className="text-2xl sm:text-[26px] font-black leading-none select-none tracking-tight"
              style={{
                color: PINK,
                fontFamily: "'Outfit', sans-serif",
                filter: "drop-shadow(0 1px 2px rgba(255, 45, 135, 0.35))",
              }}
            >
              Y
            </span>
          </div>
        </div>

        {/* ─── DOCK INTERACTIVE BAR ─── */}
        <div className="relative w-full h-full px-3.5 sm:px-6 flex items-center justify-between z-10">
          {/* Left Navigation Icons (Home & Trophy) */}
          <div className="flex items-center gap-3 sm:gap-6">
            {leftItems.map((item) => {
              const active = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute -top-10 px-2.5 py-1 rounded-lg bg-zinc-950/90 text-white text-[11px] font-bold tracking-tight shadow-md backdrop-blur-md pointer-events-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-150">
                      {item.label}
                    </div>
                  )}

                  <a
                    href={item.href}
                    aria-label={item.label}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:scale-115 active:scale-95 group focus:outline-none"
                  >
                    {/* Soft Glass Glow on Active / Hover */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-white/70 shadow-xs border border-white/90"
                          : "bg-transparent group-hover:bg-white/40"
                      }`}
                    />
                    <div className="relative z-10">{item.icon(active)}</div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Center Gap for the Medallion */}
          <div className="w-12 sm:w-14 shrink-0" aria-hidden="true" />

          {/* Right Navigation Icons (Globe & Handshake) */}
          <div className="flex items-center gap-3 sm:gap-6">
            {rightItems.map((item) => {
              const active = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute -top-10 px-2.5 py-1 rounded-lg bg-zinc-950/90 text-white text-[11px] font-bold tracking-tight shadow-md backdrop-blur-md pointer-events-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-150">
                      {item.label}
                    </div>
                  )}

                  <a
                    href={item.href}
                    aria-label={item.label}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:scale-115 active:scale-95 group focus:outline-none"
                  >
                    {/* Soft Glass Glow on Active / Hover */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-white/70 shadow-xs border border-white/90"
                          : "bg-transparent group-hover:bg-white/40"
                      }`}
                    />
                    <div className="relative z-10">{item.icon(active)}</div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
