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
    <section className="relative min-h-screen overflow-hidden bg-[#050014] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-40">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.18),transparent_35%),linear-gradient(180deg,rgba(5,0,20,0.82)_0%,rgba(7,3,24,0.88)_45%,rgba(5,0,20,0.96)_100%)]" />
      </div>

      {/* Soft glow */}
      <div className="absolute left-1/2 top-[18%] h-[320px] w-[820px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      {/* Optional subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-fuchsia-400/60 bg-transparent px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(217,70,239,0.12)]">
            {t.badge}
          </div>

          {/* Title */}
          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]">
            {t.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">
            {t.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#ec4899_55%,#f59e0b_100%)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:scale-[1.03]"
            >
              {t.primary}
            </Link>

            <Link
              href="/about"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:scale-[1.03] hover:bg-white hover:text-[#12051f]"
            >
              {t.secondary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
