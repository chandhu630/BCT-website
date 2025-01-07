import React from 'react';
import './about.css';
// import LegacyPage from '../Legacy/legacy';
// import Timeline from '../TimeLine/timeline';
// import MeetOurTeam from '../Team/team';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <div className="text-content">
          <h1>About Us</h1>
          <p>Bhagavatula Charitable Trust (BCT), established in 1976, is a non-profit organization committed to rural prosperity in Andhra Pradesh, especially in the Visakhapatnam district. Through integrated rural development programs, BCT empowers villages by fostering leadership, enhancing education, livelihoods, and supporting agricultural communities and rural entrepreneurs. Founded by Dr. BV Parameswara Rao, BCT has pioneered over 100 initiatives, including women's self-help groups, rural banking, and wasteland development, setting replicable models for sustainable growth.</p>
          <div className='flexButtons'>
            <button className="learn-more"> <Link className="linknone" to="/legacy">Legacy</Link></button>
            <button  className="timelinecolor"><Link className="linknone" to="/legacy">TimeLine </Link></button>
            <button  className="learn-more"><Link className="linknone" to="/legacy">The Team </Link></button>
         
          </div>
        </div>
        <div className="illustration">
          <img src='./imgs/about.png' alt='About Us Illustration' />
        </div>
      </div>
      <div className="cards-container">
        <div className=" mission-card">
          <h2> <i class="fas fa-bullseye icon"></i>Mission</h2>
          <p>To enhance the quality of rural life by nurturing local leadership, solving community challenges, and creating opportunities for efficient resource utilization.</p>
        </div>
        <div className="mission-card">
          <h2> <i class="fas fa-eye icon"></i>Vision</h2>
          <p>To transform the villages of Visakhapatnam into learning models, ensuring gainful employment for all, fostering literacy, health, and economic growth, while utilizing human and natural resources effectively.</p>
        </div>
      </div>
      {/* <LegacyPage/>
      <Timeline/>
      <MeetOurTeam/> */}
      
    </div>
  );
};

export default AboutUsSection;