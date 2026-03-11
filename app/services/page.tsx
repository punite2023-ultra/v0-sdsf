import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ArrowRight, Zap, Palette, Code, Megaphone, Smartphone, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services | Aurelia Creative Agency",
  description: "Explore our comprehensive digital services including design, development, strategy, and marketing solutions.",
}

const services = [
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    description: "Build a compelling brand identity that resonates with your target audience and sets you apart from competitors.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Messaging"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom-built, high-performance websites and applications tailored to your business needs.",
    features: ["Frontend Development", "Backend Systems", "E-commerce Solutions", "API Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "UX/UI Design",
    description: "User-centered design that creates intuitive, beautiful interfaces that drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that connect with your audience and drive measurable results.",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "PPC Campaigns"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Strategy",
    description: "Data-driven insights and strategic recommendations to optimize your digital presence.",
    features: ["Performance Analytics", "User Behavior Analysis", "Conversion Optimization", "Reporting"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Streamline your marketing processes with automation tools that increase efficiency and ROI.",
    features: ["Email Marketing", "Lead Nurturing", "Workflow Automation", "CRM Integration"],
    color: "from-yellow-500 to-orange-500",
  },
]

const process = [
  {
    step: "1",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and competitive landscape to develop a tailored strategy.",
  },
  {
    step: "2",
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, prototypes, and visual designs that align with your brand and objectives.",
  },
  {
    step: "3",
    title: "Development & Build",
    description: "We build your solution using the latest technologies, best practices, and rigorous quality assurance.",
  },
  {
    step: "4",
    title: "Launch & Optimize",
    description: "We launch your project and continuously monitor performance to identify optimization opportunities.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Comprehensive Digital Solutions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From strategy and design to development and marketing, we provide end-to-end digital solutions tailored to your business needs.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 100}>
                  <div className="group relative bg-card rounded-2xl border border-border p-8 hover-lift h-full overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  How We Work
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 150}>
                  <div className="relative">
                    <div className="bg-card rounded-2xl border border-border p-8 h-full">
                      <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Connector line */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 p-12 lg:p-16 text-center">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                      Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                      Let us help you achieve your business goals with our comprehensive digital solutions.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get In Touch
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
