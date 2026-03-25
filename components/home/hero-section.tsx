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
  {
    image: "/HeroImage3.png",
    line1: "THE LEADING",
    line2: "AGENCY",
    color: "#6366f1",
  },
]

function StarCore() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-[34px] w-[34px]"
      aria-hidden="true"
    >
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

function Counter({
  value,
  duration = 1800,
}: {
  value: number
  duration?: number
}) {
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

function StatBlock({
  value,
  label,
}: {
  value: number
  label: string
}) {
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
          {/* Left stats desktop */}
          <div
            className="absolute left-0 top-[170px] z-[12] hidden xl:flex xl:flex-col xl:gap-8"
            style={{
              transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
            }}
          >
            <StatBlock value={500} label="HAPPY CLIENT" />
            <StatBlock value={125} label="PROJECT DONE" />
            <StatBlock value={450} label="MEDIA FEATURED" />
          </div>

          {/* Badge desktop */}
          <div
            className="absolute right-[110px] top-[105px] z-[14] hidden xl:block"
            style={{
              transform: `translate(${mouse.x * 3}px, ${mouse.y * 3}px)`,
            }}
          >
            <RotatingBadge />
          </div>

          {/* Text behind figure only */}
          <div
            key={`text-${animKey}`}
            className="pointer-events-none absolute left-1/2 top-[57%] z-[6] w-full -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <div
              className={`${anton.className} hero-fill-text hero-text-enter`}
              style={{
                color: activeSlide.color,
                transform: `translate(${mouse.x * 4}px, ${mouse.y * 2}px)`,
              }}
            >
              {activeSlide.line1}
            </div>
            <div
              className={`${anton.className} hero-fill-text hero-fill-text-second hero-text-enter`}
              style={{
                color: activeSlide.color,
                transform: `translate(${mouse.x * 4}px, ${mouse.y * 2}px)`,
              }}
            >
              {activeSlide.line2}
            </div>
          </div>

          <div className="relative z-10 grid min-h-[680px] grid-cols-1 items-center gap-6 pt-12 md:min-h-[760px] md:pt-16 xl:grid-cols-[22%_50%_20%] xl:justify-between xl:gap-0">
            <div className="hidden xl:block" />

            {/* Figure */}
            <div className="relative z-[10] flex min-h-[420px] items-center justify-center overflow-visible md:min-h-[620px]">
              <div
                key={`image-${animKey}`}
                className="absolute left-1/2 top-1/2 h-[82vh] w-[115vw] max-w-none -translate-x-1/2 -translate-y-1/2 hero-figure-enter md:h-[96vh] xl:h-[104vh]"
                style={{
                  transform: `translate(calc(-50% + ${mouse.x * 8}px), calc(-50% + ${mouse.y * 5}px))`,
                }}
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.line1}
                  fill
                  priority
                  className="object-contain object-center scale-[1.02] md:scale-[1.06] xl:scale-[1.1]"
                />
              </div>
            </div>

            <div className="hidden xl:block" />
          </div>

          {/* Subtle controls desktop */}
          <div className="absolute bottom-8 right-0 z-[20] hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white/75 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-white/85"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white/75 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile stats */}
          <div className="relative z-[20] mt-2 grid gap-5 xl:hidden">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <StatBlock value={500} label="HAPPY CLIENT" />
              <StatBlock value={125} label="PROJECT DONE" />
              <StatBlock value={450} label="MEDIA FEATURED" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white/75 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-white/85"
                        : "w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white/75 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex justify-end pr-1 sm:pr-3">
              <RotatingBadge />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-fill-text {
          font-size: clamp(48px, 8vw, 170px);
          line-height: 0.94;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .hero-fill-text-second {
          margin-top: 1.4vw;
        }

        .hero-figure-enter {
          animation: figureSlideIn 0.9s ease-out both;
        }

        .hero-text-enter {
          animation: textSlideIn 0.9s ease-out both;
        }

        .hero-ring-spin {
          animation: ringRotate 6s linear infinite;
          transform-origin: center;
        }

        .hero-star-spin {
          animation: starRotate 4s linear infinite reverse;
          transform-origin: center;
        }

        @keyframes figureSlideIn {
          0% {
            opacity: 0;
            transform: translateX(120px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ringRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes starRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 767px) {
          .hero-fill-text {
            font-size: clamp(34px, 10vw, 64px);
            line-height: 0.95;
            letter-spacing: -1px;
          }

          .hero-fill-text-second {
            margin-top: 8px;
          }
        }
      `}</style>
    </section>
  )
}
