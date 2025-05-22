import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Powered Investment Platform',
    description: 'A machine learning-based platform that analyzes market trends and provides investment recommendations using Python, FastAPI, and React.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    github: '#',
    demo: '#',
    image: 'project-thumbnail.jpg'
  },
  // More projects can be added here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.08),transparent_35%)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-lg text-center text-blue-700/80 mb-12">Showcasing my recent work and innovations</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100/80 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:bg-blue-200/50 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                  <div className="flex space-x-4 pt-2 border-t border-gray-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200"
                    >
                      <span className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-200">
                        <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      </span>
                      <span className="ml-2 font-medium">View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200"
                    >
                      <span className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-200">
                        <FaExternalLinkAlt className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      </span>
                      <span className="ml-2 font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
