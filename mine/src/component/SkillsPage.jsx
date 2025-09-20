import React from 'react';
import { Laptop, Server, Wrench } from 'lucide-react';

const SkillsPage = ({ isDarkMode, textColor, textColorTwo, bgColorPrimary, cardBackground }) => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: <Laptop className="text-blue-500 w-6 h-6" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: 'Backend',
      icon: <Server className="text-green-500 w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      category: 'Database & Tools',
      icon: <Wrench className="text-purple-500 w-6 h-6" />,
      skills: ['MongoDB', 'Git & GitHub', 'VS Code'],
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: bgColorPrimary }}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center pt-10" style={{ color: textColor }}>
          My Skills
        </h1>


        {/* <h2 className="text-4xl font-bold text-center mb-12">Web Development</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              style={{ backgroundColor: cardBackground, color: textColor }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.category}</h3>
              </div>
              <ul className="list-disc ml-6 space-y-1 text-sm" style={{ color: textColorTwo }}>
                {item.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
