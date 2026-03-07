import { Button } from "@/components/ui/button"
import { ArrowUpRight, Star } from "lucide-react"

const portfolioItems = [
  {
    category: "Content Creation & Branding",
    brand: "GARNIER",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    category: "E-Commerce Strategy & Management",
    brand: "COLGATE",
    description: "From startups to global brands, we've created impactful designs that tell stories.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    category: "Social Media Marketing",
    brand: "UNILEVER",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus.",
    color: "from-blue-500/20 to-blue-600/5",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-sm tracking-wider mb-4">OUR WORK</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              OUR WORK SPEAKS<br />FOR ITSELF
            </h2>
          </div>
          <Button variant="outline" className="rounded-full px-8 py-6 border-border text-foreground hover:bg-secondary w-fit">
            VIEW OUR PORTFOLIO
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} relative flex items-center justify-center`}>
                <div className="text-center">
                  <Star className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground/80">{item.brand}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-primary tracking-wider mb-2">{item.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.brand}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            From startups to global brands, we&apos;ve created impactful designs that tell stories.
          </p>
        </div>
      </div>
    </section>
  )
}
