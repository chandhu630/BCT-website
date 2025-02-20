import React from "react";
import "./TribalEd.css";

const TribalEd = () => {
  return (
    <div className="tribals-education">
      <div className="tribals-education__banner">
        <div className="tribals-education__overlay">
          <header className="tribals-education__header">
            {/* <div className="tribals-education__logo-container">
              <span className="tribals-education__logo-icon">🌾</span> 
              <span className="tribals-education__student-icon">👩‍🎓</span> 
            </div> */}
            <h1 className="tribals-education__title">
              Tribal Primary Education
            </h1>
          </header>
        </div>
      </div>

      <section className="tribals-education__overview">
        <div className="tribals-education__overview-content">
          {/* <span className="tribals-education__overview-icon">👥</span> Emoji for Users */}
          <p className="tribals-education__description">
            Enhancing learning levels of primary level students in tribal regions, BCT collaborates 
            with Sikshana Foundation, Bengaluru, Government of Andhra Pradesh and Vibha Inc to 
            bring the 'Comprehensive Education Initiative'. Operational since 2019, the project 
            has seen enhanced levels of learning, leadership and participation among all the students.
          </p>
        </div>
      </section>

      <section className="tribals-education__target">
        <h2 className="tribals-education__section-title">
          📊 {/* Emoji for Chart */}
          Target Segment
        </h2>
        <div className="tribals-education__stats">
          <div className="tribals-education__stat-item">
            <span className="tribals-education__stat-icon">🏫</span> {/* Emoji for School */}
            <span className="tribals-education__stat-number">1958</span>
            <span className="tribals-education__stat-label">Schools</span>
          </div>
          <div className="tribals-education__stat-item">
            <span className="tribals-education__stat-icon">👥</span> {/* Emoji for Friends */}
            <span className="tribals-education__stat-number">77</span>
            <span className="tribals-education__stat-label">Clusters</span>
          </div>
          <div className="tribals-education__stat-item">
            <span className="tribals-education__stat-icon">⭐</span> {/* Emoji for Star */}
            <span className="tribals-education__stat-number">11</span>
            <span className="tribals-education__stat-label">Mandals</span>
          </div>
        </div>
      </section>

      <section className="tribals-education__process">
        <h2 className="tribals-education__section-title">
          🔍 {/* Emoji for Search */}
          How It Works?
        </h2>
        <div className="tribals-education__cards">
          <div className="tribals-education__card">
            <div className="tribals-education__card-header">
              <span className="tribals-education__card-icon">👩‍🏫</span> {/* Emoji for Teacher */}
            </div>
            <h3 className="tribals-education__card-title">Mentorship Program</h3>
            <p className="tribals-education__card-text">
              11 mentors and 1 project coordinator implement and monitor the project. 
              Mentors receive training at BCT campus and interact with headmasters and teachers.
            </p>
          </div>

          <div className="tribals-education__card">
            <div className="tribals-education__card-header">
              <span className="tribals-education__card-icon">📚</span> {/* Emoji for Book */}
            </div>
            <h3 className="tribals-education__card-title">Learning Resources</h3>
            <p className="tribals-education__card-text">
              Books, posters, and manuals are provided in Telugu. Star system indicates 
              student accomplishments. Clubs and peer-to-peer learning are encouraged.
            </p>
          </div>

          <div className="tribals-education__card">
            <div className="tribals-education__card-header">
              <span className="tribals-education__card-icon">📱</span> {/* Emoji for Mobile */}
            </div>
            <h3 className="tribals-education__card-title">Monitoring & Reporting</h3>
            <p className="tribals-education__card-text">
              App-based monitoring and reporting system to collect and analyse data. 
              Regular school visits conducted by mentors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TribalEd;
