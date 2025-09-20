import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../assets/mineimg.png"

const HeroSection = ({ isDarkMode, textColor, bgSecondary, textColorTwo }) => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-32 text-center px-4" style={{ background: `linear-gradient(to right, ${isDarkMode ? '#000000' : '#f0f0f0'}, ${isDarkMode ? '#1a202c' : '#e0e0e0'})` }}>
      <img
        className="profile-image w-36 h-36 rounded-full object-cover border-4 shadow-lg mb-8 animate-bounce"
        src={profileImage}
        alt="Akash's Profile"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-300 mb-4 animate-fade-in-down" style={{ color: textColor }}>Hi I'm Akash Kumar</h1>

      <div className="content-text max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-200" style={{ color: textColor }}>I craft digital products</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-200" style={{ color: textColor }}> build brand identities, and design user-first experiences.</h2>

        <p className="text-xl leading-relaxed" style={{ color: textColor }}>
          A Frontend Developer and Visual Designer with hands-on experience in web design, product design, and creative branding.
        </p>
      </div>
      <Link
        to="/contact"
        className="btn inline-block py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 md:w-auto w-4/5"
        style={{ backgroundColor: 'whitesmoke', color: 'black' }}
      >
        Connect With Me
      </Link>
    </section>
  );
};

export default HeroSection;
