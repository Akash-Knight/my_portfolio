import React from 'react';
import { Github, Globe } from 'lucide-react';

const RenderProjectCard = (item, index) => (
  <div
    key={index}
    className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer group hover:scale-105"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Overlay for better text visibility */}
    <div className="bg-black/40 w-full h-full flex flex-col justify-end p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
      
      {/* Title + Tech */}
      <div className="mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">
          {item.title}
        </h3>
        <p className="text-sm text-gray-200">{item.tech}</p>
      </div>

      {/* Links */}
      <div className="flex space-x-4">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Github className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>

        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </div>
  </div>
);

export default RenderProjectCard;
