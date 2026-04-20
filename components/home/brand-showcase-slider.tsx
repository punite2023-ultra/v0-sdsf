"use client"

import { useMemo, useState, useEffect } from "react"
import Image from "next/image"

type Brand = {
  name: string
  logo: string
}

// 🔥 Replace these URLs later with real logo assets (SVG preferred)
const allBrands: Brand[] = [
  { name: "L'Oréal", logo: "/logos/loreal.svg" },
  { name: "Maybelline", logo: "/logos/maybelline.svg" },
  { name: "Colgate", logo: "/logos/colgate.svg" },
  { name: "Vaseline", logo: "/logos/vaseline.svg" },
  { name: "Olay", logo: "/logos/olay.svg" },
  { name: "Dove", logo: "/logos/dove.svg" },
  { name: "Pantene", logo: "/logos/pantene.svg" },
  { name: "Garnier", logo: "/logos/garnier.svg" },

  { name: "Nivea", logo: "/logos/nivea.svg" },
  { name: "Safeguard", logo: "/logos/safeguard.svg" },
  { name: "Head & Shoulders", logo: "/logos/headshoulders.svg" },
  { name: "Happy Skin", logo: "/logos/happyskin.svg" },
  { name: "blk Cosmetics", logo: "/logos/blk.svg" },
  { name: "Vice Cosmetics", logo: "/logos/vice.svg" },
  { name: "Nestlé", logo: "/logos/nestle.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },

  { name: "Philips", logo: "/logos/philips.svg" },
  { name: "Bench", logo: "/logos/bench.svg" },
  { name: "Huggies", logo: "/logos/huggies.svg" },
]

export function BrandShowcaseSlider() {
  const [page, setPage] = useState(0)

  const itemsPerPage = 8
  const totalPages = Math.ceil(allBrands.length / itemsPerPage)

  const visibleBrands = useMemo(() => {
    const start = page * itemsPerPage
    return allBrands.slice(start, start + itemsPerPage)
  }, [page])

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 3500)

    return () => clearInterval(interval)
  }, [totalPages])

  return (
    <section className="relative bg-[#080015] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-14 lg:px-14 lg:py-16">

          {/* GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,124,253,0.10),transparent_35%)]" />

          {/* DIVIDER */}
          <div className="pointer-events-none absolute left-0 right-0 top-[58%] h-px bg-white/6" />

          <div className="relative z-10">

            {/* UPDATED TITLE */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                Trusted By Leading Brands
              </h2>

              <p className="mt-4 text-lg text-white/70 md:text-xl">
                Partnered with Brands That Shape the Market
              </p>

              <p className="mt-6 text-sm text-white/60 md:text-base leading-relaxed">
                We’ve worked with a growing portfolio of brands across beauty, personal care,
                FMCG, fashion, tech, and lifestyle.
              </p>

              <p className="mt-6 text-sm text-white/60 md:text-base leading-relaxed">
                From household names to fast-rising challengers, we help brands launch,
                scale, and perform across the platforms that matter most.
              </p>
            </div>

            {/* LOGO GRID */}
            <div className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-12">
              {visibleBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${page}-${index}`}
                  className="group flex items-center justify-center px-4 opacity-60 transition duration-300 hover:opacity-100"
                >
                  <div className="relative h-10 w-[140px] grayscale transition duration-300 group-hover:grayscale-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="mt-12 flex items-center justify-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    page === index
                      ? "w-10 bg-[linear-gradient(90deg,#B47CFD_0%,#FF2D8D_100%)] shadow-[0_0_12px_rgba(255,45,141,0.6)]"
                      : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
