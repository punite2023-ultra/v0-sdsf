"use client"

import Link from "next/link"

type Project = {
  category: string
  title: string
  image: string
  client: string
  date: string
  location: string
  budget: string
  description: string
}

const projects: Project[] = [
  {
    category: "Digital Branding",
    title: "Loka Perfume & Co",
    image: "/images/featured-project-1.jpg",
    client: "Brian Imanuel",
    date: "15 Jan 2024",
    location: "Jakarta",
    budget: "$10,000",
    description:
      "A premium branding and packaging concept built to elevate product storytelling and shelf presence.",
  },
  {
    category: "Digital Marketing",
    title: "Compass Shoes",
    image: "/images/featured-project-2.jpg",
    client: "Sophie Lewis",
    date: "18 Jan 2024",
    location: "Bandung",
    budget: "$8,000",
    description:
      "A modern campaign direction focused on awareness, stronger engagement, and improved conversion.",
  },
  {
    category: "App Development",
    title: "Digital Dynamics",
    image: "/images/featured-project-3.jpg",
    client: "Brian Imanuel",
    date: "15 Jan 2024",
    location: "Jakarta",
    budget: "$10,000",
    description:
      "A polished digital product experience designed for clarity, usability, and future scale.",
  },
  {
    category: "SEO",
    title: "Fresh Bites Catering",
    image: "/images/featured-project-4.jpg",
    client: "Brian Imanuel",
    date: "15 Jan 2024",
    location: "Jakarta",
    budget: "$10,000",
    description:
      "An SEO-led growth project structured to increase visibility, qualified traffic, and inbound leads.",
  },
  {
    category: "Graphic Design",
    title: "Harmony Spa & Wellness",
    image: "/images/featured-project-5.jpg",
    client: "Brian Imanuel",
    date: "15 Jan 2024",
    location: "Jakarta",
    budget: "$10,000",
    description:
      "A calm and premium visual system crafted to reflect trust, elegance, and brand consistency.",
  },
  {
    category: "Digital Branding",
    title: "Loka Perfume & Co",
    image: "/images/featured-project-6.jpg",
    client: "Brian Imanuel",
    date: "15 Jan 2024",
    location: "Jakarta",
    budget: "$10,000",
    description:
      "A refined visual identity direction with editorial-style art direction and premium positioning.",
  },
]

export function FeaturedProjectSection() {
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
            Featured Project
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Unleashing the Power of Innovation
            <br className="hidden sm:block" /> and Creativity.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              <div className="absolute inset-0">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#10041d]/55 via-[#0a0118]/35 to-[#090012]/90" />
              </div>

              <div className="relative flex min-h-[500px] flex-col justify-between">
                <div className="p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff7fd4]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="translate-y-[58%] border-t border-white/10 bg-[#150c25]/85 p-6 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-white/10 pb-5">
                    <InfoItem label="Client" value={project.client} />
                    <InfoItem label="Date" value={project.date} />
                    <InfoItem label="Location" value={project.location} />
                    <InfoItem label="Budget" value={project.budget} />
                  </div>

                  <div className="pt-5">
                    <p className="mb-5 text-sm leading-7 text-white/70">
                      {project.description}
                    </p>

                    <Link
                      href="/portfolio"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-[#cc7bff] to-[#ff8ab5] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:scale-[1.03]"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
