import React from "react";
import "./SLFCReport.css";
import { FaSeedling, FaWheelchair, FaUsers, FaRupeeSign } from "react-icons/fa";

const SlfcHero = () => {
  return (
    <div className="slfc-container">
      {/* Hero Section */}
      <section className="slfc-hero">
        <img src="/imgs/slfc/slfc1.jpg" alt="SLFC Hero" className="slfc-hero-img" />
        <div className="slfc-hero-content">
          <h1>Sustainable Livelihoods for Farmers and the Challenged (SLFC)</h1>
          <p className="slfc-hero-desc"  style={{color:"white"}}>
            Empowering rural and tribal communities through sustainable agriculture, 
            rehabilitation, and social welfare programs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="slfc-about">
        <div className="section-content">
          <div className="about-text">
            <h2>About the SLFC Program</h2>
            <p>
              The SLFC project, implemented by Bhagavatula Charitable Trust in 
              partnership with the Azim Premji Foundation, aims to modernize agriculture, 
              support persons with disabilities, and facilitate access to government 
              welfare schemes.
            </p>
          </div>
          <div className="about_slfc">
            <img src="/imgs/slfc/slfc2.jpg" alt="About SLFC" className="slfc-image" />
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section style={{marginTop:"100px"}} className="slfc-initiatives">
        <div className="section-content">
          <h2>Our Key Initiatives</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            Driving positive change through focused programs
          </p>
          <div className="slfc-grid" style={{marginTop:"50px"}}>
            <div className="slfc-card">
              <div className="card-image-container">
                <img src="/imgs/slfc/slfc6.jpg" alt="Agriculture" />
              </div>
              <div className="card-content">
                <h3>Agricultural Development</h3>
                <p>Training 1,341 farmers in sustainable and eco-friendly farming techniques.</p>
              </div>
            </div>

            <div className="slfc-card">
              <div className="card-image-container">
                <img src="/imgs/slfc/m.jpeg" alt="Rehabilitation" />
              </div>
              <div className="card-content">
                <h3>Rehabilitation & Inclusion</h3>
                <p>Providing 266 PwDs with physiotherapy, assistive devices, and income opportunities.</p>
              </div>
            </div>

            <div className="slfc-card">
              <div className="card-image-container">
                <img src="/imgs/slfc/g.jpeg" alt="Community Welfare" />
              </div>
              <div className="card-content">
                <h3>Community Development</h3>
                <p>Helping 3,980 tribal families gain access to government welfare programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="slfc-impact" style={{marginTop:"100px"}}>
        <div className="section-content">
          <h2>Our Impact & Achievements</h2>
          <p className="section-subtitle" style={{textAlign:"center"}}>Making a measurable difference in communities</p>
          <div className="slfc-impact-grid" style={{marginTop:"50px"}}>
            <div className="slfc-impact-card">
              <FaSeedling className="slfc-icon" style={{ fontSize: "30px", color: "#EC4342" }} />
              <div className="impact-number">7.54%</div>
              <h3>Yield Increase</h3>
              <p style={{color:"white"}}>In paddy yield through improved farming practices.</p>
            </div>
            <div className="slfc-impact-card">
              <FaRupeeSign className="slfc-icon" style={{ fontSize: "30px", color: "#EC4342" }} />
              <div className="impact-number">8.09%</div>
              <h3>Cost Reduction</h3>
              <p  style={{color:"white"}}>For vegetable farming through eco-friendly pest control.</p>
            </div>
            <div className="slfc-impact-card">
              <FaWheelchair className="slfc-icon" style={{ fontSize: "30px", color: "#EC4342" }} />
              <div className="impact-number">100%</div>
              <h3>Rehabilitation</h3>
              <p  style={{color:"white"}}>For PwDs, ensuring improved mobility and income opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="slfc-success" style={{marginTop:"100px"}}>
        <div className="section-content">
          <h2>Success Stories</h2>
          <p className="section-subtitle" style={{textAlign:"center"}}>Real stories of transformation and growth</p>
          <div className="slfc-story-container" style={{marginTop:"50px"}}>
            <div className="slfc-story">
              <div className="story-image-wrapper">
                <img src="/imgs/slfc/b.jpg" alt="Farmer Success" />
              </div>
              <div className="slfc-story-text" >
                <span className="story-category">Agriculture Success</span>
                <h3>Profitable Brinjal Cultivation</h3>
                <p>
                  Thadi Ramana, a farmer from Ugginapalem, increased his yield by 20% 
                  and reduced costs using Integrated Pest Management techniques.
                </p>
              </div>
            </div>
            <div className="slfc-story">
              <div className="story-image-wrapper">
                <img src="/imgs/slfc/slfc5.jpg" alt="Paddy Yield Increase" />
              </div>
              <div className="slfc-story-text">
                <span className="story-category">Farming Innovation</span>
                <h3>Transforming Paddy Cultivation</h3>
                <p>
                  K. Nageswarao from Timmarajupeta saw a 21.8% increase in yield 
                  using line sowing techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlfcHero;
