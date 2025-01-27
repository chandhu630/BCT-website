import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  EducationIcon, 
  SkillsIcon, 
  RehabilitationIcon,
  AgricultureIcon, 
  CommunityIcon,
  Health,
} from '../Remaning/icons';
import './program.css';

const Program = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(null);

  const features = [
    {
      id: 1,
      icon: <EducationIcon />,
      title: "Education",
      description: "Quality education, learning opportunities for all.",
      borderColor: "#8A2BE2",
      hasSubOptions: true,
      subOptions: [
        {
          title: "RHS",
          path: "/trust-areas/education/rhs",
          description: "Residential High Schools"
        },
        {
          title: "Tribal Education",
          path: "/trust-areas/education/tribalEd",
          description: "Tribal Education Programs"
        }
      ]
    },
    {
      id: 2,
      icon: <SkillsIcon />,
      title: "Skill Development",
      description: "Practical skills training for career advancement.",
      borderColor: "#8A2BE2",
      hasSubOptions: true,
      subOptions: [
        {
          title: "SMART Centers",
          path: "/trust-areas/skill-dev/Iti",
          description: "Skill Development Centers"
        },
        {
          title: "Vocational Training",
          path: "/trust-areas/skill-dev/smart-centers",
          description: "Vocational Training Programs"
        }
      ]
    },
    {
      id: 3,
      icon: <RehabilitationIcon />,
      title: "Rehabilitation of PWDs",
      description: "Support and services for persons with disabilities.",
      borderColor: "#8A2BE2",
      path: "/trust-areas/pwds"
    },
    {
      id: 4,
      icon: <AgricultureIcon />,
      title: "Agriculture",
      description: "Sustainable farming practices and agricultural development.",
      borderColor: "#8A2BE2",
      path: "/trust-areas/agri"
    },
    {
      id: 5,
      icon: <CommunityIcon />,
      title: "Community Development",
      description: "Building stronger communities through collective action.",
      borderColor: "#8A2BE2",
      path: "/trust-areas/community"
    },
    {
      id: 6,
      icon: <Health />,
      title: "Health",
      description: "Health camps, awareness support and community well-being.",
      borderColor: "#8A2BE2",
      path: "/trust-areas/health"
    }
  ];

  const handleProgramClick = (feature) => {
    if (feature.hasSubOptions) {
      setSelectedProgram(feature.id === selectedProgram?.id ? null : feature);
    } else {
      navigate(feature.path);
    }
  };

  const handleSubOptionClick = (e, path) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedProgram(null);
    navigate(path);
  };

  return (
    <div className="features-container">
      <div className="features-grids">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-cards"
            style={{ borderColor: feature.borderColor, cursor: 'pointer' }}
            onClick={() => handleProgramClick(feature)}
          >
            <div className="feature-icons" style={{ color: feature.borderColor }}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            
            {/* Show bubbles within the card */}
            {selectedProgram?.id === feature.id && (
              <div className="bubble-popup-overlay">
                <div className="bubble-options">
                  {feature.subOptions.map((option, idx) => (
                    <div
                      key={idx}
                      className="bubble-option"
                      onClick={(e) => handleSubOptionClick(e, option.path)}
                    >
                      <h4>{option.title}</h4>
                      <p>{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;