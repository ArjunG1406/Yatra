"use client";

import * as React from "react";
import Link from "next/link";

const PINK = "#ff2d87";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Past Editions", href: "#editions" },
  { label: "Themes & SDGs", href: "#theme" },
  { label: "Stages", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
  { label: "Eligibility", href: "#eligibility" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-white/90 backdrop-blur-sm border-b border-zinc-100"
      }`}
    >
      <div className="mx-auto flex h-[68px] sm:h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Yathra ’27 Home"
        >
          <div className="flex items-baseline">
            <span
              className="text-[26px] sm:text-[30px] font-black tracking-[-0.06em] text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra
            </span>
            <span
              className="ml-0.5 text-sm sm:text-base font-black"
              style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
            >
              ’27
            </span>
          </div>

          <span className="hidden md:inline-flex items-center gap-1.5 pl-3 border-l border-zinc-200 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87] animate-pulse" />
            Hult Prize UCEK
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-semibold text-zinc-600 hover:text-[#ff2d87] tracking-tight transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://hultprize.uck.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-[13px] font-bold text-white tracking-tight shadow-sm hover:bg-[#ff2d87] transition-all duration-200"
          >
            Register for ’27
            <span className="text-zinc-400 font-normal">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://hultprize.uck.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-zinc-950 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#ff2d87] transition-colors"
          >
            Register
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 transition-colors hover:bg-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-zinc-200 bg-white px-6 py-8 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-bold text-zinc-900 hover:text-[#ff2d87] py-2 border-b border-zinc-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-400 text-sm">→</span>
              </a>
            ))}
            <a
              href="https://hultprize.uck.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white hover:bg-[#ff2d87] transition-colors shadow-sm"
            >
              Register for Yathra ’27 →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
