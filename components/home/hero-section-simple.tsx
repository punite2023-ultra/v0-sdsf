'use client'

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-24">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-black" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

        {/* Text Content */}
        <div className="w-full max-w-3xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            {language === 'en' ? 'Star Digital Solutions' : '星数字解决方案'}
          </h1>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow">
            {language === 'en' 
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              : 'Lorem ipsum dolor sit amet，consectetur adipiscing elit。 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua。'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="px-8 py-3 bg-[#ff002f] text-white font-semibold rounded-full hover:bg-[#e6001f] transition-all duration-300 hover:shadow-lg">
              {language === 'en' ? 'Get Started' : '开始使用'}
            </button>
            <button className="px-8 py-3 border-2 border-[#62248e] text-[#62248e] font-semibold rounded-full hover:bg-[#62248e] hover:text-white transition-all duration-300">
              {language === 'en' ? 'Learn More' : '了解更多'}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20" />
    </section>
  )
}
