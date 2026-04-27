"use client"

import Image from "next/image"

const logos = [
  "logoipsum","logoipsum","logoipsum","logoipsum","logoipsum",
  "logoipsum","logoipsum","logoipsum","logoipsum","logoipsum",
  "logoipsum","logoipsum","logoipsum","logoipsum","logoipsum",
  "logoipsum","logoipsum","logoipsum","logoipsum","logoipsum",
]

function LogoMark({ index }: { index: number }) {
  const marks = [
    <div key={index} className="flex items-center gap-2.5">
      <span className="block h-1.5 w-7 rounded-full bg-current opacity-70" />
      <span className="block h-1.5 w-7 rounded-full bg-current opacity-35" />
    </div>,

    <div key={index} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current opacity-60">
      <div className="h-3 w-3 rounded-full border-2 border-current" />
    </div>,

    <div key={index} className="relative h-10 w-10 opacity-60">
      <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-current" />
      <span className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-current" />
    </div>,

    <div key={index} className="flex h-10 w-10 items-center justify-center opacity-60">
      <div className="h-0 w-0 border-b-[18px] border-l-[12px] border-r-[12px] border-b-current border-l-transparent border-r-transparent" />
    </div>,

    <div key={index} className="grid h-10 w-10 grid-cols-2 gap-1 opacity-60">
      <span className="rounded-sm bg-current" />
      <span className="rounded-sm bg-current opacity-70" />
      <span className="rounded-sm bg-current opacity-50" />
      <span className="rounded-sm bg-current opacity-85" />
    </div>,
  ]

  return marks[index % marks.length]
}

function LogoItem({ label, index }: { label: string; index: number }) {
  return (
    <div className="mx-6 flex min-w-max items-center gap-3 text-white/80 md:mx-8">
      <LogoMark index={index} />
      <span className="text-[24px] font-black uppercase tracking-[-0.05em] md:text-[30px]">
        {label}
      </span>
    </div>
  )
}

export function ServicesPreview() {
  const marqueeItems = [...logos, ...logos]

  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20 lg:py-24">
      
      {/* ✅ BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ✅ DARK OVERLAY (important for readability) */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(110,66,255,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 md:text-xs">
            Trusted by Brands
          </div>

          <h2 className="mt-5 text-[40px] font-black leading-[0.95] tracking-[-0.05em] sm:text-[52px] md:text-[64px] lg:text-[78px]">
            Trusted by Leading Organizations Worldwide,
            <br className="hidden md:block" />
            Building a Constellation of High-Performing Brands.
          </h2>

          <div className="mx-auto mt-5 max-w-[820px] space-y-2">
            <p className="text-[15px] leading-7 text-white/80 md:text-[17px]">
              We collaborate with a constellation of industry leaders and rising
              market stars across beauty, personal care, FMCG, fashion, tech,
              and lifestyle.
            </p>

            <p className="text-[13.5px] leading-6 text-white/60 md:text-[15px]">
              From established names to emerging stars, we help brands launch,
              scale, and shine across the platforms that matter most.
            </p>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-10 md:mt-12">
          
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-28" />

          <div className="rounded-[28px] border border-white/10 bg-white/5 py-5 backdrop-blur-md md:py-6">
            <div className="overflow-hidden">
              <div className="marquee-track flex w-max items-center">
                {marqueeItems.map((logo, index) => (
                  <LogoItem key={`${logo}-${index}`} label={logo} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 42s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  )
}
