"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

type Slide = {
  image: string
  line1: string
  line2: string
  color: string
}

const slides: Slide[] = [
  {
    image: "/HeroImage1.png",
    line1: "CONTENT CREATION",
    line2: "& BRANDING",
    color: "#9c003a",
  },
  {
    image: "/HeroImage2.png",
    line1: "INFLUENCER",
    line2: "& AFFILIATE MARKETING",
    color: "#a6406a",
  },
]

function StarCore() {
  return (
    <svg viewBox="0 0 512 512" className="h-[34px] w-[34px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z"
      />
    </svg>
  )
}

function RotatingBadge() {
  return (
    <div className="relative flex h-[84px] w-[84px] items-center justify-center text-[#9c003a] md:h-[96px] md:w-[96px]">
      <div className="absolute inset-0 rounded-full border-[3px] border-current hero-ring-spin" />
      <div className="relative z-10 flex h-full w-full items-center justify-center hero-star-spin">
        <StarCore />
      </div>
    </div>
  )
}

function Counter({ value, duration = 1800 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value, duration])

  return <>{count}</>
}

function StatBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-[150px] md:w-[180px]">
      <div className="flex items-start gap-1.5">
        <div
          className={`${poppins.className} text-[42px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[56px]`}
        >
          <Counter value={value} />
        </div>
        <div
          className={`${poppins.className} mt-[6px] text-[18px] font-semibold leading-none text-[#9c003a] md:mt-[8px] md:text-[22px]`}
        >
          +
        </div>
      </div>

      <div
        className={`${poppins.className} mt-2 text-[12px] font-semibold uppercase leading-none tracking-[-0.01em] text-white md:text-[15px]`}
      >
        {label}
      </div>

      <div className="mt-4 h-[3px] w-[118px] bg-[#9c003a] md:mt-5 md:w-[150px]" />
    </div>
  )
}

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
      setAnimKey((k) => k + 1)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setAnimKey((k) => k + 1)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setAnimKey((k) => k + 1)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
    setAnimKey((k) => k + 1)
  }

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
      className="relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1720px] flex-col justify-center px-4 pb-0 pt-6 md:min-h-[820px] md:px-8 xl:px-10">
        <div className="relative min-h-[680px] w-full md:min-h-[760px]">

          <div className="relative z-10 grid min-h-[680px] grid-cols-1 items-center gap-6 pt-12 md:min-h-[760px] md:pt-16 xl:grid-cols-[22%_50%_20%] xl:justify-between xl:gap-0">

            <div className="hidden xl:block" />

            {/* HERO FIGURE (smaller now) */}
            <div className="relative z-[10] flex min-h-[420px] items-center justify-center overflow-visible md:min-h-[620px]">
              <div
                key={`image-${animKey}`}
                className="absolute left-1/2 top-1/2 h-[74vh] w-[105vw] max-w-none -translate-x-1/2 -translate-y-1/2 hero-figure-enter md:h-[86vh] xl:h-[94vh]"
                style={{
                  transform: `translate(calc(-50% + ${mouse.x * 8}px), calc(-50% + ${mouse.y * 5}px))`,
                }}
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.line1}
                  fill
                  priority
                  className="object-contain object-center scale-[0.96] md:scale-[1] xl:scale-[1.03]"
                />
              </div>
            </div>

            <div className="hidden xl:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
