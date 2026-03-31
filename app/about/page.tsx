'use client'

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const valuesEn = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const valuesZh = [
  {
    icon: Lightbulb,
    title: "创新",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Target,
    title: "卓越",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Users,
    title: "协作",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Award,
    title: "诚信",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const team = [
  {
    name: "Team Member One",
    role: "Position One",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Team Member Two",
    role: "Position Two",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Team Member Three",
    role: "Position Three",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Team Member Four",
    role: "Position Four",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Emma Wilson",
    role: "UX Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    bio: "Human-centered design advocate with expertise in user research.",
  },
  {
    name: "James Taylor",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "PMP certified with 10+ years managing complex digital projects.",
  },
]

const milestones = [
  { year: "2009", title: "Founded", description: "Started with a small team of 3 passionate creatives" },
  { year: "2012", title: "First Major Client", description: "Landed our first Fortune 500 client" },
  { year: "2015", title: "50 Team Members", description: "Expanded our team and opened a second office" },
  { year: "2018", title: "International", description: "Expanded operations to Europe and Asia" },
  { year: "2022", title: "Award Winner", description: "Won multiple industry awards for excellence" },
  { year: "2024", title: "250+ Projects", description: "Celebrated completing over 250 successful projects" },
]

export default function AboutPage() {
  const { language } = useLanguage()
  const values = language === 'en' ? valuesEn : valuesZh

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 pt-24">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center justify-center py-20 lg:py-28">
            <div className="max-w-4xl text-center">
              <ScrollReveal>
                <h1
                  className="text-5xl lg:text-7xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {language === 'en' ? 'About Us' : '关于我们'}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {language === 'en' 
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="Our team at work"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl hidden md:block">
                    <div className="text-5xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {language === 'en' ? 'Our Story' : '我们的故事'}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    {language === 'en' ? 'Lorem Ipsum Dolor Sit Amet' : 'Lorem Ipsum Dolor Sit Amet'}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {language === 'en'
                      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {language === 'en'
                      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <Button asChild size="lg" className="rounded-full px-8 group">
                    <Link href="/contact" className="flex items-center gap-2">
                      {language === 'en' ? 'Work With Us' : '与我们合作'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <ScrollReveal>
                <div className="bg-primary text-primary-foreground p-10 lg:p-12 rounded-3xl h-full">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {language === 'en' ? 'Our Mission' : '我们的使命'}
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">
                    {language === 'en'
                      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-card border border-border p-10 lg:p-12 rounded-3xl h-full">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {language === 'en' ? 'Our Vision' : '我们的愿景'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {language === 'en'
                      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Our Values' : '我们的价值观'}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'en' ? 'What We Stand For' : '我们坚持的原则'}
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="bg-card p-8 rounded-2xl border border-border text-center hover-lift h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Our Journey' : '我们的旅程'}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'en' ? 'Milestones' : '里程碑'}
                </h2>
              </ScrollReveal>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                {milestones.map((milestone, index) => (
                  <ScrollReveal key={milestone.year} delay={index * 100}>
                    <div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                        <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                        <div className="text-xl font-semibold mt-1">{milestone.title}</div>
                        <div className="text-muted-foreground mt-2">{milestone.description}</div>
                      </div>
                      
                      {/* Center dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
                      
                      <div className="flex-1 pl-16 md:pl-0">
                        <div className="md:hidden">
                          <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                          <div className="text-xl font-semibold mt-1">{milestone.title}</div>
                          <div className="text-muted-foreground mt-2">{milestone.description}</div>
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
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {language === 'en' ? 'Our Team' : '我们的团队'}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'en' ? 'Meet the Experts' : '认识专家'}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground">
                  {language === 'en'
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift">
                    <div className="aspect-[4/5] overflow-hidden img-zoom bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary/40">{(index + 1) * 10}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <div className="text-primary font-medium text-sm mt-1">{member.role}</div>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{member.bio}</p>
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
