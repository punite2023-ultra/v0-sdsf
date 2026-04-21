import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSectionSimple } from "@/components/home/hero-section-simple"
import { BrandShowcaseSlider } from "@/components/home/brand-showcase-slider"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { StatsSection } from "@/components/home/stats-section"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { TrustedPartnerSection } from "@/components/home/trusted-partner-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { FeaturedProjectSection } from "@/components/home/featured-project-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlogPreview } from "@/components/home/blog-preview"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSectionSimple />
        <BrandShowcaseSlider />
        <AboutPreview />
        <ServicesPreview />
        <StatsSection />
        <PortfolioPreview />
        <HowItWorksSection />
        <TrustedPartnerSection />
        <FeaturedProjectSection />
        <TestimonialsSection />
        <BlogPreview />
      </main>
      <SiteFooter />
    </>
  )
}
