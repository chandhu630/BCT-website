import React from 'react';
import './ITI.css';
import Footer from '../../Footer';
import { 
  FaTools, 
  FaIndustry, 
  FaUserGraduate, 
  FaWrench,
  FaHandsHelping,
  FaLanguage
} from 'react-icons/fa';

const ITI = () => {
  const trainingFeatures = [
    {
      icon: <FaTools />,
      title: "Hands-on Projects",
      description: "Application knowledge through practical projects and workshops"
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Exposure",
      description: "Regular exposure visits and industrial training sessions"
    },
    {
      icon: <FaWrench />,
      title: "Technical Skills",
      description: "Understanding of job tools, framework techniques, and machinery"
    },
    {
      icon: <FaLanguage />,
      title: "Soft Skills",
      description: "Enhanced communication through spoken English classes"
    },
    {
      icon: <FaUserGraduate />,
      title: "Expert Training",
      description: "Practical sessions in laboratories under experienced trainers"
    },
    {
      icon: <FaHandsHelping />,
      title: "Support Services",
      description: "Aids and appliances for comprehensive learning"
    }
  ];

  return (
    <div className="iti-container">
      {/* Hero Section */}
      <div className="iti-hero">
        <div className="hero-content">
          <h1>Industrial Training Institute</h1>
          <div className="established-badge">Est. 2012</div>
          <p className="hero-description">
            An extension of BCT's rural youth empowerment initiative, training 100 students 
            annually in Electrician and Fitter skills under the CTS scheme of NCVT.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Students per Year</p>
          </div>
          <div className="stat-item">
            <h3>2</h3>
            <p>Trade Programs</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        <img src="/images/RHS.png" alt="ITI Training" className="gallery-img" />
        <img src="/images/group.png" alt="Workshop" className="gallery-img" />
        <img src="/images/field.png" alt="Students" className="gallery-img" />
        <img src="/images/boys.png" alt="Facilities" className="gallery-img" />
      </div>

      {/* Training Features */}
      <div className="training-features">
        <h2>Training Programs</h2>
        <div className="features-grid">
          {trainingFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Programs */}
      <div className="trade-programs">
        <h2>Our Trade Programs</h2>
        <div className="trade-cards">
          <div className="trade-card electrician">
            <FaTools className="trade-icon" />
            <h3>Electrician</h3>
            <p>Comprehensive electrical training with modern equipment and practical exposure</p>
          </div>
          <div className="trade-card fitter">
            <FaWrench className="trade-icon" />
            <h3>Fitter</h3>
            <p>Advanced fitting techniques with hands-on workshop experience</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ITI;