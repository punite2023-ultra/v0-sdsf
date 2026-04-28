"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#brand-partners", label: "Brand Partners" },
  { href: "#services", label: "Services" },
  { href: "#news-events", label: "News & Events" },
  { href: "#contact", label: "Contact" },
]

const navLinksZh = [
  { href: "#home", label: "主页" },
  { href: "#about", label: "关于我们" },
  { href: "#brand-partners", label: "合作品牌" },
  { href: "#services", label: "服务" },
  { href: "#news-events", label: "新闻与活动" },
  { href: "#contact", label: "联系我们" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navLinks = language === "en" ? navLinksEn : navLinksZh

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (!element) return

    const offset = -100
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset

    window.scrollTo({ top: y, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent py-5 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img
              src="/images/StarDigitalSolutionsWhite.svg"
              alt="Star Digital Solutions"
              className="h-[72px] w-auto"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.replace("#", ""))}
                className="text-sm font-medium text-white transition hover:text-[#b70d41]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm ${
                language === "en" ? "bg-[#b70d41] text-white" : "text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("zh")}
              className={`rounded-full px-3 py-1 text-sm ${
                language === "zh" ? "bg-[#b70d41] text-white" : "text-white"
              }`}
            >
              中文
            </button>
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full border border-[#b70d41]/60 bg-transparent px-6 text-white hover:bg-[#b70d41]/20"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                {language === "en" ? "Get Started" : "开始使用"}
              </a>
            </Button>
          </div>

          <button
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-[#21103f]/95 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href.replace("#", ""))}
                  className="font-medium text-white transition hover:text-[#b70d41]"
                >
                  {link.label}
                </a>
              ))}

              <Button asChild className="mt-4 rounded-full bg-[#b70d41]">
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
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
