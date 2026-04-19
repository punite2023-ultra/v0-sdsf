import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSectionSimple } from "@/components/home/hero-section-simple"
import { ClientsMarquee } from "@/components/home/clients-marquee"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { StatsSection } from "@/components/home/stats-section"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlogPreview } from "@/components/home/blog-preview"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSectionSimple />
        <ClientsMarquee />
        <AboutPreview />
        <ServicesPreview />
        <StatsSection />
        <PortfolioPreview />
        <TestimonialsSection />
        <BlogPreview />
      </main>

      <SiteFooter />
    </>
  )
}
