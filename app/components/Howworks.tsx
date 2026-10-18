"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

/**
 * How it works — Yathra '26 (Hult Prize UCEK Qualifiers)
 *
 * Structure mirrors the START Summit "How it works" block:
 *   heading → one-line subtitle → 4 numbered steps (big number, "Step N", title, description)
 *
 * Layout: one vertical timeline on every screen size. Steps stack top to bottom,
 * connected by a rail down the left edge.
 *
 * Palette: black, white, pink, yellow.
 *
 * Scroll animation: every colour and line is driven by a scroll-linked value (0 → 1),
 * so it fills in while you scroll down and un-fills when you scroll back up.
 *   - heading + subtitle brighten from dim grey to white
 *   - each step number's outline goes grey → pink (Step 4 also fills solid pink)
 *   - each node goes grey → yellow and grows, "Step N" goes grey → yellow
 *   - the pink rail draws itself downward from one step to the next
 *   - titles and descriptions fade up from dim to full white
 * Reduced-motion users get the finished state with no animation.
 *
 * Self-contained: needs only React. No Tailwind or extra packages.
 */

type Step = {
  number: number;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    title: "Preliminary Round",
    description:
      "Submit a one-page concept note on your idea. The top 40 teams are shortlisted for creativity, feasibility and alignment with the SDGs.",
  },
  {
    number: 2,
    title: "Semifinals",
    description:
      "Pitch online to a panel of experienced judges with a detailed presentation and live Q&A. The top 16 teams advance.",
  },
  {
    number: 3,
    title: "Founders Bootcamp",
    description:
      "Build your Business Model Canvas and MVP, and sharpen your pitch with mentors before the finale.",
  },
  {
    number: 4,
    title: "Grand Finale",
    description:
      "Pitch live at Travancore Hall, Technopark to judges, investors and industry experts. Winning teams receive prizes and exclusive opportunities.",
  },
];

/* ---------- scroll maths ---------- */

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

// SSR-safe layout effect (avoids a flash of the finished state before JS runs)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HowWorks() {
  const headRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useIsoLayoutEffect(() => {
    const head = headRef.current;
    const steps = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!head || steps.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const showAll = () => {
      head.style.setProperty("--hp", "1");
      steps.forEach((el) => {
        el.style.setProperty("--p", "1");
        el.style.setProperty("--lp", "1");
      });
    };

    if (reduce.matches) {
      showAll();
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      // an element is "0" when its top is at 90% of the viewport, "1" when it reaches 55%
      const startY = vh * 0.9;
      const endY = vh * 0.55;
      const span = startY - endY;

      const progressOf = (el: Element) =>
        smooth(clamp((startY - el.getBoundingClientRect().top) / span));

      head.style.setProperty("--hp", progressOf(head).toFixed(4));

      const ps = steps.map(progressOf);
      steps.forEach((el, i) => {
        el.style.setProperty("--p", ps[i].toFixed(4));
        // the rail leaving this step fills as the next step arrives
        el.style.setProperty("--lp", (ps[i + 1] ?? 0).toFixed(4));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const onMotionChange = () => {
      if (reduce.matches) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        showAll();
      }
    };
    reduce.addEventListener("change", onMotionChange);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section className="yw" id="how-it-works" aria-labelledby="yw-heading">
      <style>{CSS}</style>

      <div className="yw-inner">
        <div ref={headRef} className="yw-head">
          <h2 id="yw-heading" className="yw-title">
            How it works
          </h2>
          <p className="yw-sub">Four stages, from a one-page concept note to the Grand Finale.</p>
        </div>

        <ol className="yw-steps">
          {STEPS.map((step, i) => (
            <li
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="yw-step"
            >
              <div className="yw-track" aria-hidden="true">
                <span className="yw-fill" />
              </div>
              <div className="yw-body">
                <span className="yw-num" aria-hidden="true">
                  {step.number}
                </span>
                <div className="yw-text">
                  <span className="yw-label">Step {step.number}</span>
                  <h3 className="yw-step-title">{step.title}</h3>
                  <p className="yw-desc">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { HowWorks };

/* ---------- styles ---------- */
/*
 * --hp (heading) and --p / --lp (step, rail) are set from JS and run 0 → 1.
 * They default to 1 so the section is fully visible if JS is unavailable.
 */
const CSS = `
.yw {
  --yw-black: #000000;
  --yw-white: #ffffff;
  --yw-pink: #ff2d8a;
  --yw-yellow: #ffd60a;
  --yw-dim: #2b2b2b;
  background: var(--yw-black);
  color: var(--yw-white);
  padding: clamp(64px, 10vw, 128px) clamp(20px, 5vw, 64px);
  font-family: "Outfit", "Urbanist", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
}
.yw-inner { max-width: 960px; margin: 0 auto; }

/* heading */
.yw-head { --hp: 1; }
.yw-title {
  margin: 0;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: color-mix(in srgb, var(--yw-white) calc(var(--hp) * 100%), var(--yw-dim));
  transform: translateY(calc((1 - var(--hp)) * 24px));
}
.yw-sub {
  margin: 16px 0 0;
  max-width: 46ch;
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  line-height: 1.5;
  color: rgb(255 255 255 / calc(0.12 + var(--hp) * 0.6));
  transform: translateY(calc((1 - var(--hp)) * 16px));
}

/* vertical timeline */
.yw-steps {
  list-style: none;
  margin: clamp(48px, 7vw, 80px) 0 0;
  padding: 0;
}
.yw-step {
  --p: 1;
  --lp: 1;
  --yw-pad: clamp(48px, 7vw, 80px);
  position: relative;
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr);
  column-gap: clamp(20px, 4vw, 48px);
  padding-bottom: var(--yw-pad);
}
.yw-step:last-child { padding-bottom: 0; }

/* rail: grey base line, pink fill that draws downward, node that turns yellow */
.yw-track { position: relative; }
.yw-track::before,
.yw-fill {
  content: "";
  position: absolute;
  left: 6px;
  top: 11px;
  bottom: calc(var(--yw-pad) * -1 - 11px);
  width: 2px;
}
.yw-track::before { background: var(--yw-dim); }
.yw-fill {
  background: var(--yw-pink);
  transform-origin: center top;
  transform: scaleY(var(--lp));
}
.yw-track::after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--yw-yellow) calc(var(--p) * 100%), var(--yw-dim));
  transform: scale(calc(0.6 + var(--p) * 0.4));
}
.yw-step:last-child .yw-track::before,
.yw-step:last-child .yw-fill { display: none; }

/* step content: big number on the left, text on the right */
.yw-body {
  display: grid;
  grid-template-columns: clamp(88px, 16vw, 200px) minmax(0, 1fr);
  column-gap: clamp(16px, 4vw, 48px);
  align-items: start;
}



/* number: grey outline -> pink outline; last step also fills solid pink.
   The glyphs are built from overlapping shapes, and a plain text stroke draws those
   inner edges (the glitch). Painting the stroke first and then an opaque black fill
   over it hides the inner edges and leaves only the outer outline.
   4px stroke = 2px visible outline, same weight as before. */
.yw-num {
  display: block;
  font-size: clamp(4rem, 10vw, 7.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--yw-black);
  paint-order: stroke fill;
  -webkit-text-stroke: 4px color-mix(in srgb, var(--yw-pink) calc(var(--p) * 100%), var(--yw-dim));
  text-rendering: geometricPrecision;
  transform: translateY(calc((1 - var(--p)) * 32px));
}
.yw-step:last-child .yw-num {
  color: color-mix(in srgb, var(--yw-pink) calc(var(--p) * 100%), var(--yw-black));
  -webkit-text-stroke: 0;
}

.yw-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5;
  color: color-mix(in srgb, var(--yw-yellow) calc(var(--p) * 100%), var(--yw-dim));
}
.yw-step-title {
  margin: 8px 0 0;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  font-weight: 700;
  line-height: 1.15;
  color: color-mix(in srgb, var(--yw-white) calc(var(--p) * 100%), var(--yw-dim));
  transform: translateY(calc((1 - var(--p)) * 20px));
}
.yw-desc {
  margin: 12px 0 0;
  max-width: 52ch;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgb(255 255 255 / calc(0.1 + var(--p) * 0.62));
  transform: translateY(calc((1 - var(--p)) * 16px));
}

/* small screens: number sits above the text */
@media (max-width: 639px) {
  .yw-body { grid-template-columns: 1fr; row-gap: 12px; }
  .yw-num { font-size: 3.5rem; }
}

/* reduced motion: finished state, no movement */
@media (prefers-reduced-motion: reduce) {
  .yw-title, .yw-sub, .yw-num, .yw-step-title, .yw-desc, .yw-track::after { transform: none; }
  .yw-fill { transform: none; }
}
`;