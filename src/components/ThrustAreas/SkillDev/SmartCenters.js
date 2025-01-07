import React from 'react';
import './SmartCenters.css';

const SmartCenters = () => {
  return (
    <div className="smart-programs">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <img src="/imgs/boys.png" alt="BCT TMF Logo" className="main-logo" />
          <h1>BCT TMF SMART Programs</h1>
          <h2>Empowering Youth Through Skills Development</h2>
        </div>
      </div>

      {/* Centers Overview */}
      <div className="centers-overview">
        <h2>SMART Centers</h2>
        <div className="centers-content">
          <div className="centers-text">
            <p>BCT partners with the Tech Mahindra Foundation, to run 3 SMART centers in Visakhapatnam. These centers focus on upskilling youth from economically weaker sections of the society.</p>
          </div>
          <img src="/imgs/group.png" alt="SMART Center" className="center-image" />
        </div>
      </div>

      {/* Origin Story */}
      <div className="origin-section">
        <div className="origin-content">
          <img src="/imgs/field.png" alt="Students Learning" className="origin-image" />
          <div className="origin-text">
            <h2>How it started?</h2>
            <p>When 33 villages got added to the Greater Visakhapatnam Municipal Corporation (GVMC), this peri-urban region was seen to be resource-rich with youth. However, it was seen that these young boys and girls lacked employable skills. BCT thus partnered with the Tech Mahindra Foundation to set up 3 SMART centers in the city.</p>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="program-details">
        <h2>What it does?</h2>
        <div className="details-content">
          <div className="details-text">
            <p>Started in 2014, the centers operate in areas of Dwarakanagar and Gajuwaka, where they focus on upskilling economically backward youth in the region. With employment-oriented learning focused upon, the BCT TMF SMART centers provide short term training programs to high school/ intermediate/ graduate students.</p>
          </div>
          <img src="/imgs/kvk.jpeg" alt="Training Session" className="details-image" />
        </div>
      </div>

      {/* Key Features */}
      <div className="key-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/imgs/tribalShool.png" alt="Technical Training" className="feature-image" />
            <div className="feature-content">
              <h3>Technical Training</h3>
              <ul>
                <li>IT and ICT tools training</li>
                <li>Customer Relations & Sales</li>
                <li>Technical skills at SMART-T center</li>
              </ul>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-content">
              <h3>Skill Development</h3>
              <ul>
                <li>Conversational English</li>
                <li>Interpersonal skills</li>
                <li>Entrepreneurial skills</li>
                <li>NSDC Level 3 skill training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default SmartCenters;