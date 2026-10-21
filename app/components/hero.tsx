import * as React from "react";

/**
 * Hero — Yathra · Hult Prize UCEK Qualifiers (navbar not included).
 *
 * Same structure as before: headline, subtitle, two CTAs, two partner cards.
 * This pass only calms the styling:
 *   - one type system in the headline, sharing a baseline
 *   - fewer, softer background layers
 *   - smaller, quieter subtitle
 *   - CTAs and cards sized down so the headline is the one loud thing
 *
 * Requirements: React 18+, Tailwind CSS 3.2+.
 * Palette: white on black, hot pink #ff2d87 (accent), yellow #ffd23f (focus + dots).
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

/* One short entrance sequence on load. Only opacity + transform (cheap on phones),
   no looping animation, and fully disabled for reduced-motion users. */
const ANIM_CSS = `
@keyframes yh-rise {
  from { opacity: 0; transform: translate3d(0, 14px, 0); }
  to   { opacity: 1; transform: translate3d(0, 0, 0); }
}
@keyframes yh-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.yh-rise { animation: yh-rise 700ms cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0ms); }
.yh-fade { animation: yh-fade 1400ms ease-out both; animation-delay: var(--d, 0ms); }
@media (prefers-reduced-motion: reduce) {
  .yh-rise, .yh-fade { animation: none; }
}
`;

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;800&family=Outfit:wght@800&family=Instrument+Serif:ital@1&display=swap');
`;

/* Stand-in for the glowing map: a "journey" route with a pin */
function JourneyBackdrop() {
  return (
    <svg viewBox="0 0 700 460" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <radialGradient id="yg" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={PINK} stopOpacity="0.4" />
          <stop offset="0.6" stopColor={PINK} stopOpacity="0.1" />
          <stop offset="1" stopColor={PINK} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="yr" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="0.6" stopColor={PINK} stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
        <filter id="yb" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <ellipse cx="350" cy="230" rx="330" ry="210" fill="url(#yg)" />
      <g filter="url(#yb)">
        <circle cx="350" cy="230" r="170" stroke={PINK} strokeOpacity="0.22" strokeWidth="1.5" />
        <circle cx="350" cy="230" r="230" stroke="#fff" strokeOpacity="0.08" strokeWidth="1" />
        <path
          d="M70 380 C 190 120, 400 380, 600 90"
          stroke="url(#yr)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />
      </g>
      <circle cx="70" cy="380" r="6" fill="#fff" />
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
  "group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg px-6 text-[15px] font-semibold tracking-[-0.01em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd23f] sm:h-[52px] sm:w-auto sm:min-w-[170px] sm:text-base lg:h-14 lg:text-[17px]";

const cardBase =
  "flex h-16 w-full max-w-[420px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur sm:h-[72px] sm:w-auto sm:max-w-none sm:px-6 lg:h-20";

export default function Hero({
  backdropSrc,
  hultLogoSrc,
  registerHref = "#register",
  contactHref = "mailto:hultprizeucek@gmail.com",
  onRegister,
}: HeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#050204] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
      <style>{FONT_IMPORT + ANIM_CSS}</style>

      {/* ───────── Background: one top glow, one soft centre glow ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 40% at 50% -8%, rgba(255,45,135,0.30) 0%, rgba(120,20,70,0.14) 50%, rgba(5,2,4,0) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div
          className="absolute left-1/2 top-[40%] h-[44%] w-[90%] -translate-x-1/2 -translate-y-1/2 sm:w-[46%]"
          style={{
            background: "radial-gradient(closest-side, rgba(255,45,135,0.16), transparent)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* ───────── Headline + subtitle ───────── */}
      <div className="relative w-full max-w-[1000px]">
        {/* Backdrop behind the headline, kept faint so the type stays crisp */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[40%] aspect-[700/460] w-[125%] -translate-x-1/2 -translate-y-1/2 opacity-40 [mask-image:radial-gradient(closest-side,#000_60%,transparent)] sm:w-[62%] sm:opacity-50 lg:w-[56%]"
        >
          <div className="yh-fade h-full w-full" style={{ ["--d" as string]: "200ms" }}>
            {backdropSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={backdropSrc} alt="" className="h-full w-full object-contain" />
            ) : (
              <JourneyBackdrop />
            )}
          </div>
        </div>

        <h1
          className="yh-rise relative z-10 m-0 w-full [container-type:inline-size]"
          style={{ ["--d" as string]: "0ms" }}
        >
          <span className="sr-only">Yathra is imminent</span>
          <span
            aria-hidden
            className="flex w-full flex-col items-center gap-[2cqw] sm:flex-row sm:items-baseline sm:justify-center sm:gap-[2.2cqw]"
          >
            {/* Wordmark */}
            <span
              className="text-white [font-size:24cqw] [letter-spacing:-0.05em] [line-height:0.9] sm:[font-size:12cqw]"
              style={{ fontFamily: "'Outfit', 'Figtree', sans-serif", fontWeight: 800 }}
            >
              yathra
            </span>

            {/* "is imminent" — same baseline as the wordmark, lower contrast */}
            <span className="flex items-baseline gap-[1.6cqw] whitespace-nowrap">
              <span
                className="italic text-white/60 [font-size:12cqw] [line-height:1] sm:[font-size:6.6cqw]"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                is
              </span>
              <span
                className="text-white [font-size:14cqw] [letter-spacing:-0.04em] [line-height:1] sm:[font-size:8.6cqw]"
                style={{ fontFamily: "'Outfit', 'Figtree', sans-serif", fontWeight: 800 }}
              >
                imminent
              </span>
            </span>
          </span>
        </h1>

        <p
          style={{ ["--d" as string]: "150ms" }}
          className="yh-rise relative z-10 mx-auto mt-6 max-w-[32ch] text-balance text-center text-[clamp(16px,4.2vw,19px)] font-normal leading-[1.4] tracking-[-0.01em] text-white/75 sm:mt-8 sm:max-w-[640px] sm:text-[clamp(18px,2vw,22px)] lg:mt-10">
          A million dollar journey for India’s next wave of changemakers.
          <br className="hidden sm:block" />{" "}
          Hult Prize{" "}
          <strong className="font-semibold" style={{ color: PINK }}>
            UCEK Qualifiers
          </strong>
        </p>
      </div>

      {/* ───────── CTAs ───────── */}
      <div
        style={{ ["--d" as string]: "300ms" }}
        className="yh-rise relative z-10 mt-9 flex w-full max-w-[420px] flex-col items-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center lg:mt-12">
        <a
          href={registerHref}
          onClick={onRegister}
          className={`${ctaBase} bg-white text-black hover:bg-white/90`}
        >
          Register Now
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5"
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
          className={`${ctaBase} border border-white/20 bg-white/[0.04] text-white hover:border-[#ff2d87]/60 hover:bg-[#ff2d87]/10`}
        >
          Contact Us
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
      <div
        style={{ ["--d" as string]: "450ms" }}
        className="yh-rise relative z-10 mt-10 flex w-full flex-col items-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:mt-14">
        {/* Hult Prize × UCEK lockup */}
        <div className={`${cardBase} gap-3 sm:gap-4`}>
          {hultLogoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hultLogoSrc} alt="Hult Prize" className="h-7 w-auto sm:h-8 lg:h-10" />
          ) : (
            <>
              <HultMark className="h-7 w-auto text-white sm:h-8 lg:h-10" />
              <a
                href="https://hultprize.uck.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-extrabold leading-[0.95] tracking-[-0.03em] hover:text-white/80 sm:text-[17px] lg:text-[20px]"
              >
                Hult
                <br />
                Prize
              </a>
            </>
          )}
          <span aria-hidden className="h-8 w-px bg-white/30 sm:h-9 lg:h-10" />
          <span className="text-[12px] font-normal leading-[1.2] tracking-[-0.01em] text-white/80 sm:text-[13px] lg:text-[15px]">
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
            className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px]"
            style={{ color: PINK }}
          >
            In partnership with
          </span>
          <span className="text-center text-[14px] font-medium tracking-[-0.01em] text-white/90 sm:text-[15px] lg:text-[17px]">
            µlearn <span style={{ color: YELLOW }}>·</span> Unstop{" "}
            <span style={{ color: YELLOW }}>·</span> Kerala Startup Mission
          </span>
        </div>
      </div>
    </section>
  );
}