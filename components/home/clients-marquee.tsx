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
      className="overflow-hidden"
      style={{ backgroundColor: "#62248e" }}
      aria-label="Services marquee"
    >
      <div className="relative flex h-16 items-center">
        <div
          className="flex min-w-max items-center whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">

              <span className="px-6 text-base font-bold uppercase text-white">
                {client}
              </span>

              <span className="text-base font-bold text-white/90">
                ✦
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
