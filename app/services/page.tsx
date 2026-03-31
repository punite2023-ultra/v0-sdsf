'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ArrowRight, Zap, Palette, Code, Megaphone, Smartphone, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const servicesData = [
  {
    icon: Palette,
    titleEn: "Service One",
    titleZh: "服务一",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    titleEn: "Service Two",
    titleZh: "服务二",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    titleEn: "Service Three",
    titleZh: "服务三",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    titleEn: "Service Four",
    titleZh: "服务四",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    titleEn: "Service Five",
    titleZh: "服务五",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    titleEn: "Service Six",
    titleZh: "服务六",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing"],
    color: "from-yellow-500 to-orange-500",
  },
]

const processSteps = [
  {
    step: "1",
    titleEn: "Step One",
    titleZh: "步骤一",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    step: "2",
    titleEn: "Step Two",
    titleZh: "步骤二",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    step: "3",
    titleEn: "Step Three",
    titleZh: "步骤三",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    step: "4",
    titleEn: "Step Four",
    titleZh: "步骤四",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export default function ServicesPage() {
  const { language } = useLanguage()
  const services = servicesData

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Our Services' : '我们的服务'}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'en' ? 'Digital Solutions' : '数字解决方案'}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {language === 'en'
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
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
                      
                      <h3 className="text-2xl font-semibold mb-3">
                        {language === 'en' ? service.titleEn : service.titleZh}
                      </h3>
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Our Process' : '我们的流程'}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'en' ? 'How We Work' : '我们如何工作'}
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 150}>
                  <div className="relative">
                    <div className="bg-card rounded-2xl border border-border p-8 h-full">
                      <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <h3 className="text-xl font-semibold mb-3">
                        {language === 'en' ? item.titleEn : item.titleZh}
                      </h3>
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
