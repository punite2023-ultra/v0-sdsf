"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

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

const logoSizes: Record<string, string> = {
  "_0027_Unilever-Logo.png": "h-[92px] w-[120px]",
  "_0026_Nestle-Logo.png": "h-[86px] w-[190px]",
  "_0011_Colgate-Logo.png": "h-[72px] w-[210px]",
  "_0013_Axe-Logo.png": "h-[84px] w-[155px]",
  "_0023_Rexona-Logo.png": "h-[86px] w-[190px]",
  "_0024_Nivea-Logo.png": "h-[92px] w-[150px]",
  "_0025_Garnier-Logo.png": "h-[90px] w-[180px]",
  "_0022_Loreal-Logo.png": "h-[76px] w-[220px]",

  "_0000_Palmolive-Logo.png": "h-[78px] w-[210px]",
  "_0001_Define-Logo.png": "h-[84px] w-[190px]",
  "_0002_Bambini-Logo.png": "h-[90px] w-[175px]",
  "_0003_Biogenic-Logo.png": "h-[88px] w-[185px]",
  "_0004_Har-Works-Logo.png": "h-[86px] w-[190px]",
  "_0005_Goli-Logo.png": "h-[86px] w-[150px]",
  "_0006_Equal-Logo.png": "h-[82px] w-[170px]",
  "_0007_Alibaba-Logo.png": "h-[76px] w-[215px]",
  "_0008_Bench-Logo.png": "h-[74px] w-[200px]",
  "_0009_Vice-Logo.png": "h-[86px] w-[165px]",
  "_0010_Colourette-Logo.png": "h-[78px] w-[220px]",
  "_0012_Sunnies_Studios_logo.png": "h-[72px] w-[230px]",
  "_0014_Vaseline-Logo.png": "h-[88px] w-[180px]",
  "_0015_Dove-Logo.png": "h-[92px] w-[160px]",
  "_0016_Shark-Ninja.png": "h-[78px] w-[220px]",
  "_0017_Extreme-Logo.png": "h-[86px] w-[190px]",
  "_0018_Juicy-Cologne-Logo.png": "h-[90px] w-[185px]",
  "_0019_Silka-Logo.png": "h-[86px] w-[170px]",
  "_0020_Bonita-Logo.png": "h-[90px] w-[170px]",
  "_0021_Palawan-Gold-Logo.png": "h-[92px] w-[185px]",
  "_0028_Layer-1.png": "h-[90px] w-[190px]",
}

function LogoItem({ src, index }: { src: string; index: number }) {
  return (
    <div className="mx-3 flex min-w-max items-center justify-center md:mx-4">
      <div className="flex h-[132px] w-[270px] items-center justify-center rounded-[26px] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.07]">
        <div className={`relative ${logoSizes[src] || "h-[84px] w-[190px]"}`}>
          <Image
            src={`/logos/${src}`}
            alt={`Brand logo ${index + 1}`}
            fill
            sizes="220px"
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
          />
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  logos,
  direction = "left",
}: {
  logos: string[]
  direction?: "left" | "right"
}) {
  const marqueeItems = [...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center ${
          direction === "right" ? "marquee-right" : "marquee-left"
        }`}
      >
        {marqueeItems.map((logo, index) => (
          <LogoItem key={`${logo}-${index}`} src={logo} index={index} />
        ))}
      </div>
    </div>
  )
}

export function ServicesPreview() {
  const { language } = useLanguage()
  const isZh = language === "zh"

  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Logo BG (1).png"
          alt="Logo background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(110,66,255,0.18),transparent_42%)]" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 md:text-xs">
            {isZh ? "品牌信赖之选" : "Trusted by Brands"}
          </div>

          <h2 className="mt-5 text-[40px] font-black leading-[0.95] tracking-[-0.05em] sm:text-[52px] md:text-[64px] lg:text-[78px]">
            {isZh ? (
              <>
                深受全球领先组织信赖，
                <br className="hidden md:block" />
                打造高表现品牌星群。
              </>
            ) : (
              <>
                Trusted by Leading Organizations Worldwide,
                <br className="hidden md:block" />
                Building a Constellation of High-Performing Brands.
              </>
            )}
          </h2>

          <div className="mx-auto mt-5 max-w-[820px] space-y-2">
            <p className="text-[15px] leading-7 text-white/80 md:text-[17px]">
              {isZh
                ? "我们与来自美妆、个人护理、快消品、时尚、科技和生活方式领域的行业领导品牌与新兴市场之星携手合作。"
                : "We collaborate with a constellation of industry leaders and rising market stars across beauty, personal care, FMCG, fashion, tech, and lifestyle."}
            </p>

            <p className="text-[13.5px] leading-6 text-white/60 md:text-[15px]">
              {isZh
                ? "从成熟品牌到新兴品牌，我们帮助品牌在关键平台上发布、扩展并持续闪耀。"
                : "From established names to emerging stars, we help brands launch, scale, and shine across the platforms that matter most."}
            </p>
          </div>
        </div>

        <div className="relative mt-12 space-y-7 md:mt-14">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent md:w-40" />

          <div className="rounded-[36px] border border-white/10 bg-black/25 py-8 backdrop-blur-md md:py-10">
            <MarqueeRow logos={rowOneLogos} direction="right" />

            <div className="mt-7">
              <MarqueeRow logos={rowTwoLogos} direction="left" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-left {
          animation: marquee-left 95s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 95s linear infinite;
        }

        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-right {
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
