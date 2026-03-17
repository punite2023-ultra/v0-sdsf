"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { label: "Successful Campaign Launches", value: 95 },
  { label: "Innovative Design", value: 85 },
  { label: "High Impact Project", value: 100 },
]

function AnimatedStat({
  label,
  value,
  startAnimation,
  delay = 0,
}: {
  label: string
  value: number
  startAnimation: boolean
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    const timeout = setTimeout(() => {
      let start = 0
      const duration = 1600
      const stepTime = 16
      const totalSteps = Math.ceil(duration / stepTime)
      const increment = value / totalSteps

      const timer = setInterval(() => {
        start += increment

        if (start >= value) {
          setCount(value)
          setProgress(value)
          clearInterval(timer)
        } else {
          setCount(Math.round(start))
          setProgress(start)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [startAnimation, value, delay])

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h3 className="max-w-[75%] text-2xl font-extrabold uppercase leading-tight text-white md:text-3xl xl:text-4xl">
          {label}
        </h3>
        <span className="shrink-0 text-2xl font-extrabold text-white md:text-3xl xl:text-4xl">
          {count}%
        </span>
      </div>

      <div className="h-5 w-full rounded-full bg-white/20 md:h-6">
        <div
          className="h-5 rounded-full bg-[linear-gradient(90deg,#7c2ae8_0%,#9f38e6_100%)] transition-all duration-300 ease-out md:h-6"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#d85aa8_0%,#de79bf_28%,#e7b8da_55%,#d97bc4_78%,#c85db2_100%)] py-20 md:py-28"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-8 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT IMAGE */}
          <ScrollReveal>
            <div className="relative mx-auto flex w-full max-w-[700px] justify-center lg:justify-start">
              <div className="relative w-full max-w-[620px]">
                <Image
                  src="/images/woman-in-phone.jpg"
                  alt="Woman holding phone"
                  width={900}
                  height={1100}
                  className="h-auto w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.28)]"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT STATS CARD */}
          <ScrollReveal delay={0.1}>
            <div className="ml-auto w-full max-w-[760px] rounded-[32px] border border-white/15 bg-[rgba(255,255,255,0.08)] p-6 shadow-[0_20px_80px_rgba(112,34,130,0.18)] backdrop-blur-md md:p-8 xl:p-10">
              <div className="space-y-10 md:space-y-12">
                {stats.map((stat, index) => (
                  <AnimatedStat
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    startAnimation={startAnimation}
                    delay={index * 220}
                  />
                ))}
              </div>

              <div className="mt-10 max-w-[620px]">
                <p className="text-base leading-8 text-white/90 md:text-lg">
                  We create digital campaigns, brand visuals, and growth-focused
                  strategies that help businesses launch strongly, stand out, and
                  build real momentum online.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
