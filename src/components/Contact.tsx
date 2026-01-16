import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Send, ArrowUpRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ContactProps {
  setActiveSection: (section: string) => void
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  React.useEffect(() => {
    if (inView) setActiveSection("contact")
  }, [inView, setActiveSection])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    const mailtoLink = `mailto:sidharthnofficial@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sidharthnofficial@gmail.com",
      href: "mailto:sidharthnofficial@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 884 866 3072",
      href: "tel:+918848663072",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Calicut, Kerala, India",
      href: null,
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
      label: "Twitter",
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
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Let's Build Something Amazing</h2>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              Looking for an AI Product Manager who can ship? Let's talk about how I can help bring your AI vision to life.
            </p>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-body font-medium text-white">
                Open to AI Product Management roles
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl glass border border-white/10 group-hover:border-primary/30 transition-colors">
                      <span className="text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-body-sm text-text-muted">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-body text-white hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-body text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-body-sm text-text-muted mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="p-5 rounded-xl glass border border-white/10">
                <p className="text-body font-medium text-white mb-3">Quick Actions</p>
                <div className="space-y-2">
                  <a
                    href="mailto:sidharthnofficial@gmail.com?subject=AI%20PM%20Opportunity"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-body-sm text-text-secondary group-hover:text-white transition-colors">
                      Discuss a PM role
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="mailto:sidharthnofficial@gmail.com?subject=Project%20Collaboration"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-body-sm text-text-secondary group-hover:text-white transition-colors">
                      Start a project
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3 p-6 rounded-2xl glass border border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-body-sm font-medium mb-2 text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-body-sm font-medium mb-2 text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-body-sm font-medium mb-2 text-text-secondary">
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A1A1AA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1em",
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="AI PM Opportunity">AI PM Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Consulting Inquiry">Consulting Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-body-sm font-medium mb-2 text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full button"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
