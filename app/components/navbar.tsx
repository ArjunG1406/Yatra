"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { Home, Trophy, Globe, Handshake } from "lucide-react";

const PINK = "#ff2d87";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

/**
 * Generates a mathematical SVG path for a liquid-glass dock container
 * with a continuous smooth organic crest/hump centered over the circular medallion.
 * Zero seams, zero box artifacts.
 */
function getCrestedPath(w: number, baseH: number, humpH: number, humpW: number): string {
  const rEnd = baseH / 2;
  const cx = w / 2;
  const topY = humpH;
  const botY = humpH + baseH;
  const peakY = 2; // subtle margin for anti-aliased border stroke
  const hw = humpW; // half-width of the crest transition

  // Smooth cubic Bézier control points for C1 continuous fillet transition
  const p1x = cx - hw * 0.55;
  const p2x = cx - hw * 0.38;
  const p3x = cx + hw * 0.38;
  const p4x = cx + hw * 0.55;

  return [
    `M ${rEnd} ${topY}`,
    `L ${cx - hw} ${topY}`,
    `C ${p1x} ${topY}, ${p2x} ${peakY}, ${cx} ${peakY}`,
    `C ${p3x} ${peakY}, ${p4x} ${topY}, ${cx + hw} ${topY}`,
    `L ${w - rEnd} ${topY}`,
    `A ${rEnd} ${rEnd} 0 0 1 ${w} ${topY + rEnd}`,
    `A ${rEnd} ${rEnd} 0 0 1 ${w - rEnd} ${botY}`,
    `L ${rEnd} ${botY}`,
    `A ${rEnd} ${rEnd} 0 0 1 0 ${topY + rEnd}`,
    `A ${rEnd} ${rEnd} 0 0 1 ${rEnd} ${topY}`,
    "Z",
  ].join(" ");
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dockWidth, setDockWidth] = useState(440);
  const navRef = useRef<HTMLElement>(null);

  // Measure dock width responsively
  useEffect(() => {
    const updateWidth = () => {
      if (navRef.current) {
        const measured = navRef.current.getBoundingClientRect().width;
        if (measured > 0) {
          setDockWidth(measured);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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

  // Compute crested silhouette path
  const baseH = 58;
  const humpH = 12;
  const humpW = 44;
  const pathD = useMemo(
    () => getCrestedPath(dockWidth, baseH, humpH, humpW),
    [dockWidth]
  );

  // Left Navigation Items: About & Past Chapters/Winners
  const leftItems: NavItem[] = [
    {
      id: "about",
      label: "About Yathra",
      href: "#about",
      icon: (active) => (
        <Home
          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-all duration-300 ${
            active ? "text-[#ff2d87]" : "text-zinc-700 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.4 : 2.2}
        />
      ),
    },
    {
      id: "editions",
      label: "Past Editions & Winners",
      href: "#editions",
      icon: (active) => (
        <Trophy
          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-all duration-300 ${
            active ? "text-[#ff2d87]" : "text-zinc-700 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.4 : 2.2}
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
          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-all duration-300 ${
            active ? "text-[#ff2d87]" : "text-zinc-700 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.4 : 2.2}
        />
      ),
    },
    {
      id: "partners",
      label: "Partners & Sponsors",
      href: "#partners",
      icon: (active) => (
        <Handshake
          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-all duration-300 ${
            active ? "text-[#ff2d87]" : "text-zinc-700 hover:text-zinc-950"
          }`}
          strokeWidth={active ? 2.4 : 2.2}
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
            box-shadow: 0 4px 18px rgba(255, 45, 135, 0.35), 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1);
          }
          50% {
            box-shadow: 0 6px 26px rgba(255, 45, 135, 0.60), 0 2px 8px rgba(0, 0, 0, 0.10), inset 0 1px 2px rgba(255, 255, 255, 1);
          }
        }
        .liquid-dock {
          animation: liquidFloat 4.5s ease-in-out infinite;
        }
        .center-glass-button {
          animation: centerPulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* ─────────────────── WHITE CRESTED LIQUID GLASS DOCK ─────────────────── */}
      <nav
        ref={navRef}
        aria-label="Liquid Glass Navigation"
        className="fixed bottom-4 sm:bottom-7 inset-x-0 z-[999] mx-auto w-[340px] sm:w-[440px] max-w-[calc(100vw-24px)] h-[72px] select-none liquid-dock pointer-events-auto"
        style={{
          filter:
            "drop-shadow(0 14px 34px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.04))",
        }}
      >
        {/* Hidden SVG Clip Definition */}
        <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="white-crested-dock-clip" clipPathUnits="userSpaceOnUse">
              <path d={pathD} />
            </clipPath>
          </defs>
        </svg>

        {/* ─── 1. FROSTED WHITE GLASS TRANSLUCENT CONTAINER (CLIPPED TO CREST) ─── */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-200"
          style={{
            clipPath: "url(#white-crested-dock-clip)",
            WebkitClipPath: "url(#white-crested-dock-clip)",
            backdropFilter: "blur(28px) saturate(190%)",
            WebkitBackdropFilter: "blur(28px) saturate(190%)",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 100%)",
          }}
        />

        {/* ─── 2. SVG SPECULAR RIM STROKE ─── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${dockWidth} 72`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={pathD}
            stroke="rgba(255, 255, 255, 0.98)"
            strokeWidth="1.5"
          />
        </svg>

        {/* ─── 3. SOFT PINK AMBIENT GLOW AURA BEHIND THE MEDALLION ─── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-15"
          style={{
            top: "38px",
            transform: "translate(-50%, -50%)",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 45, 135, 0.40) 0%, rgba(255, 45, 135, 0.16) 45%, transparent 75%)",
            filter: "blur(12px)",
          }}
        />

        {/* ─── 4. CENTER ELEVATED WHITE MEDALLION WITH LETTER 'Y' ─── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center select-none"
          style={{ top: "38px" }}
        >
          <div
            className="center-glass-button relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-default bg-white transition-transform duration-300 hover:scale-105"
            style={{
              border: "2px solid #ffffff",
            }}
          >
            {/* Stylized 'Y' of Yathra */}
            <span
              className="text-2xl sm:text-[26px] font-black leading-none select-none tracking-tight"
              style={{
                color: PINK,
                fontFamily: "'Outfit', sans-serif",
                filter: "drop-shadow(0 1px 2px rgba(255, 45, 135, 0.4))",
              }}
            >
              Y
            </span>
          </div>
        </div>

        {/* ─── 5. DOCK INTERACTIVE BAR (ICONS & TOOLTIPS) ─── */}
        <div
          className="relative w-full h-[58px] px-3.5 sm:px-7 flex items-center justify-between z-10"
          style={{ top: `${humpH}px` }}
        >
          {/* Left Navigation Icons (Home & Trophy) */}
          <div className="flex items-center gap-3 sm:gap-5">
            {leftItems.map((item) => {
              const active = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute -top-11 px-2.5 py-1 rounded-lg bg-zinc-950/95 text-white text-[11px] font-bold tracking-tight shadow-xl backdrop-blur-md border border-white/10 pointer-events-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-150">
                      {item.label}
                    </div>
                  )}

                  <a
                    href={item.href}
                    aria-label={item.label}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
                  >
                    {/* Active White Circular Badge / Inactive Hover State */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-zinc-200/60 scale-105"
                          : "bg-transparent group-hover:bg-zinc-100/60"
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
          <div className="flex items-center gap-3 sm:gap-5">
            {rightItems.map((item) => {
              const active = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute -top-11 px-2.5 py-1 rounded-lg bg-zinc-950/95 text-white text-[11px] font-bold tracking-tight shadow-xl backdrop-blur-md border border-white/10 pointer-events-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-150">
                      {item.label}
                    </div>
                  )}

                  <a
                    href={item.href}
                    aria-label={item.label}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
                  >
                    {/* Active White Circular Badge / Inactive Hover State */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-zinc-200/60 scale-105"
                          : "bg-transparent group-hover:bg-zinc-100/60"
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
