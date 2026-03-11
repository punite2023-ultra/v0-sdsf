"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Smartphone,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "800"],
})

export const metadata = {
  title: "Services | Star Digital Solutions",
  description:
    "Explore the digital services offered by Star Digital Solutions, from social media marketing and branding to e-commerce, live selling, and performance marketing.",
}

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description:
      "Elevate brand awareness and engagement across major social media platforms through strategic campaigns and data-driven content.",
    details: [
      "Social Media Strategy",
      "Community Management",
      "Content Scheduling",
      "Performance Analytics",
    ],
    iconBg: "bg-blue-500/12 text-blue-600",
    hoverBg: "hover:bg-blue-50",
    activeBg: "bg-blue-50",
    bullet: "bg-blue-600",
  },
  {
    icon: Palette,
    title: "Content Creation & Branding",
    description:
      "Develop compelling visual and written content that resonates with target audiences while building a strong brand identity.",
    details: [
      "Creative Content Production",
      "Brand Identity Design",
      "Visual Storytelling",
      "Campaign Creative Direction",
    ],
    iconBg: "bg-purple-500/12 text-purple-600",
    hoverBg: "hover:bg-purple-50",
    activeBg: "bg-purple-50",
    bullet: "bg-purple-600",
  },
  {
    icon: Smartphone,
    title: "E-Commerce Strategy & Management",
    description:
      "Streamline online store operations and optimize digital commerce strategies to increase efficiency and drive sales growth.",
    details: [
      "Marketplace Management",
      "Store Optimization",
      "Product Listing Strategy",
      "Conversion Optimization",
    ],
    iconBg: "bg-emerald-500/12 text-emerald-600",
    hoverBg: "hover:bg-emerald-50",
    activeBg: "bg-emerald-50",
    bullet: "bg-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Influencer & Affiliate Marketing",
    description:
      "Collaborate with trusted influencers and affiliates to expand brand reach, drive awareness, and boost conversions.",
    details: [
      "Influencer Partnerships",
      "Affiliate Program Management",
      "Campaign Coordination",
      "Performance Tracking",
    ],
    iconBg: "bg-orange-500/12 text-orange-600",
    hoverBg: "hover:bg-orange-50",
    activeBg: "bg-orange-50",
    bullet: "bg-orange-600",
  },
  {
    icon: Zap,
    title: "Live Streaming & Social Commerce",
    description:
      "Boost engagement and sales through interactive live streaming experiences across major social commerce platforms.",
    details: [
      "Live Commerce Strategy",
      "Host & Production Management",
      "Real-Time Audience Engagement",
      "Sales Performance Tracking",
    ],
    iconBg: "bg-pink-500/12 text-pink-600",
    hoverBg: "hover:bg-pink-50",
    activeBg: "bg-pink-50",
    bullet: "bg-pink-600",
  },
  {
    icon: BarChart3,
    title: "Digital Advertising & Performance Marketing",
    description:
      "Drive targeted traffic and maximize ROI through optimized advertising campaigns across search and social platforms.",
    details: [
      "Meta & TikTok Ads",
      "Google Ads Management",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    iconBg: "bg-indigo-500/12 text-indigo-600",
    hoverBg: "hover:bg-indigo-50",
    activeBg: "bg-indigo-50",
    bullet: "bg-indigo-600",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business goals, audience, current challenges, and opportunities for digital growth.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "We develop a tailored approach that aligns the right channels, content, campaigns, and execution plan for your brand.",
  },
  {
    step: "03",
    title: "Execution & Optimization",
    description:
      "Our team launches, manages, and refines your digital initiatives to improve performance and maximize results.",
  },
  {
    step: "04",
    title: "Monitoring & Growth",
    description:
      "We track results, analyze performance, and continuously improve the strategy to support long-term business growth.",
  },
]

function ServiceCard({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const Icon = service.icon

  return (
    <ScrollReveal delay={index * 100}>
      <button
        type="button"
        onClick={onToggle}
        className={`group block h-full w-full rounded-[28px] border border-border p-8 text-left transition-all duration-500 ${
          isOpen ? service.activeBg : "bg-card"
        } ${service.hoverBg} hover:-translate-y-1 hover:border-border/80`}
      >
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105`}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3
          className={`${raleway.className} mb-4 flex items-start justify-between gap-3 text-[28px] font-[800] leading-[1.12] tracking-[-0.02em] text-foreground`}
        >
          <span>{service.title}</span>
          <ArrowUpRight
            className={`mt-1 h-5 w-5 shrink-0 transition-all duration-300 ${
              isOpen
                ? "translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            }`}
          />
        </h3>

        <p className="text-[17px] leading-[1.65] text-muted-foreground">
          {service.description}
        </p>

        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "mt-8 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3">
            {service.details.map((detail, i) => (
              <li
                key={detail}
                className={`flex items-start gap-4 text-[15px] text-foreground transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${i * 70}ms` : "0ms",
                }}
              >
                <span
                  className={`mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full ${service.bullet}`}
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </ScrollReveal>
  )
}

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <ScrollReveal>
                <span
                  className={`${raleway.className} text-primary text-sm font-medium uppercase tracking-[0.18em]`}
                >
                  Our Services
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className={`${raleway.className} mt-4 mb-6 text-4xl font-[800] leading-tight md:text-5xl lg:text-6xl`}
                >
                  Digital Solutions Built to Help Your Brand Grow
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  From social media and content creation to e-commerce,
                  influencer campaigns, and performance marketing, we deliver
                  strategic services designed to strengthen your digital
                  presence and drive measurable results.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
              <ScrollReveal>
                <span
                  className={`${raleway.className} text-primary text-sm font-medium uppercase tracking-[0.18em]`}
                >
                  Our Process
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className={`${raleway.className} mt-4 text-3xl font-[800] leading-tight md:text-4xl lg:text-5xl`}
                >
                  How We Work
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  We combine strategy, execution, and continuous optimization to
                  create digital solutions that are practical, creative, and
                  results-focused.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 120}>
                  <div className="h-full rounded-[28px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1">
                    <div
                      className={`${raleway.className} mb-5 text-5xl font-[800] leading-none text-primary/20`}
                    >
                      {item.step}
                    </div>
                    <h3
                      className={`${raleway.className} mb-3 text-2xl font-[800] leading-tight text-foreground`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[16px] leading-[1.7] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#5d43f3_0%,#6d52ff_45%,#7757ff_100%)] px-8 py-14 text-center shadow-[0_30px_80px_rgba(70,48,180,0.22)] md:px-12 lg:px-16 lg:py-16">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />

                  <div className="relative z-10">
                    <h2
                      className={`${raleway.className} mb-6 text-3xl font-[800] uppercase leading-tight text-white md:text-4xl lg:text-5xl`}
                    >
                      Ready to Grow with Star Digital Solutions?
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
                      Let’s build a digital strategy that strengthens your brand,
                      reaches the right audience, and turns engagement into real
                      business results.
                    </p>

                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-white px-8 text-primary hover:bg-white/90"
                    >
                      <Link href="/contact" className="group flex items-center gap-2">
                        Get In Touch
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
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
