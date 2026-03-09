"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

type HeroSlide = {
  id: number
  image: string
  alt: string
  eyebrow: string
  titleTop: string
  titleBottom: string
  description: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      "/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png",
    alt: "Creative talent for social commerce campaigns",
    eyebrow: "SOCIAL COMMERCE / LIVE SELLING",
    titleTop: "DIGITAL",
    titleBottom: "SELLING",
    description:
      "We build bold campaigns, live-selling experiences, and content systems that turn attention into sales.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    alt: "Creative team collaborating on campaign strategy",
    eyebrow: "CREATIVE STRATEGY / CONTENT",
    titleTop: "CREATIVE",
    titleBottom: "IMPACT",
    description:
      "From content direction to conversion-focused execution, we help brands stand out across modern platforms.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Agency planning performance-driven campaign work",
    eyebrow: "PERFORMANCE / BRAND DIRECTION",
    titleTop: "GROWTH",
    titleBottom: "ENGINE",
    description:
      "Premium creative, strategic messaging, and platform-native storytelling designed to move audiences to act.",
  },
]

function splitLetters(text: string) {
  return text.split("").map((char, index) => (
    <span
      key={`${char}-${index}`}
      className="inline-block animate-[fadeUp_.8s_ease_forwards]"
      style={{
        animationDelay: `${index * 0.03}s`,
        opacity: 0,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  const activeSlide = useMemo(() => heroSlides[currentSlide], [currentSlide])

  const rotateX = ((mouse.y - 0.5) * -8).toFixed(2)
  const rotateY = ((mouse.x - 0.5) * 10).toFixed(2)

  return (
    <section
      className="relative overflow-hidden bg-neutral-950 text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMouse({ x, y })
      }}
      onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.16),transparent_28%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto min-h-screen max-w-[1600px] px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid min-h-[82vh] grid-cols-1 gap-6 xl:grid-cols-[220px_minmax(0,1fr)_280px]">
          <aside className="hidden xl:flex xl:flex-col xl:justify-between">
            <div className="space-y-8">
              <div className="flex items-center -space-x-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10"
                  >
                    <Image
                      src={heroSlides[(item - 1) % heroSlides.length].image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="h-px w-20 bg-white/20" />

              <p className="max-w-[180px] text-[11px] font-medium uppercase leading-5 tracking-[0.25em] text-white/70">
                The expert team brings creative direction, platform-native
                content, and sales-focused execution to every launch.
              </p>
            </div>

            <div className="space-y-8 pb-6">
              <div>
                <div className="text-4xl font-semibold tracking-tight">500+</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/55">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-4xl font-semibold tracking-tight">125+</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/55">
                  Project Done
                </div>
              </div>
            </div>
          </aside>

          <div className="relative flex min-h-[620px] items-end overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: isMounted
                  ? `perspective(1600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
                  : "none",
                transformStyle: "preserve-3d",
              }}
            >
              {heroSlides.map((slide, index) => {
                const isActive = index === currentSlide

                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
                      isActive
                        ? "translate-x-0 scale-100 opacity-100"
                        : index < currentSlide
                          ? "-translate-x-8 scale-[1.04] opacity-0"
                          : "translate-x-8 scale-[1.04] opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        transform: `translate3d(${(mouse.x - 0.5) * 24}px, ${(mouse.y - 0.5) * 24}px, 0) scale(1.06)`,
                        transition: "transform 220ms ease-out",
                      }}
                    />
                  </div>
                )
              })}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/80">
                  {activeSlide.eyebrow}
                </span>
              </div>
            </div>

            <div className="relative z-20 w-full p-5 sm:p-8 lg:p-12">
              <div className="max-w-[920px]">
                <div
                  key={activeSlide.id}
                  className="overflow-hidden text-left leading-none"
                >
                  <div className="text-[18vw] font-black uppercase tracking-[-0.08em] text-white sm:text-[14vw] xl:text-[10rem]">
                    {splitLetters(activeSlide.titleTop)}
                  </div>
                  <div className="-mt-2 text-[18vw] font-black uppercase tracking-[-0.08em] text-white/90 sm:-mt-4 sm:text-[14vw] xl:text-[10rem]">
                    {splitLetters(activeSlide.titleBottom)}
                  </div>
                </div>

                <div className="mt-6 flex max-w-2xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                    {activeSlide.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Let’s Talk
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                    >
                      View Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 sm:bottom-8 sm:right-8">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-white"
                      : "w-2.5 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-6 xl:gap-8">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                Agency Focus
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Strategy, live commerce, creative production, and performance
                storytelling built for fast-moving digital brands.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111111] p-6">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/50">
                Why it works
              </div>
              <div className="mt-5 space-y-4">
                {[
                  "Editorial-style oversized typography",
                  "Automatic slide transitions with manual controls",
                  "Cursor-based tilt and parallax depth",
                  "A strong visual stage that feels premium",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-4 text-sm text-white/80 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-semibold tracking-tight">24/7</div>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Built to create a stronger first impression for your landing
                experience on desktop and mobile.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
