"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: language === "en" ? "Email" : "电子邮件",
      value: "hello@stardigitalsolutions.ph",
      href: "mailto:hello@stardigitalsolutions.ph",
    },
    {
      icon: Phone,
      label: language === "en" ? "Phone" : "电话",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: language === "en" ? "Address" : "地址",
      value:
        language === "en"
          ? "San Francisco, CA 94105"
          : "美国加州旧金山 94105",
      href: "#",
    },
  ]

  const faqs = [
    {
      q:
        language === "en"
          ? "What's your typical response time?"
          : "你们通常多久回复？",
      a:
        language === "en"
          ? "We aim to respond to all inquiries within 24 business hours."
          : "我们通常会在 24 个工作小时内回复所有咨询。",
    },
    {
      q:
        language === "en"
          ? "What types of projects do you handle?"
          : "你们承接哪些类型的项目？",
      a:
        language === "en"
          ? "We handle branding, content creation, digital marketing, web design, e-commerce, and growth-focused campaigns."
          : "我们承接品牌建设、内容创作、数字营销、网页设计、电商以及以增长为导向的营销项目。",
    },
    {
      q:
        language === "en"
          ? "Can we request a custom proposal?"
          : "可以定制专属方案吗？",
      a:
        language === "en"
          ? "Yes. We can tailor a proposal based on your brand goals, scope, and timeline."
          : "可以。我们可根据您的品牌目标、项目范围和时间安排定制专属方案。",
    },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {language === "en" ? "Get In Touch" : "联系我们"}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {language === "en" ? "Let's Work Together" : "让我们一起合作"}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {language === "en"
                  ? "Have a project in mind? We'd love to hear about it. Reach out to us and let's create something amazing together."
                  : "如果您已经有项目想法，我们很乐意听您分享。欢迎联系我们，一起打造出色的成果。"}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14">
            <ScrollReveal>
              <div className="rounded-3xl border bg-card p-8 lg:p-10 h-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  {language === "en" ? "Contact Information" : "联系信息"}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon

                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 p-4 rounded-2xl border hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-base font-medium mt-1">{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === "en" ? "Follow Us" : "关注我们"}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((social) => (
                      <div
                        key={social}
                        className="w-11 h-11 rounded-full border flex items-center justify-center text-sm font-semibold"
                      >
                        {social.slice(0, 2).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="rounded-3xl border bg-card p-8 lg:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  {language === "en" ? "Send Us a Message" : "给我们留言"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === "en" ? "Full Name *" : "姓名 *"}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={language === "en" ? "Your full name" : "请输入您的姓名"}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === "en" ? "Email Address *" : "电子邮箱 *"}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={
                          language === "en" ? "you@example.com" : "请输入您的邮箱地址"
                        }
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === "en" ? "Company" : "公司"}
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={
                          language === "en" ? "Your company name" : "请输入公司名称"
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === "en" ? "Project Type *" : "项目类型 *"}
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">
                          {language === "en"
                            ? "Select a project type"
                            : "请选择项目类型"}
                        </option>
                        <option value="web-design">
                          {language === "en" ? "Web Design" : "网页设计"}
                        </option>
                        <option value="web-development">
                          {language === "en" ? "Web Development" : "网站开发"}
                        </option>
                        <option value="branding">
                          {language === "en" ? "Branding" : "品牌建设"}
                        </option>
                        <option value="digital-marketing">
                          {language === "en" ? "Digital Marketing" : "数字营销"}
                        </option>
                        <option value="mobile-app">
                          {language === "en" ? "Mobile App" : "移动应用"}
                        </option>
                        <option value="other">
                          {language === "en" ? "Other" : "其他"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === "en" ? "Message *" : "留言内容 *"}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        language === "en"
                          ? "Tell us about your project, goals, and timeline..."
                          : "请告诉我们您的项目、目标和时间安排……"
                      }
                      rows={6}
                      required
                      className="rounded-2xl"
                    />
                  </div>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                      {language === "en"
                        ? "Thank you for reaching out! We'll get back to you within 24 hours."
                        : "感谢您的联系！我们将在 24 小时内回复您。"}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full px-8 group w-full sm:w-auto"
                  >
                    {language === "en" ? "Send Message" : "发送消息"}
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {language === "en" ? "Frequently Asked Questions" : "常见问题"}
                </h2>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="rounded-2xl border bg-background p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
