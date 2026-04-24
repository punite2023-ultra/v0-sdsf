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
            className="absolute inset-0 h-full w-full object-cover"
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

          {/* readability overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_33%,rgba(0,0,0,0.26)_68%,rgba(0,0,0,0.1)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,transparent_42%,rgba(0,0,0,0.52)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle,rgba(255,255,255,0.42)_1px,transparent_1px)] [background-size:3px_3px]" />

          <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center">
            <div className="max-w-4xl pb-24">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-white/55">
                // ABOUT STAR DIGITAL SOLUTIONS
              </p>

              <h1 className="max-w-[12ch] text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Everything App for your teams
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/78 sm:text-lg md:text-xl">
                Star Digital Solutions is an all-in-one digital growth partner for brands, creators, and commerce teams.
              </p>

              <div className="mt-12">
                <Link
                  href="/services"
                  className="group inline-flex min-w-[260px] items-center justify-between rounded-full bg-white/85 px-8 py-4 text-sm font-black uppercase tracking-tight text-black shadow-[0_0_28px_rgba(255,98,39,0.75)] transition duration-300 hover:bg-white hover:shadow-[0_0_42px_rgba(255,98,39,0.95)]"
                >
                  See in Action
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
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
