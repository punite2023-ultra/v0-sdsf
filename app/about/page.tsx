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
      .fromTo(
        nextPanel.querySelectorAll(".reveal"),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.75 },
        "-=0.55"
      )
  }

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      goToPanel(currentRef.current + (event.deltaY > 0 ? 1 : -1))
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useGSAP(() => {
    gsap.set(panelRefs.current, { opacity: 0, zIndex: 1 })
    gsap.set(panelRefs.current[0], { opacity: 1, zIndex: 2 })
    gsap.fromTo(
      panelRefs.current[0].querySelectorAll(".reveal"),
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.9 }
    )
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#160728] text-white">

        {/* BACKGROUND (original look) */}
        <div className="absolute inset-0 bg-[#160728]" />
        <div className="absolute inset-0 bg-purple-950/70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />

        {panels.map((panel, index) => (
          <section
            key={index}
            ref={(el) => { if (el) panelRefs.current[index] = el }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-[80%] max-w-[1000px] p-10 bg-purple-950/60 border border-white/10 backdrop-blur">

              <p className="reveal text-xs tracking-widest text-white/60">
                {panel.label}
              </p>

              <h1 className="reveal text-5xl font-bold mt-6">
                {panel.title}
              </h1>

              <p className="reveal mt-6 text-white/70">
                {panel.body}
              </p>

              <Link href={panel.href} className="reveal mt-6 inline-flex items-center gap-2 border border-pink-400 px-5 py-3">
                {panel.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </section>
        ))}

      </main>
    </>
  )
}
