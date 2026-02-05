'use client'

import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'M Labs',
      period: 'Recent',
      description: 'Worked on cutting-edge machine learning projects, implementing AI solutions and contributing to data-driven decision making.',
      responsibilities: [
        'Developed and deployed ML models for real-world applications',
        'Collaborated with cross-functional teams on AI initiatives',
        'Conducted data analysis and model optimization',
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'BYS (Build Your Startup)',
      period: 'Recent',
      description: 'Contributed to innovative startup projects, applying machine learning techniques to solve business challenges.',
      responsibilities: [
        'Implemented ML algorithms for business automation',
        'Participated in agile development processes',
        'Supported product development with data insights',
      ]
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-12">
          Professional Experience
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-primary mt-2">
                    <Briefcase size={18} className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mt-2 sm:mt-0">
                  <Calendar size={18} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-secondary">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
