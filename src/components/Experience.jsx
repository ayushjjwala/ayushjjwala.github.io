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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-blue-600 font-medium">{exp.title}</p>
                <p className="text-gray-600 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
