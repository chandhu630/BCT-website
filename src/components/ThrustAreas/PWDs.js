import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PWDs.css";

const PWDs = () => {
  useEffect(() => {
    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll(".pwd-stat-item h2");
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const speed = 50;
            const increment = Math.ceil(target / speed);

            const updateCounter = () => {
              const current = +counter.innerText;
              if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = target;
              }
            };

            updateCounter();
          });

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, {
      threshold: 0.5,
    });

    const statsSection = document.querySelector(".pwd-statistics-section");
    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pwd-homepage">
      <div className="pwd-hero-section">
        <div className="pwd-hero-overlay"></div>
        <div className="pwd-hero-content">
          <h1>REHAB OF PWDs</h1>
          <p style={{color:"white"}}>Enhancing agricultural outcomes and empowering farmers since 1995</p>
          <div className="pwd-hero-buttons">
             <Link 
              to="/support-us" 
              className="pwd-btn-primary"
            >
              Support Us
            </Link>
            <Link 
              to="/contact" 
              className="pwd-btn-secondary"
            >
             Contact Us
            </Link>
          </div>
        </div>

        <div className="pwd-statistics-section">
          <div className="pwd-stat-item">
            <h2 data-target="12">12+</h2>
            <p>Mandal Coverage</p>
          </div>
          <div className="pwd-stat-item">
            <h2 data-target="2000">2000</h2>
            <p>Years of Excellence</p>
          </div>
          <div className="pwd-stat-item">
            <h2 data-target="13">13+ districts</h2>
            <p>Total Initiatives</p>
          </div>
        </div>
      </div>
      <section className="pwd-about-section">
        <div className="pwd-about-image">
          <img style={{height:"300px"}} src="/imgs/pv.png" alt="About KVK" className="pwdImg" />
        </div>
        <div className="pwd-about-content">
          <h1>Skill & Health For Physically Challenged</h1>
          <p>
          With the belief that the physically challenged in rural Visakhapatnam receive equal opportunities,
           and can go beyond being perceived as a burden on the family, operates the 'Skill & Health For Physically Challenged'. 
           Serving communities since BCTs inception, this unit serves people with disabilities through a Community Rehabilitation Program.
            It also runs a residential center called the Sri PV Venkatesan Center for the Challenged.
          </p>
        </div>
      </section> 
      <div className="pwd-rehabilitation-page">
      {/* Hero Section */}
      <header className="pwd-rehabilitation-hero">
        <h1 className="pwd-rehabilitation-title">Rehabilitation Programs</h1>
        <p className="pwd-rehabilitation-tagline">
          Transforming lives through dedicated rehabilitation programs and community support.
        </p>
      </header>

      {/* Cards Section */}
      <section className="pwd-rehabilitation-cards">
        {/* Card 1: Community-Based Rehabilitation */}
        <div className="pwd-rehabilitation-card">
          <img
            src="/imgs/pwds1.png"
            alt="Community-Based Rehabilitation"
            className="pwd-rehabilitation-card__image"
          />
          <div className="pwd-rehabilitation-card__content">
            <h2 className="pwd-rehabilitation-card__title">Community-Based Rehabilitation</h2>
            <p>
              Operating in over 12 mandals, community-based rehabilitation takes care to the
              doorsteps of people in villages. Trained physiotherapists visit villages and provide
              doorstep services, partnering with organizations like the Tata Relief Committee and
              Heart and Hand for the Handicapped (USA).
            </p>
            
          </div>
        </div>

        {/* Card 2: Institution-Based Rehabilitation */}
        <div className="pwd-rehabilitation-card">
          <img
            src="/imgs/pwds2.png"
            alt="Institution-Based Rehabilitation"
            className="pwd-rehabilitation-card__image"
          />
          <div className="pwd-rehabilitation-card__content">
            <h2 className="pwd-rehabilitation-card__title">Institution-Based Rehabilitation</h2>
            <p>
              The Sri PV Venkatesan Centre for the Challenged has been operational since 2000 at
              Panchadarla farm. Physically challenged students stay here and learn skills like
              tailoring, embroidery, and agriculture.
            </p>
            <ul className="items-pwd">
              <li>A peaceful learning environment in nature</li>
              <li>
                A syllabus covering academics, vocational, and social animation skills
              </li>
            
            </ul>
            
          </div>
        </div>

        {/* Card 3: Physiotherapy Center */}
        <div className="pwd-rehabilitation-card">
          <img
             src="/imgs/pwds3.png"
            alt="Physiotherapy Services"
            className="pwd-rehabilitation-card__image"
          />
          <div className="pwd-rehabilitation-card__content">
            <h2 className="pwd-rehabilitation-card__title">Physiotherapy Center</h2>
            <p>
              Our physiotherapy center, staffed with skilled professionals, offers both on-campus
              and doorstep services to individuals in need. This ensures access to essential care,
              regardless of location.
            </p>
            <ul className="items-pwd">
              <li>Dedicated physiotherapy care</li>
              <li>Training programs for caregivers</li>
              <li>Mobile services for remote areas</li>
            </ul>
          
          </div>
        </div>
      </section>

     
    </div>
      
    </div>
  );
};

export default PWDs;
