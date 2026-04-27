"use client"

import { useState } from "react"
import Image from "next/image"

type NewsEvent = {
  category: string
  title: string
  image: string
  video: string
  date: string
  location: string
  shortDescription: string
  fullDescription: string
}

const newsEvents: NewsEvent[] = [
  {
    category: "Brand Experiemce",
    title: "Denise Laurel took over the Key Live Session",
    image: "/news-events/Denise x Rejuran.png",
    video: "/news-events/Denise x Rejuran.mp4",
    date: "23 April 2026",
    location: "Philippines",
    shortDescription:
      "A look behind the lens at the vibrant, fast-paced world of live-streaming with Denise Laurel and Rejuran.",
    fullDescription:
      "From the studio to the screen, we’re all about elevating the creator experience. SDS proudly facilitated this collaboration between Denise Laurel and Rejuran, managing the technical precision and creative energy required for a high-impact live-stream. This feature highlights our commitment to professional excellence, ensuring that every brand message is delivered with clarity, style, and real-time engagement.",
  },
  {
    category: "Event Recap",
    title: "BeautyCon 2026 Fever",
    image: "/news-events/BeautyCon2026.png",
    video: "/news-events/SDS x BeautyCon 2026 Interview.mp4",
    date: "30 Mar 2026",
    location: "SM Beauty x Watsons BeautyCon",
    shortDescription:
      "SDS recapped the excitement of BeautyCon 2026, highlighting the energy, beauty trends, and brand presence from the event.",
    fullDescription:
      "This post served as a continuation of the BeautyCon experience, turning live event moments into extended digital visibility. SDS used the recap to reinforce brand relevance, celebrate the atmosphere of the event, and show its connection to beauty, retail, and consumer engagement.",
  },
  {
    category: "Star Digital Solutions Milestone",
    title: "From First Stream to Industry Leaders: Star Digital Solutions Celebrates a Legacy of Digital Excellence",
    image: "/news-events/Flashback.png",
    video: "/news-events/Flashback1.mp4",
    date: "25 Mar 2026",
    location: "Philippines",
    shortDescription:
      "A dynamic retrospective of Star Digital Solutions’ journey, highlighting our evolution from inaugural live-stream sessions to becoming the powerhouse production partner for global brands like Colgate, Maybelline, and Garnier.",
    fullDescription:
      "Star Digital Solutions (SDS) is proud to present a milestone-marking "Flashback" feature, tracing our trajectory as a premier creative and digital production agency. This visual journey captures the high-stakes energy, technical precision, and creative passion that define every SDS project.",
  },
  {
    category: "Brand Experience",
    title: "AvonPH Empowerment Day",
    image: "/news-events/Event-4.jpg",
    video: "/news-events/Event-4.mp4",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS joined AvonPH for a day centered on empowerment, connection, and meaningful brand-community engagement.",
    fullDescription:
      "This event highlighted a more human side of brand activation—bringing people together through shared purpose and experience. SDS positioned the moment as more than a simple appearance, but as a meaningful collaboration built around community, values, and engagement.",
  },
  {
    category: "Milestone",
    title: "Another Milestone for Star Digital",
    image: "/news-events/Event-5.jpg",
    video: "/news-events/Event-5.mp4",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS shared another milestone that reflects steady growth, industry trust, and continued forward momentum.",
    fullDescription:
      "This update captured a key achievement in the company’s journey and framed it as a sign of progress in the right direction. It reinforces the idea that SDS is building credibility through results, consistency, and the trust of the brands and partners it works with.",
  },
  {
    category: "Award Recognition",
    title: "MCN Agency of the Year 2026",
    image: "/news-events/Event-6.jpg",
    video: "/news-events/Event-6.mp4",
    date: "24 Mar 2026",
    location: "Venice Cineplex",
    shortDescription:
      "SDS was recognized as MCN Agency of the Year, celebrating its impact in creator commerce and digital growth.",
    fullDescription:
      "This recognition marked a major achievement for SDS and highlighted the strength of its work in the creator and commerce space. The post communicates leadership, performance, and the agency’s ability to deliver results that stand out at an industry level.",
  },
]

export function NewsEventsSection() {
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d972ff]">
            News & Events
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Highlights, Milestones,
            <br className="hidden sm:block" /> and Moments That Matter.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
            Explore recent Star Digital Solutions milestones, industry appearances,
            and brand moments. Click the thumbnail to play the video.
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
                        alt={item.title}
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
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff7fd4]">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    {item.shortDescription}
                  </p>

                  {isActive && (
                    <div className="mt-5 border-t border-white/10 pt-5">
                      <div className="mb-5 grid grid-cols-2 gap-x-6 gap-y-5">
                        <InfoItem label="Date" value={item.date} />
                        <InfoItem label="Location" value={item.location} />
                      </div>

                      <p className="border-t border-white/10 pt-4 text-sm leading-7 text-white/80">
                        {item.fullDescription}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-[#cc7bff] to-[#ff8ab5] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {isActive ? "Hide Details" : "View Details"}
                  </button>
                </div>
              </article>
            )
          })}
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
