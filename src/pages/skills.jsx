import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";

const skills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const gradientColors = [
  'from-cyan-500 to-blue-500', // React
  'from-orange-400 to-yellow-500', // HTML
  'from-blue-400 to-blue-600', // CSS
  'from-yellow-400 to-yellow-600', // JS
  'from-green-400 to-green-700', // Node
  'from-fuchsia-400 to-pink-500', // Kotlin
  'from-gray-400 to-gray-700', // Express
  'from-green-600 to-green-900', // MongoDB
  'from-orange-400 to-orange-600', // Postman
  'from-red-400 to-red-100', // Git
  'from-blue-400 to-blue-200', // VS Code
];

const Skills = () => {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden px-4 font-sans">
        <NavBar/>

      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-2xl" />
      
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center glassmorphism shadow-2xl rounded-3xl p-8 md:p-12 gap-10 border border-white/10 relative mt-24 md:mt-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-150 mb-2 text-center">Skills</h1>
        <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
          Here are some of the technologies and tools I work with. I love learning new things and continuously improving my skill set!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <span
                className={`flex items-center justify-center rounded-full w-20 h-20 mb-2 shadow-lg bg-gradient-to-br ${gradientColors[idx] || 'from-indigo-400 to-purple-500'}`}
              >
                <img src={skill.icon} alt={skill.name + ' logo'} className="w-12 h-12 object-contain" />
              </span>
              <span className="text-base font-semibold text-indigo-100 mt-1 text-center">
                {skill.name}
              </span>
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

export default Skills;
