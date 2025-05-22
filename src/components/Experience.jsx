import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'JPMorgan Chase & Co.',
    title: 'Lead Software Engineer',
    period: '2022 - Present',
    description: [
      'Developing and maintaining backend services using Python and FastAPI',
      'Working on high-performance data processing pipelines',
      'Implementing microservices architecture and RESTful APIs'
    ]
  },
  {
    company: 'OpenInvest',
    title: 'Software Developer',
    period: '2020 - 2022',
    description: [
      'Built scalable investment management platforms',
      'Implemented automated trading systems',
      'Developed data analysis and visualization tools'
    ]
  },
  {
    company: 'Oracle',
    title: 'Software Developer',
    period: '2018 - 2020',
    description: [
      'Developed cloud infrastructure solutions',
      'Implemented database optimization strategies',
      'Created automated testing frameworks'
    ]
  },
  {
    company: 'IIIT Hyderabad',
    title: 'Research Assistant',
    period: '2016 - 2018',
    description: [
      'Conducted research in machine learning and AI',
      'Published papers in international conferences',
      'Developed prototype AI applications'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.05),transparent_30%,rgba(59,130,246,0.05)_70%,transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-gradient-x">
            Professional Experience
          </h2>
          <p className="text-lg text-center text-blue-700/80 mb-16">Crafting innovative solutions and driving technological excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Highlight effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
                
                {/* Card content */}
                <div className="relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300">
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Company and Duration */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.div
                      className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 group-hover:bg-blue-100/70 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {exp.period}
                    </motion.div>
                  </div>

                  {/* Role */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-blue-600 font-medium">
                      {exp.title}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="relative pl-6 group/item"
                      >
                        <span className="absolute left-0 top-[0.6rem] h-1 w-3 rounded-full bg-blue-400 group-hover/item:w-4 group-hover/item:bg-blue-500 transition-all duration-300"></span>
                        <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                          {desc}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
