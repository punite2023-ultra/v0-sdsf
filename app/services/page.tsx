"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Star,
  Users,
  Video,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const serviceCards = [
  {
    titleEn: "Social Media Marketing",
    titleZh: "社交媒体营销",
    descEn:
      "We build platform-first campaigns that grow awareness, sharpen positioning, and turn audience attention into measurable momentum.",
    descZh:
      "我们打造以平台为核心的营销活动，提升品牌认知、强化定位，并将流量转化为可衡量的增长。",
    icon: Megaphone,
  },
  {
    titleEn: "Content Creation & Branding",
    titleZh: "内容创作与品牌建设",
    descEn:
      "From creative concepts to branded visual systems, we craft content that feels clear, premium, and built to perform.",
    descZh:
      "从创意概念到品牌视觉系统，我们打造清晰、高级且具转化力的内容表达。",
    icon: PenTool,
  },
  {
    titleEn: "E-Commerce Strategy & Management",
    titleZh: "电商策略与管理",
    descEn:
      "We help brands optimize storefronts, sales moments, campaign planning, and day-to-day execution across fast-moving commerce platforms.",
    descZh:
      "我们帮助品牌优化店铺、销售节点、活动规划与日常执行，提升电商平台整体表现。",
    icon: ShoppingBag,
  },
  {
    titleEn: "Influencer & Affiliate Marketing",
    titleZh: "达人与联盟营销",
    descEn:
      "We connect brands with the right creators, affiliates, and content ecosystems to drive visibility, trust, and conversion.",
    descZh:
      "我们帮助品牌连接合适的达人、联盟伙伴与内容生态，提升曝光、信任与转化。",
    icon: Users,
  },
  {
    titleEn: "Live Streaming Services",
    titleZh: "直播服务",
    descEn:
      "From live selling support to stream-ready visuals and campaign planning, we create live commerce systems designed to convert.",
    descZh:
      "从直播带货支持到直播视觉与活动策划，我们打造以转化为目标的直播增长体系。",
    icon: Video,
  },
  {
    titleEn: "Website Design & Development",
    titleZh: "网站设计与开发",
    descEn:
      "We design and build fast, modern, conversion-focused websites that support stronger brand storytelling and better business results.",
    descZh:
      "我们设计并开发现代、快速、以转化为导向的网站，提升品牌表达与商业效果。",
    icon: Globe,
  },
]

const introPointsLeft = [
  "Platform-first strategy and campaign direction",
  "Premium creative built for digital performance",
  "Cross-channel execution for modern brands",
  "Content systems that scale with growth",
]

const introPointsRight = [
  "E-commerce and creator ecosystem support",
  "Fast, collaborative, and transparent workflow",
  "Brand-led execution across touchpoints",
  "Built for measurable business outcomes",
]

const progressItems = [
  {
    labelEn: "Brand & Creative Execution",
    labelZh: "品牌与创意执行",
    value: 92,
  },
  {
    labelEn: "E-Commerce Growth Support",
    labelZh: "电商增长支持",
    value: 90,
  },
  {
    labelEn: "Creator & Affiliate Campaigns",
    labelZh: "达人与联盟活动",
    value: 88,
  },
  {
    labelEn: "Strategy & Performance Optimization",
    labelZh: "策略与效果优化",
    value: 91,
  },
]

const stats = [
  {
    value: "100+",
    labelEn: "TSP / MCN BRANDS",
    labelZh: "合作品牌",
    noteEn: "From Beauty / FMCG / Retail / Lifestyle",
    noteZh: "涵盖美妆 / 快消 / 零售 / 生活方式",
  },
  {
    value: "Content",
    labelEn: "COMMERCE + CREATOR",
    labelZh: "内容 + 电商 + 达人",
    noteEn: "Integrated growth support",
    noteZh: "整合式增长支持",
  },
  {
    value: "4.7",
    labelEn: "CLIENT RATINGS",
    labelZh: "客户评分",
    noteEn: "Consistent quality and execution",
    noteZh: "稳定品质与执行力",
  },
  {
    value: "Scale",
    labelEn: "BUILT FOR GROWTH",
    labelZh: "为增长而生",
    noteEn: "Strategy, systems, and momentum",
    noteZh: "策略、系统与增长势能",
  },
]

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.32)_0%,rgba(168,85,247,0.2)_34%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
    />
  )
}

function ServiceCard({
  title,
  description,
  Icon,
  cta,
}: {
  title: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
  cta: string
}) {
  return (
    <div className="group rounded-[22px] border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/[0.045]">
      <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 md:p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-pink-300" />
        </div>

        <h3 className="mt-6 text-[22px] font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/65">{description}</p>

        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white transition hover:scale-[1.03]"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProgressBar({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-white/75">{label}</span>
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          heroEyebrow: "SERVICES",
          heroTitle: "内容、商业与创作者驱动的增长服务",
          heroSubtitle:
            "我们帮助品牌通过策略、创意执行、电商支持、达人合作与数字系统实现更清晰、更可持续的增长。",

          introTitle:
            "推动数字卓越增长：发现 Star Digital 的优势。",
          introBody:
            "我们不仅提供单一服务，而是将策略、创意、内容、电商与执行整合成一个高效增长系统，帮助品牌更快启动、更强扩张、持续优化。",

          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "让策略、内容、商业与创作者协同发力。",
          learnMore: "LEARN MORE",

          valueLabel: "OUR VALUES",
          valueTitle:
            "Ownership. Integrity. Excellence — The Principles Behind Every Result We Deliver.",
          valueBody:
            "我们对结果负责，以透明方式协作，并坚持高标准交付。快速适应、紧密协作、持续进化，是我们推动品牌实现真正增长的方式。",

          partnerTitle:
            "不只是服务提供者，更是与你并肩增长的合作伙伴。",
          partnerBody:
            "我们与品牌并肩工作，深入理解其愿景、挑战与机会，从而打造既有创意张力又可规模化落地的解决方案。",

          featureA: "清晰协作与透明执行",
          featureABody:
            "从规划到落地，保持节奏一致、沟通透明、执行高效。",

          featureB: "提升流量、转化与品牌势能",
          featureBBody:
            "通过创意、内容、投放与电商运营的协同，让增长更具持续性。",

          featureC: "Premium Support",
          featureCBody:
            "快速响应的团队支持，帮助品牌在重要节点稳步推进。",

          featureD: "可扩展且适配平台的解决方案",
          featureDBody:
            "从品牌启动到优化升级，我们的系统可随业务增长持续扩展。",

          ctaPrimary: "WORK WITH US",
          ctaSecondary: "VIEW OUR STORY",
          contactLine: "Let’s build your next stage of digital growth.",
        }
      : {
          heroEyebrow: "SERVICES",
          heroTitle: "Growth Services Built Around Content, Commerce, and Creators.",
          heroSubtitle:
            "We help brands move with more clarity and momentum through strategy, creative execution, e-commerce support, affiliate partnerships, and scalable digital systems.",

          introTitle:
            "Pioneering Digital Excellence: Discover the Star Digital Advantage.",
          introBody:
            "We bring together strategy, creative execution, content systems, e-commerce support, and growth-focused operations to help brands launch stronger, scale faster, and perform with more consistency.",

          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "Where strategy, content, commerce, and creators move together.",

          learnMore: "LEARN MORE",

          valueLabel: "OUR VALUES",
          valueTitle:
            "Ownership. Integrity. Excellence — The Principles Behind Every Result We Deliver.",
          valueBody:
            "We own every outcome, operate with transparency, and never compromise on quality. We adapt fast, work together, and continuously evolve to create meaningful, measurable impact.",

          partnerTitle:
            "More than a service provider — a growth partner built for modern brands.",
          partnerBody:
            "We work side-by-side with brands to understand their vision, challenges, and opportunities. This allows us to craft solutions that are not only creative but also scalable and results-driven.",

          featureA: "Timely and Transparent Communication",
          featureABody:
            "A clear process, aligned collaboration, and fast-moving execution from planning to launch.",

          featureB: "Boost Traffic, Conversion, and Brand Momentum",
          featureBBody:
            "Integrated strategy across content, campaigns, creators, and commerce to support stronger business performance.",

          featureC: "Premium Support",
          featureCBody:
            "A responsive team that helps brands move faster, solve issues quickly, and keep momentum strong.",

          featureD: "Responsive and Scalable Solutions",
          featureDBody:
            "Built to adapt across platforms, campaigns, launches, and future growth needs.",

          ctaPrimary: "WORK WITH US",
          ctaSecondary: "VIEW OUR STORY",
          contactLine: "Let’s build your next stage of digital growth.",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#0a0118] text-white">
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* HERO */}
        <section className="relative overflow-hidden pt-24">
          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-bl-[34px] rounded-br-[34px] border-b border-white/15 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.24),rgba(10,1,24,0.96)_35%,rgba(10,1,24,1)_72%)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <GradientOrb className="left-1/2 top-6 h-48 w-48 -translate-x-1/2" />

              <ScrollReveal>
                <div className="mx-auto max-w-4xl text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-300">
                    {t.heroEyebrow}
                  </p>

                  <h1 className="mx-auto mt-5 max-w-[14ch] text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                    {t.heroTitle}
                  </h1>

                  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                    {t.heroSubtitle}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <ScrollReveal>
              <div>
                <h2 className="max-w-[13ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.introTitle}
                </h2>

                <p className="mt-6 max-w-[58ch] text-sm leading-7 text-white/65 md:text-base">
                  {t.introBody}
                </p>

                <div className="mt-8 grid gap-3 border-y border-white/10 py-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    {introPointsLeft.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 text-pink-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {introPointsRight.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 text-pink-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative rounded-[28px] border border-white/10 bg-white/[0.03] p-3">
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                  <div className="aspect-[1.12] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                      alt="Digital strategy workspace"
                      fill={false}
                      width={1200}
                      height={1000}
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,124,253,0.18),rgba(7,0,18,0.38))]" />

                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#b47cfd,#ff7eb6)] text-white shadow-[0_0_30px_rgba(255,126,182,0.35)]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <GradientOrb className="left-1/2 top-10 h-56 w-56 -translate-x-1/2" />

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                  {t.offerLabel}
                </p>
                <h2 className="mx-auto mt-4 max-w-[16ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.offerTitle}
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((item) => (
                <ScrollReveal key={item.titleEn}>
                  <ServiceCard
                    title={language === "zh" ? item.titleZh : item.titleEn}
                    description={language === "zh" ? item.descZh : item.descEn}
                    Icon={item.icon}
                    cta={t.learnMore}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE + IMAGE */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-stretch px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ScrollReveal>
              <div className="flex min-h-[580px] flex-col justify-center bg-[rgba(28,11,48,0.56)] px-6 py-12 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                  {t.valueLabel}
                </p>

                <h2 className="mt-5 max-w-[16ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.valueTitle}
                </h2>

                <p className="mt-6 max-w-[60ch] text-sm leading-7 text-white/65 md:text-base">
                  {t.valueBody}
                </p>

                <div className="mt-10 space-y-6">
                  {progressItems.map((item) => (
                    <ProgressBar
                      key={item.labelEn}
                      label={language === "zh" ? item.labelZh : item.labelEn}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative min-h-[580px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,5,28,0.18),rgba(7,0,18,0.26))]" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* STATS */}
        <section className="relative">
          <div className="bg-[linear-gradient(90deg,#b47cfd_0%,#cf7df0_35%,#ff7eb6_100%)]">
            <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
              {stats.map((item, index) => (
                <div
                  key={item.labelEn}
                  className={`text-center ${
                    index !== stats.length - 1
                      ? "md:border-r md:border-white/20"
                      : ""
                  }`}
                >
                  <div className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                    {language === "zh" ? item.labelZh : item.labelEn}
                  </div>
                  <div className="mt-2 text-[11px] leading-5 text-white/80">
                    {language === "zh" ? item.noteZh : item.noteEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE MOSAIC */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
              <ScrollReveal>
                <h2 className="max-w-[13ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.partnerTitle}
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <p className="max-w-[62ch] text-sm leading-7 text-white/65 md:text-base lg:pt-3">
                  {t.partnerBody}
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.45fr_0.9fr_0.95fr]">
              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="grid min-h-[250px] overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] lg:grid-cols-[1fr_0.95fr]">
                    <div className="flex flex-col justify-between p-7">
                      <div>
                        <h3 className="max-w-[14ch] text-2xl font-semibold leading-tight text-pink-300 md:text-3xl">
                          {t.featureA}
                        </h3>
                        <p className="mt-4 max-w-[30ch] text-sm leading-7 text-white/65">
                          {t.featureABody}
                        </p>
                      </div>

                      <div className="pt-6">
                        <Link
                          href="/contact"
                          className="inline-flex rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white"
                        >
                          {t.ctaPrimary}
                        </Link>
                      </div>
                    </div>

                    <div className="relative min-h-[220px] border-l border-white/10 bg-[linear-gradient(180deg,rgba(180,124,253,0.18),rgba(255,255,255,0.02))]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 className="h-24 w-24 text-white/20" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.25fr]">
                  <ScrollReveal>
                    <div className="flex min-h-[180px] flex-col justify-center rounded-[20px] border border-white/10 bg-white/[0.03] p-7">
                      <div className="text-[42px] font-bold leading-none text-white">
                        4.7+
                      </div>
                      <div className="mt-2 text-sm font-medium text-white/80">
                        Client Ratings
                      </div>
                      <div className="mt-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-pink-400 text-pink-400"
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/60">
                        Strong creative, strategic thinking, and consistent execution across digital workstreams.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="grid min-h-[180px] overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(192,132,252,0.22),rgba(18,6,31,0.95))] sm:grid-cols-[1fr_0.95fr]">
                      <div className="flex flex-col justify-between p-7">
                        <div>
                          <h3 className="max-w-[12ch] text-2xl font-semibold leading-tight text-white">
                            {t.featureD}
                          </h3>
                          <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/70">
                            {t.featureDBody}
                          </p>
                        </div>

                        <div className="pt-5">
                          <Link
                            href="/about/our-story"
                            className="inline-flex rounded-full bg-black px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white"
                          >
                            {t.ctaSecondary}
                          </Link>
                        </div>
                      </div>

                      <div className="relative min-h-[180px] border-l border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Smartphone className="h-20 w-20 text-white/20" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="flex min-h-[250px] flex-col justify-between rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(33,18,51,0.98),rgba(26,11,41,0.98))] p-7">
                    <div>
                      <h3 className="max-w-[11ch] text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {t.featureB}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {t.featureBBody}
                      </p>
                    </div>

                    <div className="relative flex min-h-[180px] items-center justify-center">
                      <Rocket className="h-28 w-28 text-pink-300" />
                      <div className="absolute bottom-4 h-20 w-20 rounded-full bg-pink-500/20 blur-2xl" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="flex min-h-[430px] flex-col justify-between rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#c084fc_0%,#ff7fa7_100%)] p-7 text-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                      <Search className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                        {t.featureC}
                      </h3>
                      <div className="mt-5 text-lg font-bold tracking-tight md:text-xl">
                        {t.contactLine}
                      </div>
                      <p className="mt-5 text-sm leading-7 text-white/85">
                        {t.featureCBody}
                      </p>
                    </div>

                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex rounded-full bg-black px-6 py-3 text-[11px] font-bold tracking-[0.18em] text-white"
                      >
                        {t.ctaPrimary}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
