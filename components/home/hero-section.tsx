"use client"

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

function StarShape({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z"
        fill="currentColor"
      />
    </svg>
  )
}

function StatCard({
  title,
  subtitle,
  className = "",
}: {
  title: string
  subtitle: string
  className?: string
}) {
  return (
    <div
      className={`rounded-xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(98,36,142,0.14)] ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 h-9 w-9 rounded-full bg-[#ede7ff] flex items-center justify-center">
          <div className="h-3.5 w-3.5 rounded-full bg-[#6c3bff]" />
        </div>
        <div>
          <div className="text-[14px] font-semibold leading-none text-[#1f1f1f] md:text-[15px]">
            {title}
          </div>
          <div className="mt-1 text-[11px] font-medium leading-none text-[#7c7c94] md:text-[12px]">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      className={`${poppins.className} relative overflow-hidden bg-[#f2edff]`}
    >
      {/* background waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-[320px] bg-[radial-gradient(120%_90%_at_50%_100%,rgba(122,70,255,0.12),transparent_60%)]" />
        <div className="absolute left-[-8%] top-[22%] h-[340px] w-[340px] rounded-full bg-[#7a46ff]/[0.05] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#62248e]/[0.08] blur-3xl" />

        <svg
          className="absolute bottom-0 left-0 h-[240px] w-full md:h-[300px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(122, 70, 255, 0.10)"
            d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,261.3C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 h-[220px] w-full md:h-[270px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(98, 36, 142, 0.08)"
            d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,128C672,107,768,117,864,149.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* stars */}
      <StarShape className="absolute left-[7%] top-[20%] z-[1] h-6 w-6 text-[#7a46ff] md:h-8 md:w-8" />
      <StarShape className="absolute right-[15%] top-[22%] z-[1] h-5 w-5 text-[#7a46ff] md:h-7 md:w-7" />
      <StarShape className="absolute left-[10%] bottom-[17%] z-[1] h-6 w-6 text-[#7a46ff] md:h-8 md:w-8" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-8 md:px-8 md:pb-20 md:pt-10 xl:px-10">
        <div className="grid min-h-[720px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          {/* LEFT CONTENT */}
          <div
            className={`relative z-20 max-w-[620px] transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transform: `translate(${mouse.x * -10}px, ${mouse.y * -8}px)`,
            }}
          >
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7d70a6] md:text-[12px]">
              The Best Influencer Marketing Agency
            </div>

            <h1 className="max-w-[640px] text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#202020] sm:text-[54px] md:text-[66px] xl:text-[78px]">
              The <span className="text-[#7a46ff]">Leading</span> Agency
              <br />
              for Digital Influencer
              <br />
              Marketing
            </h1>

            <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-[#7d7d92] md:text-[15px]">
              Star Digital Solutions helps brands grow through content,
              creators, strategy, and platform management that drive visibility,
              engagement, and measurable digital results.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#7a46ff] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#62248e]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[500px] items-center justify-center md:min-h-[620px] lg:min-h-[720px]">
            {/* purple circle */}
            <div
              className="absolute right-[8%] top-1/2 z-[1] h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#7a46ff] md:h-[390px] md:w-[390px] xl:h-[470px] xl:w-[470px]"
              style={{
                transform: `translate(${mouse.x * 12}px, calc(-50% + ${mouse.y * 10}px))`,
              }}
            />

            {/* image */}
            <div
              className={`relative z-[3] h-[360px] w-[115%] max-w-[760px] transition-all duration-700 md:h-[500px] lg:h-[620px] ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transform: `translate(${mouse.x * 18}px, ${mouse.y * 10}px)`,
              }}
            >
              <Image
                src="/HeroImage1.png"
                alt="Hero figure"
                fill
                priority
                className="object-contain object-center drop-shadow-[0_24px_50px_rgba(34,19,80,0.18)]"
              />
            </div>

            {/* floating card top */}
            <div
              className="absolute right-[4%] top-[21%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <StatCard title="100%" subtitle="Top Rated Agency" />
            </div>

            {/* floating card bottom */}
            <div
              className="absolute left-[10%] bottom-[16%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 12}px)`,
              }}
            >
              <StatCard title="99.9%" subtitle="Satisfied Clients" />
            </div>

            {/* extra star */}
            <StarShape
              className="absolute right-[8%] top-[43%] z-[2] h-7 w-7 text-[#7a46ff] md:h-9 md:w-9"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
