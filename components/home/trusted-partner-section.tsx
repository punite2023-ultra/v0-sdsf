"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Star,
  ArrowRight,
  Monitor,
  Rocket,
  Smartphone,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustedPartnerSection() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          heading: "探索数字增长新边界，成为你值得信赖的合作伙伴。",
          intro:
            "我们通过策略、设计与执行，帮助品牌建立更强的数字体验，实现更清晰的沟通与更稳定的增长。",
          feature1Title: "及时且透明的沟通",
          feature1Desc:
            "从策略规划到项目交付，我们保持清晰协作、快速反馈与高效执行。",
          feature2Title: "提升流量与销售",
          feature2Desc:
            "通过更聪明的数字策略、内容与转化优化，帮助品牌获得可持续增长。",
          supportTitle: "高级支持",
          supportPhone: "(888) 4000-2234",
          supportDesc:
            "我们提供持续支持与协助，确保你的品牌在每一步都保持顺畅运作。",
          ratingLabel: "客户评分",
          ratingDesc:
            "我们致力于打造高质量体验，并通过持续优化与服务赢得客户信任。",
          responsiveTitle: "响应式且可扩展的解决方案",
          responsiveDesc:
            "无论你是刚起步还是准备扩大规模，我们都能为你打造灵活、现代的数字系统。",
          learnMore: "了解更多",
          callNow: "立即致电",
        }
      : {
          heading:
            "Navigating Digital Horizons with Digimax: Your Trusted Partner.",
          intro:
            "We help brands move with confidence through strategy, design, and digital execution that feels modern, clear, and built for growth.",
          feature1Title: "Timely and Transparent Communication",
          feature1Desc:
            "From strategy to delivery, we keep every step clear, collaborative, and aligned with your business goals.",
          feature2Title: "Boost Traffic & Sales",
          feature2Desc:
            "Smarter digital strategy, stronger visibility, and more conversion-focused execution for long-term growth.",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportDesc:
            "Reliable support and guidance to help your brand stay active, responsive, and ready for what’s next.",
          ratingLabel: "Client Ratings",
          ratingDesc:
            "We focus on delivering quality experiences that earn trust, satisfaction, and long-term client relationships.",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveDesc:
            "From launch to expansion, we create digital systems that stay flexible, modern, and ready to grow with you.",
          learnMore: "Learn More",
          callNow: "Call Now!",
        }

  return (
    <section className="relative overflow-hidden bg-[#070015] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-8">
        {/* Top heading row */}
        <div className="mb-8 grid gap-8 lg:mb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <h2 className="max-w-[760px] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl xl:text-[64px]">
            {t.heading}
          </h2>

          <p className="max-w-[760px] text-base leading-8 text-white/60 md:text-lg">
            {t.intro}
          </p>
        </div>

        {/* Main mosaic */}
        <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-[446px_430px]">
          {/* Big left card */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,#1b0036_0%,#0d001e_100%)] lg:col-span-6 lg:row-span-1">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:62px_62px]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="max-w-[420px]">
                <h3 className="text-3xl font-medium leading-tight text-[#b57cff] md:text-4xl">
                  {t.feature1Title}
                </h3>

                <p className="mt-6 max-w-[360px] text-base leading-8 text-white/58 md:text-lg">
                  {t.feature1Desc}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#c084fc_100%)] px-7 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  {t.learnMore}
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[460px]">
                <div className="relative aspect-[1.2/0.85] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop"
                    alt="Desktop setup"
                    fill
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rocket card */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#2a2238] lg:col-span-3 lg:row-span-1">
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:58px_58px]" />
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
              <div className="max-w-[240px]">
                <h3 className="text-2xl font-medium leading-tight text-white md:text-[30px]">
                  {t.feature2Title}
                </h3>

                <p className="mt-6 text-base leading-8 text-white/55">
                  {t.feature2Desc}
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-4 top-0 flex items-center">
                <Rocket className="h-[340px] w-[340px] text-white/90 opacity-95" strokeWidth={1.3} />
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),rgba(255,255,255,0)_70%)] opacity-20 blur-xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-b-[28px] bg-[linear-gradient(180deg,rgba(78,205,255,0.8),rgba(78,205,255,0.35))]" style={{ clipPath: "ellipse(60% 70% at 50% 100%)" }} />
            </div>
          </div>

          {/* Tall support card */}
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#b985ff_0%,#ee7bc2_100%)] lg:col-span-3 lg:row-span-2">
            <div className="flex h-full flex-col items-center justify-between px-8 py-10 text-center md:px-10">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/95 text-[#b985ff] shadow-[0_10px_40px_rgba(255,255,255,0.18)]">
                <Phone className="h-11 w-11" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-2xl font-medium text-white md:text-[30px]">
                  {t.supportTitle}
                </h3>

                <p className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white md:text-[42px]">
                  {t.supportPhone}
                </p>

                <p className="mx-auto mt-8 max-w-[300px] text-lg leading-9 text-white/88">
                  {t.supportDesc}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#070015] px-10 py-4 text-sm font-bold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:scale-[1.04]"
              >
                {t.callNow}
              </Link>
            </div>
          </div>

          {/* Ratings card */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#17002f_0%,#080014_100%)] lg:col-span-3 lg:row-span-1">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:60px_60px]" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-10 text-center">
              <div className="text-6xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
                4.7+
              </div>

              <p className="mt-4 text-2xl font-medium text-white md:text-[32px]">
                {t.ratingLabel}
              </p>

              <div className="mt-8 flex items-center gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <Star
                    key={item}
                    className="h-8 w-8 fill-[#f5ad72] text-[#f5ad72]"
                  />
                ))}
                <Star className="h-8 w-8 fill-[#3a2c56] text-[#3a2c56]" />
              </div>

              <p className="mt-8 max-w-[300px] text-base leading-8 text-white/55">
                {t.ratingDesc}
              </p>
            </div>
          </div>

          {/* Bottom wide responsive card */}
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#bb85ff_0%,#5b2f91_100%)] lg:col-span-6 lg:row-span-1">
            <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="max-w-[420px]">
                <h3 className="text-3xl font-medium leading-tight text-white md:text-4xl">
                  {t.responsiveTitle}
                </h3>

                <p className="mt-6 max-w-[360px] text-base leading-8 text-white/88 md:text-lg">
                  {t.responsiveDesc}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#070015] px-7 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  {t.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center">
                <div className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px]">
                  <div className="absolute inset-0 rounded-[36px] bg-white/85 shadow-[0_20px_60px_rgba(255,255,255,0.18)]" />
                  <div className="absolute inset-[14px] rounded-[28px] bg-[#f6f4f8]" />
                  <div className="absolute left-1/2 top-3 h-2.5 w-20 -translate-x-1/2 rounded-full bg-[#e8e2ee]" />
                  <div className="absolute left-[24px] right-[24px] top-[42px] h-[10px] rounded-full bg-[#ebe6f2]" />
                  <div className="absolute left-[24px] top-[70px] h-[120px] w-[90px] rounded-2xl bg-white shadow-inner" />
                  <div className="absolute right-[24px] top-[70px] h-[120px] w-[140px] rounded-2xl bg-[#7d9bff]" />
                  <div className="absolute bottom-[26px] left-[24px] right-[24px] h-[70px] rounded-2xl bg-white shadow-inner" />
                  <div className="absolute bottom-[44px] left-[46px] right-[46px] flex items-end justify-between">
                    {[38, 55, 86, 58, 74, 48, 66].map((h, i) => (
                      <div
                        key={i}
                        className="w-4 rounded-full bg-[#dfe6ff]"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-[44px] left-[114px] w-4 rounded-full bg-[#5f85ff]" style={{ height: "104px" }} />
                </div>

                <div className="-ml-12 hidden md:block">
                  <div className="relative h-[250px] w-[180px] rounded-[34px] bg-white/80 shadow-[0_20px_50px_rgba(255,255,255,0.18)]">
                    <div className="absolute inset-[12px] rounded-[26px] bg-[#f6f4f8]" />
                    <div className="absolute left-1/2 top-3 h-2 w-16 -translate-x-1/2 rounded-full bg-[#e8e2ee]" />
                    <div className="absolute left-[28px] right-[28px] top-[58px] h-[88px] rounded-2xl bg-[#7d9bff]" />
                    <div className="absolute bottom-[38px] left-[28px] right-[28px] h-[54px] rounded-2xl bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
