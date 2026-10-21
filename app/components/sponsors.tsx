'use client'

import React from 'react'
import Image from 'next/image'
import { PlusCircle } from 'lucide-react'

export default function Sponsors() {
  return (
    <section
      id="partners"
      className="w-full bg-white text-zinc-950 py-16 px-5 sm:px-8 border-b border-zinc-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Minimal Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
            Partners & Ecosystem
          </span>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Official Summit Partners
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-500">
            Backed by national innovation networks and student incubation ecosystems.
          </p>
        </div>

        {/* ─── TIERED PARTNER CARDS (MINIMAL) ─── */}
        <div className="flex flex-col items-center gap-8">
          {/* Tier 1: Platform Partner */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
              Official Platform Partner
            </span>
            <div className="w-full h-24 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center p-4 hover:border-zinc-300 transition-all">
              <Image
                src="/partners/unstop.png"
                alt="Unstop"
                width={170}
                height={50}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Tier 2: Ecosystem & Skilling Partner */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
              Ecosystem & Skilling Partner
            </span>
            <div className="w-full h-24 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center p-4 hover:border-zinc-300 transition-all">
              <Image
                src="/partners/mulearn.webp"
                alt="µLearn GTech"
                width={160}
                height={50}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Tier 3: Innovation & Campus Incubation Partners */}
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
                Innovation Partner
              </span>
              <div className="w-full h-24 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center p-4 hover:border-zinc-300 transition-all">
                <Image
                  src="/partners/udhayam.png"
                  alt="Udhyam"
                  width={140}
                  height={45}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
                Campus Incubation Partner
              </span>
              <div className="w-full h-24 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center p-4 hover:border-zinc-300 transition-all">
                <Image
                  src="/partners/iedc.png"
                  alt="IEDC UCEK"
                  width={140}
                  height={45}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Tier 4: Network Partner & Open Sponsorship */}
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
                Alumni & Network Partner
              </span>
              <div className="w-full h-24 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center justify-center p-4 hover:border-zinc-300 transition-all">
                <Image
                  src="/partners/legacy.png"
                  alt="Legacy IEDC"
                  width={140}
                  height={45}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 text-center">
                Title / Corporate Sponsor
              </span>
              <a
                href="mailto:hultprizeucek@gmail.com"
                className="w-full h-24 rounded-xl border border-dashed border-pink-300 bg-pink-50/20 flex flex-col items-center justify-center p-3 hover:border-pink-400 transition-all group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-[#ff2d87] transition-colors">
                  <PlusCircle className="h-3.5 w-3.5 text-[#ff2d87]" />
                  <span>Sponsorship Open</span>
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5">
                  Partner with Yathra ’27 →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
