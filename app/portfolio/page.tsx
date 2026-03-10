import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Portfolio | Aurelia Creative Agency",
  description: "Explore our collection of successful projects and case studies that showcase our expertise and creativity.",
}

const projects = [
  {
    id: 1,
    title: "GARNIER: The Unfiltered Glow Campaign",
    category: "Content Creation & Branding",
    description: "Developed an authenticity-driven content and branding campaign for Garnier’s Vitamin C Serum.",
    image: "https://images.unsplash.com/photo-1582020738577-2e7a48043902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxvdGlvbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Design", "Development"],
    year: "2024",
    results: ["150% Engagement Increase", "40% Positive Brand Sentiment", "25% Online Sales Growth"],
  },
  {
    id: 2,
    title: "Colgate Optic White Advanced Toothpaste",
    category: "E-Commerce Strategy & Management",
    description: "Executed a full e-commerce optimization strategy for Colgate, enhancing product discoverability, improving listing performance, and managing promotional campaigns",
    image: "https://images.unsplash.com/photo-1661347215653-9c8ca91685c9?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop",
    tags: ["Management", "Development", "Strategy"],
    year: "2024",
    results: ["10K+ active users", "$2M ARR", "5-star rating"],
  },
  {
    id: 3,
    title: "Dove Real Beauty Skincare Line",
    category: "Social Media Marketing",
    description: "Strengthen Unilever’s social media presence and increase audience engagement by creating an authentic, purpose-driven content strategy",
    image: "https://plus.unsplash.com/premium_photo-1679511319174-d35c3ffe0dd0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=800&h=600&fit=crop",
    tags: ["Branding", "Social Media", "Marketing"],
    year: "2023",
    results: ["100+ brand touchpoints", "Consistent visual language", "Market recognition"],
  },
  {
    id: 4,
    title: "Palmolive Naturals Body Wash",
    category: "Influencer & Affiliate Marketing",
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

const categories = ["All", "Web Design & Development", "Full-Stack Development", "Branding", "App Development", "Digital Marketing"]

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Featured Projects
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

        {/* Projects Grid */}
        <section className="py-20 lg:py-28">
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
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Impressed by Our Work?
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-lg text-muted-foreground mb-8">
                  Let us help you create something amazing. Get in touch with our team to discuss your project.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/services">Explore Services</Link>
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
