'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  GraduationCap,
  BookOpen,
  Award,
  ArrowRight,
  Target,
  CheckCircle2,
  Calendar,
  Layers,
  Building2,
  Trophy,
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
  MapPin,
} from 'lucide-react'

const PINK = '#ff2d87'
const YELLOW = '#ffd23f'

const IMPACT_METRICS = [
  { value: '$1M', label: 'Global Prize Opportunity', sub: 'Hult Prize Global Acceleration' },
  { value: 'Top 40', label: 'Shortlisted Teams', sub: 'From nationwide submissions' },
  { value: 'Top 16', label: 'Finalist Startups', sub: 'Advance to live pitching' },
  // { value: 'Technopark', label: 'Grand Finale Venue', sub: 'Travancore Hall, Trivandrum' },
]

const EDITION_DATA = {
  '26': {
    name: 'Yathra ’26',
    year: '2026',
    venue: 'Travancore Hall, Technopark, Trivandrum',
    headline: 'The flagship inter-college idea pitching and innovation program empowering the next generation of social entrepreneurs.',
    winners: [
      {
        place: '1st Place · Grand Champion',
        title: 'Champion Venture · Yathra ’26',
        description:
          'Top-ranked idea pitching team demonstrating exceptional prototype feasibility, sustainable business economics, and deep alignment with UN Sustainable Development Goals.',
        image: '/yathra/yatra26winners/winner.jpg',
        badgeColor: '#ffd23f',
      },
      {
        place: '2nd Place · Runner Up',
        title: '1st Runner-Up · Yathra ’26',
        description:
          'High-potential student venture recognized by the executive jury for standout technical innovation, market readiness, and scalable community impact.',
        image: '/yathra/yatra26winners/runnerup.JPG',
        badgeColor: '#ff2d87',
      },
    ],
    moments: [
      {
        title: 'Founder Pitch Showcase',
        category: 'Live Stage Pitch',
        image: '/yathra/yatra26part/event1.jpg',
      },
      {
        title: 'Jury Evaluation & Q&A',
        category: 'Jury Deliberation',
        image: '/yathra/yatra26part/event2.jpg',
      },
      {
        title: 'Ecosystem & Mentor Collaboration',
        category: 'Founder Network',
        image: '/yathra/yatra26part/event3.jpg',
      },
    ],
    stats: [
      { value: '40+', label: 'Shortlisted Teams' },
      { value: '16', label: 'Finalist Startups' },
      { value: '$1M', label: 'Global Prize Track' },
      { value: 'Technopark', label: 'Host Tech Hub' },
    ],
  },
  '25': {
    name: 'Yathra ’25',
    year: '2025',
    venue: 'Travancore Hall, Technopark, Trivandrum',
    headline: 'The breakthrough inaugural edition that established the premier collegiate changemaker platform at UCEK.',
    winners: [
      {
        place: '1st Place · Grand Champion',
        title: 'Inaugural Champion · Yathra ’25',
        description:
          'Celebrated as the inaugural champion of Yathra, proving that student-led innovation can solve real-world problems with scalable technology.',
        image: '/yathra/yatra25winners/winner.JPG',
        badgeColor: '#ffd23f',
      },
      {
        place: '1st Runner Up',
        title: 'Excellence Award · Yathra ’25',
        description:
          'Awarded for outstanding business model formulation and practical social enterprise execution.',
        image: '/yathra/yatra25winners/runnerup1.jpg',
        badgeColor: '#ff2d87',
      },
      {
        place: '2nd Runner Up',
        title: 'Innovation Award · Yathra ’25',
        description:
          'Commended by the jury panel for ingenious hardware and circular design prototyping.',
        image: '/yathra/yatra25winners/runnerup2.jpg',
        badgeColor: '#26BDE2',
      },
      {
        place: 'Finalist Honors',
        title: 'SDG Impact Finalist · Yathra ’25',
        description:
          'Standout student concept selected among the top finalists for exemplary community dedication.',
        image: '/yathra/yatra25winners/finalists.jpg',
        badgeColor: '#4C9F38',
      },
    ],
    moments: [
      {
        title: 'Inaugural Stage & Keynote',
        category: 'Opening Ceremony',
        image: '/yathra/yatra25part/event1.jpg',
      },
      {
        title: 'Finalist Pitch Presentations',
        category: 'Stage Pitching',
        image: '/yathra/yatra25part/event2.jpg',
      },
      {
        title: 'Jury Feedback & Scoring',
        category: 'Expert Evaluation',
        image: '/yathra/yatra25part/event3.jpg',
      },
      {
        title: 'Changemaker Cohort Gathering',
        category: 'Campus Community',
        image: '/yathra/yatra25part/event4.jpg',
      },
    ],
    stats: [
      { value: '30+', label: 'Registered Teams' },
      { value: '12', label: 'Pitch Finalists' },
      { value: '10+', label: 'SDGs Explored' },
      { value: 'Technopark', label: 'Grand Finale Venue' },
    ],
  },
}

const WHY_PARTICIPATE = [
  {
    icon: Sparkles,
    title: 'Industry Mentorship',
    description:
      'Direct 1-on-1 guidance from seasoned startup founders, domain specialists, and industry professionals to sharpen product strategy and pitch execution.',
    badge: 'Mentorship',
  },
  {
    icon: TrendingUp,
    title: 'Investor Exposure',
    description:
      'Real-world business validation and visibility before angel networks, venture partners, and incubation programs seeking high-potential ventures.',
    badge: 'Validation',
  },
  {
    icon: Users,
    title: 'Ecosystem Networking',
    description:
      'Meaningful connections with fellow student founders, enterprise leaders, academia, and startup enablers across Kerala and India.',
    badge: 'Network',
  },
  {
    icon: Globe,
    title: 'Global Social Impact',
    description:
      'A proven launchpad to build scalable, market-viable enterprises aligned with the United Nations Sustainable Development Goals.',
    badge: 'SDG Impact',
  },
]

const ELIGIBILITY = [
  {
    cohort: 'Undergraduate Students',
    degree: 'B.Tech · B.Sc · B.Com · BBA · BA',
    description:
      'Open to students across all engineering, sciences, commerce, humanities, and design disciplines from any recognized institution.',
    icon: GraduationCap,
  },
  {
    cohort: 'Postgraduate Students',
    degree: 'M.Tech · MBA · M.Sc · MCA · MA',
    description:
      'Masters candidates seeking to transform research, technology prototypes, or market concepts into commercially viable startup ventures.',
    icon: BookOpen,
  },
  {
    cohort: 'Doctoral Scholars',
    degree: 'Ph.D. Researchers · Research Fellows',
    description:
      'Doctoral candidates with deep-tech, lab-tested innovations, patentable solutions, or evidence-backed social enterprise models.',
    icon: Award,
  },
]

const STAGES = [
  {
    number: '01',
    title: 'Preliminary Round',
    badge: 'Top 40 Teams',
    description:
      'Teams submit a one-page concept note outlining their innovative solution. Shortlisted based on creativity, feasibility, and SDG alignment.',
  },
  {
    number: '02',
    title: 'Online Semifinals',
    badge: 'Top 16 Advance',
    description:
      'Virtual pitching round evaluated by an expert jury with in-depth idea presentations and interactive, rigorous Q&A sessions.',
  },
  {
    number: '03',
    title: 'Founders Bootcamp',
    badge: 'Intensive Mentorship',
    description:
      'Hands-on refinement focusing on Business Model Canvas (BMC), MVP validation, unit economics, and executive pitch coaching.',
  },
  {
    number: '04',
    title: 'Grand Finale',
    badge: 'Travancore Hall, Technopark',
    description:
      'Live pitching showcase before prominent investors, industry leaders, and media. Winning teams receive prizes and global opportunities.',
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All 17 Goals' },
  { id: 'people', label: 'People & Health' },
  { id: 'planet', label: 'Planet & Climate' },
  { id: 'economy', label: 'Economy & Industry' },
  { id: 'governance', label: 'Governance & Global' },
]

const SDGS = [
  {
    id: 1,
    number: '01',
    title: 'No Poverty',
    subtitle: 'Poverty Eradication & Security',
    category: 'people',
    icon: Coins,
    color: '#E5243B',
    description:
      'End poverty in all its forms everywhere by empowering vulnerable communities with sustainable livelihoods, social safety nets, and accessible resources.',
    focus: 'Microfinance fintech, rural gig-worker platforms, low-cost essentials & micro-insurance.',
  },
  {
    id: 2,
    number: '02',
    title: 'Zero Hunger',
    subtitle: 'Food Security & AgriTech',
    category: 'people',
    icon: Wheat,
    color: '#DDA63A',
    description:
      'End hunger, achieve food security, improve nutrition, and promote sustainable precision agriculture and resilient crop supply chains.',
    focus: 'AgriTech IoT sensors, post-harvest cold chains, crop disease AI detection, bio-fertilizers.',
  },
  {
    id: 3,
    number: '03',
    title: 'Good Health & Well-being',
    subtitle: 'Healthcare Access & MedTech',
    category: 'people',
    icon: HeartPulse,
    color: '#4C9F38',
    description:
      'Ensure healthy lives and promote well-being for all at all ages through affordable diagnostics, remote care, and preventive medicine.',
    focus: 'Point-of-care medical diagnostics, rural telemedicine, mental wellness platforms, low-cost prosthetics.',
  },
  {
    id: 4,
    number: '04',
    title: 'Quality Education',
    subtitle: 'Inclusive Learning & EdTech',
    category: 'people',
    icon: GraduationCap,
    color: '#C5192D',
    description:
      'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for underserved youth and learners.',
    focus: 'Vernacular learning apps, gamified STEM toolkits, affordable vocational skill platforms.',
  },
  {
    id: 5,
    number: '05',
    title: 'Gender Equality',
    subtitle: 'Equal Rights & Safety',
    category: 'people',
    icon: Scale,
    color: '#FF3A21',
    description:
      'Achieve gender equality and empower all women and girls by eliminating discrimination, expanding leadership, and ensuring personal safety.',
    focus: 'Smart personal safety hardware, female founder incubators, equitable gig-work marketplaces.',
  },
  {
    id: 6,
    number: '06',
    title: 'Clean Water & Sanitation',
    subtitle: 'Water Tech & Conservation',
    category: 'planet',
    icon: Droplets,
    color: '#26BDE2',
    description:
      'Ensure availability and sustainable management of clean water and sanitation through low-cost purification and smart distribution monitoring.',
    focus: 'Solar water purifiers, municipal leak-detection IoT, greywater recycling, atmospheric water generators.',
  },
  {
    id: 7,
    number: '07',
    title: 'Affordable & Clean Energy',
    subtitle: 'Renewables & Grid Tech',
    category: 'economy',
    icon: Zap,
    color: '#FCC30B',
    description:
      'Ensure universal access to affordable, reliable, sustainable, and modern clean energy for residential, agricultural, and industrial utility.',
    focus: 'Decentralized solar microgrids, battery recycling tech, low-cost bio-methane fuel systems.',
  },
  {
    id: 8,
    number: '08',
    title: 'Decent Work & Growth',
    subtitle: 'Fair Jobs & Enterprise',
    category: 'economy',
    icon: Briefcase,
    color: '#A21942',
    description:
      'Promote sustained, inclusive economic growth, full productive employment, and decent work for youth and marginalized workers.',
    focus: 'Ethical worker marketplaces, MSME supply chain financing SaaS, fair-trade artisan platforms.',
  },
  {
    id: 9,
    number: '09',
    title: 'Industry & Innovation',
    subtitle: 'DeepTech & Resilient Systems',
    category: 'economy',
    icon: Cpu,
    color: '#FD6925',
    description:
      'Build resilient infrastructure, foster inclusive industrialization, and champion cutting-edge technological innovation and manufacturing.',
    focus: 'Industrial IoT predictive maintenance, low-cost 3D manufacturing, localized robotics solutions.',
  },
  {
    id: 10,
    number: '10',
    title: 'Reduced Inequalities',
    subtitle: 'Inclusion & Accessibility',
    category: 'people',
    icon: Users,
    color: '#DD1367',
    description:
      'Reduce inequality within and across borders by empowering disadvantaged demographics with digital, financial, and physical accessibility.',
    focus: 'Assistive hardware for disabled individuals, multilingual civic portals, affordable micro-banking.',
  },
  {
    id: 11,
    number: '11',
    title: 'Sustainable Cities',
    subtitle: 'Urban Transit & Smart Living',
    category: 'economy',
    icon: Building2,
    color: '#FD9D24',
    description:
      'Make cities and human settlements inclusive, safe, resilient, and sustainable through intelligent transit and circular waste ecosystems.',
    focus: 'EV transit fleet management, automated urban waste sorting, eco-friendly green building materials.',
  },
  {
    id: 12,
    number: '12',
    title: 'Responsible Consumption',
    subtitle: 'Circular Economy & Zero Waste',
    category: 'economy',
    icon: Recycle,
    color: '#BF8B2E',
    description:
      'Ensure sustainable consumption and production patterns through waste minimization, material recovery, and closed-loop cycles.',
    focus: '100% biodegradable packaging, textile waste recycling tech, product lifecycle traceability.',
  },
  {
    id: 13,
    number: '13',
    title: 'Climate Action',
    subtitle: 'Emissions & Disaster Resilience',
    category: 'planet',
    icon: Leaf,
    color: '#3F7E44',
    description:
      'Take urgent action to combat climate change and its impacts through carbon accounting, adaptation tech, and disaster early-warning tools.',
    focus: 'Verified carbon offset platforms, climate risk assessment tools, autonomous reforestation drones.',
  },
  {
    id: 14,
    number: '14',
    title: 'Life Below Water',
    subtitle: 'Marine Conservation & Tech',
    category: 'planet',
    icon: Waves,
    color: '#0A97D9',
    description:
      'Conserve and sustainably use oceans, seas, and marine resources by curbing plastic leakage, toxic runoff, and destructive overfishing.',
    focus: 'Ocean plastic harvesting tech, smart aquaculture sensors, harbor runoff treatment systems.',
  },
  {
    id: 15,
    number: '15',
    title: 'Life on Land',
    subtitle: 'Forests & Biodiversity',
    category: 'planet',
    icon: Trees,
    color: '#56C02B',
    description:
      'Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, and halt biodiversity loss.',
    focus: 'Bio-char soil rejuvenation, AI wildlife tracking to prevent poaching, satellite forest monitoring.',
  },
  {
    id: 16,
    number: '16',
    title: 'Peace & Strong Institutions',
    subtitle: 'Civic Tech & Transparency',
    category: 'governance',
    icon: ShieldCheck,
    color: '#00689D',
    description:
      'Promote peaceful and inclusive societies, provide access to justice for all, and build accountable, transparent institutions.',
    focus: 'Decentralized credential verification, citizen reporting platforms, accessible digital legal assistance.',
  },
  {
    id: 17,
    number: '17',
    title: 'Partnerships for the Goals',
    subtitle: 'Global Impact Ecosystems',
    category: 'governance',
    icon: Handshake,
    color: '#19486A',
    description:
      'Strengthen the means of implementation and revitalize global partnerships for sustainable social development and impact scale.',
    focus: 'Cross-border NGO & funder matching SaaS, open-source impact datasets, global venture syndicates.',
  },
]

const About = () => {
  const [selectedEdition, setSelectedEdition] = useState<'26' | '25'>('26')
  const [activeFlippedId, setActiveFlippedId] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const currentEdition = EDITION_DATA[selectedEdition]

  // Auto-flip back when clicking somewhere else
  useEffect(() => {
    if (activeFlippedId === null) return

    const handleOutsideClick = () => {
      setActiveFlippedId(null)
    }

    const timer = setTimeout(() => {
      window.addEventListener('click', handleOutsideClick)
      window.addEventListener('touchstart', handleOutsideClick)
    }, 0)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [activeFlippedId])

  const filteredSDGs =
    activeCategory === 'all'
      ? SDGS
      : SDGS.filter((sdg) => sdg.category === activeCategory)

  return (
    <div className="w-full bg-[#050204] text-white selection:bg-[#ff2d87] selection:text-white">
      {/* Scoped CSS for 3D flip card interactions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .sdg-perspective {
              perspective: 1000px;
            }
            .sdg-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .sdg-card-flipped {
              transform: rotateY(180deg);
            }
            .sdg-card-face {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              border-radius: 1rem;
            }
            .sdg-card-back {
              transform: rotateY(180deg);
            }
          `,
        }}
      />

      {/* ─────────────────── 1. ABOUT YATHRA (WHAT IS YATHRA) ─────────────────── */}
      <section id="about" className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            About <span style={{ color: PINK }}>Yathra </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            The flagship inter-college idea pitching and innovation program empowering the next generation of social entrepreneurs.
          </p>
        </div>

        {/* Sponsor-Ready Impact Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className={idx === 0 ? 'text-[#ffd23f]' : idx === 2 ? 'text-[#ff2d87]' : 'text-white'}>
                  {metric.value}
                </span>
              </div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">{metric.label}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{metric.sub}</div>
            </div>
          ))}
        </div>

        {/* Mission & Purpose (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-9 backdrop-blur flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff2d87] mb-3">
                <Target className="h-4 w-4" />
                <span>The Flagship Innovation Program</span>
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-100">
                <span className="text-white font-bold">Yathra </span> is the premier inter-college idea pitching and startup acceleration initiative organized by{' '}
                <span className="text-[#ffd23f] font-semibold">Hult Prize at University College of Engineering, Kariavattom (UCEK)</span>.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                Open to undergraduate, postgraduate, and doctoral scholars across India, the program invites young innovators to formulate scalable, sustainable business models addressing the{' '}
                <span className="text-white font-medium">United Nations Sustainable Development Goals (SDGs)</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <span>Organized by Hult Prize UCEK</span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#ff2d87]" /> National Student Outreach
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff2d87]/10 via-white/[0.025] to-transparent p-7 sm:p-9 backdrop-blur flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffd23f] mb-3">
                <Trophy className="h-4 w-4" />
                <span>Structured Venture Platform</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                From Campus Project to Viable Enterprise
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                Yathra provides a structured launchpad for students to transform raw ideas into market-ready ventures through specialized mentorship, ecosystem collaboration, and competitive evaluation, empowering student changemakers to drive tangible, long-term impact.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <span className="text-zinc-300 font-medium">Outcome Focus:</span> Sustainable job creation & scalable SDG ventures.
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 2. YATHRA 26 & 25 EDITION SHOWCASE (WITH TOGGLE) ─────────────────── */}
      <section id="editions" className="px-6 sm:px-10 lg:px-16 py-12 max-w-7xl mx-auto border-t border-white/10">
        {/* Section Header with Toggle & Venue Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-3">
              <Trophy className="h-3.5 w-3.5 text-[#ff2d87]" />
              Edition Highlights & Hall of Fame
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
            >
              Past Editions: <span style={{ color: PINK }}>{currentEdition.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
              Explore the winning student startups, runner-up pitches, and captured stage moments from our previous chapters.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.04] p-1.5 backdrop-blur shadow-sm">
            <button
              onClick={() => setSelectedEdition('26')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                selectedEdition === '26'
                  ? 'bg-[#ff2d87] text-white shadow-md shadow-[#ff2d87]/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Yathra ’26
            </button>
            <button
              onClick={() => setSelectedEdition('25')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                selectedEdition === '25'
                  ? 'bg-[#ff2d87] text-white shadow-md shadow-[#ff2d87]/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Yathra ’25
            </button>
          </div>
        </div>

        {/* Venue Information Banner (Same Venue for Both Editions) */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ffd23f]/30 bg-[#ffd23f]/10 text-[#ffd23f] shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <span className="text-zinc-400 text-xs block">Grand Finale Venue ({currentEdition.name}):</span>
              <strong className="text-white font-bold">{currentEdition.venue}</strong>
            </div>
          </div>
          <span className="self-start sm:self-auto text-[11px] text-zinc-400 font-medium rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1">
            Official Competition Host Venue
          </span>
        </div>

        {/* ─── WINNERS PODIUM & HONORS ─── */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="h-4 w-4 text-[#ffd23f]" />
            <h4
              className="text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Winning Innovators & Honors ({currentEdition.name})
            </h4>
          </div>

          <div
            className={`grid gap-5 ${
              currentEdition.winners.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {currentEdition.winners.map((winner, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/25 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Winner Photo with Badges */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/50">
                  <Image
                    src={winner.image}
                    alt={winner.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span
                    className="absolute top-3.5 left-3.5 px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-xl border backdrop-blur-md shadow-sm"
                    style={{
                      borderColor: `${winner.badgeColor}70`,
                      backgroundColor: 'rgba(5,2,4,0.75)',
                      color: winner.badgeColor,
                    }}
                  >
                    {winner.place}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4
                      className="text-lg font-bold text-white group-hover:text-[#ffd23f] transition-colors leading-snug mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {winner.title}
                    </h4>
                    <p className="text-xs text-zinc-300/85 leading-relaxed">
                      {winner.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#ff2d87]" /> Evaluated Pitch
                    </span>
                    <span className="text-zinc-500 font-medium">Edition {currentEdition.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── EVENT MOMENTS & PITCHING GALLERY ─── */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#ff2d87]" />
              <h4
                className="text-xs font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Pitch Atmosphere & Stage Moments ({currentEdition.name})
              </h4>
            </div>
            <span className="text-xs text-zinc-500">
              {currentEdition.moments.length} Moments Captured
            </span>
          </div>

          <div
            className={`grid gap-4 sm:gap-5 ${
              currentEdition.moments.length === 3
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {currentEdition.moments.map((moment, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-lg hover:border-white/25 transition-all"
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity group-hover:via-black/25" />
                <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#ffd23f] block mb-0.5">
                    {moment.category}
                  </span>
                  <h5 className="text-sm font-semibold text-white leading-snug">
                    {moment.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── EDITION STATS BAR ─── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur">
          {currentEdition.stats.map((s, idx) => (
            <div key={idx} className="text-center p-2">
              <div
                className="text-xl sm:text-2xl font-black text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className={idx === 0 ? 'text-[#ffd23f]' : idx === 3 ? 'text-[#ff2d87]' : 'text-white'}>
                  {s.value}
                </span>
              </div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── 3. THEME & INTERACTIVE 3D SDG FLIP CARDS ─────────────────── */}
      <section id="theme" className="px-6 sm:px-10 lg:px-16 py-12 max-w-7xl mx-auto border-t border-white/10">
        {/* Unlimited Theme Banner */}
        <div className="rounded-2xl border border-[#ff2d87]/30 bg-gradient-to-r from-[#ff2d87]/15 via-white/[0.02] to-[#ffd23f]/10 p-7 sm:p-10 backdrop-blur mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd23f] mb-1">
                Challenge Theme
              </span>
              <h3
                className="text-4xl sm:text-5xl font-black tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", color: PINK }}
              >
                Unlimited
              </h3>
              <span className="text-xs font-medium text-zinc-400 mt-1">
                Aligned with UN Sustainable Development Goals
              </span>
            </div>

            <div className="lg:col-span-8">
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                The theme <span className="text-white font-semibold">Unlimited</span> removes boundaries for student changemakers. Participants are challenged to address any of the 17 UN SDGs with complete freedom of industry — encompassing clean technology, healthcare, education, sustainable agriculture, smart cities, and circular economy.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Clean Energy', 'Healthcare', 'Quality Education', 'Climate Action', 'Sustainable Cities', 'Decent Work'].map((focus) => (
                  <span
                    key={focus}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87]" />
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SDGs Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-3">
            <Globe className="h-3.5 w-3.5 text-[#ff2d87]" />
            17 United Nations Goals
          </div>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif'" }}
          >
            The SDG Innovation Tracks
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
            Click any card to view problem statements and startup venture focus areas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setActiveFlippedId(null)
                }}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'border-[#ff2d87] bg-[#ff2d87]/15 text-white shadow-sm'
                    : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSDGs.map((sdg) => {
            const Icon = sdg.icon
            const isFlipped = activeFlippedId === sdg.id

            return (
              <div
                key={sdg.id}
                role="button"
                tabIndex={0}
                aria-label={`SDG ${sdg.number}: ${sdg.title}. Click to view details.`}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveFlippedId((prev) => (prev === sdg.id ? null : sdg.id))
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    e.stopPropagation()
                    setActiveFlippedId((prev) => (prev === sdg.id ? null : sdg.id))
                  }
                }}
                className="sdg-perspective h-[310px] w-full select-none cursor-pointer group focus:outline-none rounded-2xl"
              >
                <div className={`sdg-card-inner ${isFlipped ? 'sdg-card-flipped' : ''}`}>
                  {/* ─── FRONT FACE ─── */}
                  <div className="sdg-card-face p-5 sm:p-6 border border-white/10 bg-white/[0.03] backdrop-blur hover:border-white/20 hover:bg-white/[0.05] transition-all flex flex-col justify-between overflow-hidden">
                    {/* Top ambient highlight */}
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20 transition-opacity group-hover:opacity-40"
                      style={{ backgroundColor: sdg.color }}
                    />

                    {/* Top bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span
                        className="px-2.5 py-1 text-[11px] font-black rounded-lg border uppercase tracking-wider"
                        style={{
                          borderColor: `${sdg.color}50`,
                          backgroundColor: `${sdg.color}15`,
                          color: sdg.color,
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        SDG {sdg.number}
                      </span>
                    </div>

                    {/* Middle Icon & Title */}
                    <div className="relative z-10 my-auto">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 mb-4 shadow-sm"
                        style={{
                          borderColor: `${sdg.color}40`,
                          backgroundColor: `${sdg.color}14`,
                          color: sdg.color,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4
                        className="text-lg font-bold text-white group-hover:text-[#ffd23f] transition-colors leading-snug"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {sdg.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-medium mt-1 line-clamp-2">
                        {sdg.subtitle}
                      </p>
                    </div>

                    {/* Bottom action line */}
                    <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        Click to view details
                      </span>
                      <span className="text-[11px] text-zinc-500 group-hover:text-[#ffd23f] transition-colors">
                        →
                      </span>
                    </div>
                  </div>

                  {/* ─── BACK FACE ─── */}
                  <div className="sdg-card-face sdg-card-back p-5 sm:p-6 border border-white/10 bg-[#0c070e] bg-gradient-to-b from-white/[0.04] via-[#0c070e] to-white/[0.02] backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between overflow-hidden shadow-2xl">
                    {/* Top ambient highlight */}
                    <div
                      className="absolute -top-10 -left-10 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20"
                      style={{ backgroundColor: sdg.color }}
                    />

                    {/* Top bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span
                        className="px-2 py-0.5 text-[10px] font-black rounded border uppercase tracking-wider"
                        style={{
                          borderColor: `${sdg.color}50`,
                          backgroundColor: `${sdg.color}15`,
                          color: sdg.color,
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        SDG {sdg.number} · Overview
                      </span>
                    </div>

                    {/* Middle description & focus */}
                    <div className="relative z-10 my-auto">
                      <h4
                        className="text-sm font-bold text-white leading-tight mb-2"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {sdg.title}
                      </h4>
                      <p className="text-[11.5px] text-zinc-300 leading-relaxed line-clamp-3">
                        {sdg.description}
                      </p>

                      <div className="mt-2.5 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#ffd23f] block mb-1">
                          Venture Opportunities
                        </span>
                        <p className="text-[10.5px] text-zinc-300 leading-snug line-clamp-2">
                          {sdg.focus}
                        </p>
                      </div>
                    </div>

                    {/* Bottom return prompt line */}
                    <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        Click to close
                      </span>
                      <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        ↺
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── 4. VALUE PROPOSITION: WHY PARTICIPATE? ─────────────────── */}
      <section id="why" className="px-6 sm:px-10 lg:px-16 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff2d87] backdrop-blur mb-3">
              <Layers className="h-3.5 w-3.5 text-[#ffd23f]" />
              Core Pillars
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
            >
              Why Participate in Yathra?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            A comprehensive acceleration platform delivering high-impact value to emerging student founders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_PARTICIPATE.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-[#ffd23f] group-hover:text-[#ff2d87] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ffd23f] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── 5. TALENT POOL: WHO CAN APPLY? ─────────────────── */}
      <section id="eligibility" className="px-6 sm:px-10 lg:px-16 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-[#ff2d87]" />
              Student Reach
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
            >
              Who Can Apply?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Students from all academic disciplines, colleges, and universities across Kerala and India are eligible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ELIGIBILITY.map((cohort, idx) => {
            const Icon = cohort.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffd23f]">
                      {cohort.degree}
                    </span>
                    <Icon className="h-5 w-5 text-[#ff2d87]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cohort.cohort}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cohort.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-zinc-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#ff2d87]" />
                  <span>Multidisciplinary team eligible</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── 6. PROGRAM JOURNEY (4 STAGES) ─────────────────── */}
      <section id="stages" className="px-6 sm:px-10 lg:px-16 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff2d87] backdrop-blur mb-3">
              <Calendar className="h-3.5 w-3.5 text-[#ffd23f]" />
              Competition Structure
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
            >
              Stages of Yathra ’27
            </h2>
          </div>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ffd23f] hover:text-[#ff2d87] transition-colors"
          >
            <span>View detailed timeline & criteria</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-black tracking-widest text-[#ff2d87]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    PHASE {stage.number}
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-400 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5">
                    {stage.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{stage.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Milestone {idx + 1}</span>
                <span className="text-[#ffd23f]">Evaluated Round</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
