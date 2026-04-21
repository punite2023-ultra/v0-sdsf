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
             Aligning the Stars 
              <br />
              for Your Digital Success
            </>
          ),
          description:
            "Star Digital Solutions helps brands grow through e-commerce strategy, creator partnerships, affiliate marketing, and multi-channel network execution.",
          primary: "Get Started",
          secondary: "Learn More",
        }
      : {
          badge: "WELCOME TO STAR DIGITAL",
          title: (
            <>
              Aligning the Stars 
              <br />
              for Your Digital Success
            </>
          ),
          description:
            "Star Digital Solutions combines strategy, creative execution, and digital growth systems to help brands build a stronger presence and better results.",
          primary: "Get Started",
          secondary: "Learn More",
        }

  return (
    <section className="hero-wrap relative overflow-hidden border-b border-white/10 bg-[#080015] text-white">
      {/* VIDEO */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(140,69,255,0.16),transparent_22%),linear-gradient(180deg,rgba(8,0,21,0.66)_0%,rgba(8,0,21,0.94)_72%,rgba(8,0,21,1)_100%)]" />

      {/* LIGHT PATHS / FLOW LINES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
        <div className="hero-path hero-path-1" />
        <div className="hero-path hero-path-2" />
        <div className="hero-path hero-path-3" />
      </div>

      {/* GLOW BLOBS */}
      <div className="pointer-events-none absolute left-1/2 top-[16%] h-[320px] w-[760px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[180px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[90px]" />

      <div className="relative z-10 px-4 pt-28 md:px-8 md:pt-32 lg:pt-[7em]">
        <div className="mx-auto max-w-[720px]">
          <div className="px-4 py-16 md:px-8 md:py-20 lg:px-8 lg:py-[7em]">
            <div className="text-center">
              {/* BADGE */}
              <div className="badge-hero inline-flex items-center justify-center rounded-full px-4 py-[7px] text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(225,23,138,0.18)] md:px-5 md:text-[11px]">
                <span className="relative z-[2]">{t.badge}</span>
              </div>

              {/* TITLE */}
              <h1 className="hero-title mx-auto mt-6 max-w-5xl text-[42px] font-extrabold leading-[0.92] tracking-[-0.045em] text-white sm:text-[56px] md:text-[68px] lg:text-[78px]">
                {t.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="hero-copy mx-auto mt-5 max-w-[620px] text-[13px] leading-6 text-white/60 sm:text-[14px] sm:leading-7 md:text-[15px]">
                {t.description}
              </p>

              {/* BUTTONS */}
              <div className="hero-actions mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#B47CFD_0%,#E8178A_100%)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(180,124,253,0.32)]"
                >
                  {t.primary}
                </Link>

                <Link
                  href="/about"
                  className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/8"
                >
                  {t.secondary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .badge-hero {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background:
            linear-gradient(
              90deg,
              rgba(180, 124, 253, 0.22) 0%,
              rgba(232, 23, 138, 0.18) 50%,
              rgba(180, 124, 253, 0.22) 100%
            );
          backdrop-filter: blur(10px);
          animation: badgeFloat 4s ease-in-out infinite;
        }

        .badge-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.16) 45%,
            transparent 70%
          );
          transform: translateX(-140%);
          animation: badgeShine 3.8s ease-in-out infinite;
        }

        .hero-title {
          opacity: 0;
          transform: translateY(22px);
          filter: blur(10px);
          animation: heroReveal 0.9s ease forwards;
          text-wrap: balance;
        }

        .hero-copy {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(8px);
          animation: heroReveal 0.9s ease forwards;
          animation-delay: 0.16s;
        }

        .hero-actions {
          opacity: 0;
          transform: translateY(18px);
          filter: blur(8px);
          animation: heroReveal 0.9s ease forwards;
          animation-delay: 0.28s;
        }

        .hero-path {
          position: absolute;
          left: 50%;
          width: 1200px;
          height: 240px;
          border-radius: 999px;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          filter: blur(0.2px);
        }

        .hero-path-1 {
          top: 18%;
          background:
            radial-gradient(circle at center, rgba(180, 124, 253, 0.08), transparent 55%);
          box-shadow:
            0 0 60px rgba(180, 124, 253, 0.08),
            inset 0 0 30px rgba(255, 255, 255, 0.02);
          animation: pathDrift1 11s ease-in-out infinite;
        }

        .hero-path-2 {
          top: 28%;
          width: 1400px;
          height: 280px;
          border-color: rgba(255, 255, 255, 0.035);
          background:
            radial-gradient(circle at center, rgba(232, 23, 138, 0.06), transparent 58%);
          animation: pathDrift2 14s ease-in-out infinite;
        }

        .hero-path-3 {
          top: 24%;
          width: 1000px;
          height: 190px;
          border-color: rgba(255, 255, 255, 0.04);
          animation: pathDrift3 9s ease-in-out infinite;
        }

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes badgeShine {
          0% {
            transform: translateX(-140%);
          }
          50% {
            transform: translateX(140%);
          }
          100% {
            transform: translateX(140%);
          }
        }

        @keyframes pathDrift1 {
          0%,
          100% {
            transform: translateX(-50%) scaleX(1) translateY(0px);
            opacity: 0.7;
          }
          50% {
            transform: translateX(-50%) scaleX(1.04) translateY(8px);
            opacity: 1;
          }
        }

        @keyframes pathDrift2 {
          0%,
          100% {
            transform: translateX(-50%) scaleX(1) translateY(0px);
            opacity: 0.45;
          }
          50% {
            transform: translateX(-50%) scaleX(1.06) translateY(-10px);
            opacity: 0.8;
          }
        }

        @keyframes pathDrift3 {
          0%,
          100% {
            transform: translateX(-50%) scaleX(1) translateY(0px);
            opacity: 0.35;
          }
          50% {
            transform: translateX(-50%) scaleX(1.03) translateY(6px);
            opacity: 0.65;
          }
        }

        @media (max-width: 768px) {
          .hero-path {
            width: 760px;
          }

          .hero-path-2 {
            width: 860px;
          }

          .hero-path-3 {
            width: 640px;
          }
        }
      `}</style>
    </section>
  )
}
