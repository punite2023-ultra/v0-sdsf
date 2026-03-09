"use client"

import { useState } from "react"
import {
  ArrowUpRight,
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
    iconBg: "bg-sky-500/12 text-sky-600",
    hoverBg: "hover:bg-sky-50",
    activeBg: "bg-sky-50",
    bullet: "bg-sky-600",
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
    iconBg: "bg-fuchsia-500/12 text-fuchsia-600",
    hoverBg: "hover:bg-fuchsia-50",
    activeBg: "bg-fuchsia-50",
    bullet: "bg-fuchsia-600",
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
    iconBg: "bg-emerald-500/12 text-emerald-600",
    hoverBg: "hover:bg-emerald-50",
    activeBg: "bg-emerald-50",
    bullet: "bg-emerald-600",
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
    iconBg: "bg-orange-500/12 text-orange-600",
    hoverBg: "hover:bg-orange-50",
    activeBg: "bg-orange-50",
    bullet: "bg-orange-600",
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
    iconBg: "bg-blue-500/12 text-blue-600",
    hoverBg: "hover:bg-blue-50",
    activeBg: "bg-blue-50",
    bullet: "bg-blue-600",
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
    iconBg: "bg-amber-500/12 text-amber-600",
    hoverBg: "hover:bg-amber-50",
    activeBg: "bg-amber-50",
    bullet: "bg-amber-600",
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

        <h3 className="mb-4 flex items-start justify-between gap-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
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

export function ServicesPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
