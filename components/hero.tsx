"use client"

import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Decorative Stars */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <Star className="w-6 h-6 text-primary fill-primary animate-pulse" />
      </div>
      <div className="absolute top-48 right-40 hidden lg:block">
        <Star className="w-4 h-4 text-primary/60 fill-primary/60" />
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <Star className="w-5 h-5 text-primary fill-primary animate-pulse" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground">DIGITAL SOLUTIONS & BRANDING</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-primary">STAR</span>
              <Star className="inline w-8 h-8 text-primary fill-primary mx-2 align-middle" />
              <span className="text-foreground font-light">star</span>
              <br />
              <span className="text-foreground">DIGITAL</span>
              <br />
              <span className="text-foreground">SOLUTIONS</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Designing for seamless & enjoyable interactions. We create impactful digital experiences that elevate your brand.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-secondary">
                View Portfolio
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="text-xs text-muted-foreground border border-border rounded-full px-4 py-2">
                CONTENT CREATION
              </span>
              <span className="text-xs text-muted-foreground border border-border rounded-full px-4 py-2">
                BRANDING
              </span>
              <span className="text-xs text-muted-foreground border border-border rounded-full px-4 py-2">
                MARKETING
              </span>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30" />
              
              {/* Inner Circle */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Star className="w-16 h-16 text-primary fill-primary mx-auto" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">CREATIVE</p>
                    <p className="text-2xl font-bold text-foreground">DIGITAL</p>
                    <p className="text-sm text-muted-foreground">SOLUTION</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground">Successful Campaigns</p>
                <p className="text-2xl font-bold text-primary">95%</p>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground">Innovative Design</p>
                <p className="text-2xl font-bold text-primary">85%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
