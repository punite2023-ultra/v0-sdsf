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

    gsap.set(nextPanel, {
      yPercent: 100 * direction,
      opacity: 1,
      scale: 0.95,
      zIndex: 3,
      pointerEvents: "auto",
    })

    gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.9 },
      onComplete: () => {
        panelRefs.current.forEach((p, i) => {
          gsap.set(p, {
            opacity: i === nextIndex ? 1 : 0,
            zIndex: i === nextIndex ? 2 : 1,
            pointerEvents: i === nextIndex ? "auto" : "none",
          })
        })
        currentRef.current = nextIndex
        setCurrent(nextIndex)
        isAnimating.current = false
      },
    })
    .to(currentPanel, {
      yPercent: -50 * direction,
      opacity: 0,
      scale: 0.9,
    })
    .to(nextPanel, {
      yPercent: 0,
      scale: 1,
    }, "<")
  }

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) goToPanel(currentRef.current + 1)
      else goToPanel(currentRef.current - 1)
    }

    window.addEventListener("wheel", onWheel)
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useGSAP(() => {
    panelRefs.current.forEach((panel, i) => {
      gsap.set(panel, {
        opacity: i === 0 ? 1 : 0,
        zIndex: i === 0 ? 2 : 1,
      })
    })
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">

        {[...Array(5)].map((_, i) => (
          <section
            key={i}
            ref={(el) => el && (panelRefs.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className={`${raleway.className} text-6xl`}>
                Panel {i + 1}
              </h1>
              <p className="mt-4 text-white/60">
                Your original animated about section
              </p>
            </div>
          </section>
        ))}

      </main>
    </>
  )
}
