import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation items
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    /*   { label: "Testimonials", id: "testimonials" }, */
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              {/*  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-mint to-primary-mint/70 flex items-center justify-center">
                <Brain className="w-6 h-6 text-black" />
              </div> */}
              <span className="font-display font-bold text-xl">
                Sidharth N.
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary-mint"
                      : "text-secondary-slate hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button text-sm px-4 py-2"
              >
                Let's Talk
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md z-40 border-b border-white/10 shadow-lg"
          >
            <nav className="container py-4 flex flex-col">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 my-1 ${
                    activeSection === item.id
                      ? "text-primary-mint bg-white/10 rounded-lg"
                      : "text-secondary-slate hover:bg-white/5 rounded-lg transition-colors"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 mx-4 button text-center py-3"
              >
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
