"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Navigation } from "@/components/navigation"

const panels = [
  {
    label: "ABOUT STAR DIGITAL SOLUTIONS",
    title: "Creating Digital Momentum",
    body: "A digital growth partner built for brands, creators, commerce teams, and modern campaigns.",
    cta: "Watch System",
    href: "/services",
  },
  {
    label: "OUR GROWTH SYSTEM",
    title: "Strategy. Creators. Commerce. Performance.",
    body: "We connect brand systems, creator networks, platform growth, and performance data into one repeatable growth engine.",
    cta: "Explore Services",
    href: "/services",
  },
  {
    label: "DIGITAL GROWTH PLATFORM",
    title: "SDS",
    body: "Built for content, commerce, creators, and measurable momentum.",
    cta: "Start Growth",
    href: "/contact",
  },
]

export default function AboutPage() {
  const panelRefs = useRef<HTMLDivElement[]>([])
  const currentRef = useRef(0)
  const isAnimating = useRef(false)
  const [current, setCurrent] = useState(0)

  const goToPanel = (nextIndex: number) => {
    if (isAnimating.current || nextIndex < 0 || nextIndex >= panels.length || nextIndex === currentRef.current) return

    isAnimating.current = true
    const direction = nextIndex > currentRef.current ? 1 : -1
    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    gsap.set(nextPanel, { yPercent: 100 * direction, opacity: 1, scale: 0.98, zIndex: 3 })
    gsap.set(currentPanel, { zIndex: 2 })

    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
      onComplete: () => {
        gsap.set(panelRefs.current, { yPercent: 0, opacity: 0, zIndex: 1 })
        gsap.set(nextPanel, { opacity: 1, scale: 1, zIndex: 2 })
        currentRef.current = nextIndex
        setCurrent(nextIndex)
        isAnimating.current = false
      },
    })
      .to(currentPanel, { yPercent: -40 * direction, opacity: 0, scale: 0.92 })
      .to(nextPanel, { yPercent: 0, scale: 1 }, "<")
      .fromTo(nextPanel.querySelectorAll(".reveal"), { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.75 }, "-=0.55")
  }

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      goToPanel(currentRef.current + (event.deltaY > 0 ? 1 : -1))
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
    gsap.set(panelRefs.current, { opacity: 0, zIndex: 1 })
    gsap.set(panelRefs.current[0], { opacity: 1, zIndex: 2 })
    gsap.fromTo(panelRefs.current[0].querySelectorAll(".reveal"), { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.9 })
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#160728] text-white">
        <div className="absolute inset-0 z-0 bg-purple-950" />
        <div className="absolute inset-0 z-[1] bg-black/55" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-br from-purple-900/70 via-violet-950/70 to-black" />
        <div className="absolute inset-0 z-[3] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />

        {panels.map((panel, index) => (
          <section
            key={panel.label}
            ref={(element) => {
              if (element) panelRefs.current[index] = element
            }}
            className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-16 sm:px-8 lg:px-14"
          >
            <div className="relative h-[70vh] w-full max-w-[1280px] overflow-hidden rounded-xl border border-violet-300/25 bg-purple-950/60 p-8 shadow-2xl backdrop-blur-sm sm:p-12 lg:p-14">
              <div className="absolute left-[58%] top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="absolute left-[58%] top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="reveal flex items-center justify-between">
                  <div className="text-sm font-black tracking-tight">SDS</div>
                  <div className="text-xs font-bold tracking-[0.34em] text-white/70">
                    {String(index + 1).padStart(2, "0")} / 03
                  </div>
                </div>

                {index === 1 ? (
                  <div className="reveal grid gap-4 lg:grid-cols-4">
                    {["Strategy", "Creators", "Commerce", "Performance"].map((item, cardIndex) => (
                      <div key={item} className="min-h-[280px] border border-white/10 bg-white/5 p-6 transition hover:bg-violet-500/10">
                        <div className="text-xs font-bold tracking-[0.38em] text-white/70">0{cardIndex + 1}</div>
                        <div className="mt-8 h-0.5 w-5 bg-pink-400" />
                        <h3 className="mt-28 text-2xl font-black text-white">{item}</h3>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={index === 2 ? "text-center" : ""}>
                    <p className="reveal text-xs font-bold uppercase tracking-[0.42em] text-white/70">{panel.label}</p>
                    <h1 className="reveal mt-8 max-w-[12ch] text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                      {panel.title}
                    </h1>
                    <p className="reveal mt-7 max-w-2xl text-base leading-8 text-white/75">{panel.body}</p>
                    <Link href={panel.href} className="reveal mt-9 inline-flex w-[230px] items-center justify-between border border-pink-400/80 bg-pink-500/10 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-pink-500/20">
                      {panel.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {panels.map((_, index) => (
            <button key={index} onClick={() => goToPanel(index)} className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-12 bg-pink-400" : "w-5 bg-white/25 hover:bg-white/55"}`} />
          ))}
        </div>
      </main>
    </>
  )
}
