'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Same official partner assets from the yatra26 folder
const HOMEPAGE_PARTNERS = [
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
]

export default function Sponsors() {
  return (
    <section
      id="partners"
      className="w-full bg-white text-zinc-950 py-16 sm:py-24 px-5 sm:px-8 border-b border-zinc-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Minimal Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-2">
            Partners & Ecosystem
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Official Partners & Sponsors
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600">
            Backed by national innovation networks, corporate leaders, and student incubation ecosystems.
          </p>
        </div>

        {/* Clean Logo Grid without boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
          {HOMEPAGE_PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="h-24 sm:h-28 w-full flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-108"
              title={partner.name}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={240}
                height={100}
                className={`${
                  partner.type === 'square'
                    ? 'max-h-14 sm:max-h-16 max-w-[110px] sm:max-w-[130px]'
                    : partner.type === 'compact'
                    ? 'max-h-12 sm:max-h-14 max-w-[130px] sm:max-w-[150px]'
                    : partner.type === 'xwide'
                    ? 'max-h-8 sm:max-h-9 max-w-[170px] sm:max-w-[210px]'
                    : 'max-h-10 sm:max-h-12 max-w-[150px] sm:max-w-[180px]'
                } w-auto h-auto object-contain transition-transform`}
              />
            </div>
          ))}
        </div>

        {/* ─── VIEW ALL SPONSORS & BENEFITS BUTTON ─── */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/partners"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-950 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#ff2d87] transition-all shadow-sm hover:shadow-md group"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span>View All Sponsors & Benefits</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
