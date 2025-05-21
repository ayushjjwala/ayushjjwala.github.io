import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaEnvelope className="text-blue-600 text-xl" />
                <a
                  href="mailto:ayushjjwala94@gmail.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  ayushjjwala94@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaLinkedin className="text-blue-600 text-xl" />
                <a
                  href="https://linkedin.com/in/ayushjhunjhunwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/ayushjhunjhunwala
                </a>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-gray-600"
            >
              Feel free to reach out for collaborations or just a friendly chat!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
