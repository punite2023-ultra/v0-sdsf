"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    category: "Brand Strategy",
    title: "Luxury Beauty Campaign",
    description:
      "A premium digital campaign system focused on branding, content storytelling, and conversion-led creative execution.",
    image: "/placeholder.svg?height=900&width=1200",
  },
  {
    id: 2,
    category: "Website Development",
    title: "Modern Business Platform",
    description:
      "Responsive design, user-first structure, and high-impact visuals built to strengthen brand trust and lead generation.",
    image: "/placeholder.svg?height=900&width=1200",
  },
  {
    id: 3,
    category: "Digital Marketing",
    title: "Performance Growth Launch",
    description:
      "A campaign rollout combining content, ad creatives, and strategic optimization for measurable digital growth.",
    image: "/placeholder.svg?height=900&width=1200",
  },
]

function SectionGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    />
  )
}

export function FeaturedProjectSection() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          eyebrow: "FEATURED PROJECT",
          heading: "Selected Work That Turns Strategy Into Digital Results.",
          description:
            "Explore a curated set of projects that combine design, technology, and marketing to create stronger brands and better business outcomes.",
          button: "VIEW PROJECT",
        }
      : {
          eyebrow: "FEATURED PROJECT",
          heading: "Selected Work That Turns Strategy Into Digital Results.",
          description:
            "Explore a curated set of projects that combine design, technology, and marketing to create stronger brands and better business outcomes.",
          button: "VIEW PROJECT",
        }

  return (
    <section className="relative overflow-hidden bg-[#080018] py-16 md:py-24">
      <SectionGrid />

      <div className="pointer-events-none absolute left-[-120px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#8d42ff]/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[40px] h-[320px] w-[320px] rounded-full bg-[#ff79c8]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[900px] text-center md:mb-14">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#ff86cf]">
            {t.eyebrow}
          </div>

          <h2 className="mx-auto max-w-[900px] text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] md:text-[58px]">
            {t.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.75] text-white/60 sm:text-[17px] md:text-[18px]">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] min-h-[520px]">
            <div className="absolute inset-0">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,0,24,0.02)_0%,rgba(8,0,24,0.2)_20%,rgba(8,0,24,0.82)_100%)]" />

            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(183,125,255,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,122,199,0.14),transparent_35%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 md:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#d8c4ff]">
                {projects[0].category}
              </span>

              <div className="flex items-end justify-between gap-4">
                <div className="max-w-[620px]">
                  <h3 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[44px]">
                    {projects[0].title}
                  </h3>

                  <p className="mt-4 max-w-[560px] text-[15px] leading-[1.75] text-white/70 md:text-[17px]">
                    {projects[0].description}
                  </p>
                </div>

                <Link
                  href="/portfolio"
                  className="hidden shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] p-4 text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.12] md:inline-flex"
                  aria-label={t.button}
                >
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>

              <Link
                href="/portfolio"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[linear-gradient(90deg,#b77dff_0%,#ff8bc7_100%)] px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                {t.button}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="grid gap-6">
            {projects.slice(1).map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] min-h-[247px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,0,24,0.82)_0%,rgba(8,0,24,0.55)_42%,rgba(8,0,24,0.15)_100%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,125,255,0.16),transparent_36%)]" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d8c4ff]">
                    {project.category}
                  </span>

                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-[380px]">
                      <h3 className="text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:text-[28px]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-[1.7] text-white/68 md:text-[15px]">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      href="/portfolio"
                      className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.12]"
                      aria-label={t.button}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
