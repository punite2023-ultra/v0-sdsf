"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Play, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
]

const miniAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces",
]

export function HeroSectionSimple() {
  const { language } = useLanguage()

  const t =
    language === "zh"
      ? {
          titleTop: "ALIGNING THE",
          titleBottom: "STARS FOR DIGITAL SUCCESS",
          description:
            "Star Digital Solutions combines strategy, content, commerce, and creator-led execution to help brands grow with clarity and momentum.",
          primary: "See Our Works",
          bottomText: "We don’t just imagine results — we deliver them.",
        }
      : {
          titleTop: "ALIGNING THE",
          titleBottom: "STARS FOR DIGITAL SUCCESS",
          description:
            "Star Digital Solutions combines strategy, content, commerce, and creator-led execution to help brands grow with clarity and momentum.",
          primary: "See Our Works",
          bottomText: "We don’t just imagine results — we deliver them.",
        }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070707]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(201,255,0,0.08),transparent_28%),radial-gradient(circle_at_70%_18%,rgba(201,255,0,0.05),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      {/* DOT / WAVE PATTERN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="hero-pattern absolute -left-[12%] top-[4%] h-[78%] w-[72%]" />
      </div>

      {/* HERO */}
      <div className="relative z-10 px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-12 lg:px-10 lg:pb-0 lg:pt-8">
        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(520px,0.85fr)]">
          {/* LEFT */}
          <div className="relative z-20 flex h-full flex-col justify-between pt-6 lg:pt-10">
            <div className="max-w-[980px]">
              <h1 className="font-black uppercase leading-[0.86] tracking-[-0.05em] text-[#d7ff00]">
                <span className="block text-[64px] sm:text-[86px] md:text-[118px] lg:text-[138px] xl:text-[168px]">
                  {t.titleTop}
                </span>
                <span className="block text-[64px] sm:text-[86px] md:text-[118px] lg:text-[138px] xl:text-[168px]">
                  {t.titleBottom}
                </span>
              </h1>

              <div className="mt-8 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                <div className="flex gap-5">
                  {/* SOCIALS */}
                  <div className="flex flex-col gap-4">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Youtube"
                      className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
                    >
                      <Youtube className="h-6 w-6" />
                    </Link>
                  </div>

                  {/* DESCRIPTION + CTA */}
                  <div className="max-w-[520px] pt-1">
                    <p className="text-[21px] leading-[1.55] text-white/78 md:text-[24px]">
                      {t.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href="/portfolio"
                        className="inline-flex min-h-[68px] items-center justify-center rounded-full bg-[#d7ff00] px-8 text-[18px] font-black uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.03]"
                      >
                        {t.primary}
                      </Link>

                      <Link
                        href="/about"
                        aria-label="Play showreel"
                        className="group relative grid h-[74px] w-[74px] place-items-center rounded-full bg-[radial-gradient(circle_at_center,#a855f7_0%,#7c3aed_55%,#2b1022_100%)] text-white shadow-[0_0_0_12px_rgba(220,38,38,0.18)] transition-transform duration-300 hover:scale-105"
                      >
                        <Play className="ml-1 h-7 w-7 fill-current" />
                        <span className="absolute inset-[-14px] rounded-full border border-red-500/25" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM INFO */}
            <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-8 lg:mt-16 lg:grid-cols-[320px_1fr] lg:items-end lg:border-t-0 lg:pt-0">
              <div>
                <div className="flex -space-x-3">
                  {miniAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-black bg-white/10"
                    >
                      <Image
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-5 max-w-[260px] text-[18px] leading-[1.4] text-white">
                  {t.bottomText}
                </p>
              </div>

              <div className="grid gap-8 border-l-0 border-white/15 lg:grid-cols-2 lg:border-l lg:pl-10 xl:max-w-[760px]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[72px] font-black uppercase leading-none tracking-[-0.05em] text-[#8b5cf6] md:text-[90px]">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-[22px] font-black uppercase leading-[1] tracking-tight text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex min-h-[620px] items-end justify-center lg:min-h-[860px]">
            <div className="absolute bottom-[8%] right-[7%] h-[68%] w-[58%] rounded-full bg-[#00d0c7]/10 blur-[130px]" />
            <div className="absolute right-[8%] top-[10%] h-[16%] w-[26%] rounded-full bg-[#d7ff00]/10 blur-[90px]" />

            <div className="relative h-[620px] w-full max-w-[760px] lg:h-[860px]">
              <Image
                src="/images/hero-model.png"
                alt="Star Digital hero visual"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-pattern {
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.5) 1.2px, transparent 1.2px),
            radial-gradient(circle at center, transparent 0, transparent 24%, rgba(255, 255, 255, 0.04) 25%, transparent 26%),
            radial-gradient(circle at center, transparent 0, transparent 36%, rgba(255, 255, 255, 0.04) 37%, transparent 38%),
            radial-gradient(circle at center, transparent 0, transparent 48%, rgba(255, 255, 255, 0.04) 49%, transparent 50%);
          background-size: 16px 16px, 100% 100%, 100% 100%, 100% 100%;
          mask-image: radial-gradient(circle at 40% 40%, black 0%, rgba(0, 0, 0, 0.95) 42%, transparent 76%);
          -webkit-mask-image: radial-gradient(circle at 40% 40%, black 0%, rgba(0, 0, 0, 0.95) 42%, transparent 76%);
          animation: floatPattern 12s ease-in-out infinite;
        }

        @keyframes floatPattern {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -10px, 0) scale(1.03);
          }
        }
      `}</style>
    </section>
  )
}
