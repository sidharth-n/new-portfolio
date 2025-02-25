import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TestimonialsProps {
  setActiveSection: (section: string) => void
}

const Testimonials: React.FC<TestimonialsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  React.useEffect(() => {
    if (inView) setActiveSection("testimonials")
  }, [inView, setActiveSection])

  const testimonials = [
    {
      quote:
        "Sidharth's expertise in connecting AI capabilities with user-friendly interfaces was instrumental in the success of our video platform. His technical skills and product vision are exceptional.",
      author: "Rahul Sharma",
      position: "CTO, Storybrain",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Working with Sidharth on the SantaCallingAI project was a revelation. He has a unique ability to make complex AI technologies accessible and engaging for everyday users.",
      author: "Priya Patel",
      position: "Product Manager, AI Solutions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Sidharth combines technical excellence with a deep understanding of product strategy. His contributions to our 3D visualization tools significantly improved user engagement metrics.",
      author: "Arun Kumar",
      position: "Lead Developer, Flipkart",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "His ability to translate business requirements into technical solutions made him an invaluable asset to our team. Sidharth consistently delivered features that exceeded expectations.",
      author: "Maya Reddy",
      position: "Product Owner, Housing.com",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-section font-bold mb-12 text-gradient text-center">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl glass border border-white/10"
            >
              <div className="mb-4 text-primary-mint text-xl">"</div>
              <p className="text-secondary-slate mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-secondary-slate">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
