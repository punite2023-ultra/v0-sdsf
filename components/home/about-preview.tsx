import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  "Strategic approach to every project",
  "Experienced team of 50+ specialists",
  "Transparent communication & reporting",
  "Results-driven methodology",
]

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden img-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                      alt="Team meeting"
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden img-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                      alt="Creative workspace"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden img-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                      alt="Team collaboration"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden img-zoom">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop"
                      alt="Design process"
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: '900' }}>
                We Transform Ideas Into Digital Reality
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Since 2009, we have been helping businesses of all sizes achieve their digital goals. Our passionate team combines creativity with technical expertise to deliver solutions that make an impact.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in building lasting partnerships with our clients. Every project we undertake is approached with dedication, innovation, and a commitment to excellence that sets us apart.
              </p>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal delay={400}>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
