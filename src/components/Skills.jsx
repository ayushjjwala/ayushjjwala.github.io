import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';
import { SiTableau, SiFastapi } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';

const skills = [
  {
    name: 'Python',
    icon: FaPython,
    description: 'Advanced Python development including Django, Flask, and FastAPI'
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    description: 'Building high-performance APIs and microservices'
  },
  {
    name: 'SQL',
    icon: FaDatabase,
    description: 'Database design, optimization, and complex queries'
  },
  {
    name: 'Tableau',
    icon: SiTableau,
    description: 'Data visualization and business intelligence'
  },
  {
    name: 'Project Management',
    icon: BsKanban,
    description: 'Agile methodologies and team leadership'
  },
  {
    name: 'Architectural Design',
    icon: FaChartBar,
    description: 'System architecture and scalable solutions design'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-blue-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
