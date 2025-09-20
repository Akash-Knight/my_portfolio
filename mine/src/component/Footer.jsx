import React from 'react';
// import facebookIcon from "../assets/facebook-icon.svg"
// import twitterIcon from "../assets/twitter-icon.svg"
import githubIcon from "../assets/github-icon.svg"
// import HashnodeIcon from "../assets/Hashnode-icon.svg"
import linkedinIcon from "../assets/linkedin-icon.svg"

const Footer = ({ bgSecondaryTwo, textColorTwo }) => {
  return (
    <footer id="footer" className="py-12 text-center text-sm" style={{ backgroundColor: bgSecondaryTwo, color: textColorTwo }}>
      <div className="container mx-auto px-6">
        <a href="mailto:creators1885@gmail.com" className="text-blue-400 hover:underline text-lg mb-4 block">creators1885mail.com</a>
        <div className="social flex justify-center space-x-6 mb-6">
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
            
          </a> */}
          <a href="https://www.linkedin.com/in/akash-kumar-297a5928a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8" />
          </a>
          <a href="https://github.com/Akash-Knight" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <img src={HashnodeIcon} alt="Hashnode" className="w-8 h-8" />
          </a> */}
        </div>
        <p>Copyright &copy;Akash-Knight{new Date().getFullYear()}, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;