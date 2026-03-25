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
  layout?: "simple" | "buzkit"
  tagline?: string
  description?: string
  buttonText?: string
  topRightCard?: {
    value: string
    label: string
  }
  bottomRightCard?: {
    value: string
    label: string
  }
  hasStars?: boolean
  backgroundColor?: string
}

const slides: Slide[] = [
  {
    image: "/HeroImage1.png",
    line1: "CONTENT CREATION",
    line2: "& BRANDING",
    color: "#9c003a",
    layout: "simple",
  },
  {
    image: "/HeroImage2.png",
    line1: "INFLUENCER",
    line2: "& AFFILIATE MARKETING",
    color: "#a6406a",
    layout: "simple",
  },
  {
    image: "/HeroImage3.png",
    line1: "The",
    line2: "Leading Agency",
    color: "#2d25cc",
    layout: "buzkit",
    tagline: "THE BEST INFLUENCER AGENCY",
    description: "for Digital Influencer Marketing",
    buttonText: "LEARN MORE",
    topRightCard: {
      value: "100%",
      label: "Top Rated Job",
    },
    bottomRightCard: {
      value: "99.9%",
      label: "Satisfied Users",
    },
    hasStars: true,
    backgroundColor: "#e8e4f3",
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

  const isBuzkit = activeSlide.layout === "buzkit"

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${isBuzkit ? "bg-gradient-to-b from-[#e8e4f3] to-[#dfd8e8]" : "text-white"}`}
    >
      {!isBuzkit && (
        <>
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
        </>
      )}

      {isBuzkit ? (
        // Buzkit Layout
        <div className="relative z-10 mx-auto flex min-h-[750px] max-w-[1400px] flex-col justify-center px-4 pb-0 pt-12 md:min-h-[850px] md:px-8 xl:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-left">
              {activeSlide.tagline && (
                <div
                  className={`${poppins.className} text-sm font-semibold uppercase tracking-wide text-[#6366f1]`}
                >
                  {activeSlide.tagline}
                </div>
              )}
              <div>
                <h1 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d2d2d]`}>
                  <span>{activeSlide.line1}</span>{" "}
                  <span className="text-[#6366f1] underline decoration-4 underline-offset-2">
                    {activeSlide.line2}
                  </span>
                </h1>
                {activeSlide.description && (
                  <p className={`${anton.className} text-2xl md:text-3xl text-[#2d2d2d] mt-1`}>
                    {activeSlide.description}
                  </p>
                )}
              </div>
              {/* Description text */}
              <p className={`${poppins.className} text-[#6b5b95] leading-relaxed max-w-md`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              {activeSlide.buttonText && (
                <button className={`${poppins.className} w-fit bg-[#6366f1] hover:bg-[#5558d9] text-white font-bold py-3 px-6 rounded-lg transition`}>
                  {activeSlide.buttonText} →
                </button>
              )}
            </div>

            {/* Right Content - Image with decorative elements and cards */}
            <div className="relative flex items-center justify-center min-h-[450px]">
              {/* Decorative stars */}
              {activeSlide.hasStars && (
                <>
                  <div className="absolute top-20 right-32 text-[#6366f1] opacity-80">
                    <StarCore />
                  </div>
                  <div className="absolute bottom-24 right-8 text-[#6366f1] opacity-60">
                    <StarCore />
                  </div>
                </>
              )}

              {/* Blue circular background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-full blur-2xl opacity-70" />
              </div>

              {/* Image */}
              <div
                key={`image-${animKey}`}
                className="relative z-10 w-full max-w-sm h-auto"
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.line1}
                  width={400}
                  height={500}
                  priority
                  className="object-contain w-full h-auto"
                />
              </div>

              {/* Top right info card */}
              {activeSlide.topRightCard && (
                <div className="absolute top-20 right-0 md:right-4 bg-white rounded-lg shadow-lg p-4 md:p-6 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white text-lg font-bold">
                      👤
                    </div>
                    <div>
                      <div className={`${poppins.className} text-[#6366f1] font-bold text-lg md:text-xl`}>
                        {activeSlide.topRightCard.value}
                      </div>
                      <div className={`${poppins.className} text-[#666] text-xs md:text-sm font-medium`}>
                        {activeSlide.topRightCard.label}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom right info card */}
              {activeSlide.bottomRightCard && (
                <div className="absolute bottom-12 right-0 md:right-8 bg-white rounded-lg shadow-lg p-4 md:p-6 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white text-lg font-bold">
                      ❤️
                    </div>
                    <div>
                      <div className={`${poppins.className} text-[#6366f1] font-bold text-lg md:text-xl`}>
                        {activeSlide.bottomRightCard.value}
                      </div>
                      <div className={`${poppins.className} text-[#666] text-xs md:text-sm font-medium`}>
                        {activeSlide.bottomRightCard.label}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Original Layout
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
      )}

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
