"use client"

import Link from "next/link"
import {
  MessageCircleMore,
  Search,
  MonitorPlay,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const stepsEn = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We start by understanding your goals, challenges, and what your brand needs to grow effectively.",
    icon: MessageCircleMore,
    href: "/contact",
  },
  {
    number: "02",
    title: "Discover the Product",
    description:
      "We study your business, audience, and market to define the right direction and digital strategy.",
    icon: Search,
    href: "/services",
  },
  {
    number: "03",
    title: "Wireframe & Production",
    description:
      "We turn the strategy into structured design, visuals, content, and polished digital execution.",
    icon: MonitorPlay,
    href: "/portfolio",
  },
  {
    number: "04",
    title: "Prototype Application",
    description:
      "We refine, optimize, and prepare the final experience for launch, testing, and long-term growth.",
    icon: ShieldCheck,
    href: "/about",
  },
]

const stepsZh = [
  {
    number: "01",
    title: "免费咨询",
    description: "我们先了解你的目标、挑战，以及品牌真正需要的增长方向。",
    icon: MessageCircleMore,
    href: "/contact",
  },
  {
    number: "02",
    title: "产品与需求分析",
    description: "我们研究你的业务、受众和市场，制定合适的数字化策略。",
    icon: Search,
    href: "/services",
  },
  {
    number: "03",
    title: "线框与制作",
    description: "我们把策略转化为结构化设计、视觉内容和高质量执行。",
    icon: MonitorPlay,
    href: "/portfolio",
  },
  {
    number: "04",
    title: "原型与落地",
    description: "我们优化最终体验，为上线、测试和持续增长做好准备。",
    icon: ShieldCheck,
    href: "/about",
  },
]

export function HowItWorksSection() {
  const { language } = useLanguage()
  const steps = language === "zh" ? stepsZh : stepsEn

  return (
    <section className="relative overflow-hidden bg-[#070015] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:68px_68px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="mx-auto mb-14 max-w-[760px] text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            {language === "zh" ? "工作流程" : "How It Works"}
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            {language === "zh"
              ? "通过 4 个简单步骤，开启高效数字增长。"
              : "Unlock Astonishing Results with Just 4 Simple Steps!"}
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[56px] hidden h-px bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent xl:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#a855f7]/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.16)]"
                >
                  <div className="absolute inset-0 rounded-[28px] opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:50px_50px]" />

                  <div className="relative z-10">
                    <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#f472b6]/30 bg-[linear-gradient(180deg,rgba(236,72,153,0.16),rgba(168,85,247,0.12))] text-[#f472b6] shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                      <Icon className="h-7 w-7" />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#070015]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[260px] text-sm leading-7 text-white/60">
                      {step.description}
                    </p>

                    <div className="mt-7">
                      <Link
                        href={step.href}
                        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#ec4899_55%,#f59e0b_100%)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.04]"
                      >
                        {language === "zh" ? "了解更多" : "Learn More"}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute left-1/2 top-[56px] hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#f472b6] shadow-[0_0_18px_rgba(244,114,182,0.8)] xl:block"
                    aria-hidden="true"
                  />

                  {index < steps.length - 1 && (
                    <div
                      className="pointer-events-none absolute right-[-12px] top-[52px] hidden h-8 w-8 items-center justify-center rounded-full border border-[#a855f7]/30 bg-[#120022] text-[#f472b6] xl:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
