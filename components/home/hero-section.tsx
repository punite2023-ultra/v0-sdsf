"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Award-Winning Digital Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              We Create{" "}
              <span className="text-primary relative">
                Digital
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
              <br />
              Experiences
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
              We craft exceptional digital solutions that elevate brands and drive meaningful results. From strategy to execution, we bring your vision to life.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </div>
                <span className="font-medium">Watch Showreel</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border animate-fade-in-up delay-400">
              <div>
                <div className="text-3xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
                  alt="Creative team collaborating"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-2xl shadow-xl z-20 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Fast Delivery</div>
                    <div className="text-xs text-muted-foreground">On-time, every time</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl z-20 hidden md:block" style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card overflow-hidden">
                        <Image
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt=""
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Expert Team</div>
                    <div className="text-xs text-muted-foreground">50+ Specialists</div>
                  </div>
                </div>
              </div>
              
              {/* Background Shape */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-primary/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-card rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center z-10 hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <Play className="w-16 h-16" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
