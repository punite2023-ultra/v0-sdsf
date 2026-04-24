"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const navLinksEn = [
  { href: "/", label: "Landing Page" },
  { href: "/about", label: "About Us" },
]

const navLinksZh = [
  { href: "/", label: "主页" },
  { href: "/about", label: "关于我们" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const isHome = pathname === "/"
  const isAbout = pathname === "/about"
  const useDarkNav = isAbout || (isHome && !isScrolled)
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
        useDarkNav
          ? "bg-[#18072f]/80 py-5 backdrop-blur-md"
          : "bg-background/95 py-4 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={
                useDarkNav
                  ? "/images/StarDigitalSolutionsWhite.svg"
                  : "/images/StarDigitalSolutionsColor.svg"
              }
              alt="Star Digital Solutions"
              className="h-[72px] w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive(link.href)
                    ? "text-[#ff2f74]"
                    : useDarkNav
                    ? "text-white hover:text-[#ff2f74]"
                    : "text-[#62248e] hover:text-[#ff002f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm ${
                language === "en"
                  ? "bg-[#ff002f] text-white"
                  : useDarkNav
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
                  : useDarkNav
                  ? "text-white"
                  : "text-[#62248e]"
              }`}
            >
              中文
            </button>
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className={`rounded-full px-6 ${
                useDarkNav
                  ? "border border-pink-400/70 bg-transparent text-white hover:bg-pink-500/15"
                  : ""
              }`}
            >
              <Link href="/contact">
                {language === "en" ? "Get Started" : "开始使用"}
              </Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 ${
              useDarkNav ? "text-white" : "text-[#62248e]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className={`mt-6 rounded-2xl p-6 ${useDarkNav ? "border border-white/10 bg-[#21103f]/95" : "bg-card"}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium ${useDarkNav ? "text-white" : "text-[#62248e]"}`}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild className="mt-4 rounded-full">
                <Link href="/contact">
                  {language === "en" ? "Get Started" : "开始使用"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
