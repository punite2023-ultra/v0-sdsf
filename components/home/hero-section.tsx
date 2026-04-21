"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { useEffect, useState, type MouseEvent } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

function Counter({
  value,
  duration = 1800,
}: {
  value: number
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value, duration])

  return <>{count}</>
}

function StatBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-[150px] md:w-[180px]">
      <div className="flex items-start gap-1.5">
        <div className={`${poppins.className} text-[42px] font-semibold text-white md:text-[56px]`}>
          <Counter value={value} />
        </div>
        <div className={`${poppins.className} mt-[6px] text-[18px] font-semibold text-[#9c003a]`}>
          +
        </div>
      </div>

      <div className={`${poppins.className} mt-2 text-[12px] font-semibold uppercase text-white`}>
        {label}
      </div>

      <div className="mt-4 h-[3px] w-[118px] bg-[#9c003a]" />
    </div>
  )
}

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1720px] items-center justify-center px-4">
        
        {/* LEFT STATS */}
        <div
          className="absolute left-10 top-[200px] hidden xl:flex flex-col gap-8"
          style={{
            transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
          }}
        >
          <StatBlock value={500} label="HAPPY CLIENT" />
          <StatBlock value={125} label="PROJECT DONE" />
          <StatBlock value={450} label="MEDIA FEATURED" />
        </div>

        {/* CENTER TEXT */}
        <div
          className="text-center"
          style={{
            transform: `translate(${mouse.x * 4}px, ${mouse.y * 2}px)`,
          }}
        >
          <h1 className={`${anton.className} text-[64px] md:text-[120px] leading-[0.9] uppercase`}>
            CONTENT CREATION
          </h1>
          <h1 className={`${anton.className} text-[64px] md:text-[120px] leading-[0.9] uppercase text-[#9c003a]`}>
            & BRANDING
          </h1>
        </div>

        {/* HERO IMAGE */}
        <div
          className="absolute left-1/2 top-1/2 w-[90vw] h-[90vh] -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate(calc(-50% + ${mouse.x * 8}px), calc(-50% + ${mouse.y * 5}px))`,
          }}
        >
          <Image
            src="/HeroImage1.png"
            alt="Hero"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
