"use client"

import { useState } from "react"
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

const categories = ["All", "Branding", "Web Design", "Development", "Marketing"]

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Project",
    category: "Content Creation & Branding",
    image:
      "https://images.unsplash.com/photo-1582020738577-2e7a48043902?w=900&auto=format&fit=crop&q=60",
    href: "/portfolio/luxe-fashion",
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Project",
    category: "E-Commerce Strategy & Management",
    image:
      "https://images.unsplash.com/photo-1661347215653-9c8ca91685c9?q=80&w=930&auto=format&fit=crop",
    href: "/portfolio/techflow",
  },
  {
    id: 3,
    title: "Sed Do Eiusmod Project",
    category: "Social Media Marketing",
    image:
      "https://plus.unsplash.com/premium_photo-1679511319174-d35c3ffe0dd0?q=80&w=774&auto=format&fit=crop",
    href: "/portfolio/greenlife",
  },
  {
    id: 4,
    title: "Tempor Incididunt Project",
    category: "Influencer & Affiliate Marketing",
    image:
      "https://plus.unsplash.com/premium_photo-1764591621174-422ec90e7ee5?q=80&w=1548&auto=format&fit=crop",
    href: "/portfolio/artisan-coffee",
  },
  {
    id: 5,
    title: "Wellness App",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    href: "/portfolio/wellness-app",
  },
  {
    id: 6,
    title: "Summit Marketing",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    href: "/portfolio/summit-marketing",
  },
]

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className={`text-white/70 text-sm font-medium uppercase tracking-wider ${raleway.className}`}>
                Our Portfolio
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className={`mt-4 text-3xl font-bold md:text-4xl lg:text-5xl text-white ${raleway.className}`}>
                Featured Projects
              </h2>
            </ScrollReveal>
          </div>

          {/* Filter Tabs */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link href={project.href} className="group block">
                <article className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Hover Content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <div className="translate-y-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
                        
                        <span className="text-sm text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          {project.category}
                        </span>

                        <div className="mt-2 flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-white opacity-0 transition-all duration-500 delay-75 group-hover:opacity-100">
                            {project.title}
                          </h3>

                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 transition-all duration-500 delay-100 group-hover:opacity-100">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Default Info */}
                  <div className="px-1 pt-4">
                    <span className="text-sm text-white/60">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-medium text-white transition-all duration-300 hover:gap-4"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
