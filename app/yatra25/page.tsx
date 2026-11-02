'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Camera,
  Quote,
  CheckCircle2,
} from 'lucide-react'
import Footer from '../components/footer'

const PINK = '#ff2d87'

// Flashback scenes for memory reel
const FLASHBACK_SCENES_25 = [
  {
    image: '/yathra/yatra25winners/winner.JPG',
    tag: 'INAUGURAL CHAMPION',
    title: 'Historic Champion Crowned',
    desc: 'The inaugural winners receiving the champion trophy and Hult qualifier nomination.',
  },
  {
    image: '/yathra/yatra25part/event1.jpg',
    tag: 'STAGE SHOWCASE',
    title: 'Live Pitching & Keynote',
    desc: 'Founders pitching their groundbreaking social ventures on stage at Technopark.',
  },
  {
    image: '/yathra/yatra25winners/runnerup1.jpg',
    tag: 'RUNNER-UP HONORS',
    title: '1st Runner-Up Venture Pitch',
    desc: 'Groundbreaking student enterprise recognized for sustainability innovation.',
  },
  {
    image: '/yathra/yatra25part/event4.jpg',
    tag: 'VALEDICTORY AWARDS',
    title: 'Valedictory & Certificate Ceremony',
    desc: 'Dignitaries, faculty, and student organizers celebrating the first chapter of Yathra.',
  },
  {
    image: '/yathra/yatra25part/P1320368.JPG',
    tag: 'DELEGATE EXCHANGE',
    title: 'Technopark Networking Sprint',
    desc: 'Collegiate teams interacting with industry advisors and angel network scouts.',
  },
  {
    image: '/yathra/yatra25winners/finalists.jpg',
    tag: 'FINALIST COHORT',
    title: 'Top Finalist Teams of Yathra ’25',
    desc: 'The complete cohort of finalist teams united on stage after the grand finale.',
  },
]

// Winners data for Yathra 25
const WINNERS_25 = [
  {
    rank: '1st Place',
    title: 'Inaugural Champion',
    badge: 'Hult Prize Global Nominee',
    image: '/yathra/yatra25winners/winner.JPG',
    desc: 'Awarded 1st Place for extraordinary execution and scalable social innovation addressing critical UN Sustainable Development Goals.',
    perks: ['Global Qualifier Nomination', '₹ Cash Prize & Champion Trophy', 'Direct Incubation Support'],
  },
  {
    rank: '2nd Place',
    title: '1st Runner-Up',
    badge: 'Silver Laureate',
    image: '/yathra/yatra25winners/runnerup1.jpg',
    desc: 'Recognized for outstanding technical prototyping and strong social business model feasibility during the grand finale evaluation.',
    perks: ['Runner-Up Trophy & Certificate', 'Seed Mentorship Sprint', 'Ecosystem Showcase'],
  },
  {
    rank: '3rd Place',
    title: '2nd Runner-Up',
    badge: 'Bronze Laureate',
    image: '/yathra/yatra25winners/runnerup2.jpg',
    desc: 'Commended for innovative grassroots problem solving and impactful market research demonstrated during the pitching rounds.',
    perks: ['Certificate of Excellence', 'Incubation Ecosystem Access', 'Product Feedback Session'],
  },
  {
    rank: 'Cohort',
    title: 'Top Finalist Cohort',
    badge: 'Finalist Honors',
    image: '/yathra/yatra25winners/finalists.jpg',
    desc: 'The elite shortlisted collegiate ventures representing top engineering and business campuses across Kerala.',
    perks: ['State-Wide Finalist Recognition', 'Investor Network Access', 'Official Hult Prize Badge'],
  },
]

// Gallery photos for Yathra 25
const GALLERY_PHOTOS_25 = [
  { src: '/yathra/yatra25part/event1.jpg', caption: 'Stage Pitch Showcase at Travancore Hall' },
  { src: '/yathra/yatra25part/event2.jpg', caption: 'Audience & Student Delegations' },
  { src: '/yathra/yatra25part/event3.jpg', caption: 'Grand Finale Keynote Address' },
  { src: '/yathra/yatra25part/event4.jpg', caption: 'Valedictory & Cohort Felicitations' },
  { src: '/yathra/yatra25part/P1310668.JPG', caption: 'Jury Evaluation Bench in Session' },
  { src: '/yathra/yatra25part/P1320232.JPG', caption: 'Team Pitch Presentations' },
  { src: '/yathra/yatra25part/P1320368.JPG', caption: 'Certificate & Stage Recognition' },
  { src: '/yathra/yatra25part/IMG_20250303_202323_178.JPG', caption: 'Student Founder Cohort Celebration' },
]

// Reviews & Reflections for Yathra 25
const REVIEWS_25 = [
  {
    quote:
      'Witnessing the inception of Yathra was truly inspiring. The raw passion and social consciousness displayed by the student ventures set an extraordinary benchmark for campus entrepreneurship.',
    author: 'Inaugural Grand Finale Jury',
    role: 'Startup Mentor & Technology Executive',
  },
  {
    quote:
      'Yathra ’25 was the catalyst our team needed. Presenting our business model to seasoned venture evaluators gave us the confidence to turn a college project into an actual startup.',
    author: 'Inaugural Champion Founder',
    role: 'Yathra ’25 Winner',
  },
  {
    quote:
      'A landmark milestone for University College of Engineering Kariavattom. Yathra proved that student innovators can tackle global UN SDG challenges with commercially viable solutions.',
    author: 'Faculty & Innovation Coordinator',
    role: 'IEDC UCEK Leadership',
  },
]

// Sized and categorized sponsors matching media_1793610809001_2bc83762.png exactly
const ECOSYSTEM_PARTNERS = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra25/ksum.png', isWhite: false },
  { name: 'IEDC UCEK', src: '/partners/yatra25/iedc.png', isWhite: false },
]

const POWERED_BY_PARTNERS = [
  { name: 'µLearn — GTech', src: '/partners/yatra25/mulearn.png', isWhite: false },
  { name: 'Legacy IEDC UCEK', src: '/partners/yatra25/legacy.png', isWhite: false },
  { name: 'Camino Infotech', src: '/partners/yatra25/camino.png', isWhite: false },
]

const COMMUNITY_PARTNERS = [
  { name: 'Unstop', src: '/partners/yatra25/unstop.png', isWhite: false },
  { name: 'UXShots', src: '/partners/yatra25/uxshots.png', isWhite: false },
  { name: 'Kaumaram Mithra', src: '/partners/yatra25/mithra.png', isWhite: false },
]

const SPONSORS_25 = [
  { name: 'Unibic', src: '/partners/yatra25/unibic.png', isWhite: false, compact: false },
  { name: 'Helmet World', src: '/partners/yatra25/helmetworld.png', isWhite: false, compact: true },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png', isWhite: false, compact: true },
  { name: 'Milma', src: '/partners/yatra25/milma.png', isWhite: false, compact: false },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png', isWhite: false, compact: true },
  { name: 'Aim Britz', src: '/partners/yatra25/aim.png', isWhite: false, compact: false },
  { name: 'D-Tech Systems', src: '/partners/yatra25/dtech.png', isWhite: false, compact: false },
]

export default function Yatra25Page() {
  const [activeScene, setActiveScene] = useState(0)
  const [flashKey, setFlashKey] = useState(0)

  // Auto-advance flashback scenes with memory flash effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % FLASHBACK_SCENES_25.length)
      setFlashKey((k) => k + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#ff2d87] selection:text-white">
      {/* ─────────────────── TOP NAVIGATION ─────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="text-lg font-black tracking-tight uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-black text-white bg-[#ff2d87]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ’25
            </span>
          </div>

          <Link
            href="/yatra26"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-all"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span>Explore ’26</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ─────────────────── 1. CINEMATIC FLASHBACK HERO ─────────────────── */}
      <section className="relative w-full bg-zinc-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-radial from-pink-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5 text-[#ff2d87]" />
              <span>Inaugural Flashback · 2025 Edition</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The Inception of <span style={{ color: PINK }}>Yathra ’25</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Where the journey began. The landmark first edition at Travancore Hall, Technopark that ignited student changemaking at UCEK.
            </p>
          </div>

          {/* Flashback Center Stage */}
          <div className="relative max-w-4xl mx-auto aspect-video sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
            <div
              key={flashKey}
              className="relative w-full h-full animate-[flashbackZoom_4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            >
              <Image
                src={FLASHBACK_SCENES_25[activeScene].image}
                alt={FLASHBACK_SCENES_25[activeScene].title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
            </div>

            {/* Shutter White Flash overlay */}
            <div
              key={`flash-${flashKey}`}
              className="pointer-events-none absolute inset-0 bg-white animate-[whiteFlash_0.5s_ease-out_forwards]"
            />

            {/* Scene Info Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#ff2d87] text-white mb-2 inline-block">
                  {FLASHBACK_SCENES_25[activeScene].tag}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {FLASHBACK_SCENES_25[activeScene].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-md">
                  {FLASHBACK_SCENES_25[activeScene].desc}
                </p>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-2 self-start sm:self-end">
                {FLASHBACK_SCENES_25.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveScene(idx)
                      setFlashKey((k) => k + 1)
                    }}
                    aria-label={`Go to scene ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeScene === idx ? 'w-8 bg-[#ff2d87]' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 2. WINNERS & RUNNERS-UP ─────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Hall of Fame
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Yathra ’25 Champions & Finalists
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            The collegiate changemakers who pioneered the inaugural Hult Prize competition at UCEK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {WINNERS_25.map((winner, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={winner.image}
                  alt={winner.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white shadow-md">
                    {winner.rank}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-tight bg-pink-50 text-[#ff2d87] border border-pink-200">
                    {winner.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-black uppercase text-zinc-950"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {winner.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {winner.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-2">
                    Recognition & Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {winner.perks.map((perk, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2d87]" />
                        <span>{perk}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 3. EVENT PHOTOS GALLERY ─────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
              Inaugural Archives
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra ’25 Moments & Gallery
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Travancore Hall · Technopark
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_PHOTOS_25.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs hover:shadow-md transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] font-medium text-white line-clamp-2">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 4. REVIEWS & REFLECTIONS ─────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Inaugural Echoes
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Reflections on Yathra ’25
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_25.map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#ff2d87] opacity-60 mb-4" />
                <p className="text-sm text-zinc-700 leading-relaxed italic">
                  “{rev.quote}”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60">
                <span
                  className="text-sm font-bold text-zinc-950 block"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {rev.author}
                </span>
                <span className="text-xs text-zinc-500">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 5. CLASSIFIED SPONSORS OF YATHRA 25 (MATCHING PHOTO EXACTLY) ─────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header from Photo */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center justify-center gap-1 mb-2">
            <span className="font-mono text-[10px] tracking-widest font-black uppercase text-zinc-400">
              Hult Prize · University College of Engineering
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#ff2d87]">
              Presents
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className="text-4xl sm:text-5xl font-black tracking-tight text-[#ff2d87] lowercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              yathra
            </span>
            <span
              className="text-xl sm:text-2xl font-black px-2 py-0.5 rounded-md bg-[#fcc30b] text-zinc-950"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ’25
            </span>
          </div>

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 block">
            A Million Dollar Journey
          </span>
        </div>

        {/* ─── TIER 1: ECOSYSTEM PARTNERS ─── */}
        <div className="mb-16 text-center">
          <h3
            className="text-sm sm:text-base font-black uppercase tracking-wider text-zinc-900 mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ecosystem Partners
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {ECOSYSTEM_PARTNERS.map((p, i) => (
              <div key={i} className="h-16 flex items-center justify-center group" title={p.name}>
                <Image
                  src={p.src}
                  alt={p.name}
                  width={200}
                  height={75}
                  className="max-h-12 sm:max-h-14 max-w-[160px] sm:max-w-[200px] w-auto h-auto object-contain transition-transform group-hover:scale-108"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ─── TIER 2: POWERED BY & COMMUNITY PARTNERS (TWO COLUMNS) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-16 pt-12 border-t border-zinc-100">
          {/* Left: Powered By */}
          <div className="text-center">
            <h3
              className="text-sm sm:text-base font-black uppercase tracking-wider text-zinc-900 mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Powered By
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
              {POWERED_BY_PARTNERS.map((p, i) => (
                <div key={i} className="h-14 flex items-center justify-center group" title={p.name}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={180}
                    height={65}
                    className="max-h-10 sm:max-h-12 max-w-[130px] sm:max-w-[160px] w-auto h-auto object-contain transition-transform group-hover:scale-108"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Community Partners */}
          <div className="text-center">
            <h3
              className="text-sm sm:text-base font-black uppercase tracking-wider text-zinc-900 mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Community Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
              {COMMUNITY_PARTNERS.map((p, i) => (
                <div key={i} className="h-14 flex items-center justify-center group" title={p.name}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={180}
                    height={65}
                    className="max-h-10 sm:max-h-12 max-w-[130px] sm:max-w-[160px] w-auto h-auto object-contain transition-transform group-hover:scale-108"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── TIER 3: SPONSORS ─── */}
        <div className="pt-12 border-t border-zinc-100 text-center">
          <h3
            className="text-sm sm:text-base font-black uppercase tracking-wider text-zinc-900 mb-10"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-items-center">
            {SPONSORS_25.map((p, i) => (
              <div key={i} className="h-16 w-full flex items-center justify-center group" title={p.name}>
                <Image
                  src={p.src}
                  alt={p.name}
                  width={160}
                  height={60}
                  className={`${
                    p.compact
                      ? 'max-h-14 sm:max-h-16 max-w-[90px] sm:max-w-[110px]'
                      : 'max-h-9 sm:max-h-11 max-w-[110px] sm:max-w-[130px]'
                  } w-auto h-auto object-contain transition-transform group-hover:scale-110`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <Footer />

      {/* ─────────────────── FLASHBACK KEYFRAME STYLES ─────────────────── */}
      <style>{`
        @keyframes flashbackZoom {
          0% {
            transform: scale(0.7);
            opacity: 0;
            filter: blur(10px) brightness(1.7);
          }
          15% {
            opacity: 1;
            filter: blur(0px) brightness(1.15);
          }
          85% {
            opacity: 1;
            filter: blur(0px) brightness(1);
            transform: scale(1.03);
          }
          100% {
            transform: scale(1.08);
            opacity: 0.95;
          }
        }
        @keyframes whiteFlash {
          0% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

