import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaBuilding, FaBus, FaPalette, FaStethoscope, FaLightbulb, FaBook, FaDesktop, FaUtensils } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RhSchools.css";

const RhSchools = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="rhs-main-container">
      {/* Banner Section */}
      <div className="rhs-banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/rhsbuilding.png)` }}>
        <div className="banner-overlay">
          <h1>Residential Hign School</h1>
          <div className="banner-content">
            <p>
              Rural India needs an education system that specifically answers its needs and fills its shortcomings. 
              Established in 1995, the BCT Residential Model High School answers those needs through its 
              government-recognized value-based, skill-oriented rurally-biased approach.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="photo-strip">
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + "/imgs/rangoli.jpeg"} alt="Sankranti celebrations" />
          <div className="photo-overlay">
            <h3>Sankranti on campus</h3>
          </div>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + "/imgs/picnic.png"} alt="School picnic" />
          <div className="photo-overlay">
            <h3>Picnic time for school students</h3>
          </div>
        </div>
        <div className="photo-item">
          <img src={process.env.PUBLIC_URL + "/imgs/parentsmeeting.png"} alt="Parents meeting" />
          <div className="photo-overlay">
            <h3>Meeting the parents</h3>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="core-features">
        <motion.div 
          className="feature-box academics"
          whileHover={{ y: -10 }}
          data-aos="fade-up"
        >
          <FaGraduationCap className="feature-icon" />
          <h2>Academics</h2>
          <ul>
            <li>State syllabus curriculum</li>
            <li>Multimedia learning methods</li>
            <li>Regular evaluation system</li>
            <li>Subject-specific centers</li>
            <li>Advanced computer training</li>
          </ul>
        </motion.div>

        <motion.div 
          className="feature-box skills"
          whileHover={{ y: -10 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaTools className="feature-icon" />
          <h2>Skill Education</h2>
          <div className="skills-grid">
            <div>
              <h3>Mandatory</h3>
              <ul>
                <li>Charkha spinning</li>
                <li>Agriculture/Horticulture</li>
              </ul>
            </div>
            <div>
              <h3>Optional</h3>
              <ul>
                <li>Tailoring</li>
                <li>Embroidery</li>
                <li>Electrical skills</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="feature-box social"
          whileHover={{ y: -10 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaLightbulb className="feature-icon" />
          <h2>Social Animation</h2>
          <ul>
            <li>Village interaction programs</li>
            <li>Folk dance training</li>
            <li>Street play performances</li>
            <li>Cultural events participation</li>
          </ul>
        </motion.div>
      </div>

      {/* Infrastructure Section */}
      <div className="infrastructure-section">
        <h2><FaBuilding /> Infrastructure</h2>
        <div className="infra-grid">
          <motion.div className="infra-card" whileHover={{ scale: 1.05 }}>
            <FaBuilding className="infra-icon" />
            <h3>Hostel</h3>
            <p>Separate facilities for boys and girls with bunk beds and study tables</p>
          </motion.div>
          <motion.div className="infra-card" whileHover={{ scale: 1.05 }}>
            <FaBook className="infra-icon" />
            <h3>Library</h3>
            <p>4000+ books in Telugu, English, and Hindi languages</p>
          </motion.div>
          <motion.div className="infra-card" whileHover={{ scale: 1.05 }}>
            <FaDesktop className="infra-icon" />
            <h3>Computer Lab</h3>
            <p>Modern lab for computer education and skill development</p>
          </motion.div>
          <motion.div className="infra-card" whileHover={{ scale: 1.05 }}>
            <FaUtensils className="infra-icon" />
            <h3>Mess</h3>
            <p>Large mess with fresh food and balanced weekly menu</p>
          </motion.div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="events-section">
        <h2>Recent Events</h2>
        <div className="events-timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <FaBus className="timeline-icon" />
              <h3>School Picnic</h3>
              <p className="date">February 2022</p>
              <p>Visit to Visakhapatnam zoo and Navy Day Parade</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <FaPalette className="timeline-icon" />
              <h3>Sankranti Celebrations</h3>
              <p className="date">January 2022</p>
              <p>Rangoli competition with expert judging</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <FaLightbulb className="timeline-icon" />
              <h3>Career Guidance</h3>
              <p>Program for classes 9 and 10</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <FaStethoscope className="timeline-icon" />
              <h3>Medical Camp</h3>
              <p className="date">February 14-15</p>
              <p>Health check and blood group testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhSchools;
