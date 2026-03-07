import Link from "next/link"
import { Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const pageLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#contact", label: "CONTACT US" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-primary text-xl font-bold">STAR</span>
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-foreground text-xl font-light">star</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">PAGES</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Montra Studio Bulevard.,<br />Manila Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+108(800) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@stardigital.com</span>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">CONNECT WITH US</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Stay updated with our latest projects and insights. Follow us on social media.
            </p>
            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-foreground font-medium text-sm mb-2">Star Digital Solutions</p>
              <p className="text-muted-foreground text-xs">
                Creative Digital Agency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Star Digital Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Terms & Support
              </Link>
              <Link href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
