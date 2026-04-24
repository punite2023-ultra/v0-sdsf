"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Gauge,
  Network,
  Play,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Navigation } from "@/components/navigation"

const totalPanels = 5

const serviceCards = [
  { number: "01", title: "Strategy", label: "BRAND SYSTEM", Icon: Sparkles },
  { number: "02", title: "Creators", label: "AFFILIATE + MCN", Icon: Network },
  { number: "03", title: "Commerce", label: "PLATFORM GROWTH", Icon: ShoppingBag },
  { number: "04", title: "Performance", label: "DATA + RESULTS", Icon: Gauge },
]

const brandNames = [
  "L’ORÉAL",
  "MAYBELLINE",
  "NIVEA",
  "PANTENE",
  "NESTLÉ",
  "HUAWEI",
  "PHILIPS",
  "DOVE",
  "OLAY",
  "COLGATE",
]

const whoWeArePillars = [
  {
    title: "Strategy",
    text: "Data-driven systems that align brand direction with measurable growth.",
    Icon: Sparkles,
  },
  {
    title: "Creators",
    text: "Creator partnerships and MCN solutions built for influence and conversion.",
    Icon: Network,
  },
  {
    title: "Commerce",
    text: "E-commerce growth across channels, platforms, and digital storefronts.",
    Icon: ShoppingBag,
  },
  {
    title: "Performance",
    text: "Campaigns optimized for results, scale, visibility, and ROI.",
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

    gsap.to(currentPanel, { scale: 0.96, duration: 0.2, ease: "power2.out" })

    gsap.set(nextPanel, {
      yPercent: 100 * direction,
      opacity: 1,
      scale: 0.94,
      rotateX: -8 * direction,
      transformPerspective: 1000,
      filter: "blur(10px)",
      zIndex: 3,
      pointerEvents: "auto",
    })

    gsap.set(currentPanel, {
      zIndex: 2,
      pointerEvents: "none",
      transformPerspective: 1000,
    })

    gsap
      .timeline({
        defaults: { ease: "power4.inOut", duration: 1 },
        onComplete: () => {
          gsap.set(panelRefs.current, {
            yPercent: 0,
            opacity: 0,
            zIndex: 1,
            pointerEvents: "none",
            filter: "blur(0px)",
            scale: 1,
            rotateX: 0,
          })
          gsap.set(nextPanel, {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            zIndex: 2,
            pointerEvents: "auto",
          })
          currentRef.current = nextIndex
          setCurrent(nextIndex)
          isAnimating.current = false
        },
      })
      .to(currentPanel, {
        yPercent: -60 * direction,
        opacity: 0,
        scale: 0.85,
        rotateX: 8 * direction,
        filter: "blur(18px)",
      })
      .to(
        nextPanel,
        {
          yPercent: 0,
          scale: 1,
          rotateX: 0,
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
          duration: 0.72,
          ease: "power3.out",
        },
        "-=0.58",
      )
      .fromTo(
        nextPanel.querySelectorAll("svg"),
        { scale: 0.6, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      )
  }

  useEffect(() => {
    let lastScroll = 0

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const now = Date.now()
      if (now - lastScroll < 900) return

      if (event.deltaY > 0) goToPanel(currentRef.current + 1)
      if (event.deltaY < 0) goToPanel(currentRef.current - 1)
      lastScroll = now
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
      transformPerspective: 1000,
      transformOrigin: "center center",
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
    gsap.fromTo(
      panelRefs.current[0].querySelectorAll("svg"),
      { scale: 0.7, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, stagger: 0.06, duration: 0.65, ease: "back.out(1.7)" },
    )
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(155,92,255,0.32),transparent_30%),radial-gradient(circle_at_50%_110%,rgba(120,59,255,0.24),transparent_42%),linear-gradient(180deg,#3c1875_0%,#241044_48%,#1b0b31_100%)]" />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen scale-110 animate-[slowZoom_20s_linear_infinite]"
        >
          <source src="/IntroVid.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        {/* PANEL 1: FRAMED HERO */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[0] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6 lg:px-10"
        >
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/25 bg-[#2a1252]/70 shadow-[0_35px_120px_rgba(0,0,0,0.36)] ring-8 ring-violet-500/10">
            <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:155px_100%]" />
            <div className="absolute left-[52%] top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[44%_56%_48%_52%] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.98),rgba(255,123,246,0.8)_24%,rgba(48,83,255,0.86)_58%,rgba(25,8,64,0)_72%)] opacity-95 blur-[1px] animate-[organicFloat_12s_ease-in-out_infinite]" />
            <div className="absolute left-[56%] top-[48%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[80px]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-11 lg:p-16">
              <div className="reveal flex items-center justify-between">
                <div className="text-sm font-black tracking-tight">SDS</div>
                <div className="text-xs font-bold tracking-[0.34em] text-white/70">ABOUT</div>
              </div>

              <div className="grid items-end gap-8 lg:grid-cols-[0.18fr_1fr_0.22fr]">
                <div className="reveal hidden gap-3 lg:flex">
                  <button onClick={() => goToPanel(4)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button onClick={() => goToPanel(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <p className="reveal text-[10px] font-bold uppercase tracking-[0.54em] text-white/72">
                    WELCOME TO STAR DIGITAL SOLUTIONS
                  </p>
                  <h1 className="reveal mt-8 max-w-[13ch] text-5xl font-black leading-[0.93] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                    Aligning the Stars for your Digital Success
                  </h1>
                  <Link href="/services" className="reveal mt-9 inline-flex w-[230px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20">
                    SEE THE VISION
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </Link>
                </div>

                <div className="reveal flex items-end justify-between lg:block lg:text-right">
                  <div className="text-4xl font-black text-white">01</div>
                  <div className="mt-2 text-xs font-bold text-pink-400">/ 05</div>
                  <div className="mt-4 h-0.5 w-12 bg-white lg:ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: WHO WE ARE */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[1] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6 lg:px-10"
        >
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/20 bg-[#1b0b31]/90 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:150px_150px]" />
            <div className="absolute right-[7%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#1b0b31] via-[#1b0b31]/90 to-transparent" />

            <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-8 p-8 sm:p-10 lg:p-14">
              <div className="reveal flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">WHO WE ARE</span>
                  <span className="hidden h-px w-32 bg-gradient-to-r from-pink-400 to-transparent sm:block" />
                </div>
                <span className="text-xs font-bold text-pink-400">02 / 05</span>
              </div>

              <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                <div className="relative z-10 max-w-4xl">
                  <h2 className="reveal max-w-[11ch] text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    WHERE CONTENT, COMMERCE, AND CREATORS BRING BRANDS INTO THE SPOTLIGHT
                  </h2>
                  <p className="reveal mt-7 max-w-2xl text-sm leading-7 text-white/72 lg:text-base lg:leading-8">
                    At Star Digital Solutions, we transform strategy into growth—leveraging e-commerce, creator partnerships, affiliate marketing, and multi-channel networks to drive measurable performance.
                  </p>
                  <p className="reveal mt-5 max-w-2xl text-sm leading-7 text-white/58 lg:text-base lg:leading-8">
                    From established brands to emerging stars, we create campaigns designed not just to shine—but to convert, scale, and lead. Built for brands ready to move faster and stand out in today’s digital landscape.
                  </p>
                </div>

                <div className="reveal relative hidden h-[430px] items-center justify-center lg:flex">
                  <div className="absolute inset-0 rounded-full border border-violet-300/10" />
                  <div className="absolute inset-10 rounded-full border border-pink-300/10" />
                  <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(255,72,220,0.68)_24%,rgba(73,83,255,0.58)_58%,rgba(16,5,43,0.22)_78%)] shadow-[0_0_90px_rgba(236,72,153,0.32)] animate-[organicFloat_14s_ease-in-out_infinite]" />
                  <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#140720]/70 blur-[1px]" />
                  <Sparkles className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-pink-300 drop-shadow-[0_0_24px_rgba(236,72,153,0.9)]" />
                  <div className="absolute bottom-12 left-1/2 h-1 w-64 -translate-x-1/2 rounded-full bg-pink-400/40 blur-sm" />
                </div>
              </div>

              <div className="reveal grid gap-4 md:grid-cols-4">
                {whoWeArePillars.map((pillar) => {
                  const Icon = pillar.Icon
                  return (
                    <div key={pillar.title} className="border-t border-white/10 px-2 pt-5 text-center md:border-l md:border-t-0 md:px-6">
                      <Icon className="mx-auto h-9 w-9 animate-[floatIcon_4s_ease-in-out_infinite] text-pink-300" />
                      <h3 className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white">{pillar.title}</h3>
                      <p className="mt-3 text-xs leading-6 text-white/55">{pillar.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: BRANDS FEATURETTE */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[2] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6 lg:px-10"
        >
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/20 bg-[#1b0b31]/90 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:150px_100%]" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-16">
              <div className="reveal flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">TRUSTED BY BRANDS</span>
                <span className="text-xs font-bold text-pink-400">03 / 05</span>
              </div>

              <div className="reveal grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12">
                {brandNames.map((brand) => (
                  <div
                    key={brand}
                    className="flex h-20 w-full items-center justify-center border border-white/10 bg-white/[0.03] text-center text-xs font-bold uppercase tracking-[0.28em] text-white/60 transition duration-300 hover:border-pink-400/40 hover:text-pink-300"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              <div className="reveal mx-auto max-w-2xl text-center">
                <p className="text-sm leading-7 text-white/62">
                  From established global names to emerging market stars, we help brands launch, scale, and shine across the digital platforms that matter most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 4: CARD ROW */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[3] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6 lg:px-10"
        >
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/16 bg-[#1d0c38]/88 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="grid h-full lg:grid-cols-[0.8fr_repeat(4,1fr)]">
              <div className="reveal flex h-full items-center justify-center gap-3 border-r border-white/10 px-8">
                <button onClick={() => goToPanel(2)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button onClick={() => goToPanel(4)} className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {serviceCards.map((item) => {
                const Icon = item.Icon
                return (
                  <Link key={item.number} href="/services" className="reveal group relative h-full border-r border-white/10 p-9 transition duration-500 hover:bg-violet-500/10">
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.16),transparent_58%)]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.38em] text-white/85">{item.number}</div>
                        <div className="mt-8 h-0.5 w-5 bg-pink-400" />
                      </div>

                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-pink-300 transition duration-500 group-hover:scale-110 group-hover:border-pink-400/40">
                        <Icon className="h-11 w-11 animate-[floatIcon_4s_ease-in-out_infinite]" />
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

        {/* PANEL 5: CENTER DETAIL */}
        <section
          ref={(element) => {
            if (element) panelRefs.current[4] = element
          }}
          className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6 lg:px-10"
        >
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/20 bg-[#21103f]/88 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-[22%] rounded-[46%_54%_40%_60%] bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.96),rgba(255,121,246,0.78)_28%,rgba(48,83,255,0.82)_64%,transparent_76%)] blur-[1px] animate-[organicFloat_12s_ease-in-out_infinite]" />
            <div className="absolute left-1/2 top-[12%] h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-white/10" />

            <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-20 text-center">
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

          @keyframes slowZoom {
            0%, 100% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1.2);
            }
          }

          @keyframes floatIcon {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </main>
    </>
  )
}
