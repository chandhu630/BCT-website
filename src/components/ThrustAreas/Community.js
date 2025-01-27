import React, { useEffect } from "react";
import "./Community.css";

const Community = () => {
  useEffect(() => {
    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll(".stat-item h2");
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const originalText = counter.innerText; // Save original text
            const suffix = originalText.replace(/[0-9.]/g, ""); // Extract non-numeric parts
            const speed = 50;
            const increment = Math.ceil(target / speed);

            const updateCounter = () => {
              const current = +counter.innerText.replace(/[^0-9.]/g, ""); // Remove non-numeric parts
              if (current < target) {
                counter.innerText = `${current + increment}${suffix}`;
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = `${target}${suffix}`;
              }
            };

            updateCounter();
          });

          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, {
      threshold: 0.5,
    });

    const statsSection = document.querySelector(".statistics-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      <div className="hero-section_agri">
        <div className="hero-overlay"></div>
        <div className="hero-content_agri">
          <h1 style={{color:""}}>Community Organisation</h1>
          <p>Building self-sustaining villages through Community Action Groups (CAGs)</p>
          <div className="hero-buttons">
            <button className="btn-primary">Our Programs</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="statistics-section">
          <div className="stat-item">
            <h2 data-target="137">137+</h2>
            <p>Villages Covered</p>
          </div>
          <div className="stat-item">
            <h2 data-target="1.3">1.3L+</h2>
            <p>People Impacted Yearly</p>
          </div>
          <div className="stat-item">
            <h2 data-target="6">6+</h2>
            <p>Years of Operations</p>
          </div>
        </div>
      </div>
      <section className="about_kvk_section_Com">
        <div className="about_kvk_image_Com">
          <img style={{height:"350px"}} src="/imgs/agri/womenjpeg.jpeg" alt="About KVK" />
        </div>
        <div className="about_kvk_content_Com">
          <h1>Community Organisation</h1>
          <p>
          BCT fosters rural self-sustenance by forming Community Action Groups (CAGs), operational in 137 villages over the past 6 years. These groups collaborate with local stakeholders to identify and address village-specific challenges.
          Through this initiative, BCT has tackled issues such as crop and pest management, post-harvest processes, public health, sanitation, quality education, and employment training. Annually, approximately 1.3 lakh people benefit from these programs.
          Notable solutions include improved agricultural practices, better public health measures, and skill development initiatives.
          </p>
        </div>
      </section> 

            {/* Programs Grid */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          <div className="program-item">
            <div className="program-icon">🌾</div>
            <h3 style={{color:" #147169"}}>Farmers Clubs</h3>
            <p>Monthly meetings provide a platform for farmers to discuss challenges, explore cost-effective inputs, adopt organic farming, and enhance incomes.</p>
          </div>
          <div className="program-item">
          <div className="program-icon">🏥</div>
          <h3 style={{color:" #147169"}}>Health Camps</h3>
            <p>Regular camps, such as eye and COVID-19 screenings, raise health awareness. Masks, sanitizers, and medical equipment were distributed during the pandemic.</p>
          </div>
          <div className="program-item">
          <div className="program-icon">💪</div>
            <h3 style={{color:"#147169"}}>Support for women</h3>
            <p>BCT empowers women through skill training, kitchen gardens, thrift groups, and value-addition programs, enabling income generation and improved quality of life.</p>
          </div>
          <div className="program-item">
            <div className="program-icon">📚</div>
            <h3 style={{color:" #147169"}}>Other activities</h3>
            <p>CAGs address diverse needs, including adolescent groups, libraries, water pumps, scholarships, toilets, and vocational training, tailoring solutions to each village's unique needs.</p>
          </div>
        </div>
      </section>
     
     


      
    </div>
  );
};

export default Community;
