"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0047e6' }}>
      {/* Phone Number Badge - Top Right */}
      <div className="absolute top-8 right-8 flex items-center gap-3 z-20">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFF00' }}>
          <Phone className="w-6 h-6" style={{ color: '#0047e6' }} strokeWidth={3} />
        </div>
        <div className="text-white">
          <div className="text-xs font-bold">PHONE NUMBER</div>
          <div className="text-sm font-bold">+ 43 879 5673 9876</div>
        </div>
      </div>

      {/* Left Column - Stats and Team Info */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        {/* Team Info */}
        <div className="text-white mb-12">
          <div className="flex -space-x-3 mb-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={`https://i.pravatar.cc/100?img=${i + 5}`}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-xs font-bold text-white/90 max-w-xs leading-tight">
            THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div>
            <div className="text-4xl font-black text-white">500 +</div>
            <div className="text-sm font-bold text-white/80">HAPPY CLIENT</div>
            <div className="w-12 h-1 bg-yellow-300 mt-2" />
          </div>
          <div>
            <div className="text-4xl font-black text-white">125 +</div>
            <div className="text-sm font-bold text-white/80">PROJECT DONE</div>
            <div className="w-12 h-1 bg-yellow-300 mt-2" />
          </div>
        </div>
      </div>

      {/* Right Column - CTA and Description */}
      <div className="absolute right-8 bottom-16 hidden lg:block max-w-xs z-10">
        <p className="text-white/90 text-sm leading-relaxed mb-6">
          Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
        </p>
        <Button asChild className="rounded-full px-8 py-6 bg-white text-blue-600 hover:bg-blue-100 font-bold text-base group">
          <Link href="/contact" className="flex items-center gap-2">
            GET STARTED
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Center - Large Hero Image with Overlaid Text */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Hero Image */}
        <div className="relative w-full h-full max-w-4xl mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=800&fit=crop"
            alt="Creative team working"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            priority
          />

          {/* Geometric Overlay Rectangles with Yellow Border */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top left rectangle */}
            <div className="absolute top-24 left-32 w-24 h-32 border-4 border-yellow-300 opacity-70" />
            {/* Middle rectangle */}
            <div className="absolute top-1/3 right-48 w-32 h-24 border-4 border-yellow-300 opacity-70" />
            {/* Bottom rectangle */}
            <div className="absolute bottom-32 left-1/3 w-28 h-36 border-4 border-yellow-300 opacity-70" />
            {/* Small accent rectangle */}
            <div className="absolute top-1/2 right-32 w-16 h-24 border-3 border-yellow-300 opacity-50" />
          </div>
        </div>

        {/* Large Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-9xl lg:text-10xl font-black text-yellow-300 text-center leading-none drop-shadow-2xl">
            CREATIVE
            <br />
            NOW
          </h1>
        </div>

        {/* Decorative Star Circle - Top Right */}
        <div className="absolute top-12 right-12 w-24 h-24 rounded-full border-3 border-yellow-300 flex items-center justify-center z-20 hidden lg:flex">
          <svg className="w-12 h-12 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      {/* Mobile CTA - Bottom */}
      <div className="absolute bottom-8 left-0 right-0 lg:hidden px-6 text-center">
        <Button asChild className="rounded-full px-8 py-6 bg-white text-blue-600 hover:bg-blue-100 font-bold text-base w-full">
          <Link href="/contact" className="flex items-center justify-center gap-2">
            GET STARTED
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
