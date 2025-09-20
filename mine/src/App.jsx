import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProjectsPage from "./component/ProjectsPage";
import ContactPage from "./component/Contact";
import HeroSection from "./component/HeroSection";
import SkillsPage from "./component/SkillsPage";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const primaryColor = "#ffcd42";
  const bgColorPrimary = isDarkMode ? "#000000" : "#ffffff"; // page background
  const textColor = isDarkMode ? "#ffffff" : "#222222"; // main text
  const textColorTwo = isDarkMode ? "#bbbbbb" : "#444444"; // secondary text
  const bgSecondary = isDarkMode ? "#111111" : "#f4f4f4"; // section bg
  const cardBackground = isDarkMode ? "#1a1a1a" : "#fafafa"; // card bg
  const bgSecondaryTwo = isDarkMode ? "#000000" : "#111111"; // footer bg
  const shadow = isDarkMode
    ? "0 2px 10px rgba(255, 255, 255, 0.1)"
    : "0 10px 40px rgba(0, 0, 0, 0.2)";

  return (
    <HashRouter>
      <div
        className="min-h-screen font-raleway transition-colors duration-300 overflow-hidden"
        style={{ backgroundColor: bgColorPrimary, color: textColor }}
      >
        {/* Navbar */}
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          primaryColor={primaryColor}
          bgColorPrimary={bgColorPrimary}
          shadow={shadow}
          bgSecondary={bgSecondary}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HeroSection
                isDarkMode={isDarkMode}
                textColor={textColor}
                bgSecondary={bgSecondary}
                textColorTwo={textColorTwo}
                bgColorPrimary={bgColorPrimary}
                cardBackground={cardBackground}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                bgColorPrimary={bgColorPrimary}
                cardBackground={cardBackground}
                textColor={textColor}
                textColorTwo={textColorTwo}
                bgSecondary={bgSecondary}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                isDarkMode={isDarkMode}
                textColor={textColor}
                cardBackground={cardBackground}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <SkillsPage
                isDarkMode={isDarkMode}
                textColor={textColor}
                cardBackground={cardBackground}
              />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl md:text-3xl pt-20 px-4">
                404: Page Not Found
              </h1>
            }
          />
        </Routes>

        {/* Footer */}
        <Footer bgSecondaryTwo={bgSecondaryTwo} textColorTwo={textColorTwo} />

        {/* Extra Styles */}
        <style>
          {`
          @import url('https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900');

          .font-raleway {
            font-family: 'Raleway', sans-serif;
          }

          @keyframes bounce-custom {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-10px);
            }
          }

          .animate-bounce-custom {
            animation: bounce-custom 1s infinite alternate;
          }

          .ease-cubic {
            transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          }

          .card .project-info {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1rem;
            box-sizing: border-box;
          }

          .card {
            min-height: 250px;
            background-size: cover;
            background-position: center;
            position: relative;
          }

          @media (max-width: 640px) {
            .card {
              min-height: 180px;
            }
            .project-info {
              font-size: 0.9rem;
            }
          }
        `}
        </style>
      </div>
    </HashRouter>
  );
};

export default App;
