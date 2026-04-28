"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway, Poppins } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({ subsets: ["latin"], weight: ["800"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"] })

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <>
      {/* CTA */}
      <section className="bg-[#682e94] text-white">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">
              <h2 className={`${raleway.className} text-4xl lg:text-5xl font-extrabold uppercase`}>
                READY TO START YOUR PROJECT?
              </h2>

              <p className={`${poppins.className} mt-4 text-white/80`}>
                Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision.
              </p>
            </div>

            <Button asChild className="rounded-full bg-white text-[#682e94] px-8">
              <Link href="/contact">
                START A PROJECT <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-16">

          {/* 🔥 BIGGER LOGO + CENTER */}
          <div className="flex flex-col items-center text-center">

            <Link href="/" className="mb-8">
              <Image
                src="/StarDigitalSolutionsLogoWhite.png"
                alt="Star Digital Solutions"
                width={900}
                height={300}
                className="h-[120px] md:h-[140px] lg:h-[160px] w-auto"
              />
            </Link>

            <p className={`${poppins.className} text-white/70 max-w-md`}>
              Aligning the stars for your digital success.
            </p>

            <div className={`${poppins.className} mt-6 space-y-3 text-sm text-white/75`}>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-4 w-4" />
                Manila, Philippines
              </div>

              <div className="flex items-center justify-center gap-3">
                <Phone className="h-4 w-4" />
                09176783965
              </div>

              <div className="flex items-center justify-center gap-3">
                <Mail className="h-4 w-4" />
                info@stardigitalms.com
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex gap-6 text-white/70">
              <Facebook className="hover:text-[#b70d41] cursor-pointer" />
              <Instagram className="hover:text-[#b70d41] cursor-pointer" />
              <Twitter className="hover:text-[#b70d41] cursor-pointer" />
              <span className="text-xl">♪</span>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Star Digital Solutions. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}
