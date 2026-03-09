"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { useEffect, useState } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

function StarCore() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-[40px] w-[40px] fill-[#9c003a]"
      aria-hidden="true"
    >
      <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
    </svg>
  )
}

function RotatingBadge() {
  return (
    <div className="relative flex h-[96px] w-[96px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border-[3px] border-[#9c003a] hero-ring-spin" />
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
    <div className="w-[180px]">
      <div className="flex items-start gap-1.5">
        <div
          className={`${poppins.className} text-[56px] font-semibold leading-none tracking-[-0.04em] text-white`}
        >
          <Counter value={value} />
        </div>
        <div
          className={`${poppins.className} mt-[8px] text-[22px] font-semibold leading-none text-[#9c003a]`}
        >
          +
        </div>
      </div>

      <div
        className={`${poppins.className} mt-2 text-[15px] font-semibold uppercase leading-none tracking-[-0.01em] text-white`}
      >
        {label}
      </div>

      <div className="mt-5 h-[3px] w-[150px] bg-[#9c003a]" />
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
      className="relative overflow-hidden text-white"
    >
      {/* Background */}
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

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1720px] flex-col justify-center px-5 pb-0 pt-8 md:px-8 xl:px-10">
        <div className="relative min-h-[760px] w-full">
          {/* Left stats */}
          <div
            className="absolute left-0 top-[185px] z-[12] hidden xl:flex xl:flex-col xl:gap-8"
            style={{
              transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
            }}
          >
            <StatBlock value={500} label="HAPPY CLIENT" />
            <StatBlock value={125} label="PROJECT DONE" />
            <StatBlock value={450} label="MEDIA FEATURED" />
          </div>

          {/* Smaller rotating badge */}
          <div
            className="absolute right-[120px] top-[120px] z-[14] hidden xl:block"
            style={{
              transform: `translate(${mouse.x * 4}px, ${mouse.y * 4}px)`,
            }}
          >
            <RotatingBadge />
          </div>

          {/* Text behind figure */}
          <div className="pointer-events-none absolute left-1/2 top-[55%] z-[7] w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className={`${anton.className} hero-fill-text text-[#9c003a] hero-text-enter`}
              style={{
                transform: `translate(${mouse.x * 6}px, ${mouse.y * 3}px)`,
              }}
            >
              CONTENT CREATION
            </div>
            <div
              className={`${anton.className} hero-fill-text hero-fill-text-second text-[#9c003a] hero-text-enter`}
              style={{
                transform: `translate(${mouse.x * 6}px, ${mouse.y * 3}px)`,
              }}
            >
              &amp; BRANDING
            </div>
          </div>

          <div className="relative z-10 grid min-h-[760px] grid-cols-1 items-center gap-6 pt-16 xl:grid-cols-[22%_50%_20%] xl:justify-between xl:gap-0">
            <div className="hidden xl:block" />

            {/* Center figure */}
            <div className="relative z-[10] flex min-h-[620px] items-center justify-center overflow-visible">
              <div
                className="absolute left-1/2 top-1/2 h-[104vh] w-[116vw] max-w-none -translate-x-1/2 -translate-y-1/2 hero-figure-enter"
                style={{
                  transform: `translate(calc(-50% + ${mouse.x * 10}px), calc(-50% + ${mouse.y * 6}px))`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Hero figure"
                  fill
                  priority
                  className="object-contain object-center scale-[1.1]"
                />
              </div>
            </div>

            <div className="hidden xl:block" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-fill-text {
          font-size: clamp(72px, 10vw, 180px);
          line-height: 0.96;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .hero-fill-text-second {
          margin-top: 2vw;
        }

        .hero-figure-enter {
          animation: figureSlideIn 1.1s ease-out both;
        }

        .hero-text-enter {
          animation: textSlideIn 1.1s ease-out both;
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
            transform: translateX(-140px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textSlideIn {
          0% {
            opacity: 0;
            transform: translateX(140px);
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
      `}</style>
    </section>
  )
}
