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

      <div className="relative z-10 min-h-screen w-full px-4 pt-24 md:px-6 xl:px-8">
        <div className="relative min-h-[860px] w-full">
          <div
            className="pointer-events-none absolute inset-x-0 top-[150px] z-[1] hidden xl:block"
            style={{
              transform: `translate(${mouse.x * 8}px, ${mouse.y * 5}px)`,
            }}
          >
            <div
              className={`${anton.className} hero-line hero-line-top text-center text-[#9c003a]`}
            >
              CONTENT
            </div>
            <div
              className={`${anton.className} hero-line hero-line-bottom text-center text-[#9c003a]`}
            >
              CREATION & BRANDING
            </div>
          </div>

          <div className="relative z-10 grid min-h-[820px] grid-cols-1 items-center xl:grid-cols-[13%_56%_23%]">
            <div
              className="hidden xl:block"
              style={{
                transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <p
                className={`${anton.className} max-w-[170px] text-[14px] uppercase leading-[1.08] text-white`}
              >
                THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
              </p>
            </div>

            <div className="relative flex min-h-[560px] items-center justify-center overflow-visible xl:min-h-[760px]">
              <div
                className="relative z-[3] h-[460px] w-[760px] sm:h-[520px] sm:w-[900px] xl:h-[680px] xl:w-[1180px]"
                style={{
                  transform: `translate(${mouse.x * 16}px, ${mouse.y * 10}px)`,
                }}
              >
                <Image
                  src="/HeroImage1.png"
                  alt="Content creator"
                  fill
                  priority
                  className="object-contain object-center scale-[1.12] xl:scale-[1.22]"
                />
              </div>
            </div>

            <div
              className="hidden xl:block"
              style={{
                transform: `translate(${-mouse.x * 8}px, ${mouse.y * 8}px)`,
              }}
            >
              <p
                className={`${poppins.className} max-w-[340px] text-left text-[16px] leading-[1.6] text-white`}
              >
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className={`${anton.className} inline-flex items-center gap-4 border-[3px] border-[#9c003a] px-8 py-5 text-[16px] uppercase tracking-[0.03em] text-white transition duration-300 hover:bg-[#9c003a] hover:text-black`}
                >
                  GET STARTED
                  <MoveRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 top-[150px] z-[5] hidden xl:block"
            style={{
              transform: `translate(${-mouse.x * 5}px, ${-mouse.y * 4}px)`,
            }}
          >
            <div
              className={`${anton.className} hero-line hero-line-top text-center text-transparent`}
              style={{ WebkitTextStroke: "2px #9c003a" }}
            >
              CONTENT
            </div>
            <div
              className={`${anton.className} hero-line hero-line-bottom text-center text-transparent`}
              style={{ WebkitTextStroke: "2px #9c003a" }}
            >
              CREATION & BRANDING
            </div>
          </div>

          <div className="relative z-20 mt-4 grid gap-6 xl:hidden">
            <div className="flex justify-center">
              <div className="relative h-[320px] w-[92vw] max-w-[520px]">
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
              <div className={`${anton.className} text-[76px] leading-[0.86] text-[#9c003a]`}>
                CONTENT
              </div>
              <div className={`${anton.className} mt-1 text-[44px] leading-[0.95] text-[#9c003a]`}>
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
        .hero-line {
          text-transform: uppercase;
          line-height: 0.82;
        }

        .hero-line-top {
          font-size: clamp(120px, 15vw, 270px);
          letter-spacing: 0px;
        }

        .hero-line-bottom {
          margin-top: 6px;
          font-size: clamp(78px, 8.8vw, 165px);
          letter-spacing: 0px;
        }
      `}</style>
    </section>
  )
}
