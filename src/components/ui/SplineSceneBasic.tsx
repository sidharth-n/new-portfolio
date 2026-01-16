"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Trophy, Rocket, Award, ArrowRight } from "lucide-react"
import { SplineScene } from "./splite"
import { Spotlight } from "./spotlight"
import CountUp from "react-countup"

interface SplineHeroProps {
  setActiveSection?: (section: string) => void
}

export function SplineSceneBasic({ setActiveSection }: SplineHeroProps) {
  const [countersVisible, setCountersVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Credibility badges
  const CredibilityBadges = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap gap-2 mb-6"
    >
      <span className="badge">
        <Sparkles className="w-3 h-3" />
        Antler-Funded Startup
      </span>
      <span className="badge">
        <Trophy className="w-3 h-3" />
        Hackathon Winner
      </span>
      <span className="badge-ghost">
        <Rocket className="w-3 h-3" />
        50+ AI Projects
      </span>
    </motion.div>
  )

  // Stats section
  const StatsSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6"
    >
      {[
        { value: 3, suffix: "+", label: "Years Frontend" },
        { value: 100, suffix: "K+", label: "Users Reached" },
        { value: 50, suffix: "+", label: "AI Projects" },
        { value: 10, prefix: "$", suffix: "K+", label: "Revenue" },
      ].map((stat, index) => (
        <div
          key={index}
          className="stat-card group hover:border-primary/30 transition-all duration-300"
        >
          <div className="stat-value">
            {countersVisible ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                delay={0.15 * index}
                prefix={stat.prefix || ""}
                suffix={stat.suffix}
              />
            ) : (
              `${stat.prefix || ""}0${stat.suffix}`
            )}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  )

  // CTA Buttons
  const ButtonsSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-3 mb-8"
    >
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="button group"
      >
        View Case Studies
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="button-ghost"
      >
        Get In Touch
      </motion.a>
    </motion.div>
  )

  // Recent highlight
  const RecentHighlight = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
    >
      <Award className="w-4 h-4 text-accent" />
      <span className="text-body-sm text-text-secondary">
        <span className="text-accent font-medium">3rd Place</span> — Safe Global Agentathon 2025
      </span>
    </motion.div>
  )

  return (
    <div className="w-full min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
      {!isMobile && (
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      )}

      <div className="flex h-full flex-col md:flex-row">
        {/* Content side */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setCountersVisible(true)}
          >
            {/* Credibility badges */}
            <CredibilityBadges />

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">AI Product Manager</span>
              <br />
              <span className="text-gradient">Building 0→1 Products</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-text-secondary mb-6 max-w-xl leading-relaxed">
              I ship AI products that people actually use. From viral consumer apps to 
              enterprise platforms — I turn breakthrough AI into real user value.
            </p>

            {/* Availability status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-body-sm text-text-secondary">
                Open to AI Product Management roles
              </span>
            </div>

            {/* Stats */}
            <StatsSection />

            {/* CTA Buttons */}
            <ButtonsSection />

            {/* Recent highlight */}
            <RecentHighlight />
          </motion.div>
        </div>

        {/* 3D scene */}
        <div
          className={`${
            isMobile ? "h-[220px]" : "flex-1 min-h-[400px]"
          } relative pointer-events-auto order-1 md:order-2`}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

