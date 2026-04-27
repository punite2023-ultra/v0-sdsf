import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
// import { PortfolioPreview } from "@/components/home/portfolio-preview" ← optional remove
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlogPreview } from "@/components/home/blog-preview"
import { ClientsMarquee } from "@/components/home/clients-marquee"
import { NewsEventsSection } from "@/components/home/featured-project-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ClientsMarquee />
        <AboutPreview />
        <ServicesPreview />

        {/* ❌ HIDDEN */}
        {/* <PortfolioPreview /> */}

        <NewsEventsSection />

        {/* ✅ BACK */}
        <StatsSection />

        <TestimonialsSection />
        <BlogPreview />
      </main>
      <SiteFooter />
    </>
  )
}
