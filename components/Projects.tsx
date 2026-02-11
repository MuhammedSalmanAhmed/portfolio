'use client'

import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Life Sync (FYDP)',
      description: 'An AI-enabled blood donation mobile app that connects donors and patients together, providing in-app messaging for timely communication and using AI to predict and rank willing donors nearby for faster arrangement of blood.',
      technologies: ['React Native', 'AI/ML', 'Firebase', 'Node.js'],
      highlights: [
        'AI-powered donor prediction and ranking system',
        'Real-time in-app messaging for timely communication',
        'Location-based donor matching for faster blood arrangement',
      ]
    },
    {
      title: 'AI Chatbot for Patient Documents',
      description: 'Developed during Junior AI Engineer role at CareCloud. A RAG chatbot that processes documents given to patients after their encounter with the doctor, enabling patients to ask queries and get desired information quickly.',
      technologies: ['Python', 'RAG', 'NLP', 'LLM'],
      highlights: [
        'RAG-based document processing for medical records',
        'Natural language query interface for patients',
        'Fast information retrieval from healthcare documents',
      ]
    },
    {
      title: 'Kingdom Defence',
      description: 'Mobile game developed as part of M-labs using slingshot mechanism. The game features a cannon that launches cannon balls at enemies to stop them from reaching the castle.',
      technologies: ['Unity Engine', 'C#', 'Mobile Development'],
      highlights: [
        'Physics-based slingshot cannon mechanics',
        'Defense gameplay',
        'Optimized for mobile platforms',
      ]
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of innovative solutions combining project management expertise with AI/ML technologies
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
