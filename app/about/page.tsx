"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Dna,
  Gauge,
  Network,
  Play,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Navigation } from "@/components/navigation"

const totalPanels = 3

const serviceCards = [
  {
    number: "01",
    title: "Strategy",
    label: "BRAND SYSTEM",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Creators",
    label: "AFFILIATE + MCN",
    Icon: Network,
  },
  {
    number: "03",
    title: "Commerce",
    label: "PLATFORM GROWTH",
    Icon: ShoppingBag,
  },
  {
    number: "04",
    title: "Performance",
    label: "DATA + RESULTS",
    Icon: Gauge,
  },
]

export default function AboutPage() {
  const panelRefs = useRef<HTMLDivElement[]>([])
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const isAnimating = useRef(false)

  const goToPanel = (nextIndex: number) => {
    if (isAnimating.current) return
    if (nextIndex < 0 || nextIndex >= totalPanels) return
    if (nextIndex === currentRef.current) return

    isAnimating.current = true
    const direction = nextIndex > currentRef.current ? 1 : -1
    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    gsap.set(nextPanel, {
      yPercent: 100 * direction,
      opacity: 1,
      scale: 0.98,
      filter: "blur(10px)",
      zIndex: 3,
      pointerEvents: "auto",
    })

    gsap.set(currentPanel, {
      zIndex: 2,
      pointerEvents: "none",
    })

    gsap
      .timeline({
        defaults: { ease: "power4.inOut", duration: 1.05 },
        onComplete: () => {
          gsap.set(panelRefs.current, {
            yPercent: 0,
            opacity: 0,
            zIndex: 1,
            pointerEvents: "none",
            filter: "blur(0px)",
          })
          gsap.set(nextPanel, {
            opacity: 1,
            scale: 1,
            zIndex: 2,
            pointerEvents: "auto",
          })
          currentRef.current = nextIndex
          setCurrent(nextIndex)
          isAnimating.current = false
        },
      })
      .to(currentPanel, {
        yPercent: -42 * direction,
        opacity: 0,
        scale: 0.92,
        filter: "blur(14px)",
      })
      .to(
        nextPanel,
        {
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        "<",
      )
      .fromTo(
        nextPanel.querySelectorAll(".reveal"),
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 0.78,
          ease: "power3.out",
        },
        "-=0.62",
      )
  }

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (event.deltaY > 0) goToPanel(currentRef.current + 1)
      if (event.deltaY < 0) goToPanel(currentRef.current - 1)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") goToPanel(currentRef.current + 1)
      if (event.key === "ArrowUp") goToPanel(currentRef.current - 1)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useGSAP(() => {
    gsap.set(panelRefs.current, {
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    })
    gsap.set(panelRefs.current[0], {
      opacity: 1,
      zIndex: 2,
      pointerEvents: "auto",
    })
    gsap.fromTo(
      panelRefs.current[0].querySelectorAll(".reveal"),
      { opacity: 0, y: 36, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
      },
    )
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(155,92,255,0.32),transparent_30%),radial-gradient(circle_at_50%_110%,rgba(120,59,255,0.24),transparent_42%),linear-gradient(180deg,#3c1875_0%,#241044_48%,#1b0b31_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        {/* PANEL 1: FRAMED HERO */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[0] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-5 pt-16 sm:px-8 lg:px-14"
        >
          <div className="relative h-[70vh] w-full max-w-[1280px] overflow-hidden rounded-[10px] border border-violet-400/25 bg-[#2a1252]/70 shadow-[0_35px_120px_rgba(0,0,0,0.36)] ring-8 ring-violet-500/10">
            <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:155px_100%]" />
            <div className="absolute left-[52%] top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[44%_56%_48%_52%] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.98),rgba(255,123,246,0.8)_24%,rgba(48,83,255,0.86)_58%,rgba(25,8,64,0)_72%)] opacity-95 blur-[1px] animate-[organicFloat_9s_ease-in-out_infinite]" />
            <div className="absolute left-[56%] top-[48%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[80px]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div className="reveal flex items-center justify-between">
                <div className="text-sm font-black tracking-tight">SDS</div>
                <div className="text-xs font-bold tracking-[0.34em] text-white/70">ABOUT</div>
              </div>

              <div className="grid items-end gap-8 lg:grid-cols-[0.18fr_1fr_0.22fr]">
                <div className="reveal hidden gap-3 lg:flex">
                  <button onClick={() => goToPanel(2)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button onClick={() => goToPanel(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <p className="reveal text-[10px] font-bold uppercase tracking-[0.54em] text-white/72">
                    HACKING THE GROWTH SYSTEM
                  </p>
                  <h1 className="reveal mt-8 max-w-[11ch] text-5xl font-black leading-[0.93] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                    Creating Digital Momentum
                  </h1>
                  <Link href="/services" className="reveal mt-9 inline-flex w-[230px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20">
                    Watch System
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </Link>
                </div>

                <div className="reveal flex items-end justify-between lg:block lg:text-right">
                  <div className="text-4xl font-black text-white">01</div>
                  <div className="mt-2 text-xs font-bold text-pink-400">/ 03</div>
                  <div className="mt-4 h-0.5 w-12 bg-white lg:ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: CARD ROW */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[1] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-5 pt-16 sm:px-8 lg:px-14"
        >
          <div className="relative w-full max-w-[1280px] overflow-hidden rounded-[10px] border border-violet-400/16 bg-[#1d0c38]/88 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-[0.8fr_repeat(4,1fr)]">
              <div className="reveal flex min-h-[560px] items-center justify-center gap-3 border-r border-white/10 px-8">
                <button onClick={() => goToPanel(0)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button onClick={() => goToPanel(2)} className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {serviceCards.map((item) => {
                const Icon = item.Icon
                return (
                  <Link key={item.number} href="/services" className="reveal group relative min-h-[560px] border-r border-white/10 p-9 transition duration-500 hover:bg-violet-500/10">
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.16),transparent_58%)]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.38em] text-white/85">{item.number}</div>
                        <div className="mt-8 h-0.5 w-5 bg-pink-400" />
                      </div>

                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-pink-300 transition duration-500 group-hover:scale-110 group-hover:border-pink-400/40">
                        <Icon className="h-11 w-11" />
                      </div>

                      <div>
                        <h3 className="text-3xl font-black text-white">{item.title}</h3>
                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400">{item.label}</p>
                      </div>

                      <ArrowRight className="h-4 w-4 text-white/70 transition group-hover:translate-x-1 group-hover:text-pink-300" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* PANEL 3: CENTER DETAIL */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[2] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-5 pt-16 sm:px-8 lg:px-14"
        >
          <div className="relative h-[70vh] w-full max-w-[1280px] overflow-hidden rounded-[10px] border border-violet-400/20 bg-[#21103f]/88 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 -translate-y-[28%] rounded-[46%_54%_40%_60%] bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.96),rgba(255,121,246,0.78)_28%,rgba(48,83,255,0.82)_64%,transparent_76%)] blur-[1px] animate-[organicFloat_10s_ease-in-out_infinite]" />
            <div className="absolute left-1/2 top-[12%] h-[720px] w-[720px] -translate-x-1/2 rounded-full border border-white/10" />

            <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center">
              <p className="reveal mb-12 text-[10px] font-bold uppercase tracking-[1.2em] text-white/70">
                BETTER THAN ORDINARY GROWTH
              </p>
              <h2 className="reveal text-6xl font-black tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
                SDS
              </h2>
              <p className="reveal mt-4 text-[10px] font-bold uppercase tracking-[0.44em] text-pink-400">
                DIGITAL GROWTH PLATFORM
              </p>
              <Link href="/contact" className="reveal mt-8 inline-flex w-[240px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20">
                Pre-Order Growth
                <Play className="h-3.5 w-3.5 fill-current" />
              </Link>
            </div>
          </div>
        </section>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {Array.from({ length: totalPanels }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPanel(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-12 bg-pink-400" : "w-5 bg-white/25 hover:bg-white/55"}`}
              aria-label={`Go to panel ${index + 1}`}
            />
          ))}
        </div>

        <style jsx global>{`
          @keyframes organicFloat {
            0%, 100% {
              transform: translate(-50%, -50%) rotate(-4deg) scale(1);
              border-radius: 44% 56% 48% 52%;
            }
            50% {
              transform: translate(-48%, -53%) rotate(8deg) scale(1.08);
              border-radius: 56% 44% 58% 42%;
            }
          }
        `}</style>
      </main>
    </>
  )
}
