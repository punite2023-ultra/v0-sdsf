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

          {/* HERO TEXT */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] z-[8] w-full -translate-x-1/2 text-center">
            <div
              className={`${anton.className} hero-fill-text text-[#9c003a]`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              CONTENT CREATION
            </div>

            <div
              className={`${anton.className} hero-fill-text hero-fill-text-second text-[#9c003a]`}
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
              }}
            >
              &amp; BRANDING
            </div>
          </div>

          <div className="relative z-10 grid min-h-[860px] grid-cols-1 items-center gap-6 pt-24 xl:grid-cols-[20%_52%_20%] xl:justify-between xl:gap-0">

            {/* LEFT COLUMN */}
            <div
              className="hidden self-center xl:block"
              style={{
                transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
              }}
            >
              <div className="mb-6 flex items-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" alt="team member" fill className="object-cover" unoptimized/>
                </div>
                <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" alt="team member" fill className="object-cover" unoptimized/>
                </div>
                <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" alt="team member" fill className="object-cover" unoptimized/>
                </div>
              </div>

              <div className="mb-5 h-[3px] w-[178px] bg-[#9c003a]" />

              <p className={`${anton.className} max-w-[180px] text-[16px] uppercase leading-[1.05] tracking-[-0.01em] text-white`}>
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
              </p>

              <div className="mt-24 space-y-10">
                <div>
                  <div className={`${anton.className} text-[88px] leading-none tracking-[-0.05em]`}>
                    500<span className="text-[#9c003a]">+</span>
                  </div>
                  <div className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}>
                    HAPPY CLIENT
                  </div>
                  <div className="mt-7 h-[3px] w-[178px] bg-[#9c003a]" />
                </div>

                <div>
                  <div className={`${anton.className} text-[88px] leading-none tracking-[-0.05em]`}>
                    125<span className="text-[#9c003a]">+</span>
                  </div>
                  <div className={`${anton.className} mt-2 text-[24px] uppercase leading-none`}>
                    PROJECT DONE
                  </div>
                  <div className="mt-7 h-[3px] w-[178px] bg-[#9c003a]" />
                </div>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative z-[9] flex min-h-[680px] items-center justify-center overflow-visible">
              <div
                className="absolute left-1/2 top-1/2 h-[90vh] w-screen max-w-none -translate-x-1/2 -translate-y-1/2 hero-float"
                style={{
                  transform: `translate(calc(-50% + ${mouse.x * 22}px), calc(-50% + ${mouse.y * 16}px))`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Hero figure"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative z-20 hidden self-end pb-14 xl:block">
              <div className="mb-24 flex justify-end">
                <RotatingBadge />
              </div>

              <p className={`${poppins.className} ml-auto max-w-[320px] text-right text-[16px] leading-[1.6]`}>
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-10 flex justify-end">
                <Link href="/contact" className={`${anton.className} hero-ripple group relative inline-flex items-center gap-4 overflow-hidden border-[3px] border-[#9c003a] px-8 py-5 text-[18px] uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}>
                  <span className="relative z-10">GET STARTED</span>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black group-hover:bg-black group-hover:text-[#9c003a]">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

          </div>

          {/* OUTLINE TEXT */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] z-[11] w-full -translate-x-1/2 text-center">
            <div className={`${anton.className} hero-outline-text text-transparent`} style={{WebkitTextStroke:"2px #9c003a"}}>
              CONTENT CREATION
            </div>

            <div className={`${anton.className} hero-outline-text hero-outline-text-second text-transparent`} style={{WebkitTextStroke:"2px #9c003a"}}>
              &amp; BRANDING
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
          margin-top: 0.9vw;
        }

        .hero-float {
          animation: heroFloat 4s ease-in-out infinite;
        }

        .hero-ring-spin {
          animation: ringRotate 14s linear infinite;
        }

        @keyframes heroFloat {
          0%,100% { margin-top:0 }
          50% { margin-top:-14px }
        }

        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
