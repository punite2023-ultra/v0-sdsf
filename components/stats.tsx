import { Star, Users } from "lucide-react"

const stats = [
  {
    value: "300+",
    label: "SUCCESSFUL PROJECTS",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur.",
  },
  {
    value: "200+",
    label: "BRAND GROW GLOBALLY",
    description: "Aptent malesuada sit conubia tincidunt iaculis faucibus. Arcu et aliquet ad.",
  },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl lg:text-6xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Highlight */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <p className="text-primary text-sm tracking-wider mb-4">MEET OUR TALENTS</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              CELEBRATING EXCELLENCE IN CREATIVITY.
            </h3>

            {/* Featured Team Member */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">DANIEL LAUDIT</h4>
                  <p className="text-muted-foreground text-sm">Creative Director</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-foreground font-medium">6.4M</span>
                <span className="text-muted-foreground text-sm">FOLLOWERS</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit leo at leo feugiat, in ultrices nunc sollicitudin. Nunc sit amet ligula a sapien porttitor commodo ac sed lorem cras nec velit vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
