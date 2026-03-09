"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Anton, Poppins } from "next/font/google"
import { useState } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
})

function StarCore() {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-[58px] w-[58px] fill-[#9c003a]"
      aria-hidden="true"
    >
      <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
    </svg>
  )
}

function RotatingBadge() {
  return (
    <div className="relative flex h-[128px] w-[128px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border-[3px] border-[#9c003a] hero-ring-spin" />
      <div className="relative z-10 flex items-center justify-center">
        <StarCore />
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
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto max-w-[1660px] px-6 pb-10 pt-24 xl:px-8">
        <div className="relative min-h-[820px] xl:min-h-[860px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-[140px] z-[1] hidden xl:block"
            style={{
              transform: `translate(${mouse.x * 8}px, ${mouse.y * 5}px)`,
            }}
          >
            <div
              className={`${anton.className} hero-fill text-center text-[#9c003a]`}
            >
              CONTENT
            </div>
            <div
              className={`${anton.className} hero-fill hero-second-line text-center text-[#9c003a]`}
            >
              CREATION & BRANDING
            </div>
          </div>

          <div className="relative z-10 grid min-h-[820px] grid-cols-1 items-center gap-8 xl:grid-cols-[16%_50%_24%] xl:gap-0">
            <div
              className="hidden self-center xl:block"
              style={{
                transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <p
                className={`${anton.className} max-w-[180px] text-[14px] uppercase leading-[1.08] tracking-[-0.01em] text-white`}
              >
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
              </p>
            </div>

            <div className="relative flex min-h-[520px] items-center justify-center xl:min-h-[700px]">
              <div
                className="relative z-[3] h-[360px] w-[520px] sm:h-[430px] sm:w-[620px] xl:h-[470px] xl:w-[760px]"
                style={{
                  transform: `translate(${mouse.x * 16}px, ${mouse.y * 10}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Content creator"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div
              className="relative z-[4] hidden self-center xl:block"
              style={{
                transform: `translate(${-mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <div className="mb-12 flex justify-start">
                <RotatingBadge />
              </div>

              <p
                className={`${poppins.className} max-w-[350px] text-left text-[16px] leading-[1.6] text-white`}
              >
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-[#9c003a] px-8 py-5 text-[16px] uppercase tracking-[0.04em] text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}
                >
                  <span className="relative z-10">GET STARTED</span>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-inherit">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 top-[140px] z-[5] hidden xl:block"
            style={{
              transform: `translate(${-mouse.x * 5}px, ${-mouse.y * 4}px)`,
            }}
          >
            <div
              className={`${anton.className} hero-outline text-center text-transparent`}
              style={{ WebkitTextStroke: "2px #9c003a" }}
            >
              CONTENT
            </div>
            <div
              className={`${anton.className} hero-outline hero-second-line text-center text-transparent`}
              style={{ WebkitTextStroke: "2px #9c003a" }}
            >
              CREATION & BRANDING
            </div>
          </div>

          <div className="relative z-20 mt-2 grid gap-6 xl:hidden">
            <div className="flex justify-center">
              <div className="relative h-[280px] w-[340px] sm:h-[320px] sm:w-[420px]">
                <Image
                  src="/HeroImage1.png"
                  alt="Content creator"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <div className={`${anton.className} text-[72px] leading-[0.84] tracking-[-1px] text-[#9c003a]`}>
                CONTENT
              </div>
              <div className={`${anton.className} mt-[-8px] text-[52px] leading-[0.9] tracking-[-1px] text-[#9c003a]`}>
                CREATION & BRANDING
              </div>
            </div>

            <p
              className={`${anton.className} mx-auto max-w-[220px] text-center text-[14px] uppercase leading-[1.08]`}
            >
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </p>

            <p
              className={`${poppins.className} mx-auto max-w-[360px] text-center text-[16px] leading-[1.6]`}
            >
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
              ullamcorper mattis pulvinar dapibus leo.
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className={`${anton.className} inline-flex items-center gap-4 border-[3px] border-[#9c003a] px-8 py-4 text-[16px] uppercase text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}
              >
                GET STARTED
                <MoveRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-fill,
        .hero-outline {
          font-size: clamp(120px, 14vw, 250px);
          line-height: 0.8;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .hero-second-line {
          margin-top: -18px;
          font-size: clamp(90px, 10.8vw, 200px);
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
          background: rgba(156, 0, 58, 0.32);
          box-shadow: 0 0 0 24px rgba(156, 0, 58, 0.08);
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
            opacity: 0.4;
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
