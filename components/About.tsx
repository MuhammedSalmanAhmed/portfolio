'use client'

import { User, Award, Briefcase } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Professional Background
                </h3>
                <p className="text-gray-600">
                  Experienced Project Manager with a strong foundation in AI and Machine Learning. 
                  Completed a Bachelor of Science in Computer Science from National University 
                  of Engineering and Technology, NUST (2021-2025).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Experience
                </h3>
                <p className="text-gray-600">
                  Proven track record in project management, team leadership, and delivering 
                  innovative AI/ML solutions. Skilled in coordinating cross-functional teams 
                  and managing complex technical projects.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Certifications
                </h3>
                <p className="text-gray-600">
                  Certified in Machine Learning and Data Science from industry-leading 
                  organizations, continuously expanding expertise in cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">BE Software Engineering Student (2021-2025)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Project Management Expertise</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">AI/ML Implementation Specialist</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Team Leadership & Coordination</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Strategic Planning & Execution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
