import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Home,
  CheckCircle2,
} from 'lucide-react'

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

// Deduplicated, unified list of all unique partners & sponsors of Yathra
const YATRA_SPONSORS = [
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
  { name: 'Unstop Igniters Club', src: '/partners/yatra26/igniters.png' },
  { name: 'MakeMyPass', src: '/partners/yatra26/makemypass.png' },

  // Industry, FMCG, Tech & Community Partners
  { name: 'Milma', src: '/partners/yatra25/milma.png' },
  { name: 'Unibic', src: '/partners/yatra25/unibic.png' },
  { name: 'Helmet World', src: '/partners/yatra26/hw.png' },
  { name: 'Camino', src: '/partners/yatra25/camino.png' },
  { name: 'D-Tech', src: '/partners/yatra25/dtech.png' },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png' },
  { name: 'Mithra', src: '/partners/yatra25/mithra.png' },
  { name: 'UX Shots', src: '/partners/yatra25/uxshots.png' },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png' },
  { name: 'IdeaTribe', src: '/partners/yatra26/ideatribe.png' },
  { name: 'Luv Cutlet', src: '/partners/yatra26/luvcutlet.png' },
  { name: 'Evara', src: '/partners/yatra26/evara.png' },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans relative pb-28">
      {/* ─────────────────── 1. WHAT YOU GET BY SPONSORING YATHRA (BENEFITS) ─────────────────── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 w-full">
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
      <section className="w-full bg-[#ff2d87] text-white py-16 sm:py-24 my-10 border-y border-pink-600/30 shadow-lg">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-14 gap-x-8 sm:gap-x-12 items-center justify-items-center">
            {YATRA_SPONSORS.map((sponsor, i) => (
              <div
                key={i}
                className="w-full h-24 sm:h-28 flex items-center justify-center p-3 sm:p-4 group"
                title={sponsor.name}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={220}
                  height={90}
                  className="max-h-14 sm:max-h-16 max-w-[160px] sm:max-w-[190px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-108 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── FLOATING HOME BUBBLE AT BOTTOM CENTER ─────────────────── */}
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[999] pointer-events-auto">
        <Link
          href="/"
          aria-label="Back to Home"
          title="Back to Home"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white shadow-[0_10px_35px_rgba(0,0,0,0.18),0_4px_18px_rgba(255,45,135,0.35)] border border-pink-100 hover:scale-110 active:scale-95 transition-all duration-300 group hover:border-[#ff2d87] hover:shadow-[0_14px_40px_rgba(255,45,135,0.45)]"
        >
          <Home
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff2d87] group-hover:scale-110 transition-transform duration-200"
            strokeWidth={2.4}
          />
        </Link>
      </div>
    </div>
  )
}
