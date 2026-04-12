'use client'

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  // 🔥 Set your launch date here
  const launchDate = new Date("2026-05-01T00:00:00")

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  function getTimeRemaining() {
    const total = launchDate.getTime() - new Date().getTime()

    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-24">
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

        <div className="w-full max-w-3xl text-center space-y-6">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            {language === 'en' ? 'Star Digital Solutions' : '星数字解决方案'}
          </h1>

          {/* 🚀 Launch Label */}
          <p className="text-sm tracking-widest text-[#ff002f] uppercase">
            {language === 'en' ? 'Launching Soon' : '即将上线'}
          </p>

          {/* ⏳ Countdown Timer */}
          <div className="flex justify-center gap-4 text-white font-mono text-lg sm:text-2xl">
            <TimeBox label="DAYS" value={timeLeft.days} />
            <TimeBox label="HRS" value={timeLeft.hours} />
            <TimeBox label="MIN" value={timeLeft.minutes} />
            <TimeBox label="SEC" value={timeLeft.seconds} />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow">
            {language === 'en' 
              ? 'We are building something powerful. Stay tuned for the launch.'
              : '我们正在打造强大的系统，敬请期待。'}
          </p>

          {/* Buttons */}
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
    </section>
  )
}

// 🔲 Timer Box Component
function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center bg-white/10 px-4 py-3 rounded-xl backdrop-blur-md min-w-[70px]">
      <span className="text-2xl font-bold">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs opacity-70">{label}</span>
    </div>
  )
}
