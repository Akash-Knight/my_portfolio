import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/mineimg.png";

const HeroSection = ({ isDarkMode, textColor }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden text-center"
      style={{
        background: `linear-gradient(to right, ${
          isDarkMode ? "#0a0a0c" : "#f8fafc"
        }, ${isDarkMode ? "#111827" : "#e2e8f0"})`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px]" />

      {/* Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 blur-[100px] opacity-20 rounded-full"></div>

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-400 uppercase">
              Available for projects
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            style={{ color: textColor }}
          >
            Hi I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Akash Kumar
            </span>
          </h1>

          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: textColor }}
            >
              I craft digital products,
            </h2>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: textColor }}
            >
              build brand identities & user-first experiences.
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: textColor }}
            >
              A Frontend Developer and Visual Designer with hands-on experience
              in web design, product design, and creative branding.
            </p>
          </div>

          {/* Button */}
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-xl font-bold shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:-translate-y-1 transition duration-300"
          >
            Connect With Me →
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-3 rotate-2 group-hover:rotate-0 transition duration-500 rounded-[2rem]">
              <img
                src={profileImage}
                alt="Akash Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-[1.5rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
      
      
    </section>
    
  );
};

export default HeroSection;
