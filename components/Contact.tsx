'use client'

import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next project
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Email</h4>
                    <a
                      href="mailto:msalmanahmed2003@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      msalmanahmed2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Location</h4>
                    <p className="text-gray-600">Chashma, Mianwali, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-secondary mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="mailto:msalmanahmed2003@gmail.com"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="text-primary" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammed-salman-ahmed-9a75b6271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-primary" size={24} />
                  </a>
                  <a
                    href="https://github.com/MuhammedSalmanAhmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="text-primary" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8">
              <h4 className="font-semibold text-secondary mb-3">Availability</h4>
              <p className="text-gray-600">
                Currently available for freelance projects and full-time opportunities. 
                Feel free to reach out to discuss your project requirements.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
