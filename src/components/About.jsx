import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Email is encoded to prevent scraping
const ENCODED_EMAIL = 'YXl1c2hqandhbGE5NEBnbWFpbC5jb20='; // Base64 encoded email

export default function About() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = atob(ENCODED_EMAIL);
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(37,99,235,0.08),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Ayush Jhunjhunwala
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-700/80 font-medium mb-2">
              Python Developer | AI/ML Enthusiast
            </h2>
            <div className="flex items-center mb-8 text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Arizona, United States</span>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Experienced Python Developer with a strong background in AI/ML and full-stack development.
                Passionate about leveraging technology to solve complex business problems and create
                innovative solutions. Proven track record in developing scalable applications and
                implementing machine learning models.
              </p>
              <div className="flex space-x-4">
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
                  href="#"
                  onClick={handleEmailClick}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="Send Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="./Headshot.png"
              alt="Ayush Jhunjhunwala"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl border-4 border-white object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
