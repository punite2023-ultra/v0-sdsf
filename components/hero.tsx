"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSlide {
  id: number
  image: string
  alt: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png",  // Corrected path
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Bg-2.jpg)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        paddingTop: '100px',
        minHeight: '100vh'
      }}
    >
      {/* Main Container */}
      <div 
        className="relative w-full h-full flex justify-between items-center px-6 lg:px-12"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          gap: '32px'
        }}
      >
        {/* LEFT COLUMN */}
        <div 
          className="hidden lg:flex flex-col flex-shrink-0 relative z-20"
          style={{ width: '120px', paddingTop: '20px' }}
        >
          {/* Team Avatars */}
          <div className="flex -space-x-2 mb-3" style={{ animation: 'fadeInDown 1s ease-out 0.4s backwards' }}>
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="Team member"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-0.5 w-16 mb-3" style={{ backgroundColor: '#CCFF00', animation: 'fadeInDown 1s ease-out 0.4s backwards' }} />

          {/* Team Text */}
          <h3 
            className="text-white font-bold text-xs leading-tight uppercase tracking-wide max-w-xs"
            style={{ 
              fontFamily: 'Anton, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.2',
              animation: 'fadeInDown 1s ease-out 0.4s backwards'
            }}
          >
            THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
          </h3>

          {/* Stats */}
          <div className="flex flex-col gap-8 mt-12" style={{ animation: 'fadeInLeft 1s ease-out 0.8s backwards' }}>
            <div>
              <div className="text-4xl font-black text-white leading-none mb-1">500 +</div>
              <div className="text-xs font-bold text-white/90 uppercase mb-2">HAPPY CLIENT</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>
            <div>
              <div className="text-4xl font-black text-white leading-none mb-1">125 +</div>
              <div className="text-xs font-bold text-white/90 uppercase mb-2">PROJECT DONE</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Flexible */}
        <div className="relative flex-1 flex items-center justify-center" style={{ zIndex: 1, minHeight: '600px' }}>
          {/* Slider Container */}
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{
              borderRadius: '25px',
              maxWidth: '100%'
            }}
          >
            {/* Slider Images */}
            {heroSlides.map((slide, index) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                fill
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === currentSlide}
              />
            ))}

            {/* Large Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
              <h1 
                className="text-center leading-none uppercase"
                style={{
                  fontSize: 'clamp(60px, 20vw, 280px)',
                  fontWeight: '900',
                  color: '#CCFF00',
                  fontFamily: 'Anton, sans-serif',
                  textShadow: '0 6px 30px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                  wordSpacing: '9999px',
                  animation: 'slideInLeft 1s ease-out'
                }}
              >
                CREATIVE
                <br />
                AGENCY
              </h1>
            </div>

            {/* Decorative Star Circle */}
            <div 
              className="absolute flex items-center justify-center z-20 hidden lg:flex"
              style={{
                right: '-12px',
                top: '32px',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '3px solid #CCFF00',
                animation: 'spin 20s linear infinite'
              }}
            >
              <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div 
          className="hidden lg:flex flex-col flex-shrink-0 relative z-20"
          style={{ 
            width: '240px',
            paddingTop: '20px',
            alignItems: 'flex-start',
            animation: 'fadeInUp 1s ease-out 1.2s backwards'
          }}
        >
          <p 
            className="text-white/90 text-sm leading-relaxed font-light mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              lineHeight: '1.6',
              maxWidth: '90%',
              textAlign: 'justify'
            }}
          >
            Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-bold uppercase transition-all duration-500 hover:scale-95"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0047e6',
              border: 'none',
              borderRadius: '24px',
              fontFamily: 'Anton, sans-serif',
              fontSize: '14px'
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={18} style={{ color: '#0047e6' }} />
          </button>
        </div>
      </div>
    </section>
  )
}
