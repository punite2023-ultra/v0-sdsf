// (UPDATED) Added video background layer
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

export default function AboutPage() {
  const panelRefs = useRef<HTMLDivElement[]>([])
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const isAnimating = useRef(false)

  return (
    <>
      <Navigation />

      <main className="relative h-screen overflow-hidden bg-black text-white">

        {/* 🎥 VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] z-0"
        >
          <source src="/IntroVid.mp4" type="video/mp4" />
        </video>

        {/* 🌑 DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0a001a]/70 z-[1]" />

        {/* 🟣 PURPLE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-black z-[2]" />

        {/* EXISTING CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold">About Page with Video Background</h1>
        </div>

      </main>
    </>
  )
}
