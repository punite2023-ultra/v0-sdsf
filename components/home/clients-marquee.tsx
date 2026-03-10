const clients = [
  "Social Media Marketing",
  "Content Creation & Branding",
  "E-Commerce Strategy & Management",
  "Influencer and Affiliate Marketing",
  "Live Streaming Services",
  "Website Design & Development",
  "Brand Strategy",
]

export function ClientsMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-white/10 bg-black"
      aria-label="Services marquee"
    >
      <div className="relative flex h-14 items-center">
        <div
          className="flex min-w-max items-center whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center whitespace-nowrap"
            >
              <span className="px-6 text-[18px] font-semibold uppercase leading-none tracking-tight text-white md:text-[20px]">
                {client}
              </span>

              <span className="text-[18px] font-semibold text-white/90 md:text-[20px]">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
