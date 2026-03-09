"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageWrapRef = useRef<HTMLDivElement | null>(null)
  const textWrapRef = useRef<HTMLDivElement | null>(null)
  const outlineWrapRef = useRef<HTMLDivElement | null>(null)
  const rightBlockRef = useRef<HTMLDivElement | null>(null)
  const leftBlockRef = useRef<HTMLDivElement | null>(null)
  const circleRef = useRef<HTMLDivElement | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.6 })

  const imageX = useTransform(springX, [-0.5, 0.5], [-28, 28])
  const imageY = useTransform(springY, [-0.5, 0.5], [-18, 18])

  const textX = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const textY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  const outlineX = useTransform(springX, [-0.5, 0.5], [14, -14])
  const outlineY = useTransform(springY, [-0.5, 0.5], [10, -10])

  const circleX = useTransform(springX, [-0.5, 0.5], [-20, 20])
  const circleY = useTransform(springY, [-0.5, 0.5], [-20, 20])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          leftBlockRef.current,
          rightBlockRef.current,
          circleRef.current,
          ".hero-main-text",
          ".hero-outline-text",
          ".hero-image",
          ".hero-cta",
        ],
        {
          opacity: 0,
        }
      )

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        leftBlockRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          rightBlockRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          circleRef.current,
          { scale: 0.8, opacity: 0, rotate: -12 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          ".hero-main-text",
          { y: 80, scale: 0.94, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.1 },
          "-=0.45"
        )
        .fromTo(
          ".hero-outline-text",
          { y: 100, scale: 1.04, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.1 },
          "-=0.9"
        )
        .fromTo(
          ".hero-image",
          { y: 70, scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.1 },
          "-=0.95"
        )
        .fromTo(
          ".hero-cta",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.65"
        )

      gsap.to(imageWrapRef.current, {
        y: "-=16",
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(circleRef.current, {
        y: "-=10",
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      if (sectionRef.current) {
        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1200",
            scrub: 1.2,
            pin: true,
          },
        })

        heroTl
          .to(
            imageWrapRef.current,
            {
              y: -90,
              scale: 1.12,
              ease: "none",
            },
            0
          )
          .to(
            textWrapRef.current,
            {
              y: -120,
              ease: "none",
            },
            0
          )
          .to(
            outlineWrapRef.current,
            {
              y: -70,
              scale: 1.03,
              ease: "none",
            },
            0
          )
          .to(
            leftBlockRef.current,
            {
              y: -45,
              opacity: 0.35,
              ease: "none",
            },
            0
          )
          .to(
            rightBlockRef.current,
            {
              y: -55,
              opacity: 0.45,
              ease: "none",
            },
            0
          )
          .to(
            circleRef.current,
            {
              y: -90,
              scale: 1.08,
              rotation: 10,
              ease: "none",
            },
            0
          )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-12 lg:px-10">
        <div className="relative min-h-[820px]">
          <motion.div
            ref={leftBlockRef}
            style={{ x: textX, y: textY }}
            className="absolute left-0 top-24 z-20 hidden w-[220px] xl:block"
          >
            <div className="mb-6 flex items-center">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="-ml-2 relative h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-5 h-[3px] w-[180px] bg-lime-300" />

            <p className="max-w-[190px] text-[24px] font-black uppercase leading-[0.95] tracking-[-0.03em]">
              The expert team brings a creativity to every project.
            </p>

            <div className="mt-16 space-y-10">
              <div>
                <div className="text-[88px] font-black leading-none tracking-[-0.08em]">
                  500<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-[24px] font-black uppercase leading-none">
                  Happy Client
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>

              <div>
                <div className="text-[88px] font-black leading-none tracking-[-0.08em]">
                  125<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-[24px] font-black uppercase leading-none">
                  Project Done
                </div>
                <div className="mt-6 h-[3px] w-[180px] bg-lime-300" />
              </div>
            </div>
          </motion.div>

          <div className="relative mx-auto flex min-h-[820px] w-full items-center justify-center">
            <motion.div
              ref={textWrapRef}
              style={{ x: textX, y: textY }}
              className="pointer-events-none relative z-10 text-center"
            >
              <div className="hero-main-text text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Creative
              </div>
              <div className="hero-main-text -mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-lime-300 xl:text-[17rem]">
                Agency
              </div>
            </motion.div>

            <motion.div
              ref={outlineWrapRef}
              style={{ x: outlineX, y: outlineY }}
              className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="hero-outline-text text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Creative
                </div>
                <div className="hero-outline-text -mt-2 text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#D7FF00] xl:text-[17rem]">
                  Agency
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={imageWrapRef}
              style={{ x: imageX, y: imageY }}
              className="absolute inset-0 z-[9] flex items-center justify-center"
            >
              <div className="hero-image relative h-[72vh] w-[34vw] min-w-[320px] max-w-[640px]">
                <Image
                  src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
                  alt="hero woman"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              ref={circleRef}
              style={{ x: circleX, y: circleY }}
              className="absolute right-10 top-28 z-20 hidden xl:flex"
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[4px] border-lime-300">
                <span className="text-[80px] leading-none text-lime-300">✦</span>
              </div>
            </motion.div>

            <motion.div
              ref={rightBlockRef}
              style={{ x: outlineX, y: textY }}
              className="absolute bottom-8 right-0 z-20 w-full max-w-[360px] xl:bottom-16 xl:right-4"
            >
              <p className="text-right text-[20px] leading-[1.5] text-white/95">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
                ullamcorper mattis pulvinar dapibus leo.
              </p>

              <div className="hero-cta mt-8 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border-[3px] border-lime-300 px-8 py-5 text-[18px] font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-lime-300 hover:text-black"
                >
                  Get Started
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <MoveRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 xl:hidden">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
                  alt="team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="max-w-md text-xl font-black uppercase leading-tight">
              The expert team brings a creativity to every project.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="text-6xl font-black tracking-[-0.06em]">
                  500<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-lg font-black uppercase">
                  Happy Client
                </div>
              </div>
              <div>
                <div className="text-6xl font-black tracking-[-0.06em]">
                  125<span className="text-lime-300">+</span>
                </div>
                <div className="mt-2 text-lg font-black uppercase">
                  Project Done
                </div>
              </div>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/90">
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec
              ullamcorper mattis pulvinar dapibus leo.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border-[3px] border-lime-300 px-6 py-4 text-base font-black uppercase tracking-[0.08em] text-white"
              >
                Get Started
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <MoveRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
