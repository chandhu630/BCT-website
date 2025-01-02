import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div className="community-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Community Organisation</h1>
          <div className="hero-image">
            {/* Replace with your main image */}
            <img src="/imgs/RHS.png" alt="Community" />
          </div>
          <div className="hero-text">
            <p style={{color:"black"}}>
              The catalyst for the growth and sustenance of a village needs to be internal, 
              rather than external. BCT works towards rural self-sustenance by making its 
              people partners in growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stat-item">
          <span className="stat-number">137</span>
          <span className="stat-label">Villages</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">130K+</span>
          <span className="stat-label">People Impacted</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">6</span>
          <span className="stat-label">Years of Impact</span>
        </div>
      </div>

      {/* Initiatives Section */}
      <section className="initiatives">
        <div className="initiative-left">
          <div className="initiative-card primary">
            <h2>Farmer's Field Schools</h2>
            <img src="/imgs/kvk.jpeg" alt="Farmers Field School" />
            <p>
              Started in May 2019 with five villages, FFS taps into scientific approach, 
              enabling local solutions for local problems.
            </p>
          </div>
        </div>

        <div className="initiative-right">
          <div className="initiative-card secondary">
            <h2>Health Screening</h2>
            <p>
              Regular health camps including eye screening, orthopaedic camps, 
              and covid screening are conducted throughout the year.
            </p>
          </div>
          <div className="initiative-card secondary">
            <h2>Women Empowerment</h2>
            <p>
              Programs focus on skill enhancement and opportunities for women, 
              promoting kitchen gardens and skill training.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          <div className="program-item">
            <div className="program-icon">🌾</div>
            <h3>Farmers Clubs</h3>
            <p>Monthly meetings for discussions and knowledge sharing</p>
          </div>
          <div className="program-item">
            <div className="program-icon">💪</div>
            <h3>Skill Training</h3>
            <p>Vocational training and education support</p>
          </div>
          <div className="program-item">
            <div className="program-icon">🏥</div>
            <h3>Health Camps</h3>
            <p>Regular medical checkups and awareness programs</p>
          </div>
          <div className="program-item">
            <div className="program-icon">📚</div>
            <h3>Education</h3>
            <p>Scholarships and learning support</p>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Community;