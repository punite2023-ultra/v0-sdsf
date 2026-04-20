"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

type StatItem = {
  value: number
  suffix: string
  decimals?: number
  labelEn: string
  labelZh: string
  noteEn: string
  noteZh: string
}

const stats: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    labelEn: "TSP / MCN BRANDS",
    labelZh: "合作品牌",
    noteEn: "From Beauty / FMCG / Retail / Lifestyle.",
    noteZh: "涵盖美妆、快消、零售与生活方式品牌。",
  },
  {
    value: 38,
    suffix: "K+",
    labelEn: "HAPPY CLIENT",
    labelZh: "满意客户",
    noteEn: "Trusted by brands building stronger digital presence.",
    noteZh: "深受希望提升数字影响力的品牌信赖。",
  },
  {
    value: 4.7,
    suffix: "",
    decimals: 1,
    labelEn: "CLIENT RATINGS",
    labelZh: "客户评分",
    noteEn: "Consistent quality across strategy and execution.",
    noteZh: "在策略与执行方面保持稳定品质。",
  },
  {
    value: 35,
    suffix: "+",
    labelEn: "AWARD WINNING",
    labelZh: "获奖成果",
    noteEn: "Recognized for creativity, design, and performance.",
    noteZh: "在创意、设计与效果方面获得认可。",
  },
]

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function CountUp({
  end,
  suffix = "",
  decimals = 0,
  startAnimation,
}: {
  end: number
  suffix?: string
  decimals?: number
  startAnimation: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    const duration = 1400
    let animationFrameId = 0
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const value = end * eased

      setCount(value)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, startAnimation])

  const formatNumber = (num: number) => {
    if (decimals > 0) return num.toFixed(decimals)
    return Math.floor(num).toLocaleString()
  }

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function ServicesPreview() {
  const { language } = useLanguage()
  const { ref, inView } = useInView(0.2)

  const t =
    language === "zh"
      ? {
          eyebrow: "WHAT WE OFFER",
          heading: (
            <>
              Smart Strategy, Bold Content,
              <br />
              and Growth-Driven Digital Execution.
            </>
          ),
          leftEyebrow: "OUR VALUES",
          leftTitle: (
            <>
              Ownership. Integrity. Excellence —
              <br />
              The Principles Behind Every
              <br />
              Result We Deliver.
            </>
          ),
          leftDescription:
            "We own every outcome, operate with transparency, and never compromise on quality. We adapt fast, work together, and continuously evolve to create meaningful, measurable impact.",
          visionTitle: "OUR VISION",
          visionHeading: (
            <>
              To Be the Trusted Partner Powering
              <br />
              Meaningful Brand Growth in the Digital Era.
            </>
          ),
          visionDescription:
            "To become a leading and trusted brand growth partner, recognized for driving meaningful and transformative impact across digital marketing and e-commerce.",
          missionTitle: "OUR MISSION",
          missionHeading: (
            <>
              Driving Sustainable Growth Through
              <br />
              Strategy, Execution, and Partnership.
            </>
          ),
          missionDescription:
            "We combine innovation, data-driven execution, and meaningful partnerships to build long-term visibility and scalable growth. Through creativity, technology, and operational excellence, we deliver measurable results across digital channels.",
          button: "LEARN MORE",
        }
      : {
          eyebrow: "WHAT WE OFFER",
          heading: (
            <>
              Smart Strategy, Bold Content,
              <br />
              and Growth-Driven Digital Execution.
            </>
          ),
          leftEyebrow: "OUR VALUES",
          leftTitle: (
            <>
              Ownership. Integrity. Excellence —
              <br />
              The Principles Behind Every
              <br />
              Result We Deliver.
            </>
          ),
          leftDescription:
            "We own every outcome, operate with transparency, and never compromise on quality. We adapt fast, work together, and continuously evolve to create meaningful, measurable impact.",
          visionTitle: "OUR VISION",
          visionHeading: (
            <>
              To Be the Trusted Partner Powering
              <br />
              Meaningful Brand Growth in the Digital Era.
            </>
          ),
          visionDescription:
            "To become a leading and trusted brand growth partner, recognized for driving meaningful and transformative impact across digital marketing and e-commerce.",
          missionTitle: "OUR MISSION",
          missionHeading: (
            <>
              Driving Sustainable Growth Through
              <br />
              Strategy, Execution, and Partnership.
            </>
          ),
          missionDescription:
            "We combine innovation, data-driven execution, and meaningful partnerships to build long-term visibility and scalable growth. Through creativity, technology, and operational excellence, we deliver measurable results across digital channels.",
          button: "LEARN MORE",
        }

  const rightCards = [
    {
      number: "1",
      title: t.visionTitle,
      heading: t.visionHeading,
      description: t.visionDescription,
      gradient: "bg-[linear-gradient(135deg,#B37AFF_0%,#C98BFF_100%)]",
      delay: "180ms",
    },
    {
      number: "2",
      title: t.missionTitle,
      heading: t.missionHeading,
      description: t.missionDescription,
      gradient: "bg-[linear-gradient(135deg,#F06AB8_0%,#F179C2_100%)]",
      delay: "280ms",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#070012] py-16 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.16]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(180,124,253,0.14),transparent_25%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[300px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center lg:mb-12">
          <p
            className={`text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff5ab7] transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {t.eyebrow}
          </p>

          <h2
            className={`mx-auto mt-4 max-w-[820px] text-balance text-[32px] font-extrabold leading-[1.02] tracking-[-0.05em] text-white transition-all duration-[900ms] md:text-[46px] lg:text-[56px] ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            {t.heading}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_0.95fr]">
          <div
            className={`relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80"
                alt="Digital strategy workspace"
                fill
                className={`object-cover transition-all duration-[1400ms] ${
                  inView
                    ? "scale-100 brightness-[0.42]"
                    : "scale-[1.05] brightness-[0.25] grayscale"
                }`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,2,24,0.16)_0%,rgba(10,2,24,0.58)_52%,rgba(10,2,24,0.92)_100%)]" />
            </div>

            <div className="relative flex min-h-[500px] flex-col justify-end p-6 md:p-8 lg:p-10">
              <div
                className={`absolute right-5 top-5 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/25 bg-[linear-gradient(135deg,#C78BFF_0%,#FF77B7_100%)] shadow-[0_18px_45px_rgba(169,95,240,0.25)] transition-all duration-[900ms] ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "220ms" }}
              >
                <ArrowUpRight className="h-7 w-7 text-white" />
              </div>

              <p
                className={`mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff5ab7] transition-all duration-700 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "120ms" }}
              >
                {t.leftEyebrow}
              </p>

              <h3
                className={`max-w-[720px] text-balance text-[30px] font-extrabold leading-[1.05] tracking-[-0.05em] text-white transition-all duration-[900ms] md:text-[42px] lg:text-[52px] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "180ms" }}
              >
                {t.leftTitle}
              </h3>

              <p
                className={`mt-4 max-w-[720px] text-[15px] leading-[1.7] text-white/65 transition-all duration-[1000ms] md:text-[16px] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "260ms" }}
              >
                {t.leftDescription}
              </p>

              <div
                className={`mt-7 transition-all duration-[1000ms] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "340ms" }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#B47CFD_0%,#FF8A5B_100%)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(180,124,253,0.20)] transition-all duration-300 hover:scale-[1.03]"
                >
                  {t.button}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {rightCards.map((card) => (
              <div
                key={card.title}
                className={`relative overflow-hidden rounded-[22px] p-6 text-white transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-7 ${
                  inView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                } ${card.gradient}`}
                style={{ transitionDelay: card.delay }}
              >
                <div className="absolute right-4 top-4 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/15 bg-[#2A2034] shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-[14px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    {card.number}
                  </div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    {card.title}
                  </p>
                </div>

                <h4 className="mt-5 max-w-[320px] text-balance text-[24px] font-medium leading-[1.2] tracking-[-0.03em] md:text-[30px]">
                  {card.heading}
                </h4>

                <p className="mt-4 max-w-[330px] text-[14px] leading-[1.65] text-white/82 md:text-[15px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(90deg,#BE88FF_0%,#F27FC4_55%,#FF8EB3_100%)] shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.labelEn}
                className="relative px-6 py-7 text-center text-white md:px-8"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-[56%] w-px -translate-y-1/2 bg-white/18 xl:block" />
                )}

                <div className="text-[40px] font-extrabold leading-none tracking-[-0.05em] md:text-[50px]">
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals ?? 0}
                    startAnimation={inView}
                  />
                </div>

                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/95">
                  {language === "zh" ? item.labelZh : item.labelEn}
                </div>

                <p className="mx-auto mt-2 max-w-[240px] text-[12px] leading-[1.6] text-white/80">
                  {language === "zh" ? item.noteZh : item.noteEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
