"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Network,
  Play,
  Rocket,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"

const aboutSlides = [
  {
    eyebrowEn: "WHO WE ARE",
    eyebrowZh: "我们是谁",
    titleEn: "A Digital Growth Partner for Modern Brands.",
    titleZh: "为现代品牌打造数字增长伙伴。",
    bodyEn:
      "Star Digital Solutions brings together content, commerce, creators, and strategy to help brands move with clarity, speed, and measurable growth.",
    bodyZh:
      "Star Digital Solutions 整合内容、商业、达人与策略，帮助品牌实现更清晰、更快速、更可衡量的增长。",
    ctaEn: "View Our Story",
    ctaZh: "查看我们的故事",
    href: "/about/our-story",
  },
  {
    eyebrowEn: "OUR SYSTEM",
    eyebrowZh: "我们的系统",
    titleEn: "Where Content, Commerce, and Creators Move Together.",
    titleZh: "让内容、商业与达人协同发力。",
    bodyEn:
      "We build connected growth systems — from creative direction and campaign execution to e-commerce support, affiliate activation, and performance learning.",
    bodyZh:
      "我们打造连接式增长系统，从创意方向、活动执行，到电商支持、联盟达人激活与数据优化。",
    ctaEn: "Explore Services",
    ctaZh: "探索服务",
    href: "/services",
  },
  {
    eyebrowEn: "BUILT TO SCALE",
    eyebrowZh: "为规模增长而生",
    titleEn: "Designed for Launches, Campaigns, and Long-Term Momentum.",
    titleZh: "为品牌发布、营销活动与长期增长而设计。",
    bodyEn:
      "Our approach helps brands launch stronger, scale faster, and stay visible across the platforms that matter most.",
    bodyZh:
      "我们帮助品牌更强启动、更快扩张，并在关键平台持续保持可见度。",
    ctaEn: "Start a Project",
    ctaZh: "开始项目",
    href: "/contact",
  },
]

const serviceSetup = [
  {
    number: "01",
    titleEn: "Brand Strategy",
    titleZh: "品牌策略",
    labelEn: "POSITIONING",
    labelZh: "定位",
    Icon: Sparkles,
  },
  {
    number: "02",
    titleEn: "Creator Network",
    titleZh: "达人网络",
    labelEn: "AFFILIATE + MCN",
    labelZh: "联盟 + MCN",
    Icon: Users,
  },
  {
    number: "03",
    titleEn: "Commerce Support",
    titleZh: "电商支持",
    labelEn: "PLATFORM GROWTH",
    labelZh: "平台增长",
    Icon: ShoppingBag,
  },
  {
    number: "04",
    titleEn: "Performance",
    titleZh: "效果优化",
    labelEn: "DATA + RESULTS",
    labelZh: "数据 + 结果",
    Icon: BarChart3,
  },
]

function GlowObject({ active }: { active: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className={`absolute h-[420px] w-[420px] rounded-[45%_55%_52%_48%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,126,246,0.76)_24%,rgba(77,72,255,0.82)_56%,rgba(11,2,32,0)_72%)] opacity-90 blur-[1px] transition-all duration-700 ease-out md:h-[620px] md:w-[620px] ${
          active === 0
            ? "translate-x-[20%] translate-y-[4%] rotate-12 scale-100"
            : active === 1
            ? "translate-x-[32%] -translate-y-[3%] rotate-[34deg] scale-110"
            : "translate-x-[15%] translate-y-[10%] rotate-[-18deg] scale-95"
        }`}
      />
      <div className="absolute h-[300px] w-[300px] rounded-full bg-fuchsia-500/30 blur-[80px] md:h-[520px] md:w-[520px]" />
      <div className="absolute right-[12%] top-[20%] h-32 w-32 rounded-full bg-blue-500/35 blur-[60px]" />
    </div>
  )
}

export default function AboutPage() {
  const { language } = useLanguage()
  const [active, setActive] = useState(0)
  const slide = aboutSlides[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % aboutSlides.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [])

  const goNext = () => setActive((current) => (current + 1) % aboutSlides.length)
  const goPrev = () =>
    setActive((current) =>
      current === 0 ? aboutSlides.length - 1 : current - 1,
    )

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#16072f] text-white">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(119,64,255,0.35),rgba(22,7,47,0.72)_38%,#12051f_82%)]" />
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:140px_140px]" />

        <section className="relative px-4 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <div className="relative min-h-[680px] overflow-hidden rounded-[18px] border border-violet-400/25 bg-[#25104a]/80 shadow-[0_35px_120px_rgba(0,0,0,0.45)] ring-8 ring-violet-500/10">
              <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:155px_100%]" />
              <GlowObject active={active} />

              <div className="relative z-10 flex min-h-[680px] flex-col justify-between p-6 sm:p-10 lg:p-16">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-sm font-bold tracking-tight text-white">
                    SDS
                  </Link>
                  <div className="text-xs font-semibold tracking-[0.28em] text-white/70">
                    ABOUT US
                  </div>
                </div>

                <div className="grid items-end gap-10 lg:grid-cols-[0.2fr_1fr_0.22fr]">
                  <div className="hidden gap-3 lg:flex">
                    <button
                      onClick={goPrev}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:border-pink-400 hover:text-pink-300"
                      aria-label="Previous slide"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={goNext}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20"
                      aria-label="Next slide"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div
                    key={active}
                    className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.54em] text-white/75">
                      {language === "zh" ? slide.eyebrowZh : slide.eyebrowEn}
                    </p>
                    <h1 className="mt-8 max-w-[13ch] text-5xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
                      {language === "zh" ? slide.titleZh : slide.titleEn}
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                      {language === "zh" ? slide.bodyZh : slide.bodyEn}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <Link
                        href={slide.href}
                        className="inline-flex items-center gap-3 border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-pink-500/20"
                      >
                        {language === "zh" ? slide.ctaZh : slide.ctaEn}
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-end justify-between lg:block lg:text-right">
                    <div>
                      <div className="text-4xl font-black text-white">
                        {String(active + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-xs font-bold text-pink-400">
                        / {String(aboutSlides.length).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="mt-4 h-0.5 w-12 bg-white lg:ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-300">
                  {language === "zh" ? "服务设置" : "SERVICES SETUP"}
                </p>
                <h2 className="mt-4 max-w-[15ch] text-3xl font-black leading-tight text-white md:text-5xl">
                  {language === "zh"
                    ? "About 页面中的增长系统预览。"
                    : "A preview of the growth system behind our services."}
                </h2>
              </div>

              <div className="hidden gap-3 md:flex">
                <button
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:border-pink-400 hover:text-pink-300"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20"
                  aria-label="Next slide"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-violet-400/15 bg-[#1c0b38]/90 shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
              <div className="grid md:grid-cols-2 xl:grid-cols-4">
                {serviceSetup.map((item, index) => {
                  const Icon = item.Icon
                  return (
                    <Link
                      key={item.number}
                      href="/services"
                      className="group relative min-h-[360px] border-b border-r border-white/10 p-9 transition duration-500 hover:bg-violet-500/10 md:border-b-0"
                    >
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.18),transparent_58%)]" />
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <div className="text-[10px] font-bold tracking-[0.38em] text-white/85">
                            {item.number}
                          </div>
                          <div className="mt-8 h-0.5 w-5 bg-pink-400" />
                        </div>

                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-pink-300 transition duration-500 group-hover:scale-110 group-hover:border-pink-400/40">
                          <Icon className="h-11 w-11" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-black text-white">
                            {language === "zh" ? item.titleZh : item.titleEn}
                          </h3>
                          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400">
                            {language === "zh" ? item.labelZh : item.labelEn}
                          </p>
                        </div>

                        <div className="text-white/70 transition group-hover:translate-x-1 group-hover:text-pink-300">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[18px] border border-violet-400/15 bg-[#210d43]/80 p-8 text-center sm:p-12 lg:p-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 text-pink-300">
              <Rocket className="h-7 w-7" />
            </div>
            <h2 className="mx-auto mt-8 max-w-[16ch] text-4xl font-black tracking-tight text-white md:text-6xl">
              {language === "zh" ? "准备打造下一阶段增长？" : "Ready to build your next stage of growth?"}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              {language === "zh"
                ? "从品牌策略到内容、电商、达人与效果优化，我们可以帮助你搭建完整增长系统。"
                : "From brand strategy to content, commerce, creators, and performance, we can help you set up a complete growth system."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.03]"
              >
                {language === "zh" ? "查看服务" : "View Services"}
                <Network className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.06]"
              >
                {language === "zh" ? "联系我们" : "Contact Us"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
