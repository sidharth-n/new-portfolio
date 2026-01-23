import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Code, Target, Palette, Sparkles, ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  React.useEffect(() => {
    if (inView) setActiveSection("skills")
  }, [inView, setActiveSection])

  const skillCategories = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI & Machine Learning",
      gradient: "from-violet-500 to-purple-600",
      skills: [
        "Large Language Models (LLMs)", "Generative AI", "GPT-4", "Claude", 
        "Computer Vision", "3D Reconstruction", "NLP", "Multi-modal AI", 
        "Voice AI", "Speech-to-Text", "Text-to-Speech", "Stable Diffusion", 
        "Deep Learning"
      ],
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "AI Development Tools",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        "Cursor", "Claude Code", "Replit Agent", "V0 by Vercel", "Remotion",
        "OpenAI APIs", "OpenAI Whisper", "Anthropic Claude", "LangChain", 
        "Hugging Face", "Replicate", "REST APIs", "PyTorch", "TensorFlow"
      ],
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Programming & Technical",
      gradient: "from-emerald-500 to-teal-600",
      skills: [
        "Python", "JavaScript", "React", "Three.js", "React Three Fiber",
        "HTML", "CSS", "Git", "GitHub", "npm", "Node.js", "TypeScript", 
        "JSON", "API Integration", "WebGL", "SQL", "NoSQL"
      ],
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Product Management",
      gradient: "from-orange-500 to-amber-600",
      skills: [
        "Product Roadmap Planning", "User Research", "Market Analysis", 
        "A/B Testing", "KPI Definition", "Rapid Prototyping", 
        "Product-Market Fit Validation", "Agile Development", "User Interviews",
        "Data Analytics", "Stakeholder Management", "Go-to-Market Strategy", 
        "Feature Prioritization"
      ],
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design & Prototyping",
      gradient: "from-pink-500 to-rose-600",
      skills: [
        "Figma", "Adobe Creative Suite", "Wireframing", "User Flow Design",
        "UI Design", "UX Design", "Prototyping"
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Core Expertise</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              Full-stack AI product builder — from ideation to deployment
            </p>
          </div>

          {/* Skill Categories - Accordion Style */}
          <div className="space-y-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className={`w-full p-4 rounded-xl glass border transition-all duration-300 ${
                    expandedIndex === index 
                      ? "border-white/20 bg-white/5" 
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.gradient} text-white`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white text-left">
                        {category.title}
                      </h3>
                      <span className="text-xs text-text-muted bg-white/5 px-2 py-0.5 rounded-full">
                        {category.skills.length}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-text-muted" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 px-1">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.02 }}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-br ${category.gradient} bg-opacity-10 text-white/90 border border-white/10 hover:border-white/25 transition-colors`}
                              style={{
                                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-4 text-center"
          >
            <div className="p-4 rounded-xl glass border border-white/5">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-text-muted mt-1">AI Projects Shipped</div>
            </div>
            <div className="p-4 rounded-xl glass border border-white/5">
              <div className="text-2xl font-bold text-accent">60+</div>
              <div className="text-xs text-text-muted mt-1">Skills & Tools</div>
            </div>
            <div className="p-4 rounded-xl glass border border-white/5">
              <div className="text-2xl font-bold text-emerald-400">5</div>
              <div className="text-xs text-text-muted mt-1">Expertise Areas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
