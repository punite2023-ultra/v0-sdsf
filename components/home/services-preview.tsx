"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Raleway, Poppins } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

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
    <div className="mx-3 flex min-w-max items-center justify-center md:mx-4">
      <div className="flex h-[140px] w-[300px] items-center justify-center rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-black/50">
        <div className="relative h-[70px] w-[180px]">
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

function MarqueeRow({
  logos,
  direction = "left",
}: {
  logos: string[]
  direction?: "left" | "right"
}) {
  const marqueeItems = [...logos, ...logos, ...logos]

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
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-8">
        <div className="mx-auto max-w-[1080px] text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 md:text-xs">
            <span className={raleway.className}>
              {isZh ? "品牌信赖之选" : "TRUSTED BY BRANDS"}
            </span>
          </div>

          <h2
            className={`${raleway.className} mt-5 text-[42px] uppercase leading-[1] tracking-[-0.03em] md:text-[60px]`}
          >
            {isZh ? (
              <>
                深受全球领先组织信赖，
                <br className="hidden md:block" />
                打造高表现品牌星群。
              </>
            ) : (
              <>
                TRUSTED BY LEADING ORGANIZATIONS WORLDWIDE,
                <br className="hidden md:block" />
                BUILDING A CONSTELLATION OF HIGH-PERFORMING BRANDS.
              </>
            )}
          </h2>

          <div className="mx-auto mt-5 max-w-[820px] space-y-2">
            <p
              className={`${poppins.className} text-[15px] leading-[1.7] text-white/80 md:text-[16px]`}
            >
              {isZh
                ? "我们与来自美妆、个人护理、快消品、时尚、科技和生活方式领域的行业领导品牌与新兴市场之星携手合作。"
                : "We collaborate with a constellation of industry leaders and rising market stars across beauty, personal care, FMCG, fashion, tech, and lifestyle."}
            </p>

            <p
              className={`${poppins.className} text-[13.5px] leading-[1.7] text-white/60 md:text-[15px]`}
            >
              {isZh
                ? "从成熟品牌到新兴品牌，我们帮助品牌在关键平台上发布、扩展并持续闪耀。"
                : "From established names to emerging stars, we help brands launch, scale, and shine across the platforms that matter most."}
            </p>
          </div>
        </div>

        <div className="relative mt-12 md:mt-14">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black/80 to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black/80 to-transparent md:w-40" />

          <div className="space-y-7 rounded-[36px] border border-white/10 bg-black/25 py-8 backdrop-blur-md md:py-10">
            <MarqueeRow logos={rowOneLogos} direction="right" />
            <MarqueeRow logos={rowTwoLogos} direction="left" />
          </div>
        </div>
      </div>

      <style jsx global>{`
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
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}
