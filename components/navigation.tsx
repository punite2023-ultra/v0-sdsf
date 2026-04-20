"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "/", label: "Home" },
  {
    label: "About",
    href: "/about",
    children: [
      { href: "/about", label: "Overview" },
      { href: "/about/our-story", label: "Our Story" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const navLinksZh = [
  { href: "/", label: "主页" },
  {
    label: "关于",
    href: "/about",
    children: [
      { href: "/about", label: "概览" },
      { href: "/about/our-story", label: "我们的故事" },
    ],
  },
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href
  }

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
          {/* LOGO */}
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
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="relative group">
                    <span
                      className={`cursor-pointer text-sm font-medium ${
                        useLightNav
                          ? "text-white"
                          : "text-[#62248e]"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* DROPDOWN */}
                    <div className="absolute left-0 top-full mt-3 hidden w-48 rounded-xl border border-white/10 bg-[#0a0118] p-2 shadow-lg group-hover:block">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-lg px-4 py-2 text-sm transition ${
                            isActive(child.href)
                              ? "text-[#ff002f]"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive(link.href)
                      ? "text-[#ff002f]"
                      : useLightNav
                      ? "text-white hover:text-[#ff002f]"
                      : "text-[#62248e] hover:text-[#ff002f]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* LANGUAGE */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "en"
                  ? "bg-[#ff002f] text-white"
                  : useLightNav
                  ? "text-white"
                  : "text-[#62248e]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "zh"
                  ? "bg-[#ff002f] text-white"
                  : useLightNav
                  ? "text-white"
                  : "text-[#62248e]"
              }`}
            >
              中文
            </button>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">
                {language === "en" ? "Get Started" : "开始使用"}
              </Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2"
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
          <div className="mt-6 bg-card rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-medium text-[#62248e]"
                  >
                    {link.label}
                  </Link>

                  {link.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-[#62248e]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button asChild className="rounded-full mt-4">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
