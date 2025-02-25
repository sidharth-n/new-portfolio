import React from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Phone,
  Calendar,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ContactProps {
  setActiveSection: (section: string) => void
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("contact")
  }, [inView, setActiveSection])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section id="contact" ref={ref} className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-section font-bold mb-12 text-gradient text-center">
          Let's Build Something Amazing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary-slate">
                  <MapPin className="w-5 h-5 text-primary-mint" />
                  <span>Calicut, Kerala, India</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-slate">
                  <Mail className="w-5 h-5 text-primary-mint" />
                  <a href="mailto:sidharthnofficial@gmail.com" className="link">
                    sidharthnofficial@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-secondary-slate">
                  <Phone className="w-5 h-5 text-primary-mint" />
                  <a href="tel:+918848663072" className="link">
                    +91 884 866 3072
                  </a>
                </div>
                <div className="flex items-center gap-3 text-secondary-slate">
                  <Calendar className="w-5 h-5 text-primary-mint" />
                  <a href="#" className="link">
                    Schedule a 30-minute meeting
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/sidharthn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sidharthn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/sidharthn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Current Status</h3>
              <div className="p-4 rounded-lg bg-primary-deep border border-primary-electric/20">
                <p className="text-secondary-slate">
                  <span className="inline-block w-2 h-2 rounded-full bg-status-success mr-2"></span>
                  Open to AI Product Management roles.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-transparent text-white placeholder-secondary-slate focus:outline-none focus:ring-2 focus:ring-primary-mint"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-transparent text-white placeholder-secondary-slate focus:outline-none focus:ring-2 focus:ring-primary-mint"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-transparent text-white placeholder-secondary-slate focus:outline-none focus:ring-2 focus:ring-primary-mint"
              >
                <option
                  value=""
                  disabled
                  selected
                  className="bg-secondary-midnight"
                >
                  Select a topic
                </option>
                <option value="job" className="bg-secondary-midnight">
                  Job Opportunity
                </option>
                <option value="project" className="bg-secondary-midnight">
                  Project Collaboration
                </option>
                <option value="consulting" className="bg-secondary-midnight">
                  Consulting
                </option>
                <option value="other" className="bg-secondary-midnight">
                  Other
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-transparent text-white placeholder-secondary-slate focus:outline-none focus:ring-2 focus:ring-primary-mint"
                placeholder="Tell me about your project or opportunity"
              ></textarea>
            </div>
            <button type="submit" className="button w-full">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
