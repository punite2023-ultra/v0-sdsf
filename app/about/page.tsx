"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white overflow-hidden">

        {/* GRID */}
        <div className="fixed inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">

          {/* FAKE BLOB (CSS) */}
          <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-70 animate-pulse" />

          <div className="relative z-10 text-center">
            <h1 className="font-mono text-6xl font-bold">
              ORGANIC INTELLIGENCE
            </h1>
            <p className="mt-6 text-white/60">
              Biocomputer-driven digital systems
            </p>
          </div>

        </section>

        {/* CONTENT */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="font-mono text-purple-400">// MISSION</h2>
              <p className="mt-4 text-white/70">
                We build adaptive digital systems that evolve with content,
                commerce, and creator ecosystems.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="font-mono text-blue-400">// ARCHITECTURE</h2>
              <p className="mt-4 text-white/70">
                Modular growth frameworks powered by data, execution,
                and performance optimization.
              </p>
            </div>

          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
