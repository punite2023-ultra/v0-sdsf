import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function LandingPage() {
  return (
    <>
      <Navigation />

      <main className="bg-black text-white">

        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">

          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl max-w-4xl">
            Scale Your Business With
            <br />
            <span className="text-purple-400">Powerful Digital Solutions</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We help brands grow, automate, and dominate their industry using cutting-edge technology.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500">
              Get Started
            </button>

            <button className="rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>

        </section>

        {/* SIMPLE FEATURE SECTION */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
              <p className="text-white/70">Launch your ideas quickly with modern tech.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Scalable Systems</h3>
              <p className="text-white/70">Built to grow with your business.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
              <p className="text-white/70">Save time and increase efficiency.</p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
