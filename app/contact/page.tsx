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
import { Raleway, Poppins } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

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
      value: "info@stardigitalms.com",
      href: "mailto:info@stardigitalms.com",
    },
    {
      icon: Phone,
      label: language === "en" ? "Phone" : "电话",
      value: "09176783965",
      href: "tel:+639176783965",
    },
    {
      icon: MapPin,
      label: language === "en" ? "Address" : "地址",
      value:
        language === "en"
          ? "747 Nicanor Padilla St. San Miguel, Manila, Philippines, 1005"
          : "菲律宾马尼拉圣米格尔 Nicanor Padilla 街 747 号，1005",
      href: "#",
    },
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

      <main className="bg-[#070012] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#26003e_0%,#140020_55%,#070012_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <ScrollReveal>
                <p
                  className={`${raleway.className} mb-4 text-sm uppercase tracking-[0.22em] text-[#b70d41]`}
                >
                  {language === "en" ? "GET IN TOUCH" : "联系我们"}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className={`${raleway.className} text-[46px] uppercase leading-[1] tracking-[-0.03em] md:text-[72px] lg:text-[88px]`}
                >
                  {language === "en"
                    ? "LET’S WORK TOGETHER"
                    : "让我们一起合作"}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p
                  className={`${poppins.className} mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg`}
                >
                  {language === "en"
                    ? "Have a project in mind? Reach out to Star Digital Solutions and let’s create something extraordinary together."
                    : "如果您已经有项目想法，欢迎联系 Star Digital Solutions，让我们一起打造出色成果。"}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="relative pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* CONTACT INFO */}
              <ScrollReveal>
                <div className="h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:p-9">
                  <h2
                    className={`${raleway.className} mb-7 text-[30px] uppercase leading-[1] tracking-[-0.03em] md:text-[40px]`}
                  >
                    {language === "en"
                      ? "CONTACT INFORMATION"
                      : "联系信息"}
                  </h2>

                  <div className="space-y-5">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon

                      return (
                        <a
                          key={index}
                          href={info.href}
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-[#b70d41]/60 hover:bg-[#b70d41]/10"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b70d41]/20 text-[#ff4d7a]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <p
                              className={`${poppins.className} text-xs uppercase tracking-[0.18em] text-white/45`}
                            >
                              {info.label}
                            </p>
                            <p
                              className={`${poppins.className} mt-1 text-sm font-medium leading-6 text-white/85`}
                            >
                              {info.value}
                            </p>
                          </div>
                        </a>
                      )
                    })}
                  </div>

                  <div className="mt-9 rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p
                      className={`${raleway.className} text-sm uppercase tracking-[0.18em] text-[#b70d41]`}
                    >
                      {language === "en" ? "Office Hours" : "办公时间"}
                    </p>
                    <p
                      className={`${poppins.className} mt-3 text-sm leading-7 text-white/70`}
                    >
                      {language === "en"
                        ? "Monday to Friday, 9:00 AM – 6:00 PM"
                        : "周一至周五，上午 9:00 至下午 6:00"}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* FORM */}
              <ScrollReveal delay={100}>
                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:p-9">
                  <h2
                    className={`${raleway.className} mb-7 text-[30px] uppercase leading-[1] tracking-[-0.03em] md:text-[40px]`}
                  >
                    {language === "en" ? "SEND US A MESSAGE" : "给我们留言"}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          className={`${poppins.className} text-sm font-medium text-white/80`}
                        >
                          {language === "en" ? "Full Name *" : "姓名 *"}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={
                            language === "en"
                              ? "Your full name"
                              : "请输入您的姓名"
                          }
                          required
                          className="h-12 rounded-xl border-white/10 bg-black/30 text-white placeholder:text-white/35"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          className={`${poppins.className} text-sm font-medium text-white/80`}
                        >
                          {language === "en" ? "Email Address *" : "电子邮箱 *"}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={
                            language === "en"
                              ? "you@example.com"
                              : "请输入您的邮箱地址"
                          }
                          required
                          className="h-12 rounded-xl border-white/10 bg-black/30 text-white placeholder:text-white/35"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          className={`${poppins.className} text-sm font-medium text-white/80`}
                        >
                          {language === "en" ? "Company" : "公司"}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={
                            language === "en"
                              ? "Your company name"
                              : "请输入公司名称"
                          }
                          className="h-12 rounded-xl border-white/10 bg-black/30 text-white placeholder:text-white/35"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          className={`${poppins.className} text-sm font-medium text-white/80`}
                        >
                          {language === "en" ? "Project Type *" : "项目类型 *"}
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none"
                        >
                          <option className="bg-[#070012]" value="">
                            {language === "en"
                              ? "Select a project type"
                              : "请选择项目类型"}
                          </option>
                          <option className="bg-[#070012]" value="creator-commerce">
                            {language === "en"
                              ? "Creator Commerce"
                              : "创作者电商"}
                          </option>
                          <option className="bg-[#070012]" value="affiliate-marketing">
                            {language === "en"
                              ? "Affiliate Marketing"
                              : "联盟营销"}
                          </option>
                          <option className="bg-[#070012]" value="brand-campaign">
                            {language === "en"
                              ? "Brand Campaign"
                              : "品牌活动"}
                          </option>
                          <option className="bg-[#070012]" value="ecommerce-growth">
                            {language === "en"
                              ? "E-Commerce Growth"
                              : "电商增长"}
                          </option>
                          <option className="bg-[#070012]" value="other">
                            {language === "en" ? "Other" : "其他"}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        className={`${poppins.className} text-sm font-medium text-white/80`}
                      >
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
                        className="rounded-2xl border-white/10 bg-black/30 text-white placeholder:text-white/35"
                      />
                    </div>

                    {submitted && (
                      <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200">
                        {language === "en"
                          ? "Thank you for reaching out! We'll get back to you soon."
                          : "感谢您的联系！我们会尽快回复您。"}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="group h-12 w-full rounded-full bg-[#b70d41] px-8 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#d41451] sm:w-auto"
                    >
                      {language === "en" ? "Send Message" : "发送消息"}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
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
