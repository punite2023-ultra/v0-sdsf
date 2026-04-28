"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#070012] border-t border-white/10 text-white">

      {/* MAIN */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Star Digital Solutions
            </h3>

            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              We help brands grow through content, commerce, and creators —
              delivering measurable results across digital platforms.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b70d41] mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b70d41] mt-1" />
                <span>
                  Manila, Philippines
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b70d41]" />
                <span>+63 900 000 0000</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b70d41]" />
                <span>hello@stardigitalsolutions.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 text-center">
          <p className="text-white/50 text-sm">
            © 2026 Star Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
