import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Blog | Aurelia Creative Agency",
  description: "Read our latest articles about design, development, digital marketing, and creative trends.",
}

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2024",
    excerpt: "Explore the latest web design trends that are shaping the digital landscape and how to incorporate them into your website.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Design",
    author: "Sarah Anderson",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    slug: "web-design-trends-2024",
  },
  {
    id: 2,
    title: "The Future of Web Development: Latest Technologies",
    excerpt: "Discover the cutting-edge technologies that are revolutionizing web development and improving user experiences.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    category: "Development",
    author: "Marcus Chen",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    slug: "future-web-development",
  },
  {
    id: 3,
    title: "Mastering SEO: A Complete Guide for 2024",
    excerpt: "Learn the essential SEO strategies and techniques that will help your website rank higher in search results.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db6d?w=800&h=600&fit=crop",
    category: "Marketing",
    author: "Emma Thompson",
    date: "Mar 5, 2024",
    readTime: "12 min read",
    slug: "mastering-seo-2024",
  },
  {
    id: 4,
    title: "User Experience Design: Beyond Aesthetics",
    excerpt: "Explore how good UX design goes beyond looks to create meaningful and engaging user interactions.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Design",
    author: "David Kim",
    date: "Feb 28, 2024",
    readTime: "9 min read",
    slug: "ux-design-guide",
  },
  {
    id: 5,
    title: "E-Commerce Optimization: Increase Your Conversions",
    excerpt: "Practical tips and strategies to optimize your e-commerce platform and boost sales.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    category: "Marketing",
    author: "Jessica Liu",
    date: "Feb 20, 2024",
    readTime: "11 min read",
    slug: "ecommerce-optimization",
  },
  {
    id: 6,
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for architecting and building web applications that can scale with your business.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db6d?w=800&h=600&fit=crop",
    category: "Development",
    author: "Alex Rivera",
    date: "Feb 15, 2024",
    readTime: "13 min read",
    slug: "scalable-web-apps",
  },
]

const categories = ["All", "Design", "Development", "Marketing"]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Blog</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Insights & Updates
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Stay updated with the latest trends, tips, and insights about digital design, development, and marketing.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden mb-20 group cursor-pointer">
                <div className="relative h-96 md:h-[500px]">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                  <div>
                    <div className="inline-block text-xs font-medium text-primary-foreground uppercase tracking-wider mb-4 bg-primary/80 px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <div className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden img-zoom">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-primary text-primary-foreground rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div>{post.readTime}</div>
                      </div>

                      <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary group/btn">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                          Read Article
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <div className="rounded-3xl bg-primary p-12 lg:p-16 text-center text-primary-foreground">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-8">
                    Get the latest articles and insights delivered directly to your inbox.
                  </p>

                  <form className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-primary-foreground text-foreground placeholder:text-muted-foreground rounded-full px-6 py-3 flex-1"
                      required
                    />
                    <Button className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Subscribe
                    </Button>
                  </form>

                  <p className="text-xs text-primary-foreground/70 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
