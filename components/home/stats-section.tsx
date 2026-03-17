"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

const progressStats = [
  {
    label: "Successful Campaign Launches",
    value: 95,
  },
  {
    label: "Innovative Design",
    value: 85,
  },
  {
    label: "High Impact Project",
    value: 100,
  },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#c94ca1_0%,#d869b4_35%,#d989ca_70%,#d89ae2_100%)] py-16 md:py-24">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 md:px-8 xl:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.9fr_1fr]">
          {/* LEFT */}
          <ScrollReveal>
            <div className="text-white">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] md:text-base">
                Who We Are
              </p>

              <h2 className="max-w-[520px] text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl xl:text-7xl">
                Creativity
                <br />
                Meets
                <br />
                Strategy.
              </h2>

              <p className="mt-6 max-w-[520px] text-base leading-8 text-white/90 md:text-xl">
                At Star Digital Solutions, we combine strategy, creativity, and execution
                to build campaigns, content, and digital experiences that help brands grow
                and connect with the right audience.
              </p>

              <div className="mt-14 space-y-5">
                <div>
                  <p className="text-2xl font-extrabold uppercase md:text-3xl">
                    Over 10 Years of Experience
                  </p>
                  <div className="mt-4 h-px w-full max-w-[460px] bg-white/60" />
                </div>

                <div>
                  <p className="text-2xl font-extrabold uppercase md:text-3xl">
                    Trusted by Growing Brands
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CENTER IMAGE */}
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto flex w-full max-w-[520px] justify-center">
              <div className="relative aspect-[0.68] w-full max-w-[420px] overflow-hidden rounded-[3rem] border-[10px] border-black bg-[#de80c5] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                {/* camera island */}
                <div className="absolute left-1/2 top-4 z-20 h-8 w-32 -translate-x-1/2 rounded-full bg-black md:h-9 md:w-36" />
                
                <Image
                  src="/images/stats-phone-person.png"
                  alt="Star Digital Solutions team member"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          <ScrollReveal delay={0.2}>
            <div className="text-white">
              <div className="space-y-8">
                {progressStats.map((item) => (
                  <div key={item.label}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-lg font-extrabold uppercase md:text-2xl">
                        {item.label}
                      </span>
                      <span className="text-lg font-extrabold md:text-2xl">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-5 w-full rounded-full bg-[#e4a8ee] md:h-6">
                      <div
                        className="h-5 rounded-full bg-[#6f2dbd] md:h-6"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-[500px] text-lg leading-8 text-white/90">
                We help businesses launch better campaigns, strengthen their online
                presence, and create high-converting digital strategies with clarity and
                consistency.
              </p>

              <div className="mt-10">
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-2 border-[#7b2cbf] bg-transparent px-8 py-6 text-base font-extrabold uppercase tracking-wide text-[#7b2cbf] hover:bg-[#7b2cbf] hover:text-white"
                >
                  <Link href="/about" className="inline-flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
