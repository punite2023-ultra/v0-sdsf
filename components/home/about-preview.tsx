"use client"

import Image from "next/image"
import { Sparkles, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway, Poppins } from "next/font/google"

import image1 from "@/public/Image1.jpg"
import image2 from "@/public/Image2.jpg"
import image3 from "@/public/Image3.jpg"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const services = [
  {
    title: "PERFORMANCE & GROWTH STRATEGY",
    description:
      "At Star Digital Solutions, we transform strategy into growth—leveraging e-commerce, creator partnerships, affiliate marketing, and multi-channel networks to drive measurable performance.",
    image: image1,
    href: "/services",
    featured: false,
  },
  {
    title: "SCALABLE CAMPAIGN DESIGN",
    description:
      "From established brands to emerging stars, we create campaigns designed not just to shine—but to convert, scale, and lead.",
    image: image2,
    href: "/services",
    featured: true,
  },
  {
    title: "AGILE DIGITAL INNOVATION",
    description:
      "Built for brands ready to move faster and stand out in today’s digital landscape.",
    image: image3,
    href: "/services",
    featured: false,
  },
]

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <div className="max-w-6xl">
            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center text-white">
                  <Sparkles className="h-7 w-7 fill-current" />
                </div>

                <span
                  className={`${raleway.className} text-sm uppercase tracking-[0.08em] text-white md:text-base`}
                >
                  WHO WE ARE
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className={`${raleway.className} mx-auto max-w-[1500px] text-center text-[60px] leading-[0.9] tracking-[-0.03em] uppercase md:text-[64px]`}
              >
                WHERE CONTENT, COMMERCE, AND CREATORS BRING BRANDS INTO THE
                SPOTLIGHT
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-10">
          {services.map((service, index) => {
            const isFeatured = service.featured

            return (
              <ScrollReveal key={service.title} delay={index * 120}>
                <article
                  className={`group overflow-hidden ${
                    isFeatured ? "bg-[#682e94] text-white" : "bg-[#262626] text-white"
                  }`}
                >
                  <div className="p-7 md:p-8">
                    {!isFeatured && (
                      <>
                        <div className="mb-7 flex items-start justify-between gap-4">
                          <h3
                            className={`${raleway.className} max-w-[68%] text-[32px] leading-[0.95] tracking-[-0.02em]`}
                          >
                            {service.title}
                          </h3>

                          <a
                            href={service.href}
                            className="mt-1 flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full bg-[#7f2064] text-white transition duration-300 group-hover:scale-105"
                            aria-label={`View ${service.title}`}
                          >
                            <ArrowUpRight className="h-11 w-11" strokeWidth={2.3} />
                          </a>
                        </div>

                        <div className="mb-6 h-px bg-white/12" />

                        <p
                          className={`${poppins.className} max-w-[92%] text-[14px] leading-[1.6] text-white/80 md:text-[15px]`}
                        >
                          {service.description}
                        </p>
                      </>
                    )}

                    {isFeatured && (
                      <>
                        <div className="overflow-hidden border-[12px] border-[#682e94] bg-black">
                          <Image
                            src={service.image}
                            alt={service.title}
                            className="h-[260px] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]"
                            priority={index === 1}
                          />
                        </div>

                        <div className="mt-8 flex items-end justify-between gap-4">
                          <h3
                            className={`${raleway.className} max-w-[72%] text-[32px] leading-[0.95] tracking-[-0.02em]`}
                          >
                            {service.title}
                          </h3>

                          <a
                            href={service.href}
                            className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full bg-[#7f2064] text-white transition duration-300 group-hover:scale-105"
                            aria-label={`View ${service.title}`}
                          >
                            <ArrowUpRight className="h-11 w-11" strokeWidth={2.3} />
                          </a>
                        </div>

                        <p
                          className={`${poppins.className} mt-5 max-w-[92%] text-[14px] leading-[1.6] text-white/85 md:text-[15px]`}
                        >
                          {service.description}
                        </p>
                      </>
                    )}
                  </div>

                  {!isFeatured && (
                    <div className="px-7 pb-7 md:px-8 md:pb-8">
                      <div className="overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
