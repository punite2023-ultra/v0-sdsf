"use client"

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { ArrowRight, Play, Heart } from "lucide-react"
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

function FollowerCard() {
  return (
    <div className="rounded-[18px] border border-white/60 bg-white/20 px-5 py-5 backdrop-blur-md shadow-[0_18px_40px_rgba(29,17,90,0.18)] md:px-6 md:py-6">
      <div className="flex items-center gap-3 text-white">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
          <Heart className="h-5 w-5 fill-current" />
        </div>
        <div className="text-[15px] font-medium uppercase tracking-[0.08em] text-white/90">
          Followers
        </div>
      </div>

      <div className="mt-4 text-[34px] font-bold leading-none tracking-[-0.04em] text-white md:text-[46px]">
        24.012K+
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
      className={`${poppins.className} relative overflow-hidden bg-[#f3f3f6]`}
    >
      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-6 md:px-8 md:pb-12 xl:px-10">
        {/* optional top brand label */}
        <div className="mb-6 hidden md:block">
          <span className="text-[28px] font-semibold tracking-[-0.04em] text-[#6b5cff] md:text-[40px]">
            StarDigital
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[28px] rounded-bl-[90px] bg-[linear-gradient(135deg,#5d43f3_0%,#6d52ff_45%,#7757ff_100%)] shadow-[0_30px_80px_rgba(70,48,180,0.22)] md:rounded-[34px] md:rounded-bl-[130px]">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[120px] h-[180px] w-[180px] rounded-full bg-[#ff7ad9]/20 blur-[10px]" />
            <div className="absolute right-[12%] top-[0%] h-[180px] w-[180px] rounded-full bg-[#ff7ad9]/15 blur-[10px] md:h-[220px] md:w-[220px]" />
            <div className="absolute right-[-30px] bottom-[80px] h-[260px] w-[260px] rounded-full bg-[#8a72ff]/30 blur-[8px]" />
          </div>

          {/* ring decorations */}
          <div className="pointer-events-none absolute bottom-[-30px] left-[-20px] h-[180px] w-[180px] rounded-full border-[3px] border-[#ff8ccf]/40 md:h-[220px] md:w-[220px]" />
          <div className="pointer-events-none absolute bottom-[18px] left-[28px] h-[130px] w-[130px] rounded-full border-[3px] border-[#ff8ccf]/30 md:h-[160px] md:w-[160px]" />
          <div className="pointer-events-none absolute bottom-[40px] left-[60px] h-[80px] w-[80px] rounded-full border-[3px] border-[#ff8ccf]/25 md:h-[100px] md:w-[100px]" />

          <div className="pointer-events-none absolute bottom-[-10px] right-[20px] h-[180px] w-[180px] rounded-full border border-white/10 md:h-[230px] md:w-[230px]" />
          <div className="pointer-events-none absolute bottom-[22px] right-[52px] h-[130px] w-[130px] rounded-full border border-white/10 md:h-[170px] md:w-[170px]" />
          <div className="pointer-events-none absolute bottom-[52px] right-[82px] h-[85px] w-[85px] rounded-full border border-white/10 md:h-[110px] md:w-[110px]" />

          <div className="relative z-10 grid min-h-[620px] items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-14 lg:py-0 xl:min-h-[700px] xl:px-16">
            {/* LEFT CONTENT */}
            <div
              className="relative z-[3] max-w-[700px] py-2 md:py-12"
              style={{
                transform: `translate(${mouse.x * -8}px, ${mouse.y * -6}px)`,
              }}
            >
              <h1 className="max-w-[760px] text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[52px] md:text-[64px] xl:text-[78px]">
                Connecting you to the latest stats and trend in Star Digital.
              </h1>

              <div className="mt-8 max-w-[620px] border-l border-white/45 pl-5 text-[15px] leading-8 text-white/78 md:text-[16px]">
                Star Digital Solutions helps brands grow through content,
                creator campaigns, strategy, and platform management designed
                to build visibility, engagement, and measurable results.
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-white/15 md:px-10"
                >
                  Explore Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff9a3d] px-5 py-3 text-white shadow-[0_14px_30px_rgba(255,154,61,0.24)] transition hover:brightness-105 md:px-6 md:py-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ff7a00] md:h-12 md:w-12">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="text-[14px] font-medium uppercase tracking-[0.05em]">
                      Watch Video
                    </span>
                    <span className="mt-1 text-[13px] text-white/90">
                      Start your free trial
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE AREA */}
            <div className="relative flex min-h-[360px] items-end justify-center md:min-h-[500px] lg:min-h-[620px]">
              <div
                className="absolute right-[4%] top-[18%] z-[4] md:right-[2%] md:top-[22%]"
                style={{
                  transform: `translate(${mouse.x * 5}px, ${mouse.y * 5}px)`,
                }}
              >
                <FollowerCard />
              </div>

              <div
                className="relative z-[3] h-[360px] w-full max-w-[520px] sm:h-[420px] sm:max-w-[600px] md:h-[520px] md:max-w-[700px] lg:h-[610px] lg:max-w-[820px]"
                style={{
                  transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Hero image"
                  fill
                  priority
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
