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
              准备开始您的项目？
              <br />
              让我们一起打造非凡成果。
            </>
          ),
          description:
            "与我们合作，共同创造卓越成果。立即联系我们，一起探讨您的品牌愿景与增长方向。",
          button: "开始项目",
        }
      : {
          title: (
            <>
              Ready to Start Your Project?
              <br />
              Let’s collaborate to create something extraordinary.
            </>
          ),
          description:
            "Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision.",
          button: "START A PROJECT",
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

            {/* Overlay (SDS dark gradient) */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,0,18,0.92)_0%,rgba(10,2,20,0.85)_40%,rgba(7,0,18,0.7)_70%,rgba(7,0,18,0.9)_100%)]" />

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 sm:px-10">

              {/* Glass Card */}
              <div className="max-w-[560px] rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">

                {/* Title */}
                <h2
                  className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h2>

                {/* Description */}
                <p className="mt-4 text-[14px] sm:text-[15px] leading-6 text-white/65 max-w-[480px]">
                  {t.description}
                </p>

                {/* Button */}
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#b70d41] to-[#ff4d6d] px-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(183,13,65,0.6)]"
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
