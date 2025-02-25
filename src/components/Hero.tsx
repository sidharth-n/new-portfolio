import React from "react"
import { useInView } from "react-intersection-observer"
import { SplineSceneBasic } from "./ui/SplineSceneBasic"

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 })

  React.useEffect(() => {
    if (inView) setActiveSection("home")
  }, [inView, setActiveSection])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-start md:items-center pt-20 md:pt-0"
    >
      <div className="container w-full py-4 md:py-8">
        <SplineSceneBasic setActiveSection={setActiveSection} />
      </div>
    </section>
  )
}

export default Hero
