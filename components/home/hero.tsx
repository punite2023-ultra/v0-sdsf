"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

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
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex justify-center items-center px-6">
        <motion.div
          className="text-center space-y-8 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeInDownVariants}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            CREATIVE AGENCY
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInDownVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-medium"
          >
            The expert team brings creativity to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-black bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-lg transition-all"
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#learn-more"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
