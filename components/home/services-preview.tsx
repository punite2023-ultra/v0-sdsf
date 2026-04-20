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
    value: 56,
    suffix: "K+",
    labelEn: "PROJECT DONE",
    labelZh: "已完成项目",
    noteEn: "Brand, content, and growth campaigns delivered.",
    noteZh: "已完成品牌、内容与增长项目。",
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

    let frame = 0
    const totalFrames = 75
    let animationFrameId = 0

    const animate = () => {
      frame += 1
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = end * eased

      if (progress < 1) {
        setCount(next)
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, startAnimation])

  return (
    <span>
      {count.toFixed(decimals)}
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
          leftEyebrow: "OUR VALUE",
          leftTitle: (
            <>
              Smart Designs, Sharp Results —
              <br />
              Choose Star Digital for
              <br />
              Digital Excellence.
            </>
          ),
          leftDescription:
            "我们将策略、创意执行与数字增长系统结合起来，帮助品牌提升曝光、优化内容表现，并建立更强的市场竞争力。",
          visionTitle: "OUR VISION",
          visionHeading: "Elevate Your Digital Presence with Star Digital Expertise.",
          visionDescription:
            "通过清晰策略、优质创意与高效执行，帮助品牌在数字环境中持续成长。",
          missionTitle: "OUR MISSION",
          missionHeading: "Turn Creative Direction into Measurable Business Growth.",
          missionDescription:
            "从品牌建设到营销执行，我们专注打造真正带来成果的数字体验。",
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
          leftEyebrow: "OUR VALUE",
          leftTitle: (
            <>
              Smart Designs, Sharp Results —
              <br />
              Choose Star Digital for
              <br />
              Digital Excellence.
            </>
          ),
          leftDescription:
            "We combine strategy, design, content, and performance marketing to help brands build stronger digital presence, sharper positioning, and better business results.",
          visionTitle: "OUR VISION",
          visionHeading: "Elevate Your Digital Presence with Star Digital Expertise.",
          visionDescription:
            "Build stronger visibility through clear strategy, compelling creative, and growth-focused execution across every digital touchpoint.",
          missionTitle: "OUR MISSION",
          missionHeading: "Turn Creative Direction into Measurable Business Growth.",
          missionDescription:
            "From brand development to campaign execution, we create digital experiences designed to move brands forward.",
          button: "LEARN MORE",
        }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#070012] py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:66px_66px] opacity-[0.16]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(180,124,253,0.14),transparent_25%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[300px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center lg:mb-16">
          <p
            className={`text-[13px] font-semibold uppercase tracking-[0.18em] text-[#ff5ab7] transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {t.eyebrow}
          </p>

          <h2
            className={`mx-auto mt-5 max-w-[860px] text-balance text-[38px] font-extrabold leading-[1.02] tracking-[-0.05em] text-white transition-all duration-[900ms] md:text-[52px] lg:text-[64px] ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            {t.heading}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.8fr_0.95fr]">
          {/* LEFT FEATURE CARD */}
          <div
            className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,2,24,0.18)_0%,rgba(10,2,24,0.62)_54%,rgba(10,2,24,0.92)_100%)]" />
            </div>

            <div className="relative flex min-h-[560px] flex-col justify-end p-8 md:p-10 lg:p-12">
              <div
                className={`absolute right-6 top-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/25 bg-[linear-gradient(135deg,#C78BFF_0%,#FF77B7_100%)] shadow-[0_18px_45px_rgba(169,95,240,0.25)] transition-all duration-[900ms] md:h-[94px] md:w-[94px] ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "220ms" }}
              >
                <ArrowUpRight className="h-8 w-8 text-white" />
              </div>

              <p
                className={`mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#ff5ab7] transition-all duration-700 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "120ms" }}
              >
                {t.leftEyebrow}
              </p>

              <h3
                className={`max-w-[760px] text-balance text-[36px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white transition-all duration-[900ms] md:text-[48px] lg:text-[60px] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "180ms" }}
              >
                {t.leftTitle}
              </h3>

              <p
                className={`mt-6 max-w-[760px] text-[16px] leading-[1.75] text-white/65 transition-all duration-[1000ms] md:text-[18px] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "260ms" }}
              >
                {t.leftDescription}
              </p>

              <div
                className={`mt-9 transition-all duration-[1000ms] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "340ms" }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#B47CFD_0%,#FF8A5B_100%)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(180,124,253,0.20)] transition-all duration-300 hover:scale-[1.03]"
                >
                  {t.button}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="flex flex-col gap-8">
            <div
              className={`relative overflow-hidden rounded-[24px] p-8 text-white transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-10 ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              } bg-[linear-gradient(135deg,#B37AFF_0%,#C98BFF_100%)]`}
              style={{ transitionDelay: "180ms" }}
            >
              <div className="absolute right-5 top-5 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/15 bg-[#2A2034] shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
                <ArrowUpRight className="h-7 w-7 text-white" />
              </div>

              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/85">
                {t.visionTitle}
              </p>
              <h4 className="mt-6 max-w-[360px] text-balance text-[30px] font-medium leading-[1.18] tracking-[-0.03em] md:text-[38px]">
                {t.visionHeading}
              </h4>
              <p className="mt-6 max-w-[360px] text-[16px] leading-[1.7] text-white/82">
                {t.visionDescription}
              </p>
            </div>

            <div
              className={`relative overflow-hidden rounded-[24px] p-8 text-white transition-all duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-10 ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              } bg-[linear-gradient(135deg,#F06AB8_0%,#F179C2_100%)]`}
              style={{ transitionDelay: "280ms" }}
            >
              <div className="absolute right-5 top-5 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/15 bg-[#2A2034] shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
                <ArrowUpRight className="h-7 w-7 text-white" />
              </div>

              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/85">
                {t.missionTitle}
              </p>
              <h4 className="mt-6 max-w-[360px] text-balance text-[30px] font-medium leading-[1.18] tracking-[-0.03em] md:text-[38px]">
                {t.missionHeading}
              </h4>
              <p className="mt-6 max-w-[360px] text-[16px] leading-[1.7] text-white/82">
                {t.missionDescription}
              </p>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div
          className={`mt-10 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(90deg,#BE88FF_0%,#F27FC4_55%,#FF8EB3_100%)] shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.labelEn}
                className="relative px-8 py-9 text-center text-white md:px-10"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-white/18 xl:block" />
                )}

                <div className="text-[46px] font-extrabold leading-none tracking-[-0.05em] md:text-[58px]">
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals ?? 0}
                    startAnimation={inView}
                  />
                </div>

                <div className="mt-3 text-[14px] font-semibold uppercase tracking-[0.14em] text-white/95">
                  {language === "zh" ? item.labelZh : item.labelEn}
                </div>

                <p className="mx-auto mt-3 max-w-[260px] text-[13px] leading-[1.65] text-white/80">
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
