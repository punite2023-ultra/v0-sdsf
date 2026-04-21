"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          eyebrow: "STAR DIGITAL SOLUTIONS",
          titleTop: "A new star",
          titleBottom: "is entering the digital orbit.",
          description:
            "We help brands scale through e-commerce strategy, creator partnerships, affiliate marketing, and digital growth systems built for modern commerce.",
          primary: "Work With Us",
          secondary: "View Our Story",
          stat1: "Creators",
          stat2: "Campaigns",
          stat3: "Growth Systems",
        }
      : {
          eyebrow: "STAR DIGITAL SOLUTIONS",
          titleTop: "A new star",
          titleBottom: "is entering the digital orbit.",
          description:
            "We help brands scale through e-commerce strategy, creator partnerships, affiliate marketing, and digital growth systems built for modern commerce.",
          primary: "Work With Us",
          secondary: "View Our Story",
          stat1: "Creators",
          stat2: "Campaigns",
          stat3: "Growth Systems",
        }

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
              {t.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              className="max-w-5xl text-[clamp(3.25rem,9vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]"
            >
              <span className="block">{t.titleTop}</span>
              <span className="block text-white/90">{t.titleBottom}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-8 max-w-xl"
            >
              <p className="text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                {t.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                {t.primary}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about/our-story"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                {t.secondary}
              </Link>
            </motion.div>
          </div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
            className="relative lg:ml-auto lg:w-full lg:max-w-[460px]"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-fuchsia-500/10" />

              <div className="relative space-y-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Digital Growth Platform
                  </p>
                  <p className="mt-4 max-w-sm text-2xl font-medium leading-tight text-white/92">
                    Where strategy, creators, commerce, and content move in one orbit.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em]">01</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      {t.stat1}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em]">02</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      {t.stat2}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em]">03</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      {t.stat3}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-white/12 p-5">
                  <p className="text-sm leading-7 text-white/62">
                    Built for brands ready to scale on digital platforms that move fast.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-xs uppercase tracking-[0.22em] text-white/40">
            Aligning the stars for your digital success
          </p>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/50">
            <span className="rounded-full border border-white/10 px-3 py-2">E-commerce</span>
            <span className="rounded-full border border-white/10 px-3 py-2">Affiliate</span>
            <span className="rounded-full border border-white/10 px-3 py-2">Creators</span>
            <span className="rounded-full border border-white/10 px-3 py-2">Campaigns</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
