"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe,
  Layers3,
  Monitor,
  PenTool,
  PhoneCall,
  Rocket,
  Search,
  Smartphone,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const serviceCards = [
  {
    titleEn: "Website Development",
    titleZh: "网站开发",
    descEn:
      "We build conversion-focused websites that combine clean design, fast performance, and scalable structure for growing brands.",
    descZh: "我们打造以转化为导向的网站，结合清晰设计、快速性能与可扩展结构。",
    icon: Globe,
  },
  {
    titleEn: "App Development",
    titleZh: "应用开发",
    descEn:
      "From product concept to launch-ready interface, we create responsive digital experiences built for modern users.",
    descZh: "从产品概念到上线界面，我们打造适合现代用户的响应式数字体验。",
    icon: Smartphone,
  },
  {
    titleEn: "Digital Marketing",
    titleZh: "数字营销",
    descEn:
      "We connect strategy, content, and paid media into digital campaigns that generate measurable growth.",
    descZh: "我们将策略、内容和付费媒体结合，打造可衡量增长的数字营销活动。",
    icon: BarChart3,
  },
  {
    titleEn: "Graphic Design",
    titleZh: "平面设计",
    descEn:
      "We craft sharp, modern creative assets that strengthen brand perception across every touchpoint.",
    descZh: "我们打造现代且有冲击力的创意视觉资产，提升品牌在各接触点的表现。",
    icon: PenTool,
  },
  {
    titleEn: "Brand Identity",
    titleZh: "品牌识别",
    descEn:
      "From visual systems to brand direction, we shape identities that feel clear, premium, and memorable.",
    descZh: "从视觉系统到品牌方向，我们塑造清晰、高级且令人难忘的品牌识别。",
    icon: Layers3,
  },
  {
    titleEn: "Search Engine Optimization",
    titleZh: "搜索引擎优化",
    descEn:
      "We improve discoverability with stronger content structure, technical optimization, and search-focused planning.",
    descZh: "我们通过内容结构、技术优化和搜索策略提升品牌可见度。",
    icon: Search,
  },
]

const stats = [
  { value: "56K+", labelEn: "Project Done", labelZh: "已完成项目" },
  { value: "38K+", labelEn: "Happy Client", labelZh: "满意客户" },
  { value: "4.7", labelEn: "Client Ratings", labelZh: "客户评分" },
  { value: "35+", labelEn: "Award Winning", labelZh: "获奖数量" },
]

const capabilitiesLeft = [
  "Expertise in Digital Solutions",
  "Innovative Design Approach",
  "Strategic Digital Marketing",
  "Data-Driven Decisions",
]

const capabilitiesRight = [
  "Tailored Digital Strategy",
  "Responsive & Scalable",
  "Brand-Led Execution",
  "Proven Track Record",
]

const progressItems = [
  { labelEn: "Design & Branding", labelZh: "设计与品牌", value: 71 },
  { labelEn: "Web & App Development", labelZh: "网站与应用开发", value: 74 },
  { labelEn: "Digital Marketing", labelZh: "数字营销", value: 80 },
  { labelEn: "Social Media Management", labelZh: "社媒管理", value: 67 },
]

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.34)_0%,rgba(168,85,247,0.22)_35%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
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
    <div className="group rounded-[20px] border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/[0.045]">
      <div className="rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 md:p-7">
        <Icon className="h-9 w-9 text-pink-400" />

        <h3 className="mt-6 text-[22px] font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/65">
          {description}
        </p>

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
          heroTitle: "Services",
          heroSubtitle: "策略与执行结合，让数字增长真正发生。",
          introTitle:
            "Pioneering Digital Excellence: Discover the Digimax Advantage",
          introBody:
            "We combine strategy, creative execution, and scalable digital systems to help brands build stronger presence, better campaigns, and more consistent results.",
          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "Where Strategy Meets Digital. Your Success Story Begins Here.",
          learnMore: "LEARN MORE",
          valueLabel: "OUR VALUE",
          valueTitle:
            "Experience sharper execution, stronger creative, and digital solutions built to grow with your brand.",
          valueBody:
            "We align design, development, and campaign execution into one streamlined system—so your brand looks stronger, performs better, and scales with more clarity.",
          partnerTitle:
            "Navigating Digital Growth with a Partner Built for Modern Brands.",
          partnerBody:
            "From creative direction to platform execution, we help brands move faster, stay consistent, and perform better across digital touchpoints.",
          timelyTitle: "Timely and Transparent Communication",
          timelyBody:
            "Clear process, clear updates, and aligned collaboration from planning to launch.",
          boostTitle: "Boost Traffic & Sales",
          boostBody:
            "Strategy and execution designed to improve visibility, engagement, and measurable conversion performance.",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportBody:
            "A responsive team that helps you move faster, solve issues quickly, and keep momentum strong.",
          callNow: "CALL NOW!",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveBody:
            "Built to adapt across platforms, campaigns, and future growth needs.",
        }
      : {
          heroTitle: "Services",
          heroSubtitle:
            "Beyond pixels and production — built for strategy, growth, and results.",
          introTitle:
            "Pioneering Digital Excellence: Discover the Digimax Advantage",
          introBody:
            "We combine strategy, creative execution, and scalable digital systems to help brands build stronger presence, better campaigns, and more consistent results.",
          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "Where Strategy Meets Digital. Your Success Story Begins Here.",
          learnMore: "LEARN MORE",
          valueLabel: "OUR VALUE",
          valueTitle:
            "Experience sharper execution, stronger creative, and digital solutions built to grow with your brand.",
          valueBody:
            "We align design, development, and campaign execution into one streamlined system—so your brand looks stronger, performs better, and scales with more clarity.",
          partnerTitle:
            "Navigating Digital Growth with a Partner Built for Modern Brands.",
          partnerBody:
            "From creative direction to platform execution, we help brands move faster, stay consistent, and perform better across digital touchpoints.",
          timelyTitle: "Timely and Transparent Communication",
          timelyBody:
            "Clear process, clear updates, and aligned collaboration from planning to launch.",
          boostTitle: "Boost Traffic & Sales",
          boostBody:
            "Strategy and execution designed to improve visibility, engagement, and measurable conversion performance.",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportBody:
            "A responsive team that helps you move faster, solve issues quickly, and keep momentum strong.",
          callNow: "CALL NOW!",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveBody:
            "Built to adapt across platforms, campaigns, and future growth needs.",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#0a0118] text-white">
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* HERO */}
        <section className="relative overflow-hidden pt-24">
          <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] border-b border-white/15 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.22),rgba(10,1,24,0.96)_38%,rgba(10,1,24,1)_68%)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <GradientOrb className="left-1/2 top-10 h-48 w-48 -translate-x-1/2" />

              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {t.heroTitle}
                  </h1>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    {t.heroSubtitle}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <ScrollReveal>
              <div>
                <h2 className="max-w-[12ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.introTitle}
                </h2>

                <p className="mt-6 max-w-[58ch] text-sm leading-7 text-white/65 md:text-base">
                  {t.introBody}
                </p>

                <div className="mt-8 grid gap-3 border-y border-white/10 py-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    {capabilitiesLeft.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="mt-0.5 h-4 w-4 text-pink-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {capabilitiesRight.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-white/80">
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
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="aspect-[1.15] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.02)_72%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,124,253,0.22),rgba(255,255,255,0.02))]" />
                  <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10">
                    02
                  </div>

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

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
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

        {/* VALUE + PROGRESS */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-stretch px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ScrollReveal>
              <div className="flex min-h-[580px] flex-col justify-center bg-[rgba(28,11,48,0.56)] px-6 py-12 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                  {t.valueLabel}
                </p>

                <h2 className="mt-5 max-w-[15ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                  {t.valueTitle}
                </h2>

                <p className="mt-6 max-w-[58ch] text-sm leading-7 text-white/65 md:text-base">
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
              <div className="relative min-h-[580px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,124,253,0.22),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.14),transparent_35%)]" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/10">
                  03
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* STATS */}
        <section className="relative">
          <div className="bg-[linear-gradient(90deg,#b47cfd_0%,#cf7df0_35%,#ff7eb6_100%)]">
            <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
              {stats.map((item, index) => (
                <div
                  key={item.labelEn}
                  className={`${index !== stats.length - 1 ? "md:border-r md:border-white/20" : ""} text-center`}
                >
                  <div className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                    {language === "zh" ? item.labelZh : item.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE MOSAIC */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
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
                          {t.timelyTitle}
                        </h3>
                        <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/65">
                          {t.timelyBody}
                        </p>
                      </div>

                      <div className="pt-6">
                        <Link
                          href="/contact"
                          className="inline-flex rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white"
                        >
                          {t.learnMore}
                        </Link>
                      </div>
                    </div>

                    <div className="relative min-h-[220px] border-l border-white/10 bg-[linear-gradient(180deg,rgba(180,124,253,0.18),rgba(255,255,255,0.02))]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Monitor className="h-24 w-24 text-white/20" />
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
                        Strong creative, clear communication, and consistent execution.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="grid min-h-[180px] overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(192,132,252,0.22),rgba(18,6,31,0.95))] sm:grid-cols-[1fr_0.95fr]">
                      <div className="flex flex-col justify-between p-7">
                        <div>
                          <h3 className="max-w-[12ch] text-2xl font-semibold leading-tight text-white">
                            {t.responsiveTitle}
                          </h3>
                          <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/70">
                            {t.responsiveBody}
                          </p>
                        </div>

                        <div className="pt-5">
                          <Link
                            href="/contact"
                            className="inline-flex rounded-full bg-black px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white"
                          >
                            {t.learnMore}
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
                        {t.boostTitle}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {t.boostBody}
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
                      <PhoneCall className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                        {t.supportTitle}
                      </h3>
                      <div className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                        {t.supportPhone}
                      </div>
                      <p className="mt-5 text-sm leading-7 text-white/85">
                        {t.supportBody}
                      </p>
                    </div>

                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex rounded-full bg-black px-6 py-3 text-[11px] font-bold tracking-[0.18em] text-white"
                      >
                        {t.callNow}
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
