import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("projects")
  }, [inView, setActiveSection])

  const projects = [
    {
      title: "SANTACALLINGAI",
      description:
        "Voice-enabled AI Santa Claus experience with real-time conversation capabilities. Created a magical experience for children while showcasing advanced voice AI technology.",
      image:
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "WebRTC", "TailwindCSS", "Voice AI"],
      metrics: ["55K views", "20K visitors", "15+ countries"],
      timeline: "Dec 2023",
      links: { github: "#", live: "https://santacallingai.com" },
    },
    {
      title: "VOAIZ.COM",
      description:
        "B2B AI voice agent platform for sales and support teams, customizable with company data for tailored customer interactions. Features real-time response generation and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Three.js", "NLP", "Voice AI"],
      metrics: ["Enterprise Ready", "Custom Training"],
      timeline: "2024 - Ongoing",
      links: { github: "#", live: "https://voaiz.com" },
    },
    {
      title: "OUTFITIFAI",
      description:
        "AI-powered virtual try-on platform for fashion retailers with high-accuracy garment visualization. Helps customers preview clothing items on their body type before purchasing.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      tech: ["Three.js", "React", "AI Image Processing"],
      metrics: ["Multiple Retailers", "99% Size Accuracy"],
      timeline: "2023 - Ongoing",
      links: { github: "#", live: "#" },
    },
    {
      title: "3D VIRTUAL CONVERSATIONAL AI BOT",
      description:
        "Immersive 3D virtual assistant with real-time NLP capabilities and expressive animations. Responds to user queries with natural language and appropriate facial expressions.",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
      tech: ["Three.js", "React Three Fiber", "NLP"],
      metrics: ["Real-time NLP", "3D Animation"],
      timeline: "2022",
      links: { github: "#", live: "#" },
    },
    {
      title: "AI YOUTUBE SHORTS CREATOR",
      description:
        "Automated tool for generating short-form video content optimized for social media engagement. Transforms long-form content into bite-sized, attention-grabbing clips.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      tech: ["Remotion", "React", "Content AI"],
      metrics: ["Automation", "High Engagement"],
      timeline: "2023",
      links: { github: "#", live: "#" },
    },
  ]

  return (
    <section id="projects" ref={ref} className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-section font-bold mb-12 text-gradient text-center">
          Featured AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden glass border border-white/10 flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white">
                  {project.timeline}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-secondary-slate mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="text-sm text-primary-mint font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
