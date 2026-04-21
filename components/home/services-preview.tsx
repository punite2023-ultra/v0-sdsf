"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Megaphone, Sparkles, BadgeCheck } from "lucide-react"

const stats = [
  {
    label: "Successful Campaign Launches",
    value: 95,
    color: "bg-lime-400",
  },
  {
    label: "Innovative Design",
    value: 85,
    color: "bg-blue-600",
  },
  {
    label: "High Impact Project",
    value: 100,
    color: "bg-zinc-900",
  },
]

const highlights = [
  {
    title: "Over 10 Years of Experience",
    icon: BadgeCheck,
    iconBg: "bg-lime-400",
    iconColor: "text-zinc-900",
  },
  {
    title: "Trusted by Global Brands",
    icon: Megaphone,
    iconBg: "bg-blue-700",
    iconColor: "text-white",
  },
]

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#ececec] text-zinc-900">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.18) 1px, transparent 0)",
          backgroundSize: "8px 8px",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,0.15))]" />

      <div className="relative mx-auto max-w-[1700px] px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.9fr_0.75fr] lg:gap-8 xl:gap-10">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-7 w-7 fill-lime-400 text-lime-400" />
              <span className="bg-[#b9d4f5] px-3 py-1 text-sm font-extrabold uppercase tracking-tight text-zinc-900 md:text-base">
                Who We Are
              </span>
            </div>

            <h2 className="max-w-[760px] text-[58px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-zinc-900 sm:text-[74px] md:text-[92px] lg:text-[108px] xl:text-[128px]">
              Creativity
              <br />
              Meets Strategy.
            </h2>

            <p className="mt-8 max-w-[760px] text-lg leading-8 text-zinc-600 md:text-[20px]">
              With a team of passionate designers, marketers, and innovators,
              we specialize in delivering unique solutions that elevate your
              brand and captivate your audience.
            </p>

            <div className="mt-12 space-y-0">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={item.title}>
                    <div className="flex items-center gap-5 py-7 md:gap-6">
                      <div
                        className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                      >
                        <Icon className={`h-9 w-9 ${item.iconColor}`} strokeWidth={2.4} />
                      </div>

                      <h3 className="text-[26px] font-black uppercase leading-none tracking-[-0.03em] text-zinc-900 md:text-[34px] lg:text-[40px]">
                        {item.title}
                      </h3>
                    </div>

                    {index !== highlights.length - 1 && (
                      <div className="h-px w-full bg-zinc-300" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Center image */}
          <div className="relative flex min-h-[420px] items-end justify-center lg:min-h-[760px]">
            <div className="absolute bottom-12 left-1/2 z-0 h-[42%] w-[62%] -translate-x-1/2 bg-lime-400 shadow-[0_0_60px_rgba(190,242,100,0.25)]" />
            <div className="absolute bottom-10 left-1/2 z-0 h-[40%] w-[60%] -translate-x-1/2 border-[10px] border-zinc-900" />

            <div className="relative z-10 w-full max-w-[760px]">
              <Image
                src="/who-we-are-main.png"
                alt="Creative team visual"
                width={900}
                height={1100}
                className="mx-auto h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10 flex flex-col lg:pt-3">
            <div className="overflow-hidden">
              <Image
                src="/who-we-are-side.jpg"
                alt="Team working"
                width={700}
                height={420}
                className="h-[210px] w-full object-cover md:h-[250px]"
              />
            </div>

            <div className="mt-8 space-y-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[20px] font-black uppercase leading-none tracking-[-0.02em] text-zinc-900 md:text-[24px]">
                      {stat.label}
                    </span>
                    <span className="text-[20px] font-black uppercase leading-none tracking-[-0.02em] text-zinc-900 md:text-[24px]">
                      {stat.value}%
                    </span>
                  </div>

                  <div className="h-4 w-full rounded-full bg-zinc-200">
                    <div
                      className={`h-4 rounded-full ${stat.color}`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[520px] text-lg leading-8 text-zinc-600 md:text-[19px]">
              We combine creative direction, strategic thinking, and execution
              that helps brands grow with clarity, consistency, and measurable
              impact across digital platforms.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-4 border-2 border-blue-600 px-8 py-5 text-lg font-black uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-blue-600 hover:text-white"
              >
                About Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white transition group-hover:bg-white group-hover:text-zinc-900">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
