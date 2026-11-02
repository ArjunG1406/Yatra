import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner & Sponsor Benefits | Yathra ’27 · Hult Prize UCEK',
  description:
    'Discover the ROI, talent access, keynote brand visibility, and ESG impact of partnering with Yathra ’27 at Technopark, Trivandrum.',
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
      'Featured logo on the official Yathra ’27 website, delegate kits, event brochures, and winner certificates.',
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
      'Ongoing visibility across all future Yathra chapter promotional campaigns.',
    ],
  },
]

// Previous event sponsors for Yathra 26
const YATRA_26_SPONSORS = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra26/ksum2.png' },
  { name: 'IIITM-K / Digital University Kerala', src: '/partners/yatra26/iiitmk.png' },
  { name: 'MakeMyPass', src: '/partners/yatra26/makemypass.png' },
  { name: 'µLearn — GTech', src: '/partners/yatra26/mulearn2.png' },
  { name: 'Udhyam Learning Foundation', src: '/partners/yatra26/udhayam2.png' },
  { name: 'Unstop', src: '/partners/yatra26/unstop2.png' },
  { name: 'Unstop Igniters Club', src: '/partners/yatra26/igniters.png' },
  { name: 'IEDC UCEK', src: '/partners/yatra26/iedc2.png' },
  { name: 'KUBIIC', src: '/partners/yatra26/kubiic.png' },
  { name: 'Legacy IEDC', src: '/partners/yatra26/legacy2.png' },
  { name: 'IdeaTribe', src: '/partners/yatra26/ideatribe.png' },
  { name: 'Global', src: '/partners/yatra26/global.png' },
  { name: 'Helmet World', src: '/partners/yatra26/hw.png' },
  { name: 'Luv Cutlet', src: '/partners/yatra26/luvcutlet.png' },
  { name: 'Evara', src: '/partners/yatra26/evara.png' },
]

// Previous event sponsors for Yathra 25
const YATRA_25_SPONSORS = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra25/ksum.png' },
  { name: 'Atal Innovation Mission (AIM)', src: '/partners/yatra25/aim.png' },
  { name: 'IEDC UCEK', src: '/partners/yatra25/iedc.png' },
  { name: 'µLearn — GTech', src: '/partners/yatra25/mulearn.png' },
  { name: 'Unstop', src: '/partners/yatra25/unstop.png' },
  { name: 'Milma', src: '/partners/yatra25/milma.png' },
  { name: 'Unibic', src: '/partners/yatra25/unibic.png' },
  { name: 'Helmet World', src: '/partners/yatra25/helmetworld.png' },
  { name: 'Legacy IEDC', src: '/partners/yatra25/legacy.png' },
  { name: 'Camino', src: '/partners/yatra25/camino.png' },
  { name: 'D-Tech', src: '/partners/yatra25/dtech.png' },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png' },
  { name: 'Mithra', src: '/partners/yatra25/mithra.png' },
  { name: 'UX Shots', src: '/partners/yatra25/uxshots.png' },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png' },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans">
      {/* ─────────────────── TOP MINIMAL NAVIGATION ─────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Yathra ’27</span>
          </Link>

          <div className="flex items-center gap-1.5">
            <span
              className="text-lg font-black tracking-tight uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra
            </span>
            <span
              className="text-sm font-black"
              style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
            >
              ’27
            </span>
          </div>

          <a
            href="mailto:hultprizeucek@gmail.com?subject=Partnership%20Inquiry%20-%20Yathra%20'27"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ff2d87] transition-all"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Partner With Us</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </header>

      {/* ─────────────────── 1. PARTNER & SPONSOR BENEFITS (FIRST SECTION) ─────────────────── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Why Partner With Yathra ’27
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Partner & Sponsor Benefits
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Partnering with Yathra ’27 connects your brand with India’s most promising student innovators, developers, and founders. Below is a comprehensive breakdown of the deliverables, brand visibility, and recruiting ROI your organization receives.
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

        {/* ─────────────────── 2. PREVIOUS SPONSORS LOGO SECTION ─────────────────── */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
              Proven Track Record
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Previous Event Partners & Sponsors
            </h2>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              Leading government bodies, corporations, technology platforms, and startup incubators that have supported Yathra across our previous editions.
            </p>
          </div>

          {/* ─── YATHRA '26 PARTNERS ─── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                Yathra ’26 Partners & Sponsors
              </span>
              <div className="h-px bg-zinc-200 flex-1" />
            </div>

            {/* Clean Logo Grid - No Flashy Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center">
              {YATRA_26_SPONSORS.map((sponsor, i) => (
                <div
                  key={i}
                  className="w-full h-16 flex items-center justify-center p-2 group"
                  title={sponsor.name}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={150}
                    height={55}
                    className="max-h-12 max-w-[130px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ─── YATHRA '25 PARTNERS ─── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                Yathra ’25 Partners & Sponsors
              </span>
              <div className="h-px bg-zinc-200 flex-1" />
            </div>

            {/* Clean Logo Grid - No Flashy Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center">
              {YATRA_25_SPONSORS.map((sponsor, i) => (
                <div
                  key={i}
                  className="w-full h-16 flex items-center justify-center p-2 group"
                  title={sponsor.name}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={150}
                    height={55}
                    className="max-h-12 max-w-[130px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── 3. BRAND KITS & CONTACT (CLEAN FOOTER) ─────────────────── */}
        <section className="mt-16 pt-12 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Canva Reference Links */}
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                Brand Collateral & Assets
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://canva.link/3k8g32dbermfr69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-[#ff2d87] transition-colors underline underline-offset-4"
                >
                  <span>Canva Partner Logo Kit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-zinc-300">•</span>
                <a
                  href="https://canva.link/3mp29gbrj3cu0xq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-[#ff2d87] transition-colors underline underline-offset-4"
                >
                  <span>Canva Launch Deck</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Contact CTA */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hultprizeucek@gmail.com?subject=Custom%20Sponsorship%20Inquiry%20-%20Yathra%20'27"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#ff2d87] transition-all"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                <span>Inquire for Sponsorship</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
