"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Anton } from "next/font/google"
import { useState } from "react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

function StarBadge() {
  return (
    <div className="relative flex h-[160px] w-[160px] items-center justify-center rounded-full border-[4px] border-lime-300 hero-rotate-ring">
      <svg
        viewBox="0 0 512 512"
        className="h-[84px] w-[84px] fill-lime-300"
        aria-hidden="true"
      >
        <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
      </svg>
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-10 lg:px-10">
        <div className="relative min-h-[860px]">
          <div
            className="absolute left-0 top-24 z-20 hidden w-[220px] animate-[heroFadeLeft_1s_ease-out_forwards] xl:block"
            style={{
              transform: `translate(${mouse.x * 12}px, ${mouse.y * 10}px)`,
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

            <div className="mb-5 h-[3px] w-[180px] bg-lime-300" />

            <p
              className={`${anton.className} max-w-[190px] text-[22px] uppercase leading-[0.96] tracking-[-0.03em]`}
            >
              The expert team brings a creativity to every project.
            </p>

            <div className="mt-16 space-y-10">
              <div>
                <div
                  className={`${anton.className} text-[88px] leading-none tracking-[-0.08em]`}
                >
                  500<span className="text-lime-300">+</span>
                </div>
                <div
                  className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}
                >
                  Happy Client
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>

              <div>
                <div
                  className={`${anton.className} text-[88px] leading-none tracking-[-0.08em]`}
                >
                  125<span className="text-lime-300">+</span>
                </div>
                <div
                  className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}
                >
                  Project Done
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[860px] w-full items-center justify-center">
            <div
              className="pointer-events-none absolute inset-0 z-[9] flex items-center justify-center"
              style={{
                transform: `translate(${mouse.x * 20}px, ${mouse.y * 16}px)`,
              }}
            >
              <div className="relative h-[74vh] w-[36vw] min-w-[320px] max-w-[680px] animate-[heroImageIn_1.2s_ease-out_forwards,heroFloat_4s_ease-in-out_infinite]">
                <Image
                  src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
                  alt="hero woman"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div
              className="pointer-events-none relative z-10 text-center"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 8}px)`,
              }}
            >
              <div
                className={`${anton.className} animate-[heroTextIn_1.2s_ease-out_forwards] text-[20vw] uppercase leading-[0.8] tracking-[-0.08em] text-lime-300 xl:text-[18rem]`}
              >
                Creative
              </div>
              <div
                className={`${anton.className} animate-[heroTextIn_1.2s_ease-out_0.08s_forwards] -mt-4 text-[20vw] uppercase leading-[0.8] tracking-[-0.08em] text-lime-300 xl:text-[18rem]`}
              >
                Agency
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center"
              style={{
                transform: `translate(${-mouse.x * 8}px, ${-mouse.y * 8}px)`,
              }}
            >
              <div className="text-center">
                <div
                  className={`${anton.className} animate-[heroOutlineIn_1.3s_ease-out_forwards] text-[20vw] uppercase leading-[0.8] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#CCFF00] xl:text-[18rem]`}
                >
                  Creative
                </div>
                <div
                  className={`${anton.className} animate-[heroOutlineIn_1.3s_ease-out_0.08s_forwards] -mt-4 text-[20vw] uppercase leading-[0.8] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#CCFF00] xl:text-[18rem]`}
                >
                  Agency
                </div>
              </div>
            </div>

            <div
              className="absolute right-10 top-24 z-20 hidden animate-[heroFadeRight_1s_ease-out_forwards] xl:flex"
              style={{
                transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)`,
              }}
            >
              <StarBadge />
            </div>

            <div
              className="absolute bottom-10 right-0 z-20 w-full max-w-[360px] animate-[heroFadeRight_1s_ease-out_forwards] xl:bottom-16 xl:right-4"
              style={{
                transform: `translate(${-mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <p className="text-right text-[20px] leading-[1.45] text-white/95">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href="/contact"
                  className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-lime-300 px-8 py-5 text-[18px] uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-lime-300 hover:text-black`}
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:bg-black group-hover:text-lime-300">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:hidden">
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
              className={`${anton.className} max-w-md text-xl uppercase leading-tight`}
            >
              The expert team brings a creativity to every project.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div
                  className={`${anton.className} text-6xl tracking-[-0.06em]`}
                >
                  500<span className="text-lime-300">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  Happy Client
                </div>
              </div>
              <div>
                <div
                  className={`${anton.className} text-6xl tracking-[-0.06em]`}
                >
                  125<span className="text-lime-300">+</span>
                </div>
                <div className={`${anton.className} mt-2 text-lg uppercase`}>
                  Project Done
                </div>
              </div>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/90">
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
              ullamcorper mattis pulvinar dapibus leo.
            </p>

            <div>
              <Link
                href="/contact"
                className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-lime-300 px-6 py-4 text-base uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-lime-300 hover:text-black`}
              >
                <span className="relative z-10">Get Started</span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:bg-black group-hover:text-lime-300">
                  <MoveRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFadeLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroFadeRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroTextIn {
          0% {
            opacity: 0;
            transform: translateY(70px) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroOutlineIn {
          0% {
            opacity: 0;
            transform: translateY(90px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroImageIn {
          0% {
            opacity: 0;
            transform: translateY(70px) scale(0.92);
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
            transform: scale(0.6);
            opacity: 0.45;
          }
          70% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .hero-rotate-ring {
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
          background: rgba(204, 255, 0, 0.35);
          box-shadow: 0 0 0 20px rgba(204, 255, 0, 0.08);
          transform: translate(-50%, -50%) scale(0.6);
          opacity: 0;
          pointer-events: none;
        }

        .hero-ripple:hover::before {
          animation: ripplePulse 1.2s ease-out infinite;
          opacity: 1;
        }

        .hero-ripple:hover::after {
          animation: ripplePulse 1.2s ease-out 0.3s infinite;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
