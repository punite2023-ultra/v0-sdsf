import Link from "next/link"
import { ArrowUpRight, Palette, Code, TrendingUp, Megaphone, Search, Smartphone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Build a powerful brand identity that resonates with your audience and stands out in the market.",
    href: "/services/branding",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technology for optimal performance.",
    href: "/services/development",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "User-centered design solutions that create seamless and engaging digital experiences.",
    href: "/services/design",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that drive traffic, engagement, and conversions.",
    href: "/services/marketing",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search rankings and organic visibility with proven SEO techniques.",
    href: "/services/seo",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Strategic social media management to grow your audience and build community.",
    href: "/services/social-media",
    color: "bg-pink-500/10 text-pink-600",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Services We Offer
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive digital solutions tailored to your unique needs. Our expert team delivers results that exceed expectations.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group block p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover-lift h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
