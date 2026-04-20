"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.34)_0%,rgba(168,85,247,0.22)_35%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
    />
  )
}

export default function AboutPage() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          heroTitle: "About",
          heroSubtitle:
            "了解 Star Digital Solutions 如何通过内容、商业与创作者生态推动品牌成长。",
          sectionLabel: "ABOUT STAR DIGITAL SOLUTIONS",
          sectionTitle: "We build digital growth systems designed for modern brands.",
          sectionBody:
            "Star Digital Solutions helps brands grow through content, commerce, creator partnerships, e-commerce execution, and scalable digital strategies. We do not just deliver creative assets — we help build momentum.",
          primaryCta: "View Our Story",
          secondaryCta: "Contact Us",
          cardTitle: "Our Story",
          cardBody:
            "Discover how Star Digital Solutions evolved from a vision into a digital growth partner for modern brands.",
          cardCta: "Read More",
        }
      : {
          heroTitle: "About",
          heroSubtitle:
            "Learn how Star Digital Solutions helps brands grow through content, commerce, and creator-led execution.",
          sectionLabel: "ABOUT STAR DIGITAL SOLUTIONS",
          sectionTitle:
            "We build digital growth systems designed for modern brands.",
          sectionBody:
            "Star Digital Solutions helps brands grow through content, commerce, creator partnerships, e-commerce execution, and scalable digital strategies. We do not just deliver creative assets — we help build momentum.",
          primaryCta: "View Our Story",
          secondaryCta: "Contact Us",
          cardTitle: "Our Story",
          cardBody:
            "Discover how Star Digital Solutions evolved from a vision into a digital growth partner for modern brands.",
          cardCta: "Read More",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen overflow-hidden bg-[#0a0118] text-white">
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* HERO */}
        <section className="relative pt-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-b-[30px] border-b border-white/15 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.22),rgba(10,1,24,0.96)_40%,rgba(10,1,24,1)_70%)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <GradientOrb className="left-1/2 top-10 h-48 w-48 -translate-x-1/2" />

              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {t.heroTitle}
                  </h1>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    {t.heroSubtitle}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:gap-10">
              <ScrollReveal>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                    {t.sectionLabel}
                  </p>
                  <h2 className="mt-4 max-w-[16ch] text-3xl font-bold leading-tight text-white md:text-5xl">
                    {t.sectionTitle}
                  </h2>
                  <p className="mt-6 max-w-[62ch] text-sm leading-7 text-white/70 md:text-base">
                    {t.sectionBody}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/about/our-story"
                      className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#b47cfd,#ff7eb6)] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
                    >
                      {t.primaryCta}
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                    >
                      {t.secondaryCta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8">
                  <div className="flex h-full flex-col justify-between rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.16),rgba(255,255,255,0.02)_55%)] p-6">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
                        SUB PAGE
                      </p>
                      <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                        {t.cardTitle}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/70">
                        {t.cardBody}
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/about/our-story"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-pink-300 transition hover:text-white"
                      >
                        {t.cardCta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
