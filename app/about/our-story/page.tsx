"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.34)_0%,rgba(168,85,247,0.22)_35%,rgba(10,1,24,0)_72%)] blur-2xl ${className}`}
    />
  )
}

function Section({
  label,
  title,
  children,
}: {
  label?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl">
      {label && (
        <p className="text-xs font-semibold tracking-[0.22em] text-pink-300">
          {label}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-sm leading-7 text-white/70 md:text-base">
        {children}
      </div>
    </div>
  )
}

export default function OurStoryPage() {
  const { language } = useLanguage()

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#0a0118] text-white overflow-hidden">
        {/* GRID BG */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* HERO */}
        <section className="relative pt-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-b-[30px] border-b border-white/15 bg-[radial-gradient(circle_at_top,rgba(180,124,253,0.22),rgba(10,1,24,0.96)_40%,rgba(10,1,24,1)_70%)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <GradientOrb className="left-1/2 top-10 h-48 w-48 -translate-x-1/2" />

              <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto">
                  <h1 className="text-4xl font-bold md:text-5xl">
                    Our Story
                  </h1>
                  <p className="mt-4 text-white/70 text-base md:text-lg">
                    From Vision to Velocity
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 space-y-20">

            {/* INTRO */}
            <ScrollReveal>
              <Section title="From Vision to Velocity">
                <p>
                  Star Digital Solutions didn’t start as just another agency.
                </p>
                <p>
                  It started with a clear observation: brands were growing fast — but not always in the right direction.
                </p>
                <p>
                  In a digital landscape filled with noise, trends, and constant change, many businesses were chasing visibility… but missing sustainability.
                </p>
                <p>
                  We saw an opportunity to change that.
                </p>
              </Section>
            </ScrollReveal>

            {/* BEGINNING */}
            <ScrollReveal>
              <Section label="THE BEGINNING" title="Clarity Over Noise">
                <p>
                  We began with a simple mission: help brands grow with clarity, strategy, and purpose.
                </p>
                <p>
                  Not just more traffic. Not just more content. But real, measurable growth.
                </p>
                <p>
                  By combining deep platform expertise — especially within TikTok Shop and e-commerce ecosystems — with creative execution, we started helping brands unlock new levels of performance.
                </p>
                <p>
                  And the results spoke quickly.
                </p>
              </Section>
            </ScrollReveal>

            {/* BREAKTHROUGH */}
            <ScrollReveal>
              <Section label="THE BREAKTHROUGH" title="From Services to Systems">
                <p>
                  As we partnered with more brands, something became clear:
                </p>
                <p className="text-white font-semibold">
                  Growth isn’t about isolated campaigns — it's about building a connected system.
                </p>

                <ul className="space-y-2 pl-4">
                  <li>→ From executing projects to building end-to-end growth engines</li>
                  <li>→ From managing creators to scaling full MCN ecosystems</li>
                  <li>→ From delivering services to becoming a true growth partner</li>
                </ul>

                <p>
                  This shift allowed us to not only keep up with the market — but help define it.
                </p>
              </Section>
            </ScrollReveal>

            {/* RECOGNITION */}
            <ScrollReveal>
              <Section label="RECOGNITION & MOMENTUM" title="Proof Through Performance">
                <p>
                  Our work didn’t go unnoticed.
                </p>
                <p>
                  We became a recognized TikTok Shop Content Partner in the Philippines, consistently earning top rankings across multiple categories — from Live MCN to Short Video and Creator Champion.
                </p>

                <div className="space-y-1 text-white font-medium">
                  <p>• Rising Agency Partner</p>
                  <p>• MCN Agency of the Year</p>
                  <p>• Visionary Impact Award</p>
                  <p>• Industry Partner Award</p>
                </div>

                <p className="text-pink-300 font-semibold">
                  → When strategy meets execution, growth becomes inevitable.
                </p>
              </Section>
            </ScrollReveal>

            {/* TODAY */}
            <ScrollReveal>
              <Section label="WHERE WE ARE TODAY" title="Content. Commerce. Community.">
                <p>
                  Today, Star Digital Solutions stands as a leading digital growth partner for brands navigating e-commerce and social commerce.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  {["Content", "Commerce", "Community"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.03] py-6 text-lg font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Helping brands not just compete — but win in the platforms that matter most.
                </p>
              </Section>
            </ScrollReveal>

            {/* FUTURE */}
            <ScrollReveal>
              <Section label="WHAT DRIVES US" title="Built for What’s Next">
                <ul className="space-y-2 pl-4">
                  <li>→ Anticipate shifts</li>
                  <li>→ Build scalable systems</li>
                  <li>→ Create long-term brand value</li>
                </ul>

                <p>
                  Because the future of digital isn’t just about being seen — it’s about being chosen, trusted, and remembered.
                </p>
              </Section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold md:text-5xl">
                  This Is Just the Beginning
                </h2>
                <p className="mt-4 text-white/70">
                  Our story isn’t finished. In fact, we’re just getting started.
                </p>
                <p className="mt-2 text-white/70">
                  As platforms evolve and opportunities expand, one thing remains constant:
                </p>

                <p className="mt-4 font-semibold text-pink-300">
                  Our commitment to building brands that grow — and stay ahead.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
