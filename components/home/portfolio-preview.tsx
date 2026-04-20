"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

type ValueItem = {
  id: number
  labelEn: string
  labelZh: string
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  image: string
  href: string
  barsEn: { label: string; value: number }[]
  barsZh: { label: string; value: number }[]
}

const valueItems: ValueItem[] = [
  {
    id: 1,
    labelEn: "Our Value",
    labelZh: "我们的价值",
    titleEn: "Experience the magic of strategic digital growth.",
    titleZh: "体验战略数字增长带来的强大价值。",
    descriptionEn:
      "We combine strategy, design, and execution to help brands scale with clarity, stronger positioning, and measurable performance across digital channels.",
    descriptionZh:
      "我们将策略、设计与执行结合，帮助品牌以更清晰的方向、更强的定位和可衡量的成果实现数字化增长。",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1400&auto=format&fit=crop",
    href: "/portfolio",
    barsEn: [
      { label: "Strategy & Branding", value: 95 },
      { label: "Web & App Solutions", value: 88 },
      { label: "Performance Marketing", value: 92 },
      { label: "Content Development", value: 85 },
    ],
    barsZh: [
      { label: "策略与品牌", value: 95 },
      { label: "网站与应用方案", value: 88 },
      { label: "效果营销", value: 92 },
      { label: "内容开发", value: 85 },
    ],
  },
  {
    id: 2,
    labelEn: "Our Value",
    labelZh: "我们的价值",
    titleEn: "Designing experiences that move brands forward.",
    titleZh: "打造推动品牌前进的数字体验。",
    descriptionEn:
      "From visuals to systems, we build experiences that feel premium, communicate clearly, and convert attention into meaningful customer action.",
    descriptionZh:
      "从视觉到系统，我们打造高质感的数字体验，让品牌表达更清晰，并将关注转化为实际行动。",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    href: "/portfolio",
    barsEn: [
      { label: "Creative Direction", value: 90 },
      { label: "Visual Communication", value: 94 },
      { label: "Brand Consistency", value: 89 },
      { label: "User Experience", value: 91 },
    ],
    barsZh: [
      { label: "创意方向", value: 90 },
      { label: "视觉传达", value: 94 },
      { label: "品牌一致性", value: 89 },
      { label: "用户体验", value: 91 },
    ],
  },
  {
    id: 3,
    labelEn: "Our Value",
    labelZh: "我们的价值",
    titleEn: "Building systems that turn ideas into real results.",
    titleZh: "构建把创意变成成果的增长系统。",
    descriptionEn:
      "We help businesses move faster with structured execution, smarter content, and digital systems built for long-term momentum.",
    descriptionZh:
      "我们通过结构化执行、更聪明的内容策略和面向长期增长的数字系统，帮助企业更快推进业务。",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    href: "/portfolio",
    barsEn: [
      { label: "Execution Speed", value: 93 },
      { label: "Growth Planning", value: 87 },
      { label: "Campaign Optimization", value: 90 },
      { label: "Business Support", value: 84 },
    ],
    barsZh: [
      { label: "执行速度", value: 93 },
      { label: "增长规划", value: 87 },
      { label: "活动优化", value: 90 },
      { label: "业务支持", value: 84 },
    ],
  },
]

function AnimatedBar({
  label,
  value,
  activeKey,
  delay = 0,
}: {
  label: string
  value: number
  activeKey: number
  delay?: number
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)

    const timeout = setTimeout(() => {
      let frame = 0
      const duration = 900
      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setProgress(value * eased)

        if (t < 1) {
          frame = requestAnimationFrame(tick)
        }
      }

      frame = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(frame)
    }, delay)

    return () => clearTimeout(timeout)
  }, [activeKey, value, delay])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-white/90">{label}</p>
        <span className="text-sm font-semibold text-white">{Math.round(progress)}%</span>
      </div>

      <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#ec4899_55%,#f59e0b_100%)] transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export function PortfolioPreview() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const activeItem = valueItems[activeIndex]

  const currentBars = useMemo(() => {
    return language === "en" ? activeItem.barsEn : activeItem.barsZh
  }, [activeItem, language])

  const activeLabel = language === "en" ? activeItem.labelEn : activeItem.labelZh
  const activeTitle = language === "en" ? activeItem.titleEn : activeItem.titleZh
  const activeDescription =
    language === "en" ? activeItem.descriptionEn : activeItem.descriptionZh

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueItems.length)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#070015] py-20 lg:py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <ScrollReveal>
            <div className="max-w-[620px]">
              <p
                className={`${raleway.className} mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]`}
              >
                {activeLabel}
              </p>

              <div key={`text-${activeItem.id}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2
                  className={`${raleway.className} max-w-[560px] text-3xl font-extrabold leading-tight md:text-4xl lg:text-[46px] lg:leading-[1.05]`}
                >
                  {activeTitle}
                </h2>

                <p className="mt-5 max-w-[560px] text-base leading-8 text-white/65 md:text-lg">
                  {activeDescription}
                </p>
              </div>

              <div className="mt-8 space-y-5">
                {currentBars.map((bar, index) => (
                  <AnimatedBar
                    key={`${activeItem.id}-${bar.label}`}
                    label={bar.label}
                    value={bar.value}
                    activeKey={activeItem.id}
                    delay={index * 120}
                  />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {valueItems.map((item, index) => {
                  const tabTitle = language === "en" ? item.titleEn : item.titleZh

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-white text-black"
                          : "bg-white/8 text-white/60 hover:bg-white/14 hover:text-white"
                      }`}
                    >
                      {tabTitle.split(" ").slice(0, 2).join(" ")}
                    </button>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  {language === "en" ? "Explore More" : "了解更多"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

                <div
                  key={`image-${activeItem.id}`}
                  className="relative h-[360px] overflow-hidden rounded-[22px] md:h-[420px] lg:h-[500px] animate-in fade-in zoom-in-[0.98] duration-500"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeTitle}
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,0,21,0.05)_0%,rgba(7,0,21,0.18)_100%)]" />
                </div>
              </div>

              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#a855f7]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#ec4899]/15 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
