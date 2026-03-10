"use client"

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { ArrowRight, Heart, UserRound } from "lucide-react"
import { useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

function StarShape({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
    </svg>
  )
}

function FloatingCard({
  icon,
  value,
  label,
  className = "",
}: {
  icon: React.ReactNode
  value: string
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_18px_40px_rgba(74,64,145,0.16)] ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6f6cff] text-white">
        {icon}
      </div>

      <div>
        <div className="text-[18px] font-bold leading-none text-[#6f6cff] md:text-[22px]">
          {value}
        </div>
        <div className="mt-2 text-[15px] font-medium leading-none text-[#7c7c86] md:text-[17px]">
          {label}
        </div>
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
      className={`${poppins.className} relative overflow-hidden bg-[#efedff]`}
    >
      {/* soft lower waves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[210px] w-full bg-[radial-gradient(120%_120%_at_15%_100%,rgba(202,196,255,0.7),transparent_58%)]" />
        <div className="absolute bottom-0 left-0 h-[260px] w-full bg-[radial-gradient(95%_90%_at_70%_100%,rgba(211,206,255,0.45),transparent_60%)]" />
      </div>

      {/* stars */}
      <StarShape className="absolute left-[52%] top-[16%] z-[2] h-16 w-16 text-[#6f6cff] md:h-20 md:w-20" />
      <StarShape className="absolute right-[7%] top-[62%] z-[2] h-14 w-14 text-[#6f6cff] md:h-16 md:w-16" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-4 pb-10 pt-8 md:px-8 xl:px-10">
        <div className="grid min-h-[760px] items-center gap-8 lg:grid-cols-[52%_48%] xl:min-h-[840px]">
          {/* LEFT */}
          <div
            className="relative z-[5] max-w-[860px]"
            style={{
              transform: `translate(${mouse.x * -8}px, ${mouse.y * -6}px)`,
            }}
          >
            <div className="mb-8 text-[18px] font-medium uppercase tracking-[0.08em] text-[#6f6cff] md:text-[22px]">
              THE BEST INFLUENCER AGENCY
            </div>

            <h1 className="max-w-[900px] text-[58px] font-bold leading-[0.98] tracking-[-0.05em] text-[#252525] md:text-[78px] xl:text-[96px]">
              The{" "}
              <span className="relative inline-block text-[#6f6cff]">
                Leading
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[6px] rounded-full bg-[#6f6cff]" />
              </span>{" "}
              Agency
              <br />
              for Digital Influencer
              <br />
              Marketing
            </h1>

            <p className="mt-10 max-w-[760px] text-[20px] leading-[1.85] text-[#7b7b88] md:text-[21px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-[8px] bg-[#6f6cff] px-10 py-5 text-[18px] font-medium uppercase tracking-[0.05em] text-white transition hover:bg-[#5c57f5]"
              >
                LEARN MORE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[560px] items-center justify-center md:min-h-[700px] xl:min-h-[820px]">
            {/* main purple circle */}
            <div
              className="absolute right-[8%] top-1/2 z-[1] h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#6f6cff] md:h-[560px] md:w-[560px] xl:h-[650px] xl:w-[650px]"
              style={{
                transform: `translate(${mouse.x * 10}px, calc(-50% + ${mouse.y * 8}px))`,
              }}
            />

            {/* person image */}
            <div
              className="relative z-[3] h-[520px] w-full max-w-[760px] md:h-[680px] xl:h-[820px]"
              style={{
                transform: `translate(${mouse.x * 14}px, ${mouse.y * 8}px)`,
              }}
            >
              <Image
                src="/HeroImage1.png"
                alt="Hero image"
                fill
                priority
                className="object-contain object-center"
              />
            </div>

            {/* top card */}
            <div
              className="absolute right-[2%] top-[23%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
              }}
            >
              <FloatingCard
                icon={<UserRound className="h-7 w-7" />}
                value="100%"
                label="Top Rated Job"
                className="min-w-[270px] md:min-w-[320px]"
              />
            </div>

            {/* bottom card */}
            <div
              className="absolute left-[4%] bottom-[12%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 7}px, ${mouse.y * 8}px)`,
              }}
            >
              <FloatingCard
                icon={<Heart className="h-7 w-7 fill-current" />}
                value="99.9%"
                label="Satisfied Users"
                className="min-w-[250px] md:min-w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
