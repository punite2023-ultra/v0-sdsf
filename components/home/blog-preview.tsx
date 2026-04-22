"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    id: 1,
    name: "Amanda Reyes",
    company: "BEAUTY & PERSONAL CARE BRAND",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    quoteEn:
      "Star Digital Solutions completely transformed how we approach digital growth. From content to commerce, their team helped us scale faster, optimize performance, and build a stronger connection with our audience.",
    quoteZh:
      "Star Digital Solutions 彻底改变了我们的数字增长方式。从内容到电商，他们帮助我们加速增长、优化表现，并与消费者建立更紧密的联系。",
  },
  {
    id: 2,
    name: "Daniel Cruz",
    company: "FMCG BRAND",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop",
    quoteEn:
      "Working with SDS was a game-changer. Their expertise in creator partnerships and multi-channel strategy helped us increase conversions and expand our presence across key platforms.",
    quoteZh:
      "与 SDS 合作是一个转折点。他们在达人合作和多渠道策略方面的专业能力，帮助我们提升转化率并扩大品牌影响力。",
  },
  {
    id: 3,
    name: "Christine Lim",
    company: "FASHION & LIFESTYLE BRAND",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    quoteEn:
      "Their data-driven approach and campaign execution are unmatched. Star Digital Solutions doesn’t just create content—they build systems that drive real, measurable growth.",
    quoteZh:
      "他们以数据为驱动的策略和执行能力非常出色。Star Digital Solutions 不只是做内容，而是构建真正推动增长的系统。",
  },
]

export function BlogPreview() {
  const { language } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-[#070012] py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center">
          <ScrollReveal>
            <span className="text-[#ff79c8] font-semibold text-sm uppercase tracking-[0.28em]">
              {language === "en" ? "Testimonial" : "客户评价"}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="mt-5 text-4xl font-bold tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {language === "en"
                ? "Client Feedback & Reviews"
                : "客户反馈与评价"}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const quote = language === "en" ? item.quoteEn : item.quoteZh

            return (
              <ScrollReveal key={item.id} delay={index * 100}>
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#2a2339]/95 px-8 py-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="mb-8 flex justify-center">
                    <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-[6px] border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="mx-auto max-w-[520px] text-[17px] leading-[1.7] text-white/55 md:text-[18px]">
                    {quote}
                  </p>

                  <div className="mt-10">
                    <h3 className="text-[20px] font-semibold italic text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[15px] font-semibold italic uppercase tracking-wide text-[#ff79c8]">
                      {item.company}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff79c8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  )
}
