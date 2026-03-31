"use client"

import { useLanguage } from "@/lib/language-context"

export function ClientsMarquee() {
  const { language } = useLanguage()

  const clients =
    language === "en"
      ? [
          "Social Media Marketing",
          "Content Creation & Branding",
          "E-Commerce Strategy & Management",
          "Influencer and Affiliate Marketing",
          "Live Streaming Services",
          "Lorem Ipsum Dolor",
          "Sed ut perspiciatis unde",
        ]
      : [
          "社交媒体营销",
          "内容创作与品牌建设",
          "电子商务策略与管理",
          "网红与联盟营销",
          "直播服务",
          "示例占位文字",
          "虚拟演示文本",
        ]

  return (
    <section
      className="overflow-hidden"
      style={{ backgroundColor: "#62248e" }}
      aria-label={language === "en" ? "Services marquee" : "服务滚动栏"}
    >
      <div className="relative flex h-16 items-center">
        <div
          className="flex min-w-max items-center whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <span
                className={`px-6 text-base font-bold text-white ${
                  language === "en" ? "uppercase" : ""
                }`}
              >
                {client}
              </span>

              <span className="text-base font-bold text-white/90">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
