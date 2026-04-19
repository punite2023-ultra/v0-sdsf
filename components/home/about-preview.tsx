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
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -60px 0px",
      }
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
              Your Digital Future, Our
              <br />
              Expertise: Star Digital Delivers
              <br />
              Excellence.
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and digital growth systems to help brands build stronger visibility, sharper positioning, and better performance across every touchpoint.",
          cta: "DISCOVER MORE",
          badgeText: "PREMIUM SERVICES • AND SUPPORT • ",
        }
      : {
          eyebrow: "WHO WE ARE",
          title: (
            <>
              Your Digital Future, Our
              <br />
              Expertise: Star Digital Delivers
              <br />
              Excellence.
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and digital growth systems to help brands build stronger visibility, sharper positioning, and better performance across every touchpoint.",
          cta: "DISCOVER MORE",
          badgeText: "PREMIUM SERVICES • AND SUPPORT • ",
        }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070012] py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/8" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(180,124,253,0.08),transparent_28%)]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* IMAGE SIDE */}
          <div
            className={`relative transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[24px]">
                <div
                  className={`relative aspect-[1.36/1] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible
                      ? "scale-100 grayscale-0 brightness-100 saturate-100"
                      : "scale-[1.06] grayscale brightness-[0.7] saturate-[0.65]"
                  }`}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-opacity duration-[1300ms] ${
                    isVisible
                      ? "opacity-10"
                      : "opacity-40"
                  } bg-[linear-gradient(180deg,rgba(186,126,255,0.28)_0%,rgba(7,0,18,0.35)_100%)]`}
                />
              </div>
            </div>

            {/* badge */}
            <div
              className={`absolute right-[-6px] top-[-10px] z-20 transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:right-[-12px] md:top-[-18px] ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-6 scale-90 opacity-0"
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              <div className="badge-float relative flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#C78BFF_0%,#A95FF0_100%)] shadow-[0_18px_45px_rgba(169,95,240,0.35)] md:h-[128px] md:w-[128px]">
                <div className="absolute inset-[8px] rounded-full border border-white/50" />

                <div className="badge-spin absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path
                        id="aboutBadgePath"
                        d="M 50,50
                           m -38,0
                           a 38,38 0 1,1 76,0
                           a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="9"
                      fontWeight="700"
                      letterSpacing="1.5"
                    >
                      <textPath href="#aboutBadgePath" startOffset="0%">
                        {t.badgeText}
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="h-[54px] w-[54px] rounded-full border border-white/50 bg-white/10 backdrop-blur-sm md:h-[62px] md:w-[62px]" />
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="max-w-[680px]">
            <div
              className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-x-0 opacity-100 blur-0"
                  : "translate-x-10 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: "80ms" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff5ab7]">
                {t.eyebrow}
              </p>
            </div>

            <div
              className={`transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-x-0 opacity-100 blur-0"
                  : "translate-x-12 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
                {t.title}
              </h2>
            </div>

            <div
              className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-x-0 opacity-100 blur-0"
                  : "translate-x-14 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: "290ms" }}
            >
              <p className="mt-6 max-w-[620px] text-base leading-8 text-white/60 md:text-lg">
                {t.description}
              </p>
            </div>

            <div
              className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-x-0 opacity-100 blur-0"
                  : "translate-x-16 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: "380ms" }}
            >
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#B47CFD_0%,#FF8A5B_100%)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(180,124,253,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_38px_rgba(255,138,91,0.20)]"
                >
                  {t.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .badge-spin {
          animation: badgeSpin 14s linear infinite;
        }

        .badge-float {
          animation: badgeFloat 4.8s ease-in-out infinite;
        }

        @keyframes badgeSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  )
}
