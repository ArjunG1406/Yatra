"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const PINK = "#ff2d87";

interface CardItem {
  id: number;
  title: string;
  tag: string;
  image: string;
}

const CARDS: CardItem[] = [
  {
    id: 1,
    title: "Champion Venture",
    tag: "Yathra ’26 Winner",
    image: "/yathra/yatra26winners/winner.jpg",
  },
  {
    id: 2,
    title: "1st Runner-Up",
    tag: "Yathra ’26 Finalist",
    image: "/yathra/yatra26winners/runnerup.JPG",
  },
  {
    id: 3,
    title: "Live Stage Pitch",
    tag: "Travancore Hall",
    image: "/yathra/yatra26part/event1.jpg",
  },
  {
    id: 4,
    title: "Executive Jury",
    tag: "Q&A Deliberation",
    image: "/yathra/yatra26part/event2.jpg",
  },
  {
    id: 5,
    title: "Founder Network",
    tag: "Mentorship Sprint",
    image: "/yathra/yatra26part/event3.jpg",
  },
  {
    id: 6,
    title: "Inaugural Champion",
    tag: "Yathra ’25 Winner",
    image: "/yathra/yatra25winners/winner.JPG",
  },
  {
    id: 7,
    title: "1st Runner-Up ’25",
    tag: "Social Venture",
    image: "/yathra/yatra25winners/runnerup1.jpg",
  },
  {
    id: 8,
    title: "2nd Runner-Up ’25",
    tag: "SDG Innovation",
    image: "/yathra/yatra25winners/runnerup2.jpg",
  },
  {
    id: 9,
    title: "Pitch Showcase",
    tag: "Technopark Stage",
    image: "/yathra/yatra25part/event1.jpg",
  },
  {
    id: 10,
    title: "Valedictory Ceremony",
    tag: "Awards Ceremony",
    image: "/yathra/yatra25part/event4.jpg",
  },
];

interface ComputedCard {
  card: CardItem;
  xL: number;
  yMin: number;
  w: number;
  height: number;
  clipPath: string;
  zIndex: number;
  opacity: number;
}

export default function Hero() {
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 360 });
  const [computedCards, setComputedCards] = useState<ComputedCard[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Animation & Drag physics state
  const offsetRef = useRef(0);
  const velocityRef = useRef(45); // auto drift in px/s
  const isPointerDownRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);

  // Responsive container measurement
  const updateDimensions = useCallback(() => {
    if (!carouselTrackRef.current) return;
    const w = carouselTrackRef.current.clientWidth || window.innerWidth;
    const isMobile = w < 640;
    const isTablet = w < 1024;
    const h = isMobile ? 240 : isTablet ? 320 : 370;
    setDimensions({ width: w, height: h });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const observer = new ResizeObserver(updateDimensions);
    if (carouselTrackRef.current) observer.observe(carouselTrackRef.current);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, [updateDimensions]);

  // Cylinder geometry calculations responsive to actual container width & height
  const computeGeometry = useCallback(
    (currentOffset: number, width: number, height: number): ComputedCard[] => {
      const totalCards = CARDS.length;
      const isMobile = width < 640;
      const isTablet = width < 1024;

      // Card sizing adapted to viewport width
      const w0 = isMobile ? 120 : isTablet ? 150 : 170;
      const h0 = isMobile ? 180 : isTablet ? 230 : 270;
      const pitch = w0 + (isMobile ? 16 : 26);
      const totalTrack = totalCards * pitch;
      const halfTrack = totalTrack / 2;

      const center = width / 2;
      const normDivisor = width * (isMobile ? 0.48 : 0.52);

      const cardsOutput: ComputedCard[] = [];

      for (let i = 0; i < totalCards; i++) {
        let rawPos = (i * pitch + currentOffset) % totalTrack;
        if (rawPos < 0) rawPos += totalTrack;

        let t = rawPos - center;
        if (t > halfTrack) t -= totalTrack;
        if (t < -halfTrack) t += totalTrack;

        // Pushed position along the cylinder curve
        const tNorm = t / normDivisor;
        const pushedX = center + t * (1 + 0.08 * tNorm * tNorm);

        // Skip cards outside viewport
        if (pushedX < -w0 * 1.2 || pushedX > width + w0 * 1.2) continue;

        const d = Math.abs(pushedX - center) / normDivisor;
        const cardW = w0 + (isMobile ? 24 : 45) * d * d;

        const xL = pushedX - cardW / 2;
        const xR = pushedX + cardW / 2;

        const qL = Math.abs(xL - center) / normDivisor;
        const qR = Math.abs(xR - center) / normDivisor;

        // Heights with outer edges taller than inner edges
        const hL = h0 + (isMobile ? 40 : 85) * Math.pow(Math.min(qL, 1.4), 2.4);
        const hR = h0 + (isMobile ? 40 : 85) * Math.pow(Math.min(qR, 1.4), 2.4);

        // Vertical center of the carousel stage
        const yC = height / 2 - (isMobile ? 6 : 10) * d * d;

        const yTL = yC - hL / 2;
        const yBL = yC + hL / 2;
        const yTR = yC - hR / 2;
        const yBR = yC + hR / 2;

        const yMin = Math.min(yTL, yTR);
        const yMax = Math.max(yBL, yBR);
        const cardH = Math.max(1, yMax - yMin);

        // Quad polygon points
        const pTL_y = ((yTL - yMin) / cardH) * 100;
        const pTR_y = ((yTR - yMin) / cardH) * 100;
        const pBR_y = ((yBR - yMin) / cardH) * 100;
        const pBL_y = ((yBL - yMin) / cardH) * 100;

        const clipPath = `polygon(0% ${pTL_y.toFixed(2)}%, 100% ${pTR_y.toFixed(2)}%, 100% ${pBR_y.toFixed(2)}%, 0% ${pBL_y.toFixed(2)}%)`;

        // Safe low z-index (1 to 10) so carousel is ALWAYS below fixed navbar (z-50)
        const zIndex = Math.round(1 + (1 - Math.min(d, 1)) * 10);
        const opacity = d > 1.05 ? Math.max(0, 1 - (d - 1.05) * 4) : 1;

        cardsOutput.push({
          card: CARDS[i],
          xL,
          yMin,
          w: cardW,
          height: cardH,
          clipPath,
          zIndex,
          opacity,
        });
      }

      return cardsOutput;
    },
    []
  );

  // Animation loop with continuous drift and momentum decay
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      if (!isPointerDownRef.current) {
        const targetSpeed = dimensions.width < 640 ? 35 : 45;
        if (Math.abs(velocityRef.current) > targetSpeed) {
          velocityRef.current *= Math.pow(0.08, dt);
          if (Math.abs(velocityRef.current) < targetSpeed) {
            velocityRef.current = targetSpeed;
          }
        } else {
          velocityRef.current = targetSpeed;
        }

        offsetRef.current -= velocityRef.current * dt;
      }

      setComputedCards(computeGeometry(offsetRef.current, dimensions.width, dimensions.height));
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [computeGeometry, dimensions]);

  // Pointer drag interactions (touch + mouse)
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    setIsDragging(true);
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const now = performance.now();
    const dt = Math.max((now - lastPointerTimeRef.current) / 1000, 0.001);
    const deltaX = e.clientX - lastPointerXRef.current;

    offsetRef.current += deltaX;
    velocityRef.current = -deltaX / dt;

    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = now;
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="relative z-0 w-full overflow-hidden bg-white text-zinc-950 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── 1. TOP BADGE ─── */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border shadow-xs"
            style={{
              backgroundColor: "#ffe4f0",
              borderColor: "#ffb3d6",
              color: PINK,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87] animate-pulse" />
            <span className="text-xs sm:text-[13px] font-bold tracking-tight">
              Trusted by 10,000+ collegiate innovators
            </span>
          </div>
        </div>

        {/* ─── 2. HEADLINE & RELATIVE NOTE ─── */}
        <div className="relative max-w-4xl mx-auto text-center px-2">
          {/* Handwritten note: "Be seen / with Yathra" (Desktop only, positioned in safe right margin) */}
          <div
            aria-hidden="true"
            className="hidden xl:block absolute -right-20 top-2 pointer-events-none select-none text-left"
          >
            <div
              className="text-[24px] font-bold leading-tight rotate-[12deg]"
              style={{ color: PINK, fontFamily: "'Caveat', cursive" }}
            >
              Be seen
              <br />
              with Yathra
            </div>
            <svg
              className="w-[90px] h-[75px] -mt-1 ml-3 overflow-visible"
              viewBox="0 0 90 75"
              fill="none"
              stroke={PINK}
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M 20 8 C 55 15, 65 42, 42 65 C 38 68, 32 68, 32 68" />
              <path d="M 40 56 L 31 68 L 44 72" />
            </svg>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-[-0.04em] text-zinc-950 uppercase leading-[1.02] sm:leading-[0.98]"
            style={{ fontFamily: "'Inter Tight', 'Outfit', sans-serif" }}
          >
            A Million Dollar Journey
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, #09090b 10%, ${PINK} 100%)`,
              }}
            >
              For India’s Changemakers
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Empowering the next generation of student social entrepreneurs across India to
            build, validate, and pitch scalable ventures tackling the United Nations SDGs.
          </p>
        </div>

        {/* ─── 3. RESPONSIVE CURVED CAROUSEL STAGE (BELOW NAVBAR AT ALL TIMES) ─── */}
        <div
          ref={carouselTrackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative z-10 w-full mt-4 sm:mt-6 overflow-hidden select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            height: `${dimensions.height}px`,
            touchAction: "none",
          }}
        >
          {computedCards.map((item) => (
            <div
              key={item.card.id}
              className="absolute overflow-hidden rounded-xl border border-zinc-200/90 shadow-md bg-zinc-950"
              style={{
                left: `${item.xL}px`,
                top: `${item.yMin}px`,
                width: `${item.w}px`,
                height: `${item.height}px`,
                clipPath: item.clipPath,
                zIndex: item.zIndex,
                opacity: item.opacity,
              }}
            >
              <Image
                src={item.card.image}
                alt={item.card.title}
                fill
                draggable={false}
                className="object-cover pointer-events-none"
                sizes="(max-width: 640px) 160px, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8.5px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-xs">
                {item.card.tag}
              </span>

              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 z-10">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-xs">
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight drop-shadow-xs truncate max-w-[100px] sm:max-w-[130px]">
                  {item.card.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ─── 4. BOTTOM ACTION BUTTON & ZERO COST NOTE (BELOW THE BUTTON, POINTING UP AT THE BUTTON) ─── */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center relative">
          {/* Button with dashed outline ring */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-[184px] h-[58px] sm:w-[196px] sm:h-[66px] rounded-full border border-dashed pointer-events-none"
              style={{ borderColor: `${PINK}80` }}
            />
            <a
              href="https://hultprize.uck.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base shadow-lg hover:brightness-105 active:scale-98 transition-all"
              style={{
                backgroundColor: PINK,
                boxShadow: `0 6px 20px ${PINK}40`,
              }}
            >
              <span>Register Now</span>
              <span className="text-white/80 font-normal">→</span>
            </a>
          </div>

          {/* Zero cost note positioned BELOW the button, with an arrow pointing UPWARDS toward the button */}
          <div
            aria-hidden="true"
            className="mt-3.5 flex items-center gap-1.5 select-none pointer-events-none text-[#ff2d87]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <svg
              className="w-5 h-6 sm:w-6 sm:h-7 overflow-visible -rotate-6"
              viewBox="0 0 24 28"
              fill="none"
              stroke={PINK}
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Arrow curving upward toward the button */}
              <path d="M 12 24 C 10 16, 14 10, 12 5" />
              {/* Arrowhead pointing up */}
              <path d="M 6 11 L 12 4 L 18 11" />
            </svg>
            <span className="text-lg sm:text-2xl font-bold -rotate-2">
              Zero cost entry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
