"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const navLinksZh = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/services", label: "服务" },
  { href: "/portfolio", label: "作品集" },
  { href: "/pricing", label: "定价" },
  { href: "/blog", label: "博客" },
  { href: "/careers", label: "招聘" },
  { href: "/contact", label: "联系" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const isHome = pathname === "/"
  const useLightNav = isHome && !isScrolled
  const navLinks = language === 'en' ? navLinksEn : navLinksZh

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useLightNav
          ? "bg-transparent py-6"
          : "bg-background/95 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={
                useLightNav
                  ? "/images/StarDigitalSolutionsWhite.svg"
                  : "/images/StarDigitalSolutionsColor.svg"
              }
              alt="Star Digital Solutions"
              className="h-[72px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 underline-animation ${
                  pathname === link.href
                    ? "text-[#ff002f]"
                    : useLightNav
                    ? "text-white hover:text-[#ff002f]"
                    : "text-[#62248e] hover:text-[#ff002f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-[#ff002f] text-white'
                  : useLightNav
                  ? 'text-white hover:text-[#ff002f]'
                  : 'text-[#62248e] hover:text-[#ff002f]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'zh'
                  ? 'bg-[#ff002f] text-white'
                  : useLightNav
                  ? 'text-white hover:text-[#ff002f]'
                  : 'text-[#62248e] hover:text-[#ff002f]'
              }`}
            >
              中文
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">{language === 'en' ? 'Get Started' : '开始使用'}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  useLightNav ? "text-white" : "text-[#62248e]"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  useLightNav ? "text-white" : "text-[#62248e]"
                }`}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    pathname === link.href
                      ? "text-[#ff002f]"
                      : "text-[#62248e] hover:text-[#ff002f]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-2 mt-4 pt-4 border-t">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-[#ff002f] text-white'
                      : 'bg-muted text-[#62248e] hover:text-[#ff002f]'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    language === 'zh'
                      ? 'bg-[#ff002f] text-white'
                      : 'bg-muted text-[#62248e] hover:text-[#ff002f]'
                  }`}
                >
                  中文
                </button>
              </div>

              <Button asChild className="rounded-full mt-4">
                <Link href="/contact">{language === 'en' ? 'Get Started' : '开始使用'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
