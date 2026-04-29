import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ClientsMarquee } from "@/components/home/clients-marquee"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { FeaturedProjectSection } from "@/components/home/featured-project-section"
import { StatsSection } from "@/components/home/stats-section"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* HOME */}
        <section id="home">
          <HeroSection />
        </section>

        {/* (Optional — no nav link now) */}
        <ClientsMarquee />

        {/* ABOUT US */}
        <section id="about">
          <AboutPreview />
        </section>

        {/* BRAND PARTNERS → points to ServicesPreview */}
        <section id="brand-partners">
          <ServicesPreview />
        </section>

        {/* SERVICES → points to StatsSection */}
        <section id="services">
          <StatsSection />
        </section>

        {/* NEWS & EVENTS */}
        <section id="news-events">
          <FeaturedProjectSection />
        </section>
      </main>

      {/* CONTACT */}
      <section id="contact">
        <SiteFooter />
      </section>
    </>
  )
}
