import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const progressBars = [
  { label: "SUCCESSFUL CAMPAIGN LAUNCHES", value: 95 },
  { label: "INNOVATIVE DESIGN", value: 85 },
  { label: "HIGH IMPACT PROJECT", value: 100 },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm tracking-wider mb-4">WHAT WE DO</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                CREATIVITY MEETS STRATEGY.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {progressBars.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground font-medium tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-sm text-primary font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Learn more about us
            </Button>
          </div>

          {/* Right Side - Marquee */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 overflow-hidden">
              {/* Scrolling Text */}
              <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap mb-8">
                <div className="animate-marquee flex items-center gap-4">
                  <span className="text-muted-foreground text-sm">Social Media Marketing</span>
                  <Star className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">E-Commerce Strategy & Management</span>
                  <Star className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Influencer and Affiliation</span>
                  <Star className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Social Media Marketing</span>
                  <Star className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">E-Commerce Strategy & Management</span>
                  <Star className="w-3 h-3 text-primary fill-primary flex-shrink-0" />
                </div>
              </div>

              {/* Experience Stats */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">10+</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">OVER 10 YEARS OF EXPERIENCE</p>
                    <p className="text-muted-foreground text-sm">Industry leading expertise</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">TRUSTED BY GLOBAL BRANDS</p>
                    <p className="text-muted-foreground text-sm">
                      Consectetuer adipiscing congue aptent placera senec efficitur aptent malesuada sit conubia tincidunt iaculis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
