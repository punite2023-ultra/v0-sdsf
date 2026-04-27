"use client"

import Image from "next/image"

const rowOneLogos = [
  "_0027_Unilever-Logo.png",
  "_0026_Nestle-Logo.png",
  "_0011_Colgate-Logo.png",
  "_0013_Axe-Logo.png",
  "_0023_Rexona-Logo.png",
  "_0024_Nivea-Logo.png",
  "_0025_Garnier-Logo.png",
  "_0022_Loreal-Logo.png",
]

const rowTwoLogos = [
  "_0000_Palmolive-Logo.png",
  "_0001_Define-Logo.png",
  "_0002_Bambini-Logo.png",
  "_0003_Biogenic-Logo.png",
  "_0004_Har-Works-Logo.png",
  "_0005_Goli-Logo.png",
  "_0006_Equal-Logo.png",
  "_0007_Alibaba-Logo.png",
  "_0008_Bench-Logo.png",
  "_0009_Vice-Logo.png",
  "_0010_Colourette-Logo.png",
  "_0012_Sunnies_Studios_logo.png",
  "_0014_Vaseline-Logo.png",
  "_0015_Dove-Logo.png",
  "_0016_Shark-Ninja.png",
  "_0017_Extreme-Logo.png",
  "_0018_Juicy-Cologne-Logo.png",
  "_0019_Silka-Logo.png",
  "_0020_Bonita-Logo.png",
  "_0021_Palawan-Gold-Logo.png",
  "_0028_Layer-1.png",
]

function LogoItem({ src, index }: { src: string; index: number }) {
  return (
    <div className="mx-4 flex min-w-max items-center justify-center md:mx-5">
      <div className="flex h-[128px] w-[260px] items-center justify-center rounded-[26px] border border-white/10 bg-white/[0.04] px-8 py-8 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.07]">
        <div className="relative h-[72px] w-[180px]">
          <Image
            src={`/logos/${src}`}
            alt={`Brand logo ${index + 1}`}
            fill
            sizes="180px"
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
          />
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ logos }: { logos: string[] }) {
  const marqueeItems = [...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max items-center">
        {marqueeItems.map((logo, index) => (
          <LogoItem key={`${logo}-${index}`} src={logo} index={index} />
        ))}
      </div>
    </div>
  )
}

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/75" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(110,66,255,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-8">
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

        <div className="relative mt-12 space-y-7 md:mt-14">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent md:w-40" />

          <div className="rounded-[36px] border border-white/10 bg-black/20 py-8 backdrop-blur-md md:py-10">
            <MarqueeRow logos={rowOneLogos} />
            <div className="mt-7">
              <MarqueeRow logos={rowTwoLogos} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-left-to-right 85s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-left-to-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}
