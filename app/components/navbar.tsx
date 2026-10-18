"use client";

import * as React from "react";
import Link from "next/link";

/**
 * Navbar — Yathra '26 (pairs with hero.tsx).
 *
 * Layout mirrors the original RAISE navbar:
 *   [ Program ▾  Participate ▾ ]   [ yathra wordmark ]   [ Register ]  [ Explore ▦ ▾ ]
 *
 * Requirements: React 18+, Tailwind CSS 3.2+.
 * Palette: white (primary) on black, hot pink #ff2d87, yellow #ffd23f.
 *
 * Behavior
 *   ≥ 1024px  three-column bar; dropdowns open on hover (mouse) or click
 *             (touch/keyboard), close on Escape / outside click
 *   < 1024px  logo + hamburger; full-width slide-down menu with all links,
 *             page scroll is locked while it is open
 *   Fixed to the top; transparent over the hero, blurred dark glass once
 *   the page is scrolled.
 */

const PINK = "#ff2d87";
const YELLOW = "#ffd23f";

type NavLink = { label: string; desc?: string; href: string };
type NavGroup = { id: string; label: string; links: NavLink[] };

/* ───────── Content (edit here) ───────── */

const PROGRAM: NavGroup = {
  id: "program",
  label: "Program",
  links: [
    { label: "Preliminary Round", desc: "Submit a one-page concept note", href: "#stages" },
    { label: "Semifinals", desc: "Online pitching round, top 16 advance", href: "#stages" },
    { label: "Founders Bootcamp", desc: "Business model, MVP and pitching", href: "#stages" },
    { label: "Grand Finale", desc: "Live at Travancore Hall, Technopark", href: "#stages" },
  ],
};

const PARTICIPATE: NavGroup = {
  id: "participate",
  label: "Participate",
  links: [
    { label: "Why Participate", desc: "Mentorship, exposure and networking", href: "#why" },
    { label: "Who Can Apply", desc: "UG, PG and doctoral students", href: "#eligibility" },
    { label: "Theme: Unlimited", desc: "Ideas aligned with the UN SDGs", href: "#theme" },
  ],
};

const EXPLORE: NavGroup = {
  id: "explore",
  label: "Explore Yathra",
  links: [
    { label: "About Yathra ’26", desc: "Hult Prize UCEK flagship program", href: "#about" },
    { label: "Partners", desc: "Organisations backing Yathra", href: "#partners" },
    { label: "Contact Us", desc: "hultprizeucek@gmail.com", href: "mailto:hultprizeucek@gmail.com" },
  ],
};

const REGISTER_HREF = "#register";

/* ───────── Icons ───────── */

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const TicketIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" />
    <path d="M14 6v12" strokeDasharray="2 3" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

/* ───────── Logo ───────── */

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Yathra ’26 — home"
      className="group flex flex-col items-center leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd23f]"
    >
      <span className="inline-flex items-start">
        <span
          className="text-[30px] text-white sm:text-[38px] lg:text-[40px]"
          style={{
            fontFamily: "'Outfit', 'Figtree', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.85,
          }}
        >
          yathra
        </span>
        <span
          className="ml-[3px] flex flex-col text-[9px] font-extrabold leading-[0.88] sm:text-[11px]"
          style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
        >
          <span>2</span>
          <span>7</span>
        </span>
      </span>
      <span
        className="mt-2 hidden whitespace-nowrap text-[6px] font-medium uppercase tracking-[0.34em] sm:block"
        style={{ color: PINK }}
      >
        A Million Dollar Journey
      </span>
    </Link>
  );
}

/* ───────── Dropdown (desktop) ───────── */

type DropdownProps = {
  group: NavGroup;
  open: boolean;
  onToggle: () => void;
  onHover: (v: boolean) => void;
  align?: "left" | "right";
  icon?: React.ReactNode;
  className: string;
};

function Dropdown({ group, open, onToggle, onHover, align = "left", icon, className }: DropdownProps) {
  const panelId = `nav-panel-${group.id}`;
  return (
    <div
      className="relative"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={className}
      >
        {group.label}
        {icon}
        {!icon && <Chevron open={open} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={`absolute top-full z-50 pt-3 ${align === "right" ? "right-0" : "left-0"}`}
      >
        <ul className="w-[320px] rounded-2xl border border-white/10 bg-[#0b0508]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {group.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
              >
                <span className="block text-[15px] font-semibold tracking-[-0.01em] text-white">
                  {l.label}
                </span>
                {l.desc && (
                  <span className="mt-0.5 block text-[13px] leading-snug text-white/55">
                    {l.desc}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───────── Navbar ───────── */

const dropdownBtn =
  "inline-flex h-[52px] items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.06] px-5 text-[17px] font-medium tracking-[-0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-colors hover:bg-white/[0.12] aria-expanded:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f] xl:h-[58px] xl:px-6";

const registerBtn =
  "inline-flex h-[52px] items-center gap-2.5 rounded-lg bg-white px-5 text-[17px] font-semibold tracking-[-0.02em] text-black shadow-[0_6px_24px_rgba(0,0,0,0.4)] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f] xl:h-[58px] xl:px-6";

const exploreBtn =
  "inline-flex h-[52px] items-center gap-2.5 rounded-lg border border-[#ff2d87]/40 bg-[#ff2d87]/15 px-5 text-[17px] font-medium tracking-[-0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur transition-colors hover:bg-[#ff2d87]/25 aria-expanded:bg-[#ff2d87]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f] xl:h-[58px] xl:px-6";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const barRef = React.useRef<HTMLElement>(null);

  /* scrolled style */
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* outside click + Escape */
  React.useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  /* lock page scroll while the mobile menu is open */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* close mobile menu when resizing up to desktop */
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const canHover = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const dd = (group: NavGroup) => ({
    group,
    open: openMenu === group.id,
    onToggle: () => setOpenMenu((m) => (m === group.id ? null : group.id)),
    onHover: (v: boolean) => {
      if (!canHover()) return;
      setOpenMenu((m) => (v ? group.id : m === group.id ? null : m));
    },
  });

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header
      ref={barRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-[#050204]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;800&family=Outfit:wght@800&display=swap');
`}</style>

      <nav
        aria-label="Main"
        className="mx-auto grid h-[76px] w-full max-w-[1760px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:h-[88px] sm:px-8 lg:h-[104px] xl:px-[72px]"
      >
        {/* Left — dropdowns (desktop) / logo (mobile) */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-2.5">
          <Dropdown {...dd(PROGRAM)} className={dropdownBtn} />
          <Dropdown {...dd(PARTICIPATE)} className={dropdownBtn} />
        </div>
        <div className="col-start-1 row-start-1 justify-self-start lg:hidden">
          <Logo />
        </div>

        {/* Center — logo (desktop) */}
        <div className="hidden lg:col-start-2 lg:block">
          <Logo />
        </div>

        {/* Right — CTAs (desktop) / hamburger (mobile) */}
        <div className="hidden items-center justify-end gap-2 lg:flex xl:gap-2.5">
          <a href={REGISTER_HREF} className={registerBtn}>
            Register
            <TicketIcon />
          </a>
          <Dropdown
            {...dd(EXPLORE)}
            align="right"
            icon={<GridIcon />}
            className={exploreBtn}
          />
        </div>
        <div className="col-start-3 row-start-1 justify-self-end lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white backdrop-blur transition-colors hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ───────── Mobile menu ───────── */}
      <div
        id="nav-mobile"
        hidden={!mobileOpen}
        className="max-h-[calc(100svh-76px)] overflow-y-auto overscroll-contain border-t border-white/10 px-5 pb-8 pt-5 sm:max-h-[calc(100svh-88px)] sm:px-8 lg:hidden"
      >
        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <a
              href={REGISTER_HREF}
              onClick={closeAll}
              className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-lg bg-white text-base font-semibold tracking-[-0.02em] text-black"
            >
              Register Now
              <TicketIcon />
            </a>
          </div>

          {[PROGRAM, PARTICIPATE, EXPLORE].map((g) => (
            <div key={g.id}>
              <p
                className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: PINK }}
              >
                {g.label}
              </p>
              <ul className="flex flex-col">
                {g.links.map((l) => (
                  <li key={l.label} className="border-b border-white/[0.07] last:border-b-0">
                    <a
                      href={l.href}
                      onClick={closeAll}
                      className="flex items-center justify-between gap-4 rounded-lg px-1 py-3.5 transition-colors hover:bg-white/[0.04]"
                    >
                      <span>
                        <span className="block text-[17px] font-semibold tracking-[-0.02em] text-white">
                          {l.label}
                        </span>
                        {l.desc && (
                          <span className="mt-0.5 block text-[13px] text-white/55">{l.desc}</span>
                        )}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        stroke={YELLOW}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}