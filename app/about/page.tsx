"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
})

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#f6f1e8] text-[#15110f]">

        {/* HERO */}
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${raleway.className} text-[clamp(3rem,8vw,8rem)] leading-[0.85] font-extrabold`}>
              Turning Brands Into Digital Growth Machines.
            </h1>

            <p className="mt-6 text-lg max-w-2xl text-black/60">
              We align content, commerce, and creators into one system that drives real growth.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="px-6 py-3 bg-black text-white rounded-full">
                Start a Project
              </Link>
              <Link href="/services" className="px-6 py-3 border rounded-full">
                See Services
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${raleway.className} text-4xl mb-10`}>
              Growth feels harder than it should.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Your strategy feels scattered",
                "Content and commerce are disconnected",
                "Results are unclear",
                "Scaling is difficult",
              ].map((item) => (
                <div key={item} className="p-6 bg-white rounded-xl border">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-24 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${raleway.className} text-4xl mb-12`}>
              What We Do
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Content & Creative",
                "E-Commerce Growth",
                "Creators & Influencer Marketing",
                "Performance Execution",
              ].map((item) => (
                <div key={item} className="p-8 border border-white/20 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-xl border">
              <h3 className="text-5xl font-bold">100+</h3>
              <p>Brands</p>
            </div>
            <div className="p-8 bg-white rounded-xl border">
              <h3 className="text-5xl font-bold">FMCG</h3>
              <p>Industries</p>
            </div>
            <div className="p-8 bg-white rounded-xl border">
              <h3 className="text-5xl font-bold">MCN</h3>
              <p>Network</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-black text-white text-center">
          <h2 className={`${raleway.className} text-5xl`}>
            Ready to scale your brand?
          </h2>

          <Link href="/contact" className="mt-8 inline-block px-8 py-4 bg-white text-black rounded-full">
            Get Started
          </Link>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
