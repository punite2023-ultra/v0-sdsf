"use client"

import Link from "next/link"
import {
  ArrowRight,
  Play,
  Sparkles,
  BarChart3,
  Megaphone,
  MousePointerClick,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          badge: "数字增长平台",
          title: (
            <>
              您的品牌数字增长
              <br />
              从这里开始。
            </>
          ),
          description:
            "Star Digital Solutions 结合策略、创意与增长执行，帮助品牌打造更高级的形象、更清晰的沟通方式，以及更强的转化表现。",
          primary: "开始项目",
          secondary: "查看服务",
          trusted: "已为 3000+ 家企业与品牌提供增长支持",
          showcaseTitle: "您的数字增长伙伴",
          showcaseText:
            "从品牌策略到创意执行，再到营销与电商增长，我们打造真正能推动结果的数字体验。",
          card1Title: "品牌与内容",
          card1Text: "更清晰的视觉系统与更高级的品牌表达。",
          card2Title: "营销增长",
          card2Text: "更聚焦转化的活动结构与渠道执行。",
          card3Title: "电商优化",
          card3Text: "更有说服力的页面、内容与购买路径。",
        }
      : {
          badge: "Digital Growth Platform",
          title: (
            <>
              Your Path to Digital
              <br />
              Excellence
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and growth thinking to help brands look sharper, communicate better, and convert with more confidence.",
          primary: "Start a Project",
          secondary: "View Services",
          trusted: "Answer your business needs with creative and growth support",
          showcaseTitle: "Your Digital Future, Our Creative Direction",
          showcaseText:
            "From branding and content to digital marketing and commerce growth, we design premium digital experiences that move brands forward.",
          card1Title: "Brand & Content",
          card1Text: "Sharper identity systems and more premium communication.",
          card2Title: "Marketing Growth",
          card2Text: "Campaign structure built for stronger traction and conversion.",
          card3Title: "Commerce Optimization",
          card3Text: "Better user flow, clearer pages, and more persuasive content.",
        }

  const logos = ["amazon", "google", "spotify", "notion", "asana", "slack"]

  return (
    <section className="relative overflow-hidden bg-[#070b17] text-white">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(236,72,153,0.18),transparent_22%),linear-gradient(180deg,rgba(7,11,23,0.72)_0%,rgba(8,12,24,0.84)_48%,rgba(7,11,23,0.96)_100%)]" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute left-[-100px] top-16 h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="absolute right-[-80px] top-24 h-[260px] w-[260px] rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md sm:text-xs">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            {t.badge}
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            {t.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-white/90"
            >
              {t.primary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white hover:text-slate-900"
            >
              <Play className="mr-2 h-4 w-4" />
              {t.secondary}
            </Link>
          </div>

          <p className="mt-10 text-sm text-white/60">{t.trusted}</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.22em] text-white/45">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl pb-20 lg:mt-20 lg:pb-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl lg:p-6">
            <div className="grid gap-6 rounded-[1.6rem] border border-white/10 bg-[#0b1120]/90 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#161d35_0%,#251646_45%,#5b21b6_100%)] p-6 lg:p-8">
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-fuchsia-400/20 blur-2xl" />
                <div className="absolute bottom-6 left-10 h-20 w-20 rounded-full bg-violet-400/20 blur-2xl" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                      Star Digital Solutions
                    </p>
                    <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {t.showcaseTitle}
                    </h2>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 sm:text-base">
                      {t.showcaseText}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <MiniMetric icon={<Megaphone className="h-4 w-4" />} label="Creative" />
                    <MiniMetric icon={<BarChart3 className="h-4 w-4" />} label="Growth" />
                    <MiniMetric icon={<MousePointerClick className="h-4 w-4" />} label="Conversion" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <FeatureCard title={t.card1Title} text={t.card1Text} />
                <FeatureCard title={t.card2Title} text={t.card2Text} />
                <FeatureCard title={t.card3Title} text={t.card3Text} />

                <div className="rounded-[1.4rem] border border-fuchsia-400/20 bg-[linear-gradient(135deg,rgba(217,70,239,0.18),rgba(139,92,246,0.12))] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-200/80">
                    Premium Direction
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Clean structure. Strong contrast. Better first impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-fuchsia-400/30 hover:bg-white/[0.06]">
      <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
    </div>
  )
}

function MiniMetric({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-2 text-fuchsia-300">
        {icon}
        <span className="text-sm font-medium text-white/90">{label}</span>
      </div>
    </div>
  )
}
