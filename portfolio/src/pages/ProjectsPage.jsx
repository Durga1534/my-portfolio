import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Project Management System",
    description: "This is a fullstack application used to manage users, tasks, teams and projects and has user-authentication with JWT security",
    imageUrl: "portfolio/src/assets/HomePage-desktop.png",
  },
  {
    title: "Portfolio",
    description: "This portfolio built using Reactjs, Framer motion, with Aurora implementation using thirdparty website Hover.dev to make it visually good looking and users can smoothly scroll across the pages ",
    imageUrl: "portfolio/src/assets/Portfolio.png",
  },
  {
    title: "Mortgage Calculator",
    description: "This calculator is built using Vanila Javascript, CSS used to calculate The intrest for the coming months according to the loan amount",
    imageUrl: "portfolio/src/assets/Mortgage-Calculator.png",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">My Projects</h1>
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap list-none m-0 p-0">
          {projects.map((project, index) => (
            <motion.li 
              key={index} 
              className="flex p-4 w-full md:w-1/2 lg:w-1/3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
                <div className="card_image">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-4 bg-gradient-to-bl from-purple-600 to-gray-600">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-white mt-2">{project.description}</p>
                  <motion.button 
                    className="mt-4 bg-transparent text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                   <Link to="https://github.com/Durga1534">View</Link>
                  </motion.button>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
