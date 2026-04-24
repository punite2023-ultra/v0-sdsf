"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  const beamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const animate = () => {
      frame += 0.02
      if (beamRef.current) {
        beamRef.current.style.transform = `translateX(-50%) translateY(${Math.sin(frame) * 25}px)`
        beamRef.current.style.opacity = `${0.7 + Math.sin(frame) * 0.2}`
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-black text-white">
        <section className="relative min-h-screen overflow-hidden">

          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-[heroFloat_12s_ease-in-out_infinite]"
          >
            <source src="/Background.mp4" type="video/mp4" />
          </video>

          {/* DYNAMIC LIGHT BLOOM */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.45),transparent_40%)] blur-3xl" />

          {/* ANIMATED BEAM */}
          <div
            ref={beamRef}
            className="absolute left-[60%] top-0 h-full w-[2px] bg-white shadow-[0_0_30px_10px_rgba(147,197,253,0.9),0_0_120px_40px_rgba(59,130,246,0.7)]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-16">
            <div className="max-w-4xl">

              <p className="opacity-0 animate-[fadeUp_1s_ease-out_0.2s_forwards] text-xs tracking-[0.3em] text-white/60 mb-6">
                // ABOUT STAR DIGITAL SOLUTIONS
              </p>

              <h1 className="opacity-0 animate-[fadeUp_1s_ease-out_0.4s_forwards] text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                Everything App for your teams
              </h1>

              <p className="opacity-0 animate-[fadeUp_1s_ease-out_0.6s_forwards] mt-8 text-lg text-white/70 max-w-xl">
                Star Digital Solutions is an all-in-one digital growth partner for brands, creators, and commerce teams.
              </p>

              <div className="opacity-0 animate-[fadeUp_1s_ease-out_0.8s_forwards] mt-12">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-between rounded-full bg-white text-black px-8 py-4 font-bold shadow-[0_0_50px_rgba(255,120,40,0.9)] hover:shadow-[0_0_80px_rgba(255,120,40,1)] transition"
                >
                  See in Action
                  <ArrowRight className="ml-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>

            </div>
          </div>

          <style jsx global>{`
            @keyframes heroFloat {
              0%,100% { transform: scale(1.05) translateY(0px); }
              50% { transform: scale(1.1) translateY(-25px); }
            }

            @keyframes fadeUp {
              from { opacity:0; transform: translateY(40px); filter: blur(6px); }
              to { opacity:1; transform: translateY(0); filter: blur(0); }
            }
          `}</style>

        </section>

        <SiteFooter />
      </main>
    </>
  )
}
