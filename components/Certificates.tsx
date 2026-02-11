'use client'

import { Award, Download, ExternalLink } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      title: 'Data Science and AI Masters Certificate',
      issuer: 'Udemy',
      date: '2025',
      description: 'Comprehensive masters-level training in Data Science and Artificial Intelligence',
      file: '/Data Science and AI Masters Certificate.pdf',
      skills: ['Data Science', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning']
    },
    {
      title: 'Project Manager Skillpath Certificate',
      issuer: 'Udemy',
      date: '2026',
      description: 'Professional certification in Project Management methodologies and best practices',
      file: '/Project Manager Skillpath Certificate.pdf',
      skills: ['Project Management', 'Agile', 'Team Leadership', 'Strategic Planning']
    },
    {
      title: 'Machine Learning Internship',
      issuer: 'BYS (Beyond Solutions)',
      date: 'Recent',
      description: 'Successfully completed comprehensive Machine Learning internship program',
      file: '/Internship Certificate M Salman Ahmed BYS ML.pdf',
      skills: ['Machine Learning', 'Data Science', 'Python', 'Model Development']
    },
    {
      title: 'Machine Learning Certificate',
      issuer: 'M Labs',
      date: 'Recent',
      description: 'Advanced training in Machine Learning algorithms and applications',
      file: '/Muhammad Salman Ahmed M Labs Certifiacte.pdf',
      skills: ['AI/ML', 'Deep Learning', 'Neural Networks', 'Data Analysis']
    },
  ]

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
          Certifications & Achievements
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in Machine Learning and AI
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="text-primary" size={32} />
                </div>
                <a
                  href={cert.file}
                  download
                  className="text-primary hover:text-blue-700 transition-colors"
                  title="Download Certificate"
                >
                  <Download size={24} />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-2">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-primary font-medium mb-3">
                <span>{cert.issuer}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">{cert.date}</span>
              </div>

              <p className="text-gray-600 mb-4">
                {cert.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary text-sm">Key Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
            <Award className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-secondary mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-600">
              Committed to staying current with the latest technologies and best practices 
              through ongoing professional development and industry certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
