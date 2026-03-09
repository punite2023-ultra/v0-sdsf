"use client"

import { useEffect, useRef, useState } from "react"
import {
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "800"],
})

const services = [
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    description:
      "Build a compelling brand identity that resonates with your target audience and sets you apart from competitors.",
    details: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Messaging",
    ],
    color: "from-sky-500 to-cyan-500",
    iconBg: "bg-sky-500/12 text-sky-600",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom-built, high-performance websites and applications tailored to your business needs.",
    details: [
      "Frontend Development",
      "Backend Systems",
      "E-commerce Solutions",
      "API Integration",
    ],
    color: "from-fuchsia-500 to-pink-500",
    iconBg: "bg-fuchsia-500/12 text-fuchsia-600",
  },
  {
    icon: Smartphone,
    title: "UX/UI Design",
    description:
      "User-centered design that creates intuitive, beautiful interfaces that drive engagement.",
    details: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    color: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-500/12 text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns that connect with your audience and drive measurable results.",
    details: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media",
      "PPC Campaigns",
    ],
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/12 text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Strategy",
    description:
      "Data-driven insights and strategic recommendations to optimize your digital presence.",
    details: [
      "Performance Analytics",
      "User Behavior Analysis",
      "Conversion Optimization",
      "Reporting",
    ],
    color: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-500/12 text-blue-600",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Streamline your marketing processes with automation tools that increase efficiency and ROI.",
    details: [
      "Email Marketing",
      "Lead Nurturing",
      "Workflow Automation",
      "CRM Integration",
    ],
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/12 text-amber-600",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const [showDetails, setShowDetails] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowDetails(true)
    }, 2000)
  }

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setShowDetails(false)
  }

  const Icon = service.icon

  return (
    <ScrollReveal delay={index * 100}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full overflow-hidden rounded-[28px] border border-border bg-card p-8 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(156,0,58,0.08),0_20px_60px_rgba(156,0,58,0.12)]"
      >
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105`}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mb-4 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
          {service.title}
        </h3>

        <p className="text-[17px] leading-[1.65] text-muted-foreground">
          {service.description}
        </p>

        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            showDetails ? "mt-8 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3">
            {service.details.map((detail, i) => (
              <li
                key={detail}
                className={`flex items-start gap-4 text-[15px] text-foreground transition-all duration-500 ${
                  showDetails
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: showDetails ? `${i * 90}ms` : "0ms",
                }}
              >
                <span className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#7a168f] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(122,22,143,0.55)]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.color} transition-opacity duration-500 ${
            showDetails ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </ScrollReveal>
  )
}

export function ServicesPreview() {
  return (
    <section className="pt-8 pb-24 lg:pt-12 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-16">
          <ScrollReveal>
            <span
              className={`${raleway.className} text-primary text-sm font-medium uppercase tracking-[0.18em]`}
            >
              Our Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className={`${raleway.className} mt-4 mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl`}
            >
              Services We Offer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We provide comprehensive digital solutions tailored to your unique
              needs. Our expert team delivers results that exceed expectations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
