"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === "/"
  const useLightNav = isHome && !isScrolled

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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Get Started</Link>
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

              <Button asChild className="rounded-full mt-4">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
