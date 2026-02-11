'use client'

import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Project Manager Executive',
      company: 'MTBC CareCloud – Bagh, AJK, Pakistan',
      period: 'Oct 2025 – Present',
      description: 'Coordinating delivery of AI-powered healthcare products while maintaining close involvement with technical implementation.',
      responsibilities: [
        'Working with AI engineers, software developers, QA, and DevOps teams to translate requirements into executable technical tasks',
        'Overseeing sprint execution, release coordination, and quality validation for AI and software features',
        'Supporting architecture discussions, feasibility analysis, and dependency management across teams',
      ]
    },
    {
      title: 'Junior AI Engineer',
      company: 'MTBC CareCloud – Bagh, AJK, Pakistan',
      period: 'Jun 2025 – Oct 2025',
      description: 'Developed and supported AI-driven features for healthcare applications targeting the US market.',
      responsibilities: [
        'Worked on RAG-based document processing solutions and AI-assisted automation workflows',
        'Collaborated with QA and DevOps teams to support testing, deployment, and post-release monitoring',
        'Contributed to AI engineering tasks including feature development, model integration, and system optimization',
        'Worked closely with senior engineers and project managers, gaining exposure to full project lifecycles',
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'MTBC CareCloud – Hybrid (Islamabad, Pakistan)',
      period: 'Mar 2025 – Jun 2025',
      description: 'Worked under mentorship to develop skills in data analytics and healthcare data processing.',
      responsibilities: [
        'Assisted in data cleaning, analysis, and reporting tasks supporting internal projects',
        'Gained hands-on experience with healthcare data processing and analytics workflows',
      ]
    },
    {
      title: 'Game Development Intern',
      company: 'Mindstorm Studios – Islamabad, Pakistan',
      period: 'Jun 2024 – Aug 2024',
      description: 'Developed mobile games using Unity Engine and C#, working collaboratively in a structured development environment.',
      responsibilities: [
        'Developed a mobile game using Unity Engine and C# with a 4-member team',
        'Followed structured development pipeline and delivered a production-ready build',
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
