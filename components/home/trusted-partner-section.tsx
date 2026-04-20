"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Phone, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.08] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px",
      }}
    />
  )
}

function GlowDots() {
  return (
    <>
      <span className="absolute left-[58%] top-[12%] h-2 w-2 rounded-full bg-cyan-400/80 blur-[1px]" />
      <span className="absolute left-[74%] top-[19%] h-1.5 w-1.5 rounded-full bg-cyan-400/80 blur-[1px]" />
      <span className="absolute left-[68%] top-[52%] h-2 w-2 rounded-full bg-cyan-400/70 blur-[1px]" />
      <span className="absolute left-[61%] top-[69%] h-1.5 w-1.5 rounded-full bg-cyan-400/70 blur-[1px]" />
    </>
  )
}

function StatCount({
  end,
  suffix = "",
  start,
}: {
  end: number
  suffix?: string
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let frame = 0
    const duration = 1400
    const startTime = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))

      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [start, end])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

function RocketIllustration() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-[-8px] top-[-30px] flex items-end justify-end md:right-[-10px]">
      <div className="relative h-[380px] w-[180px] md:h-[430px] md:w-[210px]">
        <div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-2xl" />
        <div className="absolute bottom-[-12px] left-1/2 h-28 w-32 -translate-x-1/2 rounded-t-full bg-slate-200" />
        <div className="absolute bottom-[70px] left-1/2 h-[250px] w-[76px] -translate-x-1/2 rounded-t-[42px] bg-[#ececec] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
        <div className="absolute bottom-[300px] left-1/2 h-[48px] w-[76px] -translate-x-1/2 overflow-hidden rounded-t-[999px]">
          <div className="absolute inset-0 bg-[#ef3d3d]" />
          <div className="absolute inset-x-0 bottom-2 h-[2px] bg-[#9d1a1a]/60" />
        </div>
        <div className="absolute bottom-[235px] left-1/2 h-[74px] w-[74px] -translate-x-1/2 rounded-full border-[8px] border-[#f8f8f8] bg-[#f59e0b] shadow-[inset_0_0_0_3px_rgba(0,0,0,0.12)]" />
        <div className="absolute bottom-[150px] left-[20px] h-[110px] w-[22px] skew-y-[16deg] rounded-b-[999px] bg-[#ef3d3d]" />
        <div className="absolute bottom-[150px] right-[20px] h-[110px] w-[22px] -skew-y-[16deg] rounded-b-[999px] bg-[#ef3d3d]" />
        <div className="absolute bottom-[170px] left-1/2 h-[110px] w-[8px] -translate-x-1/2 rounded-full bg-[#8f8f8f]" />
        <div className="absolute bottom-[78px] left-1/2 h-[106px] w-[18px] -translate-x-1/2 rounded-b-[999px] bg-[#ef3d3d]" />
        <div className="absolute bottom-[16px] left-1/2 h-[124px] w-[62px] -translate-x-1/2 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 rounded-b-[999px] bg-[#f5b144]" />
          <div className="absolute left-1/2 top-[12px] h-full w-[30px] -translate-x-1/2 rounded-b-[999px] bg-[#ffe34d]" />
        </div>
        <div className="absolute bottom-0 left-1/2 h-[88px] w-[16px] -translate-x-1/2 bg-[#f5f5f5]" />
      </div>
    </div>
  )
}

export function TrustedPartnerSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [startCount, setStartCount] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const t =
    language === "zh"
      ? {
          heading: "Navigating Digital Horizons with Digimax: Your Trusted Partner.",
          intro:
            "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
          card1Title: "Timely and Transparent Communication",
          card1Desc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          card2Title: "Boost Traffic & Sales",
          card2Desc:
            "Platea rhoncus semper consectetur letius facilisi nec curabitur placerat montes lacinia tincidunt",
          card3Title: "Client Ratings",
          card3Desc:
            "Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar",
          card4Title: "Responsive and Scalable Solutions",
          card4Desc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          card5Title: "Premium Support",
          card5Phone: "(888) 4000-2234",
          card5Desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          learn: "LEARN MORE",
          call: "CALL NOW!",
        }
      : {
          heading: "Navigating Digital Horizons with Digimax: Your Trusted Partner.",
          intro:
            "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
          card1Title: "Timely and Transparent Communication",
          card1Desc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          card2Title: "Boost Traffic & Sales",
          card2Desc:
            "Platea rhoncus semper consectetur letius facilisi nec curabitur placerat montes lacinia tincidunt",
          card3Title: "Client Ratings",
          card3Desc:
            "Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar",
          card4Title: "Responsive and Scalable Solutions",
          card4Desc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          card5Title: "Premium Support",
          card5Phone: "(888) 4000-2234",
          card5Desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          learn: "LEARN MORE",
          call: "CALL NOW!",
        }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080018] py-16 md:py-20"
    >
      <GlowDots />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[1.08fr_0.92fr] md:items-start">
          <h2 className="max-w-[720px] text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[42px] md:text-[56px]">
            {t.heading}
          </h2>

          <p className="max-w-[640px] text-[15px] leading-[1.7] text-white/58 sm:text-[17px] md:pl-2 md:text-[18px]">
            {t.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.65fr_0.8fr_0.66fr]">
          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top_left,#1b0140_0%,#0b001d_58%,#080018_100%)] min-h-[360px] md:min-h-[420px]">
              <GridPattern />
              <div className="grid min-h-[360px] grid-cols-1 md:min-h-[420px] md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative z-10 flex flex-col justify-center px-7 py-8 md:px-10">
                  <h3 className="max-w-[360px] text-[28px] font-light leading-[1.2] tracking-[-0.03em] text-[#b77dff] md:text-[34px]">
                    {t.card1Title}
                  </h3>

                  <p className="mt-5 max-w-[420px] text-[16px] leading-[1.55] text-white/55 md:text-[17px]">
                    {t.card1Desc}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-fit items-center rounded-full bg-[#b77dff] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {t.learn}
                  </Link>
                </div>

                <div className="relative min-h-[220px]">
                  <div className="absolute inset-0">
                    <Image
                      src="/placeholder.svg?height=520&width=720"
                      alt="Desktop preview"
                      fill
                      className="object-contain object-bottom-right opacity-95"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr]">
              <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-[radial-gradient(circle_at_top_left,#23113f_0%,#100022_75%,#090015_100%)] min-h-[290px]">
                <GridPattern />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-8 text-center">
                  <div className="text-[68px] font-semibold leading-none tracking-[-0.06em] text-white md:text-[84px]">
                    <StatCount end={4} suffix=".7+" start={startCount} />
                  </div>

                  <h4 className="mt-3 text-[24px] font-medium leading-tight text-white md:text-[28px]">
                    {t.card3Title}
                  </h4>

                  <div className="mt-6 flex items-center gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <Star
                        key={i}
                        className="h-8 w-8 fill-[#ffb36b] text-[#ffb36b]"
                      />
                    ))}
                    <Star className="h-8 w-8 fill-[#2a2040] text-[#2a2040]" />
                  </div>

                  <p className="mt-7 max-w-[300px] text-[16px] leading-[1.55] text-white/50">
                    {t.card3Desc}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#b983ff_0%,#7b4ac6_45%,#4c257a_100%)] min-h-[290px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.16),transparent_55%)]" />
                <div className="grid min-h-[290px] grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative z-10 flex flex-col justify-center px-8 py-8 md:px-9">
                    <h3 className="max-w-[350px] text-[28px] font-light leading-[1.18] tracking-[-0.03em] text-white md:text-[34px]">
                      {t.card4Title}
                    </h3>

                    <p className="mt-5 max-w-[360px] text-[16px] leading-[1.55] text-white/90 md:text-[17px]">
                      {t.card4Desc}
                    </p>

                    <Link
                      href="/services"
                      className="mt-8 inline-flex w-fit items-center rounded-full bg-[#080018] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.03]"
                    >
                      {t.learn}
                    </Link>
                  </div>

                  <div className="relative min-h-[220px]">
                    <div className="absolute inset-0">
                      <Image
                        src="/placeholder.svg?height=520&width=560"
                        alt="Mobile app preview"
                        fill
                        className="object-contain object-right-bottom opacity-95"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-[#2d2640] min-h-[360px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[radial-gradient(circle_at_bottom_left,#3ba9c8_0%,#3ba9c8_35%,transparent_36%),radial-gradient(circle_at_32%_100%,#3ba9c8_0%,#3ba9c8_24%,transparent_25%),radial-gradient(circle_at_58%_100%,#3ba9c8_0%,#3ba9c8_24%,transparent_25%),radial-gradient(circle_at_82%_100%,#dce6ec_0%,#dce6ec_32%,transparent_33%)]" />
            <div className="relative z-10 px-8 pb-12 pt-14 md:px-10 md:pt-16">
              <h3 className="max-w-[220px] text-[28px] font-medium leading-[1.22] tracking-[-0.03em] text-white md:text-[34px]">
                {t.card2Title}
              </h3>

              <p className="mt-6 max-w-[220px] text-[16px] leading-[1.55] text-white/50 md:text-[17px]">
                {t.card2Desc}
              </p>
            </div>
            <RocketIllustration />
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#b77dff_0%,#f07fc1_100%)] min-h-[360px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.18),transparent_48%)]" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-10 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_40px_rgba(255,255,255,0.16)]">
                <Phone className="h-10 w-10 text-[#b77dff]" strokeWidth={1.8} />
              </div>

              <h3 className="mt-10 text-[30px] font-medium leading-tight text-white">
                {t.card5Title}
              </h3>

              <p className="mt-3 text-[26px] font-light tracking-[-0.03em] text-white md:text-[30px]">
                {t.card5Phone}
              </p>

              <p className="mt-8 max-w-[300px] text-[16px] leading-[1.75] text-white/92">
                {t.card5Desc}
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center rounded-full bg-[#080018] px-9 py-4 text-[15px] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                {t.call}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
