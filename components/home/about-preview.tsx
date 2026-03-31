"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "800"],
})

export function AboutPreview() {
  const { language } = useLanguage()
  const [count, setCount] = useState(0)

  const features =
    language === "en"
      ? [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt ut labore et dolore",
          "Ut enim ad minim veniam, quis nostrud exercitation",
          "Duis aute irure dolor in reprehenderit in voluptate",
        ]
      : [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt ut labore et dolore",
          "Ut enim ad minim veniam, quis nostrud exercitation",
          "Duis aute irure dolor in reprehenderit in voluptate",
        ]

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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[0.9] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative aspect-[0.9] rounded-3xl overflow-hidden mt-10">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80"
                    alt="Creative workspace"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative aspect-[0.9] rounded-3xl overflow-hidden -mt-6">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative aspect-[0.9] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
                    alt="Design process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 rounded-3xl bg-white shadow-xl border px-6 py-5">
                <div className="text-3xl md:text-4xl font-extrabold text-[#682e94]">
                  {count}+
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "en" ? "Lorem Ipsum Dolor" : "Lorem Ipsum Dolor"}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div>
              <p
                className={`${raleway.className} text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4`}
              >
                {language === "en" ? "Lorem Ipsum" : "Lorem Ipsum"}
              </p>

              <h2
                className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight`}
              >
                {language === "en"
                  ? "Lorem Ipsum Dolor Sit Amet Consectetur"
                  : "Lorem Ipsum Dolor Sit Amet Consectetur"}
              </h2>

              <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                {language === "en"
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                {language === "en"
                  ? "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#682e94] mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground/90">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full px-8 group">
                  <Link href="/about">
                    {language === "en" ? "Lorem Ipsum" : "Lorem Ipsum"}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
