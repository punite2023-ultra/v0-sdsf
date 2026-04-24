"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-black text-white">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-28 sm:px-10 lg:px-16">
          {/* video background: place file at public/Background.mp4 */}
          <video
            className="absolute inset-0 h-full w-full scale-110 animate-[heroVideoFloat_14s_ease-in-out_infinite] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/Background.mp4" type="video/mp4" />
          </video>

          {/* fallback cinematic background if video is unavailable */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_78%,rgba(37,99,235,0.52),transparent_32%),radial-gradient(circle_at_54%_72%,rgba(124,58,237,0.34),transparent_28%),linear-gradient(90deg,#050505_0%,#070912_42%,#111827_100%)]" />

          {/* cinematic lighting layers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_58%,rgba(99,102,241,0.42),transparent_38%),radial-gradient(circle_at_82%_75%,rgba(59,130,246,0.36),transparent_34%),radial-gradient(circle_at_58%_80%,rgba(168,85,247,0.24),transparent_36%)] blur-2xl" />
          <div className="pointer-events-none absolute left-[61%] top-0 hidden h-full w-[2px] -translate-x-1/2 bg-white/75 shadow-[0_0_18px_5px_rgba(219,234,254,0.72),0_0_90px_28px_rgba(59,130,246,0.42)] md:block" />
          <div className="pointer-events-none absolute left-[61%] top-0 hidden h-full w-28 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(147,197,253,0.28),transparent)] blur-2xl md:block" />

          {/* readability overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_34%,rgba(0,0,0,0.3)_68%,rgba(0,0,0,0.06)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,transparent_42%,rgba(0,0,0,0.66)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle,rgba(255,255,255,0.42)_1px,transparent_1px)] [background-size:3px_3px]" />

          {/* glowing floor / bloom */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[230px] w-[88vw] -translate-x-1/2 rounded-t-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,rgba(191,219,254,0.54)_12%,rgba(96,165,250,0.28)_34%,transparent_72%)] blur-[8px]" />

          <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center">
            <div className="max-w-4xl pb-24">
              <p className="animate-[heroFadeUp_0.9s_ease-out_0.05s_both] mb-5 text-xs font-bold uppercase tracking-[0.34em] text-white/55">
                // ABOUT STAR DIGITAL SOLUTIONS
              </p>

              <h1 className="animate-[heroFadeUp_1s_ease-out_0.18s_both] max-w-[12ch] text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Everything App for your teams
              </h1>

              <p className="animate-[heroFadeUp_1s_ease-out_0.32s_both] mt-8 max-w-xl text-base leading-8 text-white/78 sm:text-lg md:text-xl">
                Star Digital Solutions is an all-in-one digital growth partner for brands, creators, and commerce teams.
              </p>

              <div className="animate-[heroFadeUp_1s_ease-out_0.48s_both] mt-12">
                <Link
                  href="/services"
                  className="group inline-flex min-w-[260px] items-center justify-between rounded-full bg-white/85 px-8 py-4 text-sm font-black uppercase tracking-tight text-black shadow-[0_0_30px_rgba(255,120,40,0.78)] transition duration-300 hover:bg-white hover:shadow-[0_0_52px_rgba(255,120,40,1)]"
                >
                  See in Action
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes heroVideoFloat {
              0%, 100% {
                transform: scale(1.08) translate3d(0, 0, 0);
              }
              50% {
                transform: scale(1.14) translate3d(1.5%, -1.5%, 0);
              }
            }

            @keyframes heroFadeUp {
              from {
                opacity: 0;
                transform: translateY(34px);
                filter: blur(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
              }
            }
          `}</style>
        </section>

        {/* CONTENT */}
        <section className="relative bg-black px-6 py-28 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

          <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h2 className="font-mono text-sm font-bold tracking-[0.28em] text-purple-300">
                // MISSION
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                We build adaptive digital systems that evolve with content, commerce, and creator ecosystems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h2 className="font-mono text-sm font-bold tracking-[0.28em] text-blue-300">
                // ARCHITECTURE
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Modular growth frameworks powered by data, execution, and performance optimization.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
