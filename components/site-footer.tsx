"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway, Poppins } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <>
      {/* CTA */}
      <section className="bg-[#682e94] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">
              <h2 className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase`}>
                {language === "en"
                  ? "READY TO START YOUR PROJECT?"
                  : "准备开始您的项目了吗？"}
              </h2>

              <p className={`${poppins.className} mt-4 text-white/80 max-w-xl`}>
                {language === "en"
                  ? "Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision."
                  : "让我们一起打造与众不同的成果。欢迎联系我们，一起聊聊您的想法与目标。"}
              </p>
            </div>

            <Button
              asChild
              className="rounded-full bg-white text-[#682e94] px-8 hover:bg-white/90"
            >
              <Link href="/contact">
                {language === "en" ? "START A PROJECT" : "开始项目"}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.4fr]">

            {/* LEFT */}
            <div>

              {/* 🔥 BIGGER LOGO */}
              <Link href="/" className="inline-flex items-center mb-6">
                <Image
                  src="/StarDigitalSolutionsLogoWhite.png"
                  alt="Star Digital Solutions"
                  width={600}
                  height={180}
                  className="h-[90px] w-auto md:h-[110px]"
                />
              </Link>

              <p className={`${poppins.className} text-white/70 max-w-md`}>
                {language === "en"
                  ? "Aligning the stars for your digital success."
                  : "为您的数字成功对齐星辰。"}
              </p>

              <div className={`${poppins.className} mt-6 space-y-3 text-sm text-white/75`}>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4" />
                  <span>
                    747 Nicanor Padilla St. San Miguel, Manila, Philippines, 1005
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+639176783965">09176783965</a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@stardigitalms.com">
                    info@stardigitalms.com
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className={`${raleway.className} mb-6 text-sm uppercase tracking-[0.2em]`}>
                SOCIAL MEDIA
              </h3>

              <div className={`${poppins.className} space-y-4 text-lg`}>
                <a href="#" className="flex items-center gap-3 hover:text-[#b70d41]">
                  <Facebook className="h-5 w-5" /> Facebook
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#b70d41]">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#b70d41]">
                  <Twitter className="h-5 w-5" /> Twitter
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#b70d41]">
                  <span className="text-xl">♪</span> Tiktok
                </a>
              </div>
            </div>

            {/* HOURS */}
            <div>
              <h3 className={`${raleway.className} mb-6 text-sm uppercase tracking-[0.2em]`}>
                OPENING HOURS
              </h3>

              <div className={`${poppins.className} text-lg`}>
                <div className="flex justify-between border-b border-white/10 py-4">
                  <span>Monday - Wednesday :</span>
                  <span>6AM - 13PM</span>
                </div>

                <div className="flex justify-between border-b border-white/10 py-4">
                  <span>Thursday - Friday :</span>
                  <span>5AM - 12PM</span>
                </div>

                <div className="flex justify-between border-b border-white/10 py-4">
                  <span>Weekend :</span>
                  <span>5AM - 11PM</span>
                </div>
              </div>
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
