import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/ayush_resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
            <p className="mt-4 text-gray-600">
              Get a copy of my detailed resume in PDF format
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
