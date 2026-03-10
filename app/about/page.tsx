import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | Star Digital Solutions Agency",
  description: "Learn about our story, mission, and the talented team behind Aurelia Creative Agency.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We are committed to delivering the highest quality work that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong partnerships with our clients.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical standards in everything we do.",
  },
]

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "15+ years of experience in digital strategy and brand development.",
  },
  {
    name: "Marcus Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Award-winning designer with a passion for creating memorable experiences.",
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Full-stack expert specializing in scalable web applications.",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Data-driven marketer focused on ROI and growth strategies.",
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
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  We Are a Team of Creative Problem Solvers
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Since 2009, we have been helping businesses transform their digital presence and achieve remarkable growth through innovative design and strategic thinking.
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
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    We Transform Brands Through Digital Strategy
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Star Digital Solutions Inc. helps brands grow in today’s fast-moving digital landscape through strategic marketing, creative content, and platform management.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our team delivers data-driven solutions that strengthen brand presence, increase engagement, and drive measurable results across digital channels.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <Button asChild size="lg" className="rounded-full px-8 group">
                    <Link href="/contact" className="flex items-center gap-2">
                      Work With Us
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
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our Mission</h3>
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">
                    We empower brands and businesses with innovative digital strategies, impactful content, and authentic partnerships that drive growth and visibility. By combining creativity, technology, and data-driven insights, we help brands succeed across today’s ever-evolving digital landscape.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-card border border-border p-10 lg:p-12 rounded-3xl h-full">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become the trusted partner of brands worldwide by setting the standard for innovation, creativity, and excellence in digital marketing—helping businesses grow, connect with their audiences, and thrive in the evolving digital landscape.
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  What We Stand For
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Journey</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Milestones
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Meet the Experts
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground">
                  Our diverse team of talented professionals brings together expertise from various disciplines to deliver exceptional results.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift">
                    <div className="aspect-[4/5] overflow-hidden img-zoom">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                      />
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
