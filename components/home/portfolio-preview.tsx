"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export function PortfolioPreview() {
  const { language } = useLanguage()

  const categories =
    language === "en"
      ? ["Lorem", "Ipsum", "Dolor", "Sit Amet", "Consectetur"]
      : ["示例一", "示例二", "示例三", "示例四", "示例五"]

  const projects = [
    {
      id: 1,
      titleEn: "Lorem Ipsum Dolor",
      titleZh: "虚拟示例标题一",
      categoryEn: "Ipsum",
      categoryZh: "示例二",
      image:
        "https://images.unsplash.com/photo-1582020738577-2e7a48043902?w=900&auto=format&fit=crop&q=60",
      href: "/portfolio/luxe-fashion",
    },
    {
      id: 2,
      titleEn: "Sit Amet Consectetur",
      titleZh: "虚拟示例标题二",
      categoryEn: "Dolor",
      categoryZh: "示例三",
      image:
        "https://images.unsplash.com/photo-1661347215653-9c8ca91685c9?q=80&w=930&auto=format&fit=crop",
      href: "/portfolio/techflow",
    },
    {
      id: 3,
      titleEn: "Adipiscing Elit Sed",
      titleZh: "虚拟示例标题三",
      categoryEn: "Ipsum",
      categoryZh: "示例二",
      image:
        "https://plus.unsplash.com/premium_photo-1679511319174-d35c3ffe0dd0?q=80&w=774&auto=format&fit=crop",
      href: "/portfolio/greenlife",
    },
    {
      id: 4,
      titleEn: "Tempor Incididunt Ut",
      titleZh: "虚拟示例标题四",
      categoryEn: "Sit Amet",
      categoryZh: "示例四",
      image:
        "https://plus.unsplash.com/premium_photo-1764591621174-422ec90e7ee5?q=80&w=1548&auto=format&fit=crop",
      href: "/portfolio/artisan-coffee",
    },
    {
      id: 5,
      titleEn: "Labore Et Dolore Magna",
      titleZh: "虚拟示例标题五",
      categoryEn: "Consectetur",
      categoryZh: "示例五",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      href: "/portfolio/wellness-app",
    },
    {
      id: 6,
      titleEn: "Ut Enim Ad Minim",
      titleZh: "虚拟示例标题六",
      categoryEn: "Sit Amet",
      categoryZh: "示例四",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      href: "/portfolio/summit-marketing",
    },
  ]

  const defaultCategory = language === "en" ? "Lorem" : "示例一"
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  useEffect(() => {
    setActiveCategory(defaultCategory)
  }, [language, defaultCategory])

  const filteredProjects =
    activeCategory === defaultCategory
      ? projects
      : projects.filter((project) =>
          language === "en"
            ? project.categoryEn === activeCategory
            : project.categoryZh === activeCategory
        )

  return (
    <section className="py-20 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <p
              className={`${raleway.className} text-sm uppercase tracking-[0.22em] text-white/60 mb-4`}
            >
              {language === "en" ? "Lorem Ipsum" : "示例文字"}
            </p>
            <h2
              className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold`}
            >
              {language === "en"
                ? "Lorem Ipsum Dolor Sit"
                : "虚拟展示标题文字"}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const category =
              language === "en" ? project.categoryEn : project.categoryZh
            const title =
              language === "en" ? project.titleEn : project.titleZh

            return (
              <ScrollReveal key={project.id} delay={index * 0.05}>
                <Link
                  href={project.href}
                  className="group block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                            {category}
                          </p>
                          <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                            {title}
                          </h3>
                        </div>

                        <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              {language === "en" ? "Lorem Ipsum" : "示例按钮"}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
