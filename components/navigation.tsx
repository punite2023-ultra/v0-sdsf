"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "#home", label: "Home" },
  { href: "#who-we-are", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#brand-partners", label: "Brand Partners" },
  { href: "#news-events", label: "News & Events" },
  { href: "#contact", label: "Contact" },
]

const navLinksZh = [
  { href: "#home", label: "主页" },
  { href: "#who-we-are", label: "关于我们" },
  { href: "#services", label: "服务" },
  { href: "#brand-partners", label: "合作品牌" },
  { href: "#news-events", label: "新闻与活动" },
  { href: "#contact", label: "联系我们" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navLinks = language === "en" ? navLinksEn : navLinksZh

  // ✅ Smooth scroll handler
  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -100 // offset for fixed navbar
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md py-5">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/StarDigitalSolutionsWhite.svg"
              alt="Star Digital Solutions"
              className="h-[72px] w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleScroll(e, link.href.replace("#", ""))
                }
                className="text-sm font-medium text-white hover:text-[#ff2f74] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* LANGUAGE SWITCH */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "en"
                  ? "bg-[#ff002f] text-white"
                  : "text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "zh"
                  ? "bg-[#ff002f] text-white"
                  : "text-white"
              }`}
            >
              中文
            </button>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full px-6 border border-pink-400/70 bg-transparent text-white hover:bg-pink-500/15"
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
              >
                {language === "en" ? "Get Started" : "开始使用"}
              </a>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="mt-6 rounded-2xl p-6 border border-white/10 bg-[#21103f]/95">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) =>
                    handleScroll(e, link.href.replace("#", ""))
                  }
                  className="font-medium text-white"
                >
                  {link.label}
                </a>
              ))}

              <Button asChild className="mt-4 rounded-full">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                >
                  {language === "en" ? "Get Started" : "开始使用"}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
