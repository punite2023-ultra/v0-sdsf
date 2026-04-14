'use client'

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const launchDate = new Date("2026-05-01T00:00:00")
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  function getTimeRemaining() {
    const total = launchDate.getTime() - new Date().getTime()

    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-24">
        <div className="w-full max-w-5xl text-center">

          {/* 🔥 TIGHTER TEXT */}
          <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl lg:text-7xl leading-[1.1]">
            {language === 'en' ? (
              <>
                A new star is entering
                <br />
                the digital orbit.
                <br />
                Stay tuned.
              </>
            ) : (
              '颗新星即将进入数字轨道。敬请期待。'
            )}
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#ff9f1a]">
            {language === 'en' ? 'Launching Soon' : '即将上线'}
          </p>

          <div className="mt-6 flex flex-wrap items-start justify-center gap-4 sm:gap-6">
            <TimeBox label="DAYS" value={timeLeft.days} />
            <TimeBox label="HOURS" value={timeLeft.hours} />
            <TimeBox label="MINUTES" value={timeLeft.minutes} />
            <TimeBox label="SECONDS" value={timeLeft.seconds} />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            {language === 'en'
              ? 'We are building something powerful. Stay tuned for the launch.'
              : '我们正在打造强大的系统，敬请期待。'}
          </p>

          <div className="flex flex-col items-center gap-4 pt-6">
            <p className="text-sm text-white opacity-90 sm:text-base">
              Follow us on social media for updates
            </p>

            <div className="flex gap-6">
              {/* icons unchanged */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const formattedValue = value.toString().padStart(2, '0')

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[110px] w-[88px] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:h-[140px] sm:w-[120px]">
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-black/60" />
        <AnimatedNumber value={formattedValue} />
      </div>

      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-[#ffb020] sm:text-sm">
        {label}
      </span>
    </div>
  )
}

function AnimatedNumber({ value }: { value: string }) {
  return (
    <>
      <span
        key={value}
        className="block text-6xl font-extrabold text-white sm:text-8xl animate-[flipTick_0.45s_ease-out]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {value}
      </span>

      <style jsx>{`
        @keyframes flipTick {
          0% {
            opacity: 0.2;
            transform: perspective(500px) rotateX(-85deg);
          }
          100% {
            opacity: 1;
            transform: perspective(500px) rotateX(0deg);
          }
        }
      `}</style>
    </>
  )
}
