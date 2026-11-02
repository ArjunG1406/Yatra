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

        {/* ─── EXPLORE PARTNER & SPONSOR BENEFITS CALLOUT BUTTON ─── */}
        <div className="mt-14 pt-10 border-t border-zinc-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-50/80 p-6 sm:p-8 rounded-2xl border border-zinc-200">
          <div className="text-center sm:text-left">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff2d87] block mb-1">
              Why Partner With Us?
            </span>
            <h3
              className="text-lg sm:text-xl font-black text-zinc-950 uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Partner & Sponsor Benefits
            </h3>
            <p className="mt-1 text-xs text-zinc-500 max-w-md leading-relaxed">
              Discover sponsorship tiers, brand visibility perks, campus talent recruitment access, and ROI deliverables for your organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/partners"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#ff2d87] transition-all shadow-sm hover:shadow-md group"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Explore Benefits & Tiers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
