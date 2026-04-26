"use client"

import Image from "next/image"
import { Anton, Poppins } from "next/font/google"
import { Play } from "lucide-react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#17002d] text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/10121357.jpg"
          alt="Star Digital Solutions hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,0,42,0.98)_0%,rgba(45,0,77,0.9)_43%,rgba(45,0,77,0.52)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="absolute left-0 top-0 -z-10 h-full w-[34%] bg-[linear-gradient(115deg,rgba(70,0,100,0.45),rgba(70,0,100,0)_70%)]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-[48%] bg-[radial-gradient(circle_at_65%_35%,rgba(255,0,70,0.26),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-6 pb-14 pt-28 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:pt-24 xl:min-h-[820px]">
        <div className="relative z-20 max-w-[680px] lg:pl-4 xl:pl-10">
          <p className={`${poppins.className} mb-5 text-[12px] font-bold uppercase tracking-[0.34em] text-white/70`}>
            Star Digital Solutions
          </p>

          <h1 className={`${anton.className} text-[64px] uppercase leading-[0.92] tracking-[-0.04em] text-[#b70d41] sm:text-[86px] md:text-[104px] xl:text-[116px]`}>
            Built to Make
            <span className="block">Brands Shine</span>
          </h1>

          <p className={`${poppins.className} mt-5 max-w-[520px] text-[15px] font-medium leading-7 text-white md:text-[17px]`}>
            Star Digital Solutions helps brands grow through e-commerce strategy, creator partnerships, and digital systems where brands become the star of the market.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/services"
              className={`${poppins.className} group inline-flex items-center gap-3 rounded-full border-[3px] border-white bg-white/5 py-1.5 pl-1.5 pr-7 text-[13px] font-extrabold uppercase tracking-[-0.02em] text-white transition hover:border-[#b70d41] hover:bg-[#b70d41]`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c3aed] text-white transition group-hover:bg-white group-hover:text-[#b70d41]">
                <Play className="ml-1 h-5 w-5 fill-current" />
              </span>
              Learn More
            </a>
          </div>
        </div>

        <div className="relative z-10 flex min-h-[520px] items-end justify-center lg:min-h-[680px] lg:justify-end">
          <div className="absolute bottom-0 right-[8%] h-[210px] w-[75%] rounded-full bg-black/30 blur-2xl" />
          <div className="absolute bottom-[28%] right-[8%] h-[280px] w-[280px] rounded-full bg-[#ff0048]/20 blur-3xl" />

          <div className="relative h-[560px] w-full max-w-[640px] md:h-[680px] lg:h-[720px] xl:h-[760px] xl:max-w-[720px]">
            <Image
              src="/HeroImage1.png"
              alt="Star Digital Solutions hero person"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_30px_70px_rgba(0,0,0,0.38)]"
            />
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-[#7c3aed]" />
          <span className="h-4 w-4 rounded-full bg-[#b70d41]/80" />
          <span className="h-4 w-4 rounded-full bg-[#dc444a]/80" />
        </div>
      </div>
    </section>
  )
}
