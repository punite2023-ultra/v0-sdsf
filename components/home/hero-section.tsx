"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-between overflow-hidden pt-[100px] px-0"
      style={{
        backgroundImage: 'url(https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Bg-2.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Column - Team Info & Stats (12% width on desktop) */}
        <div className="hidden lg:flex flex-col w-1/5 gap-12 relative z-20 animate-fadeInDown">
          {/* Team Section */}
          <div className="flex flex-col gap-3">
            {/* Avatar Images */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white/10"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt=""
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Divider Line */}
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-16" style={{ backgroundColor: '#CCFF00' }} />
            </div>
            
            {/* Team Text */}
            <h3 className="text-white font-bold text-sm leading-tight max-w-xs uppercase tracking-tight">
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </h3>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-white leading-none">500 +</div>
              <div className="text-xs font-bold text-white/90 uppercase">HAPPY CLIENT</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-white leading-none">125 +</div>
              <div className="text-xs font-bold text-white/90 uppercase">PROJECT DONE</div>
              <div className="h-1 w-12" style={{ backgroundColor: '#CCFF00' }} />
            </div>
          </div>
        </div>

        {/* Center - Large Hero Image & Text */}
        <div className="relative flex-1 flex items-center justify-center mx-8 lg:mx-0">
          {/* Hero Image Container */}
          <div className="relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&h=800&fit=crop"
              alt="Creative team working"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
              priority
            />

            {/* Geometric Overlay Rectangles with Yellow Border */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top-left rectangle */}
              <div className="absolute top-20 left-16 w-20 h-32 border-4" style={{ borderColor: '#CCFF00' }} />
              
              {/* Center-top rectangle */}
              <div className="absolute top-24 right-32 w-24 h-20 border-4" style={{ borderColor: '#CCFF00' }} />
              
              {/* Center rectangle */}
              <div className="absolute top-1/2 left-1/3 w-28 h-24 border-4" style={{ borderColor: '#CCFF00' }} />
              
              {/* Bottom-right rectangle */}
              <div className="absolute bottom-32 right-20 w-16 h-20 border-3" style={{ borderColor: '#CCFF00' }} />
            </div>

            {/* Large Text Overlay - CREATIVE AGENCY */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 
                className="text-8xl md:text-9xl lg:text-10xl font-black text-center leading-none uppercase"
                style={{ 
                  color: '#CCFF00',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '-0.02em',
                  wordSpacing: '9999px'
                }}
              >
                CREATIVE
                <br />
                AGENCY
              </h1>
            </div>
          </div>

          {/* Decorative Star Circle - Top Right of Hero */}
          <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full border-3 hidden lg:flex items-center justify-center z-20" style={{ borderColor: '#CCFF00' }}>
            <svg className="w-10 h-10" style={{ color: '#CCFF00' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Right Column - Description & CTA */}
        <div className="hidden lg:flex flex-col w-1/5 gap-6 relative z-20 animate-fadeInRight justify-end pb-16">
          <p className="text-white/90 text-sm leading-relaxed font-light">
            Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          <Button 
            asChild 
            className="rounded-md px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm uppercase border-0 group w-fit"
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
      <div className="absolute bottom-8 left-6 right-6 lg:hidden text-center z-20">
        <Button 
          asChild 
          className="w-full rounded-md px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm uppercase border-0"
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
