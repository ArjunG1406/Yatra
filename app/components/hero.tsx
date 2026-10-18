import * as React from "react";

/**
 * Hero — Yathra '26 · Hult Prize UCEK Qualifiers (navbar not included).
 *
 * Same structure as the RAISE hero: three-part headline, subtitle with bold
 * spans, two CTAs, two partner cards. The announcement pill is removed.
 *
 * Requirements: React 18+, Tailwind CSS 3.2+.
 * Palette: white (primary) on black, hot pink #ff2d87, yellow #ffd23f.
 *
 * Breakpoints:
 *   < 640px   headline stacks (wordmark above "is UNLIMITED"), CTAs and cards
 *             go full-width and stack
 *   ≥ 640px   headline on one row, CTAs side by side
 *   ≥ 1024px  full desktop spacing and sizes
 *
 * Props let you swap in real assets: `backdropSrc` (e.g. the pink 3D India
 * map from the brochure, transparent PNG/WebP) and `hultLogoSrc` (official
 * Hult Prize logo) — the SVG stand-ins below are approximations.
 */

const PINK = "#ff2d87";
const YELLOW = "#ffd23f";

type HeroProps = {
  backdropSrc?: string;
  hultLogoSrc?: string;
  registerHref?: string;
  contactHref?: string;
  onRegister?: () => void;
};

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;800&family=Outfit:wght@800&family=Instrument+Serif:ital@1&display=swap');
`;

/* Stand-in for the glowing India map: a "journey" route with a pin */
function JourneyBackdrop() {
  return (
    <svg viewBox="0 0 700 460" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <radialGradient id="yg" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={PINK} stopOpacity="0.55" />
          <stop offset="0.6" stopColor={PINK} stopOpacity="0.15" />
          <stop offset="1" stopColor={PINK} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="yr" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="0.6" stopColor={PINK} stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
        <filter id="yb" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <ellipse cx="350" cy="230" rx="330" ry="210" fill="url(#yg)" />
      <g filter="url(#yb)">
        <circle cx="350" cy="230" r="170" stroke={PINK} strokeOpacity="0.28" strokeWidth="1.5" />
        <circle cx="350" cy="230" r="230" stroke="#fff" strokeOpacity="0.1" strokeWidth="1" />
        <path
          d="M70 380 C 190 120, 400 380, 600 90"
          stroke="url(#yr)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />
      </g>
      <circle cx="70" cy="380" r="7" fill="#fff" />
      {/* pin */}
      <path
        d="M600 62c-15 0-27 12-27 27 0 20 27 46 27 46s27-26 27-46c0-15-12-27-27-27z"
        fill={YELLOW}
      />
      <circle cx="600" cy="89" r="9" fill="#0a0507" />
    </svg>
  );
}

/* Approximation of the Hult Prize "H" mark */
function HultMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 40" className={className} fill="currentColor" aria-hidden>
      <path d="M0 4a4 4 0 0 1 4-4h8v40H4a4 4 0 0 1-4-4V4zM32 0h8a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-8V0zM12 15h20v10H12z" />
    </svg>
  );
}

const ctaBase =
  "group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-lg px-6 text-base font-semibold tracking-[-0.02em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f] sm:h-[58px] sm:w-auto sm:px-[26px] sm:text-[18px] lg:h-[62px] lg:text-[19px]";

const cardBase =
  "flex h-[72px] w-full max-w-[420px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur sm:h-[80px] sm:w-auto sm:max-w-none sm:px-7 lg:h-[90px] lg:px-[30px]";

export default function Hero({
  backdropSrc,
  hultLogoSrc,
  registerHref = "#register",
  contactHref = "mailto:hultprizeucek@gmail.com",
  onRegister,
}: HeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#050204] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44"
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
      <style>{FONT_IMPORT}</style>

      {/* ───────── Background: pink stage lights ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 38% at 50% -6%, rgba(255,45,135,0.38) 0%, rgba(120,20,70,0.22) 45%, rgba(5,2,4,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[32%] opacity-70 sm:h-[40%]"
          style={{
            background:
              "radial-gradient(10% 70% at 70% 0%, rgba(255,45,135,0.4), transparent 70%), radial-gradient(10% 70% at 82% 0%, rgba(255,210,63,0.18), transparent 70%), radial-gradient(10% 70% at 30% 0%, rgba(255,45,135,0.3), transparent 70%), radial-gradient(10% 70% at 18% 0%, rgba(255,255,255,0.1), transparent 70%)",
            filter: "blur(18px)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        {/* warm glow rising from the bottom, as on the brochure */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,45,135,0.18), transparent)",
          }}
        />
        <div
          className="absolute left-1/2 top-[34%] h-[46%] w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-[46%]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,45,135,0.28), transparent)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* ───────── Headline + subtitle ───────── */}
      <div className="relative w-full max-w-[1110px] min-[1900px]:max-w-[1250px]">
        {/* Backdrop behind the headline */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34%] aspect-[700/460] w-[125%] -translate-x-1/2 -translate-y-1/2 opacity-80 [mask-image:radial-gradient(closest-side,#000_70%,transparent)] sm:top-[38%] sm:w-[62%] sm:opacity-90 lg:w-[56%]"
        >
          {backdropSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={backdropSrc} alt="" className="h-full w-full object-contain" />
          ) : (
            <JourneyBackdrop />
          )}
        </div>

        <h1 className="relative z-10 m-0 w-full [container-type:inline-size]">
          <span className="sr-only">Yathra is unlimited</span>
          <span
            aria-hidden
            className="flex w-full flex-col items-center gap-[3cqw] sm:flex-row sm:justify-center sm:gap-0"
          >
            {/* Wordmark: "yathra" + stacked pink 26 */}
            <span className="inline-flex shrink-0 items-start">
              <span
                className="text-white [font-size:26cqw] [letter-spacing:-0.05em] [line-height:0.85] sm:[font-size:12cqw]"
                style={{ fontFamily: "'Outfit', 'Figtree', sans-serif", fontWeight: 800 }}
              >
                yathra
              </span>
              {/* <span
                className="ml-[0.8cqw] flex flex-col font-extrabold [font-size:6.5cqw] [line-height:0.88] sm:ml-[0.5cqw] sm:[font-size:3.1cqw]"
                style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
              >
                <span>2</span>
                <span>7</span>
              </span> */}
            </span>

            {/* "is UNLIMITED" */}
            <span className="flex items-center whitespace-nowrap sm:contents">
              <span
                className="inline-block bg-gradient-to-b from-[#f4f4f4] to-[#8a8a8a] bg-clip-text pr-[1.2cqw] italic text-transparent opacity-90 [font-size:16cqw] [letter-spacing:-0.02em] [line-height:1] sm:ml-[1.6cqw] sm:mr-[1.4cqw] sm:pr-[0.6cqw] sm:[font-size:9.5cqw]"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                is
              </span>
              <span className="inline-block font-extrabold text-white [font-size:12cqw] [letter-spacing:-0.04em] [line-height:1] sm:[font-size:7.4cqw]">
                IMMNIENT
              </span>
            </span>
          </span>
        </h1>

        <p className="relative z-10 mx-auto mt-6 max-w-[34ch] text-balance text-center text-[clamp(17px,4.7vw,24px)] font-normal leading-[1.12] tracking-[-0.025em] sm:mt-10 sm:max-w-[900px] sm:text-[clamp(22px,2.9vw,30px)] lg:mt-12 lg:max-w-[1000px] lg:text-[clamp(26px,1.75vw+4px,33px)]">
          A million dollar journey for India’s next wave of changemakers.
          <br className="hidden sm:block" />{" "}
          Hult Prize{" "}
          <strong className="font-semibold" style={{ color: PINK }}>
            UCEK Qualifiers
          </strong>{" "}
          {/* at{" "}
          <strong className="font-semibold">
            University College of Engineering
          </strong>
          , Kariavattom. */}
        </p>
      </div>

      {/* ───────── CTAs ───────── */}
      <div className="relative z-10 mt-10 flex w-full max-w-[420px] flex-col items-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center lg:mt-[70px]">
        <a
          href={registerHref}
          onClick={onRegister}
          className={`${ctaBase} bg-white text-black shadow-[0_6px_24px_rgba(0,0,0,0.4)] hover:bg-white/90`}
        >
          Register Now
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <a
          href={contactHref}
          className={`${ctaBase} border border-[#ff2d87]/40 bg-[#ff2d87]/15 text-white shadow-[0_6px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur hover:bg-[#ff2d87]/25`}
        >
          Contact Us
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M6 18L18 6M8 6h10v10" />
          </svg>
        </a>
      </div>

      {/* ───────── Partner cards ───────── */}
      <div className="relative z-10 mt-10 flex w-full flex-col items-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 lg:mt-[60px]">
        {/* Hult Prize × UCEK lockup */}
        <div className={`${cardBase} gap-3 sm:gap-4`}>
          {hultLogoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hultLogoSrc} alt="Hult Prize" className="h-8 w-auto sm:h-9 lg:h-[46px]" />
          ) : (
            <>
              <HultMark className="h-8 w-auto text-white sm:h-9 lg:h-[46px]" />
              <a href="https://hultprize.uck.ac.in/" target="_blank" rel="noopener noreferrer">
              <span className="text-[17px] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-[19px] lg:text-[24px]">
                Hult
                <br />
                Prize
              </span>
              </a>
            </>
          )}
          <span aria-hidden className="h-9 w-px bg-white/70 sm:h-10 lg:h-[52px]" />
          <span className="text-[12px] font-normal leading-[1.15] tracking-[-0.01em] text-white/90 sm:text-[14px] lg:text-[17px]">
            University College
            <br />
            of Engineering
            <br />
            Kariavattom
          </span>
        </div>

        {/* Partners */}
        <div className={`${cardBase} flex-col gap-1`}>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.22em] lg:text-[12px]"
            style={{ color: PINK }}
          >
            In partnership with
          </span>
          <span className="text-center text-[15px] font-semibold tracking-[-0.02em] sm:text-[17px] lg:text-[21px]">
            µlearn <span style={{ color: YELLOW }}>·</span> Unstop{" "}
            <span style={{ color: YELLOW }}>·</span> Kerala Startup Mission
          </span>
        </div>
      </div>
    </section>
  );
}