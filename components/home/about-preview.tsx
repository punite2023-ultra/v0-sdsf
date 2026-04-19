"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutPreview() {
  const { language } = useLanguage()

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
          badgeTop: "PREMIUM SERVICES",
          badgeBottom: "AND SUPPORT",
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
          badgeTop: "PREMIUM SERVICES",
          badgeBottom: "AND SUPPORT",
        }

  return (
    <section className="relative overflow-hidden bg-[#070012] py-20 md:py-24 lg:py-28">
      {/* subtle top line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/8" />

      {/* background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(180,124,253,0.08),transparent_28%)]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* IMAGE SIDE */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                <div className="relative overflow-hidden rounded-[24px]">
                  <div className="relative aspect-[1.36/1]">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&auto=format&fit=crop&q=80"
                      alt="Team collaboration"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* soft image overlay like the reference */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(7,0,18,0.08)_100%)]" />
                </div>
              </div>

              {/* round badge */}
              <div className="absolute right-[-6px] top-[-10px] z-20 md:right-[-12px] md:top-[-18px]">
                <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#C78BFF_0%,#A95FF0_100%)] shadow-[0_18px_45px_rgba(169,95,240,0.35)] md:h-[128px] md:w-[128px]">
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
                          {`${t.badgeTop} • ${t.badgeBottom} • `}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="h-[54px] w-[54px] rounded-full border border-white/50 bg-white/10 backdrop-blur-sm md:h-[62px] md:w-[62px]" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* TEXT SIDE */}
          <ScrollReveal direction="right" delay={120}>
            <div className="max-w-[680px]">
              <div className="about-animate about-animate-1">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff5ab7]">
                  {t.eyebrow}
                </p>
              </div>

              <div className="about-animate about-animate-2">
                <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
                  {t.title}
                </h2>
              </div>

              <div className="about-animate about-animate-3">
                <p className="mt-6 max-w-[620px] text-base leading-8 text-white/60 md:text-lg">
                  {t.description}
                </p>
              </div>

              <div className="about-animate about-animate-4">
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
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .badge-spin {
          animation: badgeSpin 14s linear infinite;
        }

        .about-animate {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(8px);
          animation: aboutReveal 0.9s ease forwards;
        }

        .about-animate-1 {
          animation-delay: 0.05s;
        }

        .about-animate-2 {
          animation-delay: 0.16s;
        }

        .about-animate-3 {
          animation-delay: 0.28s;
        }

        .about-animate-4 {
          animation-delay: 0.38s;
        }

        @keyframes badgeSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutReveal {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  )
}
