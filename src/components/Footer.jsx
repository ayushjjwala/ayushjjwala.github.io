import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  // Email is encoded to prevent scraping (same as in Contact.jsx)
  const ENCODED_EMAIL = 'YXl1c2hqandhbGE5NEBnbWFpbC5jb20=';

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = atob(ENCODED_EMAIL);
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayush Jhunjhunwala</h3>
            <p className="text-sm text-gray-400">
              Python Developer & AI/ML Enthusiast crafting innovative solutions
              through code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="text-sm hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="text-sm hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ayushjjwala"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ayushjhunjhunwala"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                onClick={handleEmailClick}
                className="hover:text-white transition-colors"
                title="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ayush Jhunjhunwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
