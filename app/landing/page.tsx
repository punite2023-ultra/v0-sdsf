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

const stats = [
  { value: "4.9", label: "Client satisfaction rating" },
  { value: "5x", label: "Faster growth through smart systems" },
  { value: "60+", label: "Tools and workflows supported" },
  { value: "71%", label: "Organizations prioritize stronger communities" },
]

const features = [
  {
    title: "Community Wall",
    description:
      "Highlight real-time updates, announcements, and engagement in one shared digital space.",
  },
  {
    title: "Smart Matching",
    description:
      "Connect the right people based on goals, interests, strengths, and growth opportunities.",
  },
  {
    title: "Member Directory",
    description:
      "Make your network searchable and easy to explore for stronger collaboration.",
  },
  {
    title: "Event Management",
    description:
      "Schedule, promote, and manage events, sessions, and workshops with ease.",
  },
  {
    title: "Direct Messaging",
    description:
      "Enable secure communication between members, mentors, teams, and community leaders.",
  },
  {
    title: "Discussion Forum",
    description:
      "Create an active space for learning, idea sharing, and community support.",
  },
  {
    title: "Calendar Tools",
    description:
      "Keep members aligned with reminders, event dates, and structured schedules.",
  },
  {
    title: "Content Library",
    description:
      "Store and share documents, guides, media, and learning materials in one place.",
  },
  {
    title: "Learning Hub",
    description:
      "Deliver structured online learning, onboarding, and training experiences.",
  },
  {
    title: "Applications & Onboarding",
    description:
      "Create smooth joining flows with forms, approvals, and guided onboarding steps.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track engagement, participation, outcomes, and growth from a single dashboard.",
  },
  {
    title: "Monetization Options",
    description:
      "Support memberships, premium content, services, and event-based revenue models.",
  },
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
    title: "Tech Company",
    quote:
      "This platform helped us strengthen onboarding, team collaboration, and internal engagement without juggling multiple tools.",
  },
  {
    title: "University Program",
    quote:
      "We created a more connected student and alumni experience with better visibility, mentoring, and measurable outcomes.",
  },
  {
    title: "Community Organization",
    quote:
      "It gave our members a place to connect, grow, and participate in a way that finally felt organized and scalable.",
  },
]

export default function LandingPage() {
  return (
    <>
      <Navigation />

      <main className="bg-black text-white">
        <section className="relative overflow-hidden pt-36 pb-24">
          <div className="absolute inset-0 -z-10">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#ff9f1a]">
                Digital Growth Platform
              </p>

              <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Build stronger communities,
                <br />
                smarter engagement,
                <br />
                and scalable digital growth.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
                Star Digital Solutions helps organizations connect people, streamline
                programs, and create meaningful digital experiences from one powerful hub.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#7b1fa2] px-7 py-3 font-semibold transition hover:scale-105 hover:bg-[#8e24aa]"
                >
                  Get Started
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

        <section className="border-y border-white/10 bg-white/[0.03] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                Trusted by growing teams
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Built for organizations that value connection
              </h2>
              <p className="mt-4 text-white/75">
                Use this section for client logos, partner logos, or brands you’ve worked with.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {["Client One", "Client Two", "Client Three", "Client Four", "Client Five", "Client Six"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 text-center text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                Who it’s for
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Real connections that drive growth
              </h2>
              <p className="mt-4 text-white/75">
                Whether you are running programs, onboarding members, or growing a digital
                community, this landing page can support multiple audience types.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[#7b1fa2]/25" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-white/75">{card.description}</p>
                  <a href="/contact" className="mt-5 inline-block text-sm font-semibold text-[#ff9f1a]">
                    Find Out More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center"
                >
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <p className="mt-3 text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                Feature list
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Key features for growth and engagement
              </h2>
              <p className="mt-4 text-white/75">
                Everything you need to build, manage, and scale a digital experience in one place.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-white/75">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                  Integrations
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                  Smooth connections with your favorite tools
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  Connect your landing page experience to the systems you already use so your
                  workflows stay efficient and your data stays connected.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {integrations.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#120018] via-[#1e0827] to-[#100012] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                Ready to grow?
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Ready to build a stronger, more connected digital experience?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-white/80">
                Show your visitors a clear next step with a strong CTA section like the one
                used on StellarUp’s homepage. 
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#7b1fa2] px-7 py-3 font-semibold transition hover:scale-105 hover:bg-[#8e24aa]"
                >
                  Book a Demo
                </a>
                <a
                  href="/pricing"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ff9f1a]">
                Testimonials
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                What our clients say
              </h2>
              <p className="mt-4 text-white/75">
                StellarUp’s homepage also uses a testimonial section near the bottom. 
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <p className="text-lg leading-8 text-white/85">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9f1a]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
