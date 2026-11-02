'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlusCircle, ArrowRight } from 'lucide-react'

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
            Partners & Sponsors
          </span>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Official Partners and Sponsors
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-500">
            Backed by national innovation networks, corporate leaders, and student incubation ecosystems.
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
                alt="Unstop Igniters Club"
                width={170}
                height={50}
                className="max-h-12 w-auto object-contain"
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
                className="w-full h-24 rounded-xl border border-dashed border-zinc-200 hover:border-pink-300 bg-zinc-50/50 hover:bg-pink-50/30 flex flex-col items-center justify-center p-3 transition-all group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-[#ff2d87] transition-colors">
                  <PlusCircle className="h-3.5 w-3.5 text-[#ff2d87]" />
                  <span>Sponsorship Open</span>
                </div>
                <span className="text-[10px] text-zinc-500 mt-0.5">
                  Partner with Yathra ’27 →
                </span>
              </a>
            </div>
          </div>
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
