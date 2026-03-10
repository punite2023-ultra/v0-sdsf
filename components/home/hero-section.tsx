"use client"

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import {
  ArrowRight,
  Play,
  BarChart3,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

function MiniStat({
  icon,
  label,
  value,
  className = "",
}: {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(33,19,89,0.18)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3efff] text-[#6d5cff]">
          {icon}
        </div>
        <div>
          <div className="text-[14px] font-bold leading-none text-[#1f1f28]">
            {value}
          </div>
          <div className="mt-1 text-[12px] leading-none text-[#7c7c95]">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChartCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-white/95 p-4 shadow-[0_16px_40px_rgba(33,19,89,0.18)] backdrop-blur ${className}`}
    >
      <div className="flex items-end gap-2 h-[70px]">
        <div className="w-3 rounded-full bg-[#d9d2ff] h-[36px]" />
        <div className="w-3 rounded-full bg-[#c1b7ff] h-[52px]" />
        <div className="w-3 rounded-full bg-[#8c7cff] h-[62px]" />
        <div className="w-3 rounded-full bg-[#6d5cff] h-[48px]" />
        <div className="w-3 rounded-full bg-[#4f3df2] h-[68px]" />
      </div>
      <div className="mt-3 text-[12px] font-semibold text-[#7b7b92]">
        Monthly Growth
      </div>
    </div>
  )
}

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${poppins.className} relative overflow-hidden bg-[#f7f4ff]`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#ede7ff]" />
        <div className="absolute right-[-120px] bottom-[-40px] h-[260px] w-[260px] rounded-full bg-[#efeaff]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 pb-10 pt-8 md:px-8 md:pb-14 xl:px-10">
        <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#5b43f4_0%,#6d52ff_45%,#7f61ff_100%)] shadow-[0_24px_70px_rgba(72,52,201,0.22)]">
          <div className="grid min-h-[620px] items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-14 xl:min-h-[680px] xl:px-16">
            {/* LEFT */}
            <div
              className="relative z-[3] max-w-[560px]"
              style={{
                transform: `translate(${mouse.x * -10}px, ${mouse.y * -8}px)`,
              }}
            >
              <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                Social Media Marketing
              </div>

              <h1 className="text-[38px] font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-[48px] md:text-[56px] xl:text-[66px]">
                Grow your brand
                <br />
                with smarter social
                <br />
                media strategy
              </h1>

              <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-white/75 md:text-[15px]">
                Star Digital Solutions helps brands build visibility, create
                engaging content, and turn audience attention into measurable
                digital growth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ffb545] px-6 py-3 text-[13px] font-semibold text-[#2a2148] transition hover:opacity-95"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-white/15"
                >
                  <Play className="h-4 w-4" />
                  Learn More
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/90">
                <div>
                  <div className="text-[24px] font-bold leading-none">12K+</div>
                  <div className="mt-1 text-[12px] text-white/65">
                    Audience Reached
                  </div>
                </div>
                <div>
                  <div className="text-[24px] font-bold leading-none">320+</div>
                  <div className="mt-1 text-[12px] text-white/65">
                    Campaigns Managed
                  </div>
                </div>
                <div>
                  <div className="text-[24px] font-bold leading-none">98%</div>
                  <div className="mt-1 text-[12px] text-white/65">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex min-h-[380px] items-center justify-center md:min-h-[500px] xl:min-h-[560px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[260px] w-[260px] rounded-full bg-white/10 blur-2xl md:h-[340px] md:w-[340px]" />
              </div>

              <div
                className="absolute left-[4%] top-[10%] z-[4]"
                style={{
                  transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
                }}
              >
                <MiniStat
                  icon={<Users className="h-5 w-5" />}
                  value="240.12k+"
                  label="Followers"
                />
              </div>

              <div
                className="absolute left-[8%] bottom-[12%] z-[4]"
                style={{
                  transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
                }}
              >
                <ChartCard />
              </div>

              <div
                className="absolute right-[0%] top-[18%] z-[4]"
                style={{
                  transform: `translate(${mouse.x * 7}px, ${mouse.y * 7}px)`,
                }}
              >
                <MiniStat
                  icon={<TrendingUp className="h-5 w-5" />}
                  value="+38%"
                  label="Engagement Rate"
                />
              </div>

              <div
                className="absolute right-[6%] bottom-[16%] z-[4]"
                style={{
                  transform: `translate(${mouse.x * 7}px, ${mouse.y * 8}px)`,
                }}
              >
                <MiniStat
                  icon={<Heart className="h-5 w-5" />}
                  value="9.8/10"
                  label="Brand Score"
                />
              </div>

              <div
                className="relative z-[3] h-[340px] w-full max-w-[620px] md:h-[430px] xl:h-[500px]"
                style={{
                  transform: `translate(${mouse.x * 16}px, ${mouse.y * 10}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Star Digital Solutions hero"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-[0_24px_60px_rgba(22,12,80,0.28)]"
                />
              </div>

              <div className="pointer-events-none absolute -bottom-10 left-0 h-[140px] w-[220px] rounded-tr-[120px] bg-white/8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
