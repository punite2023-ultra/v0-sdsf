"use client"

import Image from "next/image"
import Link from "next/link"
import { Anton, Poppins } from "next/font/google"
import { MoveRight } from "lucide-react"
import { useEffect, useState } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

function StarCore() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-[84px] w-[84px] fill-[#9c003a]"
      aria-hidden="true"
    >
      <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
    </svg>
  )
}

function RotatingBadge() {
  return (
    <div className="relative flex h-[170px] w-[170px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border-[4px] border-[#9c003a] hero-ring-spin" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
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
    let start = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = Math.floor(start + (value - start) * eased)
      setCount(next)
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
    <div className="w-[220px]">
      <div className="flex items-start gap-2">
        <div className={`${anton.className} text-[88px] leading-none tracking-[-0.05em] text-white`}>
          <Counter value={value} />
        </div>
        <div className={`${anton.className} mt-[12px] text-[38px] leading-none text-[#d7ff00]`}>
          +
        </div>
      </div>
      <div className={`${anton.className} mt-3 text-[24px] uppercase leading-none text-white`}>
        {label}
      </div>
      <div className="mt-7 h-[4px] w-[178px] bg-[#d7ff00]" />
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
      className="relative min-h-screen overflow-hidden text-white"
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1720px] flex-col justify-center px-5 py-8 md:px-8 xl:px-10">
        <div className="relative min-h-[900px] w-full">
          {/* Left stats */}
          <div
            className="absolute left-0 top-[170px] z-[12] hidden xl:flex xl:flex-col xl:gap-12"
            style={{
              transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
            }}
          >
            <StatBlock value={500} label="HAPPY CLIENT" />
            <StatBlock value={125} label="PROJECT DONE" />
            <StatBlock value={450} label="MEDIA FEATURED" />
          </div>

          {/* Fill text */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] z-[8] w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className={`${anton.className} hero-fill-text text-[#9c003a] hero-text-enter`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              CONTENT CREATION
            </div>
            <div
              className={`${anton.className} hero-fill-text hero-fill-text-second text-[#9c003a] hero-text-enter`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              &amp; BRANDING
            </div>
          </div>

          <div className="relative z-10 grid min-h-[900px] grid-cols-1 items-center gap-6 pt-24 xl:grid-cols-[22%_50%_20%] xl:justify-between xl:gap-0">
            {/* Empty spacer on left because stats are absolute now */}
            <div className="hidden xl:block" />

            {/* Center figure */}
            <div className="relative z-[9] flex min-h-[720px] items-center justify-center overflow-visible">
              <div
                className="relative h-[78vh] w-[52vw] min-w-[760px] max-w-[1100px] hero-figure-enter"
                style={{
                  transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Hero figure"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </div>

            {/* Right content */}
            <div
              className="relative z-20 hidden self-center xl:block"
              style={{
                transform: `translate(${-mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <div className="mb-24 flex justify-end">
                <RotatingBadge />
              </div>

              <p
                className={`${poppins.className} ml-auto max-w-[320px] text-right text-[16px] font-normal leading-[1.6] text-white`}
              >
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-10 flex justify-end">
                <Link
                  href="/contact"
                  className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-[#9c003a] px-8 py-5 text-[18px] uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:bg-black group-hover:text-[#9c003a]">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Outline text */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] z-[11] w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className={`${anton.className} hero-outline-text text-transparent hero-text-enter`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px, ${-mouse.y * 5}px)`,
              }}
            >
              CONTENT CREATION
            </div>
            <div
              className={`${anton.className} hero-outline-text hero-outline-text-second text-transparent hero-text-enter`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px, ${-mouse.y * 5}px)`,
              }}
            >
              &amp; BRANDING
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-8 grid gap-6 xl:hidden">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className={`${anton.className} text-6xl leading-none text-white`}>
                  <Counter value={500} />
                  <span className="text-[#d7ff00]">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  HAPPY CLIENT
                </div>
              </div>
              <div>
                <div className={`${anton.className} text-6xl leading-none text-white`}>
                  <Counter value={125} />
                  <span className="text-[#d7ff00]">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  PROJECT DONE
                </div>
              </div>
            </div>

            <div>
              <div className={`${anton.className} text-6xl leading-none text-white`}>
                <Counter value={450} />
                <span className="text-[#d7ff00]">+</span>
              </div>
              <div className={`${anton.className} mt-2 text-lg uppercase`}>
                MEDIA FEATURED
              </div>
            </div>

            <p
              className={`${poppins.className} max-w-xl text-base leading-7 text-white`}
            >
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
              ullamcorper mattis pulvinar dapibus leo.
            </p>

            <div>
              <Link
                href="/contact"
                className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-[#9c003a] px-6 py-4 text-base uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}
              >
                <span className="relative z-10">GET STARTED</span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:bg-black group-hover:text-[#9c003a]">
                  <MoveRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-fill-text,
        .hero-outline-text {
          font-size: clamp(55px, 8vw, 140px);
          line-height: 1;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .hero-fill-text-second,
        .hero-outline-text-second {
          margin-top: 1.6vw;
        }

        .hero-figure-enter {
          animation: figureSlideIn 1.1s ease-out both, heroFloat 4s ease-in-out 1.2s infinite;
        }

        .hero-text-enter {
          animation: textSlideIn 1.1s ease-out both;
        }

        .hero-ring-spin {
          animation: ringRotate 14s linear infinite;
        }

        .hero-ripple::before,
        .hero-ripple::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: rgba(156, 0, 58, 0.35);
          box-shadow: 0 0 30px rgba(156, 0, 58, 0.55);
          transform: translate(-50%, -50%) scale(0.6);
          opacity: 0;
          pointer-events: none;
        }

        .hero-ripple:hover::before {
          opacity: 1;
          animation: ripplePulse 1.2s ease-out infinite;
        }

        .hero-ripple:hover::after {
          opacity: 1;
          animation: ripplePulse 1.2s ease-out 0.3s infinite;
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

        @keyframes heroFloat {
          0%,
          100% {
            margin-top: 0;
          }
          50% {
            margin-top: -14px;
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

        @keyframes ripplePulse {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.45;
          }
          70% {
            transform: translate(-50%, -50%) scale(2.3);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
