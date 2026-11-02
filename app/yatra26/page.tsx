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
  Flame,
  CheckCircle2,
} from 'lucide-react'
import Footer from '../components/footer'

const PINK = '#ff2d87'

// Flashback scenes for memory reel
const FLASHBACK_SCENES = [
  {
    image: '/yathra/yatra26winners/winner.jpg',
    tag: 'CHAMPION MOMENT',
    title: 'Grand Champions Award Handover',
    desc: 'The winning collegiate venture claims victory at Travancore Hall, Technopark.',
  },
  {
    image: '/yathra/yatra26part/event1.jpg',
    tag: 'LIVE PITCH SPRINT',
    title: 'High-Stakes Stage Pitching',
    desc: 'Student founders pitching scalable UN SDG business models before the executive jury.',
  },
  {
    image: '/yathra/yatra26winners/runnerup.JPG',
    tag: 'RUNNER-UP TRIUMPH',
    title: '1st Runner-Up Honors',
    desc: 'Celebration of runner-up innovators delivering groundbreaking social impact.',
  },
  {
    image: '/yathra/yatra26part/event2.jpg',
    tag: 'EXECUTIVE JURY',
    title: 'Jury Q&A & Investor Deliberation',
    desc: 'CXOs and venture capitalists rigorously grilling final pitches on viability.',
  },
  {
    image: '/yathra/yatra26part/2S0A2117.JPG',
    tag: 'AUDIENCE & COMMUNITY',
    title: 'Packed Travancore Hall Audience',
    desc: 'Innovators from campuses across Kerala gathered at Technopark, Trivandrum.',
  },
  {
    image: '/yathra/yatra26part/event3.jpg',
    tag: 'EVALUATION BENCH',
    title: 'Scoring & Champion Selection',
    desc: 'The panel tallying scores to nominate the representative to the global Hult track.',
  },
]

// Winners data
const WINNERS = [
  {
    rank: '1st Place',
    title: 'Grand Champion',
    badge: 'Hult Prize Global Qualifier Nominee',
    image: '/yathra/yatra26winners/winner.jpg',
    desc: 'Awarded 1st Place for extraordinary execution, viable unit economics, and scalable impact aligned with the UN Sustainable Development Goals. Directly nominated into the global acceleration pipeline.',
    perks: ['Global Accelerator Nomination', '₹ Cash Prize & Trophy', '1-on-1 Seed Mentorship'],
  },
  {
    rank: '2nd Place',
    title: '1st Runner-Up',
    badge: 'Silver Laureate',
    image: '/yathra/yatra26winners/runnerup.JPG',
    desc: 'Recognized for high-impact innovation, outstanding product prototype, and strong market feasibility demonstrated during the live pitching sprint.',
    perks: ['Incubation Support', 'Runner-Up Trophy & Certificate', 'Investor Introductions'],
  },
]

// Gallery photos
const GALLERY_PHOTOS = [
  { src: '/yathra/yatra26part/event1.jpg', caption: 'Founder Pitch Showcase on Main Stage' },
  { src: '/yathra/yatra26part/event2.jpg', caption: 'Executive Jury Panel Deliberating' },
  { src: '/yathra/yatra26part/event3.jpg', caption: 'Evaluating Innovation Benchmarks' },
  { src: '/yathra/yatra26part/2S0A2112.JPG', caption: 'Campus Delegations & Networking' },
  { src: '/yathra/yatra26part/2S0A2117.JPG', caption: 'Valedictory Session at Travancore Hall' },
  { src: '/yathra/yatra26part/2S0A2125.JPG', caption: 'Certificate & Award Presentation' },
]

// Testimonials / Reviews
const REVIEWS = [
  {
    quote:
      'The caliber of social impact ideas at Yathra ’26 was truly international. The student founders demonstrated extraordinary poise, real unit economics, and deep alignment with the UN SDGs.',
    author: 'Executive Jury Member',
    role: 'Venture Partner & Angel Investor',
  },
  {
    quote:
      'Pitching live on the Travancore Hall stage at Technopark completely transformed our venture trajectory. The critical feedback and network we gained at Yathra opened doors to genuine seed incubation.',
    author: 'Grand Champion Founder',
    role: 'Yathra ’26 Winning Team',
  },
  {
    quote:
      'An electrifying summit that bridges collegiate engineering talent with the global startup ecosystem. UCEK has set a high standard for youth social enterprise.',
    author: 'Ecosystem Mentor',
    role: 'Kerala Startup Mission Enabler',
  },
]

// All 15 Yathra 26 Sponsors (no classification, all white marks made black for visibility)
const YATRA_26_SPONSORS = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra26/ksum2.png', isWhite: false, compact: false },
  { name: 'IIITM-K / Digital University Kerala', src: '/partners/yatra26/iiitmk.png', isWhite: false, compact: false },
  { name: 'MakeMyPass', src: '/partners/yatra26/makemypass.png', isWhite: false, compact: true },
  { name: 'µLearn — GTech', src: '/partners/yatra26/mulearn2.png', isWhite: false, compact: false },
  { name: 'Udhyam Learning Foundation', src: '/partners/yatra26/udhayam2.png', isWhite: false, compact: false },
  { name: 'Unstop', src: '/partners/yatra26/unstop2.png', isWhite: false, compact: false },
  { name: 'Unstop Igniters Club', src: '/partners/yatra26/igniters.png', isWhite: false, compact: true },
  { name: 'IEDC UCEK', src: '/partners/yatra26/iedc2.png', isWhite: false, compact: false },
  { name: 'KUBIIC', src: '/partners/yatra26/kubiic.png', isWhite: true, compact: false },
  { name: 'Legacy IEDC', src: '/partners/yatra26/legacy2.png', isWhite: true, compact: false },
  { name: 'IdeaTribe', src: '/partners/yatra26/ideatribe.png', isWhite: false, compact: true },
  { name: 'Global Shapers Community', src: '/partners/yatra26/global.png', isWhite: true, compact: false },
  { name: 'Helmet World', src: '/partners/yatra26/hw.png', isWhite: false, compact: true },
  { name: 'Luv Cutlet', src: '/partners/yatra26/luvcutlet.png', isWhite: false, compact: true },
  { name: 'Evara', src: '/partners/yatra26/evara.png', isWhite: false, compact: true },
]

export default function Yatra26Page() {
  const [activeScene, setActiveScene] = useState(0)
  const [flashKey, setFlashKey] = useState(0)

  // Auto-advance flashback scenes with memory flash effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % FLASHBACK_SCENES.length)
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
              ’26
            </span>
          </div>

          <Link
            href="/yatra25"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-all"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span>Explore ’25</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ─────────────────── 1. CINEMATIC FLASHBACK HERO ─────────────────── */}
      <section className="relative w-full bg-zinc-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-radial from-pink-900/30 via-zinc-950 to-zinc-950 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5 text-[#ff2d87]" />
              <span>Flashback Archives · 2026 Edition</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The Journey of <span style={{ color: PINK }}>Yathra ’26</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Relive the electric energy, intense jury deliberations, and historic venture pitches at Travancore Hall, Technopark.
            </p>
          </div>

          {/* Flashback Center Stage */}
          <div className="relative max-w-4xl mx-auto aspect-video sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
            {/* Flashing Through Zoom Animation Container */}
            <div
              key={flashKey}
              className="relative w-full h-full animate-[flashbackZoom_4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            >
              <Image
                src={FLASHBACK_SCENES[activeScene].image}
                alt={FLASHBACK_SCENES[activeScene].title}
                fill
                priority
                className="object-cover"
              />
              {/* Cinematic Vignette */}
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
                  {FLASHBACK_SCENES[activeScene].tag}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {FLASHBACK_SCENES[activeScene].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-md">
                  {FLASHBACK_SCENES[activeScene].desc}
                </p>
              </div>

              {/* Scene Indicator Dots */}
              <div className="flex items-center gap-2 self-start sm:self-end">
                {FLASHBACK_SCENES.map((_, idx) => (
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
            Yathra ’26 Champions & Laureates
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Selected by an esteemed panel of venture capitalists and industry dignitaries after grueling pitching sprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {WINNERS.map((winner, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
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

              {/* Details */}
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
              Visual Chronicles
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra ’26 Moments & Gallery
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            Technopark · Trivandrum
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, i) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-medium text-white">
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
            Ecosystem Reflections
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Leaders Say About Yathra ’26
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
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

      {/* ─────────────────── 5. YATHRA 26 SPONSORS (NO CLASSIFICATION, WHITE LOGOS MADE VISIBLE) ─────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Partners & Ecosystem
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sponsors of Yathra ’26
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500">
            Backed by visionary corporations, innovation networks, and student incubation ecosystems.
          </p>
        </div>

        {/* Clean Logo Grid - No Classification, White marks converted to black for 100% visibility */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 sm:gap-x-12 items-center justify-items-center">
          {YATRA_26_SPONSORS.map((sponsor, i) => (
            <div
              key={i}
              className="w-full h-20 sm:h-24 flex items-center justify-center p-2 sm:p-3 group"
              title={sponsor.name}
            >
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={220}
                height={90}
                className={`${
                  sponsor.compact
                    ? 'max-h-18 sm:max-h-20 max-w-[130px] sm:max-w-[150px]'
                    : 'max-h-12 sm:max-h-14 max-w-[140px] sm:max-w-[170px]'
                } ${
                  sponsor.isWhite ? 'brightness-0 opacity-85 hover:opacity-100' : 'opacity-90 hover:opacity-100'
                } w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-108`}
              />
            </div>
          ))}
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

