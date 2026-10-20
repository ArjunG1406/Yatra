'use client'

import React from 'react'
import Image from 'next/image'
import { PlusCircle, ExternalLink, Building } from 'lucide-react'

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
    tagline: 'Connecting collegiate innovators with global hackathons, competitions, and opportunities.',
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
    tagline: 'Peer learning and industry-readiness ecosystem powered by leading GTech companies.',
  },
  
  {
    id: 'vacant-sponsor',
    name: 'Title / Innovation Sponsor',
    role: 'Your Brand Placement',
    category: 'Sponsorship Opportunity · Open',
    isVacant: true,
    tagline: 'Associate your brand with 10,000+ collegiate innovators and nationwide UN SDG social ventures.',
  },
]

const Sponsors = () => {
  return (
    <section
      id="partners"
      className="relative w-full bg-[#050204] py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-y border-white/10"
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
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

        {/* Reasonably Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PARTNERS.map((item) => {
            const isVacant = item.isVacant

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-7 sm:p-8 backdrop-blur transition-all duration-300 flex flex-col justify-between min-h-[290px] sm:min-h-[310px] ${
                  isVacant
                    ? 'border-2 border-dashed border-[#ff2d87]/40 bg-gradient-to-b from-[#ff2d87]/10 via-white/[0.02] to-transparent hover:border-[#ffd23f] hover:bg-[#ff2d87]/15 shadow-[0_8px_32px_rgba(255,45,135,0.12)]'
                    : 'border border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
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
                      isVacant ? 'text-[#ffd23f] group-hover:text-white' : 'text-white'
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    {item.role}
                  </p>
                  <p className="text-xs text-zinc-300/85 line-clamp-3 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400 font-medium">
                    {item.category}
                  </span>
                  {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#ffd23f] hover:text-[#ff2d87] transition-colors"
                    >
                      <span>Visit</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : isVacant ? (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 font-semibold text-[#ff2d87] hover:text-[#ffd23f] transition-colors"
                    >
                      <span>Inquire Slot →</span>
                    </a>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
