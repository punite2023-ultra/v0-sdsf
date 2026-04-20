"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/about/our-story", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const navLinksZh = [
  { href: "/", label: "主页" },
  { href: "/about", label: "关于" },
  { href: "/about/our-story", label: "我们的故事" },
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
  const { language, setLanguage } = useLanguage()

  const isHome = pathname === "/"
  const useLightNav = isHome && !isScrolled
  const navLinks = language === "en" ? navLinksEn : navLinksZh

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useLightNav
          ? "bg-transparent py-6"
          : "bg-background/95 py-4 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
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

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 underline-animation ${
                  isActiveLink(link.href)
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

          {/* LANGUAGE SWITCH */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-[#ff002f] text-white"
                  : useLightNav
                  ? "text-white hover:text-[#ff002f]"
                  : "text-[#62248e] hover:text-[#ff002f]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "zh"
                  ? "bg-[#ff002f] text-white"
                  : useLightNav
                  ? "text-white hover:text-[#ff002f]"
                  : "text-[#62248e] hover:text-[#ff002f]"
              }`}
            >
              中文
            </button>
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                {language === "en" ? "Get Started" : "开始使用"}
              </Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  useLightNav ? "text-white" : "text-[#62248e]"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  useLightNav ? "text-white" : "text-[#62248e]"
                }`}
              />
            )}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isMobileMenuOpen
              ? "mt-6 max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? "text-[#ff002f]"
                      : "text-[#62248e] hover:text-[#ff002f]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex gap-2 border-t pt-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    language === "en"
                      ? "bg-[#ff002f] text-white"
                      : "bg-muted text-[#62248e] hover:text-[#ff002f]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("zh")}
                  className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    language === "zh"
                      ? "bg-[#ff002f] text-white"
                      : "bg-muted text-[#62248e] hover:text-[#ff002f]"
                  }`}
                >
                  中文
                </button>
              </div>

              <Button asChild className="mt-4 rounded-full">
                <Link href="/contact">
                  {language === "en" ? "Get Started" : "开始使用"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
