"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Raleway } from "next/font/google"
import {
  ArrowLeft,
  ArrowRight,
  Gauge,
  Handshake,
  Network,
  Play,
  RadioTower,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Navigation } from "@/components/navigation"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

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

const integrationNodes = [
  {
    title: "E-Commerce",
    text: "Scale across stores and channels.",
    Icon: ShoppingBag,
    className: "left-[8%] top-[28%]",
  },
  {
    title: "Creators",
    text: "Creator partnerships that convert.",
    Icon: Network,
    className: "left-[8%] top-[50%]",
  },
  {
    title: "Affiliate",
    text: "Networks that scale reach.",
    Icon: Handshake,
    className: "left-[12%] bottom-[10%]",
  },
  {
    title: "MCN",
    text: "Multi-channel creator growth.",
    Icon: RadioTower,
    className: "right-[8%] top-[28%]",
  },
  {
    title: "Performance",
    text: "Data-driven scaling systems.",
    Icon: Gauge,
    className: "right-[8%] top-[50%]",
  },
  {
    title: "Strategy",
    text: "Structured brand growth systems.",
    Icon: Sparkles,
    className: "right-[12%] bottom-[10%]",
  },
]

function StarMark() {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="h-14 w-14 drop-shadow-[0_0_22px_rgba(255,255,255,0.55)]"
    >
      <path
        fill="white"
        d="M60 6.5 72.7 45.2 113.5 45.2 80.5 69 93.2 107.5 60 83.7 26.8 107.5 39.5 69 6.5 45.2 47.3 45.2 60 6.5Z"
      />
      <path
        fill="white"
        opacity="0.72"
        d="M60 23.2 67.4 46.1 91.6 46.1 72 60.2 79.5 83 60 68.9 40.5 83 48 60.2 28.4 46.1 52.6 46.1 60 23.2Z"
      />
    </svg>
  )
}

export default function AboutPage() {
  const panelRefs = useRef<HTMLDivElement[]>([])
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const isAnimating = useRef(false)

  const goToPanel = (nextIndex: number) => {
    if (isAnimating.current) return
    if (nextIndex < 0 || nextIndex >= totalPanels) return
    if (nextIndex === currentRef.current) return

    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    if (!currentPanel || !nextPanel) return

    isAnimating.current = true
    const direction = nextIndex > currentRef.current ? 1 : -1

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
        nextPanel.querySelectorAll(".circuit-line"),
        { strokeDashoffset: 900, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .fromTo(
        nextPanel.querySelectorAll(".integration-node-inner"),
        { opacity: 0, scale: 0.65, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.11,
          duration: 0.55,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      )
      .fromTo(
        nextPanel.querySelectorAll("svg:not(.circuit-map)"),
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

    if (panelRefs.current[0]) {
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
    }

    gsap.to(".integration-node-inner", {
      boxShadow: "0 0 42px rgba(236,72,153,0.28)",
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.16,
        from: "random",
      },
    })
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
                  <button
                    onClick={() => goToPanel(4)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => goToPanel(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <p className="reveal text-[10px] font-bold uppercase tracking-[0.54em] text-white/72">
                    WELCOME TO STAR DIGITAL SOLUTIONS
                  </p>
                  <h1
                    className={`${raleway.className} reveal mt-8 max-w-[13ch] text-5xl font-extrabold uppercase leading-[0.93] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl`}
                  >
                    Aligning the Stars for your Digital Success
                  </h1>
                  <Link
                    href="/services"
                    className="reveal mt-9 inline-flex w-[230px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20"
                  >
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
          <div className="relative h-[82vh] w-full max-w-[1500px] overflow-hidden rounded-[14px] border border-violet-400/20 bg-[#0f0622]/92 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:95px_95px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(168,85,247,0.22),transparent_42%),radial-gradient(circle_at_50%_78%,rgba(236,72,153,0.14),transparent_42%)]" />

            <svg
              className="circuit-map pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1500 820"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="pinkGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g
                fill="none"
                stroke="rgba(236,72,153,0.42)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
                filter="url(#pinkGlow)"
              >
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M730 435 H540 C500 435 500 340 460 340 H330" />
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M730 475 H530 C485 475 485 470 440 470 H330" />
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M730 515 H590 C535 515 535 670 480 670 H430" />
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M770 435 H960 C1000 435 1000 340 1040 340 H1170" />
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M770 475 H980 C1030 475 1030 470 1080 470 H1170" />
                <path className="circuit-line" pathLength="900" strokeDasharray="900" d="M770 515 H910 C965 515 965 670 1020 670 H1070" />
              </g>
              <g fill="rgba(236,72,153,0.95)" filter="url(#pinkGlow)">
                {[
                  [540, 435],
                  [530, 475],
                  [590, 515],
                  [960, 435],
                  [980, 475],
                  [910, 515],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} className="signal-dot" cx={cx} cy={cy} r="4" />
                ))}
              </g>
            </svg>

            <div className="absolute left-1/2 top-[50%] z-10 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] border border-pink-400/45 bg-[#140720]/82 shadow-[0_0_55px_rgba(236,72,153,0.45)] backdrop-blur-xl">
              <StarMark />
              <span className="absolute inset-0 rounded-[26px] border border-pink-400/40 animate-ping opacity-20" />
            </div>

            <div className="relative z-20 flex h-full flex-col items-center px-8 text-center">
              <div className="reveal absolute left-8 top-8 text-xl font-semibold tracking-[0.7em] text-white/85 lg:left-14 lg:top-12">
                SDS<span className="ml-2 text-pink-400">✦</span>
              </div>
              <div className="reveal absolute right-8 top-8 text-sm font-bold tracking-[0.18em] lg:right-14 lg:top-12">
                <span className="text-pink-400">02</span>
                <span className="text-white/70"> / 05</span>
              </div>

              <div className="reveal mt-[7vh] max-w-[760px]">
                <p className="text-xs font-bold uppercase tracking-[0.38em] text-pink-300">[ WHO WE ARE ]</p>
                <h2
                  className={`${raleway.className} mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl`}
                >
                  Built to Make Brands Shine—with Results That Scale
                </h2>
                <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/66">
                  We connect strategy, creators, commerce, and performance channels into one growth system built to turn attention into measurable brand momentum.
                </p>
              </div>

              {integrationNodes.map((node) => {
                const Icon = node.Icon
                const isRight = node.className.includes("right")
                return (
                  <div key={node.title} className={`integration-node reveal absolute hidden lg:block ${node.className}`}>
                    <div className={`integration-node-inner flex items-center gap-4 ${isRight ? "flex-row-reverse text-right" : "text-left"}`}>
                      <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-2xl border border-violet-300/28 bg-[#140720]/78 text-pink-300 shadow-[0_0_26px_rgba(168,85,247,0.18)] backdrop-blur-xl">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="max-w-[180px]">
                        <h3 className={`${raleway.className} text-sm font-extrabold uppercase tracking-[0.14em] text-white`}>
                          {node.title}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-white/58">{node.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="reveal absolute bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-pink-400/80" />
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
                <button
                  onClick={() => goToPanel(2)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-pink-400 hover:text-pink-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goToPanel(4)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400 bg-pink-500/10 text-pink-300 transition hover:bg-pink-500/20"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {serviceCards.map((item) => {
                const Icon = item.Icon
                return (
                  <Link
                    key={item.number}
                    href="/services"
                    className="reveal group relative h-full border-r border-white/10 p-9 transition duration-500 hover:bg-violet-500/10"
                  >
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
              <Link
                href="/contact"
                className="reveal mt-8 inline-flex w-[240px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20"
              >
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index ? "w-12 bg-pink-400" : "w-5 bg-white/25 hover:bg-white/55"
              }`}
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
