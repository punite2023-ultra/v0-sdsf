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
  {
    category: "Brand Experience",
    categoryZh: "品牌体验",
    title: "AvonPH Empowerment Day",
    titleZh: "AvonPH Empowerment Day",
    image: "/news-events/Event-4.jpg",
    video: "/news-events/Event-4.mp4",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS joined AvonPH for a day centered on empowerment, connection, and meaningful brand-community engagement.",
    shortDescriptionZh:
      "SDS 与 AvonPH 共同参与了一场以赋能、连接与品牌社群互动为核心的活动。",
    fullDescription:
      "This event highlighted a more human side of brand activation—bringing people together through shared purpose and experience.",
    fullDescriptionZh:
      "此次活动展现了品牌激活更具人情味的一面，通过共同目标与体验连接人群。",
  },
  {
    category: "Milestone",
    categoryZh: "里程碑",
    title: "Another Milestone for Star Digital",
    titleZh: "Star Digital 的又一里程碑",
    image: "/news-events/Event-5.jpg",
    video: "/news-events/Event-5.mp4",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS shared another milestone that reflects steady growth, industry trust, and continued forward momentum.",
    shortDescriptionZh:
      "SDS 分享了又一项里程碑，展现持续成长、行业信任与不断向前的动力。",
    fullDescription:
      "This update captured a key achievement in the company’s journey and framed it as a sign of progress in the right direction.",
    fullDescriptionZh:
      "这次更新记录了公司发展过程中的重要成果，也象征着品牌持续朝正确方向前进。",
  },
  {
    category: "Award Recognition",
    categoryZh: "奖项认可",
    title: "MCN Agency of the Year 2026",
    titleZh: "2026 年度 MCN 机构",
    image: "/news-events/Event-6.jpg",
    video: "/news-events/Event-6.mp4",
    date: "24 Mar 2026",
    location: "Venice Cineplex",
    shortDescription:
      "SDS was recognized as MCN Agency of the Year, celebrating its impact in creator commerce and digital growth.",
    shortDescriptionZh:
      "SDS 荣获年度 MCN 机构认可，彰显其在创作者商业与数字增长领域的影响力。",
    fullDescription:
      "This recognition marked a major achievement for SDS and highlighted the strength of its work in the creator and commerce space.",
    fullDescriptionZh:
      "这一认可标志着 SDS 的重要成就，也突显了我们在创作者与商业增长领域的实力。",
  },
]

export function NewsEventsSection() {
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {newsEvents.map((item, index) => {
            const isActive = activeIndex === index
            const isPlaying = playingIndex === index

            return (
              <article
                key={`${item.title}-${index}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => setPlayingIndex(isPlaying ? null : index)}
                  className={`relative block w-full overflow-hidden bg-black text-left transition-all duration-500 ${
                    isPlaying
                      ? "aspect-[9/16] rounded-[28px]"
                      : "aspect-[16/10] rounded-xl"
                  }`}
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
                        alt={isZh ? item.titleZh : item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/25" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 text-base backdrop-blur-md">
                          ▶
                        </span>
                      </div>
                    </>
                  )}
                </button>

                <div className="pt-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b70d41]">
                    {isZh ? item.categoryZh : item.category}
                  </p>

                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                    {isZh ? item.titleZh : item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    {isZh ? item.shortDescriptionZh : item.shortDescription}
                  </p>

                  {isActive && (
                    <div className="mt-5 border-t border-white/10 pt-5">
                      <div className="mb-5 grid grid-cols-2 gap-x-6 gap-y-5">
                        <InfoItem label={isZh ? "日期" : "Date"} value={item.date} />
                        <InfoItem
                          label={isZh ? "地点" : "Location"}
                          value={item.location}
                        />
                      </div>

                      <p className="border-t border-white/10 pt-4 text-sm leading-7 text-white/80">
                        {isZh ? item.fullDescriptionZh : item.fullDescription}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-[#b70d41]/40 bg-[#b70d41] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {isActive
                      ? isZh
                        ? "隐藏详情"
                        : "Hide Details"
                      : isZh
                        ? "查看详情"
                        : "View Details"}
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-20 max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b70d41]">
            {isZh ? "更多详情" : "For More Details"}
          </p>

          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            {isZh
              ? "查看我们的最新新闻与活动动态。"
              : "For News and Events, check our latest updates."}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            {isZh
              ? "关注 Star Digital Solutions 的 Facebook、Instagram 和 TikTok，查看更多活动亮点、品牌时刻与机构动态。"
              : "Follow Star Digital Solutions on Facebook, Instagram, and TikTok for more event highlights, brand moments, and agency updates."}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/stardigitalsolutionsph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#b70d41] px-6 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/stardigitalsolutionsph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#b70d41] px-6 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@stardigitalsolutionsph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#b70d41] px-6 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </p>
      <p className="text-sm font-medium text-white/90">{value}</p>
    </div>
  )
}
