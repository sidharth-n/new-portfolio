import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Building2, Rocket, Calendar } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ExperienceProps {
  setActiveSection: (section: string) => void
}

const Experience: React.FC<ExperienceProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("experience")
  }, [inView, setActiveSection])

  const experiences = [
    {
      company: "Cognifluenz DeepTech",
      role: "AI Specialist Consultant",
      period: "Apr 2025 - Sep 2025",
      type: "Contract",
      logo: <Building2 className="w-5 h-5" />,
      achievements: [
        "Defined product requirements and technical roadmap for real-time 3D reconstruction AI systems on autonomous drones",
        "Collaborated with ML engineers to improve reconstruction accuracy by 40% while reducing processing latency",
        "Conducted market research to identify product-market fit opportunities in drone automation and robotics",
        "Translated complex technical capabilities into clear product specs and go-to-market strategies",
      ],
    },
    {
      company: "Storybrain",
      role: "Front-End Architect",
      period: "Jul 2021 - Aug 2024",
      type: "Antler-Funded (SG3)",
      logo: <Rocket className="w-5 h-5" />,
      achievements: [
        "Architected front-end systems for AI-powered video generation platform serving enterprise clients across Southeast Asia",
        "Built reusable component library with React and Tailwind CSS, reducing development time by 30%",
        "Implemented Three.js visualizations and real-time video rendering with Remotion for AI video generation",
        "Collaborated with product and ML teams to integrate generative AI capabilities into user workflows",
      ],
    },
    {
      company: "Freelance AI Consulting",
      role: "AI Product Builder & Consultant",
      period: "2023 - Present",
      type: "Independent",
      logo: <Briefcase className="w-5 h-5" />,
      achievements: [
        "Generated $10K+ revenue building custom AI applications including LLM chatbots and automation systems",
        "Consulted for Venice.ai (Erik Voorhees' venture), developing AI agent prototypes for crypto-AI integration",
        "Shipped 50+ production AI products including 3D conversational bots and generative AI content creators",
        "Conducted rapid prototyping and MVP testing to validate AI product ideas with real users",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-28"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Professional Journey</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              4+ years building AI products from 0-to-1, from startup core teams to enterprise consulting
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="card hover:border-primary/20">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        {experience.logo}
                      </div>
                      <div>
                        <h3 className="text-heading font-bold text-white group-hover:text-primary transition-colors">
                          {experience.company}
                        </h3>
                        <p className="text-body text-text-secondary">{experience.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:text-right">
                      <Calendar className="w-4 h-4 text-text-muted sm:hidden" />
                      <div>
                        <p className="text-body-sm text-text-muted">{experience.period}</p>
                        <span className="badge-ghost text-xs">{experience.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 ml-0 sm:ml-16">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-body-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
