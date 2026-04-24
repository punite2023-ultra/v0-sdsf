"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const sections = 3
  const isScrolling = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return

      isScrolling.current = true

      if (e.deltaY > 0) {
        setCurrent((prev) => Math.min(prev + 1, sections - 1))
      } else {
        setCurrent((prev) => Math.max(prev - 1, 0))
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 900)
    }

    window.addEventListener("wheel", handleWheel)
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.style.transform = `translateY(-${current * 100}vh)`
  }, [current])

  return (
    <>
      <Navigation />

      <main className="h-screen overflow-hidden bg-black text-white">
        <div
          ref={containerRef}
          className="transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        >

          {/* HERO */}
          <section className="h-screen flex items-center px-10">
            <h1 className="text-6xl font-bold">
              Everything App for your teams
            </h1>
          </section>

          {/* MISSION */}
          <section className="h-screen flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl mb-6">// MISSION</h2>
              <p className="text-white/70">
                We build adaptive digital systems that evolve with content,
                commerce, and creator ecosystems.
              </p>
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="h-screen flex items-center justify-center">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl mb-6">// ARCHITECTURE</h2>
              <p className="text-white/70">
                Modular growth frameworks powered by data, execution, and performance optimization.
              </p>
            </div>
          </section>

        </div>

        <SiteFooter />
      </main>
    </>
  )
}
