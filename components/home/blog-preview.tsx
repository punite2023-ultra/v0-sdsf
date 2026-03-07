import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2026",
    excerpt: "Explore the latest design trends shaping the digital landscape and how they can elevate your brand.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
    date: "Mar 5, 2026",
    href: "/blog/future-web-design-trends",
  },
  {
    id: 2,
    title: "How to Build a Strong Brand Identity",
    excerpt: "Learn the essential steps to create a memorable brand that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=500&fit=crop",
    category: "Branding",
    date: "Mar 1, 2026",
    href: "/blog/build-strong-brand-identity",
  },
  {
    id: 3,
    title: "Maximizing ROI with Digital Marketing",
    excerpt: "Discover proven strategies to get the most out of your digital marketing investments.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    category: "Marketing",
    date: "Feb 25, 2026",
    href: "/blog/maximizing-roi-digital-marketing",
  },
]

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Blog</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                Latest Insights
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Articles
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <article className="group">
                <Link href={post.href} className="block">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 img-zoom">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
