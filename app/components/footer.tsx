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
      className="group inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium tracking-wide w-fit"
    >
      <span className="group-hover:text-primary transition-colors duration-200">
        {children}
      </span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-primary"
        aria-hidden="true"
      />
    </Link>
  )
}

const PINK = '#ff2d87'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050204] border-t border-white/10 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-14 pb-8">
        {/* Brand & Wordmark */}
        <div className="mb-10">
          <Link
            href="/"
            aria-label="Yathra ’26 — home"
            className="group inline-flex flex-col items-center leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd23f]"
          >
            <span className="inline-flex items-start">
              <span
                className="text-[30px] text-white sm:text-[38px] lg:text-[40px]"
                style={{
                  fontFamily: "'Outfit', 'Figtree', sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.85,
                }}
              >
                yathra
              </span>
              <span
                className="ml-[3px] flex flex-col text-[9px] font-extrabold leading-[0.88] sm:text-[11px]"
                style={{ color: PINK, fontFamily: "'Outfit', sans-serif" }}
              >
                <span>2</span>
                <span>7</span>
              </span>
            </span>
            <span
              className="mt-2 whitespace-nowrap text-[6px] font-medium uppercase tracking-[0.34em]"
              style={{ color: PINK }}
            >
              A Million Dollar Journey
            </span>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Hult Links */}
          <div>
            <h3 className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
              Hult Prize
            </h3>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="https://www.hultprize.org/" external>
                HULT PRIZE
              </FooterLink>
              <FooterLink href="/#why">
                WHY HULT
              </FooterLink>
              <FooterLink href="/#stages">
                YATHRA ’26
              </FooterLink>
              <FooterLink href="https://www.hultprize.org/hult-prize-winners/" external>
                WINNERS & FINALISTS
              </FooterLink>
            </div>
          </div>

          {/* Column 2: Event & Community Links */}
          <div>
            <h3 className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/#execom">
                EXECOM
              </FooterLink>
              <FooterLink href="/#events">
                EVENTS
              </FooterLink>
              <FooterLink href="https://uck.ac.in/" external>
                UCEK
              </FooterLink>
              <FooterLink href="https://www.hultprize.org/code-of-conduct/" external>
                CODE OF CONDUCT
              </FooterLink>
            </div>
          </div>

          {/* Column 3: Institution & Social Contacts */}
          <div id="contact" className="flex flex-col justify-between">
            <div>
              <h3 className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
                Location & Connect
              </h3>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://uck.ac.in/"
                className="group block"
              >
                <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200">
                  UNIVERSITY COLLEGE OF ENGINEERING
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  University of Kerala, Kariavattom Campus
                </p>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-3">
                Follow Us
              </span>
              <div className="flex flex-row gap-3 flex-wrap items-center">
                {socialLinks.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <item.icon size={19} className="transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Yathra · Hult Prize UCEK. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer