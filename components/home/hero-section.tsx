"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { Play, X } from "lucide-react"
import { useEffect, useState } from "react"

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
    src: "/HeroImage1.png",
    alt: "Star Digital Solutions hero image 1",
  },
  {
    src: "/HeroImage2.png",
    alt: "Star Digital Solutions hero image 2",
  },
]

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-[#17002d] text-white">
      {/* Image Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/10121357.jpg"
          alt="Star Digital Solutions background"
          fill
          priority
          className="h-full w-full object-cover opacity-70"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,0,42,0.92)_0%,rgba(45,0,77,0.78)_45%,rgba(45,0,77,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="absolute left-0 top-0 -z-10 h-full w-[34%] bg-[linear-gradient(115deg,rgba(70,0,100,0.35),rgba(70,0,100,0)_70%)]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-[52%] bg-[radial-gradient(circle_at_67%_34%,rgba(255,0,70,0.22),transparent_36%)]" />

      {/* Content */}
      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-6 px-6 pb-14 pt-28 md:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:pt-24 xl:min-h-[820px]">
        {/* Left Text */}
        <div className="relative z-20 max-w-[680px] lg:pl-4 xl:pl-10">
          <p
            className={`${poppins.className} mb-5 text-[12px] font-bold uppercase tracking-[0.34em] text-white/70`}
          >
            Welcome to Star Digital Solutions
          </p>

          <h1
            className={`${anton.className} text-[64px] uppercase leading-[0.92] tracking-[-0.04em] text-[#b70d41] sm:text-[86px] md:text-[104px] xl:text-[116px]`}
          >
            <span className="mb-2 block whitespace-nowrap">Built to Make</span>
            <span className="block">Brands Shine</span>
          </h1>

          <p
            className={`${poppins.className} mt-5 max-w-[560px] text-[15px] font-medium leading-7 text-white md:text-[17px]`}
          >
            Star Digital Solutions helps brands grow through e-commerce strategy,
            creator partnerships, and digital systems where brands become the star
            of the market.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className={`${poppins.className} group inline-flex items-center gap-3 rounded-full border-[3px] border-white bg-white/5 py-1.5 pl-1.5 pr-7 text-[13px] font-extrabold uppercase tracking-[-0.02em] text-white transition hover:border-[#b70d41] hover:bg-[#b70d41]`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c3aed] text-white transition group-hover:bg-white group-hover:text-[#b70d41]">
                <Play className="ml-1 h-5 w-5 fill-current" />
              </span>
              Learn More
            </button>
          </div>
        </div>

        {/* Right Hero Image Slider */}
        <div className="pointer-events-none absolute bottom-0 right-[-5vw] top-[-18%] z-10 w-[60vw] max-w-none">
          {heroImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={`object-contain object-top drop-shadow-[0_50px_120px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out ${
                activeImage === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } scale-[1.35] lg:scale-[1.45] 2xl:scale-[1.55]`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
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

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
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
