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
  UserCheck,
} from 'lucide-react'

const PINK = '#ff2d87'
const YELLOW = '#ffd23f'

const WHY_PARTICIPATE = [
  {
    icon: Sparkles,
    title: 'Mentorship from Industry Leaders',
    description:
      'Direct guidance and 1-on-1 mentorship from startup professionals, founders, and industry experts to refine your business model and presentation.',
    accent: PINK,
  },
  {
    icon: TrendingUp,
    title: 'Exposure to Investors',
    description:
      'Real-world business validation, investor feedback, and exposure to early-stage venture partners looking for promising impact ventures.',
    accent: YELLOW,
  },
  {
    icon: Users,
    title: 'High-Impact Networking',
    description:
      'Connect with like-minded student innovators, ecosystem enablers, mentors, and changemakers from across Kerala and India.',
    accent: PINK,
  },
  {
    icon: Globe,
    title: 'Global Social Impact',
    description:
      'A platform to build scalable, sustainable ventures that address the UN Sustainable Development Goals (SDGs) and create lasting global impact.',
    accent: YELLOW,
  },
]

const ELIGIBILITY = [
  {
    title: 'Undergraduate Students',
    badge: 'UG Cohort',
    description:
      'Enrolled in any undergraduate degree program (B.Tech, B.Sc, B.Com, BBA, BA, etc.) from any recognised university or college.',
    icon: GraduationCap,
  },
  {
    title: 'Postgraduate Students',
    badge: 'PG Cohort',
    description:
      'Pursuing a master’s degree (M.Tech, MBA, M.Sc, MCA, MA, etc.) with aspirations to build a scalable enterprise.',
    icon: BookOpen,
  },
  {
    title: 'Doctoral Scholars',
    badge: 'Ph.D. & Research',
    description:
      'Ph.D. candidates and research fellows aiming to commercialise innovative, deep-tech, or evidence-backed solutions.',
    icon: Award,
  },
]

const STAGES_SUMMARY = [
  {
    phase: 'Stage 01',
    title: 'Preliminary Round',
    badge: 'Top 40 Shortlisted',
    description:
      'Teams submit a one-page concept note outlining their innovative solution. Evaluated on creativity, feasibility, and SDG alignment.',
  },
  {
    phase: 'Stage 02',
    title: 'Online Semifinals',
    badge: 'Top 16 Advance',
    description:
      'An online pitching round evaluated by a panel of experienced judges featuring detailed idea presentations and interactive Q&A sessions.',
  },
  {
    phase: 'Stage 03',
    title: 'Founders Bootcamp',
    badge: 'Intensive Training',
    description:
      'Hands-on workshops focused on Business Model Canvas (BMC) development, MVP prototyping, and high-impact pitch delivery.',
  },
  {
    phase: 'Stage 04',
    title: 'Grand Finale',
    badge: 'Live at Technopark',
    description:
      'Live pitching event at Travancore Hall, Technopark featuring a diverse panel of judges, investors, and industry experts. Winning teams receive exciting prizes and opportunities.',
  },
]

const SDGS = [
  'No Poverty',
  'Zero Hunger',
  'Good Health',
  'Quality Education',
  'Gender Equality',
  'Clean Water',
  'Affordable & Clean Energy',
  'Decent Work & Economic Growth',
  'Industry & Innovation',
  'Reduced Inequalities',
  'Sustainable Cities',
  'Responsible Consumption',
  'Climate Action',
  'Life Below Water',
  'Life on Land',
  'Peace & Justice',
  'Partnerships for the Goals',
]

const About = () => {
  return (
    <div className="w-full bg-[#050204] text-white selection:bg-[#ff2d87] selection:text-white">
      {/* ─────────────────── ABOUT YATHRA '26 ─────────────────── */}
      <section id="about" className="relative px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-16 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#ff2d87]" />
            Hult Prize at UCEK · Flagship Program
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            About <span style={{ color: PINK }}>Yathra ’26</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-400">
            A Million Dollar Journey empowering changemakers to build sustainable solutions for the world&apos;s greatest challenges.
          </p>
        </div>

        {/* Core Narrative / Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Statement Card */}
          <div className="lg:col-span-7 relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-10 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="absolute top-6 right-8 text-7xl font-serif text-white/10 select-none pointer-events-none">
              “
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-4">
                The Flagship Initiative
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-zinc-100">
                <span className="text-[#ff2d87] font-semibold">Yathra ’26</span> is the flagship inter-college idea pitching and innovation program organized by <span className="text-white font-semibold">Hult Prize at University College of Engineering, Kariavattom</span>.
              </p>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-300">
                Open to undergraduate, postgraduate, and doctoral students across India, the program invites young innovators to develop impactful and scalable solutions aligned with the <span className="text-white font-semibold">United Nations Sustainable Development Goals (SDGs)</span>.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>Hult Prize UCEK Qualifiers</span>
              <span className="text-[#ffd23f] font-semibold">Open Nationwide</span>
            </div>
          </div>

          {/* Impact & Mission Card */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff2d87]/10 via-white/[0.03] to-transparent p-8 sm:p-10 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffd23f] block mb-4">
                Our Purpose
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Transforming Ideas into Viable Ventures
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Yathra ’26 provides a structured platform for students to transform ideas into viable ventures through mentorship, collaboration, and competitive pitching, empowering changemakers to create meaningful and sustainable impact.
              </p>
            </div>

            {/* Key stats badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                <div className="text-2xl font-extrabold text-[#ff2d87]">Top 40</div>
                <div className="text-xs text-zinc-400 mt-1">Shortlisted Teams</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                <div className="text-2xl font-extrabold text-[#ffd23f]">Top 16</div>
                <div className="text-xs text-zinc-400 mt-1">Grand Finalists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── THEME: UNLIMITED ─────────────────── */}
      <section id="theme" className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#ff2d87]/30 bg-gradient-to-b from-[#ff2d87]/15 via-black/80 to-black p-8 sm:p-12 lg:p-16 text-center">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: PINK }}
          />

          <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#ffd23f] mb-3">
            THEME
          </span>
          <h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: PINK,
              textShadow: '0 0 40px rgba(255,45,135,0.35)',
            }}
          >
            Unlimited
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal">
            Every challenge is an opportunity with no boundaries. The theme <span className="text-white font-semibold">Unlimited</span> invites young minds to pioneer solutions addressing any of the <span className="text-[#ffd23f] font-semibold">17 United Nations Sustainable Development Goals (SDGs)</span> with zero restrictions on sector, tech stack, or domain.
          </p>

          {/* SDG Badges pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {SDGS.map((sdg, idx) => (
              <span
                key={sdg}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 backdrop-blur hover:border-[#ff2d87]/50 hover:text-white transition-colors duration-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87]" />
                <span className="font-semibold text-zinc-400">SDG {idx + 1}:</span> {sdg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHY PARTICIPATE? ─────────────────── */}
      <section id="why" className="px-6 sm:px-10 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ff2d87] backdrop-blur mb-4">
            <Target className="h-3.5 w-3.5 text-[#ffd23f]" />
            Benefits & Opportunities
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            Why Participate?
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            Gain the resources, validation, and exposure required to turn a student project into a globally recognized startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_PARTICIPATE.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50"
                  style={{ color: item.accent }}
                >
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd23f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────── WHO CAN APPLY? ─────────────────── */}
      <section id="eligibility" className="px-6 sm:px-10 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-4">
            <UserCheck className="h-3.5 w-3.5 text-[#ff2d87]" />
            Eligibility
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            Who Can Apply?
          </h2>
          <p className="mt-3 max-w-2xl text-base text-zinc-400">
            Students from all disciplines and colleges across Kerala and India are strongly encouraged to apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ELIGIBILITY.map((cohort, idx) => {
            const Icon = cohort.icon
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur hover:border-[#ff2d87]/40 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ffd23f] rounded-full border border-white/10 bg-white/[0.05] px-3 py-1">
                      {cohort.badge}
                    </span>
                    <Icon className="h-6 w-6 text-[#ff2d87]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {cohort.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {cohort.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-[#ff2d87]" />
                  <span>Eligible for all rounds & prizes</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note Box */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-[#ff2d87]/10 to-transparent p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h4 className="text-base font-semibold text-white">Cross-disciplinary teams welcome</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Teams can include members from different years, departments, and institutions across India.
            </p>
          </div>
          <Link
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-[#ffd23f] shrink-0"
          >
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─────────────────── STAGES OF YATHRA '26 ─────────────────── */}
      <section id="stages" className="px-6 sm:px-10 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ff2d87] backdrop-blur mb-4">
            <Calendar className="h-3.5 w-3.5 text-[#ffd23f]" />
            Roadmap
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            Stages of <span style={{ color: PINK }}>Yathra ’26</span>
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            A structured 4-phase competitive journey from concept to live pitching at Technopark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES_SUMMARY.map((stage, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold tracking-widest text-[#ff2d87]">
                    {stage.phase}
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-400 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5">
                    {stage.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">{stage.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#ffd23f]">Evaluated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Interactive Timeline */}
        <div className="mt-8 text-center">
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd23f] hover:text-white transition-colors"
          >
            <span>View Full Interactive Timeline & Scoring Criteria</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

     
    </div>
  )
}

export default About