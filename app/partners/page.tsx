import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'What You Get by Sponsoring Yathra | Partner Benefits',
  description:
    'Discover the ROI, talent access, keynote brand visibility, and ESG impact of sponsoring our event, Yathra.',
}

const PINK = '#ff2d87'

// Point-wise structured partner benefits
const BENEFIT_CATEGORIES = [
  {
    number: '01',
    title: 'High-Impact Brand Visibility & Media Dominance',
    tag: 'Visibility & PR',
    points: [
      'Prominent logo placement on main stage LED backdrops at Travancore Hall, Technopark throughout all pitching and keynote sessions.',
      'Featured logo on the official Yathra website, delegate kits, event brochures, and winner certificates.',
      'Dedicated sponsor spotlight reels and social media campaigns across Instagram, LinkedIn, and student community channels.',
      'Co-branded mentions in regional press releases, post-event publications, and official aftermovie credits.',
      'Branded digital broadcast banners across live-streamed semi-final and final pitching sessions.',
    ],
  },
  {
    number: '02',
    title: 'Top-Tier Tech & Student Founder Recruitment',
    tag: 'Talent Acquisition',
    points: [
      'Direct hiring pipeline to 10,000+ collegiate innovators, software engineers, product designers, and problem solvers.',
      'Exclusive access to curated participant resume books, team portfolios, and founder profiles.',
      'Dedicated on-campus company presentation or recruitment booth to interact directly with top finalists.',
      'Live observation of student candidates executing under pressure, problem-solving, and presenting technical solutions.',
      'Priority consideration for campus placement drives and internship recruitment programs.',
    ],
  },
  {
    number: '03',
    title: 'Developer Evangelism & Product / API Adoption',
    tag: 'Product Integration',
    points: [
      'Integrate your APIs, developer tools, cloud credits, or SDKs into hundreds of active student startup projects.',
      'Host an official brand masterclass, workshop, or technical hackathon sprint during the summit prep timeline.',
      'Sponsor a custom challenge track or problem statement aligned with your core technology or industry domain.',
      'Gather authentic real-time developer feedback and edge-case testing from fast-moving student dev teams.',
      'Showcase your company’s technology stack directly to the next generation of engineers.',
    ],
  },
  {
    number: '04',
    title: 'Executive Jury Presence & VIP Networking',
    tag: 'Executive Leadership',
    points: [
      'VIP Grand Finale evaluation jury seat for your CXO, VP, technical lead, or Venture Partner.',
      'Keynote stage address (10–15 mins) to share your company vision directly with hundreds of attendees.',
      'Exclusive invitation to private VIP networking sessions with startup founders, venture capitalists, and university dignitaries.',
      'On-stage presentation of champion trophies, track prizes, and student entrepreneurship awards.',
      'Direct interaction with early-stage collegiate ventures for potential corporate venture investment or incubation.',
    ],
  },
  {
    number: '05',
    title: 'ESG & UN Sustainable Development Goals CSR Alignment',
    tag: 'CSR & ESG Impact',
    points: [
      'Direct alignment with the 17 United Nations Sustainable Development Goals (SDGs) addressing climate, education, and equality.',
      'Comprehensive Corporate Social Responsibility (CSR) project fulfillment documentation and auditable impact reports.',
      'Official recognition as an authorized Social Venture Enabler fostering grassroots student innovation.',
      'Measurable community impact by empowering diverse collegiate teams across Kerala and South India.',
      'Tangible support for female founder representation and inclusive technology initiatives.',
    ],
  },
  {
    number: '06',
    title: 'Global Hult Prize Association & Network Equity',
    tag: 'Institutional Prestige',
    points: [
      'Prestigious alignment with the worldwide Hult Prize Foundation ($1,000,000 Global Seed Fund accelerator track).',
      'Institutional connection with University College of Engineering Kariavattom (UCEK), University of Kerala.',
      'Strategic presence at Technopark, Trivandrum — India’s first and largest IT innovation corridor.',
      'Long-term brand equity and lasting goodwill among student innovators, campus leaders, and alumni networks.',
      'Ongoing visibility across all future Yathra promotional campaigns.',
    ],
  },
]

interface Sponsor {
  name: string
  src: string
  compact?: boolean // Square / compact marks that need optical height boost
}

// Deduplicated, unified list of all unique partners & sponsors of Yathra
const YATRA_SPONSORS: Sponsor[] = [
  // Government, Innovation Networks & Academic Ecosystems
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra26/ksum2.png' },
  { name: 'Atal Innovation Mission (AIM)', src: '/partners/yatra25/aim.png' },
  { name: 'IIITM-K / Digital University Kerala', src: '/partners/yatra26/iiitmk.png' },
  { name: 'IEDC UCEK', src: '/partners/yatra26/iedc2.png' },
  { name: 'KUBIIC', src: '/partners/yatra26/kubiic.png' },
  { name: 'Legacy IEDC', src: '/partners/yatra26/legacy2.png' },
  { name: 'Global Shapers Community', src: '/partners/yatra26/global.png' },

  // Skilling, Education & Platform Partners
  { name: 'µLearn — GTech', src: '/partners/yatra26/mulearn2.png' },
  { name: 'Udhyam Learning Foundation', src: '/partners/yatra26/udhayam2.png' },
  { name: 'Unstop', src: '/partners/yatra26/unstop2.png' },
  { name: 'Unstop Igniters Club', src: '/partners/yatra26/igniters.png', compact: true },
  { name: 'MakeMyPass', src: '/partners/yatra26/makemypass.png', compact: true },

  // Industry, FMCG, Tech & Community Partners
  { name: 'Milma', src: '/partners/yatra25/milma.png' },
  { name: 'Unibic', src: '/partners/yatra25/unibic.png' },
  { name: 'Helmet World', src: '/partners/yatra26/hw.png', compact: true },
  { name: 'Camino', src: '/partners/yatra25/camino.png' },
  { name: 'D-Tech', src: '/partners/yatra25/dtech.png' },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png', compact: true },
  { name: 'Mithra', src: '/partners/yatra25/mithra.png', compact: true },
  { name: 'UX Shots', src: '/partners/yatra25/uxshots.png' },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png', compact: true },
  { name: 'IdeaTribe', src: '/partners/yatra26/ideatribe.png', compact: true },
  { name: 'Luv Cutlet', src: '/partners/yatra26/luvcutlet.png', compact: true },
  { name: 'Evara', src: '/partners/yatra26/evara.png', compact: true },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col justify-between">
      {/* ─────────────────── 1. WHAT YOU GET BY SPONSORING YATHRA (BENEFITS) ─────────────────── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 w-full">
        {/* Top Left: Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-semibold uppercase tracking-wider hover:border-[#ff2d87] hover:text-[#ff2d87] transition-all shadow-xs group"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Why Sponsor Our Event?
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What You Get by Sponsoring Yathra
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Sponsoring our event, Yathra, connects your brand with India’s most promising collegiate innovators, developers, and founders. Below is a comprehensive point-by-point breakdown of the deliverables, brand visibility, and recruiting ROI your organization receives.
          </p>
        </div>

        {/* Benefits Listed Point-Wise Neatly */}
        <div className="space-y-12 sm:space-y-14">
          {BENEFIT_CATEGORIES.map((category) => (
            <div
              key={category.number}
              className="pb-10 border-b border-zinc-200 last:border-b-0"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#ff2d87]">
                    {category.number}
                  </span>
                  <h2
                    className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {category.title}
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  {category.tag}
                </span>
              </div>

              {/* Point-by-point bullets */}
              <ul className="space-y-3 pl-1 sm:pl-7">
                {category.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: PINK }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      {/* ─────────────────── 2. SPONSORS OF YATHRA (UNIFIED PINK SECTION, NO DUPLICATES, BALANCED SIZE) ─────────────────── */}
      <section className="w-full bg-[#ff2d87] text-white py-16 sm:py-24 border-y border-pink-600/30 shadow-lg">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-pink-100 block mb-2">
              Our Network & Ecosystem
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Sponsors of Yathra
            </h2>
            <p className="mt-3 text-sm sm:text-base text-pink-100/90 leading-relaxed max-w-2xl">
              Leading government bodies, corporations, technology platforms, and startup incubators that have supported Yathra.
            </p>
          </div>

          {/* Unified Logo Grid - 4 Logos per Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 sm:gap-x-12 items-center justify-items-center">
            {YATRA_SPONSORS.map((sponsor, i) => (
              <div
                key={i}
                className="w-full h-24 sm:h-30 flex items-center justify-center p-2 sm:p-3 group"
                title={sponsor.name}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={240}
                  height={110}
                  className={`${
                    sponsor.compact
                      ? 'max-h-20 sm:max-h-24 max-w-[140px] sm:max-w-[160px]'
                      : 'max-h-13 sm:max-h-16 max-w-[160px] sm:max-w-[190px]'
                  } w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-108 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 3. OFFICIAL FOOTER ─────────────────── */}
      <Footer />
    </div>
  )
}
