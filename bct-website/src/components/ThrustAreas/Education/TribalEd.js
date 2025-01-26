import React from 'react';
import './RhSchools.css';

function RhSchools() {
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

  return (
    <div style={{ marginTop: "60px" }} className="Rhapp">
      <header className="rhpage-header">
        <h1>Tribal Primary Education</h1>
        <p>
          Enhancing learning levels of primary level students in tribal regions, BCT collaborates with Sikshana Foundation,
          Bengaluru, Government of Andhra Pradesh, and Vibha Inc to bring the ‘Comprehensive Education Initiative’.
          Operational since 2019, the project has seen enhanced levels of learning, leadership, and participation among
          all the students.
        </p>
        <div className="page-header-buttons">
          <button className="button">Learn More</button>
          <button className="button button-outline">Contact Us</button>
        </div>
      </header>

      <main className="main-content">
        <section className="introduction-section">
          <h2>Target Segment</h2>
          <p>
            The project works with students in primary, upper primary, and high school levels. It operates in 11 mandals,
            targeting a total of 1,958 schools across 77 clusters.
          </p>
        </section>

        <section className="features-sectionRhs">
          <div className="feature-cardRhs academic-featureRhs">
            <div className="iconRhs">📘</div>
            <h3>How It Works?</h3>
            <p>
            The initiative employs 11 mentors and 1 coordinator to implement and monitor progress, with training provided at the BCT campus. Resources in Telugu, achievement stars, regular visits, and app-based monitoring ensure effective mentorship and learning.            </p>
            
          </div>

          <div className="feature-card educational-featureRhs">
            <div className="iconRhs">📚</div>
            <h3>Learning Resources</h3>
            <p>
              Schools receive books, posters, and manuals in Telugu to enhance the learning process. Peer leaders
              are chosen to encourage collaborative and peer-to-peer learning approaches.
            </p>
          </div>

          <div className="feature-card infrastructure-featureRhs">
            <div className="iconRhs">📊</div>
            <h3>Monitoring & Evaluation</h3>
            <p>
              Regular school visits are conducted by mentors, and an app-based monitoring and reporting system is
              employed to collect and analyze data effectively.
            </p>
          </div>
        </section>

        <section className="Rhsacademic-excellence-section">
          <h2>Academic Excellence</h2>
          <p>
            We believe in providing the best possible education to all our students. The BCT Tribal Primary Education
            Initiative focuses on comprehensive learning that addresses the unique educational needs of rural and tribal
            areas.
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
      </main>
    </div>
  );
}

export default RhSchools;
