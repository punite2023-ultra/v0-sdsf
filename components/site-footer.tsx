"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

export function SiteFooter() {
  const { language } = useLanguage()

  const footerLinks = {
    company: [
      {
        href: "/about",
        label: language === "en" ? "About Us" : "关于我们",
      },
      {
        href: "/services",
        label: language === "en" ? "Services" : "服务",
      },
      {
        href: "/portfolio",
        label: language === "en" ? "Portfolio" : "作品集",
      },
      {
        href: "/pricing",
        label: language === "en" ? "Pricing" : "定价",
      },
      {
        href: "/blog",
        label: language === "en" ? "Blog" : "博客",
      },
    ],
    services: [
      {
        href: "/services/branding",
        label: language === "en" ? "Social Media Marketing" : "社交媒体营销",
      },
      {
        href: "/services/web-design",
        label: language === "en" ? "Content Creation & Branding" : "内容创作与品牌建设",
      },
      {
        href: "/services/development",
        label:
          language === "en"
            ? "E-Commerce Strategy & Management"
            : "电商策略与管理",
      },
      {
        href: "/services/marketing",
        label: language === "en" ? "Digital Marketing" : "数字营销",
      },
      {
        href: "/services/seo",
        label:
          language === "en" ? "Influencer & Affiliate Marketing" : "达人与联盟营销",
      },
    ],
    support: [
      {
        href: "/contact",
        label: language === "en" ? "Contact Us" : "联系我们",
      },
      {
        href: "/faq",
        label: language === "en" ? "FAQs" : "常见问题",
      },
      {
        href: "/privacy",
        label: language === "en" ? "Privacy Policy" : "隐私政策",
      },
      {
        href: "/terms",
        label: language === "en" ? "Terms of Service" : "服务条款",
      },
    ],
  }

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <>
      <section className="bg-[#682e94] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight`}
              >
                {language === "en"
                  ? "Ready to Start Your Project?"
                  : "准备开始您的项目了吗？"}
              </h2>

              <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                {language === "en"
                  ? "Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision."
                  : "让我们一起打造与众不同的成果。欢迎联系我们，一起聊聊您的想法与目标。"}
              </p>
            </div>

            <div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-[#682e94] hover:bg-white/90 px-8"
              >
                <Link href="/contact">
                  {language === "en" ? "Start a Project" : "开始项目"}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">
            <div className="xl:col-span-2">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/StarDigitalSolutionsWhite.svg"
                  alt="Star Digital Solutions"
                  width={180}
                  height={42}
                  className="h-auto w-auto max-w-[180px]"
                />
              </Link>

              <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                {language === "en"
                  ? "We craft exceptional digital experiences that elevate brands and drive meaningful results for businesses worldwide."
                  : "我们打造卓越的数字体验，提升品牌价值，并为企业带来真正有意义的成果。"}
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    {language === "en"
                      ? "123 Creative Street, Design City, DC 10001"
                      : "创意街123号，设计城，DC 10001"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a
                    href="mailto:hello@stardigitalsolutions.ph"
                    className="hover:text-white transition-colors"
                  >
                    hello@stardigitalsolutions.ph
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">
                {language === "en" ? "Company" : "公司"}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">
                {language === "en" ? "Services" : "服务"}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">
                {language === "en" ? "Support" : "支持"}
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Star Digital Solutions.{" "}
              {language === "en" ? "All rights reserved." : "版权所有。"}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
