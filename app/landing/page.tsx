'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const audienceCards = [
  {
    title: "For Companies",
    description:
      "Support professional growth, onboarding, team learning, and stronger internal collaboration.",
  },
  {
    title: "For Education",
    description:
      "Create structured learning experiences, mentoring programs, and student engagement systems.",
  },
  {
    title: "For Communities",
    description:
      "Bring members together, improve communication, and grow meaningful digital relationships.",
  },
  {
    title: "For Accelerators",
    description:
      "Manage cohorts, mentor matching, founder support, and program visibility in one place.",
  },
]

const results = [
  { value: "3x", label: "Average sales growth" },
  { value: "50+", label: "Brands supported" },
  { value: "₱M+", label: "Revenue influenced" },
]

const services = [
  {
    title: "E-commerce Growth",
    description:
      "Increase your sales with optimized shops, funnels, and conversion strategies.",
  },
  {
    title: "Content & Branding",
    description:
      "Build authority, engagement, and a stronger brand presence with high-performing content.",
  },
  {
    title: "Paid Advertising",
    description:
      "Scale with data-driven campaigns designed to bring in qualified leads and conversions.",
  },
  {
    title: "Live Commerce",
    description:
      "Turn viewers into buyers through engaging live selling strategies and operations support.",
  },
  {
    title: "Affiliate Marketing",
    description:
      "Leverage creators, affiliates, and partnerships to expand your reach and drive more sales.",
  },
  {
    title: "Analytics & Scaling",
    description:
      "Track what works, improve performance, and grow with confidence using real data.",
  },
]

const values = [
  "Ownership – We take full responsibility for outcomes, accountability, and results.",
  "Integrity – We act honestly with clients, partners, and teammates.",
  "Excellence – We aim for quality, not shortcuts.",
  "Adaptability – We evolve quickly in a fast-changing digital space.",
  "Collaboration – We win as a team.",
]

const integrations = [
  "CRM Platforms",
  "Email Marketing",
  "Calendars",
  "Analytics",
  "Payment Tools",
  "Learning Systems",
]

const testimonials = [
  {
    title: "E-commerce Brand",
    quote:
      "Star Digital Solutions helped us organize our shop operations, improve campaigns, and unlock stronger sales performance across digital channels.",
  },
  {
    title: "Growing Business",
    quote:
      "What stood out most was their ability to combine strategy, execution, and analytics into one clear system that actually delivered results.",
  },
  {
    title: "Scaling Team",
    quote:
      "They felt less like an external vendor and more like a true growth partner invested in our success.",
  },
]

const marqueeLogos = [
  "Logoipsum One",
  "Logoipsum Two",
  "Logoipsum Three",
  "Logoipsum Four",
  "Logoipsum Five",
  "Logoipsum Six",
  "Logoipsum Seven",
  "Logoipsum Eight",
  "Logoipsum Nine",
  "Logoipsum Ten",
]

export default function LandingPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-black pt-36 pb-24 text-white">
          <div className="absolute inset-0 -z-10">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ffb020]">
                Star Digital Solutions
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Grow your brand,
                <br />
                increase your sales,
                <br />
                and dominate your market.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
                We help brands scale through e-commerce, content, advertising, live commerce,
                affiliate marketing, and data-driven growth systems that deliver real results.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#ff002f] px-7 py-3 font-semibold transition hover:scale-105 hover:bg-[#ff264f]"
                >
                  Book a Free Strategy Call
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#f8f5ef] py-16 text-[#1b1b1b]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                Trusted by growing teams
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Built for brands that want scalable growth
              </h2>
              <p className="mt-4 text-[#4b4b4b]">
                Showcase trusted partnerships, client logos, and brand credibility with a
                premium scrolling marquee.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8f5ef] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8f5ef] to-transparent" />

              <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-6">
                {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-black/10 bg-white px-8 shadow-sm"
                  >
                    <LogoIpsumPlaceholderLight index={index} label={logo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ede7f6] py-20 text-[#1b1024]">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
              Proven results
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Results that drive real business growth
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {results.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#d6c8ec] bg-white/70 p-6"
                >
                  <h3 className="text-3xl font-bold text-[#ff002f]">{item.value}</h3>
                  <p className="mt-2 text-[#5d4d6d]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
              About Star Digital Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Your growth partner in the digital economy
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
              Star Digital Solutions is a full-service E-commerce and Digital Growth Agency
              committed to helping brands succeed in today’s fast-paced digital economy.
            </p>

            <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/70">
              We specialize in strategic brand development, content and campaign execution,
              shop management, live commerce, affiliate programs, marketing and advertising,
              analytics, and business growth support.
            </p>

            <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-white/70">
              More than a service provider, we operate as a growth partner—building systems,
              partnerships, and strategies that drive measurable results both online and offline.
            </p>
          </div>
        </section>

        <section className="bg-[#f4efe8] py-24 text-[#201a17]">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
              Growth challenges
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Struggling to grow your business online?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[#5a514c]">
              Many brands waste time and money on marketing that looks busy but does not
              convert. We build systems that turn traffic into customers and customers into
              long-term growth.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                Low sales despite strong traffic
              </div>
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                No clear marketing strategy
              </div>
              <div className="rounded-xl border border-black/10 bg-white/70 p-6">
                Poor conversion and retention
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="rounded-full bg-[#ff002f] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#ff264f]"
              >
                Fix My Growth Strategy
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#2b133a] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Growth services built for modern brands
              </h2>
              <p className="mt-4 text-white/75">
                We combine strategy, execution, and data to help businesses grow faster and
                scale smarter.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-white/75">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f5ef] py-24 text-[#1b1b1b]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                Who we support
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Flexible support for different growth environments
              </h2>
              <p className="mt-4 text-[#4b4b4b]">
                Whether you are managing a company, community, education program, or accelerator,
                our systems can support engagement and growth.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[#7b1fa2]/15" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-[#575757]">{card.description}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-[#7b1fa2]"
                  >
                    Find Out More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e8e0f4] py-24 text-[#1f1328]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-10 md:grid-cols-3">
              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">Mission</h3>
                <p className="mt-4 leading-relaxed text-[#5b4b68]">
                  We empower brands and businesses through innovative strategies, data-driven
                  execution, and meaningful partnerships that drive sustainable growth and
                  long-term visibility.
                </p>
              </div>

              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">Vision</h3>
                <p className="mt-4 leading-relaxed text-[#5b4b68]">
                  To become a leading and trusted brand growth partner, recognized for
                  innovation, operational excellence, integrity, and transformative impact in
                  the digital marketing and e-commerce industry.
                </p>
              </div>

              <div className="rounded-3xl border border-[#d6c8ec] bg-white/70 p-8">
                <h3 className="text-xl font-semibold text-[#7b1fa2]">Core Values</h3>
                <div className="mt-4 space-y-3 text-[#5b4b68]">
                  {values.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                  Integrations
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                  Seamless tools for smarter execution
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  Connect your workflows with the systems you already use and create a more
                  efficient, more measurable growth process.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {integrations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4efe8] py-24 text-[#1f1a17]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-[#ffffff] via-[#f7f1ea] to-[#efe7de] p-10 text-center shadow-sm sm:p-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b1fa2]">
                Ready to scale?
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Ready to grow your business with a strategy that works?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[#5c514a]">
                Let’s build a system that strengthens your brand, improves performance, and
                turns growth into a repeatable process.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#ff002f] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#ff264f]"
                >
                  Book Free Strategy Call
                </a>
                <a
                  href="/services"
                  className="rounded-full border border-black/15 bg-white px-8 py-4 font-semibold text-[#1f1a17] transition hover:bg-black hover:text-white"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2b133a] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffb020]">
                Testimonials
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                What our clients say
              </h2>
              <p className="mt-4 text-white/75">
                Strong partnerships and measurable results are at the heart of our work.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <p className="text-lg leading-8 text-white/85">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb020]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}

function LogoIpsumPlaceholderLight({
  label,
  index,
}: {
  label: string
  index: number
}) {
  const variants = [
    { shape: "circle", text: "logoipsum" },
    { shape: "square", text: "logoipsum" },
    { shape: "triangle", text: "logoipsum" },
    { shape: "diamond", text: "logoipsum" },
    { shape: "ring", text: "logoipsum" },
  ]

  const variant = variants[index % variants.length]

  return (
    <div className="flex items-center gap-3 text-[#222]">
      <div className="flex h-10 w-10 items-center justify-center">
        {variant.shape === "circle" && (
          <div className="h-8 w-8 rounded-full border-2 border-[#222]" />
        )}
        {variant.shape === "square" && (
          <div className="h-8 w-8 rounded-md border-2 border-[#222]" />
        )}
        {variant.shape === "triangle" && (
          <div className="h-0 w-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#222]" />
        )}
        {variant.shape === "diamond" && (
          <div className="h-7 w-7 rotate-45 border-2 border-[#222]" />
        )}
        {variant.shape === "ring" && (
          <div className="h-8 w-8 rounded-full border-[5px] border-[#222]" />
        )}
      </div>

      <div className="text-left">
        <div className="text-base font-semibold leading-none tracking-wide">
          {variant.text}
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[#666]">
          {label.replace("Logoipsum ", "")}
        </div>
      </div>
    </div>
  )
}
