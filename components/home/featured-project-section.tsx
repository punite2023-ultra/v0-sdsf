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
      "A premium branding and packaging concept built to elevate product storytelling.",
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
      "A modern campaign direction focused on awareness and engagement.",
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
      "A polished digital product experience designed for usability.",
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
      "An SEO-led growth project to increase visibility and traffic.",
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
      "A calm and premium visual system crafted for brand consistency.",
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
      "A refined visual identity with premium positioning.",
  },
]

export function FeaturedProjectSection() {
  return (
    <section className="relative overflow-hidden bg-[#070012] px-4 py-20 text-white sm:px-6 lg:px-8">
      
      {/* GRID BACKGROUND */}
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d972ff]">
            FEATURED PROJECT
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Unleashing the Power of Innovation
            <br /> and Creativity.
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-white/20"
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#10041d]/50 via-transparent to-[#090012]/90" />

              <div className="relative flex min-h-[460px] flex-col justify-between">
                
                {/* TOP */}
                <div className="p-6">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#ff7fd4]">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-medium text-white">
                    {project.title}
                  </h3>
                </div>

                {/* HOVER PANEL */}
                <div className="translate-y-[60%] border-t border-white/10 bg-[#150c25]/90 p-6 backdrop-blur-md transition duration-500 group-hover:translate-y-0">
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <Info label="Client" value={project.client} />
                    <Info label="Date" value={project.date} />
                    <Info label="Location" value={project.location} />
                    <Info label="Budget" value={project.budget} />
                  </div>

                  <p className="mt-4 text-sm text-white/70">
                    {project.description}
                  </p>

                  <Link
                    href="/portfolio"
                    className="mt-5 inline-block rounded-full bg-gradient-to-r from-[#cc7bff] to-[#ff8ab5] px-5 py-2 text-[11px] uppercase tracking-widest text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase text-white/40">{label}</p>
      <p className="text-white/90">{value}</p>
    </div>
  )
}
