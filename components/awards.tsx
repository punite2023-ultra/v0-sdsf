import { Award, ArrowUpRight, Star } from "lucide-react"

const awards = [
  {
    organization: "MARKETING INNOVATORS GUILD",
    award: "2025 Certification—Content Management",
  },
  {
    organization: "GLOBAL DESIGN FORUM",
    award: "2025 BEST DIGITAL CAMPAIGN 2022",
  },
  {
    organization: "CREATIVE LEADERS SUMMIT",
    award: "AWARD FOR OUTSTANDING INNOVATION",
  },
]

export default function Awards() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-wider mb-4">OUR WORK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            CELEBRATING EXCELLENCE<br />IN CREATIVITY.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit leo at leo feugiat, in ultrices nunc sollicitudin.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Star */}
              <Star className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 fill-primary/5" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                <Award className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">
                {item.organization}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                {item.award}
              </p>

              {/* CTA */}
              <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all relative z-10">
                discover more
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
