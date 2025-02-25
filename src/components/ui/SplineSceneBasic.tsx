"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { SplineScene } from "./splite"
import { Spotlight } from "./spotlight"
import CountUp from "react-countup"

interface SplineHeroProps {
  setActiveSection?: (section: string) => void
}

export function SplineSceneBasic({ setActiveSection }: SplineHeroProps) {
  const [countersVisible, setCountersVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="w-full min-h-[20vh] relative overflow-hidden">
      {/* Spotlight only shown on desktop */}
      {!isMobile && (
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      )}

      <div className="flex h-full flex-col md:flex-row">
        {/* Content side - moved to second position on mobile */}
        <div className="flex-1 p-4 md:p-8 relative z-10 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setCountersVisible(true)}
          >
            <div className="inline-block px-4 py-1 mb-4 md:mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-secondary-slate text-sm md:text-base">
                Open to AI Product Management Roles
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-gradient">AI Product Innovator</span>
            </h1>

            <p className="text-base md:text-subheading text-secondary-slate mb-6 md:mb-8 max-w-xl">
              Turning AI concepts into market-ready digital experiences that
              engage users and solve real business problems
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button flex items-center justify-center gap-2 text-sm md:text-base py-2 md:py-3"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button glass text-sm md:text-base py-2 md:py-3"
              >
                Schedule a Call
              </motion.a>
            </div>

            {/* Stats - full width grid on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-4"
            >
              {[
                {
                  prefix: "",
                  value: 100,
                  suffix: "K+",
                  label: "Users Reached",
                },
                { prefix: "", value: 20, suffix: "+", label: "Countries" },
                {
                  prefix: "",
                  value: 7,
                  suffix: "",
                  label: "AI Products Launched",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center px-2 sm:px-3 md:px-5 py-2 md:py-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary-mint mb-0.5 md:mb-1">
                    {countersVisible ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        delay={0.2 * index}
                        separator=","
                        decimals={0}
                        decimal="."
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `${stat.prefix}0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-xs md:text-sm text-secondary-slate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* 3D scene - moved to first position on mobile */}
        <div
          className={`${
            isMobile ? "h-[200px]" : "flex-1"
          } relative pointer-events-auto order-1 md:order-2 mb-4 md:mb-0 md:mt-0`}
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
