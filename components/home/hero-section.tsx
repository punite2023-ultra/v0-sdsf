"use client"

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { ArrowRight } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function HeroSection() {
  return (
    <section className={`${poppins.className} relative overflow-hidden bg-[#081f1c]`}>

      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#00ff9d]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[52%_48%]">

          {/* LEFT TEXT */}
          <div className="max-w-[620px]">

            <h1 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-[52px] xl:text-[64px]">
              The Leading Agency for Digital Influencer Marketing
            </h1>

            <p className="mt-6 text-[16px] leading-8 text-white/70">
              Star Digital Solutions helps brands grow through content creation,
              influencer campaigns, and platform management that builds
              visibility, engagement, and measurable growth.
            </p>

            <div className="mt-10 flex items-center gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00ff9d] px-7 py-4 text-[14px] font-semibold text-[#021a17] transition hover:brightness-95"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 text-[14px] font-medium text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center">

            {/* circle */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#0f3a34]" />

            {/* hero image */}
            <div className="relative z-10 h-[420px] w-full max-w-[620px]">
              <Image
                src="/HeroImage1.png"
                alt="Hero image"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* floating card */}
            <div className="absolute bottom-[40px] right-[40px] rounded-xl bg-white p-5 shadow-xl">
              <div className="text-[13px] text-gray-500">Happy Clients</div>
              <div className="mt-1 text-[28px] font-semibold text-[#0b2c28]">
                1200+
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
