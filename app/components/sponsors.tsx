'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Handshake,
  X,
  ExternalLink,
  Phone,
  Mail,
  Sparkles,
  Trophy,
  CheckCircle2,
  PlusCircle,
  Building,
  ArrowRight,
} from 'lucide-react'

const PINK = '#ff2d87'
const YELLOW = '#ffd23f'

interface PartnerDetail {
  id: string
  name: string
  role: string
  category: string
  logo?: string
  logoWidth?: number
  logoHeight?: number
  website?: string
  isVacant?: boolean
  tagline: string
  description: string
  deliverables: string[]
  stats?: { label: string; value: string }[]
}

const PARTNERS: PartnerDetail[] = [
  {
    id: 'unstop',
    name: 'Unstop',
    role: 'Opportunity & Platform Partner',
    category: 'Official Platform Partner',
    logo: '/partners/unstop.png',
    logoWidth: 220,
    logoHeight: 70,
    website: 'https://unstop.com',
    isVacant: false,
    tagline: 'Connecting collegiate innovators with global opportunities and hackathons.',
    description:
      'Unstop is the official registration and competition platform partner for Yathra ’26. Powering our nationwide student outreach, stage-by-stage concept note submissions, and digital leaderboards across 10,000+ colleges.',
    deliverables: [
      'Official competition portal hosting for all rounds of Yathra ’26',
      'Targeted email and portal reach to 10M+ registered students & developers across India',
      'Digital certificate issuance, automated shortlisting, and leaderboard displays',
      'Dedicated branding on all national competition banners and collateral',
    ],
    stats: [
      { label: 'Platform Reach', value: '10M+ Users' },
      { label: 'Campus Presence', value: '10K+ Colleges' },
    ],
  },
  {
    id: 'mulearn',
    name: 'µLearn',
    role: 'A GTech Initiative',
    category: 'Ecosystem & Skilling Partner',
    logo: '/partners/mulearn.webp',
    logoWidth: 200,
    logoHeight: 70,
    website: 'https://mulearn.org',
    isVacant: false,
    tagline: 'Peer learning and industry-readiness ecosystem powered by GTech companies.',
    description:
      'An initiative of the Group of Technology Companies (GTech), µLearn connects Yathra ’26 participants with industry architects and engineers, fostering micro-skilling, code sprints, and startup prototyping.',
    deliverables: [
      'Statewide campus chapter engagement across 150+ engineering colleges',
      'Direct technical mentorship and architecture reviews for shortlisted teams',
      'Facilitation of post-event internships and hiring pipelines with GTech firms',
      'Joint bootcamps on open-source, AI, and scalable product building',
    ],
    stats: [
      { label: 'Campus Chapters', value: '150+' },
      { label: 'Active Learners', value: '50K+' },
    ],
  },
  
  {
    id: 'vacant-powered',
    name: 'Powered By Partner',
    role: 'Co-Branded Innovation Sponsor',
    category: 'Sponsorship Opportunity · Open',
    isVacant: true,
    tagline: 'Associate your brand with student-led UN Sustainable Development Goal ventures.',
    description:
      'Align your organization with impactful technological solutions. As a Powered By Partner, your company receives prominent secondary branding, dedicated category award presentation rights, and direct brand exposure across all competition rounds.',
    deliverables: [
      'Prominent "Powered by [Your Brand]" positioning across digital channels and print',
      'Opportunity to sponsor a specific SDG track (e.g., Clean Tech, Healthcare, AI)',
      'Jury representation during the online semifinal pitching and founders bootcamp',
      'Brand feature in all regional media press releases and university mailers',
      'Access to recruitment pool and talent scouting opportunities',
    ],
    stats: [
      { label: 'Target Track', value: '17 UN SDGs' },
      { label: 'Brand Exposure', value: 'Full Season' },
    ],
  },
]

const Sponsors = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerDetail | null>(null)

  // Lock body scroll and handle escape key when drawer is open
  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedPartner(null)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedPartner])

  return (
    <section
      id="partners"
      className="relative w-full bg-[#050204] py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-y border-white/10"
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
      {/* Hide scrollbars cleanly across all browsers while allowing smooth scrolling */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full blur-[130px] opacity-15"
        style={{
          background: `radial-gradient(ellipse at center, ${PINK} 0%, ${YELLOW} 60%, transparent 100%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
          >
            Partners & <span style={{ color: PINK }}>Sponsors</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Backed by leading innovation networks — with prime sponsorship slots available for visionary organizations.
          </p>
        </div>

        {/* Clean, Reasonably Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PARTNERS.map((item) => {
            const isVacant = item.isVacant

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPartner(item)}
                className={`group relative rounded-3xl p-7 sm:p-8 backdrop-blur transition-all duration-300 flex flex-col justify-between cursor-pointer select-none min-h-[270px] sm:min-h-[290px] ${
                  isVacant
                    ? 'border-2 border-dashed border-[#ff2d87]/40 bg-gradient-to-b from-[#ff2d87]/10 via-white/[0.02] to-transparent hover:border-[#ffd23f] hover:bg-[#ff2d87]/15 shadow-[0_8px_32px_rgba(255,45,135,0.12)] hover:-translate-y-1'
                    : 'border border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                }`}
              >
                {/* Brand Logo Display Area */}
                <div className="mb-6 flex flex-col items-center justify-center">
                  {isVacant ? (
                    <div className="w-full h-24 rounded-2xl border border-dashed border-white/20 bg-black/40 flex flex-col items-center justify-center p-3 text-center transition-colors group-hover:border-[#ffd23f]/60">
                      <PlusCircle className="h-6 w-6 text-[#ffd23f] mb-1 animate-pulse" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        [ Your Brand Logo Here ]
                      </span>
                      <span className="text-[10px] text-zinc-400 mt-0.5">
                        Vacant Sponsor Placement
                      </span>
                    </div>
                  ) : item.logo ? (
                    <div className="w-full h-24 rounded-2xl border border-white/5 bg-black/30 flex items-center justify-center p-4">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={item.logoWidth || 180}
                        height={item.logoHeight || 60}
                        className="max-h-14 max-w-[180px] object-contain filter brightness-95 contrast-105 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-24 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center">
                      <Building className="h-8 w-8 text-zinc-400" />
                    </div>
                  )}
                </div>

                {/* Title & Role & Tagline */}
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight mb-1 transition-colors ${
                      isVacant ? 'text-[#ffd23f] group-hover:text-white' : 'text-white group-hover:text-[#ff2d87]'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    {item.role}
                  </p>
                  <p className="text-xs text-zinc-300/85 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Click Reminder Indicator */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-zinc-400 group-hover:text-[#ffd23f] transition-colors flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff2d87] group-hover:bg-[#ffd23f] transition-colors" />
                    <span>Click to view details</span>
                  </span>
                  <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        
      </div>

      {/* ─────────────────── BOTTOM SHEET / DRAWER POPUP ─────────────────── */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedPartner(null)}
          />

          {/* Drawer Container (Covers half the screen, curved top corners, same glass background) */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPartner.name} details`}
            className="relative z-50 flex flex-col w-full max-h-[85vh] h-[60vh] sm:h-[58vh] min-h-[480px] rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden border-t border-x border-white/20 bg-[#0a0508]/95 backdrop-blur-2xl shadow-[0_-16px_60px_rgba(0,0,0,0.95)] animate-in slide-in-from-bottom duration-300 ease-out"
          >
            {/* Top Drag Handle Indicator */}
            <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mt-3.5 mb-1 shrink-0" />

            {/* Close Button in Top Right */}
            <button
              onClick={() => setSelectedPartner(null)}
              aria-label="Close popup"
              className="absolute top-5 right-5 sm:top-6 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 hover:scale-105 transition-all z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content Inside Popup - with hidden scrollbar */}
            <div className="overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-12 lg:px-16 py-6 text-white space-y-6">
              {/* Header inside popup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-5">
                  {selectedPartner.logo ? (
                    <div className="h-16 w-36 sm:h-20 sm:w-44 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center p-3 shrink-0">
                      <Image
                        src={selectedPartner.logo}
                        alt={selectedPartner.name}
                        width={selectedPartner.logoWidth || 180}
                        height={selectedPartner.logoHeight || 60}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border border-dashed border-[#ffd23f]/50 bg-[#ffd23f]/10 flex items-center justify-center shrink-0">
                      <Trophy className="h-8 w-8 text-[#ffd23f]" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider rounded-full px-3 py-0.5 border ${
                          selectedPartner.isVacant
                            ? 'border-[#ffd23f]/50 bg-[#ffd23f]/10 text-[#ffd23f]'
                            : 'border-[#ff2d87]/40 bg-[#ff2d87]/10 text-[#ff2d87]'
                        }`}
                      >
                        {selectedPartner.category}
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-extrabold text-white"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {selectedPartner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                      {selectedPartner.role}
                    </p>
                  </div>
                </div>

                
              </div>

              {/* Tagline / Overview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm sm:text-base font-medium text-zinc-200 leading-relaxed italic">
                  “{selectedPartner.tagline}”
                </p>
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {selectedPartner.description}
                </p>
              </div>

              {/* Deliverables / Scope Area */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd23f] mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#ff2d87]" />
                  {selectedPartner.isVacant ? 'Included Sponsorship Deliverables' : 'Partnership Contributions & Scope'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPartner.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#ff2d87] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Stats Bar (if present) */}
              {selectedPartner.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {selectedPartner.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-black/40 p-3 text-center"
                    >
                      <div className="text-lg font-bold text-white">{s.value}</div>
                      <div className="text-[11px] text-zinc-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Vacant Slot Specific CTA */}
              {selectedPartner.isVacant && (
                <div className="pt-2 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <p className="text-xs text-zinc-400 text-center sm:text-left">
                    Custom sponsorship packages and category-specific tracks can be structured to align with your corporate objectives.
                  </p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Sponsors
