import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";
import profile from "../images/profile2.jpg"

const techSkills = [
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

const About = () => {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden px-4 font-sans">
      
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-2xl" />
      <NavBar />
      
      <section className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center glassmorphism shadow-2xl rounded-3xl p-8 md:p-12 gap-10 border border-white/10 relative mt-24 md:mt-32">
        {/* Profile Image Left Side Square */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto md:mr-8 mb-4">
          <div className="about-square-profile w-52 h-52 md:w-64 md:h-64 flex items-center justify-center overflow-hidden">
            <img
              src={profile}
              alt="Your portrait"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
        {/* About Content */}
        <div className="flex flex-col gap-4 text-center md:text-left w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-150 mb-2">About Me</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-200">Undergraduate Student at SLIIT University</h2>
          <p className="text-gray-300 text-base md:text-lg">
            Hi! I'm <span className="font-semibold text-white">Rusiru Nawodya</span>, As a passionate and motivated undergraduate in Information Technology with a focus on Web Development, I strive to apply my knowledge and skills to create responsive, user-friendly, and efficient web applications. I am eager to contribute to innovative web projects while continuously enhancing my expertise in modern development technologies within a dynamic and fast-evolving digital environment.
          </p>
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
        .about-square-profile {
          background: linear-gradient(135deg, #6366f1 60%, #a21caf 100%);
          border-radius: 1.5rem;
        }
      `}</style>
    </main>
  );
};

export default About;
