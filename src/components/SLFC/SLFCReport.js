import React from 'react';
import './SLFCReport.css';
import { 
  FaLeaf, FaWheelchair, FaUsers, 
  FaHandHoldingHeart, FaSeedling,
  FaChartLine, FaMapMarkedAlt 
} from 'react-icons/fa';

const SLFCReport = () => {
  return (
    <div className="slfc-wrapper">
      <div className="slfc-banner">
        <div className="banner-content">
          <h1>SLFC Program</h1>
          <p>Sustainable Livelihoods for Farmers and the Challenged</p>
        </div>
      </div>

      <div className="slfc-container">
        <div className="key-metrics">
          <div className="metric">
            <span className="metric-value">70+</span>
            <span className="metric-label">Villages</span>
          </div>
          <div className="metric">
            <span className="metric-value">5000+</span>
            <span className="metric-label">Beneficiaries</span>
          </div>
          <div className="metric">
            <span className="metric-value">₹57.4Cr</span>
            <span className="metric-label">Budget</span>
          </div>
        </div>

        <section className="mission-block">
          <div className="mission-content">
            <FaHandHoldingHeart className="section-icon" />
            <h2>Our Mission</h2>
            <p>Empowering rural communities through sustainable agriculture and comprehensive support for the challenged.</p>
          </div>
        </section>

        <section className="programs-block">
          <h2>Core Programs</h2>
          <div className="program-grid">
            <div className="program-item">
              <FaSeedling className="program-icon" />
              <div className="program-content">
                <h3>Sustainable Agriculture</h3>
                <ul>
                  <li>Modern farming techniques</li>
                  <li>Crop diversification</li>
                  <li>Organic farming practices</li>
                </ul>
              </div>
            </div>

            <div className="program-item">
              <FaWheelchair className="program-icon" />
              <div className="program-content">
                <h3>PwD Support</h3>
                <ul>
                  <li>Assistive devices</li>
                  <li>Rehabilitation services</li>
                  <li>Skill development</li>
                </ul>
              </div>
            </div>

            <div className="program-item">
              <FaUsers className="program-icon" />
              <div className="program-content">
                <h3>Community Development</h3>
                <ul>
                  <li>Self-help groups</li>
                  <li>Government schemes</li>
                  <li>Village development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-block">
          <h2>Success Stories</h2>
          <div className="story-grid">
            <div className="story-item">
              <div className="story-image">
                <img src="/imgs/community1.jpeg" alt="Agricultural Success" />
              </div>
              <div className="story-content">
                <span className="story-tag">Agriculture</span>
                <h3>Agricultural Success</h3>
                <p className="story-location">
                  <FaMapMarkedAlt /> Ugginapalem Village
                </p>
                <p>Increased yield by 300% through modern techniques</p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-image">
                <img src="/imgs/community2.jpeg" alt="Life Transformed" />
              </div>
              <div className="story-content">
                <span className="story-tag">Rehabilitation</span>
                <h3>Life Transformed</h3>
                <p className="story-location">
                  <FaMapMarkedAlt /> Kuneti Village
                </p>
                <p>Rehabilitation success through dedicated support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-block">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">776</div>
              <div className="stat-label">Farmers Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">429</div>
              <div className="stat-label">PwDs Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3,980</div>
              <div className="stat-label">Beneficiaries</div>
            </div>
          </div>
        </section>

        <section className="future-block">
          <div className="future-content">
            <FaChartLine className="section-icon" />
            <h2>Vision 2025</h2>
            <p>Expanding to 100+ villages with enhanced support systems</p>
          </div>
        </section>

        <section className="action-block">
          <h2>Be Part of the Change</h2>
          <div className="action-buttons">
            <button className="btn-primary">Support Us</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SLFCReport;
