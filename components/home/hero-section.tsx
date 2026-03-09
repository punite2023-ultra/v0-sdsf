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

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0047e6 0%, #003399 100%)',
        paddingTop: '100px',
        minHeight: '100vh'
      }}
    >
      {/* Main Container */}
      <div 
        className="relative w-full flex justify-between items-center px-6 lg:px-0"
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          minHeight: '600px',
          gap: '0'
        }}
      >
        {/* LEFT COLUMN */}
        <div 
          className="hidden lg:flex flex-col justify-center relative z-20"
          style={{ 
            width: '13%',
            paddingLeft: '40px',
            animation: 'fadeInDown 0.8s ease-out 0.2s backwards'
          }}
        >
          {/* Team Avatars */}
          <div className="flex -space-x-3 mb-4">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt={`Team ${i}`}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* Yellow Line */}
          <div className="w-16 h-1 bg-yellow-300 mb-4" />

          {/* Team Text */}
          <h3 
            className="text-white font-bold text-sm leading-tight uppercase tracking-wide mb-12"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '15px',
              maxWidth: '140px'
            }}
          >
            THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
          </h3>

          {/* Stats */}
          <div>
            {/* Stat 1 */}
            <div className="mb-10">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-white font-bold" style={{ fontSize: '52px' }}>500</span>
                <span className="text-yellow-300 font-bold" style={{ fontSize: '28px' }}>+</span>
              </div>
              <div className="text-white font-bold text-sm uppercase mb-2">HAPPY CLIENT</div>
              <div className="w-16 h-1 bg-yellow-300" />
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-yellow-300 mb-10" />

            {/* Stat 2 */}
            <div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-white font-bold" style={{ fontSize: '52px' }}>125</span>
                <span className="text-yellow-300 font-bold" style={{ fontSize: '28px' }}>+</span>
              </div>
              <div className="text-white font-bold text-sm uppercase mb-2">PROJECT DONE</div>
              <div className="w-16 h-1 bg-yellow-300" />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Image with Text Mask */}
        <div 
          className="flex-1 relative flex items-center justify-center z-10"
          style={{
            minHeight: '600px',
            overflow: 'hidden'
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-Xe3Og2JbZJQ15NRPmCrappWrm3Y3RF.png"
              alt="Creative Agency"
              width={500}
              height={700}
              className="object-contain"
              priority
              style={{
                maxHeight: '100%',
                width: 'auto'
              }}
            />
          </div>

          {/* Large Text with Image Mask */}
          <h1 
            className="relative z-10 text-center leading-none uppercase font-black"
            style={{
              fontSize: 'clamp(100px, 28vw, 380px)',
              color: '#CCFF00',
              fontFamily: 'Anton, sans-serif',
              fontWeight: '400',
              letterSpacing: '-8px',
              lineHeight: '0.85',
              wordSpacing: '9999px',
              animation: 'slideInLeft 1s ease-out',
              transform: `translateY(${scrollY * -0.15}px)`,
              transition: 'transform 0.1s ease-out',
              maxWidth: '95%',
              textShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              mixBlendMode: 'screen',
              WebkitBackgroundClip: 'text'
            }}
          >
            CREATIVE<br />AGENCY
          </h1>

          {/* Rotating Star Circle */}
          <div 
            className="absolute hidden lg:flex items-center justify-center z-20"
            style={{
              right: '3%',
              top: '8%',
              width: '90px',
              height: '90px',
              border: '3px solid #CCFF00',
              borderRadius: '50%',
              transform: `rotate(${scrollY * 0.2}deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <svg className="w-12 h-12" fill="#CCFF00" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Decorative Yellow Boxes Around Girl */}
          <div 
            className="absolute hidden lg:block z-20"
            style={{
              left: '25%',
              top: '20%',
              width: '65px',
              height: '90px',
              border: '2px solid #CCFF00',
              borderRadius: '3px',
              opacity: 0.5,
              animation: 'pulse 2.5s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute hidden lg:block z-20"
            style={{
              right: '18%',
              top: '35%',
              width: '75px',
              height: '75px',
              border: '2px solid #CCFF00',
              borderRadius: '3px',
              opacity: 0.5,
              animation: 'pulse 3.5s ease-in-out infinite 0.3s'
            }}
          />
          <div 
            className="absolute hidden lg:block z-20"
            style={{
              left: '30%',
              bottom: '15%',
              width: '55px',
              height: '70px',
              border: '2px solid #CCFF00',
              borderRadius: '3px',
              opacity: 0.5,
              animation: 'pulse 3s ease-in-out infinite 0.6s'
            }}
          />
        </div>

        {/* RIGHT COLUMN - CTA Section */}
        <div 
          className="hidden lg:flex flex-col justify-center relative z-20"
          style={{
            width: '18%',
            paddingRight: '40px',
            animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
          }}
        >
          <p 
            className="text-white leading-relaxed font-light mb-8"
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
            className="inline-flex items-center gap-3 px-8 py-3 font-bold uppercase transition-all duration-300 hover:bg-yellow-300 w-fit"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0047e6',
              borderRadius: '0px',
              fontFamily: 'Anton, sans-serif',
              fontSize: '15px',
              border: '2px solid #FFFFFF'
            }}
          >
            <span>GET STARTED</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Styles & Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  )
}
