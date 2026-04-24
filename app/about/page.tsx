"use client"

// FIXED PANEL INDEX VERSION (keeping your original design intact + new section)

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

export default function AboutPage() {
  const panelRefs = useRef<HTMLDivElement[]>([])
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const isAnimating = useRef(false)

  const goToPanel = (nextIndex: number) => {
    if (isAnimating.current) return
    if (nextIndex < 0 || nextIndex >= totalPanels) return

    isAnimating.current = true

    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      onComplete: () => {
        currentRef.current = nextIndex
        setCurrent(nextIndex)
        isAnimating.current = false
      },
    })
      .to(currentPanel, { opacity: 0, y: -80 })
      .fromTo(nextPanel, { opacity: 0, y: 80 }, { opacity: 1, y: 0 }, "<")
  }

  useEffect(() => {
    let last = 0
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = Date.now()
      if (now - last < 900) return
      goToPanel(currentRef.current + (e.deltaY > 0 ? 1 : -1))
      last = now
    }
    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useGSAP(() => {
    gsap.set(panelRefs.current, { opacity: 0 })
    gsap.set(panelRefs.current[0], { opacity: 1 })
  }, [])

  return (
    <>
      <Navigation />
      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">

        {/* HERO */}
        <section ref={(el) => el && (panelRefs.current[0] = el)} className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Hero</h1>
        </section>

        {/* WHO WE ARE */}
        <section ref={(el) => el && (panelRefs.current[1] = el)} className="absolute inset-0 flex items-center justify-center px-10">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] text-white/60 mb-4">WHO WE ARE</p>
            <h2 className="text-4xl font-black mb-6">
              WHERE CONTENT, COMMERCE, AND CREATORS BRING BRANDS INTO THE SPOTLIGHT
            </h2>
            <p className="text-white/70">
              At Star Digital Solutions, we transform strategy into growth—leveraging e-commerce, creator partnerships, affiliate marketing, and multi-channel networks to drive measurable performance.
            </p>
            <p className="text-white/60 mt-4">
              From established brands to emerging stars, we create campaigns designed not just to shine—but to convert, scale, and lead.
            </p>
          </div>
        </section>

        {/* BRANDS */}
        <section ref={(el) => el && (panelRefs.current[2] = el)} className="absolute inset-0 flex items-center justify-center">
          <h2>Brands</h2>
        </section>

        {/* SERVICES */}
        <section ref={(el) => el && (panelRefs.current[3] = el)} className="absolute inset-0 flex items-center justify-center">
          <h2>Services</h2>
        </section>

        {/* FINAL */}
        <section ref={(el) => el && (panelRefs.current[4] = el)} className="absolute inset-0 flex items-center justify-center">
          <h2>Final</h2>
        </section>

      </main>
    </>
  )
}
