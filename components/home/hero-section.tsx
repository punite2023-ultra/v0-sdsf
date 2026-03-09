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

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouse({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="relative max-w-[1600px] mx-auto px-6 py-20">

        {/* BIG TEXT BACKGROUND */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">

          <h1
            className={`${anton.className} hero-fill`}
            style={{ transform: `translate(${mouse.x * 10}px,${mouse.y * 5}px)` }}
          >
            CONTENT
          </h1>

          <h1
            className={`${anton.className} hero-fill -mt-[2vw]`}
            style={{ transform: `translate(${mouse.x * 10}px,${mouse.y * 5}px)` }}
          >
            CREATION & BRANDING
          </h1>

        </div>

        {/* CONTENT GRID */}
        <div className="relative grid xl:grid-cols-[20%_52%_20%] items-center min-h-[700px] z-10">

          {/* LEFT TEXT */}
          <div className="hidden xl:block">
            <p className={`${anton.className} text-[16px] uppercase max-w-[200px]`}>
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center">

            <div
              className="relative w-[520px] h-[520px]"
              style={{
                transform: `translate(${mouse.x * 20}px,${mouse.y * 10}px)`
              }}
            >
              <Image
                src="/HeroImage1.png"
                alt="Content Creator"
                fill
                priority
                className="object-contain"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden xl:block text-right">

            <p className={`${poppins.className} text-[16px] leading-[1.6] mb-8`}>
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>

            <Link
              href="/contact"
              className={`${anton.className} inline-flex items-center gap-4 border-2 border-[#9c003a] px-8 py-4 text-[16px] uppercase hover:bg-[#9c003a] hover:text-black`}
            >
              GET STARTED
              <MoveRight />
            </Link>

          </div>

        </div>

      </div>

      <style jsx>{`

.hero-fill {
font-size: clamp(90px,12vw,180px);
color: #9c003a;
letter-spacing: -1px;
line-height: 0.85;
text-transform: uppercase;
}

`}</style>

    </section>
  )
}
