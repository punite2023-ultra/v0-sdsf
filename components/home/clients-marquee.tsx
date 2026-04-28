"use client"

import { useLanguage } from "@/lib/language-context"

const clientsEn = [
  "Affiliate & Influencer Marketing",
  "Multi-Channel Network Management",
  "Brand Campaign Execution",
  "E-commerce Growth Support",
  "Performance Marketing & Analytics",
  "Strategic Brand Partnerships",
  "Brand Strategy",
]

const clientsZh = [
  "联盟与网红营销",
  "多渠道网络管理",
  "品牌活动执行",
  "电商增长支持",
  "绩效营销与数据分析",
  "战略品牌合作",
  "品牌战略",
]

export function ClientsMarquee() {
  const { language } = useLanguage()

  const clients = language === "zh" ? clientsZh : clientsEn

  return (
    <section
      className="overflow-hidden"
      style={{ backgroundColor: "#62248e" }}
      aria-label={language === "zh" ? "服务滚动栏" : "Services marquee"}
    >
      <div className="relative flex h-16 items-center overflow-hidden">
        <div
          className="flex min-w-max items-center whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <span className="px-6 text-base font-bold uppercase text-white">
                {client}
              </span>

              <span className="text-base font-bold text-white/90 px-2">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
