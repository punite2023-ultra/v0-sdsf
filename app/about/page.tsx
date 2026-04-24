// UPDATED WITH VIDEO-LIKE TRANSITIONS

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

const totalPanels = 3

const serviceCards = [
  { number: "01", title: "Strategy", label: "BRAND SYSTEM", Icon: Sparkles },
  { number: "02", title: "Creators", label: "AFFILIATE + MCN", Icon: Network },
  { number: "03", title: "Commerce", label: "PLATFORM GROWTH", Icon: ShoppingBag },
  { number: "04", title: "Performance", label: "DATA + RESULTS", Icon: Gauge },
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

    // PRESS EFFECT
    gsap.to(currentPanel, { scale: 0.96, duration: 0.2 })

    gsap.set(nextPanel, {
      yPercent: 100 * direction,
      opacity: 1,
      scale: 0.94,
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
        defaults: { ease: "power4.inOut", duration: 0.85 },
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
        yPercent: -55 * direction,
        opacity: 0,
        scale: 0.88,
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
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      )
      // ICON ANIMATION
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

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
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
        {/* rest unchanged */}
      </main>
    </>
  )
}
