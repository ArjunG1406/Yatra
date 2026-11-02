import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Building,
  Target,
  Sparkles,
  Trophy,
  Users,
  Compass,
  ExternalLink,
  Layers,
  Award,
  Globe2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner & Sponsor Benefits | Yathra ’27 · Hult Prize UCEK',
  description:
    'Discover the ROI, talent access, keynote brand visibility, and ESG impact of partnering with Yathra ’27 at Technopark, Trivandrum.',
}

const PINK = '#ff2d87'

const IMPACT_STATS = [
  { value: '10,000+', label: 'Collegiate Innovators', desc: 'Pan-India student outreach across engineering & business institutions' },
  { value: '100+', label: 'Venture Pitches', desc: 'Scalable student startups solving real-world challenges' },
  { value: '17', label: 'UN SDG Tracks', desc: 'Impact categories from Climate Action to Health & Clean Tech' },
  { value: '$1M', label: 'Global Seed Track', desc: 'Direct nomination pipeline into the global Hult Prize acceleration program' },
]

const CORE_BENEFITS = [
  {
    icon: Sparkles,
    title: 'High-Impact Brand Dominance',
    tag: 'Visibility',
    points: [
      'Prominent logo on main stage LED backdrops at Travancore Hall, Technopark.',
      'Featured placement on the official Yathra website, printed collaterals, delegate kits, and certificates.',
      'Co-branded digital press releases, social media campaigns, and official highlight videos.',
      'Dedicated branding across qualifier materials and college communication broadcasts.',
    ],
  },
  {
    icon: Users,
    title: 'Top-Tier Tech & Founder Talent Recruitment',
    tag: 'Talent Access',
    points: [
      'Direct pipeline to recruit elite student engineers, product designers, and entrepreneurial problem-solvers.',
      'Access to curated participant resume books and founder profiles.',
      'Exclusive slots for campus pre-placement interactions or company culture talks.',
      'Observe real-world execution, pitching poise, and technical acumen under pressure.',
    ],
  },
  {
    icon: Compass,
    title: 'Product Adoption, APIs & Platform Integration',
    tag: 'Developer Evangelism',
    points: [
      'Encourage hundreds of collegiate teams to integrate your APIs, SDKs, cloud credits, or software tools.',
      'Host an official brand workshop or hands-on developer masterclass during the qualifier timeline.',
      'Sponsor a specialized custom problem-statement track aligned with your core technology.',
      'Direct product feedback and feature testing by fast-moving collegiate dev teams.',
    ],
  },
  {
    icon: Trophy,
    title: 'Executive Jury Presence & VIP Networking',
    tag: 'Leadership',
    points: [
      'Seat for your CXO, VP, or Venture Partner on the Grand Finale evaluation jury.',
      'Deliver keynote opening remarks or present champion award trophies on stage.',
      'Network with angel syndicates, venture capitalists, startup incubators, and state ecosystem leaders.',
      'Access to private VIP networking receptions with keynote dignitaries.',
    ],
  },
  {
    icon: Target,
    title: 'ESG & UN Sustainable Development Goals CSR Alignment',
    tag: 'CSR Impact',
    points: [
      'Fulfill Corporate Social Responsibility (CSR) and ESG mandates by championing sustainable youth innovation.',
      'Directly foster ventures addressing Clean Energy, Poverty Alleviation, Climate Action, and Quality Education.',
      'Receive official CSR impact documentation and media recognition as a Social Venture Enabler.',
      'Empower diverse, inclusive teams from across Kerala and pan-India academic hubs.',
    ],
  },
  {
    icon: Globe2,
    title: 'National & Global Ecosystem Association',
    tag: 'Prestige',
    points: [
      'Align your organization with the global Hult Prize Foundation, often dubbed the "Nobel Prize for Students".',
      'Long-term association with University College of Engineering Kariavattom (UCEK), University of Kerala.',
      'Presence in Technopark, Trivandrum — India’s premier IT hub and innovation corridor.',
      'Sustained brand recall among the next generation of industry leaders and tech innovators.',
    ],
  },
]

const TIERS = [
  {
    name: 'Title / Presenting Sponsor',
    tier: 'Flagship Tier · Exclusive',
    highlight: true,
    desc: 'The definitive partnership tier providing comprehensive naming rights and maximum dominance across all digital and on-ground summit touchpoints.',
    perks: [
      'Exclusive naming rights: "Yathra ’27 Presented by [Your Brand]"',
      'Grand Finale Keynote opening address (15 mins) & permanent Jury Seat',
      'Highest prominence logo on main stage LED, website header, and all video reels',
      'Dedicated experiential booth / demo lounge at Travancore Hall, Technopark',
      'Named track award: "[Your Brand] Changemaker Award" with trophy handover',
      'Unlimited company passes for leadership and recruitment scouts',
    ],
  },
  {
    name: 'Co-Sponsor / Platform Partner',
    tier: 'Category Leader',
    highlight: false,
    desc: 'Ideal for leading technology companies, platforms, or skilling networks seeking deep integration and student adoption.',
    perks: [
      'Category exclusivity (e.g. Official Cloud, Platform, or AI Partner)',
      'Host an official brand masterclass or developer challenge track',
      'Jury presence in semi-final pitching rounds',
      'Prominent logo on stage backdrop, participant ID badges, and delegate kits',
      'Direct email newsletter feature sent to all participating student ventures',
      'Access to talent directory and resume database',
    ],
  },
  {
    name: 'Innovation & Track Partner',
    tier: 'Ecosystem & Mentorship',
    highlight: false,
    desc: 'Designed for incubators, startup accelerators, and specialized enterprises aiming to mentor and support sector-specific innovation.',
    perks: [
      'Sponsor a designated UN SDG track (e.g. Clean Energy, HealthTech, AgriTech)',
      'Mentorship sprint engagement with shortlisted venture finalists',
      'Logo on website partner wall, event brochures, and certificates',
      'On-stage presentation of Track Finalist certificates',
      'Access to pitch decks of sector-specific collegiate ventures',
      'VIP passes to the Grand Finale showcase at Technopark',
    ],
  },
  {
    name: 'Associate / Community Partner',
    tier: 'Community & Network',
    highlight: false,
    desc: 'Tailored for alumni networks, student initiatives, and creative media agencies wishing to foster student entrepreneurship.',
    perks: [
      'Logo on official summit website and community partner collaterals',
      'Social media shoutouts across Instagram, LinkedIn, and campus networks',
      'Partner acknowledgement during the valedictory award ceremony',
      'Invitation to attend the Grand Finale at Technopark',
    ],
  },
]

const CURRENT_PARTNERS = [
  {
    name: 'Unstop Igniters Club',
    role: 'Official Platform Partner',
    logo: '/partners/unstop.png',
  },
  {
    name: 'µLearn — A GTech Initiative',
    role: 'Ecosystem & Skilling Partner',
    logo: '/partners/mulearn.webp',
  },
  {
    name: 'Udhyam Learning Foundation',
    role: 'Innovation Partner',
    logo: '/partners/udhayam.png',
  },
  {
    name: 'IEDC UCEK',
    role: 'Campus Incubation Partner',
    logo: '/partners/iedc.png',
  },
  {
    name: 'Legacy IEDC',
    role: 'Alumni & Network Partner',
    logo: '/partners/legacy.png',
  },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans">
      {/* ─────────────────── TOP NAVIGATION BAR ─────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Yathra ’27</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="text-xl font-black tracking-tight uppercase"
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
            href="mailto:hultprizeucek@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#ff2d87] transition-all shadow-2xs"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Partner With Us</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </header>

      {/* ─────────────────── HERO SECTION ─────────────────── */}
      <section className="px-5 sm:px-8 pt-16 pb-16 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-pink-50 text-[#ff2d87] border border-pink-200 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Partnership & Sponsorship Prospectus</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 uppercase leading-[1.08]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Partner with <span style={{ color: PINK }}>Yathra ’27</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-zinc-600 leading-relaxed max-w-2xl">
            Align your brand with India’s most visionary collegiate changemakers. Connect with <strong>10,000+ student innovators</strong> building scalable ventures for the UN Sustainable Development Goals and the global <strong>$1,000,000 Hult Prize</strong> acceleration track.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="mailto:hultprizeucek@gmail.com?subject=Partnership%20Inquiry%20-%20Yathra%20'27"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#ff2d87] transition-all shadow-sm hover:shadow-md"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              <span>Inquire for Sponsorship</span>
            </a>

            <a
              href="https://canva.link/3k8g32dbermfr69"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-zinc-400 hover:text-zinc-950 transition-all shadow-2xs"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Canva Partner Logo Kit</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff2d87]" />
            </a>

            <a
              href="https://canva.link/3mp29gbrj3cu0xq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-200 bg-white text-zinc-800 font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-zinc-400 hover:text-zinc-950 transition-all shadow-2xs"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Canva Launch Deck</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff2d87]" />
            </a>
          </div>
        </div>

        {/* ─── METRICS & REACH BAR ─── */}
        <div className="mt-16 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span
                className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] mt-1">
                {stat.label}
              </span>
              <p className="text-xs text-zinc-500 mt-1 leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── CORE BENEFITS BREAKDOWN ─────────────────── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
            Value Proposition
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Your Brand Gains
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600">
            A partnership with Yathra ’27 delivers concrete ROI through multi-channel visibility, elite campus recruiting, and genuine ESG social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 border border-pink-100 text-[#ff2d87]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-zinc-950 leading-snug mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {benefit.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {benefit.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2d87] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── SPONSORSHIP TIERS MATRIX ─────────────────── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
            Partnership Architecture
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sponsorship Tiers & Packages
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500">
            Tailored investment tiers designed to meet your branding, recruitment, and corporate objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
                tier.highlight
                  ? 'border-2 border-[#ff2d87] bg-pink-50/20 shadow-md'
                  : 'border border-zinc-200 bg-white hover:border-zinc-300 shadow-2xs'
              }`}
            >
              <div>
                <div className="mb-4">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${
                      tier.highlight
                        ? 'bg-[#ff2d87] text-white'
                        : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                    }`}
                  >
                    {tier.tier}
                  </span>
                  <h3
                    className="text-lg font-black text-zinc-950 uppercase mt-2.5 leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2.5">
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIdx) => (
                      <li key={perkIdx} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            tier.highlight ? 'text-[#ff2d87]' : 'text-zinc-400'
                          }`}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100">
                <a
                  href={`mailto:hultprizeucek@gmail.com?subject=Inquiry%20for%20${encodeURIComponent(
                    tier.name
                  )}%20-%20Yathra%20'27`}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    tier.highlight
                      ? 'bg-[#ff2d87] text-white hover:bg-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-white hover:bg-[#ff2d87]'
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Select {tier.name.split('/')[0].trim()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── CURRENT PARTNERS & CANVA ASSETS ─────────────────── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto border-b border-zinc-200">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
            Network & Ecosystem
          </span>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Current Official Partners
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-500">
            Organizations backing student entrepreneurship and SDG innovation at UCEK.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {CURRENT_PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-zinc-200 bg-white flex flex-col items-center justify-center text-center shadow-2xs hover:border-zinc-300 transition-all"
            >
              <div className="h-16 w-full flex items-center justify-center mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={50}
                  className="max-h-11 w-auto object-contain"
                />
              </div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">
                {partner.role}
              </span>
              <span className="text-xs font-bold text-zinc-900 line-clamp-1">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Canva Logo & Kit Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://canva.link/3k8g32dbermfr69"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-white hover:border-[#ff2d87] transition-all group flex items-start justify-between"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
                Canva Resource Kit 01
              </span>
              <h4
                className="text-base font-bold text-zinc-950 group-hover:text-[#ff2d87] transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Official Partners & Sponsors Logo Asset Deck
              </h4>
              <p className="text-xs text-zinc-500 mt-1 max-w-sm">
                Access official partner logo variations, badge vectors, and placement guidelines directly on Canva.
              </p>
            </div>
            <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover:text-[#ff2d87] group-hover:border-pink-200 transition-all shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://canva.link/3mp29gbrj3cu0xq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:bg-white hover:border-[#ff2d87] transition-all group flex items-start justify-between"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
                Canva Resource Kit 02
              </span>
              <h4
                className="text-base font-bold text-zinc-950 group-hover:text-[#ff2d87] transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Yathra ’27 Launch & Sponsorship Collaterals
              </h4>
              <p className="text-xs text-zinc-500 mt-1 max-w-sm">
                View promotional layouts, event social graphics, and sponsorship collateral designs on Canva.
              </p>
            </div>
            <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover:text-[#ff2d87] group-hover:border-pink-200 transition-all shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
      </section>

      {/* ─────────────────── CONTACT & INQUIRY FOOTER CALLOUT ─────────────────── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff2d87] block mb-2">
              Ready to Shape the Future?
            </span>
            <h3
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Let’s Build a Custom Partnership for Your Brand
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We work closely with corporate sponsors and ecosystem leaders to structure bespoke deliverables, challenge tracks, and recruitment initiatives that match your exact goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="mailto:hultprizeucek@gmail.com?subject=Custom%20Sponsorship%20Discussion%20-%20Yathra%20'27"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff2d87] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-zinc-950 transition-all shadow-md"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Hult Prize UCEK</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

