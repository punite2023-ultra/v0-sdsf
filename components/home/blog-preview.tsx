"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

const blogPosts = [
  {
    id: 1,
    titleEn: "Lorem Ipsum Dolor Sit Amet",
    titleZh: "示例中文标题一",
    excerptEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    excerptZh: "这是一段中文占位文字，用于展示博客摘要内容。",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    categoryEn: "Design",
    categoryZh: "设计",
    dateEn: "Mar 5, 2026",
    dateZh: "2026年3月5日",
    href: "/blog/future-web-design-trends",
  },
  {
    id: 2,
    titleEn: "Consectetur Adipiscing Elit",
    titleZh: "示例中文标题二",
    excerptEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    excerptZh: "这是一段中文占位文字，用于展示博客摘要内容。",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=500&fit=crop",
    categoryEn: "Branding",
    categoryZh: "品牌",
    dateEn: "Mar 1, 2026",
    dateZh: "2026年3月1日",
    href: "/blog/build-strong-brand-identity",
  },
  {
    id: 3,
    titleEn: "Sed Do Eiusmod Tempor",
    titleZh: "示例中文标题三",
    excerptEn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    excerptZh: "这是一段中文占位文字，用于展示博客摘要内容。",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    categoryEn: "Marketing",
    categoryZh: "营销",
    dateEn: "Feb 25, 2026",
    dateZh: "2026年2月25日",
    href: "/blog/maximizing-roi-digital-marketing",
  },
]

export function BlogPreview() {
  const { language } = useLanguage()

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {language === "en" ? "Our Blog" : "我们的博客"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {language === "en" ? "Latest Insights" : "最新见解"}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              {language === "en" ? "View All Articles" : "查看所有文章"}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const title = language === "en" ? post.titleEn : post.titleZh
            const excerpt = language === "en" ? post.excerptEn : post.excerptZh
            const category =
              language === "en" ? post.categoryEn : post.categoryZh
            const date = language === "en" ? post.dateEn : post.dateZh

            return (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className="group">
                  <Link href={post.href} className="block">
                    <div className="relative rounded-2xl overflow-hidden mb-6 img-zoom">
                      <Image
                        src={post.image}
                        alt={title}
                        width={800}
                        height={500}
                        className="w-full aspect-[16/10] object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {date}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {excerpt}
                    </p>
                  </Link>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
