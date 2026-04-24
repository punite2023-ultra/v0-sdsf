"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const panels = [
  {
    eyebrow: "// ABOUT STAR DIGITAL SOLUTIONS",
    title: "Everything App for your teams",
    body: "A digital growth partner built for brands, creators, commerce teams, and modern campaigns.",
    cta: "See in Action",
  },
  {
    eyebrow: "// MISSION",
    title: "We build adaptive digital systems.",
    body: "We connect content, commerce, creators, and data into one growth engine designed to help brands move faster and scale with clarity.",
  },
  {
    eyebrow: "// ARCHITECTURE",
    title: "Strategy, execution, and optimization in sync.",
    body: "Our framework combines creator networks, campaign systems, e-commerce support, and performance learning into a repeatable operating model.",
  },
]

export default function AboutPage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<HTMLDivElement[]>([])
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const isAnimating = useRef(false)

  const goToPanel = (nextIndex: number) => {
    if (!wrapperRef.current || isAnimating.current) return
    if (nextIndex < 0 || nextIndex >= panels.length) return
    if (nextIndex === currentRef.current) return

    isAnimating.current = true
    const direction = nextIndex > currentRef.current ? 1 : -1
    const currentPanel = panelRefs.current[currentRef.current]
    const nextPanel = panelRefs.current[nextIndex]

    gsap.set(nextPanel, {
      yPercent: 100 * direction,
      opacity: 1,
      scale: 0.98,
      pointerEvents: "auto",
      zIndex: 3,
    })

    gsap.set(currentPanel, {
      zIndex: 2,
      pointerEvents: "none",
    })

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1 },
      onComplete: () => {
        gsap.set(panelRefs.current, {
          yPercent: 0,
          opacity: 0,
          zIndex: 1,
          pointerEvents: "none",
        })
        gsap.set(nextPanel, {
          opacity: 1,
          scale: 1,
          zIndex: 2,
          pointerEvents: "auto",
        })
        currentRef.current = nextIndex
        setCurrent(nextIndex)
        isAnimating.current = false
      },
    })

    tl.to(currentPanel, {
      yPercent: -35 * direction,
      opacity: 0,
      scale: 0.94,
      filter: "blur(10px)",
    })
      .to(
        nextPanel,
        {
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        "<",
      )
      .fromTo(
        nextPanel.querySelectorAll(".panel-copy"),
        { opacity: 0, y: 42, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.8 },
        "-=0.52",
      )
  }

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (event.deltaY > 0) goToPanel(currentRef.current + 1)
      if (event.deltaY < 0) goToPanel(currentRef.current - 1)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") goToPanel(currentRef.current + 1)
      if (event.key === "ArrowUp") goToPanel(currentRef.current - 1)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useGSAP(() => {
    gsap.set(panelRefs.current, {
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    })
    gsap.set(panelRefs.current[0], {
      opacity: 1,
      zIndex: 2,
      pointerEvents: "auto",
    })
    gsap.fromTo(
      panelRefs.current[0].querySelectorAll(".panel-copy"),
      { opacity: 0, y: 42, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.9, ease: "power3.out" },
    )
  }, [])

  return (
    <>
      <Navigation />

      <main ref={wrapperRef} className="relative h-screen overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.2),transparent_32%),linear-gradient(90deg,#030303_0%,#05060d_48%,#101827_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,rgba(255,255,255,0.42)_1px,transparent_1px)] [background-size:4px_4px]" />
        <div className="pointer-events-none absolute left-[60%] top-0 hidden h-full w-[2px] -translate-x-1/2 bg-white/70 shadow-[0_0_24px_7px_rgba(219,234,254,0.78),0_0_110px_28px_rgba(59,130,246,0.48)] md:block" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[210px] w-[86vw] -translate-x-1/2 rounded-t-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,rgba(191,219,254,0.48)_12%,rgba(96,165,250,0.24)_34%,transparent_72%)] blur-[8px]" />

        {panels.map((panel, index) => (
          <section
            key={panel.eyebrow}
            ref={(element) => {
              if (element) panelRefs.current[index] = element
            }}
            className="absolute inset-0 flex min-h-screen items-center px-6 pt-20 sm:px-10 lg:px-16"
          >
            <div className="max-w-5xl">
              <p className="panel-copy mb-6 text-xs font-bold uppercase tracking-[0.34em] text-white/55">
                {panel.eyebrow}
              </p>
              <h1 className="panel-copy max-w-[12ch] text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {panel.title}
              </h1>
              <p className="panel-copy mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg md:text-xl">
                {panel.body}
              </p>

              {panel.cta && (
                <div className="panel-copy mt-12">
                  <Link
                    href="/services"
                    className="group inline-flex min-w-[260px] items-center justify-between rounded-full bg-white/90 px-8 py-4 text-sm font-black uppercase tracking-tight text-black shadow-[0_0_36px_rgba(255,120,40,0.82)] transition duration-300 hover:bg-white hover:shadow-[0_0_60px_rgba(255,120,40,1)]"
                  >
                    {panel.cta}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}

        <div className="absolute bottom-8 right-6 z-20 flex flex-col gap-3 sm:right-10 lg:right-16">
          {panels.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPanel(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "w-10 bg-white" : "w-2.5 bg-white/35 hover:bg-white/65"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-6 z-20 text-xs font-bold uppercase tracking-[0.32em] text-white/40 sm:left-10 lg:left-16">
          {String(current + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
