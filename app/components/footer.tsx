import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { socialLinks } from '@/constants/social'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
}

const FooterLink = ({ href, children, external }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-950 transition-colors text-sm font-medium w-fit"
    >
      <span className="group-hover:text-[#ff2d87] transition-colors">
        {children}
      </span>
      <ArrowUpRight
        className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#ff2d87]"
        aria-hidden="true"
      />
    </Link>
  )
}

const PINK = '#ff2d87'

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 text-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* Brand & Wordmark Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-zinc-200">
          <Link
            href="/"
            aria-label="Yathra ’27 — home"
            className="group inline-flex items-baseline leading-none"
          >
            <span
              className="text-[36px] sm:text-[44px] text-zinc-950 font-black tracking-[-0.06em] uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Yathra
            </span>
            <span
              className="ml-1 text-lg sm:text-xl font-black"
              style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
            >
              ’27
            </span>
          </Link>

          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            A Million Dollar Journey · Hult Prize UCEK
          </span>
        </div>

        {/* Links Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12 border-b border-zinc-200">
          {/* Column 1: Hult Links */}
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff2d87] block mb-4">
              01 // Global Acceleration
            </span>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="https://www.hultprize.org/" external>
                Global Hult Prize Foundation
              </FooterLink>
              <FooterLink href="#why">
                Value Proposition & Mentorship
              </FooterLink>
              <FooterLink href="#editions">
                Past Chapters (’26 & ’25)
              </FooterLink>
              <FooterLink href="https://www.hultprize.org/hult-prize-winners/" external>
                Global Winners & Finalists
              </FooterLink>
            </div>
          </div>

          {/* Column 2: Program Navigation */}
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff2d87] block mb-4">
              02 // Summit Directory
            </span>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="#about">
                About the Initiative
              </FooterLink>
              <FooterLink href="#theme">
                17 UN SDGs Innovation Scope
              </FooterLink>
              <FooterLink href="#how-it-works">
                4-Stage Competition Timeline
              </FooterLink>
              <FooterLink href="#partners">
                Partners & Sponsorship
              </FooterLink>
            </div>
          </div>

          {/* Column 3: Location & Connect */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff2d87] block mb-4">
                03 // Venue & Host
              </span>
              <p className="text-sm font-bold text-zinc-900">
                University College of Engineering Kariavattom (UCEK)
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                University of Kerala Campus, Thiruvananthapuram
              </p>
              <p className="text-xs text-zinc-500 mt-2 font-mono">
                <strong>GRAND FINALE:</strong> Travancore Hall, Technopark
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2.5">
                Official Channels
              </span>
              <div className="flex flex-row gap-2.5 flex-wrap items-center">
                {socialLinks.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-[#ff2d87] hover:text-[#ff2d87]"
                  >
                    <item.icon size={17} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <p>© 2027 YATHRA · HULT PRIZE UCEK. ALL RIGHTS RESERVED.</p>
          <p>
            UNIVERSITY COLLEGE OF ENGINEERING KARIAVATTOM
          </p>
        </div>
      </div>
    </footer>
  )
}
