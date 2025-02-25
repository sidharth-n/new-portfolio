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
  const [ref, inView] = useInView({ threshold: 0.5 })

  React.useEffect(() => {
    if (inView) setActiveSection("contact")
  }, [inView, setActiveSection])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full glass border border-white/10">
                    <Mail className="w-5 h-5 text-primary-mint" />
                  </div>
                  <div>
                    <p className="text-secondary-slate text-sm">Email</p>
                    <a
                      href="mailto:sidharthnofficial@gmail.com"
                      className="link"
                    >
                      sidharthnofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full glass border border-white/10">
                    <Phone className="w-5 h-5 text-primary-mint" />
                  </div>
                  <div>
                    <p className="text-secondary-slate text-sm">Phone</p>
                    <a href="tel:+918848663072" className="link">
                      +91 884 866 3072
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full glass border border-white/10">
                    <MapPin className="w-5 h-5 text-primary-mint" />
                  </div>
                  <div>
                    <p className="text-secondary-slate text-sm">Location</p>
                    <p className="text-white">Calicut, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sidharth-n-52828b226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sidharth-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/sid_ai_dev"
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
              <div className="p-4 rounded-lg bg-dark-elevated border border-white/10">
                <p className="text-secondary-slate">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-mint mr-2"></span>
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
                placeholder="Your email"
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
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary-mint appearance-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1em",
                }}
              >
                <option value="" className="bg-black text-white">
                  Select a subject
                </option>
                <option value="project" className="bg-black text-white">
                  Project Inquiry
                </option>
                <option value="job" className="bg-black text-white">
                  Job Opportunity
                </option>
                <option value="other" className="bg-black text-white">
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
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-transparent text-white placeholder-secondary-slate focus:outline-none focus:ring-2 focus:ring-primary-mint resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full button mt-4"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
