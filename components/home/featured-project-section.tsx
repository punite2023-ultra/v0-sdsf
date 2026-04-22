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
    category: "Event Highlights",
    title: "Creator Advice Spotlight",
    image: "/news-events/event-1.jpg",
    date: "31 Mar 2026",
    location: "Philippines",
    shortDescription:
      "A motivating content piece centered on showing up, starting imperfectly, and learning through action.",
    fullDescription:
      "This post highlighted a practical creator mindset: start before everything feels perfect. It reinforces Star Digital Solutions’ belief in progress through action, experimentation, and consistent content creation. Ideal for the News & Events page as a motivational community-facing update that reflects creator development and real-world learning.",
  },
  {
    category: "Event Recap",
    title: "BeautyCon 2026 Fever",
    image: "/news-events/event-2.jpg",
    date: "30 Mar 2026",
    location: "SM Beauty x Watsons BeautyCon",
    shortDescription:
      "A post-event recap capturing the energy, beauty trends, and brand experience from BeautyCon 2026.",
    fullDescription:
      "This recap post looked back at the momentum from BeautyCon 2026, extending the event’s visibility beyond the venue itself. It positions Star Digital Solutions as an active participant in beauty, retail, and consumer-facing brand experiences while keeping the conversation alive after the event.",
  },
  {
    category: "On-Ground Coverage",
    title: "Watsons BeautyCon 2026",
    image: "/news-events/event-3.jpg",
    date: "25 Mar 2026",
    location: "Philippines",
    shortDescription:
      "Star Digital Solutions covered BeautyCon 2026 on-ground, capturing trends, moments, and brand activity.",
    fullDescription:
      "This post documented Star Digital Solutions’ presence at Watsons BeautyCon 2026, where the team explored the event floor and engaged with the beauty and lifestyle space. It works well for the News & Events page because it shows real participation, industry presence, and the brand’s connection to live activations and consumer events.",
  },
  {
    category: "Brand Experience",
    title: "AvonPH Empowerment Day",
    image: "/news-events/event-4.jpg",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "A day of empowerment, connection, and meaningful brand engagement together with AvonPH.",
    fullDescription:
      "This event-focused post celebrated a collaboration with AvonPH built around connection and empowerment. For the page, it adds a warm and people-centered story that shows Star Digital Solutions participating in purposeful brand experiences, not just campaigns.",
  },
  {
    category: "Milestone",
    title: "Another Milestone for Star Digital",
    image: "/news-events/event-5.jpg",
    date: "24 Mar 2026",
    location: "Philippines",
    shortDescription:
      "A milestone update recognizing forward momentum, industry trust, and another strong signal of growth.",
    fullDescription:
      "This post shared another important milestone for Star Digital Solutions and framed it as a sign that the company is moving in the right direction. It is a strong addition to the News & Events page because it gives visitors proof of momentum, credibility, and continued progress.",
  },
  {
    category: "Award Recognition",
    title: "MCN Agency of the Year 2026",
    image: "/news-events/event-6.jpg",
    date: "24 Mar 2026",
    location: "Venice Cineplex",
    shortDescription:
      "Star Digital Solutions was recognized as MCN Agency of the Year at the TikTok Shop Creator Awards 2026.",
    fullDescription:
      "This recognition marked a major achievement for Star Digital Solutions. Being named MCN Agency of the Year at the TikTok Shop Creator Awards 2026 highlights the team’s performance, creativity, and impact in the creator-commerce space. This is one of the strongest proof-point stories to feature on the News & Events page.",
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
                        <p className="mb-4 text-sm leading-7 text-white/70">
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
