"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Raleway, Poppins } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"], weight: ["800"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const rowOneLogos = [
  "logo-1_0000s_0000__0022_Loreal-Logo.png",
  "logo-1_0000s_0001__0021_Palawan-Gold-Logo.png",
  "logo-1_0000s_0002__0020_Bonita-Logo.png",
  "logo-1_0000s_0003__0019_Silka-Logo.png",
  "logo-1_0000s_0004__0018_Juicy-Cologne-Logo.png",
  "logo-1_0000s_0005__0017_Extreme-Logo.png",
  "logo-1_0000s_0006__0016_Shark-Ninja.png",
  "logo-1_0000s_0007__0015_Dove-Logo.png",
  "logo-1_0000s_0008__0014_Vaseline-Logo.png",
  "logo-1_0000s_0009__0013_Axe-Logo.png",
  "logo-1_0000s_0010__0012_Sunnies_Studios_logo.png",
  "logo-1_0000s_0011__0011_Colgate-Logo.png",
]

const rowTwoLogos = [
  "logo-1_0000s_0012__0010_Colourette-Logo.png",
  "logo-1_0000s_0013__0009_Vice-Logo.png",
  "logo-1_0000s_0014__0008_Bench-Logo.png",
  "logo-1_0000s_0015__0007_Alibaba-Logo.png",
  "logo-1_0000s_0016__0006_Equal-Logo.png",
  "logo-1_0000s_0017__0005_Goli-Logo.png",
  "logo-1_0000s_0018__0004_Har-Works-Logo.png",
  "logo-1_0000s_0019__0003_Biogenic-Logo.png",
  "logo-1_0000s_0020__0002_Bambini-Logo.png",
  "logo-1_0000s_0021__0001_Define-Logo.png",
  "logo-1_0000s_0022__0000_Palmolive-Logo.png",
]

const rowThreeLogos = [
  "logo-1_0000s_0023__0027_Unilever-Logo.png",
  "logo-1_0000s_0024__0026_Nestle-Logo.png",
  "logo-1_0000s_0025__0025_Garnier-Logo.png",
  "logo-1_0000s_0026__0024_Nivea-Logo.png",
  "logo-1_0000s_0027__0023_Rexona-Logo.png",
]

function LogoItem({ src, index }: { src: string; index: number }) {
  return (
    <div className="mx-3 flex min-w-max items-center justify-center md:mx-4">
      <div className="flex h-[130px] w-[280px] items-center justify-center rounded-[28px] border border-white/10 bg-black/40 p-6 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-black/50">
        <div className="relative h-[76px] w-[205px]">
          <Image
            src={`/logos/${src}`}
            alt={`Brand logo ${index + 1}`}
            fill
            sizes="205px"
            className="object-contain"
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
    <section className="relative overflow-hidden pt-10 pb-16 text-white md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
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
            className={`${raleway.className} mt-3 text-[42px] uppercase leading-[1] tracking-[-0.03em] md:text-[60px]`}
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

          <div className="mx-auto mt-4 max-w-[820px] space-y-2">
            <p className={`${poppins.className} text-white/80`}>
              {isZh
                ? "我们与来自美妆、个人护理、快消品、时尚、科技和生活方式领域的行业领导品牌与新兴市场之星携手合作。"
                : "We collaborate with a constellation of industry leaders and rising market stars across beauty, personal care, FMCG, fashion, tech, and lifestyle."}
            </p>

            <p className={`${poppins.className} text-white/60`}>
              {isZh
                ? "从成熟品牌到新兴品牌，我们帮助品牌在关键平台上发布、扩展并持续闪耀。"
                : "From established names to emerging stars, we help brands launch, scale, and shine across the platforms that matter most."}
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black/80 to-transparent md:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black/80 to-transparent md:w-40" />

          <div className="space-y-7 rounded-[36px] border border-white/10 bg-black/25 py-8 backdrop-blur-md md:py-10">
            <MarqueeRow logos={rowOneLogos} direction="right" />
            <MarqueeRow logos={rowTwoLogos} direction="left" />
            <MarqueeRow logos={rowThreeLogos} direction="right" />
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
