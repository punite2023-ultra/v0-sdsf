"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0047e6 0%, #003399 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 0.3,
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />

      {/* Main Content Grid */}
      <div className="relative h-full w-full flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl w-full grid grid-cols-12 gap-8 items-center h-full py-20">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-2 flex flex-col justify-center z-20">
            {/* Team Avatars */}
            <div 
              className="flex -space-x-3 mb-4"
              style={{ animation: 'fadeInLeft 0.8s ease-out' }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-white/20"
                  style={{
                    backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </div>

            {/* Divider */}
            <div 
              className="h-1 w-16 mb-4"
              style={{ 
                backgroundColor: '#CCFF00',
                animation: 'slideInLeft 1s ease-out'
              }}
            />

            {/* Team Text */}
            <h3 
              className="text-white font-bold text-sm leading-tight uppercase tracking-wide mb-12"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontSize: '16px',
                lineHeight: '1.3',
                animation: 'fadeInLeft 1s ease-out 0.2s backwards',
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            >
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </h3>

            {/* Stats */}
            <div className="flex flex-col gap-8" style={{ 
              animation: 'fadeInLeft 1.2s ease-out 0.4s backwards',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}>
              <div>
                <div className="text-5xl font-black text-white leading-none mb-2">500 +</div>
                <div className="text-xs font-bold text-white uppercase tracking-wide mb-2">HAPPY CLIENT</div>
                <div className="h-1 w-16" style={{ backgroundColor: '#CCFF00' }} />
              </div>
              <div>
                <div className="text-5xl font-black text-white leading-none mb-2">125 +</div>
                <div className="text-xs font-bold text-white uppercase tracking-wide mb-2">PROJECT DONE</div>
                <div className="h-1 w-16" style={{ backgroundColor: '#CCFF00' }} />
              </div>
            </div>
          </div>

          {/* CENTER COLUMN - Large Text with Image */}
          <div 
            className="col-span-12 lg:col-span-8 relative h-full flex items-center justify-center z-10"
            style={{
              position: 'relative',
              minHeight: '500px'
            }}
          >
            {/* Girl Image - Centered */}
            <div 
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{
                transform: `translateY(${scrollY * -0.15}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png"
                alt="Girl with headphones"
                width={400}
                height={600}
                className="object-contain drop-shadow-lg"
                priority
                style={{
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>

            {/* Large Text Overlay */}
            <h1 
              className="relative z-10 text-center leading-none uppercase font-black"
              style={{
                fontSize: 'clamp(80px, 22vw, 320px)',
                color: '#CCFF00',
                fontFamily: 'Anton, sans-serif',
                textShadow: `
                  2px 2px 0 #0047e6,
                  4px 4px 0 rgba(0, 0, 0, 0.3),
                  -2px 2px 0 #0047e6,
                  2px -2px 0 #0047e6
                `,
                letterSpacing: '-0.03em',
                lineHeight: '0.9',
                wordSpacing: '9999px',
                animation: 'fadeInUp 1.2s ease-out',
                transform: `translateY(${scrollY * -0.25}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              CREATIVE
              <br />
              AGENCY
            </h1>

            {/* Decorative elements around text */}
            <div 
              className="absolute hidden lg:flex items-center justify-center"
              style={{
                right: '10%',
                top: '15%',
                width: '80px',
                height: '80px',
                border: '3px solid #CCFF00',
                borderRadius: '50%',
                transform: `rotate(${scrollY * 0.5}deg)`,
                transition: 'transform 0.1s linear'
              }}
            >
              <svg className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* Decorative boxes around girl */}
            <div 
              className="absolute hidden lg:block"
              style={{
                left: '35%',
                top: '20%',
                width: '60px',
                height: '80px',
                border: '2px solid #CCFF00',
                borderRadius: '4px',
                opacity: 0.6,
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute hidden lg:block"
              style={{
                right: '20%',
                top: '35%',
                width: '70px',
                height: '70px',
                border: '2px solid #CCFF00',
                borderRadius: '4px',
                opacity: 0.5,
                animation: 'pulse 4s ease-in-out infinite 0.5s'
              }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div 
            className="col-span-12 lg:col-span-2 flex flex-col justify-center z-20"
            style={{ 
              animation: 'fadeInRight 1s ease-out 0.2s backwards',
              transform: `translateY(${scrollY * -0.3}px)`,
            }}
          >
            <p 
              className="text-white/90 text-sm leading-relaxed font-light mb-8"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                lineHeight: '1.7',
                textAlign: 'left'
              }}
            >
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all duration-300 hover:scale-105 w-fit border-2"
              style={{
                backgroundColor: 'transparent',
                color: '#CCFF00',
                borderColor: '#CCFF00',
                borderRadius: '4px',
                fontFamily: 'Anton, sans-serif'
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
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

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            width: 0;
          }
          to {
            width: 64px;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}
