"use client"

import Image from "next/image"
import Link from "next/link"
import { Anton, Poppins } from "next/font/google"
import { MoveRight } from "lucide-react"
import { useState } from "react"

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
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1720px] flex-col justify-center px-5 py-8 md:px-8 xl:px-10">
        <div className="relative min-h-[860px] w-full">
          <div className="pointer-events-none absolute left-1/2 top-[7%] z-[8] w-full -translate-x-1/2 text-center">
            <div
              className={`${anton.className} hero-fill-text text-[#9c003a]`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              CREATIVE
            </div>
            <div
              className={`${anton.className} hero-fill-text -mt-[4.8vw] text-[#9c003a]`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              AGENCY
            </div>
          </div>

          <div className="relative z-10 grid min-h-[860px] grid-cols-1 items-center gap-6 pt-24 xl:grid-cols-[20%_52%_20%] xl:justify-between xl:gap-0">
            <div
              className="hidden self-center xl:block"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
              }}
            >
              <div className="mb-6 flex items-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                    alt="team member"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                    alt="team member"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                    alt="team member"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="mb-5 h-[3px] w-[178px] bg-[#9c003a]" />

              <p
                className={`${anton.className} max-w-[180px] text-[16px] uppercase leading-[1.05] tracking-[-0.01em] text-white`}
              >
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
              </p>

              <div className="mt-24 space-y-10">
                <div>
                  <div
                    className={`${anton.className} text-[88px] leading-none tracking-[-0.05em]`}
                  >
                    500<span className="text-[#9c003a]">+</span>
                  </div>
                  <div
                    className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}
                  >
                    HAPPY CLIENT
                  </div>
                  <div className="mt-7 h-[3px] w-[178px] bg-[#9c003a]" />
                </div>

                <div>
                  <div
                    className={`${anton.className} text-[88px] leading-none tracking-[-0.05em]`}
                  >
                    125<span className="text-[#9c003a]">+</span>
                  </div>
                  <div
                    className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}
                  >
                    PROJECT DONE
                  </div>
                  <div className="mt-7 h-[3px] w-[178px] bg-[#9c003a]" />
                </div>
              </div>
            </div>

            <div className="relative z-[9] flex min-h-[680px] items-center justify-center">
              <div
                className="relative h-[78vh] w-[44vw] min-w-[360px] max-w-[820px] hero-float"
                style={{
                  transform: `translate(${mouse.x * 22}px, ${mouse.y * 16}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Hero figure"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div
              className="relative z-20 hidden self-end pb-14 xl:block"
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

          <div className="pointer-events-none absolute left-1/2 top-[7%] z-[11] w-full -translate-x-1/2 text-center">
            <div
              className={`${anton.className} hero-outline-text text-transparent`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px, ${-mouse.y * 5}px)`,
              }}
            >
              CREATIVE
            </div>
            <div
              className={`${anton.className} hero-outline-text -mt-[4.8vw] text-transparent`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px, ${-mouse.y * 5}px)`,
              }}
            >
              AGENCY
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:hidden">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <p
              className={`${anton.className} max-w-[220px] text-[16px] uppercase leading-[1.05]`}
            >
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className={`${anton.className} text-6xl leading-none`}>
                  500<span className="text-[#9c003a]">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  HAPPY CLIENT
                </div>
              </div>
              <div>
                <div className={`${anton.className} text-6xl leading-none`}>
                  125<span className="text-[#9c003a]">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  PROJECT DONE
                </div>
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
          font-size: clamp(120px, 16vw, 300px);
          line-height: 0.82;
          letter-spacing: -5px;
          text-transform: uppercase;
          animation: heroTextIn 1s ease-out both;
        }

        .hero-float {
          animation: heroImageIn 1.1s ease-out both, heroFloat 4s ease-in-out infinite;
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

        @keyframes heroTextIn {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroImageIn {
          0% {
            opacity: 0;
            transform: translateY(70px) scale(0.93);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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
