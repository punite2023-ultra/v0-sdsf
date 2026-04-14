'use client'

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

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
    <section className="relative min-h-screen w-full overflow-hidden pt-24">

      {/* 🎬 VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-24">

        <div className="w-full max-w-3xl text-center space-y-6">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {language === 'en' ? 'A new star is entering the digital orbit. <br /> Stay tuned.' : '颗新星即将进入数字轨道。敬请期待。'}
          </h1>

          <p className="text-sm tracking-widest text-[#ff002f] uppercase">
            {language === 'en' ? 'Launching Soon' : '即将上线'}
          </p>

          {/* ⏳ Countdown */}
          <div className="flex justify-center gap-4 text-white font-mono text-lg sm:text-2xl">
            <TimeBox label="DAYS" value={timeLeft.days} />
            <TimeBox label="HRS" value={timeLeft.hours} />
            <TimeBox label="MIN" value={timeLeft.minutes} />
            <TimeBox label="SEC" value={timeLeft.seconds} />
          </div>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'en'
              ? 'We are building something powerful. Stay tuned for the launch.'
              : '我们正在打造强大的系统，敬请期待。'}
          </p>

          {/* 🔥 Social Section */}
          <div className="flex flex-col items-center gap-4 pt-6">

            <p className="text-white text-sm sm:text-base opacity-90">
              {language === 'en'
                ? 'Follow us on social media for updates'
                : '关注我们的社交媒体以获取最新动态'}
            </p>

            <div className="flex gap-6">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/stardigitalsolutionsph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#1877F2] transition transform hover:scale-110"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8H17l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/stardigitalsolutionsph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition transform hover:scale-110"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@stardigitalsolutionsph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition transform hover:scale-110"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M21 8.5a6.5 6.5 0 0 1-4-1.4v6.9a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v2.7a2.8 2.8 0 1 0 2.8 2.8V2h2.7a6.5 6.5 0 0 0 3 3.6v2.9z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// 🔲 Timer Box
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
