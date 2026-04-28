"use client"

import {
  Users,
  Network,
  Megaphone,
  ShoppingBag,
  LineChart,
  Target,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const servicesEn = [
  {
    title: "Affiliate & Influencer Marketing",
    description:
      "We connect brands with high-impact creators and affiliate partners to build campaigns that convert attention into measurable sales.",
    icon: Users,
  },
  {
    title: "Multi-Channel Network Management",
    description:
      "We grow creator ecosystems, manage brand collaborations, and activate talent networks designed to drive long-term digital performance.",
    icon: Network,
  },
  {
    title: "Brand Campaign Execution",
    description:
      "From strategy to rollout, we build campaigns that align creators, content, and commerce into one seamless growth system.",
    icon: Megaphone,
  },
  {
    title: "E-commerce Growth Support",
    description:
      "We help brands maximize platform opportunities, optimize campaign performance, and scale during high-volume sale moments.",
    icon: ShoppingBag,
  },
  {
    title: "Performance Marketing & Analytics",
    description:
      "We track campaign results, optimize media performance, and turn real-time insights into smarter growth decisions across every channel.",
    icon: LineChart,
  },
  {
    title: "Strategic Brand Partnerships",
    description:
      "We build collaboration opportunities between brands, creators, and platforms to unlock stronger reach, deeper engagement, and sustainable growth.",
    icon: Target,
  },
]

const servicesZh = [
  {
    title: "联盟与达人营销",
    description:
      "我们连接品牌与高影响力创作者及联盟合作伙伴，打造将关注转化为实际销售成果的营销活动。",
    icon: Users,
  },
  {
    title: "多渠道网络管理",
    description:
      "我们构建创作者生态系统，管理品牌合作，并激活人才网络，实现长期数字增长。",
    icon: Network,
  },
  {
    title: "品牌活动执行",
    description:
      "从策略到落地，我们整合创作者、内容与电商，打造一体化增长体系。",
    icon: Megaphone,
  },
  {
    title: "电商增长支持",
    description:
      "我们帮助品牌优化平台表现，把握大促节点，实现规模化增长。",
    icon: ShoppingBag,
  },
  {
    title: "效果营销与数据分析",
    description:
      "我们跟踪表现、优化投放，并将实时数据转化为更智能的增长决策。",
    icon: LineChart,
  },
  {
    title: "战略品牌合作",
    description:
      "我们为品牌、创作者与平台搭建合作，提升触达、互动与长期增长。",
    icon: Target,
  },
]

export function StatsSection() {
  const { language } = useLanguage()
  const isZh = language === "zh"
  const services = isZh ? servicesZh : servicesEn

  return (
    <section className="relative bg-[#26003e] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
            {isZh ? "我们的服务" : "WHAT WE OFFER"}
          </p>

          <h2 className="mx-auto max-w-[780px] text-3xl font-semibold leading-tight text-white md:text-5xl">
            {isZh
              ? "策略与数字融合，从这里开启您的成功之路"
              : "Where Strategy Meets Digital. Your Success Story Begins."}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="group relative rounded-[24px] border border-white/10 p-[12px] transition-all duration-300 hover:border-[#a855f7]/60"
              >
                <div className="relative h-full min-h-[260px] rounded-[18px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.06]">
                  
                  <div className="absolute inset-0 rounded-[18px] opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />

                  <div className="relative z-10 flex h-full flex-col">
                    
                    <div className="mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#f472b6]/30 bg-[#f472b6]/5 text-[#f472b6] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
