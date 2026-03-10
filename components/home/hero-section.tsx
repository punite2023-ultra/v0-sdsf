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
      className={`flex items-center gap-3 rounded-[14px] bg-white px-3 py-3 shadow-[0_14px_32px_rgba(87,78,163,0.14)] sm:gap-4 sm:px-4 sm:py-3.5 md:rounded-[18px] ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6c63ff] text-white sm:h-12 sm:w-12 md:h-14 md:w-14">
        {icon}
      </div>

      <div>
        <div className="text-[16px] font-bold leading-none text-[#6c63ff] sm:text-[18px] md:text-[20px]">
          {value}
        </div>
        <div className="mt-1.5 text-[13px] font-medium leading-none text-[#7c7c86] sm:text-[14px] md:text-[16px]">
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
      {/* bottom soft curves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-90px] left-[-20%] h-[180px] w-[100%] rounded-[100%] bg-[#e5e1ff] sm:bottom-[-100px] sm:h-[210px] lg:bottom-[-120px] lg:left-[-8%] lg:h-[300px] lg:w-[76%]" />
        <div className="absolute bottom-[-80px] right-[-20%] h-[160px] w-[90%] rounded-[100%] bg-[#e8e4ff] sm:bottom-[-90px] sm:h-[190px] lg:bottom-[-110px] lg:right-[-8%] lg:h-[260px] lg:w-[66%]" />
      </div>

      {/* stars */}
      <StarShape className="absolute left-[10%] top-[33%] z-[2] h-8 w-8 text-[#6c63ff] sm:h-10 sm:w-10 lg:left-[54%] lg:top-[18%] lg:h-16 lg:w-16" />
      <StarShape className="absolute right-[12%] bottom-[21%] z-[2] h-8 w-8 text-[#6c63ff] sm:h-10 sm:w-10 lg:right-[7%] lg:top-[64%] lg:h-14 lg:w-14" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-4 pt-6 sm:px-6 md:px-8 xl:px-10">
        <div className="grid min-h-[760px] items-center gap-8 pb-10 pt-4 lg:grid-cols-[52%_48%] lg:gap-6 lg:pb-0 lg:pt-8 xl:min-h-[840px]">
          {/* left content */}
          <div
            className="relative z-[5] max-w-[860px] pt-4 lg:pt-0"
            style={{
              transform: `translate(${mouse.x * -6}px, ${mouse.y * -4}px)`,
            }}
          >
            <div className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-[#6c63ff] sm:mb-5 sm:text-[13px] md:text-[14px] lg:mb-7 lg:text-[18px]">
              THE BEST INFLUENCER AGENCY
            </div>

            <h1 className="max-w-[900px] text-[40px] font-bold leading-[1.02] tracking-[-0.05em] text-[#252525] sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[92px]">
              The{" "}
              <span className="relative inline-block text-[#6c63ff]">
                Leading
                <span className="absolute left-0 right-0 bottom-[0.08em] h-[3px] rounded-full bg-[#6c63ff] sm:h-[4px] md:h-[5px]" />
              </span>{" "}
              Agency
              <br />
              for Digital Influencer
              <br />
              Marketing
            </h1>

            <p className="mt-5 max-w-[620px] text-[14px] leading-[1.9] text-[#7b7b88] sm:mt-6 sm:text-[15px] md:max-w-[700px] md:text-[16px] lg:mt-8 lg:text-[18px] xl:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-6 sm:mt-7 lg:mt-9">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-[8px] bg-[#6c63ff] px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.05em] text-white transition hover:bg-[#5c54f0] sm:px-7 sm:py-4 sm:text-[14px] lg:px-10 lg:py-5 lg:text-[17px]"
              >
                LEARN MORE
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
            </div>
          </div>

          {/* right visual */}
          <div className="relative flex min-h-[420px] items-end justify-center sm:min-h-[500px] md:min-h-[620px] lg:min-h-[700px] xl:min-h-[820px]">
            {/* main circle */}
            <div
              className="absolute bottom-[78px] left-1/2 z-[1] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#6c63ff] sm:bottom-[88px] sm:h-[320px] sm:w-[320px] md:bottom-[95px] md:h-[400px] md:w-[400px] lg:bottom-auto lg:left-auto lg:right-[7%] lg:top-1/2 lg:h-[500px] lg:w-[500px] lg:-translate-x-0 lg:-translate-y-1/2 xl:h-[620px] xl:w-[620px]"
              style={{
                transform:
                  typeof window === "undefined"
                    ? undefined
                    : undefined,
              }}
            />

            {/* image */}
            <div
              className="relative z-[3] h-[360px] w-full max-w-[360px] sm:h-[430px] sm:max-w-[430px] md:h-[560px] md:max-w-[520px] lg:h-[640px] lg:max-w-[640px] xl:h-[800px] xl:max-w-[760px]"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 6}px)`,
              }}
            >
              <Image
                src="/HeroImage1.png"
                alt="Hero image"
                fill
                priority
                className="object-contain object-bottom lg:object-center"
              />
            </div>

            {/* top card */}
            <div
              className="absolute right-[4%] top-[18%] z-[4] sm:right-[8%] sm:top-[20%] md:right-[10%] md:top-[22%] lg:right-[2%] lg:top-[25%]"
              style={{
                transform: `translate(${mouse.x * 4}px, ${mouse.y * 4}px)`,
              }}
            >
              <FloatingCard
                icon={<UserRound className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
                value="100%"
                label="Top Rated Job"
                className="min-w-[180px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[300px]"
              />
            </div>

            {/* bottom card */}
            <div
              className="absolute bottom-[18px] left-[2%] z-[4] sm:left-[5%] sm:bottom-[22px] md:left-[8%] md:bottom-[26px] lg:bottom-[12%] lg:left-[5%]"
              style={{
                transform: `translate(${mouse.x * 5}px, ${mouse.y * 5}px)`,
              }}
            >
              <FloatingCard
                icon={<Heart className="h-5 w-5 fill-current sm:h-6 sm:w-6 md:h-7 md:w-7" />}
                value="99.9%"
                label="Satisfied Users"
                className="min-w-[190px] sm:min-w-[225px] md:min-w-[255px] lg:min-w-[285px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
