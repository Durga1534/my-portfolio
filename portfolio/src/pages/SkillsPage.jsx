import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiJest, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

const SkillsPage = () => {
  return (
    <div id="skills" className="bg-gray-900 text-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">Skills</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Frontend Skills */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Frontend Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* JavaScript */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiJavascript className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </motion.div>

            {/* React */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaReact className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold">React</h3>
            </motion.div>

            {/* HTML5 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaHtml5 className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold">HTML5</h3>
            </motion.div>

            {/* CSS3 */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaCss3Alt className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold">CSS3</h3>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiTailwindcss className="text-6xl text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
            </motion.div>

            {/* Jest */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiJest className="text-6xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold">Jest</h3>
            </motion.div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Backend Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Node.js */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaNodeJs className="text-6xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold">Node.js</h3>
            </motion.div>

            {/* Express.js */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiExpress className="text-6xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold">Express.js</h3>
            </motion.div>

            {/* MongoDB */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiMongodb className="text-6xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold">MongoDB</h3>
            </motion.div>

            {/* Git */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaGitAlt className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold">Git</h3>
            </motion.div>

            {/* GitHub */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FaGithub className="text-6xl text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold">GitHub</h3>
            </motion.div>

            {/* REST APIs */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <SiPostman className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold">REST APIs</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
