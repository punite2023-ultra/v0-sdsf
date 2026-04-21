"use client"

import Link from "next/link"
import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function ServicesPreview() {
  const { language } = useLanguage()
  const { ref, inView } = useInView(0.2)

  const t =
    language === "zh"
      ? {
          eyebrow: "WHO WE ARE",
          heading: (
            <>
              CREATIVITY MEETS
              <br />
              STRATEGY.
            </>
          ),
          description1:
            "At our core, we are more than a service provider — we are a growth partner.",
          description2:
            "We work side-by-side with brands to understand their vision, challenges, and opportunities. This allows us to craft solutions that are not only creative but also scalable and results-driven.",
          description3:
            "Whether it’s launching a new brand or optimizing an existing one, we bring together strategy, creativity, and data to move businesses forward.",
          highlights: [
            "Strategic Brand Development",
            "Content Creation & Campaign Management",
            "E-commerce Growth & Optimization",
            "Performance Marketing Across Digital Channels",
          ],
          cta: "LEARN MORE",
        }
      : {
          eyebrow: "WHO WE ARE",
          heading: (
            <>
              CREATIVITY MEETS
              <br />
              STRATEGY.
            </>
          ),
          description1:
            "At our core, we are more than a service provider — we are a growth partner.",
          description2:
            "We work side-by-side with brands to understand their vision, challenges, and opportunities. This allows us to craft solutions that are not only creative but also scalable and results-driven.",
          description3:
            "Whether it’s launching a new brand or optimizing an existing one, we bring together strategy, creativity, and data to move businesses forward.",
          highlights: [
            "Strategic Brand Development",
            "Content Creation & Campaign Management",
            "E-commerce Growth & Optimization",
            "Performance Marketing Across Digital Channels",
          ],
          cta: "LEARN MORE",
        }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f5f1ea] py-20 text-[#1e1e1e] md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,138,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(196,132,252,0.10),transparent_25%)]" />

      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div
            className={`transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3.5 w-3.5 rounded-sm bg-[#c6ff00]" />
              <span
                className={`${poppins.className} text-[13px] font-semibold uppercase tracking-[0.24em] text-[#6c40d8]`}
              >
                {t.eyebrow}
              </span>
            </div>

            <h2
              className={`${anton.className} max-w-[780px] text-[56px] uppercase leading-[0.9] tracking-[-0.03em] text-[#202020] md:text-[82px] lg:text-[112px] xl:text-[132px]`}
            >
              {t.heading}
            </h2>

            <div className="mt-8 max-w-[720px] space-y-5">
              <p
                className={`${poppins.className} text-[18px] font-semibold leading-[1.6] text-[#202020] md:text-[20px]`}
              >
                {t.description1}
              </p>

              <p
                className={`${poppins.className} text-[15px] leading-[1.85] text-[#4d4d4d] md:text-[16px]`}
              >
                {t.description2}
              </p>

              <p
                className={`${poppins.className} text-[15px] leading-[1.85] text-[#4d4d4d] md:text-[16px]`}
              >
                {t.description3}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-black/10 bg-white/70 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c6ff00]" />
                  <p
                    className={`${poppins.className} text-[14px] font-medium leading-[1.6] text-[#222]`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className={`${poppins.className} inline-flex items-center gap-3 rounded-full border border-[#202020] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#202020] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#202020] hover:text-white`}
              >
                {t.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-[#1c1c1c] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[0.92/1] overflow-hidden rounded-[26px]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=1400&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_100%)]" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <span
                    className={`${poppins.className} text-[11px] font-semibold uppercase tracking-[0.18em] text-white`}
                  >
                    Growth Partner
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/92 p-5 backdrop-blur-md md:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3
                      className={`${anton.className} text-[32px] uppercase leading-[0.95] text-[#202020] md:text-[40px]`}
                    >
                      WHO WE ARE
                    </h3>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c6ff00] text-[#202020]">
                      <ArrowUpRight className="h-7 w-7" />
                    </div>
                  </div>

                  <p
                    className={`${poppins.className} text-[14px] leading-[1.75] text-[#4d4d4d] md:text-[15px]`}
                  >
                    We combine creativity, technology, and execution to help
                    brands grow with clarity, consistency, and measurable
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
