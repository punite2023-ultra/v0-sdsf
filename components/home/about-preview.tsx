"use client"

import { Sparkles } from "lucide-react"
import { Raleway, Anton } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-20 text-white md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-center px-6 text-center lg:px-8">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center text-[#d7ff00]">
            <Sparkles className="h-8 w-8 fill-current" />
          </div>

          <span
            className={`${anton.className} text-[20px] uppercase leading-none tracking-[0.04em] text-white md:text-[22px]`}
          >
            What We Do
          </span>
        </div>

        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto inline-block">
            <h2
              className={`${raleway.className} text-center text-[54px] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-[64px] md:text-[78px] lg:text-[98px] xl:text-[112px]`}
            >
              Where Content, Commerce, and Creators
              <br />
              Power Brands to the Spotlight
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
