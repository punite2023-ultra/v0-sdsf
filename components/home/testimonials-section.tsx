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
              Pioneering Digital
              <br />
              Excellence: Discover the
              <br />
              Star Digital Advantage.
            </>
          ),
          description:
            "We combine strong creative direction, conversion-focused design, and digital execution to help brands launch, grow, and stand out.",
          button: "DISCOVER MORE",
        }

  return (
    <section className="relative bg-[#070012] py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0216] min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
            {/* background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop')",
              }}
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,0,18,0.86)_0%,rgba(13,3,24,0.72)_34%,rgba(11,2,22,0.48)_62%,rgba(7,0,18,0.8)_100%)]" />

            {/* subtle purple tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(168,85,247,0.18),transparent_42%)]" />

            {/* inner content */}
            <div className="relative z-10 flex min-h-[420px] items-end p-5 sm:min-h-[500px] sm:p-8 lg:min-h-[560px] lg:p-10">
              <div className="w-full max-w-[930px] rounded-[26px] border border-white/10 bg-[rgba(28,14,48,0.55)] p-6 backdrop-blur-md sm:p-8 lg:max-w-[900px] lg:p-12">
                <div className="max-w-[720px]">
                  <h2
                    className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[70px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.title}
                  </h2>

                  <p className="mt-6 max-w-[760px] text-base leading-8 text-white/65 sm:text-lg lg:text-[20px] lg:leading-9">
                    {t.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#b96cff] via-[#df7dff] to-[#ffa07a] px-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:scale-[1.03]"
                  >
                    {t.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
