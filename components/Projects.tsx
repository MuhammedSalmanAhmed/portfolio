'use client'

import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Project Management System',
      description: 'Developed an intelligent project management platform utilizing machine learning to predict project timelines, resource allocation, and risk assessment.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      highlights: [
        'Automated task scheduling using ML algorithms',
        'Real-time project analytics dashboard',
        'Predictive risk management features',
      ]
    },
    {
      title: 'Machine Learning Model Optimization',
      description: 'Created an automated framework for optimizing ML models, reducing training time by 40% and improving accuracy through hyperparameter tuning.',
      technologies: ['Python', 'PyTorch', 'Scikit-learn', 'Docker'],
      highlights: [
        'Automated hyperparameter optimization',
        'Model performance monitoring',
        'Scalable deployment pipeline',
      ]
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Built comprehensive analytics dashboard for visualizing complex datasets and generating actionable insights for business decision-making.',
      technologies: ['Python', 'Pandas', 'Plotly', 'FastAPI'],
      highlights: [
        'Interactive data visualizations',
        'Real-time data processing',
        'Custom reporting features',
      ]
    },
    {
      title: 'NLP-Based Document Analyzer',
      description: 'Implemented natural language processing solution for automated document classification and information extraction.',
      technologies: ['Python', 'spaCy', 'BERT', 'Flask'],
      highlights: [
        'Automated document categorization',
        'Named entity recognition',
        'Sentiment analysis capabilities',
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
