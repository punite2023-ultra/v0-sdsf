"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Successful Campaign Launches", value: 95 },
  { label: "Innovative Design", value: 85 },
  { label: "High Impact Project", value: 100 },
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

    let frameId = 0
    let timeoutId: ReturnType<typeof setTimeout>

    timeoutId = setTimeout(() => {
      const duration = 1600
      const startTime = performance.now()

      const animate = (now: number) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)

        setCount(Math.round(value * eased))
        setProgress(value * eased)

        if (t < 1) {
          frameId = requestAnimationFrame(animate)
        } else {
          setCount(value)
          setProgress(value)
        }
      }

      frameId = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(frameId)
    }
  }, [start, value, delay])

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h3 className="max-w-[78%] text-xl font-extrabold uppercase leading-tight text-white md:text-2xl xl:text-[2rem]">
          {label}
        </h3>
        <span className="shrink-0 text-xl font-extrabold text-white md:text-2xl xl:text-[2rem]">
          {count}%
        </span>
      </div>

      <div className="h-5 w-full rounded-full bg-[#d79ae8] md:h-6">
        <div
          className="h-5 rounded-full bg-[#7c2bc8] md:h-6"
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
      className="relative overflow-hidden bg-[linear-gradient(90deg,#cc59aa_0%,#d66bb8_20%,#e5c9df_50%,#de90cb_75%,#cf63af_100%)] py-20 md:py-24 xl:py-28"
    >
      {/* soft texture/glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.06),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-8 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr_1fr] xl:gap-14">
          {/* LEFT */}
          <ScrollReveal>
            <div className="text-white">
              <p className="mb-8 text-sm font-extrabold uppercase tracking-[0.12em] md:text-base">
                Who We Are
              </p>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl xl:text-[6rem]">
                Creativity
                <br />
                Meets
                <br />
                Strategy.
              </h2>

              <p className="mt-6 max-w-[520px] text-lg leading-8 text-white/92 md:text-[1.05rem]">
                With a team of passionate designers, marketers, and innovators, we
                specialize in delivering unique solutions that elevate your brand
                and captivate your audience.
              </p>

              <div className="mt-16 max-w-[520px] space-y-5">
                <div>
                  <p className="text-2xl font-extrabold uppercase md:text-[2rem]">
                    Over 10 Years of Experience
                  </p>
                  <div className="mt-4 h-px w-full bg-white/70" />
                </div>

                <div>
                  <p className="text-2xl font-extrabold uppercase md:text-[2rem]">
                    Trusted by Global Brands
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CENTER IMAGE */}
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto flex w-full justify-center">
              <Image
                src="/images/woman-in-phone.jpg"
                alt="Woman holding a phone"
                width={900}
                height={1200}
                priority
                className="relative z-10 h-auto w-full max-w-[620px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.22)]"
              />
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          <ScrollReveal delay={0.2}>
            <div className="text-white">
              <div className="space-y-9 md:space-y-10">
                {stats.map((stat, index) => (
                  <AnimatedProgress
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    start={startAnimation}
                    delay={index * 220}
                  />
                ))}
              </div>

              <p className="mt-10 max-w-[500px] text-lg leading-8 text-white/90">
                Consectetuer adipiscing congue aptent placera senec efficitur
                aptent malesuada sit conubia tincidunt iaculis.
              </p>

              <div className="mt-10">
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-2 border-[#8f2f95] bg-transparent px-7 py-5 text-base font-extrabold uppercase tracking-wide text-[#a10058] hover:bg-[#8f2f95] hover:text-white"
                >
                  <Link href="/about" className="inline-flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
