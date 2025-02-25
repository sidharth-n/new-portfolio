import React from "react"
import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface AboutProps {
  setActiveSection: (section: string) => void
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("about")
  }, [inView, setActiveSection])

  const achievements = [
    "First position in Techstars Startup Weekend",
    "Created AI experiences used by 20,000+ people globally",
    "Featured in Indian Express for SantaCallingAI",
  ]

  return (
    <section id="about" ref={ref} className="container py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-2xl w-full object-cover aspect-square"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-section font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="space-y-4 text-secondary-slate">
              <p>
                As an AI Product Innovator with a strong front-end development
                background, I specialize in transforming complex AI technologies
                into intuitive, engaging user experiences.
              </p>
              <p>
                At Storybrain, I led front-end architecture for AI-powered video
                generation platforms, serving enterprise clients like Flipkart.
                My expertise in React, Three.js, and component architecture
                helped reduce development time by 30% while boosting user
                engagement.
              </p>
              <p>
                My background in business consulting at Pindfresh Hydroponics
                and entrepreneurship as co-founder of Scarab Tutors gives me a
                unique perspective on product development that balances
                technical innovation with real business outcomes.
              </p>
              <p>
                I'm passionate about the intersection of AI and interactive
                digital experiences, creating products that are not just
                technically impressive but genuinely useful.
              </p>
            </div>

            {/* Key achievements */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-3">
                    <Award className="w-5 h-5 text-primary-mint flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-secondary-slate">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
