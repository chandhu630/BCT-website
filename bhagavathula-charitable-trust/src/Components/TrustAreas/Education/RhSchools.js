import React from 'react';
import './RhSchools.css';
import Footer from '../../Footer';

function RhSchools() {
    const data = [
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
    <div className="app">
        <header className="header">
            <h1>BCT Residential Model High School</h1>
            <p>Empowering Rural India through Value-based Education since 1995</p>
            <div className="header-buttons">
            <button className="btn">Learn More</button>
            <button className="btn btn-outline">Contact Us</button>
            </div>
        </header>

        <main className="main-content">
            <section className="intro">
            <h2>Empowering Rural Education Since 1995</h2>
            <p>
                Rural India needs an education system that specifically answers its needs and fills its shortcomings.<br/>
                Established in 1995, the BCT Residential Model High School answers those needs through its<br/>
                government-recognized value-based, skill-oriented rurally-biased approach.<br/>
            </p>
            </section>

            <section className="features">
            <div className="feature Acad">
                <div className="icon">📘</div>
                <h3>Academics</h3>
                <p>State-approved curriculum with progressive teaching methods and multimedia learning.</p>
            </div>

            <div className="feature edu">
                <div className="icon">📋</div>
                <h3>Skill Education</h3>
                <p>Comprehensive vocational training including agriculture, crafts, and technical skills.</p>
            </div>

            <div className="feature ani">
                <div className="icon">👥</div>
                <h3>Social Animation</h3>
                <p>Community engagement through cultural activities and social awareness programs.</p>
            </div>

            <div className="feature infra">
                <div className="icon">🏢</div>
                <h3>Infrastructure</h3>
                <p>Modern facilities including hostels, laboratories, and recreational spaces.</p>
            </div>
            <button className='downBtn'><span>Learn more about our programs</span> &#8964;</button>
            </section>
            
            <div className="academic-excellence Academics">
      <h2>Academic Excellence</h2>
      <p>
        Our comprehensive academic program follows state syllabus while incorporating modern
        teaching methodologies to ensure holistic development of students.
      </p>
      <div className="card-containers">
        {data.map((item, index) => (
          <div key={index} className="cards">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

                <div className="skills-training">
      <section className="core-skills">
        <h2>Core Skills</h2>
        <div className="skills-container">
          {coreSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="optional-skills">
        <h2>Optional Skills Training</h2>
        <div className="skills-container">
          {optionalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <button className="cta-button">Explore Our Social Activities</button>
    </div>

    {/* <div className="school-activities">
      <header className="activities-header">
        <h1>School Life & Activities</h1>
        <p>
          Exploring the vibrant campus life and diverse activities that shape our
          students' experiences
        </p>
      </header>

      <section className="activity-section">
        <div className="activity-card">
          <div className="activity-content">
            <div className="icon">✨</div>
            <h2>Sankranti Celebrations</h2>
            <p>
              On January 7, 2022, students and staff celebrated Sankranti with a
              vibrant rangoli competition. The school grounds came alive with
              colorful muggulu patterns, accompanied by rhythmic drum
              performances.
            </p>
            <p className="judged-by">
              Judged by BCT Central Coordinator Sri Sitaramaraju and School
              Principal Mrs. SK Renuka
            </p>
          </div>
          <div className="activity-image">
            <img src='/images/RHS.png' alt='Image' className='image'/>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-image">
            <img src='/images/kvk.jpeg' alt='Image' className='image'/>
          </div>
          <div className="activity-content">
            <div className="icon">✨</div>
            <h2>Career Guidance Program</h2>
            <p>
            Career Guidance Program
            Special sessions conducted by teachers Mr. Srinivas & Mr. Prudhivi for classes 9 and 10, providing insights into future educational opportunities.
            </p>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-content">
            <div className="icon">✨</div>
            <h2>Health Check-up Camp
            </h2>
            <p>
            Comprehensive medical camp conducted on February 14-15, including blood group and hemoglobin tests for students from classes VI to IX.
            </p>
            <p className="judged-by">
              Judged by BCT Central Coordinator Sri Sitaramaraju and School
              Principal Mrs. SK Renuka
            </p>
          </div>
          <div className="activity-image">
            <img src='/images/RHS.png' alt='Image' className='image'/>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-image">
            <img src='/images/kvk.jpeg' alt='Image' className='image'/>
          </div>
          <div className="activity-content">
            <div className="icon">✨</div>
            <h2>School Picnic 2022</h2>
            <p>
            After a 2-year gap due to Covid, students visited Visakhapatnam zoo and Tenneti park. The trip was made extra special by coinciding with the Navy day parade, offering views of ships and aerial displays.  </p>
          </div>
        </div>
      </section>
    </div> */}
        </main>
        <Footer/>
    </div>
     );
    }
    
    export default RhSchools;