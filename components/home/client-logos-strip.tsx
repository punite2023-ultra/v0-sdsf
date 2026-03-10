"use client"

import Image from "next/image"

const logos = [
  { name: "Bibizon", src: "/clients/bibizon.png" },
  { name: "YiAD", src: "/clients/yiad.png" },
  { name: "Shuta", src: "/clients/shuta.png" },
  { name: "Xtreme", src: "/clients/xtreme.png" },
  { name: "Stark Fitness", src: "/clients/stark-fitness.png" },
  { name: "Alibaba", src: "/clients/alibaba.png" },
  { name: "Dazzle Me", src: "/clients/dazzle-me.png" },
  { name: "Vice Cosmetics", src: "/clients/vice-cosmetics.png" },
  { name: "CDO Holiday Ham", src: "/clients/cdo-holiday-ham.png" },
  { name: "San Marino", src: "/clients/san-marino.png" },
  { name: "San Miguel", src: "/clients/san-miguel.png" },
  { name: "Jollibee", src: "/clients/jollibee.png" },
  { name: "Purefoods", src: "/clients/purefoods.png" },
  { name: "Nestle", src: "/clients/nestle.png" },
  { name: "Coco", src: "/clients/coco.png" },
  { name: "Tecno", src: "/clients/tecno.png" },
  { name: "Mars Wrigley", src: "/clients/mars-wrigley.png" },
  { name: "Infinix", src: "/clients/infinix.png" },
  { name: "Quaker", src: "/clients/quaker.png" },
  { name: "Monde Nissin", src: "/clients/monde-nissin.png" },
  { name: "Magnolia", src: "/clients/magnolia.png" },
  { name: "Realme", src: "/clients/realme.png" },
]

export function ClientLogosStrip() {
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="bg-muted/30 pb-20 pt-2">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="rounded-[2rem] border border-black/5 bg-background/70 px-6 py-8 shadow-sm md:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[280px_1fr]">
            <div>
              <h3 className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                Trusted By Top 120+
                <br />
                Client and Companies
              </h3>
            </div>

            <div className="overflow-hidden">
              <div className="flex w-max animate-client-marquee items-center gap-14">
                {marqueeLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex h-16 min-w-[140px] items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={150}
                      height={70}
                      className="max-h-14 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
