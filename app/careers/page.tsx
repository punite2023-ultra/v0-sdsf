'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ChevronRight, MapPin, Briefcase, DollarSign, Users, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobs } from "@/lib/content"
import { useState } from "react"

export const metadata = {
  title: "Careers | SDSF - Social Digital Selling Force",
  description: "Join our team and help brands succeed in TikTok Shop and social commerce. View open positions and company culture.",
}

const perks = [
  {
    icon: Zap,
    title: "Fast-Growing Industry",
    description: "Be part of the fastest-growing e-commerce trend in Southeast Asia.",
  },
  {
    icon: Users,
    title: "Creative Team",
    description: "Work with talented creators, strategists, and operators passionate about social commerce.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Directly impact brand growth and help sellers succeed in the social commerce space.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Competitive salary, bonuses, and performance incentives based on impact.",
  },
]

const coreValues = [
  {
    title: "Authenticity",
    description: "We believe in genuine connections and authentic content over polished, corporate messaging.",
  },
  {
    title: "Creator First",
    description: "Creators drive our success. We support, empower, and celebrate our team and creator partners.",
  },
  {
    title: "Data-Driven",
    description: "We make decisions based on data and insights, not guesses or trends.",
  },
  {
    title: "Customer Success",
    description: "Our clients' success is our success. We're committed to delivering real results and growth.",
  },
  {
    title: "Innovation",
    description: "We constantly experiment, learn, and evolve to stay ahead in the social commerce space.",
  },
  {
    title: "Community",
    description: "We build strong communities both internally and with our clients and users.",
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(0)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">We're Hiring</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Join Our Team
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  We're building the future of social commerce. Help us revolutionize how brands sell on TikTok, Shopee, and beyond.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Why Join SDSF?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  More than just a job—join a mission to transform e-commerce.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {perks.map((perk, index) => {
                const Icon = perk.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{perk.title}</h3>
                      <p className="text-muted-foreground">{perk.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Currently hiring for {jobs.length} roles across our teams.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <ScrollReveal key={job.id}>
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full text-left bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                          <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-6 h-6 text-primary transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`}
                      />
                    </div>

                    {/* Expanded Content */}
                    {expandedJob === job.id && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-3">About the Role</h4>
                            <p className="text-muted-foreground mb-6">{job.description}</p>

                            <h4 className="font-semibold mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Requirements</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>

                            <h4 className="font-semibold mb-3">Benefits</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                              {job.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button className="mt-6 w-full sm:w-auto">
                          Apply Now
                        </Button>
                      </div>
                    )}
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Ready to Make an Impact?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Apply for any of our open positions and join us in revolutionizing social commerce.
                </p>
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="mailto:careers@sdsf.com">Send Your Application</a>
                </Button>
                <p className="text-sm text-primary-foreground/80 mt-4">
                  Questions? Email us at careers@sdsf.com
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
