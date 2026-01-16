import React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, MessageCircle, Send } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ContactProps {
  setActiveSection: (section: string) => void
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2 })

  React.useEffect(() => {
    if (inView) setActiveSection("contact")
  }, [inView, setActiveSection])

  const directLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      description: "Quick response",
      href: "https://wa.me/918848663072",
      color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40",
    },
    {
      icon: <Send className="w-6 h-6" />,
      label: "Telegram",
      description: "Fastest reply",
      href: "https://t.me/Sidharth_n",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      description: "Detailed inquiries",
      href: "mailto:sidharthnofficial@gmail.com",
      color: "bg-primary/10 text-primary border-primary/20 hover:border-primary/40",
    },
  ]

  const socials = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sidharth-n-52828b226",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/sidharth-n",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter/X",
      href: "https://x.com/sid_ai_dev",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <h2 className="section-title mb-4">Let's Connect</h2>
          <p className="text-text-secondary text-body-lg mb-8 max-w-xl mx-auto">
            Interested in working together? Reach out directly — I respond fastest on Telegram or WhatsApp.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20 mb-12">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-body font-medium text-white">
              Open to AI Product Management roles
            </span>
          </div>

          {/* Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {directLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${link.color}`}
              >
                {link.icon}
                <div>
                  <p className="font-semibold text-white">{link.label}</p>
                  <p className="text-body-sm text-text-muted">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-body-sm">+91 884 866 3072</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-body-sm">Calicut, Kerala, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
