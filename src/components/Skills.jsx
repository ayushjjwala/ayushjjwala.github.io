import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';
import { SiTableau, SiFastapi, SiApacheairflow, SiReact, SiKubernetes } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';

const skills = [
  {
    name: 'Python',
    icon: FaPython,
    description: 'Advanced Python development including Django, Flask, and FastAPI'
  },
  {
    name: 'React',
    icon: SiReact,
    description: 'Building interactive UIs and single-page applications'
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    description: 'Database design, optimization, and complex queries'
  },
  {
    name: 'Airflow',
    icon: SiApacheairflow,
    description: 'Workflow automation and orchestration'
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_20%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.08),transparent_30%)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-center text-blue-700/80 mb-12">Technologies and tools I work with</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <skill.icon className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors">{skill.name}</h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
