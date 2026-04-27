"use client"

import Image from "next/image"

const logos = [
  "0009_Nestle-Logo.png",
  "0010_Unilever-Logo.png",
  "0000_Palmolive-Logo.png",
  "0001_Equal-Logo.png",
  "0002_Silka-Logo.png",
  "0003_Bonita-Logo.png",
  "0004_Palawan-Gold-Logo.png",
  "0005_Loreal-Logo.png",
  "0006_Rexona-Logo.png",
  "0007_Nivea-Logo.png",
  "0008_Garnier-Logo.png",
]

function LogoItem({ src, index }: { src: string; index: number }) {
  return (
    <div className="mx-6 flex min-w-max items-center justify-center md:mx-10">
      <div className="relative h-12 w-[150px] opacity-80 transition duration-300 hover:scale-105 hover:opacity-100">
        <Image
          src={`/logos/${src}`}
          alt={`Brand logo ${index + 1}`}
          fill
          className="object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.18)]"
        />
      </div>
    </div>
  )
}

export function ServicesPreview() {
  const marqueeItems = [...logos, ...logos]

  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20 lg:py-24">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* SUBTLE GLOW */}
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
                  <LogoItem key={`${logo}-${index}`} src={logo} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}
