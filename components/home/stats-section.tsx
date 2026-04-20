"use client"

import Link from "next/link"
import {
  Globe,
  Smartphone,
  BarChart3,
  PenTool,
  Layers3,
  Target,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const servicesEn = [
  {
    title: "Website Development",
    description:
      "We build modern, high-converting websites designed to strengthen your brand presence and support long-term digital growth.",
    href: "/services",
    icon: Globe,
  },
  {
    title: "App Development",
    description:
      "From concept to launch, we create digital experiences that are intuitive, scalable, and aligned with your business goals.",
    href: "/services",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    description:
      "We help brands grow through strategic campaigns, content execution, audience targeting, and performance-focused optimization.",
    href: "/services",
    icon: BarChart3,
  },
  {
    title: "Graphic Design",
    description:
      "We craft visually compelling assets that communicate clearly, elevate brand identity, and create stronger customer engagement.",
    href: "/services",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    description:
      "We develop cohesive brand systems that define your voice, sharpen your positioning, and make your business more memorable.",
    href: "/services",
    icon: Layers3,
  },
  {
    title: "Search Engine Optimization",
    description:
      "We improve your visibility with SEO strategies that help the right audience discover your brand and convert with confidence.",
    href: "/services",
    icon: Target,
  },
]

const servicesZh = [
  {
    title: "网站开发",
    description:
      "我们打造现代化、高转化的网站，帮助品牌建立更强的线上形象并支持长期增长。",
    href: "/services",
    icon: Globe,
  },
  {
    title: "应用开发",
    description:
      "从概念到上线，我们创建直观、可扩展并符合业务目标的数字化体验。",
    href: "/services",
    icon: Smartphone,
  },
  {
    title: "数字营销",
    description:
      "我们通过策略、内容执行、受众触达和效果优化帮助品牌持续增长。",
    href: "/services",
    icon: BarChart3,
  },
  {
    title: "平面设计",
    description:
      "我们打造高质量视觉内容，强化品牌识别并提升用户互动与转化。",
    href: "/services",
    icon: PenTool,
  },
  {
    title: "品牌识别",
    description:
      "我们建立统一的品牌系统，帮助你明确定位、塑造声音并增强记忆点。",
    href: "/services",
    icon: Layers3,
  },
  {
    title: "搜索引擎优化",
    description:
      "我们通过SEO策略提升品牌曝光，让目标用户更容易找到你并产生转化。",
    href: "/services",
    icon: Target,
  },
]

export function StatsSection() {
  const { language } = useLanguage()
  const services = language === "zh" ? servicesZh : servicesEn

  return (
    <section className="relative overflow-hidden bg-[#070015] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.14),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-8">
        <div className="mx-auto mb-14 max-w-[980px] text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            {language === "zh" ? "我们的服务" : "What We Offer"}
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
            {language === "zh"
              ? "战略与数字相遇的地方。你的成功故事，从这里开始。"
              : "Where Strategy Meets Digital. Your Success Story Begins Here."}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group relative rounded-[34px] border border-white/12 bg-transparent p-[18px] transition-all duration-500 hover:-translate-y-1 hover:border-[#a855f7]/70 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.35),0_0_45px_rgba(168,85,247,0.18)]"
              >
                <div className="relative h-full min-h-[420px] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-10 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-[26px] opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:58px_58px]" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-10">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#f472b6]/30 bg-[#f472b6]/5 text-[#f472b6]">
                        <Icon className="h-9 w-9 stroke-[1.8]" />
                      </div>
                    </div>

                    <h3 className="max-w-[320px] text-[28px] font-medium leading-tight tracking-[-0.02em] text-white md:text-[32px]">
                      {service.title}
                    </h3>

                    <p className="mt-6 max-w-[470px] text-lg leading-9 text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-10">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#ec4899_55%,#f59e0b_100%)] px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.03]"
                      >
                        {language === "zh" ? "了解更多" : "Learn More"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {index === 3 && (
                  <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-[#a855f7]/60 shadow-[0_0_35px_rgba(168,85,247,0.14)]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
