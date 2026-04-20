"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Star,
  ArrowRight,
  Rocket,
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
    <section className="relative overflow-hidden bg-[#070015] py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 md:px-6">
        {/* top */}
        <div className="mb-6 grid gap-6 lg:mb-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <h2 className="max-w-[650px] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl xl:text-[54px]">
            {t.heading}
          </h2>

          <p className="max-w-[700px] text-sm leading-7 text-white/58 md:text-base md:leading-8">
            {t.intro}
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[360px_320px]">
          {/* left big card */}
          <div className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(135deg,#17002e_0%,#0c001a_100%)] lg:col-span-6">
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-6 md:p-8 lg:flex-row lg:items-center">
              <div className="max-w-[330px]">
                <h3 className="text-2xl font-medium leading-tight text-[#b57cff] md:text-[34px]">
                  {t.feature1Title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                  {t.feature1Desc}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center rounded-full bg-[linear-gradient(90deg,#a855f7_0%,#c084fc_100%)] px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  {t.learnMore}
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[390px]">
                <div className="relative aspect-[1.1/0.78] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop"
                    alt="Desktop setup"
                    fill
                    className="object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* rocket card */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#2a2238] lg:col-span-3">
            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
              <div className="max-w-[185px]">
                <h3 className="text-[22px] font-medium leading-tight text-white md:text-[26px]">
                  {t.feature2Title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                  {t.feature2Desc}
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-[-14px] top-[8px] flex items-center">
                <Rocket className="h-[250px] w-[250px] text-white/90 opacity-95 md:h-[280px] md:w-[280px]" strokeWidth={1.2} />
              </div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 rounded-b-[22px] bg-[#39b8d6]/80"
                style={{ clipPath: "ellipse(64% 70% at 50% 100%)" }}
              />
            </div>
          </div>

          {/* support tall */}
          <div className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#b985ff_0%,#ee7bc2_100%)] lg:col-span-3 lg:row-span-2">
            <div className="flex h-full flex-col items-center justify-between px-6 py-8 text-center md:px-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[#b985ff]">
                <Phone className="h-9 w-9" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-2xl font-medium text-white md:text-[28px]">
                  {t.supportTitle}
                </h3>

                <p className="mt-3 text-[30px] font-medium tracking-[-0.03em] text-white md:text-[38px]">
                  {t.supportPhone}
                </p>

                <p className="mx-auto mt-6 max-w-[250px] text-base leading-8 text-white/88">
                  {t.supportDesc}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#070015] px-9 py-3.5 text-xs font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.04]"
              >
                {t.callNow}
              </Link>
            </div>
          </div>

          {/* ratings */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,#140028_0%,#070012_100%)] lg:col-span-3">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-8 text-center">
              <div className="text-5xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                4.7+
              </div>

              <p className="mt-3 text-2xl font-medium text-white md:text-[26px]">
                {t.ratingLabel}
              </p>

              <div className="mt-5 flex items-center gap-1.5">
                {[1, 2, 3, 4].map((item) => (
                  <Star
                    key={item}
                    className="h-7 w-7 fill-[#f5ad72] text-[#f5ad72]"
                  />
                ))}
                <Star className="h-7 w-7 fill-[#382b55] text-[#382b55]" />
              </div>

              <p className="mt-6 max-w-[260px] text-sm leading-7 text-white/55 md:text-base">
                {t.ratingDesc}
              </p>
            </div>
          </div>

          {/* responsive solution */}
          <div className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#b784ff_0%,#5b2f91_100%)] lg:col-span-6">
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-6 md:p-8 lg:flex-row lg:items-center">
              <div className="max-w-[340px]">
                <h3 className="text-2xl font-medium leading-tight text-white md:text-[34px]">
                  {t.responsiveTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/88 md:text-base">
                  {t.responsiveDesc}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#070015] px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  {t.learnMore}
                </Link>
              </div>

              {/* compact phone mockup */}
              <div className="relative mx-auto flex w-full max-w-[380px] items-end justify-center md:max-w-[420px]">
                {/* front phone */}
                <div className="relative h-[220px] w-[210px] rounded-[28px] bg-white/85 shadow-[0_18px_40px_rgba(255,255,255,0.16)] md:h-[250px] md:w-[240px]">
                  <div className="absolute inset-[10px] rounded-[22px] bg-[#f6f4f8]" />
                  <div className="absolute left-1/2 top-3 h-2 w-16 -translate-x-1/2 rounded-full bg-[#e8e2ee]" />
                  <div className="absolute left-[18px] right-[18px] top-[40px] h-[10px] rounded-full bg-[#ebe6f2]" />
                  <div className="absolute left-[18px] top-[62px] h-[90px] w-[72px] rounded-2xl bg-white shadow-inner" />
                  <div className="absolute right-[18px] top-[62px] h-[90px] w-[110px] rounded-2xl bg-[#7d9bff]" />
                  <div className="absolute bottom-[22px] left-[18px] right-[18px] h-[56px] rounded-2xl bg-white shadow-inner" />
                  <div className="absolute bottom-[34px] left-[36px] right-[36px] flex items-end justify-between">
                    {[28, 42, 70, 44, 58, 36, 50].map((h, i) => (
                      <div
                        key={i}
                        className="w-3 rounded-full bg-[#dfe6ff]"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <div
                    className="absolute bottom-[34px] left-[92px] w-3 rounded-full bg-[#5f85ff]"
                    style={{ height: "84px" }}
                  />
                </div>

                {/* back phone */}
                <div className="-ml-10 hidden md:block">
                  <div className="relative h-[210px] w-[150px] rounded-[28px] bg-white/80 shadow-[0_18px_36px_rgba(255,255,255,0.14)]">
                    <div className="absolute inset-[10px] rounded-[22px] bg-[#f6f4f8]" />
                    <div className="absolute left-1/2 top-3 h-2 w-14 -translate-x-1/2 rounded-full bg-[#e8e2ee]" />
                    <div className="absolute left-[22px] right-[22px] top-[48px] h-[76px] rounded-2xl bg-[#7d9bff]" />
                    <div className="absolute bottom-[28px] left-[22px] right-[22px] h-[48px] rounded-2xl bg-white" />
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
