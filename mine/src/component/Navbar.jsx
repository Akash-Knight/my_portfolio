import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import MyLogo from "../assets/Logoimg.png";

const Navbar = ({
  isMenuOpen,
  toggleMenu,
  isDarkMode,
  toggleDarkMode,
  primaryColor,
  bgColorPrimary,
  shadow,
  bgSecondary,
}) => {
  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{ backgroundColor: bgSecondary, boxShadow: shadow }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold" style={{ color: primaryColor }}>
          <img
            src={MyLogo}
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <Link to="/projects" className="hover:opacity-70">Projects</Link>
          <Link to="/skills" className="hover:opacity-70">Skills</Link>
          <Link to="/contact" className="hover:opacity-70">Contact</Link>

          {/* Resume Button */}
          <a
            href="/Akash CV.pdf" // put your resume file in public/resume.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg font-medium transition duration-300"
            style={{ backgroundColor: primaryColor, color: bgColorPrimary }}
          >
            Resume
          </a>

          {/* Dark/Light Mode */}
          <button
            onClick={toggleDarkMode}
            className="ml-3 px-3 py-1 rounded-lg text-sm "
            style={{ backgroundColor: primaryColor, color: bgColorPrimary }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg focus:outline-none"
          style={{ color: primaryColor }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden flex flex-col space-y-4 px-6 py-4"
          style={{ backgroundColor: bgSecondary }}
        >
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>

          {/* Resume Button in Mobile */}
          <a
            href="/Akash CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg font-medium transition duration-300 text-center"
            style={{ backgroundColor: primaryColor, color: bgColorPrimary }}
            onClick={toggleMenu}
          >
            Resume
          </a>

          <button
            onClick={() => {
              toggleDarkMode();
              toggleMenu();
            }}
            className="px-3 py-1 rounded-lg text-sm"
            style={{ backgroundColor: primaryColor, color: bgColorPrimary }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
