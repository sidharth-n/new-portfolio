import React from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Code2, Palette } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("skills")
  }, [inView, setActiveSection])

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Product Strategy",
      description:
        "Translating AI capabilities into marketable products with clear use cases",
      items: ["User Research", "Market Analysis", "Feature Prioritization"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Connecting front-end interfaces with powerful AI backends",
      items: ["API Development", "LLM Integration", "Voice AI"],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "3D Web Experiences",
      description: "Creating immersive, interactive 3D environments",
      items: ["Three.js", "React Three Fiber", "3D Modeling"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI Component Systems",
      description: "Building scalable design systems for complex applications",
      items: ["React", "Tailwind CSS", "Component Architecture"],
    },
  ]

  const techStack = [
    "JavaScript",
    "React",
    "Three.js",
    "WebGL",
    "React Three Fiber",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Figma",
    "LLM Integration",
    "Remotion",
    "WebRTC",
    "Blender",
    "Adobe Suite",
  ]

  return (
    <section id="skills" ref={ref} className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-4 text-gradient">
            Core Expertise
          </h2>
          <p className="text-secondary-slate max-w-2xl mx-auto">
            My unique blend of AI product innovation and front-end development
            skills enables me to bridge the gap between technology and
            user-centered design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-6 rounded-xl glass border border-white/10 h-full flex flex-col"
            >
              <div className="text-primary-mint mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-secondary-slate mb-4">{skill.description}</p>
              <ul className="mt-auto">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-secondary-slate mb-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
