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
      className="relative h-screen w-full overflow-hidden bg-black text-white"
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
          className="object-cover opacity-70"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Main image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-0 right-[10%] h-[85%] w-[450px]"
      >
        <Image
          src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
          alt="model"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl px-10">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm uppercase tracking-[4px] text-gray-300"
          >
            Creative Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl font-bold leading-tight md:text-7xl"
          >
            We Build <br />
            Digital Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-lg text-gray-300"
          >
            Creative digital agency crafting beautiful and functional
            experiences for brands around the world.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.08 }}
            className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black transition"
          >
            Get Started
          </motion.button>

        </div>
      </div>
    </section>
  )
}
