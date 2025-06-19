import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS.",
    link: "#",
  },
  {
    name: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "A full-featured e-commerce platform with product listings, cart, and payment integration. Built with MERN stack.",
    link: "#",
  },
  {
    name: "Chat Application",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A real-time chat application with user authentication and group chat features. Built with Node.js, Socket.io, and React.",
    link: "#",
  },
  {
    name: "Task Manager",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A productivity app to manage daily tasks, deadlines, and priorities. Built with React and Express.js.",
    link: "#",
  },
  {
    name: "Blog Platform",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    description: "A blogging platform with markdown support, comments, and user profiles. Built with MongoDB, Express, and React.",
    link: "#",
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
