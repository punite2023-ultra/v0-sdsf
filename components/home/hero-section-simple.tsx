"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Rocket,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Digital Growth Platform",
      title: (
        <>
          We build digital
          <br />
          momentum for brands
          <br />
          ready to grow.
        </>
      ),
      description:
        "Star Digital Solutions blends strategy, creative execution, and growth systems to help brands look sharper, communicate better, and convert with more confidence.",
      primaryCta: "Start a Project",
      secondaryCta: "View Services",
      trust1: "Creative + strategy in one team",
      trust2: "Built for brands, founders, and creators",
      trust3: "Designed to increase trust and conversions",
      cardTitle: "Strategy, creative, commerce, and growth",
      cardText:
        "A homepage experience designed to feel premium, modern, and conversion-focused from the very first screen.",
      panel1Title: "Creative Direction",
      panel1Text: "Visual systems for campaigns, content, and branded digital experiences.",
      panel2Title: "Marketplace Growth",
      panel2Text: "Storefront optimization and assets that support stronger conversion.",
      panel3Title: "Performance Thinking",
      panel3Text: "Sharper messaging, better structure, and more intentional user flow.",
      stat1: "360°",
      stat1Label: "Growth support",
      stat2: "Multi",
      stat2Label: "Channel execution",
      stat3: "Fast",
      stat3Label: "Creative turnaround",
      follow: "Follow us for updates",
    },
    zh: {
      badge: "数字增长平台",
      title: (
        <>
          我们为准备增长的品牌
          <br />
          打造更强的
          <br />
          数字增长动能。
        </>
      ),
      description:
        "Star Digital Solutions 结合策略、创意执行与增长系统，帮助品牌建立更高级的形象、更清晰的沟通方式，以及更强的转化能力。",
      primaryCta: "开始项目",
      secondaryCta: "查看服务",
      trust1: "创意与策略整合为一体",
      trust2: "适合品牌、创始人和创作者",
      trust3: "为信任感与转化而设计",
      cardTitle: "策略、创意、电商与增长",
      cardText:
        "首页第一屏就应当传达专业、高级、现代且以转化为目标的品牌体验。",
      panel1Title: "创意方向",
      panel1Text: "为活动、内容与品牌数字体验建立更清晰的视觉系统。",
      panel2Title: "电商增长",
      panel2Text: "优化店铺与资产内容，帮助提升整体转化表现。",
      panel3Title: "绩效思维",
      panel3Text: "更精准的信息结构、更好的页面布局与用户路径。",
      stat1: "360°",
      stat1Label: "增长支持",
      stat2: "多元",
      stat2Label: "渠道执行",
      stat3: "高效",
      stat3Label: "创意产出",
      follow: "关注我们获取最新动态",
    },
  }

  const t = language === "zh" ? content.zh : content.en

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070b17] text-white">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(236,72,153,0.20),transparent_22%),linear-gradient(180deg,rgba(7,11,23,0.72)_0%,rgba(8,12,24,0.82)_45%,rgba(7,11,23,0.92)_100%)]" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute left-[-120px] top-20 h-[340px] w-[340px] rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="absolute right-[-100px] top-28 h-[280px] w-[280px] rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md sm:text-xs">
              <Star className="h-4 w-4 text-fuchsia-300" />
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <TrustPill text={t.trust1} />
              <TrustPill text={t.trust2} />
              <TrustPill text={t.trust3} />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-white/90"
              >
                {t.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white hover:text-slate-900"
              >
                {t.secondaryCta}
              </Link>
            </div>

            <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
              <StatCard value={t.stat1} label={t.stat1Label} />
              <StatCard value={t.stat2} label={t.stat2Label} />
              <StatCard value={t.stat3} label={t.stat3Label} />
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/70">{t.follow}</p>

              <div className="flex gap-5">
                <a
                  href="https://www.facebook.com/stardigitalsolutionsph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:scale-110 hover:text-[#1877F2]"
                  aria-label="Facebook"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8H17l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/stardigitalsolutionsph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:scale-110 hover:text-pink-400"
                  aria-label="Instagram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@stardigitalsolutionsph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:scale-110 hover:text-cyan-400"
                  aria-label="TikTok"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M21 8.5a6.5 6.5 0 0 1-4-1.4v6.9a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v2.7a2.8 2.8 0 1 0 2.8 2.8V2h2.7a6.5 6.5 0 0 0 3 3.6v2.9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0c1222]/85 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                      Star Digital Solutions
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {t.cardTitle}
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-fuchsia-500/15 p-3 text-fuchsia-300">
                    <Rocket className="h-7 w-7" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  {t.cardText}
                </p>

                <div className="mt-8 space-y-4">
                  <InfoPanel
                    icon={<Sparkles className="h-5 w-5" />}
                    title={t.panel1Title}
                    text={t.panel1Text}
                  />
                  <InfoPanel
                    icon={<ShoppingBag className="h-5 w-5" />}
                    title={t.panel2Title}
                    text={t.panel2Text}
                  />
                  <InfoPanel
                    icon={<BarChart3 className="h-5 w-5" />}
                    title={t.panel3Title}
                    text={t.panel3Text}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MiniCard
                icon={<Megaphone className="h-5 w-5" />}
                title={language === "zh" ? "更强信息传达" : "Sharper Messaging"}
                text={
                  language === "zh"
                    ? "更清晰的品牌表达与更直接的价值传达。"
                    : "Clearer communication that explains value faster."
                }
              />
              <MiniCard
                icon={<Sparkles className="h-5 w-5" />}
                title={language === "zh" ? "更高级视觉感" : "Premium Look"}
                text={
                  language === "zh"
                    ? "通过更现代的布局、留白与层次提升品牌质感。"
                    : "Modern spacing, contrast, and hierarchy that elevate the brand."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
      <div className="h-2 w-2 rounded-full bg-fuchsia-400" />
      {text}
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/8 px-5 py-5 backdrop-blur-md">
      <div className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </div>
  )
}

function InfoPanel({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-fuchsia-400/30 hover:bg-white/[0.06]">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-xl bg-fuchsia-500/12 p-2 text-fuchsia-300">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/65">{text}</p>
        </div>
      </div>
    </div>
  )
}

function MiniCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-white/10 p-3 text-fuchsia-300">{icon}</div>
        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
        </div>
      </div>
    </div>
  )
}
