"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Raleway } from "next/font/google"
import { useLanguage } from "@/lib/language-context"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <>
      {/* CTA SECTION */}
      <section className="bg-[#682e94] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">
              <h2
                className={`${raleway.className} text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight`}
              >
                {language === "en"
                  ? "Ready to Start Your Project?"
                  : "准备开始您的项目了吗？"}
              </h2>

              <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                {language === "en"
                  ? "Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision."
                  : "让我们一起打造与众不同的成果。欢迎联系我们，一起聊聊您的想法与目标。"}
              </p>
            </div>

            <div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-[#682e94] hover:bg-white/90 px-8"
              >
                <Link href="/contact">
                  {language === "en" ? "Start a Project" : "开始项目"}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 py-14 lg:py-16">

          {/* ✅ CLEAN SINGLE COLUMN */}
          <div className="flex flex-col items-center text-center">

            {/* LOGO */}
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/StarDigitalSolutionsLogoWhite.png"
                alt="Star Digital Solutions"
                width={360}
                height={110}
                className="h-auto w-auto max-w-[180px]"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-5 text-white/70 max-w-md">
              {language === "en"
                ? "Aligning the stars for your digital success."
                : "为您的数字成功对齐星辰。"}
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-3 text-sm text-white/75">

              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>
                  {language === "en"
                    ? "Manila, Philippines"
                    : "菲律宾马尼拉"}
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+639176783965">
                  09176783965
                </a>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@stardigitalms.com">
                  info@stardigitalms.com
                </a>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Star Digital Solutions.{" "}
              {language === "en" ? "All rights reserved." : "版权所有。"}
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}
