import React from 'react';
import './TribalEd.css';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaBook, 
  FaStar, 
  FaMobileAlt 
} from 'react-icons/fa';

const TribalEd = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Mentorship Model",
      description: "11 mentors and 1 project coordinator implement the project with initial training at BCT campus"
    },
    {
      icon: <FaBook />,
      title: "Learning Resources",
      description: "Telugu books, posters, and manuals provided to schools for enhanced learning"
    },
    {
      icon: <FaStar />,
      title: "Star System",
      description: "Different colored stars awarded to schools based on student accomplishments"
    },
    {
      icon: <FaUsers />,
      title: "Peer Learning",
      description: "Formation of clubs and selection of peer leaders for collaborative learning"
    },
    {
      icon: <FaMobileAlt />,
      title: "Digital Monitoring",
      description: "App-based monitoring system for data collection and analysis"
    }
  ];

  return (
    <div className="tribal-education">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <FaGraduationCap className="title-icon" />
            Tribal Primary Education
          </h1>
          <p>
            Enhancing learning levels of primary level students in tribal regions through
            our Comprehensive Education Initiative, in collaboration with prestigious partners.
          </p>
        </div>
        <div className="hero-image">
          <img src="/imgs/boys.png" alt="Tribal Education" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <h3>1958</h3>
          <p>Schools</p>
        </div>
        <div className="stat-card">
          <h3>77</h3>
          <p>Clusters</p>
        </div>
        <div className="stat-card">
          <h3>11</h3>
          <p>Mandals</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          <img src="/imgs/RHS.png" alt="Sikshana Foundation" />
          <img src="/imgs/tribalShool.png" alt="Government of AP" />
          <img src="/imgs/boys.png" alt="Vibha Inc" />
        </div>
      </div>
    
    </div>
  );
};

export default TribalEd;