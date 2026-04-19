"use client"

import { useLanguage } from "@/lib/language-context"

export function ClientsMarquee() {
  const { language } = useLanguage()

  const logos =
    language === "en"
      ? [
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
        ]
      : [
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
          "LOGOIPSUM",
        ]

  return (
    <section className="relative z-20 -mt-8 md:-mt-10 lg:-mt-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
          <div className="flex h-20 items-center overflow-hidden">
            <div
              className="flex min-w-max items-center whitespace-nowrap"
              style={{ animation: "marquee 22s linear infinite" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center whitespace-nowrap">
                  <span className="px-8 text-sm font-bold tracking-[0.18em] text-white/75">
                    {logo}
                  </span>
                  <span className="text-fuchsia-400">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
