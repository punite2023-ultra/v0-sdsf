"use client"

import Link from "next/link"
import { Poppins } from "next/font/google"
import { ArrowRight, Play } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function HeroSection() {
  return (
    <section className={`${poppins.className} relative overflow-hidden bg-[#f3f3f6]`}>
      <div className="mx-auto max-w-[1500px] px-4 pb-10 pt-6 md:px-8 xl:px-10">
        
        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-[30px] rounded-bl-[120px] bg-[linear-gradient(135deg,#5d43f3_0%,#6d52ff_45%,#7757ff_100%)] shadow-[0_30px_80px_rgba(70,48,180,0.22)]">

          {/* background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[120px] h-[200px] w-[200px] rounded-full bg-[#ff7ad9]/15 blur-[10px]" />
            <div className="absolute right-[12%] top-[0%] h-[220px] w-[220px] rounded-full bg-[#ff7ad9]/10 blur-[10px]" />
            <div className="absolute right-[-30px] bottom-[80px] h-[260px] w-[260px] rounded-full bg-[#8a72ff]/20 blur-[8px]" />
          </div>

          {/* ring decoration */}
          <div className="pointer-events-none absolute bottom-[40px] left-[60px] h-[90px] w-[90px] rounded-full border-[3px] border-[#ff8ccf]/25" />

          <div className="relative z-10 grid min-h-[520px] items-center gap-8 px-6 py-12 md:px-10 lg:px-16">

            {/* TEXT CONTENT */}
            <div className="max-w-[680px]">

              <h1 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px] lg:text-[52px]">
                Connecting you to the latest stats and trend in Star Digital.
              </h1>

              <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/80 md:text-[16px]">
                Star Digital Solutions helps brands grow through content,
                creator campaigns, strategy, and platform management designed
                to build visibility, engagement, and measurable results.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3 text-[14px] font-medium text-white transition hover:bg-white/15"
                >
                  Explore Now
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff9a3d] px-5 py-3 text-white shadow-[0_14px_30px_rgba(255,154,61,0.24)] transition hover:brightness-105"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff7a00]">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>

                  <span className="flex flex-col leading-none">
                    <span className="text-[13px] font-medium uppercase">
                      Watch Video
                    </span>
                    <span className="text-[12px] text-white/90">
                      Start your free trial
                    </span>
                  </span>
                </Link>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
