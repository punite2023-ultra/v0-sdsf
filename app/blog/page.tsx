"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

export default function BlogPage() {
  const { language } = useLanguage()

  const categories =
    language === "en"
      ? ["All", "Branding", "Marketing", "E-Commerce", "Strategy"]
      : ["全部", "品牌", "营销", "电商", "策略"]

  const featuredPost = {
    category: language === "en" ? "Featured" : "精选",
    title:
      language === "en"
        ? "How Strategic Content Builds Stronger Digital Brands"
        : "战略性内容如何打造更强的数字品牌",
    excerpt:
      language === "en"
        ? "Discover how thoughtful storytelling, consistent creative direction, and platform-specific execution can help brands grow with clarity and impact."
        : "了解有策略的内容表达、一致的创意方向以及平台化执行，如何帮助品牌更清晰、更有影响力地成长。",
    author: language === "en" ? "Star Digital Team" : "Star Digital 团队",
    date: language === "en" ? "March 2026" : "2026年3月",
    readTime: language === "en" ? "6 min read" : "阅读约6分钟",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1400&auto=format&fit=crop&q=80",
    href: "/blog/strategic-content-builds-brands",
  }

  const posts = [
    {
      category: language === "en" ? "Branding" : "品牌",
      title:
        language === "en"
          ? "5 Ways to Make Your Brand Look More Premium Online"
          : "让品牌在线上看起来更高端的5种方法",
      excerpt:
        language === "en"
          ? "Small design decisions can change how your audience sees your business."
          : "一些小小的设计决定，就能显著改变受众对您品牌的感受。",
      author: language === "en" ? "Creative Team" : "创意团队",
      date: language === "en" ? "March 2026" : "2026年3月",
      readTime: language === "en" ? "4 min read" : "阅读约4分钟",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop&q=80",
      href: "/blog/premium-brand-online",
    },
    {
      category: language === "en" ? "Marketing" : "营销",
      title:
        language === "en"
          ? "Why Content Consistency Matters More Than Volume"
          : "为什么内容一致性比数量更重要",
      excerpt:
        language === "en"
          ? "Posting more is not always better. Consistency creates stronger trust and recall."
          : "发布得更多不一定更好，一致性才更能建立信任和品牌记忆。",
      author: language === "en" ? "Marketing Team" : "营销团队",
      date: language === "en" ? "March 2026" : "2026年3月",
      readTime: language === "en" ? "5 min read" : "阅读约5分钟",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
      href: "/blog/content-consistency",
    },
    {
      category: language === "en" ? "E-Commerce" : "电商",
      title:
        language === "en"
          ? "Improving Your Product Pages for Better Conversion"
          : "优化产品页面以提升转化率",
      excerpt:
        language === "en"
          ? "Clear messaging, stronger visuals, and better hierarchy can increase buyer confidence."
          : "更清晰的文案、更强的视觉表达和更好的信息层级，能有效提升购买信心。",
      author: language === "en" ? "E-Commerce Team" : "电商团队",
      date: language === "en" ? "March 2026" : "2026年3月",
      readTime: language === "en" ? "5 min read" : "阅读约5分钟",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&auto=format&fit=crop&q=80",
      href: "/blog/better-product-pages",
    },
    {
      category: language === "en" ? "Strategy" : "策略",
      title:
        language === "en"
          ? "What a Better Digital Funnel Looks Like in 2026"
          : "2026年更高效的数字转化漏斗应该是什么样子",
      excerpt:
        language === "en"
          ? "From awareness to conversion, every stage needs clearer intent and smarter content."
          : "从认知到转化，每个阶段都需要更明确的目标与更聪明的内容布局。",
      author: language === "en" ? "Strategy Team" : "策略团队",
      date: language === "en" ? "March 2026" : "2026年3月",
      readTime: language === "en" ? "7 min read" : "阅读约7分钟",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      href: "/blog/digital-funnel-2026",
    },
  ]

  return (
    <>
      <Navigation />

      <section className="pt-32 pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {language === "en" ? "Insights & Articles" : "洞察与文章"}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {language === "en"
                ? "Ideas That Help Brands Grow"
                : "帮助品牌增长的想法与观点"}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Explore strategies, creative thinking, and practical insights across branding, content, digital marketing, and e-commerce."
                : "探索关于品牌、内容、数字营销与电商的策略、创意思路与实用洞察。"}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 rounded-full border text-sm text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href={featuredPost.href}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center rounded-3xl border overflow-hidden bg-card hover:shadow-lg transition-shadow"
            >
              <div className="relative min-h-[320px] lg:min-h-[480px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 lg:p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {featuredPost.category}
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <div className="mt-8 inline-flex items-center text-sm font-medium">
                  {language === "en" ? "Read Article" : "阅读文章"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.05}>
                <Link
                  href={post.href}
                  className="group block rounded-3xl overflow-hidden border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-[260px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
                      {post.category}
                    </p>

                    <h3 className="text-2xl font-bold leading-snug">{post.title}</h3>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="mt-6 inline-flex items-center text-sm font-medium">
                      {language === "en" ? "Read More" : "阅读更多"}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-muted/40 border p-8 md:p-10 lg:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === "en"
                  ? "Subscribe for New Insights"
                  : "订阅获取最新洞察"}
              </h2>

              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Get updates on branding, content, e-commerce, and digital growth strategies straight to your inbox."
                  : "将有关品牌、内容、电商与数字增长策略的最新内容直接发送到您的邮箱。"}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder={
                    language === "en" ? "Enter your email address" : "请输入您的邮箱地址"
                  }
                  className="rounded-full h-12"
                />
                <Button className="rounded-full h-12 px-6">
                  {language === "en" ? "Subscribe" : "订阅"}
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                {language === "en"
                  ? "No spam. Only useful updates."
                  : "无垃圾邮件，只发送有价值的内容。"}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
