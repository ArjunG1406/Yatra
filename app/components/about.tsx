'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  Coins,
  Wheat,
  HeartPulse,
  Scale,
  Droplets,
  Zap,
  Briefcase,
  Cpu,
  Recycle,
  Leaf,
  Waves,
  Trees,
  ShieldCheck,
  Handshake,
  GraduationCap,
  Target,
} from 'lucide-react'

const PINK = '#ff2d87'

const EDITION_DATA = {
  '26': {
    name: 'Yathra ’26',
    year: '2026',
    venue: 'Travancore Hall, Technopark, Trivandrum',
    summary: 'The flagship chapter uniting nationwide collegiate ventures pitching for the $1M Hult Prize track.',
    photos: [
      {
        tag: '1st Place · Champion',
        title: 'Grand Champion Venture',
        image: '/yathra/yatra26winners/winner.jpg',
      },
      {
        tag: '2nd Place · Runner Up',
        title: '1st Runner-Up Venture',
        image: '/yathra/yatra26winners/runnerup.JPG',
      },
      {
        tag: 'Stage Pitch',
        title: 'Live Pitching Session',
        image: '/yathra/yatra26part/event1.jpg',
      },
      {
        tag: 'Executive Jury',
        title: 'Jury Deliberation & Q&A',
        image: '/yathra/yatra26part/event2.jpg',
      },
    ],
  },
  '25': {
    name: 'Yathra ’25',
    year: '2025',
    venue: 'Travancore Hall, Technopark, Trivandrum',
    summary: 'The landmark inaugural edition establishing UCEK’s collegiate changemaker platform.',
    photos: [
      {
        tag: '1st Place · Champion',
        title: 'Inaugural Champion Venture',
        image: '/yathra/yatra25winners/winner.JPG',
      },
      {
        tag: '2nd Place · Runner Up',
        title: '1st Runner-Up Pitch',
        image: '/yathra/yatra25winners/runnerup1.jpg',
      },
      {
        tag: 'Stage Pitch',
        title: 'Founder Pitch Showcase',
        image: '/yathra/yatra25part/event1.jpg',
      },
      {
        tag: 'Cohort Exchange',
        title: 'Valedictory & Awards',
        image: '/yathra/yatra25part/event4.jpg',
      },
    ],
  },
}

const SDGS = [
  { number: '01', title: 'No Poverty', icon: Coins, color: '#e5243b', focus: 'Financial inclusion & decentralized livelihoods' },
  { number: '02', title: 'Zero Hunger', icon: Wheat, color: '#dda63a', focus: 'AgriTech innovation & cold chain security' },
  { number: '03', title: 'Good Health', icon: HeartPulse, color: '#4c9f38', focus: 'Affordable MedTech & digital diagnostics' },
  { number: '04', title: 'Quality Education', icon: GraduationCap, color: '#c5192d', focus: 'Vernacular EdTech & skill development' },
  { number: '05', title: 'Gender Equality', icon: Scale, color: '#ff3a21', focus: 'Equal digital access & women-led ventures' },
  { number: '06', title: 'Clean Water', icon: Droplets, color: '#26bde2', focus: 'Low-cost filtration & water conservation' },
  { number: '07', title: 'Clean Energy', icon: Zap, color: '#fcc30b', focus: 'Decentralized solar & energy storage' },
  { number: '08', title: 'Decent Work', icon: Briefcase, color: '#a21942', focus: 'Gig economy safety & green jobs' },
  { number: '09', title: 'Industry & Innovation', icon: Cpu, color: '#fd6925', focus: 'Smart manufacturing & sustainable IoT' },
  { number: '10', title: 'Reduced Inequalities', icon: Target, color: '#dd1367', focus: 'Assistive tech & economic inclusion' },
  { number: '11', title: 'Sustainable Cities', icon: Target, color: '#fd9d24', focus: 'Clean urban mobility & smart waste' },
  { number: '12', title: 'Responsible Consumption', icon: Recycle, color: '#bf8b2e', focus: 'Circular models & plastic alternatives' },
  { number: '13', title: 'Climate Action', icon: Leaf, color: '#3f7e44', focus: 'Carbon reduction & eco-restoration' },
  { number: '14', title: 'Life Below Water', icon: Waves, color: '#0a97d9', focus: 'Ocean plastic cleanup & marine tech' },
  { number: '15', title: 'Life on Land', icon: Trees, color: '#56c02b', focus: 'Reforestation automation & biodiversity' },
  { number: '16', title: 'Strong Institutions', icon: ShieldCheck, color: '#00689d', focus: 'Civic transparency & governance tools' },
  { number: '17', title: 'Partnerships', icon: Handshake, color: '#19486a', focus: 'Cross-sector impact coalitions' },
]

const VALUE_POINTS = [
  { num: '01', title: '$1M Seed Track', desc: 'Direct nomination to global Hult Prize acceleration.' },
  { num: '02', title: '1-on-1 Mentorship', desc: 'Guidance from seasoned founders and startup advisors.' },
  { num: '03', title: 'Technopark Finale', desc: 'Live pitch on-stage at Travancore Hall, Trivandrum.' },
  { num: '04', title: 'Pan-India Reach', desc: 'Compete with top innovators from campuses across India.' },
]

export default function About() {
  const [selectedEdition, setSelectedEdition] = useState<'26' | '25'>('26')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const currentEdition = EDITION_DATA[selectedEdition]

  const scrollSDGs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="w-full bg-white text-zinc-950">
      {/* ─────────────────── 1. MINIMAL ABOUT OVERVIEW ─────────────────── */}
      <section id="about" className="px-5 sm:px-8 py-16 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            The Initiative
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About <span style={{ color: PINK }}>Yathra</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            <strong>Yathra</strong> is the premier collegiate venture pitching program organized by <strong>Hult Prize at University College of Engineering Kariavattom (UCEK)</strong>, University of Kerala. Open to students nationwide to build scalable, sustainable businesses aligned with the UN Sustainable Development Goals.
          </p>
        </div>

        {/* 4 Minimal Value Points */}
        <div className="mt-10 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {VALUE_POINTS.map((v) => (
            <div key={v.num}>
              <span className="font-mono text-xs font-bold text-[#ff2d87] block mb-1">
                {v.num}
              </span>
              <h3 className="text-sm font-bold text-zinc-900 mb-0.5">{v.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 2. PAST EDITIONS (EDITORIAL STAGGERED BENTO COLLAGE) ─────────────────── */}
      <section id="editions" className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative, Switcher & Venue Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
              Hall of Fame
            </span>
            <h3
              className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Past Chapters: <span style={{ color: PINK }}>{currentEdition.name}</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              {currentEdition.summary}
            </p>

            {/* Edition Switcher */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Switch Chapter:
              </span>
              <div className="inline-flex p-1 rounded-xl border border-zinc-200 bg-zinc-100 self-start">
                <button
                  onClick={() => setSelectedEdition('26')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedEdition === '26'
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  Yathra ’26
                </button>
                <button
                  onClick={() => setSelectedEdition('25')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedEdition === '25'
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  Yathra ’25
                </button>
              </div>
            </div>

            {/* Venue Tag */}
            <div className="mt-6 p-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white shadow-2xs border border-zinc-200 text-[#ff2d87] shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Grand Finale Venue ({currentEdition.name})
                </span>
                <span className="text-xs sm:text-sm font-bold text-zinc-900 mt-0.5 block">
                  {currentEdition.venue}
                </span>
              </div>
            </div>

            {/* Key Milestone Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-tight bg-zinc-100 text-zinc-700 border border-zinc-200">
                100+ Startup Pitches
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-tight bg-pink-50 text-[#ff2d87] border border-pink-200">
                $1M Direct Seed Nomination
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-tight bg-zinc-100 text-zinc-700 border border-zinc-200">
                Executive Angel Jury
              </span>
            </div>
          </div>

          {/* Right Column: 2-Column Collage with Unified 4:3 Rounded Shape */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {/* Collage Column 1 (Left): Photo 0 & Photo 2 */}
            <div className="flex flex-col gap-3 sm:gap-5">
              {/* Card 0: Winner */}
              {currentEdition.photos[0] && (
                <div className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={currentEdition.photos[0].image}
                    alt={currentEdition.photos[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  />
                  {/* Floating Pill Tag */}
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 text-white backdrop-blur-md shadow-xs">
                    {currentEdition.photos[0].tag}
                  </span>
                  {/* Subtle Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent z-10 flex flex-col justify-end">
                    <h4
                      className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {currentEdition.photos[0].title}
                    </h4>
                  </div>
                </div>
              )}

              {/* Card 2: Stage Pitch */}
              {currentEdition.photos[2] && (
                <div className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={currentEdition.photos[2].image}
                    alt={currentEdition.photos[2].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 text-white backdrop-blur-md shadow-xs">
                    {currentEdition.photos[2].tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent z-10 flex flex-col justify-end">
                    <h4
                      className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {currentEdition.photos[2].title}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Collage Column 2 (Right): Photo 1 & Photo 3 (with subtle staggered offset) */}
            <div className="flex flex-col gap-3 sm:gap-5 pt-4 sm:pt-6">
              {/* Card 1: Runner Up */}
              {currentEdition.photos[1] && (
                <div className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={currentEdition.photos[1].image}
                    alt={currentEdition.photos[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 text-white backdrop-blur-md shadow-xs">
                    {currentEdition.photos[1].tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent z-10 flex flex-col justify-end">
                    <h4
                      className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {currentEdition.photos[1].title}
                    </h4>
                  </div>
                </div>
              )}

              {/* Card 3: Jury / Ceremony */}
              {currentEdition.photos[3] && (
                <div className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src={currentEdition.photos[3].image}
                    alt={currentEdition.photos[3].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 text-white backdrop-blur-md shadow-xs">
                    {currentEdition.photos[3].tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent z-10 flex flex-col justify-end">
                    <h4
                      className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {currentEdition.photos[3].title}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 3. THEME: 17 SCROLLABLE SDGS ─────────────────── */}
      <section id="theme" className="px-5 sm:px-8 py-16 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
              Challenge Track
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Theme: <span style={{ color: PINK }}>Unlimited (17 UN SDGs)</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Scroll horizontally to explore all 17 innovation tracks.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => scrollSDGs('left')}
              aria-label="Scroll left"
              className="h-8 w-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-zinc-400 hover:text-zinc-950 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollSDGs('right')}
              aria-label="Scroll right"
              className="h-8 w-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-zinc-400 hover:text-zinc-950 transition-colors shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {SDGS.map((sdg) => {
            const Icon = sdg.icon
            return (
              <div
                key={sdg.number}
                className="w-[240px] shrink-0 snap-start p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2 py-0.5 text-[10px] font-mono font-bold rounded uppercase tracking-wider text-white"
                      style={{ backgroundColor: sdg.color }}
                    >
                      SDG {sdg.number}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: sdg.color }} />
                  </div>
                  <h4
                    className="text-sm font-bold text-zinc-950 leading-snug mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {sdg.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-zinc-100">
                  <p className="text-[11px] text-zinc-500 leading-snug">
                    {sdg.focus}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── 4. MINIMAL ELIGIBILITY ─────────────────── */}
      <section id="eligibility" className="px-5 sm:px-8 py-14 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
              Eligibility
            </span>
            <h3
              className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who Can Apply?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl">
            Open to enrolled <strong>Undergraduate, Postgraduate, and Doctoral students</strong> from all academic disciplines, colleges, and universities across India.
          </p>
        </div>
      </section>
    </div>
  )
}
