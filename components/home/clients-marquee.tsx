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
      <div className="relative w-full">
        {/* Ensuring the flex container can handle overflow horizontally */}
        <div className="flex space-x-4 flex-nowrap overflow-x-auto">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] px-4"
            >
              <span className="text-sm font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
