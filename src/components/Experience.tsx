import React from "react"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ExperienceProps {
  setActiveSection: (section: string) => void
}

const Experience: React.FC<ExperienceProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("experience")
  }, [inView, setActiveSection])

  const experiences = [
    {
      company: "STORYBRAIN",
      role: "Front-End Architect",
      period: "Jul 2022 - Jul 2024",
      achievements: [
        "Architected front-end systems for an AI video generation platform with enterprise clients including Flipkart and Housing.com",
        "Built reusable components with React and Tailwind CSS, reducing development time by 30% for new features",
        "Implemented Three.js visualizations that increased user engagement by 25% across platform",
        "Collaborated with AI engineers to optimize real-time video generation performance by 20%",
        "Led cross-functional teams to deliver high-impact features on aggressive timelines",
      ],
    },
    {
      company: "PINDFRESH HYDROPONICS",
      role: "Business Consultant",
      period: "Jul 2021 - Oct 2021",
      achievements: [
        "Analyzed business operations and implemented data-driven improvement strategies across departments",
        "Led Amazon sales department, creating and executing digital marketing campaigns that increased online revenue by 35%",
        "Developed and marketed new hydroponic systems that expanded market reach across India",
        "Coordinated farming operations in Punjab, improving production efficiency by 15%",
      ],
    },
    {
      company: "SCARAB TUTORS",
      role: "Co-founder",
      period: "Jun 2018 - Mar 2020",
      achievements: [
        "Co-founded an educational community that expanded to 3 cities in Kerala, India",
        "Created employment opportunities for 200+ college students through part-time tutoring",
        "Personally tutored 50+ high-school students in physics and mathematics",
        "Developed systems for tutor training and quality assurance across multiple locations",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-section font-bold mb-12 text-gradient text-center">
          Professional Journey
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl glass border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-primary-mint" />
                <div>
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-secondary-slate">
                    {experience.role} | {experience.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-secondary-slate">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-mint mt-2" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
