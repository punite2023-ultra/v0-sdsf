const clients = [
  "Social Media Marketing Content Creation & Branding",
  "E-Commerce Strategy & Management",
  "Influencer and Affiliate Marketing",
  "Live Streaming Services",
  "Dummy Text for now",
  "Dummy Text for now",
  "Dummy Text for now",
]

export function ClientsMarquee() {
  return (
    <section className="py-8 overflow-hidden" style={{ backgroundColor: '#62248e' }}>
      <div className="relative">
        <div className="flex animate-marquee gap-8">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center whitespace-nowrap px-3"
            >
              <span className="text-base font-medium text-white hover:text-white/80 transition-colors duration-300 cursor-default">
                {client}
              </span>
              <span className="mx-6 text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
