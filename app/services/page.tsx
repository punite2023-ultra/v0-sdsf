"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  BarChart3,
  PenTool,
  Layers3,
  Search,
  Check,
  PhoneCall,
  Facebook,
  Twitter,
  Linkedin,
  Dribbble,
  Monitor,
  Rocket,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const stats = [
  { value: "56K+", labelEn: "PROJECT DONE", labelZh: "已完成项目" },
  { value: "38K+", labelEn: "HAPPY CLIENT", labelZh: "满意客户" },
  { value: "4.7", labelEn: "CLIENT RATINGS", labelZh: "客户评分" },
  { value: "35+", labelEn: "AWARD WINNING", labelZh: "获奖数量" },
]

const services = [
  {
    titleEn: "Website Development",
    titleZh: "网站开发",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: Globe,
  },
  {
    titleEn: "App Development",
    titleZh: "应用开发",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: Smartphone,
  },
  {
    titleEn: "Digital Marketing",
    titleZh: "数字营销",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: BarChart3,
  },
  {
    titleEn: "Graphic Design",
    titleZh: "平面设计",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: PenTool,
  },
  {
    titleEn: "Brand Identity",
    titleZh: "品牌识别",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: Layers3,
  },
  {
    titleEn: "Search Engine Optimization",
    titleZh: "搜索引擎优化",
    descriptionEn:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    descriptionZh:
      "这是示例说明文字，用于展示服务介绍内容与排版结构。",
    icon: Search,
  },
]

const featureBulletsLeft = [
  "Expertise in Digital Solutions",
  "Innovative Design Approach",
  "Strategic Digital Marketing",
  "Data-Driven Decisions",
]

const featureBulletsRight = [
  "Holistic Security Measures",
  "Tailored Digital Strategy",
  "Responsive & Scalable",
  "Proven Track Record",
]

const progressItems = [
  { labelEn: "Design & Branding", labelZh: "设计与品牌", value: 71 },
  { labelEn: "Web & App Developer", labelZh: "网站与应用开发", value: 74 },
  { labelEn: "Digital Marketing", labelZh: "数字营销", value: 80 },
  { labelEn: "Social Media Management", labelZh: "社交媒体管理", value: 67 },
]

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.35)_0%,rgba(168,85,247,0.2)_35%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
    />
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-300">
      {children}
    </span>
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
    <div className="group rounded-[22px] border border-white/10 bg-white/[0.03] p-[14px] transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
      <div className="flex min-h-[260px] flex-col rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,35,56,0.95),rgba(27,18,37,0.96))] p-7">
        <div className="mb-7">
          <Icon className="h-9 w-9 text-pink-400" />
        </div>

        <h3 className="text-[21px] font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="mt-4 max-w-[32ch] text-sm leading-7 text-white/65">
          {description}
        </p>

        <div className="mt-auto pt-8">
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#c084fc,#fb7185)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.03]"
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
        <span className="text-sm font-medium text-white/80">{label}</span>
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#c084fc,#fb7185)]"
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
          heroSubtitle: "超越像素，超越期待：Digimax，让创意起飞。",
          introTitle:
            "Pioneering Digital Excellence: Discover the Digimax Advantage",
          introBody:
            "Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit.",
          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "Where Strategy Meets Digital. Your Success Story Begins with Digimax.",
          learnMore: "LEARN MORE",
          valueLabel: "OUR VALUE",
          valueTitle:
            "Experience the magic of Interiokit. Contact us to discuss your project.",
          valueBody:
            "Maecenas massa inceptos placerat ultricies ridiculus vulputate torquent curae. Tortor cubilia risus nam cursus sit dui. Facilisi vivamus fermentum commodo nascetur orci morbi quisque ipsum suscipit vel.",
          partnerTitle:
            "Navigating Digital Horizons with Digimax: Your Trusted Partner.",
          partnerBody:
            "Inceptos euismod aenean vulputate senectus penatibus lectus. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi egestas in torquent nec felis senectus feugiat.",
          timelyTitle: "Timely and Transparent Communication",
          timelyBody:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ac interdum.",
          boostTitle: "Boost Traffic & Sales",
          boostBody:
            "Platea rhoncus semper consectetur vivamus facilisi nec curabitur placerat montes lacinia habitant.",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
          callNow: "CALL NOW!",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveBody:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ac interdum.",
        }
      : {
          heroTitle: "Services",
          heroSubtitle: "Beyond Pixels, Beyond Expectations: Digimax, Where Ideas Soar.",
          introTitle:
            "Pioneering Digital Excellence: Discover the Digimax Advantage",
          introBody:
            "Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit.",
          offerLabel: "WHAT WE OFFER",
          offerTitle:
            "Where Strategy Meets Digital. Your Success Story Begins with Digimax.",
          learnMore: "LEARN MORE",
          valueLabel: "OUR VALUE",
          valueTitle:
            "Experience the magic of Interiokit. Contact us to discuss your project.",
          valueBody:
            "Maecenas massa inceptos placerat ultricies ridiculus vulputate torquent curae. Tortor cubilia risus nam cursus sit dui. Facilisi vivamus fermentum commodo nascetur orci morbi quisque ipsum suscipit vel.",
          partnerTitle:
            "Navigating Digital Horizons with Digimax: Your Trusted Partner.",
          partnerBody:
            "Inceptos euismod aenean vulputate senectus penatibus lectus. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi egestas in torquent nec felis senectus feugiat.",
          timelyTitle: "Timely and Transparent Communication",
          timelyBody:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ac interdum.",
          boostTitle: "Boost Traffic & Sales",
          boostBody:
            "Platea rhoncus semper consectetur vivamus facilisi nec curabitur placerat montes lacinia habitant.",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
          callNow: "CALL NOW!",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveBody:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ac interdum.",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#0a0118] text-white">
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* hero */}
        <section className="relative overflow-hidden pt-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
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

        {/* intro split */}
        <section className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <ScrollReveal>
              <div>
                <h2 className="max-w-[12ch] text-[34px] font-semibold leading-[1.1] tracking-tight text-white md:text-[42px]">
                  {t.introTitle}
                </h2>

                <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-white/65">
                  {t.introBody}
                </p>

                <div className="mt-8 grid gap-3 border-y border-white/10 py-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    {featureBulletsLeft.map((item) => (
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
                    {featureBulletsRight.map((item) => (
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
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="aspect-[1.18] w-full bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.16),rgba(255,255,255,0.06)_35%,rgba(255,255,255,0.01)_72%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,124,253,0.24),rgba(255,255,255,0.01))]" />
                  <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10 md:text-8xl">
                    02
                  </div>

                  <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c084fc,#fb7185)] text-white shadow-[0_0_35px_rgba(236,72,153,0.38)]">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* services grid */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.12),rgba(15,5,32,1)_32%)] py-16 sm:py-20 lg:py-24">
          <GradientOrb className="left-1/2 top-0 h-56 w-56 -translate-x-1/2" />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <SectionLabel>{t.offerLabel}</SectionLabel>
                <h2 className="mx-auto mt-4 max-w-[16ch] text-[34px] font-semibold leading-[1.12] tracking-tight text-white md:text-[44px]">
                  {t.offerTitle}
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ScrollReveal key={service.titleEn}>
                  <ServiceCard
                    title={language === "zh" ? service.titleZh : service.titleEn}
                    description={
                      language === "zh"
                        ? service.descriptionZh
                        : service.descriptionEn
                    }
                    Icon={service.icon}
                    cta={t.learnMore}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* progress section */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-stretch px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ScrollReveal>
              <div className="flex min-h-[620px] flex-col justify-center bg-[rgba(28,11,48,0.56)] px-6 py-12 sm:px-10 lg:px-14">
                <SectionLabel>{t.valueLabel}</SectionLabel>
                <h2 className="mt-5 max-w-[14ch] text-[34px] font-semibold leading-[1.1] tracking-tight text-white md:text-[42px]">
                  {t.valueTitle}
                </h2>
                <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-white/65">
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
              <div className="relative min-h-[620px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,124,253,0.22),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.18),transparent_35%)]" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/10">
                  03
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* stat bar */}
        <section className="relative">
          <div className="w-full bg-[linear-gradient(90deg,#bb86fc_0%,#ff7fa7_100%)]">
            <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:px-10 lg:px-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.labelEn}
                  className="text-center sm:border-r sm:border-white/15 last:sm:border-r-0"
                >
                  <div className="text-[42px] font-bold leading-none tracking-tight text-white md:text-[52px]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                    {language === "zh" ? stat.labelZh : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* feature mosaic */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
              <ScrollReveal>
                <div>
                  <h2 className="max-w-[13ch] text-[34px] font-semibold leading-[1.1] tracking-tight text-white md:text-[42px]">
                    {t.partnerTitle}
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="max-w-[62ch] text-[15px] leading-7 text-white/65 lg:pt-3">
                  {t.partnerBody}
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.45fr_0.9fr_0.95fr]">
              {/* left block */}
              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="grid min-h-[260px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] lg:grid-cols-[1fr_0.95fr]">
                    <div className="flex flex-col justify-between p-7">
                      <div>
                        <h3 className="max-w-[14ch] text-[28px] font-semibold leading-[1.08] text-pink-300">
                          {t.timelyTitle}
                        </h3>
                        <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/65">
                          {t.timelyBody}
                        </p>
                      </div>

                      <div className="pt-6">
                        <Link
                          href="#"
                          className="inline-flex rounded-full bg-[linear-gradient(90deg,#c084fc,#fb7185)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                        >
                          {t.learnMore}
                        </Link>
                      </div>
                    </div>

                    <div className="relative min-h-[240px] border-l border-white/10 bg-[linear-gradient(180deg,rgba(180,124,253,0.18),rgba(255,255,255,0.02))]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Monitor className="h-24 w-24 text-white/25" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.25fr]">
                  <ScrollReveal>
                    <div className="flex min-h-[190px] flex-col justify-center rounded-[22px] border border-white/10 bg-white/[0.03] p-7">
                      <div className="text-[44px] font-bold leading-none text-white">
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
                        Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="grid min-h-[190px] overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(192,132,252,0.25),rgba(18,6,31,0.95))] sm:grid-cols-[1fr_0.95fr]">
                      <div className="flex flex-col justify-between p-7">
                        <div>
                          <h3 className="max-w-[12ch] text-[26px] font-semibold leading-[1.08] text-white">
                            {t.responsiveTitle}
                          </h3>
                          <p className="mt-4 max-w-[28ch] text-sm leading-7 text-white/70">
                            {t.responsiveBody}
                          </p>
                        </div>

                        <div className="pt-5">
                          <Link
                            href="#"
                            className="inline-flex rounded-full bg-black px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                          >
                            {t.learnMore}
                          </Link>
                        </div>
                      </div>

                      <div className="relative min-h-[180px] border-l border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Smartphone className="h-20 w-20 text-white/25" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* center rocket */}
              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="flex min-h-[260px] flex-col justify-between rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(33,18,51,0.98),rgba(26,11,41,0.98))] p-7">
                    <div>
                      <h3 className="max-w-[11ch] text-[28px] font-semibold leading-[1.08] text-white">
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

              {/* support block */}
              <div className="grid gap-4">
                <ScrollReveal>
                  <div className="flex min-h-[454px] flex-col justify-between rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#c084fc_0%,#ff7fa7_100%)] p-7 text-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                      <PhoneCall className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-[30px] font-semibold leading-[1.06]">
                        {t.supportTitle}
                      </h3>
                      <div className="mt-5 text-[28px] font-bold tracking-tight">
                        {t.supportPhone}
                      </div>
                      <p className="mt-5 text-sm leading-7 text-white/85">
                        {t.supportBody}
                      </p>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="inline-flex rounded-full bg-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
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
