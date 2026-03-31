"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const statsEn = [
  { label: "Lorem Ipsum", value: 95 },
  { label: "Dolor Sit Amet", value: 85 },
  { label: "Consectetur Adipiscing", value: 100 },
]

const statsZh = [
  { label: "Lorem Ipsum", value: 95 },
  { label: "Dolor Sit Amet", value: 85 },
  { label: "Consectetur Adipiscing", value: 100 },
]

function AnimatedProgress({
  label,
  value,
  start,
  delay = 0,
}: {
  label: string
  value: number
  start: boolean
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!start) return

    const timeout = setTimeout(() => {
      const duration = 1600
      const startTime = performance.now()

      const animate = (now: number) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)

        const eased = 1 - Math.pow(1 - t, 3)

        setCount(Math.round(value * eased))
        setProgress(value * eased)

        if (t < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [start, value, delay])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white">
          {label}
        </h3>

        <span className="text-xl md:text-2xl font-extrabold text-white">
          {count}%
        </span>
      </div>

      <div className="h-5 rounded-full bg-[#d99cea]">
        <div
          className="h-5 rounded-full bg-[#7c2bc8]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [startAnimation, setStartAnimation] = useState(false)
  const { language } = useLanguage()
  const stats = language === 'en' ? statsEn : statsZh

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: "url('/images/Woman in Phone.jpg')",
      }}
    >
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(194,70,156,0.95)_0%,rgba(212,108,183,0.85)_35%,rgba(226,180,213,0.45)_60%,rgba(205,93,171,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT TEXT */}
          <ScrollReveal>
            <div className="text-white">
              <p className="uppercase tracking-widest font-bold mb-6">
                Who We Are
              </p>

              <h2 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.9] uppercase">
                Lorem Ipsum Dolory
                <br />
                Ipsum Dolor
                <br />
                Loremify It is.
              </h2>

              <p className="mt-6 max-w-[450px] text-lg text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>

              <div className="mt-12">
                <p className="text-2xl font-bold uppercase">
                  Over Lorem Dummy Text is me 
                </p>

                <div className="w-full h-[1px] bg-white my-4" />

                <p className="text-2xl font-bold uppercase">
                  Lorem IPsum Dolor Amet
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* EMPTY CENTER (phone already in background image) */}
          <div />

          {/* RIGHT STATS */}
          <ScrollReveal delay={0.2}>
            <div className="text-white space-y-10 max-w-[500px] ml-auto">
              {stats.map((stat, index) => (
                <AnimatedProgress
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  start={startAnimation}
                  delay={index * 200}
                />
              ))}

              <p className="text-white/90">
                Consectetuer adipiscing congue aptent placera senec efficitur
                aptent malesuada sit conubia tincidunt iaculis.
              </p>

              <Button
                asChild
                variant="outline"
                className="border-2 border-[#8f2f95] text-[#8f0058] font-bold uppercase"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
