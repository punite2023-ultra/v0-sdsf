"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          title: (
            <>
              开创数字卓越：
              <br />
              探索 Star Digital
              <br />
              的优势。
            </>
          ),
          description:
            "我们结合创意策略、以转化为导向的设计和数字执行，帮助品牌建立影响力、扩大增长并脱颖而出。",
          button: "发现更多",
        }
      : {
          title: (
            <>
              Pioneering Digital Excellence:
              <br />
              Discover the Star Digital
              <br />
              Advantage.
            </>
          ),
          description:
            "We combine strong creative direction, conversion-focused design, and digital execution to help brands launch, grow, and stand out.",
          button: "DISCOVER MORE",
        }

  return (
    <section className="relative bg-[#070012] py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[420px]">
            
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,0,18,0.92)_0%,rgba(10,2,20,0.85)_40%,rgba(7,0,18,0.7)_70%,rgba(7,0,18,0.9)_100%)]" />

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 sm:px-10">
              
              {/* GLASS BOX */}
              <div className="max-w-[560px] rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                
                {/* TITLE */}
                <h2
                  className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[14px] sm:text-[15px] leading-6 text-white/65 max-w-[480px]">
                  {t.description}
                </p>

                {/* BUTTON */}
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#b96cff] to-[#ff9a7a] px-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:scale-[1.04]"
                >
                  {t.button}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
