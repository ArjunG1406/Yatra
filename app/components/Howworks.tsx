"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

type Step = {
  number: number;
  phase: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    phase: "PHASE 01",
    title: "Concept Note Submission",
    description: "Submit an executive summary defining your SDG problem, target market, and proposed solution. Top 40 teams advance.",
  },
  {
    number: 2,
    phase: "PHASE 02",
    title: "Virtual Semifinals",
    description: "Online pitch presentation and live Q&A before an expert evaluation jury. Top 16 startups qualify for the finals.",
  },
  {
    number: 3,
    phase: "PHASE 03",
    title: "Founders Bootcamp",
    description: "Intensive venture acceleration covering Business Model Canvas, unit economics, customer validation, and pitch coaching.",
  },
  {
    number: 4,
    phase: "PHASE 04",
    title: "Grand Finale at Technopark",
    description: "Live physical pitching at Travancore Hall, Technopark Trivandrum to executive judges, angel investors, and ecosystem leaders.",
  },
];

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

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
      const startY = vh * 0.9;
      const endY = vh * 0.55;
      const span = startY - endY;

      const progressOf = (el: Element) =>
        smooth(clamp((startY - el.getBoundingClientRect().top) / span));

      head.style.setProperty("--hp", progressOf(head).toFixed(4));

      const ps = steps.map(progressOf);
      steps.forEach((el, i) => {
        el.style.setProperty("--p", ps[i].toFixed(4));
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
          <span className="yw-kicker">Program Roadmap</span>
          <h2 id="yw-heading" className="yw-title">
            Stages of Yathra ’27
          </h2>
          <p className="yw-sub">
            Four milestone stages from submission to the Grand Finale at Technopark.
          </p>
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
                  0{step.number}
                </span>
                <div className="yw-text">
                  <span className="yw-label">{step.phase}</span>
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

const CSS = `
.yw {
  --yw-bg: #ffffff;
  --yw-text: #09090b;
  --yw-subtext: #52525b;
  --yw-pink: #ff2d87;
  --yw-dim: #e4e4e7;
  background: var(--yw-bg);
  color: var(--yw-text);
  padding: 64px 20px;
  border-bottom: 1px solid #e4e4e7;
}
.yw-inner { max-width: 860px; margin: 0 auto; }

/* heading */
.yw-head { --hp: 1; }
.yw-kicker {
  display: block;
  font-family: 'Space Grotesk', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--yw-pink);
  margin-bottom: 0.25rem;
}
.yw-title {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--yw-text);
}
.yw-sub {
  margin: 8px 0 0;
  max-width: 50ch;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--yw-subtext);
}

/* vertical timeline */
.yw-steps {
  list-style: none;
  margin: 48px 0 0;
  padding: 0;
}
.yw-step {
  --p: 1;
  --lp: 1;
  --yw-pad: 48px;
  position: relative;
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr);
  column-gap: 28px;
  padding-bottom: var(--yw-pad);
}
.yw-step:last-child { padding-bottom: 0; }

/* rail */
.yw-track { position: relative; }
.yw-track::before,
.yw-fill {
  content: "";
  position: absolute;
  left: 6px;
  top: 10px;
  bottom: calc(var(--yw-pad) * -1 - 10px);
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
  border: 2.5px solid #ffffff;
  background: color-mix(in srgb, var(--yw-pink) calc(var(--p) * 100%), var(--yw-dim));
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  transform: scale(calc(0.7 + var(--p) * 0.3));
}
.yw-step:last-child .yw-track::before,
.yw-step:last-child .yw-fill { display: none; }

/* step content */
.yw-body {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  column-gap: 24px;
  align-items: start;
}

.yw-num {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: color-mix(in srgb, var(--yw-pink) calc(var(--p) * 100%), #d4d4d8);
}

.yw-label {
  display: block;
  font-family: 'Space Grotesk', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--yw-pink);
}
.yw-step-title {
  margin: 2px 0 0;
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--yw-text);
}
.yw-desc {
  margin: 6px 0 0;
  max-width: 52ch;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--yw-subtext);
}

/* small screens */
@media (max-width: 639px) {
  .yw-body { grid-template-columns: 1fr; row-gap: 6px; }
  .yw-num { font-size: 2rem; }
}

@media (prefers-reduced-motion: reduce) {
  .yw-title, .yw-sub, .yw-num, .yw-step-title, .yw-desc, .yw-track::after { transform: none; }
  .yw-fill { transform: none; }
}
`;
