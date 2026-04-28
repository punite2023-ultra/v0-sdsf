"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "#home", label: "Home" },
  { href: "#who-we-are", label: "About" },
  { href: "#brand-partners", label: "Brand Partners" },
  { href: "#services", label: "Services" },
  { href: "#news-events", label: "News & Events" },
  { href: "#contact", label: "Contact" },
]

const navLinksZh = [
  { href: "#home", label: "主页" },
  { href: "#who-we-are", label: "关于我们" },
  { href: "#brand-partners", label: "合作品牌" },
  { href: "#services", label: "服务" },
  { href: "#news-events", label: "新闻与活动" },
  { href: "#contact", label: "联系我们" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navLinks = language === "en" ? navLinksEn : navLinksZh

  // 🔥 smooth scroll with offset
  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault()

    const el = document.getElementById(targetId)
    if (!el) return

    const offset = -100
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      offset

    window.scrollTo({ top: y, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent py-5">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">

          {/* LOGO */}
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img
              src="/images/StarDigitalSolutionsWhite.svg"
              className="h-[72px]"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleScroll(e, link.href.replace("#", ""))
                }
                className="text-sm text-white hover:text-[#b70d41] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* LANGUAGE */}
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "en"
                  ? "bg-[#b70d41] text-white"
                  : "text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "zh"
                  ? "bg-[#b70d41] text-white"
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
              className="rounded-full px-6 border border-[#b70d41]/60 text-white hover:bg-[#b70d41]/20"
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
              >
                {language === "en" ? "Get Started" : "开始使用"}
              </a>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="mt-6 rounded-2xl p-6 bg-[#21103f]/95 border border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) =>
                    handleScroll(e, link.href.replace("#", ""))
                  }
                  className="text-white"
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
