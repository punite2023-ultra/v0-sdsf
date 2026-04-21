import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { HeroSectionSimple } from "@/components/home/hero-section-simple"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSectionSimple />
      </main>
      <SiteFooter />
    </>
  )
}
