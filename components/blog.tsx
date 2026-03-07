import { ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "How to Transform Ideas into Winning Campaigns",
    date: "December 27, 2024",
    category: "Innovative",
  },
  {
    title: "Future-Proof Marketing Strategies for Agencies",
    date: "December 27, 2024",
    category: "Innovative",
  },
  {
    title: "The Impact of Design on Consumer Engagement",
    date: "December 27, 2024",
    category: "Innovative",
  },
]

export default function Blog() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-sm tracking-wider mb-4">OUR BLOG</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              STAY INSPIRED WITH<br />OUR LATEST INSIGHTS
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit leo at leo feugiat, in ultrices nunc sollicitudin.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 py-6 border-border text-foreground hover:bg-secondary w-fit">
            view all blog
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="aspect-[16/10] bg-secondary relative flex items-center justify-center">
                <Star className="w-12 h-12 text-primary/30" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-xs text-primary">{post.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
