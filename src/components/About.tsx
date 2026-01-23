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
      icon: <Zap className="w-5 h-5" />,
      title: "Venice.ai Prototypes",
      description: "Built 6 AI prototypes working closely with Erik Voorhees",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Agentathon 3rd Place",
      description: "International crypto-AI hackathon by Safe Global",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "100K+ Users Reached",
      description: "Viral AI products featured in Indian Express",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Antler-Funded Startup",
      description: "Core team at AI video generation platform",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "50+ AI Projects",
      description: "From LLM chatbots to 3D conversational agents",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "$12K+ Revenue",
      description: "As student founder within 6 months",
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
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/images/headshot_cropped.jpg"
                    alt="Sidharth N"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-3/5">
              <h2 className="section-title mb-6">About Me</h2>
              
              <div className="space-y-4 text-text-secondary text-body-lg leading-relaxed mb-8">
                <p>
                  <span className="text-white font-medium">Front-End Architect/AI dev turned AI Product Manager with 4+ years of experience.</span> I've 
                  been a core team member at an Antler-funded startup, shipped viral consumer 
                  apps reaching 100K+ users (featured in Indian Express), and consulted for 
                  deep-tech and crypto-AI ventures.
                </p>
                <p>
                  I've worked closely with <a href="https://x.com/erikvoorhees" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline cursor-pointer">Erik Voorhees</a> (Bitcoin OG), 
                  building 6 prototypes for his Venice.ai ecosystem. I also won <span className="text-accent font-medium">3rd place 
                  at the <a href="https://x.com/safe" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Safe Global</a> Agentathon</span> — an international crypto-AI hackathon.
                </p>
                <p>
                  My superpower is bridging cutting-edge AI capabilities with real user value. 
                  I understand the tech deeply enough to work with ML engineers, while staying 
                  obsessed with what actually matters — shipping products people love.
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
