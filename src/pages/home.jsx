import React from "react";
import NavBar from "../component/NavBar";
import Profile from "../images/profile2.jpg"

const Home = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden px-4 font-sans">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-2xl" />
      <NavBar />
      {/* Hero Card */}
      <section className="mt-24 md:mt-32 w-full max-w-3xl mx-auto flex flex-col items-center glassmorphism shadow-2xl rounded-3xl p-8 md:p-12 gap-10 border border-white/10 relative">
        {/* Profile Image Centered and Bigger */}
        <div className="flex flex-col items-center w-full -mt-24 mb-4">
          <div className="relative">
            <span className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-purple-400 blur-2xl opacity-60 animate-pulse" />
            <img
              src={Profile}
              alt="Profile of Rusiru Nawodya"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10"
              loading="lazy"
            />
          </div>
        </div>
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center gap-6 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-indigo-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            Hello, I'm <span className="text-white">Rusiru Nawodya</span>
          </h1>
          {/* Animated Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold flex justify-center items-center w-full">
            <span className="relative inline-block animate-shimmer bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Web Development Enthusiast
            </span>
          </h2>
        </div>
      </section>
      {/* Glassmorphism utility and shimmer animation */}
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
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </main>
  );
};

export default Home;
