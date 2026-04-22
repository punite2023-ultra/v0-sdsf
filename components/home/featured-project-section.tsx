"use client"

import { useState } from "react"
import Image from "next/image"

type NewsEvent = {
  category: string
  title: string
  image: string
  date: string
  location: string
  shortDescription: string
  fullDescription: string
}

const newsEvents: NewsEvent[] = [
  {
    category: "Creator Insights",
    title: "Creator Advice Spotlight",
    image: "/news-events/event-1.jpg",
    date: "31 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS spotlighted a creator-first message about starting before everything feels perfect and learning through action.",
    fullDescription:
      "This feature shared a practical content-creation mindset rooted in action, consistency, and progress. Through this post, SDS highlighted the importance of showing up, creating, and improving over time—reflecting the agency’s support for creators and brands growing through real momentum.",
  },
  {
    category: "Event Recap",
    title: "BeautyCon 2026 Fever",
    image: "/news-events/event-2.jpg",
    date: "30 Mar 2026",
    location: "SM Beauty x Watsons BeautyCon",
    shortDescription:
      "SDS recapped the excitement of BeautyCon 2026, highlighting the energy, beauty trends, and brand presence from the event.",
    fullDescription:
      "This post served as a continuation of the BeautyCon experience, turning live event moments into extended digital visibility. SDS used the recap to reinforce brand relevance, celebrate the atmosphere of the event, and show its connection to beauty, retail, and consumer engagement.",
  },
  {
    category: "On-Ground Coverage",
    title: "Watsons BeautyCon 2026",
    image: "/news-events/event-3.jpg",
    date: "25 Mar 2026",
    location: "Philippines",
    shortDescription:
      "SDS went on-ground at BeautyCon 2026 to capture live moments, observe trends, and engage with the beauty community.",
    fullDescription:
      "Through its on-site presence, SDS documented key moments from the event and translated them into content that reflects cultural relevance and real-world brand participation. The post shows SDS not just as a digital agency, but as an active presence in brand spaces where consumer attention is happening live.",
  },
  {
    category: "Brand Experience",
    title: "AvonPH Empowerment Day",
    image: "/news-events/event-4.jpg",
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
    image: "/news-events/event-5.jpg",
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
    image: "/news-events/event-6.jpg",
    date: "24 Mar 2026",
    location: "Venice Cineplex",
    shortDescription:
      "SDS was recognized as MCN Agency of the Year, celebrating its impact in creator commerce and digital growth.",
    fullDescription:
      "This recognition marked a major achievement for SDS and highlighted the strength of its work in the creator and commerce space. The post communicates leadership, performance, and the agency’s ability to deliver results that stand out at an industry level.",
  },
]

export function NewsEventsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

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
            and brand moments. Click any card to view the event description.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {newsEvents.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="relative block h-full w-full text-left"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#10041d]/55 via-[#0a0118]/35 to-[#090012]/90" />
                  </div>

                  <div className="relative flex min-h-[500px] flex-col justify-between">
                    <div className="p-6">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff7fd4]">
                        {item.category}
                      </p>

                      <h3 className="max-w-[90%] text-2xl font-medium tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`border-t border-white/10 bg-[#150c25]/85 p-6 backdrop-blur-md transition-all duration-500 ${
                        isActive ? "translate-y-0" : "translate-y-[60%]"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-white/10 pb-5">
                        <InfoItem label="Date" value={item.date} />
                        <InfoItem label="Location" value={item.location} />
                      </div>

                      <div className="pt-5">
                        <p className="mb-4 text-sm leading-7 text-white/75">
                          {item.shortDescription}
                        </p>

                        {isActive && (
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-sm leading-7 text-white/80">
                              {item.fullDescription}
                            </p>
                          </div>
                        )}

                        <span className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-[#cc7bff] to-[#ff8ab5] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 group-hover:scale-[1.03]">
                          {isActive ? "Hide Details" : "View Details"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
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
