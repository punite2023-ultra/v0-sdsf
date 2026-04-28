import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ClientsMarquee } from "@/components/home/clients-marquee"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { NewsEventsSection } from "@/components/home/featured-project-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <ClientsMarquee />
        <AboutPreview />
        <ServicesPreview />
        <NewsEventsSection />
        <StatsSection />
        <TestimonialsSection />
      </main>

      <SiteFooter />
    </>
  )
}
