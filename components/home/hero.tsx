"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-blue-600 text-white"
    >
      
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/10121357.jpg"
          alt="hero background"
          fill
          priority
          className="object-cover opacity-30"
        />
      </motion.div>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-600/70" />

      {/* Decorative star icon top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-20 right-12 z-20 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-full border-2 border-lime-300 flex items-center justify-center">
          <Star className="w-8 h-8 fill-lime-300 text-lime-300" />
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="relative z-10 h-full flex items-center justify-between px-6 lg:px-12">
        {/* Left Sidebar */}
        <motion.div
          className="hidden lg:flex flex-col justify-center space-y-8 w-1/4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Avatars */}
          <motion.div variants={itemVariants} className="flex gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 flex-shrink-0" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex-shrink-0" />
          </motion.div>

          {/* Team Quote */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-black leading-tight uppercase tracking-wider"
          >
            THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="border-t border-white/40 pt-4">
              <p className="text-4xl font-black">500+</p>
              <p className="text-xs uppercase tracking-wider mt-2 font-bold">Happy Client</p>
            </div>
            <div>
              <p className="text-4xl font-black">125+</p>
              <p className="text-xs uppercase tracking-wider mt-2 font-bold">Project Done</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Center - Main Content & Image */}
        <div className="flex-1 flex flex-col items-center justify-center relative h-full px-4 lg:px-0">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-20"
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-lime-300"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              CREATE
              <br />
              AMAZING
              <br />
              NOW
            </h1>
          </motion.div>

          {/* Person Image with overlay */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <Image
                src="/images/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
                alt="creative professional"
                fill
                className="object-contain"
                priority
              />
              
              {/* Geometric overlays */}
              <svg className="absolute w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <rect x="120" y="80" width="60" height="60" fill="none" stroke="#eaff00" strokeWidth="3" opacity="0.8" />
                <rect x="160" y="120" width="80" height="80" fill="none" stroke="#eaff00" strokeWidth="3" opacity="0.8" />
                <rect x="140" y="200" width="120" height="70" fill="none" stroke="#eaff00" strokeWidth="3" opacity="0.8" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <motion.div
          className="hidden lg:flex flex-col justify-center space-y-6 w-1/4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm leading-relaxed text-white/95"
          >
            Lorem ipsum do adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-black uppercase tracking-wide py-3 px-6 hover:bg-white hover:text-blue-600 transition-all"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <motion.div
        className="lg:hidden relative z-10 h-full flex flex-col justify-center items-center text-center space-y-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-black uppercase leading-tight text-lime-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          CREATE AMAZING NOW
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm font-bold uppercase max-w-xs"
        >
          The expert team brings a creativity to every project.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold uppercase py-3 px-6 hover:shadow-lg transition-all"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  )
}
