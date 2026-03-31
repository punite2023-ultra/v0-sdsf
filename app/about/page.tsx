"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const valuesEn = [
  {
    icon: Lightbulb,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Target,
    title: "Dolor Sit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Users,
    title: "Amet Consectetur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    icon: Award,
    title: "Adipiscing Elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
]

const valuesZh = [
  {
    icon: Lightbulb,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Target,
    title: "Dolor Sit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Users,
    title: "Amet Consectetur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    icon: Award,
    title: "Adipiscing Elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
]

const team = [
  {
    name: "Lorem Ipsum One",
    role: "Dummy Position One",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Lorem Ipsum Two",
    role: "Dummy Position Two",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum Three",
    role: "Dummy Position Three",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Lorem Ipsum Four",
    role: "Dummy Position Four",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    name: "Lorem Ipsum Five",
    role: "Dummy Position Five",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    name: "Lorem Ipsum Six",
    role: "Dummy Position Six",
    bio: "Mollit anim id est laborum lorem ipsum dolor sit amet.",
  },
]

const milestones = [
  {
    year: "2009",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2012",
    title: "Dolor Sit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2015",
    title: "Amet Consectetur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    year: "2018",
    title: "Adipiscing Elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    year: "2022",
    title: "Tempor Incididunt",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    year: "2024",
    title: "Magna Aliqua",
    description: "Mollit anim id est laborum lorem ipsum dolor sit amet.",
  },
]

export default function AboutPage() {
  const { language } = useLanguage()
  const values = language === "en" ? valuesEn : valuesZh

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 pt-24">
          <div className="container mx-auto flex flex-col items-center justify-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl text-center">
              <ScrollReveal>
                <h1
                  className="mb-6 text-5xl font-bold text-foreground lg:text-7xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {language === "en" ? "Lorem Ipsum" : "Lorem Ipsum"}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="flex aspect-[4/3] items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary/40">
                          01
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl md:block">
                    <div className="text-5xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Lorem Ipsum</div>
                  </div>
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <span className="text-sm font-medium uppercase tracking-wider text-primary">
                    {language === "en" ? "Lorem Ipsum" : "Lorem Ipsum"}
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <h2
                    className="mt-4 mb-6 text-3xl font-bold md:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Lorem Ipsum Dolor Sit Amet
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <Button asChild size="lg" className="group rounded-full px-8">
                    <Link href="/contact" className="flex items-center gap-2">
                      Lorem Ipsum
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <ScrollReveal>
                <div className="h-full rounded-3xl bg-primary p-10 text-primary-foreground lg:p-12">
                  <h3
                    className="mb-4 text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {language === "en" ? "Lorem Mission" : "Lorem Mission"}
                  </h3>

                  <p className="text-lg leading-relaxed text-primary-foreground/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-full rounded-3xl border border-border bg-card p-10 lg:p-12">
                  <h3
                    className="mb-4 text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {language === "en" ? "Lorem Vision" : "Lorem Vision"}
                  </h3>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <ScrollReveal>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  {language === "en" ? "Lorem Values" : "Lorem Values"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Dolor Sit
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <ScrollReveal>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  {language === "en" ? "Lorem Journey" : "Lorem Journey"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Milestones
                </h2>
              </ScrollReveal>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-8 w-px bg-border md:left-1/2 md:-translate-x-px" />

                {milestones.map((milestone, index) => (
                  <ScrollReveal key={milestone.year} delay={index * 100}>
                    <div
                      className={`relative mb-12 flex items-center gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`hidden flex-1 md:block ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div className="text-3xl font-bold text-primary">
                          {milestone.year}
                        </div>
                        <div className="mt-1 text-xl font-semibold">
                          {milestone.title}
                        </div>
                        <div className="mt-2 text-muted-foreground">
                          {milestone.description}
                        </div>
                      </div>

                      <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2" />

                      <div className="flex-1 pl-16 md:pl-0">
                        <div className="md:hidden">
                          <div className="text-3xl font-bold text-primary">
                            {milestone.year}
                          </div>
                          <div className="mt-1 text-xl font-semibold">
                            {milestone.title}
                          </div>
                          <div className="mt-2 text-muted-foreground">
                            {milestone.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <ScrollReveal>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  {language === "en" ? "Lorem Team" : "Lorem Team"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className="mt-4 mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorem Ipsum Experts
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="group hover-lift overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="img-zoom flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary/40">
                          {(index + 1) * 10}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <div className="mt-1 text-sm font-medium text-primary">
                        {member.role}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
