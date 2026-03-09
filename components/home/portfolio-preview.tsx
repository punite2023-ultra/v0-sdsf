"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const categories = ["All", "Branding", "Web Design", "Development", "Marketing"]

const projects = [
  {
    id: 1,
    title: "Luxe Fashion Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    href: "/portfolio/luxe-fashion",
  },
  {
    id: 2,
    title: "TechFlow Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/portfolio/techflow",
  },
  {
    id: 3,
    title: "GreenLife E-commerce",
    category: "Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    href: "/portfolio/greenlife",
  },
  {
    id: 4,
    title: "Artisan Coffee Co",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    href: "/portfolio/artisan-coffee",
  },
  {
    id: 5,
    title: "Wellness App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    href: "/portfolio/wellness-app",
  },
  {
    id: 6,
    title: "Summit Marketing",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    href: "/portfolio/summit-marketing",
  },
]

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Portfolio</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: '900' }}>
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
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link
                href={project.href}
                className="group block relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary-foreground/70 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold text-background flex items-center gap-2 mt-1">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5" />
                    </h3>
                  </div>
                </div>
                
                {/* Default Info */}
                <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-muted-foreground text-sm">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
