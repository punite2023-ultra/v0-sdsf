"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, MoveRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1E21FF] text-white">
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      {/* top nav */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 pb-4 pt-6 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-full border border-lime-300/60">
              <div className="absolute inset-0 flex items-center justify-center text-[34px] text-lime-300">
                ✦
              </div>
            </div>

            <div className="leading-none">
              <div className="text-[46px] font-black uppercase tracking-[-0.06em]">
                AURELIA
              </div>
              <div className="-mt-1 pl-1 text-[11px] uppercase tracking-[0.55em] text-white/80">
                Present
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-9 lg:flex">
            <Link
              href="/"
              className="text-[15px] font-extrabold uppercase tracking-wide text-lime-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[15px] font-extrabold uppercase tracking-wide text-white hover:text-lime-300"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-wide text-white hover:text-lime-300"
            >
              Our Services <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              href="/portfolio"
              className="flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-wide text-white hover:text-lime-300"
            >
              Portfolio <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              href="/pages"
              className="flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-wide text-white hover:text-lime-300"
            >
              Pages <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="text-[15px] font-extrabold uppercase tracking-wide text-white hover:text-lime-300"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-300 text-black">
              <Phone className="h-9 w-9 fill-black stroke-black" />
            </div>
            <div className="text-right leading-tight">
              <div className="text-[14px] font-bold uppercase tracking-wide text-white/90">
                Phone Number
              </div>
              <div className="mt-1 text-[20px] font-black tracking-tight">
                +63 879 5673 9876
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 pb-10 pt-32 lg:px-10 lg:pt-36">
        <div className="relative min-h-[760px]">
          {/* left info */}
          <div className="absolute left-0 top-24 z-20 hidden w-[220px] xl:block">
            <div className="mb-6 flex items-center">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
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

          {/* main artboard */}
          <div className="relative mx-auto flex min-h-[760px] w-full items-center justify-center">
            {/* big heading */}
            <div className="pointer-events-none relative z-10 text-center">
              <div className="text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Creative
              </div>
              <div className="-mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Agency
              </div>
            </div>

            {/* outline duplicate for layered effect */}
            <div className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Creative
                </div>
                <div className="-mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Agency
                </div>
              </div>
            </div>

            {/* center image */}
            <div className="absolute inset-0 z-[9] flex items-center justify-center">
              <div className="relative h-[72vh] w-[34vw] min-w-[320px] max-w-[640px]">
                <Image
                  src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
                  alt="hero woman"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* right icon */}
            <div className="absolute right-10 top-36 z-20 hidden xl:flex">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[4px] border-lime-300">
                <span className="text-[80px] leading-none text-lime-300">✦</span>
              </div>
            </div>

            {/* right text block */}
            <div className="absolute bottom-8 right-0 z-20 w-full max-w-[360px] xl:bottom-16 xl:right-4">
              <p className="text-right text-[20px] leading-[1.5] text-white/95">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border-[3px] border-lime-300 px-8 py-5 text-[18px] font-black uppercase tracking-[0.08em] text-white transition hover:bg-lime-300 hover:text-black"
                >
                  Get Started
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1E21FF]">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* mobile left stats fallback */}
          <div className="mt-10 grid gap-6 xl:hidden">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
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
          </div>
        </div>
      </div>
    </section>
  )
}
