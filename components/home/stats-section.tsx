"use client"

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
      const duration = 1800
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
          const current = Math.round(start)
          setCount(current)
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

      <div className="h-6 w-full rounded-full bg-[#d89be9] md:h-7">
        <div
          className="h-6 rounded-full bg-[#7b2fc9] transition-all duration-300 ease-out md:h-7"
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
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/woman-in-phone.jpg')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(197,89,171,0.82)_0%,rgba(212,120,194,0.50)_38%,rgba(223,146,212,0.28)_58%,rgba(215,133,207,0.78)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-8 xl:px-10">
        <div className="grid min-h-[620px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side intentionally open to show background image */}
          <div className="hidden lg:block" />

          {/* Right side stats */}
          <ScrollReveal>
            <div className="ml-auto w-full max-w-[720px] rounded-[28px] border border-white/15 bg-white/5 p-6 backdrop-blur-[4px] md:p-8 xl:p-10">
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
                <p className="text-base leading-7 text-white/90 md:text-lg md:leading-8">
                  We create digital campaigns, brand visuals, and growth-focused
                  strategies that help businesses launch strongly, stand out,
                  and build real momentum online.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
