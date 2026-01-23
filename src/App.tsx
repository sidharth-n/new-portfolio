import React, { useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <div className="mx-auto">
        <Header activeSection={activeSection} />
        <Hero setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        {/*   <Testimonials setActiveSection={setActiveSection} /> */}
        <Contact setActiveSection={setActiveSection} />
        {/*  <Footer /> */}
      </div>
      <Analytics />
    </div>
  )
}

export default App
