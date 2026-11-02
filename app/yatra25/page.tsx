'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  X,
  Maximize2,
  MapPin,
} from 'lucide-react'
import Footer from '../components/footer'

const PINK = '#ff2d87'

// Flashback event photos for the 3D Carousel
const CAROUSEL_PHOTOS_25 = [
  {
    src: '/yathra/yatra25winners/winner.JPG',
    title: 'Historic Inaugural Champion',
    desc: 'The first-ever champions crowned on stage at Travancore Hall, Technopark.',
  },
  {
    src: '/yathra/yatra25part/event1.jpg',
    title: 'Live Pitching & Keynote',
    desc: 'Student founders pitching sustainable business models before the executive jury.',
  },
  {
    src: '/yathra/yatra25winners/runnerup1.jpg',
    title: '1st Runner-Up Honors',
    desc: 'Recognized for high-impact innovation and prototype excellence during the finals.',
  },
  {
    src: '/yathra/yatra25part/event4.jpg',
    title: 'Valedictory & Felicitations',
    desc: 'Dignitaries, faculty, and student delegations celebrating the inaugural milestone.',
  },
  {
    src: '/yathra/yatra25part/P1320368.JPG',
    title: 'Technopark Networking Sprint',
    desc: 'Collegiate teams interacting with startup advisors and ecosystem mentors.',
  },
  {
    src: '/yathra/yatra25winners/finalists.jpg',
    title: 'Top Finalist Cohort',
    desc: 'The complete cohort of collegiate finalist ventures united on stage.',
  },
]

// Winners data (clean editorial layout, no cheesy badges or fake perk pills)
const WINNERS_25 = [
  {
    place: 'Grand Champion · 1st Place',
    image: '/yathra/yatra25winners/winner.JPG',
    desc: 'Awarded 1st place for extraordinary execution, viable unit economics, and scalable social impact addressing critical UN Sustainable Development Goals. Nominated as the campus representative for the global Hult Prize track.',
  },
  {
    place: '1st Runner-Up · 2nd Place',
    image: '/yathra/yatra25winners/runnerup1.jpg',
    desc: 'Recognized for high-impact technological innovation, prototype maturity, and outstanding social business model feasibility during the grand finale evaluation.',
  },
  {
    place: '2nd Runner-Up · 3rd Place',
    image: '/yathra/yatra25winners/runnerup2.jpg',
    desc: 'Commended for innovative grassroots problem solving and impactful market validation demonstrated during the live pitching rounds.',
  },
  {
    place: 'Finalist Cohort · Honors',
    image: '/yathra/yatra25winners/finalists.jpg',
    desc: 'The elite shortlisted collegiate ventures representing top engineering and business campuses across Kerala, pitching live at Technopark.',
  },
]

// Gallery and moment photos with rich metadata
const GALLERY_PHOTOS_25 = [
  {
    src: '/yathra/yatra25winners/winner.JPG',
    tag: 'Inaugural Champion',
    title: 'Historic Champion Crowned',
    desc: 'The winning student startup team receiving the inaugural trophy and global Hult qualifier ticket.',
    location: 'Travancore Hall, Technopark',
  },
  {
    src: '/yathra/yatra25part/event1.jpg',
    tag: 'Live Pitching',
    title: 'Stage Pitch Showcase',
    desc: 'Founders presenting scalable social impact solutions live before the executive jury panel.',
    location: 'Main Auditorium',
  },
  {
    src: '/yathra/yatra25winners/runnerup1.jpg',
    tag: 'Laureates',
    title: '1st Runner-Up Honors',
    desc: 'Recognition of outstanding technological prototyping and social business model excellence.',
    location: 'Valedictory Podium',
  },
  {
    src: '/yathra/yatra25part/event4.jpg',
    tag: 'Valedictory',
    title: 'Ceremony & Felicitations',
    desc: 'Dignitaries, faculty enablers, and student delegations celebrating the inaugural milestone.',
    location: 'Main Stage',
  },
  {
    src: '/yathra/yatra25winners/finalists.jpg',
    tag: 'Cohort',
    title: 'Top Finalist Cohort',
    desc: 'The complete cohort of collegiate finalist ventures united on stage after the grand finale.',
    location: 'Technopark Stage',
  },
  {
    src: '/yathra/yatra25part/P1320368.JPG',
    tag: 'Ecosystem',
    title: 'Networking & Recognition',
    desc: 'Collegiate teams interacting with industry advisors, startup mentors, and investors.',
    location: 'Delegate Pavilion',
  },
]

// Reviews & Reflections
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

// Classified Sponsors matching the user reference photo exactly
const ECOSYSTEM_PARTNERS = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra25/ksum.png' },
  { name: 'IEDC UCEK', src: '/partners/yatra25/iedc.png' },
]

const POWERED_BY_PARTNERS = [
  { name: 'µLearn — A GTech Initiative', src: '/partners/yatra25/mulearn.png' },
  { name: 'Legacy IEDC UCEK', src: '/partners/yatra25/legacy.png' },
  { name: 'Camino Infotech', src: '/partners/yatra25/camino.png' },
]

const COMMUNITY_PARTNERS = [
  { name: 'Unstop', src: '/partners/yatra25/unstop.png' },
  { name: 'UXShots', src: '/partners/yatra25/uxshots.png' },
  { name: 'Kaumaram Mithra', src: '/partners/yatra25/mithra.png' },
]

const SPONSORS_25 = [
  { name: 'Unibic', src: '/partners/yatra25/unibic.png', isCompact: false },
  { name: 'Helmet World', src: '/partners/yatra25/helmetworld.png', isCompact: true },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png', isCompact: true },
  { name: 'Milma', src: '/partners/yatra25/milma.png', isCompact: false },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png', isCompact: true },
  { name: 'Aim Britz', src: '/partners/yatra25/aim.png', isCompact: false },
  { name: 'D-Tech Systems', src: '/partners/yatra25/dtech.png', isCompact: false },
]

export default function Yatra25Page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const total = CAROUSEL_PHOTOS_25.length

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-play carousel unless hovered
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(handleNext, 4500)
    return () => clearInterval(interval)
  }, [isPaused, handleNext])

  // Keyboard navigation & body scroll lock for preview modal
  useEffect(() => {
    if (previewIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setPreviewIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS_25.length) % GALLERY_PHOTOS_25.length : null
        )
      } else if (e.key === 'ArrowRight') {
        setPreviewIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS_25.length : null
        )
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewIndex])

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#ff2d87] selection:text-white">
      {/* ─────────────────── MINIMAL TOP BAR ─────────────────── */}
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Minimal Edition Switcher Pill */}
        <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs">
          <Link
            href="/yatra25"
            className="px-3.5 py-1.5 rounded-full font-bold transition-all bg-white text-zinc-950 shadow-xs"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Yathra ’25
          </Link>
          <Link
            href="/yatra26"
            className="px-3.5 py-1.5 rounded-full font-bold transition-all text-zinc-500 hover:text-zinc-900"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Yathra ’26
          </Link>
        </div>
      </nav>

      {/* ─────────────────── 1. 3D COVER-FLOW PHOTO CAROUSEL HERO (WHITE BACKGROUND) ─────────────────── */}
      <section
        className="w-full bg-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-zinc-200"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Clean Editorial Title */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
              Inaugural Memories & Highlights
            </span>
            <h1
              className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The Inception of <span style={{ color: PINK }}>Yathra ’25</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
              Where the journey began. Relive the foundational pitches, stage moments, and celebrations at Travancore Hall, Technopark.
            </p>
          </div>

          {/* 3D Depth Carousel Container */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
            {CAROUSEL_PHOTOS_25.map((photo, i) => {
              const diff = i - activeIndex
              // Normalized circular distance
              let normDiff = diff
              if (normDiff > total / 2) normDiff -= total
              if (normDiff < -total / 2) normDiff += total

              const isActive = normDiff === 0
              const isPrev = normDiff === -1
              const isNext = normDiff === 1
              const isVisible = Math.abs(normDiff) <= 1

              return (
                <div
                  key={i}
                  onClick={() => {
                    if (isPrev) handlePrev()
                    if (isNext) handleNext()
                  }}
                  className={`absolute top-1/2 left-1/2 w-[84vw] sm:w-[580px] md:w-[680px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isVisible ? 'cursor-pointer' : 'pointer-events-none'
                  }`}
                  style={{
                    transform: isActive
                      ? 'translate(-50%, -50%) scale(1)'
                      : isPrev
                      ? 'translate(-92%, -50%) scale(0.85)'
                      : isNext
                      ? 'translate(-8%, -50%) scale(0.85)'
                      : `translate(${normDiff < 0 ? '-140%' : '40%'}, -50%) scale(0.7)`,
                    zIndex: isActive ? 30 : isVisible ? 20 : 10,
                    opacity: isActive ? 1 : isVisible ? 0.55 : 0,
                    filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
                    boxShadow: isActive
                      ? '0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.06)'
                      : '0 10px 30px -10px rgba(0, 0, 0, 0.12)',
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    priority={isActive}
                    className="object-cover"
                  />
                  {/* Subtle Gradient & Caption on Active Slide */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 flex items-end p-5 sm:p-7 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div>
                      <h2
                        className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {photo.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-md line-clamp-2">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Left & Right Arrow Controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute left-2 sm:left-4 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-md border border-zinc-200/80 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute right-2 sm:right-4 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-md border border-zinc-200/80 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {CAROUSEL_PHOTOS_25.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#ff2d87]' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 2. WINNERS & RUNNERS-UP (CLEAN, NO CHEESY BADGES) ─────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {WINNERS_25.map((winner, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                <Image
                  src={winner.image}
                  alt={winner.place}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
                  {winner.place}
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {winner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 3. EVENT PHOTOS GALLERY & MOMENTS (EDITORIAL BENTO) ─────────────────── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Inaugural Archives
          </span>
          <h2
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Yathra ’25 Moments & Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Click any inaugural moment to expand into full-screen high-resolution preview with stage details.
          </p>
        </div>

        {/* Unique Asymmetric Bento Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Hero Highlight Card (Spans 2 cols, 2 rows) */}
          <div
            onClick={() => setPreviewIndex(0)}
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-zinc-950 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px] md:min-h-[440px]"
          >
            <Image
              src={GALLERY_PHOTOS_25[0].src}
              alt={GALLERY_PHOTOS_25[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#ff2d87] text-white shadow-sm">
                {GALLERY_PHOTOS_25[0].tag}
              </span>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff2d87]" />
                <span>{GALLERY_PHOTOS_25[0].location}</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {GALLERY_PHOTOS_25[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-lg line-clamp-2">
                {GALLERY_PHOTOS_25[0].desc}
              </p>
            </div>
          </div>

          {/* Complementary Moment Cards */}
          {GALLERY_PHOTOS_25.slice(1).map((photo, idx) => {
            const actualIndex = idx + 1
            return (
              <div
                key={actualIndex}
                onClick={() => setPreviewIndex(actualIndex)}
                className="group relative rounded-3xl overflow-hidden bg-zinc-950 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 aspect-[16/10] min-h-[220px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />

                {/* Top Badge & Expand Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white border border-white/20">
                    {photo.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 mb-1">
                    <MapPin className="w-3 h-3 text-[#ff2d87]" />
                    <span>{photo.location}</span>
                  </div>
                  <h4
                    className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {photo.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5 line-clamp-1">
                    {photo.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── 4. REVIEWS & REFLECTIONS ─────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-8 border-b border-zinc-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Ecosystem Reflections
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Leaders Say About Yathra ’25
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_25.map((rev, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div>
                <Quote className="w-7 h-7 text-[#ff2d87] opacity-60 mb-3" />
                <p className="text-sm text-zinc-700 leading-relaxed italic">
                  “{rev.quote}”
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-200/60">
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
        {/* Header matching user photo */}
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
                    p.isCompact
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

      {/* ─────────────────── INTERACTIVE PREVIEW LIGHTBOX MODAL ─────────────────── */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 p-4 sm:p-8"
          onClick={() => setPreviewIndex(null)}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff2d87] bg-black/60 px-3 py-1 rounded-full border border-white/10">
                Moment {previewIndex + 1} of {GALLERY_PHOTOS_25.length}
              </span>
              <span className="text-sm font-semibold hidden sm:inline text-zinc-300">
                {GALLERY_PHOTOS_25[previewIndex].location}
              </span>
            </div>

            <button
              onClick={() => setPreviewIndex(null)}
              aria-label="Close Preview"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setPreviewIndex(
                (prev) => (prev! - 1 + GALLERY_PHOTOS_25.length) % GALLERY_PHOTOS_25.length
              )
            }}
            aria-label="Previous Moment"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setPreviewIndex((prev) => (prev! + 1) % GALLERY_PHOTOS_25.length)
            }}
            aria-label="Next Moment"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Focused Preview Image */}
          <div
            className="relative max-w-5xl max-h-[75vh] w-full aspect-[16/10] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={GALLERY_PHOTOS_25[previewIndex].src}
                alt={GALLERY_PHOTOS_25[previewIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div
            className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col items-center gap-3 z-50 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center bg-black/70 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 max-w-xl pointer-events-auto">
              <h3
                className="text-base sm:text-lg font-bold text-white tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {GALLERY_PHOTOS_25[previewIndex].title}
              </h3>
              <p className="text-xs text-zinc-300 mt-0.5 line-clamp-1">
                {GALLERY_PHOTOS_25[previewIndex].desc}
              </p>
            </div>

            {/* Thumbnail Tray */}
            <div className="flex items-center gap-2 pointer-events-auto bg-black/60 backdrop-blur-md p-1.5 rounded-xl border border-white/10 overflow-x-auto max-w-full">
              {GALLERY_PHOTOS_25.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => setPreviewIndex(tIdx)}
                  className={`relative w-12 h-8 rounded-lg overflow-hidden transition-all cursor-pointer ${
                    previewIndex === tIdx
                      ? 'ring-2 ring-[#ff2d87] scale-105 opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <Image src={thumb.src} alt={thumb.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
