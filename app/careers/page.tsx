import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Users, Zap, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobs } from "@/lib/content"
import { JobAccordion } from "@/components/careers/job-accordion"

export const metadata = {
  title: "Lorem Ipsum | Lorem Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

const perks = [
  {
    icon: Zap,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Users,
    title: "Dolor Sit Amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Target,
    title: "Consectetur Elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: DollarSign,
    title: "Magna Aliqua",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const coreValues = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dolor Sit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Amet Consectetur",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Adipiscing Elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Tempor Incididunt",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Ut Enim",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
]

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Lorem Ipsum
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Dolor Sit
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Dolor
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {perks.map((perk, index) => {
                const Icon = perk.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{perk.title}</h3>
                      <p className="text-muted-foreground">{perk.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Amet
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Positions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet for {jobs.length} lorem roles.
                </p>
              </div>
            </ScrollReveal>

            <JobAccordion jobs={jobs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Impact
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="mailto:careers@sdsf.com">Lorem Ipsum Application</a>
                </Button>
                <p className="text-sm text-primary-foreground/80 mt-4">
                  Lorem ipsum: careers@sdsf.com
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
