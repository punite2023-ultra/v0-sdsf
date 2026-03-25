"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useMemo, useState, type MouseEvent } from "react"

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
  layout?: "default" | "buzkit"
  eyebrow?: string
  description?: string
  primaryCta?: string
  primaryHref?: string
  logos?: string[]
}

const slides: Slide[] = [
  {
    image: "/HeroImage1.png",
    line1: "CONTENT CREATION",
    line2: "& BRANDING",
    color: "#9c003a",
    layout: "default",
  },
  {
    image: "/HeroImage2.png",
    line1: "INFLUENCER",
    line2: "& AFFILIATE MARKETING",
    color: "#a6406a",
    layout: "default",
  },
  {
    image: "/HeroImage3.5.png",
    line1: "SOCIAL MEDIA",
    line2: "& LIVE SELLING",
    color: "#6f5cff",
    layout: "buzkit",
    eyebrow: "TOP SOCIAL COMMERCE AGENCY",
    description:
      "We help brands grow through social-first campaigns, creator-led content, and live selling strategies designed to turn attention into measurable conversions.",
    primaryCta: "LEARN MORE",
    primaryHref: "/services",
    logos: ["TikTok Live", "Creator Network", "Social Commerce", "Campaign Growth"],
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

function SliderDots({
  activeIndex,
  goToSlide,
}: {
  activeIndex: number
  goToSlide: (index: number) => void
}) {
  return (
    <div className="flex items-center gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => goToSlide(index)}
          className={`rounded-full transition-all duration-300 ease-out ${
            activeIndex === index
              ? "h-4 w-4 scale-110 bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#ec4899] shadow-[0_0_14px_rgba(192,38,211,0.45)]"
              : "h-4 w-4 bg-white/45 hover:bg-white/80"
          }`}
        />
      ))}
    </div>
  )
}

function FloatingInfoCard({
  value,
  label,
  className,
}: {
  value: string
  label: string
  className: string
}) {
  return (
    <div
      className={`absolute ${className} rounded-2xl bg-white px-4 py-3 shadow-[0_20px_45px_rgba(37,24,97,0.14)]`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6f5cff]/10 text-[#6f5cff]">
          <StarCore />
        </div>

        <div>
          <div
            className={`${poppins.className} text-[17px] font-semibold leading-none text-[#181530]`}
          >
            {value}
          </div>
          <div
            className={`${poppins.className} mt-1 text-[12px] font-medium leading-snug text-[#6b6788]`}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

function LogoPill({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-[#d9d3ff] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#6f5cff]" />
        <span
          className={`${poppins.className} text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2b2750]`}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex])
  const isBuzkitSlide = activeSlide.layout === "buzkit"

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

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
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
      className={`relative overflow-hidden ${isBuzkitSlide ? "text-[#181530]" : "text-white"}`}
    >
      <div className="absolute inset-0 -z-20">
        {isBuzkitSlide ? (
          <div className="h-full w-full bg-[#f0ebff]" />
        ) : (
          <Image src="/10121357.jpg" alt="Hero background" fill priority className="object-cover" />
        )}
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={
          isBuzkitSlide
            ? {
                background:
                  "linear-gradient(180deg, rgba(243,240,255,0.98) 0%, rgba(233,228,255,0.96) 100%)",
              }
            : undefined
        }
      />

      {!isBuzkitSlide && <div className="absolute inset-0 -z-10 bg-black/45" />}

      <div
        className={`absolute inset-0 ${
          isBuzkitSlide
            ? "opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,#6f5cff_1px,transparent_0)] [background-size:24px_24px]"
            : "opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1720px] flex-col justify-center px-4 pb-0 pt-6 md:min-h-[820px] md:px-8 xl:px-10">
        <div className="relative min-h-[680px] w-full md:min-h-[760px]">
          {!isBuzkitSlide && (
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
          )}

          {!isBuzkitSlide && (
            <div
              className="absolute right-[110px] top-[105px] z-[14] hidden xl:block"
              style={{
                transform: `translate(${mouse.x * 3}px, ${mouse.y * 3}px)`,
              }}
            >
              <RotatingBadge />
            </div>
          )}

          {!isBuzkitSlide && (
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
          )}

          {!isBuzkitSlide ? (
            <div className="relative z-10 grid min-h-[680px] grid-cols-1 items-center gap-6 pt-12 md:min-h-[760px] md:pt-16 xl:grid-cols-[22%_50%_20%] xl:justify-between xl:gap-0">
              <div className="hidden xl:block" />

              <div className="relative z-[10] flex min-h-[420px] items-center justify-center overflow-visible md:min-h-[620px]">
                <div
                  key={`image-${animKey}`}
                  className="absolute left-1/2 top-[58%] h-[82vh] w-[118vw] max-w-none -translate-x-1/2 -translate-y-1/2 hero-figure-enter md:h-[96vh] md:w-[112vw] xl:top-[59%] xl:h-[104vh] xl:w-[108vw]"
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
          ) : (
            <div className="relative z-10 grid min-h-[680px] grid-cols-1 items-center gap-10 pt-14 md:min-h-[760px] md:pt-16 xl:grid-cols-[46%_54%] xl:gap-4">
              <div key={`copy-${animKey}`} className="relative z-[12] max-w-[560px] hero-copy-enter">
                <div
                  className={`${poppins.className} mb-5 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#6f5cff] md:text-[13px]`}
                >
                  {activeSlide.eyebrow}
                </div>

                <h1
                  className={`${anton.className} text-[48px] leading-[0.94] tracking-[-0.04em] text-[#181530] md:text-[72px] xl:text-[88px]`}
                >
                  {activeSlide.line1}
                  <span className="mt-1 block text-[#6f5cff]">{activeSlide.line2}</span>
                </h1>

                <p
                  className={`${poppins.className} mt-6 max-w-[520px] text-[15px] leading-7 text-[#615d7c] md:text-[17px]`}
                >
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={activeSlide.primaryHref}
                    className={`${poppins.className} inline-flex items-center justify-center rounded-full bg-[#6f5cff] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#5e4ae6]`}
                  >
                    {activeSlide.primaryCta}
                  </a>

                  <div
                    className={`${poppins.className} text-[13px] font-medium uppercase tracking-[0.08em] text-[#6b6788]`}
                  >
                    Strategy • Creators • Live Commerce
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {activeSlide.logos?.map((logo) => (
                    <LogoPill key={logo} label={logo} />
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[620px]">
                <div className="absolute h-[280px] w-[280px] rounded-full bg-[#6f5cff]/16 md:h-[420px] md:w-[420px]" />
                <div className="absolute h-[320px] w-[320px] rounded-full border border-[#a193ff]/35 md:h-[480px] md:w-[480px]" />

                <div
                  key={`image-${animKey}`}
                  className="relative z-[10] h-[420px] w-[320px] hero-figure-enter md:h-[580px] md:w-[460px]"
                  style={{
                    transform: `translate(${mouse.x * 10}px, ${mouse.y * 6}px)`,
                  }}
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.line1}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-[0_24px_60px_rgba(61,46,140,0.16)]"
                  />
                </div>

                <div className="absolute left-[6%] top-[12%] text-[#6f5cff] opacity-70">
                  <StarCore />
                </div>

                <div className="absolute bottom-[12%] right-[7%] text-[#6f5cff] opacity-70">
                  <StarCore />
                </div>

                <FloatingInfoCard
                  value="100%"
                  label="Campaign Ready"
                  className="right-[2%] top-[8%] md:right-[8%]"
                />

                <FloatingInfoCard
                  value="24/7"
                  label="Live Selling Support"
                  className="bottom-[10%] left-[0%] md:left-[6%]"
                />
              </div>
            </div>
          )}

          <div
            className={`absolute bottom-8 right-0 z-[20] hidden items-center gap-4 xl:flex ${
              isBuzkitSlide ? "text-[#181530]" : ""
            }`}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition ${
                isBuzkitSlide
                  ? "border-[#cfc7ff] bg-white/70 text-[#4f46e5] hover:border-[#b6adff] hover:text-[#4338ca]"
                  : "border-white/20 bg-black/15 text-white/75 hover:border-white/40 hover:text-white"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <SliderDots activeIndex={activeIndex} goToSlide={goToSlide} />

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition ${
                isBuzkitSlide
                  ? "border-[#cfc7ff] bg-white/70 text-[#4f46e5] hover:border-[#b6adff] hover:text-[#4338ca]"
                  : "border-white/20 bg-black/15 text-white/75 hover:border-white/40 hover:text-white"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative z-[20] mt-2 grid gap-5 xl:hidden">
            {!isBuzkitSlide && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <StatBlock value={500} label="HAPPY CLIENT" />
                <StatBlock value={125} label="PROJECT DONE" />
                <StatBlock value={450} label="MEDIA FEATURED" />
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition ${
                  isBuzkitSlide
                    ? "border-[#cfc7ff] bg-white/70 text-[#4f46e5] hover:border-[#b6adff] hover:text-[#4338ca]"
                    : "border-white/20 bg-black/15 text-white/75 hover:border-white/40 hover:text-white"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <SliderDots activeIndex={activeIndex} goToSlide={goToSlide} />

              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition ${
                  isBuzkitSlide
                    ? "border-[#cfc7ff] bg-white/70 text-[#4f46e5] hover:border-[#b6adff] hover:text-[#4338ca]"
                    : "border-white/20 bg-black/15 text-white/75 hover:border-white/40 hover:text-white"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {!isBuzkitSlide && (
              <div className="flex justify-end pr-1 sm:pr-3">
                <RotatingBadge />
              </div>
            )}
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

        .hero-copy-enter {
          animation: copySlideIn 0.9s ease-out both;
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

        @keyframes copySlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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
