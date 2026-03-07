import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden relative">
              {/* Abstract Design Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                  <div className="absolute inset-6 rounded-full border-2 border-primary/30" />
                  <div className="absolute inset-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-12 h-12 text-primary fill-primary" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8">
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              <div className="absolute bottom-8 left-8">
                <Star className="w-4 h-4 text-primary/60 fill-primary/60" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm tracking-wider mb-4">WHO WE ARE</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                TRANSFORMING IDEAS INTO MEMORABLE BRAND EXPERIENCES.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                </div>
                <span className="text-foreground">Over 10 years of industry experience</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                </div>
                <span className="text-foreground">Trusted by global brands worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                </div>
                <span className="text-foreground">300+ successful projects delivered</span>
              </li>
            </ul>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
