"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "800"],
})

const features = [
  "Strategic digital solutions tailored to your brand",
  "Experienced team of digital specialists and creators",
  "Transparent communication and performance reporting",
  "Data-driven strategies focused on measurable growth",
]

export function AboutPreview() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = 15
    const duration = 1200
    const incrementTime = duration / end

    const counter = setInterval(() => {
      start += 1
      setCount(start)

      if (start === end) {
        clearInterval(counter)
      }
    }, incrementTime)

    return () => clearInterval(counter)
  }, [])

  return (
    <section className="bg-muted/30 pt-12 pb-24 lg:pt-16 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-zoom overflow-hidden rounded-[2rem]">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                      alt="Team meeting"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="img-zoom overflow-hidden rounded-[2rem]">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                      alt="Creative workspace"
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="img-zoom overflow-hidden rounded-[2rem]">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                      alt="Team collaboration"
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="img-zoom overflow-hidden rounded-[2rem]">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop"
                      alt="Design process"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
                <div className="text-4xl font-bold">{count}+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="max-w-xl">
            <ScrollReveal>
              <span
                className={`${raleway.className} text-primary text-base font-semibold uppercase tracking-[0.18em]`}
              >
                About Us
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className={`${raleway.className} mt-4 mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-[52px]`}
              >
                We Transform Brands Through Digital Strategy
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mb-6 text-xl leading-relaxed text-muted-foreground md:text-[1.55rem]">
                Star Digital Solutions Inc. is a trusted digital partner
                dedicated to helping brands grow in today’s fast-moving online
                landscape. We deliver comprehensive solutions that strengthen
                brand presence, enhance audience engagement, and drive
                measurable results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-[1.15rem]">
                From strategic content development and brand marketing to
                digital campaign management and platform optimization, our team
                ensures businesses stay competitive across evolving digital
                channels. More than a service provider, we become a partner
                committed to long-term growth.
              </p>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal delay={400}>
              <ul className="mb-8 space-y-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-lg text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Button asChild size="lg" className="group rounded-full px-8">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
