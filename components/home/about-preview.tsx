"use client"

import { Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
})

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-24 text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* Label */}
        <ScrollReveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center text-[#d7ff00]">
              <Sparkles className="h-7 w-7 fill-current" />
            </div>

            <span
              className={`${raleway.className} text-sm uppercase tracking-[0.12em] md:text-base`}
            >
              What We Do
            </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <h2
            className={`${raleway.className} mx-auto max-w-[1100px] text-[40px] leading-[1.05] tracking-[-0.02em] md:text-[60px] lg:text-[64px]`}
          >
            Where Content, Commerce, and Creators Power Brands to the Spotlight
          </h2>
        </ScrollReveal>

      </div>
    </section>
  )
}
