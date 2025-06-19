import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
    ),
    hover: "hover:animate-pulse"
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
    ),
    hover: "hover:animate-pulse"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F3"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
    hover: "hover:animate-pulse"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 448 448"><linearGradient id="IG-gradient" x1="224" x2="224" y1="32" y2="416" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".5" stopColor="#ff543e"/><stop offset="1" stopColor="#c837ab"/></linearGradient><rect width="448" height="448" rx="100" fill="url(#IG-gradient)"/><path d="M224 144c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm90.5-128c0 10.5-8.5 19-19 19s-19-8.5-19-19 8.5-19 19-19 19 8.5 19 19zm49.5 19c-1.1-23.6-6.4-44.5-23.4-61.5S343.6 33.1 320 32c-23.6-1.1-94.4-1.1-118 0-23.6 1.1-44.5 6.4-61.5 23.4S33.1 104.4 32 128c-1.1 23.6-1.1 94.4 0 118 1.1 23.6 6.4 44.5 23.4 61.5S104.4 414.9 128 416c23.6 1.1 94.4 1.1 118 0 23.6-1.1 44.5-6.4 61.5-23.4s22.3-37.9 23.4-61.5c1.1-23.6 1.1-94.4 0-118zm-48.5 144c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.1 0-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2 0-132.1 7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.1 0 19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 0 132.1z" fill="#fff"/></svg>
    ),
    hover: "hover:animate-pulse"
  },
  {
    name: "Gmail",
    url: "mailto:youraddress@gmail.com",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect width="48" height="48" rx="10" fill="#fff"/>
          <path d="M9.5 14.5L24 26.5L38.5 14.5" stroke="#EA4335" strokeWidth="3"/>
          <rect x="9.5" y="14.5" width="29" height="19" rx="3" fill="#fff"/>
          <path d="M9.5 14.5L24 26.5L38.5 14.5" stroke="#EA4335" strokeWidth="3"/>
          <path d="M9.5 14.5V33.5C9.5 34.6046 10.3954 35.5 11.5 35.5H36.5C37.6046 35.5 38.5 34.6046 38.5 33.5V14.5" stroke="#34A853" strokeWidth="3"/>
          <path d="M9.5 14.5L24 26.5L38.5 14.5" stroke="#FBBC05" strokeWidth="3"/>
          <path d="M24 26.5V35.5" stroke="#4285F4" strokeWidth="3"/>
        </g>
      </svg>
    ),
    hover: "hover:animate-pulse"
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white px-4 py-20">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-2xl" />
      <NavBar/>
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-150 mb-2 text-center animate-fadein">Contact Me</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center mb-8 animate-fadein delay-100">
          Let's connect! Fill out the form below or reach out via social links.
        </p>
        <div className="w-full glassmorphism rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-8 animate-slideup">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-indigo-400 focus:border-indigo-500 outline-none py-2 text-lg transition-colors placeholder-transparent"
                placeholder="Your Name"
                required
              />
              <label htmlFor="name" className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-indigo-300 peer-focus:text-sm peer-focus:font-semibold">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-indigo-400 focus:border-indigo-500 outline-none py-2 text-lg transition-colors placeholder-transparent"
                placeholder="Your Email"
                required
              />
              <label htmlFor="email" className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-indigo-300 peer-focus:text-sm peer-focus:font-semibold">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-indigo-400 focus:border-indigo-500 outline-none py-2 text-lg transition-colors placeholder-transparent resize-none min-h-[100px]"
                placeholder="Your Message"
                required
              />
              <label htmlFor="message" className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-indigo-300 peer-focus:text-sm peer-focus:font-semibold">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
            >
              {submitted ? "Thank you!" : "Send Message"}
            </button>
          </form>
          <div className="flex justify-center gap-8 mt-4 flex-wrap">
            {socialLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br transition-transform duration-300 hover:scale-110 hover:shadow-2xl ${link.hover}`}
                aria-label={link.name}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 bg-opacity-60 mb-2">
                  {link.icon}
                </span>
                <span className="text-xs text-indigo-100 font-semibold group-hover:text-indigo-300 transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
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
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .hover\:animate-rotate:hover { animation: rotate 0.7s linear; }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        .hover\:animate-wiggle:hover { animation: wiggle 0.7s ease-in-out; }
        /* Tailwind's animate-bounce and animate-pulse are used for Facebook and Instagram */
      `}</style>
    </main>
  );
};

export default Contact;
