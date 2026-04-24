"use client"

// UPDATED: container feel restored but wider

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
    gsap.set(panelRefs.current, { opacity: 0 })
    gsap.set(panelRefs.current[0], { opacity: 1 })
  }, [])

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">

        {/* video stays */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" >
          <source src="/IntroVid.mp4" />
        </video>

        {[0,1,2].map((_, index) => (
          <section key={index} ref={(el)=>{if(el)panelRefs.current[index]=el}} className="absolute inset-0 flex items-center justify-center">
            <div className="h-[85vh] max-w-[1440px] w-full mx-auto mt-6 rounded-xl border border-white/10 backdrop-blur">
              <div className="p-12">
                <h1 className="text-4xl font-bold">Panel {index+1}</h1>
              </div>
            </div>
          </section>
        ))}

      </main>
    </>
  )
}
