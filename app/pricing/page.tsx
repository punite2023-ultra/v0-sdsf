import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Pricing | Aurelia Creative Agency",
  description: "Transparent pricing for our digital services. Choose the perfect plan for your project.",
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$2,499",
    period: "/month",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "1 round of revisions",
      "3-month support",
      "Email support",
    ],
    notIncluded: [
      "Advanced features",
      "Custom integrations",
      "Analytics setup",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$5,999",
    period: "/month",
    features: [
      "Up to 15 pages",
      "Advanced design",
      "Complete SEO suite",
      "Unlimited revisions",
      "6-month support",
      "Phone & email support",
      "Analytics setup",
      "CMS integration",
    ],
    notIncluded: [
      "Custom development",
      "Mobile app",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    description: "For large-scale projects",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited pages",
      "Custom design",
      "Full SEO optimization",
      "Unlimited revisions",
      "12-month support",
      "Dedicated account manager",
      "Advanced analytics",
      "Custom integrations",
      "Mobile app development",
      "Performance optimization",
    ],
    notIncluded: [],
    cta: "Contact Sales",
  },
]

const addOns = [
  { name: "Additional Page", price: "$299" },
  { name: "E-Commerce Integration", price: "$1,499" },
  { name: "Mobile App", price: "Custom" },
  { name: "Content Writing (500 words)", price: "$199" },
  { name: "Photography/Videography", price: "Custom" },
  { name: "Hosting & Maintenance", price: "$299/month" },
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Transparent Pricing</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Simple, Honest Pricing
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Choose a plan that works for your budget and business needs. No hidden fees, no surprises.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 100}>
                  <div className={`relative rounded-2xl border transition-all duration-500 overflow-hidden group hover-lift ${
                    plan.featured
                      ? "border-primary bg-primary/5 shadow-xl md:scale-105"
                      : "border-border bg-card hover:border-primary/30"
                  }`}>
                    {/* Badge for featured */}
                    {plan.featured && (
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}

                    <div className={`p-8 ${plan.featured ? "pt-16" : ""}`}>
                      <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                      <div className="mb-8">
                        <div className="text-4xl font-bold">{plan.price}</div>
                        <div className="text-muted-foreground text-sm">{plan.period}</div>
                      </div>

                      <Button
                        asChild
                        className={`w-full rounded-full mb-8 ${
                          plan.featured
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        <Link href="/contact">{plan.cta}</Link>
                      </Button>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs uppercase font-semibold text-muted-foreground mb-3">Included</p>
                          <ul className="space-y-3">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3 text-sm">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {plan.notIncluded.length > 0 && (
                          <div className="pt-4 border-t border-border">
                            <p className="text-xs uppercase font-semibold text-muted-foreground mb-3">Not Included</p>
                            <ul className="space-y-2">
                              {plan.notIncluded.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <div className="w-5 h-5 rounded-full border border-border flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Add-ons</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Customize Your Package
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <ScrollReveal key={addon.name} delay={index * 50}>
                  <div className="bg-card rounded-xl border border-border p-6 flex items-center justify-between hover-lift">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-primary font-semibold">{addon.price}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    Common Questions
                  </h2>
                </ScrollReveal>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "Can I change plans anytime?",
                    a: "Yes, you can upgrade, downgrade, or cancel your plan at any time with no penalty. Changes take effect at your next billing cycle."
                  },
                  {
                    q: "What if I need more than what's included in my plan?",
                    a: "We offer flexible add-ons and custom packages. Contact us to discuss your specific needs and we'll create a tailored solution."
                  },
                  {
                    q: "Do you offer discounts for annual billing?",
                    a: "Absolutely! We offer 20% discount for annual billing on all plans. Contact our sales team for more information."
                  },
                  {
                    q: "What's included in the support?",
                    a: "All plans include priority support during business hours. Enterprise plans include dedicated account managers and 24/7 support."
                  },
                ].map((faq, index) => (
                  <ScrollReveal key={faq.q} delay={index * 100}>
                    <div className="bg-card rounded-xl border border-border p-6">
                      <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 p-12 lg:p-16 text-center">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                      Ready to Get Started?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8">
                      Choose your plan and let us help you achieve your digital goals.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">
                      <Link href="/contact" className="flex items-center gap-2">
                        Schedule a Consultation
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
