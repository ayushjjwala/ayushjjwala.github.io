import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { title: 'About Me', id: 'about' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
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
      const sections = navItems.map(item => document.getElementById(item.id));
      const pageYOffset = window.pageYOffset;
      const buffer = 100; // Buffer zone to switch active state earlier

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
      window.open('/portfolio-ayush/ayush_resume.pdf', '_blank');
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-xl font-bold text-gray-800"
          >
            Ayush Jhunjhunwala
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-500'
                  } px-3 py-2 rounded-md text-sm transition-colors duration-200`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -100,
        }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
