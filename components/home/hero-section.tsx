"use client"

import { useLanguage } from "@/lib/language-context"

export function HeroSectionSimple() {
  const { language } = useLanguage()

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="w-full max-w-3xl space-y-6 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
            {language === "en" ? "Star Digital Solutions" : "星数字解决方案"}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl">
            {language === "en"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              : "Lorem ipsum dolor sit amet，consectetur adipiscing elit。Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua。"}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <button className="rounded-full bg-[#ff002f] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#e6001f] hover:shadow-lg">
              {language === "en" ? "Get Started" : "开始使用"}
            </button>

            <button className="rounded-full border-2 border-[#62248e] px-8 py-3 font-semibold text-[#62248e] transition-all duration-300 hover:bg-[#62248e] hover:text-white">
              {language === "en" ? "Learn More" : "了解更多"}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-10 top-20 h-24 w-24 rounded-full bg-purple-200 opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-blue-200 opacity-20 blur-3xl" />
    </section>
  )
}
