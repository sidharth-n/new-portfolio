import React from "react"
import { motion } from "framer-motion"
import { Rocket, Users, DollarSign, Trophy, Zap, Code } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface AboutProps {
  setActiveSection: (section: string) => void
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("about")
  }, [inView, setActiveSection])

  const achievements = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Antler-Funded Startup",
      description: "Core team member building AI video generation platform",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "100K+ Users Reached",
      description: "Shipped AI products that scaled to global audiences",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "$12K+ Startup Revenue",
      description: "Generated revenue within 6 months as student founder",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Multiple Hackathon Wins",
      description: "Including 3rd at Safe Global, 1st at Techstars",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "50+ AI Projects",
      description: "Always shipping, always experimenting with AI",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Venice.ai Consulting",
      description: "Worked with Erik Voorhees' AI venture",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/headshot_cropped.jpg"
                    alt="Sidharth N"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-3/5">
              <h2 className="section-title mb-6">About Me</h2>
              
              <div className="space-y-4 text-text-secondary text-body-lg leading-relaxed mb-8">
                <p>
                  <span className="text-white font-medium">AI Product Manager with 4 years building generative AI products from 0-to-1.</span> I've 
                  been a core team member at an Antler-funded startup, shipped viral consumer 
                  apps reaching 100K+ users, and consulted for deep-tech and crypto-AI ventures.
                </p>
                <p>
                  My superpower is bridging the gap between cutting-edge AI capabilities and 
                  real user value. I understand the tech deeply enough to have meaningful 
                  conversations with engineers, while staying obsessed with what actually 
                  matters — shipping products people love.
                </p>
                <p>
                  I spend hours daily staying updated with the entire AI ecosystem. From new 
                  model releases to emerging use cases — I'm always experimenting, always learning, 
                  always building.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-heading font-bold text-center mb-8 text-white">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  className="p-4 rounded-xl glass border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-body-sm text-text-muted">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
