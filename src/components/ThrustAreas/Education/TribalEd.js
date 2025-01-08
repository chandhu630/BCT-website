import React from 'react';
import './TribalEd.css';

function TribalEd() {
  const academicData = [
    {
      icon: "📘",
      title: "State-Approved Curriculum",
      description:
        "Following government regulations and state syllabus while maintaining high academic standards.",
    },
    {
      icon: "💡",
      title: "Progressive Methods",
      description:
        "Implementation of multimedia and modern teaching techniques for enhanced learning experience.",
    },
    {
      icon: "🏢",
      title: "Subject-Specific Centers",
      description:
        "Dedicated learning centers with comprehensive reference materials for each subject.",
    },
    {
      icon: "💻",
      title: "Computer Skills",
      description:
        "Comprehensive computer education including MS Office, HTML, and hardware basics.",
    },
    {
      icon: "📊",
      title: "Regular Evaluation",
      description:
        "Continuous assessment and focused attention on students needing additional support.",
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description:
        "Easy access to study materials and resources at each learning center.",
    },
  ];

  const coreSkills = [
    {
      icon: "🧵",
      title: "Charkha Spinning",
      description:
        "Mandatory skill training in traditional spinning wheel operation, promoting self-reliance and cultural heritage.",
    },
    {
      icon: "🌾",
      title: "Agriculture/Horticulture",
      description:
        "Essential training in farming techniques and plant cultivation.",
    },
  ];

  const optionalSkills = [
    {
      icon: "✂️",
      title: "Tailoring",
      description:
        "Learn professional garment making and clothing repair skills.",
    },
    {
      icon: "➕",
      title: "Embroidery",
      description:
        "Master the art of decorative needlework and textile embellishment.",
    },
    {
      icon: "⚡",
      title: "Electrical Skills",
      description:
        "Basic electrical maintenance and repair training for practical applications.",
    },
  ];

  return (
    <div style={{marginTop:"60px"}}  className="Rhapp">
      <header className="rhpage-header">
        <h1>BCT Residential Model High School</h1>
        <p>Empowering Rural India through Value-based Education since 1995</p>
        <div className="page-header-buttons">
          <button className="button">Learn More</button>
          <button className="button button-outline">Contact Us</button>
        </div>
      </header>

      <main className="main-content">
        <section className="introduction-section">
          <h2>Empowering Rural Education Since 1995</h2>
          <p>
            Rural India needs an education system that specifically answers its needs and fills its shortcomings.<br />
            Established in 1995, the BCT Residential Model High School answers those needs through its<br />
            government-recognized value-based, skill-oriented rurally-biased approach.<br />
          </p>
        </section>

        <section className="features-sectionRhs">
          <div className="feature-cardRhs academic-featureRhs">
            <div className="iconRhs">📘</div>
            <h3>Academics</h3>
            <p>State-approved curriculum with progressive teaching methods and multimedia learning.</p>
          </div>

          <div className="feature-card educational-featureRhs">
            <div className="iconRhs">📋</div>
            <h3>Skill Education</h3>
            <p>Comprehensive vocational training including agriculture, crafts, and technical skills.</p>
          </div>

          <div className="feature-card social-featureRhs">
            <div className="iconRhs">👥</div>
            <h3>Social Animation</h3>
            <p>Community engagement through cultural activities and social awareness programs.</p>
          </div>

          <div className="feature-card infrastructure-featureRhs">
            <div className="iconRhs">🏢</div>
            <h3>Infrastructure</h3>
            <p>Fully equipped centers for learning and hands-on training, built to support student growth.</p>
          </div>
        </section>

        <section className="Rhsacademic-excellence-section">
          <h2>Academic Excellence</h2>
          <p>
            We believe in providing the best possible education to all our students. The BCT Residential Model High School
            focuses on comprehensive learning that meets the educational needs of rural areas.
          </p>

          <div className="card-containersRhs">
            {academicData.map((item, index) => (
              <div className="info-cardRhs" key={index}>
                <div className="iconRhs">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-training-section">
          <h2>Core Skills</h2>
          <div className="skills-container">
            {coreSkills.map((item, index) => (
              <div className="skill-card" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <h2>Optional Skills</h2>
          <div className="skills-container">
            {optionalSkills.map((item, index) => (
              <div className="skill-card" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <button className="ETcta-button">Contact Us Now</button> */}
      </main>
    </div>
  );
}

export default TribalEd;
