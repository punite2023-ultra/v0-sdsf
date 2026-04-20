"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Star, Rocket } from "lucide-react"
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
            "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis suspendisse nisi class ut torquent nec felis senectus feugiat.",
          feature1Title: "Timely and Transparent Communication",
          feature1Desc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          feature2Title: "Boost Traffic & Sales",
          feature2Desc:
            "Platea rhoncus semper consectetur letius facilisi nec curabitur placerat montes lacinia tincidunt",
          supportTitle: "Premium Support",
          supportPhone: "(888) 4000-2234",
          supportDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          ratingLabel: "Client Ratings",
          ratingDesc:
            "Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar",
          responsiveTitle: "Responsive and Scalable Solutions",
          responsiveDesc:
            "Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum",
          learnMore: "Learn More",
          callNow: "Call Now!",
        }

  return (
    <section className="relative overflow-hidden bg-[#070015] py-14 md:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1580px] px-4 md:px-6">
        {/* heading row */}
        <div className="mb-7 grid gap-6 lg:mb-8 lg:grid-cols-[1.08fr_0.92fr]">
          <h2 className="max-w-[860px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[56px] xl:text-[66px]">
            {t.heading}
          </h2>

          <div className="pt-1 lg:pl-4">
            <p className="max-w-[760px] text-sm leading-7 text-white/58 md:text-[17px] md:leading-[1.75]">
              {t.intro}
            </p>

            {/* floating dots */}
            <span className="mt-4 block h-2.5 w-2.5 rounded-full bg-[#26d3ff] shadow-[0_0_18px_rgba(38,211,255,0.7)]" />
            <span className="ml-24 mt-14 block h-2.5 w-2.5 rounded-full bg-[#26d3ff] opacity-80 shadow-[0_0_18px_rgba(38,211,255,0.7)]" />
          </div>
        </div>

        {/* mosaic */}
        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[410px_315px]">
          {/* large left */}
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#130029_0%,#090013_100%)] lg:col-span-7">
            <div className="flex h-full flex-col justify-between gap-6 p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="max-w-[430px]">
                <h3 className="text-[30px] font-medium leading-[1.22] text-[#b67cff] md:text-[38px]">
                  {t.feature1Title}
                </h3>

                <p className="mt-6 max-w-[420px] text-[17px] leading-9 text-white/56">
                  {t.feature1Desc}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-full bg-[linear-gradient(90deg,#b985ff_0%,#a866ff_100%)] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.25em] text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  {t.learnMore}
                </Link>
              </div>

              <div className="relative flex w-full justify-end lg:w-[48%]">
                <div className="relative h-[270px] w-full max-w-[520px] md:h-[320px]">
                  <Image
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1400&auto=format&fit=crop"
                    alt="Desktop setup"
                    fill
                    className="object-contain object-right-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* rocket */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#2d243c] lg:col-span-4">
            <div className="h-full p-8 md:p-10">
              <div className="max-w-[260px]">
                <h3 className="text-[30px] font-medium leading-[1.28] text-white md:text-[34px]">
                  {t.feature2Title}
                </h3>

                <p className="mt-6 text-[17px] leading-9 text-white/50">
                  {t.feature2Desc}
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-[26px] right-[-8px]">
                <Rocket
                  className="h-[310px] w-[310px] text-white/95"
                  strokeWidth={1.15}
                />
              </div>

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-[92px] bg-[#39b8d6]"
                style={{ clipPath: "ellipse(75% 70% at 50% 100%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-[54%] h-[110px] w-[180px] -translate-x-1/2 rounded-t-[120px] bg-[#dce6eb]"
              />
              <div
                className="pointer-events-none absolute bottom-0 left-[61%] h-[82px] w-[128px] -translate-x-1/2 rounded-t-[120px] bg-[#f0f0f0]"
              />
            </div>
          </div>

          {/* support */}
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#bc86ff_0%,#ea79c0_100%)] lg:col-span-1 lg:row-span-2 min-h-[300px] lg:min-h-0">
            <div className="flex h-full min-h-[300px] flex-col items-center justify-between px-6 py-8 text-center lg:min-h-0 lg:px-7">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#b985ff]">
                <Phone className="h-9 w-9" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-[24px] font-medium text-white lg:text-[28px]">
                  {t.supportTitle}
                </h3>

                <p className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-white lg:text-[34px]">
                  {t.supportPhone}
                </p>

                <p className="mx-auto mt-6 max-w-[250px] text-[15px] leading-8 text-white/90 lg:max-w-[240px]">
                  {t.supportDesc}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#060010] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                {t.callNow}
              </Link>
            </div>
          </div>

          {/* ratings */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-[linear-gradient(135deg,#16012d_0%,#080013_100%)] lg:col-span-3">
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-10 text-center">
              <div className="text-[78px] font-semibold leading-none tracking-[-0.05em] text-white">
                4.7+
              </div>

              <p className="mt-4 text-[30px] font-medium text-white">
                {t.ratingLabel}
              </p>

              <div className="mt-7 flex items-center gap-1.5">
                {[1, 2, 3, 4].map((item) => (
                  <Star
                    key={item}
                    className="h-8 w-8 fill-[#f6ad72] text-[#f6ad72]"
                  />
                ))}
                <Star className="h-8 w-8 fill-[#2d2145] text-[#2d2145]" />
              </div>

              <p className="mt-9 max-w-[340px] text-[16px] leading-8 text-white/52">
                {t.ratingDesc}
              </p>
            </div>
          </div>

          {/* responsive card */}
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#b985ff_0%,#5d3092_100%)] lg:col-span-8">
            <div className="flex h-full flex-col justify-between gap-6 p-8 md:p-10 lg:flex-row lg:items-center">
              <div className="max-w-[470px]">
                <h3 className="text-[34px] font-medium leading-[1.2] text-white md:text-[40px]">
                  {t.responsiveTitle}
                </h3>

                <p className="mt-6 max-w-[420px] text-[17px] leading-9 text-white/92">
                  {t.responsiveDesc}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center rounded-full bg-[#060010] px-10 py-4 text-[13px] font-bold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  {t.learnMore}
                </Link>
              </div>

              <div className="relative flex w-full justify-end lg:w-[44%]">
                <div className="relative h-[250px] w-[330px] md:h-[300px] md:w-[390px]">
                  {/* back phone */}
                  <div className="absolute bottom-[8px] right-0 h-[235px] w-[160px] rounded-[34px] bg-[#efeff1] opacity-90 shadow-[0_18px_40px_rgba(255,255,255,0.10)] md:h-[270px] md:w-[185px]">
                    <div className="absolute inset-[10px] rounded-[28px] bg-[#f6f5f7]" />
                    <div className="absolute left-1/2 top-4 h-2.5 w-16 -translate-x-1/2 rounded-full bg-[#e5e4e8]" />
                    <div className="absolute left-[22px] right-[22px] top-[60px] h-[96px] rounded-[18px] bg-[#7495ff]" />
                    <div className="absolute bottom-[28px] left-[22px] right-[22px] h-[58px] rounded-[16px] bg-white" />
                  </div>

                  {/* front phone */}
                  <div className="absolute bottom-0 right-[92px] h-[260px] w-[190px] rounded-[36px] bg-[#f1f1f2] shadow-[0_18px_40px_rgba(255,255,255,0.14)] md:h-[315px] md:w-[230px]">
                    <div className="absolute inset-[10px] rounded-[30px] bg-[#f7f7f8]" />
                    <div className="absolute left-1/2 top-4 h-2.5 w-16 -translate-x-1/2 rounded-full bg-[#e2e3e7]" />
                    <div className="absolute left-[20px] top-[56px] text-[11px] font-semibold text-[#666] md:text-[12px]">
                      $4,652.00 <span className="text-[#b1b1b1]">USD</span>
                    </div>

                    <div className="absolute left-[20px] right-[20px] top-[86px] grid grid-cols-2 gap-3">
                      <div className="rounded-[16px] bg-white p-3 text-center text-[10px] text-[#9aa1ae] shadow-sm">
                        Exchange
                      </div>
                      <div className="rounded-[16px] bg-white p-3 text-center text-[10px] text-[#9aa1ae] shadow-sm">
                        Withdraw
                      </div>
                    </div>

                    <div className="absolute left-[20px] right-[20px] top-[146px] h-[90px] rounded-[16px] bg-[#fbfbfc]">
                      <div className="absolute bottom-[16px] left-[18px] right-[18px] flex items-end justify-between">
                        {[38, 56, 82, 52, 76, 48, 62].map((h, i) => (
                          <div
                            key={i}
                            className="w-3 rounded-full bg-[#ebebee]"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <div
                        className="absolute bottom-[16px] left-[88px] w-3 rounded-full bg-[#6286ff]"
                        style={{ height: "98px" }}
                      />
                    </div>

                    <div className="absolute bottom-[16px] left-[20px] right-[20px] h-[48px] rounded-[16px] bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* keep support visible on mobile/tablet nicely */}
        <div className="mt-5 lg:hidden">
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#bc86ff_0%,#ea79c0_100%)]">
            <div className="flex flex-col items-center justify-between gap-8 px-6 py-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#b985ff]">
                <Phone className="h-9 w-9" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-[24px] font-medium text-white">
                  {t.supportTitle}
                </h3>
                <p className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-white">
                  {t.supportPhone}
                </p>
                <p className="mx-auto mt-6 max-w-[320px] text-[15px] leading-8 text-white/90">
                  {t.supportDesc}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#060010] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.26em] text-white"
              >
                {t.callNow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
