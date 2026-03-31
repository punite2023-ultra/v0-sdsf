import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { blogArticles } from "@/lib/content"

export const metadata = {
  title: "Lorem Ipsum | Lorem Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

const categories = ["Lorem", "Ipsum", "Dolor", "Sit"]

export default function BlogPage() {
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
                  Lorem Ipsum Dolor Sit Amet
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <Link href={`/blog/${blogArticles[0].slug}`}>
                <div className="relative rounded-3xl overflow-hidden mb-20 group cursor-pointer">
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={blogArticles[0].image}
                      alt={blogArticles[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                    <div>
                      <div className="inline-block text-xs font-medium text-primary-foreground uppercase tracking-wider mb-4 bg-primary/80 px-3 py-1 rounded-full">
                        Lorem Ipsum
                      </div>

                      <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Lorem Ipsum Dolor Sit Amet
                      </h2>

                      <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>

                      <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Lorem Ipsum
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Lorem Date
                        </div>
                        <span>Lorem Read Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.slice(1).map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift flex flex-col h-full cursor-pointer">
                      <div className="relative h-48 overflow-hidden img-zoom">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-primary text-primary-foreground rounded-full">
                            Lorem Ipsum
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          Lorem Ipsum Dolor Sit
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt.
                        </p>

                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            Lorem Ipsum
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            Lorem Date
                          </div>
                          <div>Lorem Read Time</div>
                        </div>

                        <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                          Lorem Ipsum
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <div className="rounded-3xl bg-primary p-12 lg:p-16 text-center text-primary-foreground">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Lorem Ipsum Dolor
                  </h2>

                  <p className="text-lg text-primary-foreground/90 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <form className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Lorem ipsum"
                      className="bg-primary-foreground text-foreground placeholder:text-muted-foreground rounded-full px-6 py-3 flex-1"
                      required
                    />
                    <Button className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Lorem Ipsum
                    </Button>
                  </form>

                  <p className="text-xs text-primary-foreground/70 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
