import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.div 
      className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        className="bg-gray-800 rounded-lg p-8 max-w-lg w-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          <motion.input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:bg-gray-600"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <motion.input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:bg-gray-600"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <motion.textarea 
            id="message" 
            name="message" 
            className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:bg-gray-600"
            rows="4"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <div className="text-center">
          <motion.button 
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
