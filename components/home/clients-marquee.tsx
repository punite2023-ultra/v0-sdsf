const clients = [
  "Social Media Marketing",
  "Content Creation & Branding",
  "E-Commerce Strategy & Management",
  "Influencer and Affiliate Marketing",
  "Live Streaming Services",
  "Dummy Text for now",
  "Dummy Text for now",
  "Dummy Text for now",
  "Dummy Text for now",
  "Dummy Text for now",
]

export function ClientsMarquee() {
  return (
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <div className="relative">
        {/* Ensuring flex-nowrap prevents wrapping and using space-x for horizontal spacing */}
        <div className="flex animate-marquee space-x-4 flex-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px]"  // Adjust width if needed
            >
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
