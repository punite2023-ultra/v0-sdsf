"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { useState } from "react"

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-12 lg:px-10">
        <div className="relative min-h-[820px]">
          <div
            className="absolute left-0 top-24 z-20 hidden w-[220px] animate-[heroFadeLeft_1s_ease-out_forwards] xl:block"
            style={{
              transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)`,
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

            <p className="max-w-[190px] text-[24px] font-black uppercase leading-[0.95] tracking-[-0.03em]">
              The expert team brings a creativity to every project.
            </p>

            <div className="mt-16 space-y-10">
              <div>
                <div className="text-[88px] font-black leading-none tracking-[-0.08em]">
                  500<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-[24px] font-black uppercase leading-none">
                  Happy Client
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>

              <div>
                <div className="text-[88px] font-black leading-none tracking-[-0.08em]">
                  125<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-[24px] font-black uppercase leading-none">
                  Project Done
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[820px] w-full items-center justify-center">
            <div
              className="pointer-events-none relative z-10 text-center"
              style={{
                transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
              }}
            >
              <div className="animate-[heroTextIn_1.2s_ease-out_forwards] text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Creative
              </div>
              <div className="animate-[heroTextIn_1.2s_ease-out_0.08s_forwards] -mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Agency
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center"
              style={{
                transform: `translate(${-mouse.x * 10}px, ${-mouse.y * 8}px)`,
              }}
            >
              <div className="text-center">
                <div className="animate-[heroOutlineIn_1.35s_ease-out_forwards] text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Creative
                </div>
                <div className="animate-[heroOutlineIn_1.35s_ease-out_0.08s_forwards] -mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Agency
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 z-[9] flex items-center justify-center"
              style={{
                transform: `translate(${mouse.x * 24}px, ${mouse.y * 18}px)`,
              }}
            >
              <div className="relative h-[72vh] w-[34vw] min-w-[320px] max-w-[640px] animate-[heroFloat_4s_ease-in-out_infinite,heroImageIn_1.2s_ease-out_forwards]">
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
              className="absolute right-10 top-28 z-20 hidden xl:flex animate-[heroFadeRight_1s_ease-out_forwards,heroFloatSmall_3s_ease-in-out_infinite_1s]"
              style={{
                transform: `translate(${mouse.x * 18}px, ${mouse.y * 18}px)`,
              }}
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[4px] border-lime-300">
                <span className="text-[80px] leading-none text-lime-300">✦</span>
              </div>
            </div>

            <div
              className="absolute bottom-8 right-0 z-20 w-full max-w-[360px] animate-[heroFadeRight_1s_ease-out_forwards] xl:bottom-16 xl:right-4"
              style={{
                transform: `translate(${-mouse.x * 10}px, ${mouse.y * 10}px)`,
              }}
            >
              <p className="text-right text-[20px] leading-[1.5] text-white/95">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border-[3px] border-lime-300 px-8 py-5 text-[18px] font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:text-black"
                >
                  Get Started
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
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

            <p className="max-w-md text-xl font-black uppercase leading-tight">
              The expert team brings a creativity to every project.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="text-6xl font-black tracking-[-0.06em]">
                  500<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-lg font-black uppercase">
                  Happy Client
                </div>
              </div>
              <div>
                <div className="text-6xl font-black tracking-[-0.06em]">
                  125<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-lg font-black uppercase">
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
                className="inline-flex items-center gap-4 border-[3px] border-lime-300 px-6 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-lime-300 hover:text-black"
              >
                Get Started
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
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
            margin-top: 0px;
          }
          50% {
            margin-top: -14px;
          }
        }

        @keyframes heroFloatSmall {
          0%,
          100% {
            margin-top: 0px;
          }
          50% {
            margin-top: -10px;
          }
        }
      `}</style>
    </section>
  )
}
