"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const newsEvents = [
  {
    id: 1,
    type: "Event",
    title: "TikTok Shop Growth Summit 2026",
    subtitle: "Live Commerce & Creator Ecosystems",
    description:
      "A focused event on platform growth, creator activation, affiliate systems, and conversion-led campaign strategies for modern brands.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    date: "May 12, 2026",
    location: "Manila, Philippines",
    tags: ["Live Commerce", "Creators", "Growth"],
    cta: "View Event",
  },
  {
    id: 2,
    type: "News",
    title: "Star Digital Expands Multi-Channel Services",
    subtitle: "Scaling Content, Commerce, and Partnerships",
    description:
      "An update on how Star Digital Solutions is expanding its support across affiliate marketing, creator management, and e-commerce execution.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    date: "April 28, 2026",
    location: "Digital Release",
    tags: ["Agency Update", "Affiliate", "E-commerce"],
    cta: "Read Article",
  },
  {
    id: 3,
    type: "Event",
    title: "Brand Campaign Strategy Workshop",
    subtitle: "Planning Campaigns That Convert",
    description:
      "A hands-on workshop for brands looking to connect strategy, creators, and commerce into one measurable campaign system.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    date: "June 03, 2026",
    location: "Singapore",
    tags: ["Workshop", "Strategy", "Campaigns"],
    cta: "View Event",
  },
  {
    id: 4,
    type: "News",
    title: "Inside the Future of Affiliate-Driven Growth",
    subtitle: "Where Performance Meets Partnership",
    description:
      "A perspective piece exploring the growing role of affiliates, creators, and platform-native commerce in digital brand scaling.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    date: "May 20, 2026",
    location: "Editorial",
    tags: ["Affiliate", "Insights", "Performance"],
    cta: "Read Article",
  },
  {
    id: 5,
    type: "Event",
    title: "Creator Network Activation Forum",
    subtitle: "Building Stronger Talent Ecosystems",
    description:
      "A gathering centered on creator partnerships, brand collaboration systems, and scalable network management for long-term performance.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    date: "July 15, 2026",
    location: "Bangkok, Thailand",
    tags: ["Creators", "MCN", "Partnerships"],
    cta: "View Event",
  },
  {
    id: 6,
    type: "News",
    title: "Why Commerce-Led Content Is Winning",
    subtitle: "A New Era of Digital Brand Growth",
    description:
      "An editorial on why brands are moving beyond awareness-focused content and toward systems designed to convert, scale, and sustain growth.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    date: "August 01, 2026",
    location: "Industry Report",
    tags: ["Content", "Commerce", "Conversion"],
    cta: "Read Article",
  },
]

export default function NewsEventsPage() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          eyebrow: "新闻与活动",
          title: "最新动态",
          description:
            "探索 Star Digital Solutions 的最新新闻、活动、行业观点与品牌增长更新。",
          sectionEyebrow: "精选更新",
          sectionTitle: "新闻、活动与行业亮点",
          metaDate: "日期",
          metaLocation: "地点",
          ctaTitle: "准备好与我们共同成长了吗？",
          ctaDescription:
            "从品牌活动到数字增长执行，我们帮助品牌通过内容、商业与创作者生态实现更强的市场表现。",
          primary: "联系我们",
          secondary: "查看服务",
        }
      : {
          eyebrow: "News & Events",
          title: "Latest Updates",
          description:
            "Explore the latest news, events, industry insights, and growth updates from Star Digital Solutions.",
          sectionEyebrow: "Featured Updates",
          sectionTitle: "News, Events & Industry Highlights",
          metaDate: "Date",
          metaLocation: "Location",
          ctaTitle: "Ready to Grow With Us?",
          ctaDescription:
            "From brand campaigns to digital growth execution, we help brands move through content, commerce, and creator ecosystems with more impact.",
          primary: "Contact Us",
          secondary: "Explore Services",
        }

  return (
    <>
      <Navigation />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(126,34,206,0.22),transparent_45%),linear-gradient(180deg,#0A0118_0%,#0B0614_60%,#0A0118_100%)] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
          <div className="container relative mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 backdrop-blur-sm md:px-10 lg:px-14">
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  {t.eyebrow}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="mt-4 text-4xl font-extrabold uppercase leading-tight md:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {t.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {t.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Grid Header */}
        <section className="pt-14 pb-4 lg:pt-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {t.sectionEyebrow}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className="mt-3 text-3xl font-extrabold uppercase md:text-4xl"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {t.sectionTitle}
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-20 pt-6 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {newsEvents.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 100}>
                  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]">
                    <div className="relative h-[380px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1000}
                        height={1200}
                        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/55 to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {item.type}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="mb-4 inline-block rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {item.subtitle}
                        </div>

                        <h3 className="text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h3>
                      </div>

                      {/* Hover Panel */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-[78%] border-t border-white/10 bg-[#0c0618]/95 p-5 backdrop-blur-xl transition-transform duration-700 group-hover:translate-y-0">
                        <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4">
                          <div>
                            <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-primary/90">
                              {t.metaDate}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-white/90">
                              <CalendarDays className="h-4 w-4 text-primary" />
                              <span>{item.date}</span>
                            </div>
                          </div>

                          <div>
                            <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-primary/90">
                              {t.metaLocation}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-white/90">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-transform duration-300 hover:translate-x-1"
                        >
                          {item.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#6f0b95] via-[#8a08a6] to-[#6f0b95] px-8 py-16 md:px-14 md:py-20">
              <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10" />

              <div className="relative mx-auto max-w-4xl text-center">
                <ScrollReveal>
                  <h2
                    className="text-3xl font-extrabold uppercase text-white md:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {t.ctaTitle}
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                    {t.ctaDescription}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-[#7b029e] px-8 text-white transition-colors duration-300 hover:bg-[#682e94]"
                    >
                      <Link href="/contact">{t.primary}</Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 text-white transition-colors duration-300 hover:bg-[#682e94]"
                      style={{ backgroundColor: "#c0485e" }}
                    >
                      <Link href="/services">{t.secondary}</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
