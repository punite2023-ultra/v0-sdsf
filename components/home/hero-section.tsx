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
  weight: ["400", "500", "600"],
})

function StarCore() {
  return (
    <svg viewBox="0 0 512 512" className="h-[80px] w-[80px] fill-[#9c003a]">
      <path d="M414.37 245.29V266.65C332.82 266.65 266.71 332.76 266.71 414.31V414.37H245.41V414.31C245.41 332.76 179.3 266.65 97.75 266.65H97.63V245.29C179.18 245.29 245.29 179.18 245.29 97.63H266.71C266.71 179.18 332.82 245.29 414.37 245.29Z" />
    </svg>
  )
}

function RotatingBadge() {
  return (
    <div className="relative flex h-[170px] w-[170px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border-[4px] border-[#9c003a] hero-ring-spin" />
      <StarCore />
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

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 })

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12">
        <div className="relative min-h-[860px]">

          {/* BACK TEXT */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
            <div
              className={`${anton.className} hero-fill-text text-[#9c003a]`}
              style={{ transform: `translate(${mouse.x * 10}px,${mouse.y * 5}px)` }}
            >
              CONTENT
            </div>

            <div
              className={`${anton.className} hero-fill-text -mt-[4vw] text-[#9c003a]`}
              style={{ transform: `translate(${mouse.x * 10}px,${mouse.y * 5}px)` }}
            >
              CREATION & BRANDING
            </div>
          </div>

          {/* CENTER GRID */}
          <div className="relative z-10 grid min-h-[820px] items-center xl:grid-cols-[20%_52%_20%]">

            {/* LEFT COLUMN */}
            <div className="hidden xl:block">
              <p className={`${anton.className} text-[16px] uppercase max-w-[200px]`}>
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
              </p>
            </div>

            {/* HERO IMAGE */}
            <div className="relative flex justify-center">
              <div
                className="relative h-[75vh] w-[42vw] min-w-[360px] hero-float"
                style={{
                  transform: `translate(${mouse.x * 20}px,${mouse.y * 15}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Content creator host"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden xl:block text-right">
              <RotatingBadge />

              <p className={`${poppins.className} mt-10 text-[16px] leading-[1.6]`}>
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
              </p>

              <Link
                href="/contact"
                className={`${anton.className} hero-ripple mt-10 inline-flex items-center gap-4 border-[3px] border-[#9c003a] px-8 py-5 text-[18px] uppercase hover:bg-[#9c003a] hover:text-black`}
              >
                GET STARTED
                <MoveRight />
              </Link>
            </div>
          </div>

          {/* OUTLINE TEXT */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
            <div
              className={`${anton.className} hero-outline-text text-transparent`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px,${-mouse.y * 5}px)`,
              }}
            >
              CONTENT
            </div>

            <div
              className={`${anton.className} hero-outline-text -mt-[4vw] text-transparent`}
              style={{
                WebkitTextStroke: "2px #9c003a",
                transform: `translate(${-mouse.x * 8}px,${-mouse.y * 5}px)`,
              }}
            >
              CREATION & BRANDING
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`

.hero-fill-text,
.hero-outline-text {
font-size: clamp(120px,16vw,260px);
letter-spacing:-2px;
line-height:0.85;
text-transform:uppercase;
}

.hero-float {
animation: heroFloat 4s ease-in-out infinite;
}

.hero-ring-spin {
animation: spin 14s linear infinite;
}

@keyframes heroFloat {
0%,100% {transform:translateY(0)}
50% {transform:translateY(-12px)}
}

@keyframes spin {
0% {transform:rotate(0deg)}
100% {transform:rotate(360deg)}
}

.hero-ripple::before {
content:"";
position:absolute;
left:50%;
top:50%;
width:20px;
height:20px;
border-radius:999px;
background:rgba(156,0,58,0.4);
transform:translate(-50%,-50%);
animation:ripple 1.6s infinite;
}

@keyframes ripple {
0% {opacity:0.4; transform:translate(-50%,-50%) scale(0.6)}
70% {opacity:0; transform:translate(-50%,-50%) scale(2.4)}
100% {opacity:0}
}

`}</style>

    </section>
  )
}
