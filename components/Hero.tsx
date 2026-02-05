'use client'

import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom section-padding">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-4">
            Muhammad Salman Ahmed
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Project Manager & AI/ML Specialist
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Driving innovation through strategic project management and cutting-edge AI solutions
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 text-gray-600">
            <a
              href="mailto:salmanahmedktk@hotmail.com"
              className="hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
