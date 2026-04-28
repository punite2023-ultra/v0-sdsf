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

const raleway = Raleway({ subsets: ["latin"], weight: ["800"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <>
      <section className="bg-[#682e94] text-white">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2
                className={`${raleway.className} text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:text-5xl`}
              >
                {language === "en"
                  ? "Ready to Start Your Project?"
                  : "准备开始您的项目了吗？"}
              </h2>

              <p
                className={`${poppins.className} mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg`}
              >
                {language === "en"
                  ? "Let's collaborate to create something extraordinary. Get in touch and let's discuss your vision."
                  : "让我们一起打造与众不同的成果。欢迎联系我们，一起聊聊您的想法与目标。"}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-[#682e94] hover:bg-white/90"
            >
              <Link href="/contact">
                {language === "en" ? "Start a Project" : "开始项目"}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1.4fr]">
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/StarDigitalSolutionsLogoWhite.png"
                  alt="Star Digital Solutions"
                  width={360}
                  height={110}
                  className="h-auto w-auto"
                />
              </Link>

              <p className={`${poppins.className} mt-5 max-w-md text-white/70`}>
                {language === "en"
                  ? "Aligning the stars for your digital success."
                  : "为您的数字成功对齐星辰。"}
              </p>

              <div className={`${poppins.className} mt-6 space-y-3 text-sm text-white/75`}>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {language === "en"
                      ? "747 Nicanor Padilla St. San Miguel, Manila, Philippines, 1005"
                      : "菲律宾马尼拉圣米格尔 Nicanor Padilla 街 747 号，1005"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+639176783965">09176783965</a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:info@stardigitalms.com">
                    info@stardigitalms.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`${raleway.className} mb-7 text-sm uppercase tracking-[0.22em] text-white`}
              >
                Social Media
              </h3>

              <div className={`${poppins.className} space-y-5 text-white`}>
                <a
                  href="https://www.facebook.com/stardigitalsolutionsph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition hover:text-[#b70d41]"
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/stardigitalsolutionsph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition hover:text-[#b70d41]"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition hover:text-[#b70d41]"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>

                <a
                  href="https://www.tiktok.com/@stardigitalsolutionsph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition hover:text-[#b70d41]"
                >
                  <span className="text-xl font-bold">♪</span>
                  Tiktok
                </a>
              </div>
            </div>

            <div>
              <h3
                className={`${raleway.className} mb-7 text-sm uppercase tracking-[0.22em] text-white`}
              >
                Opening Hours
              </h3>

              <div className={`${poppins.className} space-y-0 text-lg text-white`}>
                <div className="flex justify-between gap-8 border-b border-dashed border-white/15 py-4">
                  <span>Monday - Wednesday :</span>
                  <span>6AM - 13PM</span>
                </div>

                <div className="flex justify-between gap-8 border-b border-dashed border-white/15 py-4">
                  <span>Thursday - Friday :</span>
                  <span>5AM -12PM</span>
                </div>

                <div className="flex justify-between gap-8 border-b border-dashed border-white/15 py-4">
                  <span>Weekend :</span>
                  <span>5AM -11PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <p className={`${poppins.className} text-sm text-white/60`}>
              © {new Date().getFullYear()} Star Digital Solutions.{" "}
              {language === "en" ? "All rights reserved." : "版权所有。"}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
