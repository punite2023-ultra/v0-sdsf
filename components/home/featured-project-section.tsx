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
    category: "Creator Insights",
    title: "Creator Advice Spotlight",
    image: "/news-events/Event-1.jpg",
    video: "/news-events/Event-1.mp4",
    date: "31 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS spotlighted a creator-first message about starting before everything feels perfect and learning through action.",
    fullDescription:
      "This feature shared a practical content-creation mindset rooted in action, consistency, and progress.",
  },
  {
    category: "Event Recap",
    title: "BeautyCon 2026 Fever",
    image: "/news-events/Event-2.jpg",
    video: "/news-events/Event-2.mp4",
    date: "30 Mar 2026",
    location: "SM Beauty x Watsons BeautyCon",
    shortDescription:
      "SDS recapped the excitement of BeautyCon 2026, highlighting the energy, beauty trends, and brand presence.",
    fullDescription:
      "This post served as a continuation of the BeautyCon experience, turning live event moments into extended digital visibility.",
  },
  {
    category: "On-Ground Coverage",
    title: "Watsons BeautyCon 2026",
    image: "/news-events/Event-3.jpg",
    video: "/news-events/Event-3.mp4",
    date: "25 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS went on-ground at BeautyCon 2026 to capture live moments, observe trends, and engage with the beauty community.",
    fullDescription:
      "Through its on-site presence, SDS documented key moments from the event and translated them into content.",
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
      "This event highlighted a more human side of brand activation—bringing people together through shared purpose and experience.",
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
      "This update captured a key achievement in the company’s journey and framed it as progress in the right direction.",
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
      "This recognition marked a major achievement for SDS and highlighted the strength of its work in the creator and commerce space.",
  },
]

export function NewsEventsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-[#070012] px-4 py-20 text-white sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {newsEvents.map((item, index) => {
            const isActive = activeIndex === index
            const isPlaying = playingIndex === index

            return (
              <article
                key={`${item.title}-${index}`}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => {
                    setPlayingIndex(isPlaying ? null : index)
                    setActiveIndex(index)
                  }}
                  className="relative block aspect-[9/16] w-full overflow-hidden bg-black text-left"
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
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xl backdrop-blur-md">
                          ▶
                        </span>
                      </div>
                    </>
                  )}
                </button>

                <div className="p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff7fd4]">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/10 py-5">
                    <InfoItem label="Date" value={item.date} />
                    <InfoItem label="Location" value={item.location} />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    {item.shortDescription}
                  </p>

                  {isActive && (
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-white/80">
                      {item.fullDescription}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-[#cc7bff] to-[#ff8ab5] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
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
