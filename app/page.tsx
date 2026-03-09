import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlogPreview } from "@/components/home/blog-preview"
import { ClientsMarquee } from "@/components/home/clients-marquee"

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Section with purple text */}
      <div className="text-center mt-8 bg-purple-600 text-white py-4">
        <p className="text-2xl">Welcome to Our Creative Agency!</p>
      </div>

      {/* Other Sections */}
      <ServicesPreview />
      <AboutPreview />
      <PortfolioPreview />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />
      <ClientsMarquee />

      <SiteFooter />
    </>
  );
}
