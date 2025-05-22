import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaRegEnvelope, FaRegUser, FaRegEdit } from 'react-icons/fa';

// Email is encoded to prevent scraping
const ENCODED_EMAIL = 'YXl1c2hqandhbGE5NEBnbWFpbC5jb20='; // Base64 encoded email

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const sanitizeInput = (str) => {
    return str
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .replace(/[&]/g, 'and') // Replace & with 'and'
      .replace(/['"\\]/g, '') // Remove quotes and backslashes
      .trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Validate email before proceeding
    if (!validateEmail(email)) {
      return;
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedEmail = email.trim().toLowerCase();

    // Additional validation for message length
    if (sanitizedMessage.length > 1000) {
      alert('Message is too long. Please keep it under 1000 characters.');
      return;
    }

    // Decode the email address for use
    const recipientEmail = atob(ENCODED_EMAIL);
    
    // Create email body with formatted content
    const emailBody = `
Name: ${sanitizedName}
Email: ${sanitizedEmail}

Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}
    `.trim();
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(sanitizedSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      validateEmail(value);
    }
    
    // Update character count for message field
    if (name === 'message') {
      const newCount = value.length;
      setCharCount(newCount);
      if (newCount > 1000) {
        return; // Don't update state if message is too long
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.08),transparent_35%)]"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-gradient-x">Get In Touch</h2>
          <p className="text-lg text-blue-700/80 mb-12">Have a question or want to work together?</p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    maxLength={50}
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid name (letters and spaces only)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-gray-100/50 focus:bg-white backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    maxLength={100}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      emailError ? 'border-red-500' : 'border-gray-200'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRegEdit className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  maxLength={100}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  maxLength={1000}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white resize-none"
                />
                <div className={`text-sm mt-2 flex justify-between items-center ${
                  charCount > 900 ? (charCount > 950 ? 'text-red-500' : 'text-yellow-500') : 'text-gray-500'
                }`}>
                  <span className="text-gray-500 text-xs">Press Enter ⏎ for new line</span>
                  <span>{charCount}/1000 characters</span>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center space-y-4"
              >
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-200/50"
                >
                  <span className="relative flex items-center">
                    <FaPaperPlane className="mr-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    Send Message
                  </span>
                </button>
                <p className="text-sm text-gray-500">
                  Your message will be sent through your default email client
                </p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
