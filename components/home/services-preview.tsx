import Link from "next/link"
import { ArrowUpRight, Palette, Code, TrendingUp, Megaphone, Search, Smartphone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "800"],
})

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description:
      "Build a powerful brand identity that resonates with your audience and stands out in the market.",
    href: "/services/branding",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technology for optimal performance.",
    href: "/services/development",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create seamless and engaging digital experiences.",
    href: "/services/design",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that drive traffic, engagement, and conversions.",
    href: "/services/marketing",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and organic visibility with proven SEO techniques.",
    href: "/services/seo",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Strategic social media management to grow your audience and build community.",
    href: "/services/social-media",
    color: "bg-pink-500/10 text-pink-600",
  },
]

export function ServicesPreview() {
  return (
    <section className="pt-8 pb-24 lg:pt-12 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
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

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group block h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover-lift hover:border-primary/20 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  {service.title}
                  <ArrowUpRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 hover:gap-4"
            >
              View All Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
