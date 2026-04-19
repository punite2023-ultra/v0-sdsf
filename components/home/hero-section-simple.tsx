"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          badge: "WELCOME TO STAR DIGITAL",
          title: (
            <>
              Your Path to Digital
              <br />
              Excellence
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and digital growth systems to help brands build a stronger presence and better results.",
          primary: "Get Started",
          secondary: "Learn More",
        }
      : {
          badge: "WELCOME TO STAR DIGITAL",
          title: (
            <>
              Your Path to Digital
              <br />
              Excellence
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and digital growth systems to help brands build a stronger presence and better results.",
          primary: "Get Started",
          secondary: "Learn More",
        }

  return (
    <section className="relative overflow-hidden border-b border-white/15 bg-[#0A0118] text-white">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-30"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/bg-pattern.png')",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Main radial/gradient overlay based on Digimax JSON */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(10,1,24,0.45)_10%,rgba(10,1,24,0.92)_85%)]" />

      {/* Extra soft glow */}
      <div className="absolute left-1/2 top-[14%] h-[280px] w-[760px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 px-4 pt-28 md:px-8 md:pt-32 lg:pt-[7em]">
        <div className="mx-auto max-w-[720px]">
          <div className="px-4 py-14 md:px-8 md:py-20 lg:px-8 lg:py-[7em]">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-white/25 px-[14px] py-[3px] text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                {t.badge}
              </div>

              {/* Title */}
              <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6rem]">
                {t.title}
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                {t.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#B47CFD_0%,#E8178A_100%)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(180,124,253,0.25)]"
                >
                  {t.primary}
                </Link>

                <Link
                  href="/about"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  {t.secondary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
