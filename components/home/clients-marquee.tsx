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
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee gap-8">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center whitespace-nowrap px-4"
            >
              <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                {client}
              </span>
              <span className="mx-6 text-muted-foreground/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
