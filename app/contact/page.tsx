"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aurelia.com",
    href: "mailto:hello@aurelia.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "San Francisco, CA 94105",
    href: "#",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Let's Work Together
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Reach out to us and let's create something amazing together.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                    Contact Information
                  </h2>
                </ScrollReveal>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <ScrollReveal key={info.label} delay={index * 100}>
                      <Link href={info.href} className="group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </div>
                            <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Social Links */}
                <ScrollReveal delay={300}>
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((social) => (
                        <Link
                          key={social}
                          href="#"
                          className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-sm font-medium"
                        >
                          {social.slice(0, 2).toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                        >
                          <option value="">Select a project type</option>
                          <option value="web-design">Web Design</option>
                          <option value="web-development">Web Development</option>
                          <option value="branding">Branding</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and what you're looking to achieve."
                        required
                        rows={6}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    {submitted && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                        Thank you for reaching out! We'll get back to you within 24 hours.
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full px-8 group w-full sm:w-auto"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    Frequently Asked Questions
                  </h2>
                </ScrollReveal>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "What's your typical response time?",
                    a: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly."
                  },
                  {
                    q: "Do you offer free consultations?",
                    a: "Yes, we offer a free 30-minute consultation to discuss your project and determine how we can help."
                  },
                  {
                    q: "What's your project process?",
                    a: "We follow a structured process: Discovery, Strategy, Design, Development, Testing, and Launch with ongoing support."
                  },
                  {
                    q: "How do you handle project timelines?",
                    a: "Timelines depend on project scope. We'll provide a detailed timeline and milestone schedule during the discovery phase."
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
      </main>
      <SiteFooter />
    </>
  )
}
