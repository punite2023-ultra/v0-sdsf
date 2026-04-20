"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const newsEvents = [
  {
    id: 1,
    categoryEn: "Industry Event",
    categoryZh: "行业活动",
    titleEn: "TikTok Shop Growth Forum",
    titleZh: "TikTok Shop 增长论坛",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Star Digital Solutions",
    organizerZh: "星际数字方案",
    dateEn: "15 Jan 2026",
    dateZh: "2026年1月15日",
    locationEn: "Manila",
    locationZh: "马尼拉",
    audienceEn: "Brand Leaders",
    audienceZh: "品牌负责人",
    descriptionEn:
      "A live session on platform growth, creator-led commerce, and digital acceleration strategies for fast-moving brands.",
    descriptionZh:
      "围绕平台增长、创作者驱动商业与品牌数字加速策略展开的现场活动。",
  },
  {
    id: 2,
    categoryEn: "News Update",
    categoryZh: "新闻更新",
    titleEn: "Affiliate Network Expansion",
    titleZh: "联盟网络扩展",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Growth Team",
    organizerZh: "增长团队",
    dateEn: "18 Jan 2026",
    dateZh: "2026年1月18日",
    locationEn: "Singapore",
    locationZh: "新加坡",
    audienceEn: "Partners",
    audienceZh: "合作伙伴",
    descriptionEn:
      "An update on expanded affiliate partnerships and creator collaborations designed to drive stronger cross-market performance.",
    descriptionZh:
      "关于联盟合作与创作者协作扩展的最新消息，旨在推动跨市场更强劲的增长表现。",
  },
  {
    id: 3,
    categoryEn: "Featured Event",
    categoryZh: "精选活动",
    titleEn: "Live Commerce Summit",
    titleZh: "直播电商峰会",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Commerce Division",
    organizerZh: "电商团队",
    dateEn: "22 Jan 2026",
    dateZh: "2026年1月22日",
    locationEn: "Jakarta",
    locationZh: "雅加达",
    audienceEn: "Retail Brands",
    audienceZh: "零售品牌",
    descriptionEn:
      "A focused event exploring conversion-led content, creator alignment, and platform-native campaigns built for scale.",
    descriptionZh:
      "聚焦以转化为导向的内容、创作者协同与为规模增长而打造的平台型营销活动。",
  },
  {
    id: 4,
    categoryEn: "Press Release",
    categoryZh: "新闻稿",
    titleEn: "Digital Strategy Report 2026",
    titleZh: "2026 数字策略报告",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Insights Team",
    organizerZh: "洞察团队",
    dateEn: "28 Jan 2026",
    dateZh: "2026年1月28日",
    locationEn: "Hong Kong",
    locationZh: "香港",
    audienceEn: "Executives",
    audienceZh: "管理层",
    descriptionEn:
      "A report covering market shifts, creator economy trends, and the next wave of e-commerce growth opportunities.",
    descriptionZh:
      "一份涵盖市场变化、创作者经济趋势以及下一波电商增长机会的策略报告。",
  },
  {
    id: 5,
    categoryEn: "Workshop",
    categoryZh: "研讨会",
    titleEn: "Creator Partnership Masterclass",
    titleZh: "创作者合作大师课",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Partnership Team",
    organizerZh: "合作团队",
    dateEn: "05 Feb 2026",
    dateZh: "2026年2月5日",
    locationEn: "Bangkok",
    locationZh: "曼谷",
    audienceEn: "Marketing Teams",
    audienceZh: "营销团队",
    descriptionEn:
      "A practical workshop on structuring creator ecosystems, affiliate incentives, and partnership campaigns that convert.",
    descriptionZh:
      "围绕创作者生态搭建、联盟激励机制与高转化合作营销的实战型研讨会。",
  },
  {
    id: 6,
    categoryEn: "Company News",
    categoryZh: "公司新闻",
    titleEn: "Star Digital Launches New Growth Services",
    titleZh: "Star Digital 推出全新增长服务",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    organizerEn: "Star Digital",
    organizerZh: "Star Digital",
    dateEn: "12 Feb 2026",
    dateZh: "2026年2月12日",
    locationEn: "Global",
    locationZh: "全球",
    audienceEn: "Brands",
    audienceZh: "品牌客户",
    descriptionEn:
      "A major service update introducing expanded support across affiliate growth, campaign execution, and digital scale systems.",
    descriptionZh:
      "一次重要服务升级，新增联盟增长、营销执行与数字化规模系统支持。",
  },
]

const testimonials = [
  {
    name: "Sarah Thompson",
    company: "THOMPSON & CO.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Star Digital’s events and updates keep us ahead of trends. Their strategic perspective helps us move faster and with more confidence.",
  },
  {
    name: "Michael Chen",
    company: "BRIGHT ELECTRONICS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Their growth-focused sessions gave our team a clearer understanding of where creators, commerce, and conversion are heading next.",
  },
  {
    name: "Ryan Miller",
    company: "FRESH BITES CATERING",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "The mix of industry insight and practical guidance made their News & Events page genuinely valuable for our next phase of planning.",
  },
]

export default function NewsEventsPage() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          heroTitle: "新闻与活动",
          heroDesc: "探索推动品牌、商业与创作者增长的最新动态、重要活动与行业见解。",
          sectionTag: "精选内容",
          sectionTitle: "释放内容、活动与行业洞察的增长力量。",
          organizer: "主办方",
          date: "日期",
          location: "地点",
          audience: "对象",
          learnMore: "了解更多",
          bannerTitle: "推动数字卓越：发现 Star Digital 的增长优势。",
          bannerDesc:
            "从行业活动到品牌新闻，我们通过内容、商业与创作者生态帮助品牌保持领先。",
          bannerBtn: "查看更多",
          reviewsTag: "客户反馈",
          reviewsTitle: "客户反馈与评价",
        }
      : {
          heroTitle: "News & Events",
          heroDesc:
            "Explore the latest updates, featured events, and industry insights shaping growth across content, commerce, and creators.",
          sectionTag: "Featured Updates",
          sectionTitle: "Unleashing the Power of Growth, News, and Events.",
          organizer: "Organizer",
          date: "Date",
          location: "Location",
          audience: "Audience",
          learnMore: "Learn More",
          bannerTitle: "Pioneering Digital Excellence: Discover the Star Digital Advantage.",
          bannerDesc:
            "From industry events to brand updates, we help businesses stay ahead through content, commerce, and creator-led growth systems.",
          bannerBtn: "Discover More",
          reviewsTag: "Testimonial",
          reviewsTitle: "Client Feedback & Reviews",
        }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#0A0118] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/15 rounded-bl-[28px] md:rounded-bl-[60px] lg:rounded-bl-[100px] pt-28 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(164,95,255,0.28),transparent_24%),linear-gradient(180deg,#0A0118_0%,#0A0118_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex min-h-[260px] max-w-3xl items-center justify-center py-16 text-center md:min-h-[320px]">
              <div>
                <ScrollReveal>
                  <h1
                    className="text-4xl font-extrabold md:text-5xl lg:text-6xl"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {t.heroTitle}
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                    {t.heroDesc}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TITLE */}
        <section className="px-6 pb-10 pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff5ebc]">
                {t.sectionTag}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {t.sectionTitle}
              </h2>
            </ScrollReveal>
          </div>
        </section>

        {/* NEWS GRID */}
        <section className="px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {newsEvents.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#130424]">
                  <div className="relative h-[540px]">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={item.image}
                        alt={language === "zh" ? item.titleZh : item.titleEn}
                        fill
                        className="object-cover opacity-50 grayscale transition-all duration-500 group-hover:opacity-75 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#140620]/45 via-[#12041f]/25 to-[#0a0118]" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="bg-[radial-gradient(circle_at_top_left,rgba(255,176,123,0.18),transparent_38%),linear-gradient(180deg,rgba(18,4,31,0.8),rgba(10,1,24,0))] px-5 pb-5 pt-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff5ebc]">
                          {language === "zh" ? item.categoryZh : item.categoryEn}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                          {language === "zh" ? item.titleZh : item.titleEn}
                        </h3>
                      </div>

                      <div className="relative overflow-hidden">
                        <div className="border-t border-white/10 bg-[#130424]/90 px-5 py-5 backdrop-blur-sm transition-transform duration-700 translate-y-[170px] group-hover:translate-y-0">
                          <div className="grid grid-cols-2 gap-y-5 border-b border-white/10 pb-5">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                {t.organizer}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white/90">
                                {language === "zh" ? item.organizerZh : item.organizerEn}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                {t.date}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white/90">
                                {language === "zh" ? item.dateZh : item.dateEn}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                {t.location}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white/90">
                                {language === "zh" ? item.locationZh : item.locationEn}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                {t.audience}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white/90">
                                {language === "zh" ? item.audienceZh : item.audienceEn}
                              </p>
                            </div>
                          </div>

                          <div className="pt-5">
                            <p className="text-sm leading-relaxed text-white/70">
                              {language === "zh" ? item.descriptionZh : item.descriptionEn}
                            </p>

                            <Link
                              href="/contact"
                              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#ffb07b]"
                            >
                              {t.learnMore}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* PROMO BANNER */}
        <section className="px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop"
                  alt="News and events banner"
                  fill
                  className="object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-[#0A0118]/45" />
              </div>

              <div className="relative min-h-[360px] px-6 py-8 md:px-14 md:py-14">
                <div className="max-w-[520px] rounded-xl border border-white/10 bg-[#2a1b46]/70 p-8 backdrop-blur-md">
                  <h3
                    className="text-3xl font-extrabold leading-tight text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {t.bannerTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                    {t.bannerDesc}
                  </p>

                  <Button
                    asChild
                    className="mt-6 rounded-full border-0 bg-gradient-to-r from-[#a65cff] to-[#ffb07b] px-6 text-[#0A0118] hover:opacity-90"
                  >
                    <Link href="/contact">{t.bannerBtn}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff5ebc]">
                {t.reviewsTag}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="mt-4 text-3xl font-extrabold md:text-5xl"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {t.reviewsTitle}
              </h2>
            </ScrollReveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 100}>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-8 text-center">
                  <div className="mx-auto mb-5 h-14 w-14 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-sm leading-relaxed text-white/70">
                    {item.review}
                  </p>

                  <div className="mt-6">
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5ebc]">
                      {item.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5ebc]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
