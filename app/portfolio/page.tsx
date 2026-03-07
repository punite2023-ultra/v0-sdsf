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
    title: "E-Commerce Platform Redesign",
    category: "Web Design & Development",
    description: "Complete redesign and development of an e-commerce platform resulting in 45% increase in conversions.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Design", "Development"],
    year: "2024",
    results: ["45% conversion increase", "3x faster load times", "150% ROI"],
  },
  {
    id: 2,
    title: "SaaS Product Launch",
    category: "Full-Stack Development",
    description: "Built and launched a comprehensive SaaS platform serving 10,000+ users with real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db6d?w=800&h=600&fit=crop",
    tags: ["SaaS", "Development", "Strategy"],
    year: "2024",
    results: ["10K+ active users", "$2M ARR", "5-star rating"],
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    description: "Developed a complete brand identity and design system for a Fortune 500 company expanding into new markets.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Branding", "Design System", "Strategy"],
    year: "2023",
    results: ["100+ brand touchpoints", "Consistent visual language", "Market recognition"],
  },
  {
    id: 4,
    title: "Mobile App Development",
    category: "App Development",
    description: "Created a feature-rich mobile application for iOS and Android with 100,000+ downloads in the first month.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    tags: ["Mobile", "Development", "Design"],
    year: "2023",
    results: ["100K+ downloads", "4.8-star rating", "Top 10 category"],
  },
  {
    id: 5,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    description: "Executed an integrated marketing campaign across multiple channels generating 500K impressions and 50K conversions.",
    image: "https://images.unsplash.com/photo-1533750849684-c302d85b37da?w=800&h=600&fit=crop",
    tags: ["Marketing", "Campaign", "Analytics"],
    year: "2023",
    results: ["500K impressions", "50K conversions", "8% CTR"],
  },
  {
    id: 6,
    title: "Analytics & Optimization",
    category: "Data & Strategy",
    description: "Implemented comprehensive analytics and A/B testing framework that optimized user experience and increased revenue.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
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
