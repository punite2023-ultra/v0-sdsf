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

const integrationNodes = [
  {
    title: "E-Commerce",
    text: "Scale across stores and channels.",
    Icon: ShoppingBag,
    className: "left-[8%] top-[32%]",
  },
  {
    title: "Creators",
    text: "Creator partnerships that convert.",
    Icon: Network,
    className: "left-[8%] top-[58%]",
  },
  {
    title: "Affiliate",
    text: "Networks that scale reach.",
    Icon: Handshake,
    className: "left-[22%] bottom-[8%]",
  },
  {
    title: "MCN",
    text: "Multi-channel creator growth.",
    Icon: RadioTower,
    className: "right-[8%] top-[58%]",
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

    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    gsap.to(currentPanel, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
    })

    gsap.fromTo(
      nextPanel,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        onComplete: () => {
          currentRef.current = nextIndex
          setCurrent(nextIndex)
          isAnimating.current = false
        },
      }
    )
  }

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-[#21103f] text-white">

        {/* HERO PANEL */}
        <section
          ref={(el) => (panelRefs.current[0] = el!)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className={`${raleway.className} text-6xl font-extrabold uppercase`}>
              ALIGNING THE STARS
            </h1>
            <p className="mt-4 text-white/60">
              for your Digital Success
            </p>
          </div>
        </section>
                {/* PANEL 2 */}
        <section
          ref={(el) => (panelRefs.current[1] = el!)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[1400px] h-[80vh]">

            {/* CENTER TEXT */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-xs tracking-[0.4em] text-pink-400">
                WHO WE ARE
              </p>

              <h2 className={`${raleway.className} mt-4 text-5xl font-extrabold`}>
                Built to Make Brands Shine—with Results That Scale
              </h2>
            </div>

            {/* CENTER CORE */}
            <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-pink-500/20 rounded-xl flex items-center justify-center">
              SDS
            </div>

            {/* SVG LINES */}
            <svg className="absolute inset-0 w-full h-full">
              <path d="M700 400 L400 300" stroke="#ec4899" />
              <path d="M700 400 L400 500" stroke="#ec4899" />
              <path d="M700 400 L1000 500" stroke="#ec4899" />
              <path d="M700 400 L1000 300" stroke="#ec4899" />
            </svg>

            {/* NODES */}
            {integrationNodes.map((node) => {
              const Icon = node.Icon
              return (
                <div key={node.title} className={`absolute ${node.className}`}>
                  <div className="flex items-center gap-3">
                    <Icon className="text-pink-400" />
                    <div>
                      <h3 className={`${raleway.className} uppercase text-sm`}>
                        {node.title}
                      </h3>
                      <p className="text-xs text-white/60">
                        {node.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
