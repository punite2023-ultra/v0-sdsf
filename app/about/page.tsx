"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function Blob() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.y += 0.002
      mesh.current.rotation.x = Math.sin(t * 0.2) * 0.2
    }
  })

  return (
    <mesh ref={mesh} scale={2.5}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={0.5}
        distort={0.5}
        speed={2}
      />
    </mesh>
  )
}

export default function AboutPage() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!blobRef.current) return

    gsap.to(blobRef.current, {
      scale: 1.3,
      rotate: 20,
      scrollTrigger: {
        trigger: blobRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.from(".fade", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
      },
    })
  }, [])

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white overflow-hidden">

        {/* GRID */}
        <div className="fixed inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center">

          <div ref={blobRef} className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[2, 2, 2]} />
              <Blob />
            </Canvas>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="fade font-mono text-6xl font-bold">
              ORGANIC INTELLIGENCE
            </h1>
            <p className="fade mt-6 text-white/60">
              Biocomputer-driven digital systems
            </p>
          </div>

        </section>

        {/* CONTENT */}
        <section className="content py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="fade backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="font-mono text-purple-400">// MISSION</h2>
              <p className="mt-4 text-white/70">
                We build adaptive digital systems that evolve with content,
                commerce, and creator ecosystems.
              </p>
            </div>

            <div className="fade backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="font-mono text-blue-400">// ARCHITECTURE</h2>
              <p className="mt-4 text-white/70">
                Modular growth frameworks powered by data, execution,
                and performance optimization.
              </p>
            </div>

          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
