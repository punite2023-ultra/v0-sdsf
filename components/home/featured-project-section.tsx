"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

type NewsEvent = {
  category: string
  categoryZh: string
  title: string
  titleZh: string
  image: string
  video: string
  date: string
  location: string
  shortDescription: string
  shortDescriptionZh: string
  fullDescription: string
  fullDescriptionZh: string
}

const newsEvents: NewsEvent[] = [
  {
    category: "Brand Experience",
    categoryZh: "品牌体验",
    title: "Denise Laurel took over the Key Live Session",
    titleZh: "Denise Laurel 主持重点直播专场",
    image: "/news-events/Denise x Rejuran.png",
    video: "/news-events/Denise x Rejuran.mp4",
    date: "23 April 2026",
    location: "Philippines",
    shortDescription:
      "A look behind the lens at the vibrant, fast-paced world of live-streaming with Denise Laurel and Rejuran.",
    shortDescriptionZh:
      "走进 Denise Laurel 与 Rejuran 的直播幕后，感受充满活力且节奏快速的直播体验。",
    fullDescription:
      "From the studio to the screen, we’re all about elevating the creator experience.",
    fullDescriptionZh:
      "从摄影棚到线上屏幕，SDS 致力于提升创作者体验。",
  },
  {
    category: "Event Recap",
    categoryZh: "活动回顾",
    title: "BeautyCon 2026 Fever",
    titleZh: "BeautyCon 2026 活动热潮",
    image: "/news-events/BeautyCon2026.png",
    video: "/news-events/SDS x BeautyCon 2026 Interview.mp4",
    date: "30 Mar 2026",
    location: "SM Beauty x Watsons BeautyCon",
    shortDescription:
      "SDS recapped the excitement of BeautyCon 2026.",
    shortDescriptionZh:
      "SDS 回顾 BeautyCon 2026 的精彩时刻。",
    fullDescription:
      "This post served as a continuation of the BeautyCon experience.",
    fullDescriptionZh:
      "这次内容延续了 BeautyCon 的现场体验。",
  },
  {
    category: "Star Digital Solutions Milestone",
    categoryZh: "Star Digital Solutions 里程碑",
    title: "Legacy of Digital Excellence",
    titleZh: "数字卓越的传承",
    image: "/news-events/Flashback.png",
    video: "/news-events/Flashback1.mp4",
    date: "25 Mar 2026",
    location: "Philippines",
    shortDescription:
      "A dynamic retrospective of Star Digital Solutions’ journey.",
    shortDescriptionZh:
      "回顾 Star Digital Solutions 的成长历程。",
    fullDescription:
      "Star Digital Solutions presents a milestone flashback feature.",
    fullDescriptionZh:
      "Star Digital Solutions 呈现里程碑回顾。",
  },
]

export function FeaturedProjectSection() {
  const { language } = useLanguage()
  const isZh = language === "zh"

  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-[#070012] px-4 py-20 text-white sm:px-6 lg:px-8">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b70d41]">
            {isZh ? "新闻与活动" : "News & Events"}
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {isZh ? (
              <>
                精彩亮点、重要里程碑，
                <br className="hidden sm:block" /> 以及值得关注的品牌时刻。
              </>
            ) : (
              <>
                Highlights, Milestones,
                <br className="hidden sm:block" /> and Moments That Matter.
              </>
            )}
          </h2>

          <p className="mt-5 text-sm text-white/65 sm:text-base">
            {isZh
              ? "探索 Star Digital Solutions 的最新里程碑与品牌时刻。"
              : "Explore recent Star Digital Solutions milestones and brand moments."}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newsEvents.map((item, index) => {
            const isPlaying = playingIndex === index

            return (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20"
              >
                <button
                  onClick={() => setPlayingIndex(isPlaying ? null : index)}
                  className={`relative w-full overflow-hidden ${
                    isPlaying ? "aspect-[9/16]" : "aspect-[16/10]"
                  } rounded-xl`}
                >
                  {isPlaying ? (
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    </>
                  )}
                </button>

                <div className="pt-5">
                  <p className="text-xs uppercase text-[#b70d41]">
                    {isZh ? item.categoryZh : item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    {isZh ? item.titleZh : item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    {isZh
                      ? item.shortDescriptionZh
                      : item.shortDescription}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* FOR MORE DETAILS (RESTORED) */}
        <div className="mx-auto mt-20 max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b70d41]">
            {isZh ? "更多详情" : "FOR MORE DETAILS"}
          </p>

          <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
            {isZh
              ? "查看我们的最新新闻与活动动态。"
              : "For News and Events, check our latest updates."}
          </h3>

          <p className="mt-4 text-sm text-white/65 sm:text-base">
            {isZh
              ? "关注我们的社交平台获取更多内容。"
              : "Follow Star Digital Solutions on Facebook, Instagram, and TikTok for more event highlights, brand moments, and agency updates."}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/stardigitalsolutionsph"
              target="_blank"
              className="rounded-full bg-[#b70d41] px-6 py-3 text-xs uppercase text-white"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/stardigitalsolutionsph"
              target="_blank"
              className="rounded-full bg-[#b70d41] px-6 py-3 text-xs uppercase text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@stardigitalsolutionsph"
              target="_blank"
              className="rounded-full bg-[#b70d41] px-6 py-3 text-xs uppercase text-white"
            >
              TikTok
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
