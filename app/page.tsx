import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { ClientsMarquee } from "@/components/home/clients-marquee";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
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
