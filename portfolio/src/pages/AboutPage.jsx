import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Introduction Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-purple-400">Hello! I'm Durga Prasad, a passionate full-stack developer with a strong foundation in web development. I love building interactive and user-friendly web applications.</p>
        </motion.div>

        {/* Education Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-purple-400">I graduated with a degree in Computer Science in 2023. I have also completed various online courses on platforms like Internshala and APSCHE. <strong>CGPA: 6.20</strong></p>
          <p className="text-purple-400">I completed my intermediate in mpc in 2020 in Mother theresa junior collge, palamaner.  <strong>CGPA: 5.24 </strong> </p>
          <p className="text-purple-400">I completed my SSC in 2016 in Vishwa Bharathi High School, Punganur. <strong> Grade: 6.2</strong></p>
        </motion.div>

        {/* Personal Interests Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
          <p className="text-purple-400">When I'm not coding, I enjoy exploring new technologies, playing video games, and engaging in outdoor activities like to play cricket and go for walk.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
