import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Portfolio | Aurelia Creative Agency",
  description: "Explore our collection of successful projects that showcase our expertise and creativity.",
}

const projects = [
  {
    id: 1,
    title: "GARNIER: The Unfiltered Glow Campaign",
    category: "Content Creation & Branding",
    description: "Developed an authenticity-driven content and branding campaign for Garnier’s Vitamin C Serum.",
    image: "https://images.unsplash.com/photo-1582020738577-2e7a48043902?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Design", "Development"],
    year: "2024",
    results: ["150% Engagement Increase", "40% Positive Brand Sentiment", "25% Online Sales Growth"],
  },
  {
    id: 2,
    title: "Colgate Optic White Advanced Toothpaste",
    category: "E-Commerce Strategy & Management",
    description: "Executed a full e-commerce optimization strategy for Colgate.",
    image: "https://images.unsplash.com/photo-1661347215653-9c8ca91685c9?w=800&h=600&fit=crop",
    tags: ["Management", "Development", "Strategy"],
    year: "2024",
    results: ["10K+ active users", "$2M ARR", "5-star rating"],
  },
  {
    id: 3,
    title: "Dove Real Beauty Skincare Line",
    category: "Social Media Marketing",
    description: "Strengthened Unilever’s social media presence with authentic content strategy.",
    image: "https://plus.unsplash.com/premium_photo-1679511319174-d35c3ffe0dd0?w=800&h=600&fit=crop",
    tags: ["Branding", "Social Media", "Marketing"],
    year: "2023",
    results: ["100+ brand touchpoints", "Consistent visual language", "Market recognition"],
  },
  {
    id: 4,
    title: "Palmolive Naturals Body Wash",
    category: "Influencer & Affiliate Marketing",
    description: "Leveraged influencer partnerships to boost awareness and sales.",
    image: "https://plus.unsplash.com/premium_photo-1764591621174-422ec90e7ee5?w=800&h=600&fit=crop",
    tags: ["Influencer", "Affiliate", "Campaign"],
    year: "2023",
    results: ["100K+ downloads", "4.8-star rating", "Top 10 category"],
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Navigation />

      <main>

        {/* HERO */}
        <section className="pt-32 pb-10 lg:pt-40 lg:pb-12">
          <div className="container mx-auto px-6 lg:px-8">

            <div className="max-w-4xl mx-auto text-center">

              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Work
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 uppercase">
                  FEATURED PROJECTS
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our collection of successful projects that showcase our expertise, creativity, and commitment to excellence.
                </p>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* PROJECT GRID */}
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
                          <div className="text-primary-foreground font-semibold">
                            View Case Study
                          </div>
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


        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">

            <div className="max-w-2xl mx-auto text-center">

              <ScrollReveal>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-6"
                  style={{ color: "#682e94" }}
                >
                  READY TO START YOUR PROJECT?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/contact">
                      Start a Project
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 text-white"
                    style={{ backgroundColor: "#c0485e" }}
                  >
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>

                </div>

              </ScrollReveal>

            </div>

          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
