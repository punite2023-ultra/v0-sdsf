"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Leaf, HeartPulse, Hexagon, Home, Orbit, Brain, Sparkles, Circle } from "lucide-react"

type Brand = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const allBrands: Brand[] = [
  { name: "botanix", icon: Leaf },
  { name: "grovia", icon: Orbit },
  { name: "healio", icon: HeartPulse },
  { name: "lunera", icon: Circle },
  { name: "neurova", icon: Brain },
  { name: "omnix", icon: Hexagon },
  { name: "ovara", icon: Sparkles },
  { name: "roovon", icon: Home },

  { name: "velora", icon: Circle },
  { name: "zyntra", icon: Hexagon },
  { name: "solvix", icon: Orbit },
  { name: "aurion", icon: Sparkles },
  { name: "novira", icon: Leaf },
  { name: "klyro", icon: Circle },
  { name: "metavo", icon: Brain },
  { name: "bravix", icon: Home },

  { name: "orvian", icon: Orbit },
  { name: "lumora", icon: Sparkles },
  { name: "virella", icon: Leaf },
  { name: "nexora", icon: Hexagon },
  { name: "clarix", icon: Circle },
  { name: "helixa", icon: HeartPulse },
  { name: "trivon", icon: Home },
  { name: "syntra", icon: Brain },
]

export function BrandShowcaseSlider() {
  const [page, setPage] = useState(0)

  const itemsPerPage = 8
  const totalPages = Math.ceil(allBrands.length / itemsPerPage)

  const visibleBrands = useMemo(() => {
    const start = page * itemsPerPage
    return allBrands.slice(start, start + itemsPerPage)
  }, [page])

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="relative bg-[#080015] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-14 lg:px-14 lg:py-16">
          {/* background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,124,253,0.10),transparent_35%)]" />

          {/* subtle horizontal divider */}
          <div className="pointer-events-none absolute left-0 right-0 top-[58%] h-px bg-white/6" />

          <div className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                Join over 300,000+ businesses to
                <br />
                create unique brand designs.
              </h2>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={prevPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Previous logos"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="text-sm font-medium text-white/60">
                {page + 1} / {totalPages}
              </div>

              <button
                onClick={nextPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Next logos"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* logos */}
            <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-12">
              {visibleBrands.map((brand, index) => {
                const Icon = brand.icon

                return (
                  <div
                    key={`${brand.name}-${page}-${index}`}
                    className="group flex items-center justify-center px-4 opacity-75 transition duration-300 hover:opacity-100"
                  >
                    <div className="flex items-center gap-3 text-[#b8b0c8] transition duration-300 group-hover:text-white">
                      <Icon className="h-9 w-9 shrink-0 opacity-90 md:h-10 md:w-10" />
                      <span className="text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    page === index
                      ? "w-8 bg-[linear-gradient(90deg,#B47CFD_0%,#E8178A_100%)]"
                      : "w-2.5 bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`Go to logo page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
