"use client"

import Link from "next/link"
import {
  Globe,
  Smartphone,
  BarChart3,
  PenTool,
  Layers3,
  Target,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    title: "Website Development",
    description:
      "Build modern, high-converting websites that elevate your brand.",
    icon: Globe,
  },
  {
    title: "App Development",
    description:
      "Scalable apps designed for performance and user experience.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic campaigns that drive traffic, engagement, and growth.",
    icon: BarChart3,
  },
  {
    title: "Graphic Design",
    description:
      "High-impact visuals that strengthen identity and communication.",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    description:
      "Cohesive systems that define your brand and positioning.",
    icon: Layers3,
  },
  {
    title: "SEO",
    description:
      "Improve visibility and attract the right audience organically.",
    icon: Target,
  },
]

export function StatsSection() {
  const { language } = useLanguage()

  return (
    <section className="relative bg-[#070015] py-20">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_40%)]" />

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6">
        
        {/* HEADER (TIGHTER) */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
            WHAT WE OFFER
          </p>

          <h2 className="mx-auto max-w-[780px] text-3xl font-semibold leading-tight text-white md:text-5xl">
            Where Strategy Meets Digital. Your Success Story Begins.
          </h2>
        </div>

        {/* GRID (LESS GAP) */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="group relative rounded-[24px] border border-white/10 p-[12px] transition-all duration-300 hover:border-[#a855f7]/60"
              >
                <div className="relative h-full min-h-[300px] rounded-[18px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">

                  {/* grid texture */}
                  <div className="absolute inset-0 rounded-[18px] opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />

                  <div className="relative z-10 flex h-full flex-col">

                    {/* ICON (SMALLER + TIGHT) */}
                    <div className="mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#f472b6]/30 bg-[#f472b6]/5 text-[#f472b6]">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION (LESS SPACING) */}
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>

                    {/* BUTTON (PULLED UP) */}
                    <div className="mt-auto pt-6">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f59e0b] px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-white transition hover:scale-[1.03]"
                      >
                        Learn More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
