"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"

export function AboutPreview() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const t =
    language === "zh"
      ? {
          eyebrow: "WHO WE ARE",
          title: (
            <>
              Powering Brands Through
              <br />
              Content, Commerce, and Creators
            </>
          ),
          description:
            "Star Digital Solutions helps brands grow through e-commerce strategy, creator partnerships, affiliate marketing, and multi-channel network execution. Where Brands Become the Star of the Market.",
          paragraph1:
            "From global brands to rising names, we build campaigns that don’t just shine, they convert, scale, and lead.",
          paragraph2:
            "Built for brands ready to scale on digital platforms that move fast.",
          primaryCta: "WORK WITH US",
          secondaryCta: "VIEW OUR STORY",
          badgeText: "PREMIUM SERVICES • AND SUPPORT • ",
        }
      : {
          eyebrow: "WHO WE ARE",
          title: (
            <>
              Powering Brands Through
              <br />
              Content, Commerce, and Creators
            </>
          ),
          description:
            "Star Digital Solutions helps brands grow through e-commerce strategy, creator partnerships, affiliate marketing, and multi-channel network execution. Where Brands Become the Star of the Market.",
          paragraph1:
            "From global brands to rising names, we build campaigns that don’t just shine, they convert, scale, and lead.",
          paragraph2:
            "Built for brands ready to scale on digital platforms that move fast.",
          primaryCta: "WORK WITH US",
          secondaryCta: "VIEW OUR STORY",
          badgeText: "PREMIUM SERVICES • AND SUPPORT • ",
        }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070012] py-20 md:py-24 lg:py-28"
    >
      {/* top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-white/8" />

      {/* glow */}
      <div className="absolute left-1/2 top-[18%] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(180,124,253,0.08),transparent_28%)]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* IMAGE */}
          <div
            className={`relative transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

              <div className="relative overflow-hidden rounded-[20px]">
                <div
                  className={`relative aspect-[1.35/1] transition-all duration-[1400ms] ${
                    isVisible
                      ? "scale-100 grayscale-0 brightness-100"
                      : "scale-[1.05] grayscale brightness-[0.7]"
                  }`}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&auto=format&fit=crop&q=80"
                    alt="Team"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ${
                    isVisible ? "opacity-10" : "opacity-40"
                  } bg-[linear-gradient(180deg,rgba(186,126,255,0.25)_0%,rgba(7,0,18,0.35)_100%)]`}
                />
              </div>
            </div>

            {/* BADGE */}
            <div
              className={`absolute right-[-8px] top-[-12px] transition-all duration-[1200ms] ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
              }`}
            >
              <div className="badge-float relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#C78BFF_0%,#A95FF0_100%)] shadow-[0_18px_45px_rgba(169,95,240,0.35)]">

                <div className="absolute inset-[8px] rounded-full border border-white/50" />

                <div className="badge-spin absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text fill="white" fontSize="9" fontWeight="700" letterSpacing="1.5">
                      <textPath href="#circlePath">
                        {t.badgeText}
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="h-[56px] w-[56px] rounded-full border border-white/50 bg-white/10 backdrop-blur" />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="max-w-[560px]">

            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#ff5ab7]">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 max-w-[540px] text-[42px] font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-[50px] lg:text-[60px]">
              {t.title}
            </h2>

            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-white/60">
              {t.description}
            </p>

            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.7] text-white/70">
              {t.paragraph1}
            </p>

            <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-white/70">
              {t.paragraph2}
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#B47CFD_0%,#FF8A5B_100%)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(180,124,253,0.22)] transition-all duration-300 hover:scale-[1.03]"
              >
                {t.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:border-white hover:text-white"
              >
                {t.secondaryCta}
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .badge-spin {
          animation: spin 14s linear infinite;
        }

        .badge-float {
          animation: float 4.5s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}
