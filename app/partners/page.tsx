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
    'Discover the digital reach, email campaigns, on-stage branding, on-ground presence, and media coverage of sponsoring Yathra ‘27.',
}

const PINK = '#ff2d87'

// Point-wise structured partner benefits from the official Yathra '27 partnership deck
const BENEFIT_CATEGORIES = [
  {
    number: '01',
    title: 'Digital Reach and Promotion',
    tag: 'Digital & Social',
    description:
      'We maximise your brand’s reach through our digital platforms. Sponsors will be featured across our website, Instagram, LinkedIn, and WhatsApp communities through dedicated sponsor posts, reels, stories, and collaborative posts. Your brand will also be included in event countdown campaigns, speaker and judge announcements, and live updates during the event, so that it stays visible to our audience before, during, and after Yathra ‘27.',
    points: [
      'Featured across our official website, Instagram, LinkedIn, and WhatsApp community channels.',
      'Dedicated sponsor spotlight posts, reels, stories, and collaborative announcements.',
      'Active inclusion in countdown campaigns, speaker & judge reveals, and live summit updates.',
    ],
  },
  {
    number: '02',
    title: 'Email Campaigns',
    tag: 'Direct Marketing',
    description:
      'Sponsors will be highlighted in our email campaigns sent to students, institutions, and partner communities. These include event announcement mailers, registration reminders, and post-event thank-you emails, each carrying sponsor branding and a link to your website or offer.',
    points: [
      'Direct email dispatches sent to thousands of students, university campuses, and partner communities.',
      'Prominent sponsor logo placement across event mailers, registration pushes, and post-event communications.',
      'Direct call-to-action link embedded in all mailers driving targeted traffic to your website or promotional offer.',
    ],
  },
  {
    number: '03',
    title: 'On-Stage Branding',
    tag: 'Venue & Stage',
    description:
      'Your brand will have a strong presence at the main venue. This includes logo placement on the stage backdrop, podium, and LED screens, along with verbal acknowledgement by the hosts during the opening, key sessions, and closing ceremony. Sponsors may also be invited to present awards, deliver a short address, or showcase a brand video between sessions.',
    points: [
      'Prominent logo visibility across the primary stage backdrop, presentation podium, and high-resolution LED screens.',
      'Verbal acknowledgements by event hosts during the opening ceremony, keynote sessions, and valedictory finale.',
      'Opportunities to present venture awards, deliver a stage address, or stream brand promo reels between pitching tracks.',
    ],
  },
  {
    number: '04',
    title: 'Brand Visibility',
    tag: 'Event Collateral',
    description:
      'Sponsors will be featured prominently across all event materials, including posters, banners, standees, certificates, ID cards, and lanyards. Recognition such as “Presented by” or “Powered by” will be given according to the sponsorship tier.',
    points: [
      'Comprehensive branding on physical promotional posters, venue banners, and entrance standees.',
      'Official sponsor marks on all delegate certificates, badge credentials, and attendee lanyards.',
      'Tier-specific titular association such as “Presented by” or “Powered by” based on sponsorship commitment.',
    ],
  },
  {
    number: '05',
    title: 'On-Ground Presence',
    tag: 'Experiential & Booths',
    description:
      'Partners may set up a branded stall or booth at the venue, place banners and standees in high-footfall areas, and include flyers or branded merchandise in participant kits.',
    points: [
      'Dedicated branded stall or demonstration booth setup directly at the Technopark summit venue.',
      'Strategic placement of banners and standees in high-traffic registration, networking, and foyer corridors.',
      'Distribution of brochures, recruitment flyers, or custom branded swag directly inside participant delegate kits.',
    ],
  },
  {
    number: '06',
    title: 'Media and Content Coverage',
    tag: 'PR & Post-Event Impact',
    description:
      'Every sponsor will be acknowledged in our official event coverage, including the aftermovie, photo and video highlights, and a post-event impact report detailing reach, participation, and engagement.',
    points: [
      'Brand feature and sponsor credits in the official cinematic Yathra ‘27 aftermovie.',
      'Tagged visibility across post-event highlight reels, photo albums, and press coverage.',
      'Comprehensive post-event impact report with auditable data on total impressions, attendance, and student engagement.',
    ],
  },
]

interface Sponsor {
  name: string
  src: string
  type: 'square' | 'compact' | 'wide' | 'xwide'
}

// Unified list of all partners & sponsors from public/partners across all editions
const ALL_YATRA_SPONSORS: Sponsor[] = [
  { name: 'Kerala Startup Mission (KSUM)', src: '/partners/yatra26/ksum2.png', type: 'wide' },
  { name: 'Udhyam Learning Foundation', src: '/partners/yatra26/udhayam2.png', type: 'wide' },
  { name: 'MakeMyPass', src: '/partners/yatra26/makemypass.png', type: 'square' },
  { name: 'IIITMK', src: '/partners/yatra26/iiitmk.png', type: 'wide' },
  { name: 'KUBIIC', src: '/partners/yatra26/kubiic2.png', type: 'wide' },
  { name: 'µLearn — A GTech Initiative', src: '/partners/yatra26/mlern.png', type: 'xwide' },
  { name: 'Global Shapers Community', src: '/partners/yatra26/global2.png', type: 'wide' },
  { name: 'Unstop', src: '/partners/yatra26/unstop2.png', type: 'wide' },
  { name: 'Evara Microgreens', src: '/partners/yatra26/evara.png', type: 'square' },
  { name: 'Luv Cutlet', src: '/partners/yatra26/luvcutlet.png', type: 'square' },
  { name: 'Unstop Igniters Club', src: '/partners/yatra26/igniters.png', type: 'compact' },
  { name: 'Idea Tribe', src: '/partners/yatra26/ideatribe.png', type: 'square' },
  { name: 'Legacy IEDC UCEK', src: '/partners/yatra26/legacy2.png', type: 'wide' },
  { name: 'IEDC UCEK', src: '/partners/yatra26/iedc2.png', type: 'xwide' },
  { name: 'Helmet World', src: '/partners/yatra26/hw.png', type: 'square' },
  { name: 'Unibic', src: '/partners/yatra25/unibic.png', type: 'wide' },
  { name: 'Milma', src: '/partners/yatra25/milma.png', type: 'wide' },
  { name: 'Camino Infotech', src: '/partners/yatra25/camino.png', type: 'wide' },
  { name: 'UXShots', src: '/partners/yatra25/uxshots.png', type: 'wide' },
  { name: 'Kaumaram Mithra', src: '/partners/yatra25/mithra.png', type: 'compact' },
  { name: 'Fulva', src: '/partners/yatra25/fulva.png', type: 'compact' },
  { name: 'Varsya', src: '/partners/yatra25/varsya.png', type: 'compact' },
  { name: 'Aim Britz', src: '/partners/yatra25/aim.png', type: 'wide' },
  { name: 'ID Tech Systems', src: '/partners/yatra25/dtech.png', type: 'wide' },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col justify-between">
      {/* ─────────────────── 1. WHAT YOU GET BY SPONSORING YATHRA (BENEFITS) ─────────────────── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 w-full">
        {/* Top Header Bar: Back to Home (Left) & Yathra '27 Logo (Right) */}
        <div className="mb-8 sm:mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-semibold uppercase tracking-wider hover:border-[#ff2d87] hover:text-[#ff2d87] transition-all shadow-xs group"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Top Right: Yathra '27 Logo */}
          <div className="flex items-center">
            <Image
              src="/yathra27.png"
              alt="Yathra '27"
              width={182}
              height={81}
              priority
              className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform"
            />
          </div>
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

              {/* Exact Description Paragraph */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed pl-1 sm:pl-7 mb-4">
                {category.description}
              </p>

              {/* Point-by-point deliverable highlights */}
              <ul className="space-y-2.5 pl-1 sm:pl-7">
                {category.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed"
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

      {/* ─────────────────── 2. SPONSORS OF YATHRA (ALL SPONSORS IN ONE UNIFIED SECTION) ─────────────────── */}
      <section className="w-full bg-white text-zinc-950 py-16 sm:py-24 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
              Our Network & Ecosystem
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Sponsors of Yathra
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
              Leading government bodies, corporations, technology platforms, and startup incubators that have supported Yathra across editions.
            </p>
          </div>

          {/* Unified Logo Grid - All Sponsors in One Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 sm:gap-x-12 items-center justify-items-center">
            {ALL_YATRA_SPONSORS.map((sponsor, i) => (
              <div
                key={i}
                className="w-full h-28 sm:h-36 flex items-center justify-center p-2 sm:p-3 group"
                title={sponsor.name}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={320}
                  height={140}
                  className={`${
                    sponsor.type === 'square'
                      ? 'max-h-20 sm:max-h-24 max-w-[150px] sm:max-w-[180px]'
                      : sponsor.type === 'compact'
                      ? 'max-h-18 sm:max-h-22 max-w-[170px] sm:max-w-[210px]'
                      : sponsor.type === 'xwide'
                      ? 'max-h-12 sm:max-h-15 max-w-[210px] sm:max-w-[270px]'
                      : 'max-h-15 sm:max-h-18 max-w-[190px] sm:max-w-[240px]'
                  } w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-108`}
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
