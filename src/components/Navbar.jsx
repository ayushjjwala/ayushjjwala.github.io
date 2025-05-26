import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { title: 'About Me', id: 'about' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
  { title: 'Publications', id: 'publications' },
  { title: 'Skills', id: 'skills' },
  { title: 'Education', id: 'education' },
  { title: 'Contact', id: 'contact' },
  { title: 'Resume', id: 'resume' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is in view
      const sections = navItems
        .filter(item => item.id !== 'resume') // Exclude resume as it's not a section
        .map(item => document.getElementById(item.id));
      
      const pageYOffset = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const buffer = 100; // Buffer zone to switch active state earlier

      // Check if we're at the bottom of the page
      if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Normal section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop - buffer;
          if (pageYOffset >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (id === 'resume') {
      window.open('./ayush_resume.pdf', '_blank');
      setIsOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={() => handleNavClick('about')} 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ayush J
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${item.id === 'resume' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : activeSection === item.id 
                        ? 'text-blue-600' 
                        : 'text-gray-600 hover:text-blue-500'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right=0 h-0.5 bg-blue-600 rounded-full"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-200
                ${activeSection === item.id 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                }
              `}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.title}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
