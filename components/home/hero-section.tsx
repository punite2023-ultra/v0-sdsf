"use client"

import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSlide {
  id: number
  title: string
  image: string
  description: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "CREATIVE\nAGENCY",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png",
    description: "Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo."
  },
  {
    id: 2,
    title: "DESIGN\nEXCELLENCE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png",
    description: "We create stunning visual experiences that captivate and inspire your audience with innovation."
  },
  {
    id: 3,
    title: "DIGITAL\nSOLUTIONS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png",
    description: "Transform your brand with cutting-edge digital strategies that drive growth and engagement."
  }
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: 'url(https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Bg-2.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        paddingTop: '100px',
        minHeight: '100vh'
      }}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Main Container */}
      <div 
        className="relative w-full flex justify-between items-center"
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          paddingLeft: '0',
          paddingRight: '0',
          minHeight: '600px'
        }}
      >
        {/* LEFT COLUMN - 12% width */}
        <div 
          className="hidden lg:flex flex-col justify-center relative z-20"
          style={{ 
            width: '12%',
            paddingTop: '20px',
            paddingLeft: '0',
            animation: 'fadeInDown 1s ease-out 0.4s backwards'
          }}
        >
          {/* Team Avatar Images */}
          <div className="flex -space-x-2 mb-3">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt={`Team member ${i}`}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* Yellow Divider */}
          <div 
            className="h-0.5 mb-3"
            style={{ 
              width: '65px',
              backgroundColor: '#CCFF00',
              animation: 'slideInLeft 1s ease-out'
            }}
          />

          {/* Team Heading Text */}
          <h3 
            className="text-white uppercase leading-tight tracking-tight mb-12"
            style={{ 
              fontFamily: 'Anton, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.2',
              maxWidth: '120px',
              animation: 'fadeInDown 1s ease-out 0.4s backwards',
              transform: `translateY(${scrollY * -0.15}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
          </h3>

          {/* Stats Container */}
          <div 
            style={{ 
              animation: 'fadeInLeft 1s ease-out 0.8s backwards',
              transform: `translateY(${scrollY * -0.25}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Stat 1 */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span 
                  className="text-white leading-none"
                  style={{
                    fontSize: '60px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  500
                </span>
                <span 
                  className="text-yellow-300 font-semibold"
                  style={{
                    fontSize: '32px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-white uppercase mb-2"
                style={{
                  fontSize: '20px',
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}
              >
                HAPPY CLIENT
              </div>
              <div className="h-0.5" style={{ width: '65px', backgroundColor: '#CCFF00' }} />
            </div>

            {/* Yellow Divider */}
            <div className="h-0.5 mb-8" style={{ width: '65px', backgroundColor: '#CCFF00' }} />

            {/* Stat 2 */}
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span 
                  className="text-white leading-none"
                  style={{
                    fontSize: '60px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  125
                </span>
                <span 
                  className="text-yellow-300 font-semibold"
                  style={{
                    fontSize: '32px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-white uppercase mb-2"
                style={{
                  fontSize: '20px',
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}
              >
                PROJECT DONE
              </div>
              <div className="h-0.5" style={{ width: '65px', backgroundColor: '#CCFF00' }} />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Hero Image & Large Text Slider */}
        <div 
          className="flex-1 relative flex items-center justify-center z-10"
          style={{ 
            minHeight: '600px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Slides Container */}
          {heroSlides.map((s, idx) => (
            <div
              key={s.id}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000"
              style={{
                opacity: idx === currentSlide ? 1 : 0,
                pointerEvents: idx === currentSlide ? 'auto' : 'none'
              }}
            >
              {/* Image with Parallax */}
              <div 
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                style={{
                  transform: `translateY(${scrollY * -0.1}px) scale(${1 + scrollY * 0.00005})`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  width={500}
                  height={700}
                  className="object-contain"
                  priority={idx === 0}
                  style={{
                    maxHeight: '100%',
                    width: 'auto',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Text Overlay with Parallax */}
              <h1 
                className="absolute inset-0 flex items-center justify-center z-10 text-center leading-tight uppercase font-black"
                style={{
                  fontSize: 'clamp(80px, 25vw, 360px)',
                  color: '#CCFF00',
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: '400',
                  textShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                  letterSpacing: '-5px',
                  lineHeight: '1',
                  wordSpacing: '9999px',
                  animation: idx === currentSlide ? 'slideInLeft 1s ease-out' : 'none',
                  transform: `translateY(${scrollY * -0.2}px)`,
                  transition: 'transform 0.1s ease-out',
                  maxWidth: '90%',
                  margin: '0 auto',
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                {s.title}
              </h1>
            </div>
          ))}

          {/* Rotating Circle Star */}
          <div 
            className="absolute hidden lg:flex items-center justify-center z-20"
            style={{
              right: '5%',
              top: '10%',
              width: '80px',
              height: '80px',
              border: '3px solid #CCFF00',
              borderRadius: '50%',
              transform: `rotate(${scrollY * 0.3}deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <svg className="w-10 h-10" fill="#CCFF00" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Decorative Yellow Boxes */}
          <div 
            className="absolute hidden lg:block z-20"
            style={{
              left: '15%',
              top: '25%',
              width: '60px',
              height: '80px',
              border: '2px solid #CCFF00',
              borderRadius: '4px',
              opacity: 0.6,
              animation: 'float 3s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute hidden lg:block z-20"
            style={{
              right: '12%',
              top: '40%',
              width: '70px',
              height: '70px',
              border: '2px solid #CCFF00',
              borderRadius: '4px',
              opacity: 0.5,
              animation: 'float 4s ease-in-out infinite 0.5s'
            }}
          />

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid #CCFF00',
              borderRadius: '50%',
              color: '#CCFF00'
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid #CCFF00',
              borderRadius: '50%',
              color: '#CCFF00'
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* RIGHT COLUMN - CTA Section */}
        <div 
          className="hidden lg:flex flex-col justify-center relative z-20"
          style={{ 
            width: '15%',
            paddingTop: '20px',
            paddingRight: '0',
            animation: 'fadeInUp 1s ease-out 1.2s backwards',
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <p 
            className="text-white/90 leading-relaxed font-light mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              lineHeight: '1.6',
              textAlign: 'left'
            }}
          >
            {slide.description}
          </p>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase transition-all duration-300 hover:shadow-lg w-fit"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0047e6',
              borderRadius: '0px',
              fontFamily: 'Anton, sans-serif',
              fontSize: '16px'
            }}
          >
            <span>GET STARTED</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Slide Indicators - Bottom Center */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3"
          style={{ display: 'flex', gap: '12px' }}
        >
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="transition-all duration-300"
              style={{
                width: idx === currentSlide ? '40px' : '12px',
                height: '12px',
                backgroundColor: idx === currentSlide ? '#CCFF00' : 'rgba(204, 255, 0, 0.4)',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(0px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
