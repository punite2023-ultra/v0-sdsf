"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeroSlide {
  id: number
  image: string
  alt: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-fjYPZI3cMXM4AaIPib3RH6MKsevhC0.png",
    alt: "Girl with headphones"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&h=800&fit=crop",
    alt: "Team collaboration"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=800&fit=crop",
    alt: "Creative work"
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoplay(false)
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-between overflow-hidden pt-24"
      style={{
        backgroundImage: `url(/images/hero-bg.jpg)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0047e6]/80 via-[#0047e6]/60 to-transparent z-5" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
        
        {/* Left Column - Team Info & Stats */}
        <div className="hidden lg:flex flex-col w-1/5 gap-12 relative z-20">
          {/* Team Section with animation */}
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Avatar Images */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white/10 hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Team member"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Divider Line */}
            <div className="h-0.5 w-16" style={{ backgroundColor: '#CCFF00' }} />
            
            {/* Team Text */}
            <h3 className="text-white font-bold text-xs leading-tight max-w-xs uppercase tracking-wide">
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </h3>
          </div>

          {/* Stats with staggered animation */}
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 hover:translate-x-2 transition-transform duration-300">
              <div className="text-4xl font-black text-white leading-none">500 +</div>
              <div className="text-xs font-bold text-white/90 uppercase">HAPPY CLIENT</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2 hover:translate-x-2 transition-transform duration-300">
              <div className="text-4xl font-black text-white leading-none">125 +</div>
              <div className="text-xs font-bold text-white/90 uppercase">PROJECT DONE</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>
          </div>
        </div>

        {/* Center - Large Hero Image & Text with Slider */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Hero Image Container with Slider */}
          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[650px] rounded-3xl overflow-hidden group">
            {/* Slider Images */}
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="w-full h-full object-cover"
                  priority={index === currentSlide}
                />
              </div>
            ))}

            {/* Geometric Overlay Rectangles with Yellow Border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-12 left-12 w-16 h-24 border-4 border-yellow-300 animate-pulse" />
              <div className="absolute top-1/3 right-24 w-20 h-16 border-4 border-yellow-300 animate-pulse delay-300" />
              <div className="absolute bottom-20 left-1/4 w-24 h-20 border-4 border-yellow-300 animate-pulse delay-500" />
              <div className="absolute bottom-32 right-16 w-12 h-16 border-3 border-yellow-300 animate-pulse delay-700" />
            </div>

            {/* Large Text Overlay - CREATIVE AGENCY */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center leading-none uppercase transition-all duration-1000 transform"
                style={{ 
                  color: '#CCFF00',
                  textShadow: '0 6px 30px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '-0.02em',
                  wordSpacing: '9999px'
                }}
              >
                CREATIVE
                <br />
                AGENCY
              </h1>
            </div>

            {/* Decorative Star Circle */}
            <div className="absolute -right-3 top-8 w-16 h-16 rounded-full border-3 border-yellow-300 flex items-center justify-center z-20 hidden lg:flex animate-spin" style={{ animationDuration: '20s' }}>
              <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* Slider Navigation - Left */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider Navigation - Right */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-yellow-300 w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Description & CTA */}
        <div className="hidden lg:flex flex-col w-1/5 gap-6 relative z-20 animate-in fade-in slide-in-from-right-8 duration-1000">
          <p className="text-white/90 text-sm leading-relaxed font-light">
            Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          <Button 
            asChild 
            className="rounded-lg px-6 py-3 bg-white text-blue-600 hover:bg-yellow-300 font-bold text-sm uppercase border-0 group w-fit shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#FFFFFF', color: '#0047e6' }}
          >
            <Link href="/contact" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="absolute bottom-6 left-4 right-4 lg:hidden text-center z-20">
        <Button 
          asChild 
          className="w-full rounded-lg px-6 py-3 bg-white text-blue-600 hover:bg-yellow-300 font-bold text-sm uppercase border-0 shadow-lg"
          style={{ backgroundColor: '#FFFFFF', color: '#0047e6' }}
        >
          <Link href="/contact" className="flex items-center justify-center gap-2">
            GET STARTED
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
