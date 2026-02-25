import React from "react";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const Footer = ({ bgSecondaryTwo, textColorTwo }) => {
  return (
    <footer
      id="footer"
      className="pt-16 pb-8"
      style={{ backgroundColor: bgSecondaryTwo, color: textColorTwo }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Akash Knight
              </span>
            </div>

            <p className="opacity-70 leading-relaxed mb-8 max-w-md">
              Frontend Developer crafting scalable, responsive, and visually
              refined web applications with modern technologies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/akash-kumar-297a5928a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
              </a>

              <a
                href="https://github.com/Akash-Knight"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
              >
                <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4 opacity-70">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              {/* <li><a href="#about" className="hover:text-blue-400">About</a></li> */}
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Capabilities
            </h4>
            <ul className="space-y-4 opacity-70">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Let's Connect
            </h4>

            <p className="text-sm opacity-70 mb-6">
              Interested in collaborating or discussing a project?
              Feel free to reach out.
            </p>

            <a
              href="mailto:creators1885@gmail.com"
              className="inline-flex items-center px-5 py-3 rounded-full bg-slate-800 text-sm font-medium hover:bg-slate-700 transition-all border border-slate-700"
            >
              creators1885@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs uppercase tracking-widest opacity-60">
          <div>
            © {new Date().getFullYear()} Akash Knight. All rights reserved.
          </div>

          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
            <a href="#" className="hover:text-blue-400">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
