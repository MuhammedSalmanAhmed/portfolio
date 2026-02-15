'use client'

import { Heart, Mail, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Muhammad Salman Ahmed</h3>
            <p className="text-gray-300 mb-4">
              Project Manager & AI/ML Specialist passionate about driving innovation 
              through strategic project management and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:salmanahmedktk@hotmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-gray-300 hover:text-accent transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Email:</strong><br />
                salmanahmedktk@hotmail.com
              </p>
              <p>
                <strong className="text-white">Location:</strong><br />
                Karachi, Pakistan
              </p>
              <p>
                <strong className="text-white">Education:</strong><br />
                National University of Sciences and Technology, NUST.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center flex-wrap">
            <span>© {currentYear} Muhammad Salman Ahmed. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
