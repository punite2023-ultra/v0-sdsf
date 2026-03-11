import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"], // ExtraBold
})

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ],
  services: [
    { href: "/services/branding", label: "Social Media Marketing" },
    { href: "/services/web-design", label: "Content Creation & Branding" },
    { href: "/services/development", label: "E-Commerce Strategy and Management" },
    { href: "/services/marketing", label: "Digital Marketing" },
    { href: "/services/seo", label: "Influencer & Affiliate" },
  ],
  support: [
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQs" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#62248e] text-white">
      {/* CTA Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="bg-white/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          
          <div className="relative z-10">
            
            <h2
              className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4`}
            >
              Ready to Start Your Project?
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              {"Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision."}
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-white text-[#62248e] hover:bg-white/90"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/StarDigitalSolutionsLogoWhite.png"
                  alt="Star Digital Solutions"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                We craft exceptional digital experiences that elevate brands and drive meaningful results for businesses worldwide.
              </p>

              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>123 Creative Street, Design City, DC 10001</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span>hello@stardigitalsolutions.ph</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/60 text-sm">
              {new Date().getFullYear()} Star Digital Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#62248e] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
