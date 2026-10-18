import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Handshake } from 'lucide-react'

const PINK = '#ff2d87'
const YELLOW = '#ffd23f'

const PARTNERS = [
  {
    name: 'Unstop',
    role: 'Opportunity Partner',
    src: '/partners/unstop.png',
    width: 220,
    height: 70,
  },
  {
    name: 'µLearn',
    role: 'A GTech Initiative',
    src: '/partners/mulearn.webp',
    width: 200,
    height: 70,
  },
  {
    name: 'Udhyam Learning Foundation',
    role: 'Learning Partner',
    src: '/partners/udhayam.png',
    width: 200,
    height: 70,
  },
  {
    name: 'IEDC',
    role: 'Innovation & Entrepreneurship',
    src: '/partners/iedc.png',
    width: 200,
    height: 70,
  },
  {
    name: 'Legacy IEDC UCEK',
    role: 'Campus Innovation Partner',
    src: '/partners/legacy.png',
    width: 200,
    height: 70,
  },
]

const Sponsors = () => {
  // Duplicate array multiple times to ensure seamless infinite looping on all screen sizes
  const carouselItems = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

  return (
    <section
      id="partners"
      className="relative w-full bg-black py-20 overflow-hidden border-y border-white/10"
      style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle radial ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-[600px] rounded-full blur-[100px] opacity-15"
        style={{
          background: `radial-gradient(ellipse at center, ${PINK} 0%, ${YELLOW} 60%, transparent 100%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ffd23f] backdrop-blur mb-4">
          <Handshake className="h-3.5 w-3.5 text-[#ff2d87]" />
          COLLABORATORS & SUPPORTERS
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "'Outfit', 'Figtree', sans-serif" }}
        >
          Partners & <span style={{ color: PINK }}>Sponsors</span>
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-zinc-400">
          Proudly backed by leading innovation networks, startup ecosystems, and student organizations driving social impact.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-black to-transparent z-20" />

        {/* Continuous sliding track */}
        <div className="marquee-track flex items-center gap-6 sm:gap-8">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative flex flex-col items-center justify-center h-28 sm:h-32 w-56 sm:w-64 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur hover:border-[#ff2d87]/40 hover:bg-white/[0.07] transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] shrink-0 select-none"
            >
              <div className="relative w-full h-12 sm:h-14 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="max-h-full max-w-full object-contain filter brightness-95 contrast-105 transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                />
              </div>
              <span className="mt-2 text-[10px] sm:text-[11px] font-medium tracking-wider text-zinc-400 uppercase text-center transition-colors group-hover:text-white">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Partner Note */}
      <div className="mt-12 text-center relative z-10 px-6">
        <p className="text-xs sm:text-sm text-zinc-400">
          Interested in supporting student entrepreneurship and social impact?{' '}
          <Link
            href="mailto:hultprizeucek@gmail.com"
            className="font-semibold text-[#ffd23f] hover:text-[#ff2d87] underline transition-colors"
          >
            Partner with Yathra ’26
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Sponsors