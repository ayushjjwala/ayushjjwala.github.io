import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Ayush Jhunjhunwala
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Python Developer | AI/ML Enthusiast
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Experienced Python Developer with a strong background in AI/ML and full-stack development.
              Passionate about leveraging technology to solve complex business problems and create
              innovative solutions. Proven track record in developing scalable applications and
              implementing machine learning models.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/ayushjjwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ayushjhunjhunwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="/portfolio-ayush/ayush_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="Download Resume"
              >
                <FaFileDownload size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
