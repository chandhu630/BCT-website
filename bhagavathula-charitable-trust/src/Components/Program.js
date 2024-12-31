import React from 'react';
import { 
  EducationIcon, 
  SkillsIcon, 
  RehabilitationIcon, 
  AgricultureIcon, 
  CommunityIcon 
} from './Icons';
import './Program.css';

const Program = () => {
  const features = [
    {
      icon: <EducationIcon />,
      title: "Education",
      description: "Quality education and learning opportunities for all.",
      borderColor: "#4169E1"
    },
    {
      icon: <SkillsIcon />,
      title: "Skills Development",
      description: "Practical skills training for career advancement.",
      borderColor: "#32CD32"
    },
    {
      icon: <RehabilitationIcon />,
      title: "Rehabilitation of PWDs",
      description: "Support and services for persons with disabilities.",
      borderColor: "#8A2BE2"
    },
    {
      icon: <AgricultureIcon />,
      title: "Agriculture",
      description: "Sustainable farming practices and agricultural development.",
      borderColor: "#228B22"
    },
    {
      icon: <CommunityIcon />,
      title: "Community Organization",
      description: "Building stronger communities through collective action.",
      borderColor: "#FF8C00"
    }
  ];

  return (
    <div className="features-container">
      <div className="features-grids">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-cards"
            style={{ borderColor: feature.borderColor }}
          >
            <div className="feature-icons" style={{ color: feature.borderColor }}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;