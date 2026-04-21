"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Anton, Poppins } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const services = [
  {
    title: "BRAND BUILDING & STRATEGY.",
    description:
      "We shape positioning, messaging, and digital direction to help brands grow with clarity, consistency, and commercial impact.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop",
    href: "/services",
    featured: false,
  },
  {
    title: "CREATIVE DIGITAL SOLUTION.",
    description:
      "From campaign systems to content execution, we build creative solutions that connect commerce, creators, and conversion.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop",
    href: "/services",
    featured: true,
  },
  {
    title: "MARKETING & CAMPAIGN.",
    description:
      "We launch and optimize campaigns across fast-moving digital platforms designed to scale visibility, engagement, and sales.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop",
    href: "/services",
    featured: false,
  },
]

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-5xl">
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d7ff00] text-black">
                  <Sparkles className="h-4 w-4 fill-current" />
                </div>

                <span
                  className={`${anton.className} text-sm uppercase tracking-[0.14em] text-white/90 md:text-base`}
                >
                  What We Do
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className={`${anton.className} max-w-6xl text-[3rem] uppercase leading-[0.92] tracking-tight text-white sm:text-[4rem] md:text-[5.25rem] lg:text-[6.5rem] xl:text-[7.5rem]`}
              >
                Designing growth systems for seamless and enjoyable digital interactions.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="shrink-0">
              <Link
                href="/services"
                className={`${anton.className} inline-flex items-center gap-4 border-2 border-[#d7ff00] px-6 py-4 text-sm uppercase tracking-[0.12em] text-white transition hover:bg-[#d7ff00] hover:text-black md:px-8 md:py-5 md:text-base`}
              >
                All Services
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-10">
          {services.map((service, index) => {
            const isFeatured = service.featured

            return (
              <ScrollReveal key={service.title} delay={index * 120}>
                <article
                  className={`group overflow-hidden ${
                    isFeatured
                      ? "bg-[#1a28d9] text-white"
                      : "bg-[#262626] text-white"
                  }`}
                >
                  <div className="p-7 md:p-9">
                    {!isFeatured && (
                      <>
                        <div className="mb-8 flex items-start justify-between gap-4">
                          <h3
                            className={`${anton.className} max-w-[70%] text-[2.4rem] uppercase leading-[0.92] tracking-tight sm:text-[2.8rem] lg:text-[3.25rem]`}
                          >
                            {service.title}
                          </h3>

                          <Link
                            href={service.href}
                            className="mt-2 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#d7ff00] text-black transition duration-300 group-hover:scale-105"
                            aria-label={`View ${service.title}`}
                          >
                            <ArrowUpRight className="h-10 w-10" />
                          </Link>
                        </div>

                        <div className="mb-8 h-px bg-white/12" />

                        <p
                          className={`${poppins.className} text-base leading-8 text-white/80 md:text-[1.05rem]`}
                        >
                          {service.description}
                        </p>
                      </>
                    )}

                    {isFeatured && (
                      <>
                        <div className="overflow-hidden border-[12px] border-[#1a28d9] bg-black">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={1200}
                            height={900}
                            className="h-[260px] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>

                        <div className="mt-8 flex items-end justify-between gap-4">
                          <h3
                            className={`${anton.className} max-w-[75%] text-[2.6rem] uppercase leading-[0.92] tracking-tight sm:text-[3rem] lg:text-[3.5rem]`}
                          >
                            {service.title}
                          </h3>

                          <Link
                            href={service.href}
                            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#d7ff00] text-black transition duration-300 group-hover:scale-105"
                            aria-label={`View ${service.title}`}
                          >
                            <ArrowUpRight className="h-10 w-10" />
                          </Link>
                        </div>

                        <p
                          className={`${poppins.className} mt-6 text-base leading-8 text-white/85 md:text-[1.05rem]`}
                        >
                          {service.description}
                        </p>
                      </>
                    )}
                  </div>

                  {!isFeatured && (
                    <div className="px-7 pb-7 md:px-9 md:pb-9">
                      <div className="overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={1200}
                          height={900}
                          className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
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
