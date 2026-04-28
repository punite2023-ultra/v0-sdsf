"use client"

import Image from "next/image"
import { Sparkles, BarChart3, Megaphone, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway, Poppins } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const pillars = [
  {
    icon: BarChart3,
    title: "Performance & Growth Strategy",
    description:
      "We connect content, commerce, and data to drive measurable and scalable growth.",
  },
  {
    icon: Megaphone,
    title: "Scalable Campaign Design",
    description:
      "Campaigns built to convert, optimize, and expand across multiple platforms.",
  },
  {
    icon: Users,
    title: "Creator & Commerce Ecosystem",
    description:
      "We leverage creators, affiliates, and networks to amplify reach and performance.",
  },
]

export function AboutPreview() {
  return (
    <section
      id="who-we-are"
      className="relative scroll-mt-28 overflow-hidden py-16 text-white md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/about-bg.jpg"
          alt="About background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,0,25,0.8)_0%,rgba(20,0,40,0.9)_60%,rgba(10,0,25,0.95)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 flex flex-col items-center text-center">
          <div className="max-w-5xl">

            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 text-purple-300 fill-current" />
                <span className={`${raleway.className} text-sm uppercase tracking-[0.08em]`}>
                  ABOUT US
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className={`${raleway.className} text-[42px] leading-[1] tracking-[-0.03em] uppercase md:text-[60px]`}>
                Where Content, Commerce, and Creators Bring Brands Into the Spotlight
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className={`${poppins.className} mx-auto mt-6 max-w-2xl text-[15px] leading-[1.7] text-white/80 md:text-[16px]`}>
                At Star Digital Solutions, we transform strategy into measurable growth by combining
                e-commerce, creator partnerships, and data-driven marketing to help brands scale,
                convert, and lead in today’s digital landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon

            return (
              <ScrollReveal key={item.title} delay={index * 120}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition hover:border-purple-400/40 hover:bg-white/[0.08]">

                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className={`${raleway.className} mb-3 text-[22px]`}>
                    {item.title}
                  </h3>

                  <p className={`${poppins.className} text-[14px] text-white/75`}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
