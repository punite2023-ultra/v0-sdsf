import { Palette, Megaphone, Sparkles, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "BRAND BUILDING & STRATEGY",
    description: "Lorem ipsum do adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
  },
  {
    icon: Megaphone,
    title: "MARKETING & CAMPAIGN",
    description: "Lorem ipsum do adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
  },
  {
    icon: Sparkles,
    title: "DESIGNING FOR SEAMLESS & ENJOYABLE INTERACTIONS",
    description: "Lorem ipsum do adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-wider mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            CREATIVE DIGITAL SOLUTION.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
