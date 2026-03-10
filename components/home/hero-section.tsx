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
      className={`flex items-center gap-3 rounded-[16px] bg-white px-4 py-3 shadow-[0_16px_35px_rgba(87,78,163,0.12)] ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6c63ff] text-white">
        {icon}
      </div>

      <div>
        <div className="text-[18px] font-bold leading-none text-[#6c63ff]">
          {value}
        </div>
        <div className="mt-1.5 text-[15px] font-medium leading-none text-[#7c7c86]">
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
      {/* bottom curves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-90px] left-[-5%] h-[210px] w-[60%] rounded-[100%] bg-[#e4e0ff]" />
        <div className="absolute bottom-[-90px] right-[-5%] h-[210px] w-[55%] rounded-[100%] bg-[#e7e3ff]" />
      </div>

      {/* stars */}
      <StarShape className="absolute left-[55%] top-[21%] z-[2] h-12 w-12 text-[#6c63ff]" />
      <StarShape className="absolute right-[8%] bottom-[25%] z-[2] h-12 w-12 text-[#6c63ff]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-8 lg:px-10">
        <div className="grid min-h-[760px] items-center gap-8 lg:grid-cols-[47%_53%]">
          {/* LEFT */}
          <div
            className="relative z-[5] max-w-[620px]"
            style={{
              transform: `translate(${mouse.x * -5}px, ${mouse.y * -4}px)`,
            }}
          >
            <div className="mb-6 text-[14px] font-medium uppercase tracking-[0.08em] text-[#6c63ff] lg:text-[16px]">
              THE BEST INFLUENCER AGENCY
            </div>

            <h1 className="text-[64px] font-bold leading-[0.98] tracking-[-0.05em] text-[#252525] xl:text-[76px]">
              The{" "}
              <span className="relative inline-block text-[#6c63ff]">
                Leading
                <span className="absolute left-0 right-0 bottom-[0.08em] h-[4px] rounded-full bg-[#6c63ff]" />
              </span>{" "}
              Agency
              <br />
              for Digital
              <br />
              Influencer
              <br />
              Marketing
            </h1>

            <p className="mt-8 max-w-[600px] text-[16px] leading-[1.9] text-[#7b7b88] lg:text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-9">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-[8px] bg-[#6c63ff] px-8 py-4 text-[15px] font-medium uppercase tracking-[0.05em] text-white transition hover:bg-[#5c54f0]"
              >
                LEARN MORE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[620px] items-center justify-center">
            {/* circle */}
            <div
              className="absolute right-[7%] top-1/2 z-[1] h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#6c63ff] xl:h-[520px] xl:w-[520px]"
              style={{
                transform: `translate(${mouse.x * 8}px, calc(-50% + ${mouse.y * 6}px))`,
              }}
            />

            {/* image wrapper - smaller because your asset is wide */}
            <div
              className="relative z-[3] h-[420px] w-full max-w-[640px] xl:h-[500px] xl:max-w-[760px]"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 6}px)`,
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
              className="absolute right-[1%] top-[24%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 4}px, ${mouse.y * 4}px)`,
              }}
            >
              <FloatingCard
                icon={<UserRound className="h-6 w-6" />}
                value="100%"
                label="Top Rated Job"
                className="min-w-[260px]"
              />
            </div>

            {/* bottom card */}
            <div
              className="absolute bottom-[8%] left-[8%] z-[4]"
              style={{
                transform: `translate(${mouse.x * 4}px, ${mouse.y * 4}px)`,
              }}
            >
              <FloatingCard
                icon={<Heart className="h-6 w-6 fill-current" />}
                value="99.9%"
                label="Satisfied Users"
                className="min-w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
