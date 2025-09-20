import React from 'react';
import renderProjectCard from './RenderProjectCard'; 
import projectOne from "../assets/tic-tac-toe.png";
import projectTwo from "../assets/Vitalease.png";
import projectThree from "../assets/gusssthegame.png";
import school from "../assets/school.png";
import twoDgames from "../assets/2Dgames.png";
import websiteBuilder from "../assets/websiteBuilder.png";

const ProjectsPage = () => {
  const projectsData = [
    { title: '🎮 Tic Tac Toe', tech: 'React', github: 'https://github.com/Akash-Knight/-Tic-Tac-Toe', live: 'https://jocular-smakager-a221f5.netlify.app/' , bg:projectOne},
    { title: 'Project Two', tech: 'React, Redux, SASS', github: '#', live: '#', bg:projectTwo },
    { title: 'Project Three', tech: 'React, Redux, SASS', github: '#', live: '#',bg:projectThree },
    { title: 'Project Four', tech: 'React, Redux, SASS', github: '#', live: '#',bg:school},
    { title: 'Project Five', tech: 'React, Redux, SASS', github: '#', live: '#',bg:twoDgames },
    { title: 'Project Six', tech: 'React, Redux, SASS', github: '#', live: '#' ,bg:websiteBuilder},
  ];

  return (
    <div className="pt-16 sm:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
          My Projects
        </h2>

        {/* Responsive grid with spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => 
            renderProjectCard(project, index)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
