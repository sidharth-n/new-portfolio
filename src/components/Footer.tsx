import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="container py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary-slate">
          © 2024 Sidharth N. All rights reserved.
        </p>
        <div className="flex gap-8 text-secondary-slate">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
