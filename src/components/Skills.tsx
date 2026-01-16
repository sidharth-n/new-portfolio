import React from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Target, Wrench } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("skills")
  }, [inView, setActiveSection])

  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Front-End Architecture",
      description: "Building scalable, performant web applications",
      skills: ["React", "Three.js", "React Three Fiber", "Component Systems"],
      color: "primary",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Integration",
      description: "Connecting front-end with AI/ML backends",
      skills: ["LLMs & Generative AI", "Voice AI & NLP", "Computer Vision", "Realtime APIs"],
      color: "accent",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "3D Web Experiences",
      description: "Creating immersive interactive environments",
      skills: ["Three.js", "WebGL", "Spline", "3D Animation"],
      color: "primary",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AI Development Tools",
      description: "Shipping faster with AI-powered workflows",
      skills: ["Cursor AI", "Claude", "V0 by Vercel", "Rapid Prototyping"],
      color: "accent",
    },
  ]

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Three.js", category: "3D" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "LangChain", category: "AI" },
    { name: "Remotion", category: "Video" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Tools" },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Core Expertise</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              Bridging AI technology and product strategy to build products that users love
            </p>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:border-primary/20"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  category.color === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-heading font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-body-sm text-text-muted mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="badge-ghost">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-heading font-bold mb-6 text-white">
              Technical Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-full text-body-sm font-medium glass border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
