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
  { label: "示例文字一", value: 95 },
  { label: "示例文字二", value: 85 },
  { label: "示例文字三", value: 100 },
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
      <div className="flex items-end justify-between">
        <h3 className="text-xl font-extrabold uppercase text-white md:text-2xl">
          {label}
        </h3>

        <span className="text-xl font-extrabold text-white md:text-2xl">
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
  const stats = language === "en" ? statsEn : statsZh

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
    <section ref={sectionRef} className="relative bg-[#62248e] py-24">
      <div className="relative z-10 mx-auto max-w-[1500px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          <ScrollReveal>
            <div className="text-white">
              <p className="mb-6 font-bold uppercase tracking-widest">
                {language === "en" ? "Who We Are" : "关于我们"}
              </p>

              <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-6xl xl:text-7xl">
                {language === "en" ? (
                  <>
                    Lorem
                    <br />
                    Ipsum
                    <br />
                    Loremify.
                  </>
                ) : (
                  <>
                    示例
                    <br />
                    中文
                    <br />
                    占位字。
                  </>
                )}
              </h2>

              <p className="mt-6 max-w-[450px] text-lg text-white/90">
                {language === "en"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                  : "这是一段中文占位文字，用于展示该区域在切换语言后的版式效果。这是一段中文占位文字，用于展示该区域在切换语言后的版式效果。"}
              </p>

              <div className="mt-12">
                <p className="text-2xl font-bold uppercase">
                  {language === "en"
                    ? "Over Lorem Dummy Text Is Me"
                    : "这里是中文占位标题"}
                </p>

                <div className="my-4 h-[1px] w-full bg-white" />

                <p className="text-2xl font-bold uppercase">
                  {language === "en"
                    ? "Lorem Ipsum Dolor Amet"
                    : "这里是另一行中文文字"}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div />

          <ScrollReveal delay={0.2}>
            <div className="ml-auto max-w-[500px] space-y-10 text-white">
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
                {language === "en"
                  ? "Consectetuer adipiscing congue aptent placera senec efficitur aptent malesuada sit conubia tincidunt iaculis."
                  : "这是一段用于右侧说明区域的中文占位文字，方便测试中文界面的视觉呈现与整体排版。"}
              </p>

              <Button
                asChild
                variant="outline"
                className="border-2 border-white font-bold uppercase text-[#d946ef] hover:bg-white hover:text-[#a21caf]"
              >
                <Link href="/about" className="flex items-center gap-2">
                  {language === "en" ? "Learn More About Us" : "了解更多"}
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
