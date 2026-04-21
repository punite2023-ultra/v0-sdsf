"use client"

import { useMemo, useState, useEffect } from "react"

type Brand = {
  name: string
  logo: string
}

const allBrands: Brand[] = [
  { name: "Logoipsum One", logo: "https://logoipsum.com/300.svg?text=Logoipsum+One" },
  { name: "Logoipsum Two", logo: "https://logoipsum.com/301.svg?text=Logoipsum+Two" },
  { name: "Logoipsum Three", logo: "https://logoipsum.com/302.svg?text=Logoipsum+Three" },
  { name: "Logoipsum Four", logo: "https://logoipsum.com/303.svg?text=Logoipsum+Four" },
  { name: "Logoipsum Five", logo: "https://logoipsum.com/304.svg?text=Logoipsum+Five" },
  { name: "Logoipsum Six", logo: "https://logoipsum.com/305.svg?text=Logoipsum+Six" },
  { name: "Logoipsum Seven", logo: "https://logoipsum.com/306.svg?text=Logoipsum+Seven" },
  { name: "Logoipsum Eight", logo: "https://logoipsum.com/307.svg?text=Logoipsum+Eight" },

  { name: "Logoipsum Nine", logo: "https://logoipsum.com/308.svg?text=Logoipsum+Nine" },
  { name: "Logoipsum Ten", logo: "https://logoipsum.com/309.svg?text=Logoipsum+Ten" },
  { name: "Logoipsum Eleven", logo: "https://logoipsum.com/310.svg?text=Logoipsum+Eleven" },
  { name: "Logoipsum Twelve", logo: "https://logoipsum.com/311.svg?text=Logoipsum+Twelve" },
  { name: "Logoipsum Thirteen", logo: "https://logoipsum.com/312.svg?text=Logoipsum+Thirteen" },
  { name: "Logoipsum Fourteen", logo: "https://logoipsum.com/313.svg?text=Logoipsum+Fourteen" },
  { name: "Logoipsum Fifteen", logo: "https://logoipsum.com/314.svg?text=Logoipsum+Fifteen" },
  { name: "Logoipsum Sixteen", logo: "https://logoipsum.com/315.svg?text=Logoipsum+Sixteen" },

  { name: "Logoipsum Seventeen", logo: "https://logoipsum.com/316.svg?text=Logoipsum+Seventeen" },
  { name: "Logoipsum Eighteen", logo: "https://logoipsum.com/317.svg?text=Logoipsum+Eighteen" },
  { name: "Logoipsum Nineteen", logo: "https://logoipsum.com/318.svg?text=Logoipsum+Nineteen" },
  { name: "Logoipsum Twenty", logo: "https://logoipsum.com/319.svg?text=Logoipsum+Twenty" },
  { name: "Logoipsum Twenty One", logo: "https://logoipsum.com/320.svg?text=Logoipsum+Twenty+One" },
  { name: "Logoipsum Twenty Two", logo: "https://logoipsum.com/321.svg?text=Logoipsum+Twenty+Two" },
  { name: "Logoipsum Twenty Three", logo: "https://logoipsum.com/322.svg?text=Logoipsum+Twenty+Three" },
  { name: "Logoipsum Twenty Four", logo: "https://logoipsum.com/323.svg?text=Logoipsum+Twenty+Four" },
]

function LogoCard({ brand }: { brand: Brand }) {
  const fallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="220" height="70" viewBox="0 0 220 70">
        <rect width="220" height="70" rx="14" fill="transparent"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          fill="white" fill-opacity="0.9" font-family="Arial, Helvetica, sans-serif"
          font-size="20" font-weight="700">
          ${brand.name}
        </text>
      </svg>
    `)

  return (
    <div className="group flex items-center justify-center px-4 opacity-70 transition duration-300 hover:opacity-100">
      <div className="flex h-12 w-[170px] items-center justify-center grayscale transition duration-300 group-hover:grayscale-0">
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget
            target.onerror = null
            target.src = fallback
          }}
        />
      </div>
    </div>
  )
}

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
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,124,253,0.10),transparent_35%)]" />
          <div className="pointer-events-none absolute left-0 right-0 top-[58%] h-px bg-white/6" />

          <div className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                Trusted By Leading Brands
              </h2>

              <p className="mt-4 text-lg text-white/70 md:text-xl">
                Partnered with Brands That Shape the Market
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
                We’ve worked with a growing portfolio of brands across beauty, personal care,
                FMCG, fashion, tech, and lifestyle.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
                From household names to fast-rising challengers, we help brands launch,
                scale, and perform across the platforms that matter most.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-12">
              {visibleBrands.map((brand, index) => (
                <LogoCard key={`${brand.name}-${page}-${index}`} brand={brand} />
              ))}
            </div>

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
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
