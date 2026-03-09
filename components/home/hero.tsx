"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black text-white pt-24"
    >
      
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/10121357.jpg"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Column - Content & Stats */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm uppercase tracking-[3px] text-gray-400 font-medium"
              >
                Creative Agency
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                We Build
                <br />
                Digital
                <br />
                Experience
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 text-base max-w-md leading-relaxed"
              >
                Creative digital agency crafting beautiful and functional experiences
                for brands around the world.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-white text-black px-10 py-4 font-semibold w-fit transition-all hover:shadow-lg"
              >
                Get Started
              </motion.button>

              {/* Stats - Mobile Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-8 mt-8 pt-8 border-t border-white/20 lg:hidden"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-bold">500+</p>
                  <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">125+</p>
                  <p className="text-sm text-gray-400 mt-1">Projects Done</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image & Stats */}
            <div className="relative hidden lg:flex flex-col justify-center items-end h-full">
              {/* Stats - Desktop Layout */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-red-500" />
                  </div>
                </div>
                <div className="border-l-2 border-white/30 pl-4 space-y-4">
                  <div>
                    <p className="text-xl font-bold">500+</p>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Happy Client</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">125+</p>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Project Done</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative w-full h-[600px] -mr-24"
              >
                <Image
                  src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
                  alt="model"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
