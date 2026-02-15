'use client'

import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Project Manager Executive',
      company: 'MTBC CareCloud – Bagh, AJK, Pakistan',
      period: 'Oct 2025 – Present',
      description:
        'Coordinating delivery of AI-powered healthcare products while staying actively involved in technical implementation and cross-team collaboration.',
      responsibilities: [
        'Coordinating delivery of AI-powered healthcare products with technical oversight',
        'Translating product requirements into executable technical tasks with AI, QA, DevOps, and engineering teams',
        'Overseeing sprint execution, release coordination, and quality validation',
        'Supporting architecture discussions, feasibility analysis, and cross-team dependency management',
      ],
    },
    {
      title: 'Junior AI Engineer',
      company: 'MTBC CareCloud – Bagh, AJK, Pakistan',
      period: 'Jun 2025 – Oct 2025',
      description:
        'Developed and supported AI-driven healthcare features targeting the US market, contributing across the full project lifecycle.',
      responsibilities: [
        'Developed AI-driven features for healthcare applications targeting the US market',
        'Worked on RAG-based document processing solutions and AI-assisted automation workflows',
        'Supported feature development, model integration, and system optimization',
        'Collaborated with QA and DevOps teams for testing, deployment, and post-release monitoring',
        'Worked closely with senior engineers and project managers across full project lifecycles',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'MTBC CareCloud – Hybrid (Islamabad, Pakistan)',
      period: 'Mar 2025 – Jun 2025',
      description:
        'Worked under mentorship to build foundational skills in healthcare data analytics and processing.',
      responsibilities: [
        'Assisted in data cleaning, preprocessing, and analysis of healthcare datasets',
        'Supported reporting and analytics tasks for internal projects',
        'Gained hands-on experience in healthcare data workflows and best practices',
      ],
    },
    {
      title: 'Game Development Intern',
      company: 'Mindstorm Studios – Islamabad, Pakistan',
      period: 'Jun 2024 – Aug 2024',
      description:
        'Learned core game development principles and contributed to delivering a production-ready mobile game.',
      responsibilities: [
        'Learned programming, art, and game design fundamentals',
        'Developed a mobile game using Unity Engine and C# in a 4-member team',
        'Followed a structured development pipeline and delivered a production-ready build',
      ],
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
                <h4 className="font-semibold text-secondary">
                  Key Responsibilities:
                </h4>
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
