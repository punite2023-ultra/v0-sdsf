"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [animated, setAnimated] = useState({
    title: false,
    subheading: false,
    stat1: false,
    stat2: false
  })

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".hero-title, .subheading, .stat")
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top
        const screenHeight = window.innerHeight
        
        if (position < screenHeight - 100) {
          element.classList.add("animate")
        } else {
          element.classList.remove("animate")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger on initial load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">CREATIVE AGENCY</h1>
        <p className="subheading">The expert team brings a creativity to every project.</p>
        <div className="stats">
          <div className="stat">
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h2>125+</h2>
            <p>Projects Done</p>
          </div>
        </div>
        <a href="#get-started" className="get-started-btn">Get Started</a>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background-color: #0000ff;
          color: #faff00;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .hero-section .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          animation: fadeIn 2s ease-out;
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: 5px;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1.5s ease-out forwards;
        }

        .subheading {
          font-size: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.5s ease-out 0.5s forwards;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
        }

        .stat h2 {
          font-size: 3rem;
          font-weight: 900;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.5s ease-out 1s forwards;
        }

        .stat p {
          font-size: 1rem;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 1.5s ease-out 1.5s forwards;
        }

        .get-started-btn {
          display: inline-block;
          padding: 15px 30px;
          background-color: #faff00;
          color: #000;
          font-size: 1rem;
          font-weight: bold;
          margin-top: 30px;
          border-radius: 50px;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 2px;
          transition: background-color 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.5s ease-out 2s forwards;
        }

        .get-started-btn:hover {
          background-color: #fffa00;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .stat.animate h2,
        .stat.animate p,
        .hero-title.animate,
        .subheading.animate {
          animation: none;
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            letter-spacing: 3px;
          }

          .subheading {
            font-size: 1.1rem;
          }

          .stats {
            flex-direction: column;
            gap: 20px;
          }

          .stat h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
