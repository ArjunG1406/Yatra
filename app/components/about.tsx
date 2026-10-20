import React from 'react'
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
} from 'lucide-react'

const PINK = '#ff2d87'
const YELLOW = '#ffd23f'

const IMPACT_METRICS = [
  { value: '$1M', label: 'Global Prize Opportunity', sub: 'Hult Prize Global Acceleration' },
  { value: 'Top 40', label: 'Shortlisted Teams', sub: 'From nationwide submissions' },
  { value: 'Top 16', label: 'Finalist Startups', sub: 'Advance to live pitching' },
  { value: 'Technopark', label: 'Grand Finale Venue', sub: 'Travancore Hall, Trivandrum' },
]

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

const About = () => {
  return (
    <div className="w-full bg-[#050204] text-white selection:bg-[#ff2d87] selection:text-white">
      {/* ─────────────────── 1. OVERVIEW & IMPACT METRICS ─────────────────── */}
      <section id="about" className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            About <span style={{ color: PINK }}>Yathra ’26</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
            The flagship inter-college idea pitching and innovation program empowering the next generation of social entrepreneurs.
          </p>
        </div>

        {/* Sponsor-Ready Impact Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className={idx === 0 ? 'text-[#ffd23f]' : idx === 3 ? 'text-[#ff2d87]' : 'text-white'}>
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
                <span className="text-white font-bold">Yathra ’26</span> is the premier inter-college idea pitching and startup acceleration initiative organized by{' '}
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
                Yathra ’26 provides a structured launchpad for students to transform raw ideas into market-ready ventures through specialized mentorship, ecosystem collaboration, and competitive evaluation, empowering student changemakers to drive tangible, long-term impact.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <span className="text-zinc-300 font-medium">Outcome Focus:</span> Sustainable job creation & scalable SDG ventures.
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 2. THEME: UNLIMITED ─────────────────── */}
      <section id="theme" className="px-6 sm:px-10 lg:px-16 py-10 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#ff2d87]/30 bg-gradient-to-r from-[#ff2d87]/15 via-white/[0.02] to-[#ffd23f]/10 p-7 sm:p-10 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd23f] mb-1">
                2026 Challenge Theme
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
      </section>

      {/* ─────────────────── 3. VALUE PROPOSITION: WHY PARTICIPATE? ─────────────────── */}
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
              Why Participate in Yathra ’26?
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

      {/* ─────────────────── 4. TALENT POOL: WHO CAN APPLY? ─────────────────── */}
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

      {/* ─────────────────── 5. PROGRAM JOURNEY (4 STAGES) ─────────────────── */}
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
              Stages of Yathra ’26
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
