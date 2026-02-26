import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    <>
      <nav
        className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b"
        style={{
          backgroundColor: bgSecondary,
          boxShadow: shadow,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* LEFT - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={MyLogo}
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
            </Link>
          </div>

          {/* CENTER - Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-8 items-center font-medium">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group pb-1 transition duration-300"
                style={{ color: primaryColor }}
              >
                {item}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT - Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="/Akash CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-5 py-2 rounded-full font-semibold text-sm transition hover:scale-105"
              style={{
                backgroundColor: primaryColor,
                color: bgColorPrimary,
              }}
            >
              Resume
            </a>

            <button
              onClick={toggleDarkMode}
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-full transition"
              style={{ color: primaryColor }}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2"
              style={{ color: primaryColor }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          backgroundColor: bgSecondary,
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">

          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="relative group pb-1 transition duration-300"
              style={{ color: primaryColor }}
            >
              {item}

              {/* Underline */}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}

          <a
            href="/Akash CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
            style={{
              backgroundColor: primaryColor,
              color: bgColorPrimary,
            }}
            onClick={toggleMenu}
          >
            Resume
          </a>

          <button
            onClick={() => {
              toggleDarkMode();
              toggleMenu();
            }}
            className="px-4 py-2 rounded-full text-sm"
            style={{
              backgroundColor: primaryColor,
              color: bgColorPrimary,
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
