"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { Play, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const heroImages = [
  {
    src: "/Hero1a.png",
    alt: "Hero image 1",
  },
  {
    src: "/Hero2a.png",
    alt: "Hero image 2",
  },
]

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const isZh = language === "zh"

  return (
    <section className="relative isolate overflow-hidden bg-[#17002d] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,0,42,0.92)_0%,rgba(45,0,77,0.78)_45%,rgba(45,0,77,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* CONTENT */}
      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-6 px-6 pb-14 pt-28 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:pt-24 xl:min-h-[820px]">

        {/* LEFT TEXT */}
        <div className="relative z-20 max-w-[760px] lg:pl-4 xl:pl-10">

          <p className={`${poppins.className} mb-5 text-[12px] font-bold uppercase tracking-[0.34em] text-white/70`}>
            {isZh ? "欢迎来到星际数字解决方案" : "WELCOME TO STAR DIGITAL SOLUTIONS"}
          </p>

          <h1 className={`${anton.className} uppercase leading-[0.92] tracking-[-0.04em] text-[#b70d41]`}>
            {isZh ? (
              <>
                <span className="block whitespace-nowrap text-[58px] sm:text-[76px] md:text-[90px] xl:text-[102px]">
                  为品牌而生
                </span>
                <span className="block whitespace-nowrap text-[58px] sm:text-[76px] md:text-[90px] xl:text-[102px]">
                  让品牌闪耀
                </span>
              </>
            ) : (
              <>
                <span className="block whitespace-nowrap text-[58px] sm:text-[76px] md:text-[90px] xl:text-[102px]">
                  Built to Make
                </span>
                <span className="block whitespace-nowrap text-[58px] sm:text-[76px] md:text-[90px] xl:text-[102px]">
                  Brands Shine
                </span>
              </>
            )}
          </h1>

          <p className={`${poppins.className} mt-5 max-w-[560px] text-[15px] font-medium leading-7 text-white md:text-[17px]`}>
            {isZh
              ? "Star Digital Solutions 通过电商策略、创作者合作及数字化系统，帮助品牌实现增长，让品牌在市场中脱颖而出。"
              : "Star Digital Solutions helps brands grow through e-commerce strategy, creator partnerships, and digital systems where brands become the star of the market."}
          </p>

          {/* BUTTON */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className={`${poppins.className} group inline-flex items-center gap-3 rounded-full border-[3px] border-white bg-white/5 py-1.5 pl-1.5 pr-7 text-[13px] font-extrabold uppercase text-white transition hover:border-[#b70d41] hover:bg-[#b70d41]`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c3aed] text-white group-hover:bg-white group-hover:text-[#b70d41]">
                <Play className="ml-1 h-5 w-5 fill-current" />
              </span>
              {isZh ? "了解更多" : "Learn More"}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-full w-[70vw] max-w-[1100px]">
          {heroImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="70vw"
              className={`object-cover object-right-bottom transition-all duration-1000 ease-in-out ${
                activeImage === index
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-16 opacity-0 scale-105"
              } drop-shadow-[0_50px_120px_rgba(0,0,0,0.5)]`}
            />
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-4 w-4 rounded-full transition ${
                activeImage === index
                  ? "bg-[#7c3aed]"
                  : "bg-[#b70d41]/70 hover:bg-[#b70d41]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)]">

            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              className="aspect-video w-full"
              src="/TVC.mp4"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
