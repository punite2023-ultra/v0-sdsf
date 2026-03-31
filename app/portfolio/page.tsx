'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Category One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1582020738577-2e7a48043902?w=900&auto=format&fit=crop&q=60",
    tags: ["Lorem", "Ipsum", "Dolor"],
    year: "2024",
    results: ["Lorem ipsum", "Dolor sit amet", "Consectetur"],
  },
  {
    id: 2,
    title: "Project Two",
    category: "Category Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1661347215653-9c8ca91685c9?q=80&w=930&auto=format&fit=crop",
    tags: ["Lorem", "Ipsum", "Dolor"],
    year: "2024",
    results: ["Lorem ipsum", "Dolor sit amet", "Consectetur"],
  },
  {
    id: 3,
    title: "Project Three",
    category: "Category Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://plus.unsplash.com/premium_photo-1679511319174-d35c3ffe0dd0?q=80&w=774&auto=format&fit=crop",
    tags: ["Lorem", "Ipsum", "Dolor"],
    year: "2023",
    results: ["Lorem ipsum", "Dolor sit amet", "Consectetur"],
  },
  {
    id: 4,
    title: "Project Four",
    category: "Category Four",
    description: "Increase product awareness and online sales by leveraging influencer partnerships and affiliate-driven content.",
    image: "https://plus.unsplash.com/premium_photo-1764591621174-422ec90e7ee5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    tags: ["Indfluencer", "Development", "Affiliate"],
    year: "2023",
    results: ["100K+ downloads", "4.8-star rating", "Top 10 category"],
  },
  {
    id: 5,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    description: "Executed an integrated marketing campaign across multiple channels generating 500K impressions and 50K conversions.",
    image: "https://plus.unsplash.com/premium_photo-1684529265739-b03f9ceb5a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    tags: ["Marketing", "Campaign", "Analytics"],
    year: "2023",
    results: ["500K impressions", "50K conversions", "8% CTR"],
  },
  {
    id: 6,
    title: "Analytics & Optimization",
    category: "Data & Strategy",
    description: "Implemented comprehensive analytics and A/B testing framework that optimized user experience and increased revenue.",
    image: "https://plus.unsplash.com/premium_photo-1685223895585-5d620fb5ba7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    tags: ["Analytics", "Strategy", "Optimization"],
    year: "2023",
    results: ["35% revenue increase", "2x engagement", "Custom dashboards"],
  },
]

export default function PortfolioPage() {
  const { language } = useLanguage()

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span
                  className="text-primary font-medium text-sm uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {language === 'en' ? 'Our Work' : '我们的作品'}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 uppercase"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {language === 'en' ? 'Featured Projects' : '精选项目'}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {language === 'en'
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pt-6 pb-20 lg:pt-8 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <div className="group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-primary-foreground font-semibold">View Case Study</div>
                          <ArrowRight className="w-5 h-5 text-primary-foreground mt-2 mx-auto" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-2">
                        {project.category}
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-3">Key Results:</p>
                        <ul className="space-y-1">
                          {project.results.map((result) => (
                            <li key={result} className="text-xs text-foreground flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6f0b95] via-[#8a08a6] to-[#6f0b95] px-8 py-16 md:px-14 md:py-20">
              <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10" />

              <div className="relative max-w-4xl mx-auto text-center">
                <ScrollReveal>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-6 text-white"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    READY TO START YOUR PROJECT?
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    Let&apos;s collaborate to create something extraordinary. Get in touch and let&apos;s discuss your vision.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 bg-[#7b029e] text-white hover:bg-[#682e94] transition-colors duration-300"
                    >
                      <Link href="/contact">Start a Project</Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 text-white transition-colors duration-300 hover:bg-[#682e94]"
                      style={{ backgroundColor: "#c0485e" }}
                    >
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
