import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";
import Project1 from "../images/Agri.jpg";
import Project2 from "../images/vehicle.jpg";
import Project3 from "../images/todo.jpg";
import Project4 from "../images/fashion.jpg";
import Project5 from "../images/cook.png";

const projects = [
  {
    name: "Agricultural Management System",
    image: Project1,
    description: "A modern agricultural management platform that supports smart farming, land development, and marketplace integration. Designed to boost productivity and sustainability, it’s built using React and Tailwind CSS.",
    link: "https://github.com/RusiruNawodya/agriSystem_ITMP.git",
  },
  {
    name: "Vehicle Service Management System",
    image: Project2,
    description: "A complete vehicle service management platform for garages and service centers, featuring booking, payments, inventory, employee, and modification management. Built with React and Tailwind CSS.",
    link: "https://github.com/RusiruNawodya/VehicleService_System.git",
  },
  {
    name: "TO-DO Mobile Application",
    image: Project3,
    description: "SimpleTasks is a lightweight and efficient TODO app built with Kotlin, helping you organize, prioritize, and track daily tasks with ease.",
    link: "https://github.com/RusiruNawodya/TODO_NoteApp.git",
  },
  {
    name: "Online Fashion Store",
    image: Project4,
    description: "A responsive e-commerce fashion store website where users can browse and purchase clothing and accessories. Built with HTML, CSS, and JavaScript for an interactive shopping experience.",
    link: "https://github.com/RusiruNawodya/FashionStore.git",
  },
  {
    name: "Food And Recipies Share Platform",
    image: Project5,
    description: "A social blogging platform for food lovers to share and explore recipes, with features like Markdown posts, comments, likes, shares, and user profiles. Built with Spring Boot and React.",
    link: "https://github.com/RusiruNawodya/cookbook_app.git",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden px-4 font-sans">
      
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-2xl" />
      <NavBar/>
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center glassmorphism shadow-2xl rounded-3xl p-8 md:p-12 gap-10 border border-white/10 relative mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-150 mb-2 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glassmorphism rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-indigo-900/40 to-transparent opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6 right-6 flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">{project.name}</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 pt-4">
                <p className="text-gray-200 text-base md:text-lg">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style>{`
        .glassmorphism {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(16px) saturate(180%);
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
};

export default Projects;
