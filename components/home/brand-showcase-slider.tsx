"use client"

import { useMemo, useState, useEffect } from "react"

type Brand = {
  name: string
  logo: string
}

const allBrands: Brand[] = [
  { name: "Logoipsum One", logo: "https://logoipsum.com/logo/logo-1.svg" },
  { name: "Logoipsum Two", logo: "https://logoipsum.com/logo/logo-2.svg" },
  { name: "Logoipsum Three", logo: "https://logoipsum.com/logo/logo-3.svg" },
  { name: "Logoipsum Four", logo: "https://logoipsum.com/logo/logo-4.svg" },
  { name: "Logoipsum Five", logo: "https://logoipsum.com/logo/logo-5.svg" },
  { name: "Logoipsum Six", logo: "https://logoipsum.com/logo/logo-6.svg" },
  { name: "Logoipsum Seven", logo: "https://logoipsum.com/logo/logo-7.svg" },
  { name: "Logoipsum Eight", logo: "https://logoipsum.com/logo/logo-8.svg" },

  { name: "Logoipsum Nine", logo: "https://logoipsum.com/logo/logo-9.svg" },
  { name: "Logoipsum Ten", logo: "https://logoipsum.com/logo/logo-10.svg" },
  { name: "Logoipsum Eleven", logo: "https://logoipsum.com/logo/logo-11.svg" },
  { name: "Logoipsum Twelve", logo: "https://logoipsum.com/logo/logo-12.svg" },
  { name: "Logoipsum Thirteen", logo: "https://logoipsum.com/logo/logo-13.svg" },
  { name: "Logoipsum Fourteen", logo: "https://logoipsum.com/logo/logo-14.svg" },
  { name: "Logoipsum Fifteen", logo: "https://logoipsum.com/logo/logo-15.svg" },
  { name: "Logoipsum Sixteen", logo: "https://logoipsum.com/logo/logo-16.svg" },

  { name: "Logoipsum Seventeen", logo: "https://logoipsum.com/logo/logo-17.svg" },
  { name: "Logoipsum Eighteen", logo: "https://logoipsum.com/logo/logo-18.svg" },
  { name: "Logoipsum Nineteen", logo: "https://logoipsum.com/logo/logo-19.svg" },
  { name: "Logoipsum Twenty", logo: "https://logoipsum.com/logo/logo-20.svg" },
  { name: "Logoipsum Twenty One", logo: "https://logoipsum.com/logo/logo-21.svg" },
  { name: "Logoipsum Twenty Two", logo: "https://logoipsum.com/logo/logo-22.svg" },
  { name: "Logoipsum Twenty Three", logo: "https://logoipsum.com/logo/logo-23.svg" },
  { name: "Logoipsum Twenty Four", logo: "https://logoipsum.com/logo/logo-24.svg" },
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
                <div
                  key={`${brand.name}-${page}-${index}`}
                  className="group flex items-center justify-center px-4 opacity-60 transition duration-300 hover:opacity-100"
                >
                  <div className="flex h-10 w-[140px] items-center justify-center grayscale transition duration-300 group-hover:grayscale-0">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
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
