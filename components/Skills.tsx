'use client'

import { Brain, Code, Users, Target, TrendingUp, Lightbulb } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Project Management',
      icon: <Target size={32} />,
      skills: [
        'Agile & Scrum Methodologies',
        'Team Leadership',
        'Resource Planning',
        'Risk Management',
        'Stakeholder Communication',
        'Project Planning & Execution',
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={32} />,
      skills: [
        'Machine Learning Algorithms',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Model Deployment',
        'Data Analysis',
      ]
    },
    {
      title: 'Technical Skills',
      icon: <Code size={32} />,
      skills: [
        'Python Programming',
        'TensorFlow & PyTorch',
        'Data Structures & Algorithms',
        'SQL & Database Management',
        'Version Control (Git)',
        'Software Development',
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users size={32} />,
      skills: [
        'Team Collaboration',
        'Problem Solving',
        'Communication',
        'Time Management',
        'Critical Thinking',
        'Adaptability',
      ]
    },
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive skill set combining technical expertise with strong project management capabilities
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
