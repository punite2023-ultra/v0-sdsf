"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Play, Twitter, Youtube } from "lucide-react"

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
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* RADIAL GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(210,255,0,0.08),transparent_26%),radial-gradient(circle_at_75%_20%,rgba(0,255,220,0.06),transparent_22%)]" />

      {/* LEFT PATTERN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="hero-mesh absolute left-[-8%] top-[2%] h-[84%] w-[72%]" />
      </div>

      {/* MAIN HERO */}
      <div className="relative z-10 px-4 pt-8 md:px-8 lg:px-10">
        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between pt-8 lg:pt-14">
            <div>
              {/* HEADLINE */}
              <div className="max-w-[1100px]">
                <h1 className="font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#d7ff00]">
                  <span className="block text-[76px] sm:text-[100px] md:text-[132px] lg:text-[150px] xl:text-[180px]">
                    DESIGNING THE
                  </span>
                  <span className="block text-[76px] sm:text-[100px] md:text-[132px] lg:text-[150px] xl:text-[180px]">
                    FUTURE OF BRANDS.
                  </span>
                </h1>
              </div>

              {/* COPY + SOCIAL + CTA */}
              <div className="mt-8 flex flex-col gap-6 xl:flex-row xl:items-start">
                {/* SOCIALS */}
                <div className="flex xl:flex-col gap-4 xl:pt-2">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#d7ff00] hover:text-[#d7ff00]"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#d7ff00] hover:text-[#d7ff00]"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="YouTube"
                    className="grid h-16 w-16 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#d7ff00] hover:text-[#d7ff00]"
                  >
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>

                <div className="max-w-[610px]">
                  <p className="text-[22px] leading-[1.45] text-white/78 md:text-[24px]">
                    Star Digital Solutions combines creative execution with strategic
                    thinking to shape tomorrow’s digital brands.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/portfolio"
                      className="inline-flex min-h-[66px] items-center justify-center rounded-full bg-[#d7ff00] px-8 text-[18px] font-black uppercase tracking-tight text-black transition-transform duration-300 hover:scale-[1.03]"
                    >
                      See Our Works
                    </Link>

                    <Link
                      href="/about"
                      aria-label="Play reel"
                      className="group relative grid h-[76px] w-[76px] place-items-center rounded-full bg-[radial-gradient(circle_at_center,#a855f7_0%,#7c3aed_55%,#27102b_100%)] text-white shadow-[0_0_0_14px_rgba(127,29,29,0.28)] transition-transform duration-300 hover:scale-105"
                    >
                      <Play className="ml-1 h-7 w-7 fill-current" />
                      <span className="absolute inset-[-16px] rounded-full border border-red-500/20" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM LEFT AREA */}
            <div className="mt-12 grid grid-cols-1 gap-10 pb-8 lg:mt-10 lg:grid-cols-[300px_1fr] lg:items-end lg:pb-10">
              <div>
                <div className="flex -space-x-3">
                  {miniAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-black"
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

                <p className="mt-5 max-w-[260px] text-[18px] leading-[1.35] text-white">
                  We don’t just imagine results—we deliver them.
                </p>
              </div>

              <div className="grid gap-8 border-l border-[#b8ff1a] pl-8 sm:grid-cols-2 xl:max-w-[760px]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[72px] font-black uppercase leading-none tracking-[-0.05em] text-[#8b5cf6] md:text-[92px]">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-[22px] font-black uppercase leading-[0.95] tracking-tight text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex min-h-[620px] items-end justify-center lg:min-h-screen">
            <div className="absolute bottom-[8%] right-[8%] h-[62%] w-[56%] rounded-full bg-cyan-400/10 blur-[130px]" />
            <div className="absolute right-[10%] top-[12%] h-[18%] w-[26%] rounded-full bg-lime-300/10 blur-[90px]" />

            <div className="relative h-[640px] w-full max-w-[860px] lg:h-[940px]">
              <Image
                src="/images/hero-model.png"
                alt="Hero model"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-mesh {
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.5) 1.2px, transparent 1.2px),
            radial-gradient(circle at center, transparent 0, transparent 21%, rgba(255, 255, 255, 0.04) 22%, transparent 23%),
            radial-gradient(circle at center, transparent 0, transparent 34%, rgba(255, 255, 255, 0.04) 35%, transparent 36%),
            radial-gradient(circle at center, transparent 0, transparent 47%, rgba(255, 255, 255, 0.04) 48%, transparent 49%);
          background-size: 16px 16px, 100% 100%, 100% 100%, 100% 100%;
          mask-image: radial-gradient(circle at 42% 42%, black 0%, rgba(0, 0, 0, 0.95) 44%, transparent 76%);
          -webkit-mask-image: radial-gradient(circle at 42% 42%, black 0%, rgba(0, 0, 0, 0.95) 44%, transparent 76%);
          animation: meshFloat 13s ease-in-out infinite;
        }

        @keyframes meshFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(12px, -8px, 0) scale(1.025);
          }
        }
      `}</style>
    </section>
  )
}
