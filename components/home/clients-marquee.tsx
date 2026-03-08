export function ClientsMarquee() {
  return (
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <div className="relative">
        {/* Ensure flex-nowrap to keep everything in one line */}
        <div className="flex space-x-8 flex-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px]"  // Adjust width if needed
            >
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
