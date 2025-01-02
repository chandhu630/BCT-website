import React from 'react';
import './Agriculture.css';
import { 
  FaSeedling, 
  FaFlask, 
  FaUsers, 
  FaChalkboardTeacher,
  FaMicroscope,
  FaHandHoldingMedical,
  FaGraduationCap,
  FaHandshake,
  FaHorse
} from 'react-icons/fa';

const Agriculture = () => {
  const methods = [
    {
      icon: <FaFlask />,
      title: "On Farm Trials",
      description: "Regular field trials with scientific analysis and farmer support",
      color: "#22c55e"
    },
    {
      icon: <FaUsers />,
      title: "Frontline Demonstrations",
      description: "Cluster demonstrations across village-clusters and tribal areas",
      color: "#15803d"
    },
    {
      icon: <FaMicroscope />,
      title: "Technology Assessments",
      description: "Introduction of modern tools and technologies to reduce work drudgery",
      color: "#166534"
    },
    {
      icon: <FaHandHoldingMedical />,
      title: "Disease Management",
      description: "Crop disease prevention, protection and treatment guidance",
      color: "#14532d"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Training Programs",
      description: "Regular training on seed treatment, disease management and cultivation",
      color: "#15803d"
    },
    {
      icon: <FaHandshake />,
      title: "Reach Out",
      description: "Connecting farmers with government initiatives and opportunities",
      color: "#22c55e"
    },
    {
      icon: <FaHorse />,
      title: "Animal Husbandry",
      description: "Veterinary support and livestock management training",
      color: "#166534"
    }
  ];

  return (
    <div className="agriculture-container">
      {/* Hero Section */}
      <div className="kvk-hero">
        <div className="hero-content">
          <div className="hero-badge">Est. 1995</div>
          <h1>
            <FaSeedling className="title-icon" />
            Krishi Vigyan Kendra
          </h1>
          <p>Enhancing agricultural outcomes for farmers since 1995</p>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <h3>45,000+</h3>
            <p>Farmers Reached Annually</p>
          </div>
        </div>
      </div>

      {/* Image Showcase */}
      <div className="image-showcase">
        <div className="showcase-left">
          <img src="/imgs/RHS.png" alt="Farm demonstration" className="large-img" />
        </div>
        <div className="showcase-right">
          <img src="/imgs/kvk.jpeg" alt="Training session" />
          <img src="/imgs/field.png" alt="Laboratory work" />
          <img src="/imgs/boat.png" alt="Field visit" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-kvk">
        <h2>About BCT KVK</h2>
        <p>
          The BCT KVK operates through various demonstration units, model farms, and conducts 
          regular training and awareness campaigns. Our campus at Haripuram features a 
          state-of-the-art laboratory and model farms where scientists work directly with 
          farmers to improve yields and farming practices.
        </p>
      </div>

      {/* Methods Grid */}
      <div className="methods-section">
        <h2>Our Methods</h2>
        <div className="methods-grid">
          {methods.map((method, index) => (
            <div className="method-card" key={index} 
                 style={{'--card-color': method.color}}>
              <div className="method-icon">
                {method.icon}
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Visit Our Center</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>BCT Krishi Vigyan Kendra</h3>
            <p>Haripuram Campus</p>
            <p>Contact: +91 XXXXXXXXXX</p>
            <button className="contact-btn">Get Directions</button>
          </div>
          <div className="contact-image">
            <img src="/imgs/boys.png" alt="KVK Building" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Agriculture;