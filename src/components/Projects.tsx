import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Trophy, Users, TrendingUp, Newspaper } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (inView) setActiveSection("projects")
  }, [inView, setActiveSection])

  // Featured highlight
  const featuredHighlight = {
    title: "3rd Place — Safe Global Agentathon",
    description: "Built an AI agent for decentralized finance among 500+ international participants. Shipped a functional demo in 48 hours.",
    badge: "March 2025",
    icon: <Trophy className="w-5 h-5" />,
  }

  const projects = [
    {
      title: "SantaCallingAI",
      description: "Voice-enabled AI Santa experience with real-time conversation. Created a viral product that captured holiday magic while showcasing advanced voice AI technology.",
      image: "/images/santacallingai.webp",
      tech: ["Voice AI", "React", "WebRTC", "TailwindCSS"],
      metrics: [
        { icon: <Users className="w-4 h-4" />, value: "75K users", label: "in 17 days" },
        { icon: <Newspaper className="w-4 h-4" />, value: "Featured", label: "Indian Express" },
      ],
      link: "https://santacallingai.com",
      featured: true,
    },
    {
      title: "Voaiz.com",
      description: "B2B AI voice agent platform for sales and support teams. Customizable with company data for tailored customer interactions.",
      image: "/images/voaiz.webp",
      tech: ["Voice AI", "React", "NLP", "Analytics"],
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "Enterprise", label: "Ready" },
      ],
      link: "https://www.voaiz.com",
    },
    {
      title: "OutfitifAI",
      description: "AI-powered virtual try-on platform for fashion retailers. Helps customers preview clothing items on their body type.",
      image: "/images/outfitifai.webp",
      tech: ["Computer Vision", "Three.js", "React"],
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "99%", label: "Size Accuracy" },
      ],
      link: "https://outfitifai.vercel.app/",
    },
    {
      title: "RoastYourFriend",
      description: "AI voice agent for interactive calls with personality-based humor. GTA-inspired UX with personalized roast experiences.",
      image: "/images/ryf.webp",
      tech: ["Voice AI", "React", "WebRTC"],
      metrics: [
        { icon: <Users className="w-4 h-4" />, value: "8K+", label: "users in 1 week" },
      ],
      link: "https://roast2-0.vercel.app/",
    },
    {
      title: "Android Kunjappan",
      description: "3D virtual assistant with real-time NLP capabilities. Responds to user queries with natural language, inspired by the movie.",
      image: "/images/kunjappan.webp",
      tech: ["Three.js", "React Three Fiber", "NLP"],
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "Real-time", label: "3D Animation" },
      ],
      link: "https://kunjappan-live.netlify.app/",
    },
    {
      title: "TalkToJesus",
      description: "Bible-based AI voice interaction platform. Provides spiritual guidance and insights based on biblical teachings.",
      image: "/images/jesus.webp",
      tech: ["Voice AI", "React", "Scripture API"],
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "Faith-based", label: "Guidance" },
      ],
      link: "https://talktojesus.vercel.app",
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-28"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">AI Products & Case Studies</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              Shipped 50+ AI projects — from viral consumer apps to enterprise platforms
            </p>
          </div>

          {/* Featured Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/20 text-accent">
                {featuredHighlight.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-heading font-bold text-white">{featuredHighlight.title}</h3>
                  <span className="badge-ghost text-xs">{featuredHighlight.badge}</span>
                </div>
                <p className="text-body-sm text-text-secondary">{featuredHighlight.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className={`group block rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary/30 transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-depth via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3 badge">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-subheading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-text-muted mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-primary">
                        {metric.icon}
                        <span className="text-caption font-medium">{metric.value}</span>
                        <span className="text-caption text-text-muted">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-xs text-text-muted bg-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
