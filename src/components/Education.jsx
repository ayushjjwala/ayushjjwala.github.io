import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Technology (M.Tech)',
    institution: 'IIIT Hyderabad',
    field: 'Computer Science and Engineering',
    period: '2016 - 2018',
    description: 'Specialized in Machine Learning and Artificial Intelligence'
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'IIIT Hyderabad',
    field: 'Computer Science and Engineering',
    period: '2012 - 2016',
    description: 'Focus on Software Engineering and Data Structures'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaGraduationCap className="text-blue-600 text-3xl mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-600">{edu.field}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
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
