'use client'

import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Life Sync (FYDP) – AI-Enabled Blood Donation App',
      description:
        'An AI-powered mobile application designed to connect blood donors with patients, enabling faster and smarter blood arrangement through intelligent donor matching.',
      technologies: ['Flutter', 'Firebase', 'Python', 'Machine Learning'],
      highlights: [
        'Connected donors and patients through a real-time in-app communication system',
        'Implemented AI-based donor ranking to prioritize nearby and willing donors',
        'Developed predictive matching system to speed up emergency blood arrangements',
      ],
    },
    {
      title: 'Kingdom Defence – Mobile Game',
      description:
        'A mobile game developed during M-Labs internship featuring a slingshot-style cannon defense mechanism to protect a castle from incoming enemies.',
      technologies: ['Unity', 'C#', 'Game Physics', 'Mobile Development'],
      highlights: [
        'Designed slingshot-based cannon mechanics for projectile launching',
        'Implemented enemy wave logic and castle defense system',
        'Optimized gameplay physics and performance for mobile devices',
      ],
    },
    {
      title: 'AI – Patient Documents Chatbot',
      description:
        'A RAG-based AI chatbot developed to help patients understand medical documents received after healthcare encounters.',
      technologies: ['Python', 'RAG', 'LLMs', 'Vector Databases'],
      highlights: [
        'Implemented Retrieval-Augmented Generation (RAG) pipeline for document understanding',
        'Enabled contextual question-answering over patient medical documents',
        'Improved accessibility and comprehension of complex healthcare information',
      ],
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of innovative AI solutions, mobile applications, and interactive systems
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-primary to-accent h-2"></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Projects
