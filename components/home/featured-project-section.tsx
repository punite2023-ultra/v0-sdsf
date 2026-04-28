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
      "From the studio to the screen, we’re all about elevating the creator experience. SDS proudly facilitated this collaboration between Denise Laurel and Rejuran, managing the technical precision and creative energy required for a high-impact live-stream.",
    fullDescriptionZh:
      "从摄影棚到线上屏幕，SDS 致力于提升创作者体验。我们协助 Denise Laurel 与 Rejuran 的合作，统筹高影响力直播所需的技术执行与创意能量。",
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
      "SDS recapped the excitement of BeautyCon 2026, highlighting the energy, beauty trends, and brand presence from the event.",
    shortDescriptionZh:
      "SDS 回顾 BeautyCon 2026 的精彩时刻，呈现活动能量、美妆趋势与品牌现场影响力。",
    fullDescription:
      "This post served as a continuation of the BeautyCon experience, turning live event moments into extended digital visibility.",
    fullDescriptionZh:
      "这次内容延续了 BeautyCon 的现场体验，将活动亮点转化为更持久的数字曝光。",
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
      "A dynamic retrospective of Star Digital Solutions’ journey, highlighting our evolution from inaugural live-stream sessions to becoming the powerhouse production partner for global brands.",
    shortDescriptionZh:
      "回顾 Star Digital Solutions 的成长历程，从首次直播项目发展成为全球品牌信赖的内容制作与数字增长伙伴。",
    fullDescription:
      "Star Digital Solutions is proud to present a milestone-marking flashback feature, tracing our trajectory as a premier creative and digital production agency.",
    fullDescriptionZh:
      "Star Digital Solutions 隆重呈现这一里程碑回顾，记录我们作为创意与数字制作机构持续成长的轨迹。",
  },
]

export function FeaturedProjectSection() {
  const { language } = useLanguage()
  const isZh = language === "zh"

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-[#070012] px-4 py-20 text-white sm:px-6 lg:px-8">
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

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
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

          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
            {isZh
              ? "探索 Star Digital Solutions 的最新里程碑、行业活动与品牌时刻。点击缩略图播放视频。"
              : "Explore recent Star Digital Solutions milestones, industry appearances, and brand moments. Click the thumbnail to play the video."}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {newsEvents.map((item, index) => {
            const isActive = activeIndex === index
            const isPlaying = playingIndex === index

            return (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                {/* VIDEO / IMAGE */}
                <button
                  type="button"
                  onClick={() => setPlayingIndex(isPlaying ? null : index)}
                  className={`relative block w-full overflow-hidden bg-black ${
                    isPlaying ? "aspect-[9/16]" : "aspect-[16/10]"
                  } rounded-xl`}
                >
                  {isPlaying ? (
                    <video
                      src={item.video}
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        ▶
                      </div>
                    </>
                  )}
                </button>

                {/* CONTENT */}
                <div className="pt-6">
                  <p className="text-[11px] uppercase text-[#b70d41]">
                    {isZh ? item.categoryZh : item.category}
                  </p>

                  <h3 className="text-xl text-white mt-2">
                    {isZh ? item.titleZh : item.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/70">
                    {isZh
                      ? item.shortDescriptionZh
                      : item.shortDescription}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
