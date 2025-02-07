import React from 'react';
import './team.css';

const teamMembers = [
  {
    name: 'Mohan Kanda IAS',
    role: 'President',
    description:
      'Former Chief Secretary to Government of Andhra Pradesh, he has been BCT President since 2017. He brings a vast experience of administration as well as insights into both rural development as well as administration.',
    image: './imgs/mohan.png',
  },
  {
    name: 'Prof. Dr. Rao Tatavarti',
    role: 'Vice-President',
    description:
      'Director & Dean (Engineering Research and Industrial Consultancy), Gayatri Vidya Parishad Scientific and Industrial Research Centre. Former Director (R&D) at VIT University.',
    image: './imgs/tatavatri.jpeg',
  },
  {
    name: 'Sri B Sri Ram Murty',
    role: 'Secretary',
    description:
      'Heading the organization since 2009, with 26 years in grassroots development. Founded the Grameena Incubation Center for entrepreneurship and rural start-ups.',
    image: './imgs/ram.png',
  },
  {
    name: 'Ms C Krishna Jyothi',
    role: 'Treasurer',
    description:
      'A former banker with over three decades of experience in banking and finance, she has served as a CSR Consulting Advisor for various organizations.',
    image: './imgs/jyothi.png',
  },
  {
    name: 'Sri N Somayajulu',
    role: 'Joint Secretary',
    description:
      'A development professional with more than 38 years of experience in managing non-governmental organizations. He holds a Masters degree.',
    image: './imgs/somayajulu.jpeg',
  },
];

const additionalMembers = [
  {
    category: 'Board Members',
    names: [
      'Sri B. Radhakrishna',
      'Smt Senapati Kasulamma',
      'Sri Nagaraja Prakasam',
      'Smt Perin Devi',
      'Sri Basant Mohanty',
      'Smt Shilpa Dantu',
      'Sri D. Nagabrahmam',
      'Smt G. Nookaratnam',
      'Prof. Suresh Bhagavatula',
      'Sri Sriram Nadiminti',
    ],
  },
  {
    category: 'Additional Members',
    names: ['Smt K. Prabhavathi', 'Dr. Sailaja Kurra', 'Sri​ V. Subrahmanayam'],
  },
  {
    category: 'Advisory Members',
    names: [
      'Sri R. Adinarayana Rao',
      'Sri G. V. Subrahmanyam, IRAS (R)',
      'Dr. S. Satyamurty',
      'Sri MN Aditya',
    ],
  },
  {
    category: 'Village Advisory Members',
    names: [
      'Sri Senapathi Nageswara Rao',
      'Sri Pothu Ranga Rao',
      'Sri Pragada Venkatarao',
      'Smt Vepakayala Satyavathi',
      'Smt Bheesetti Devi',
      'Smt Nalamari Ramu',
    ],
  },
];

const MeetOurTeam = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {/* First Row - 3 Cards */}
        <div className="first-row">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" style={{width:"100%",}}/>
                <div className="team-overlay">
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <h4 className="team-role">{member.role}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - 2 Cards */}
        <div className="second-row">
          {teamMembers.slice(3).map((member, index) => (
            <div key={index + 3} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <h4 className="team-role">{member.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="members-container">
        {/* Board Members Section */}
        <div className="members-section">
          <div className="section-title">
            <div className="red-accent"></div>
            <h2>Board Members</h2>
          </div>
          <div className="members-grid">
            {additionalMembers[0].names.map((name, idx) => (
              <div key={idx} className="member-item">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Members Section */}
        <div className="members-section">
          <div className="section-title">
            <div className="red-accent"></div>
            <h2>Additional Members</h2>
          </div>
          <div className="members-grid">
            {additionalMembers[1].names.map((name, idx) => (
              <div key={idx} className="member-item">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Members Section */}
        <div className="members-section">
          <div className="section-title">
            <div className="red-accent"></div>
            <h2>Advisory Members</h2>
          </div>
          <div className="members-grid">
            {additionalMembers[2].names.map((name, idx) => (
              <div key={idx} className="member-item">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Village Advisory Members Section */}
        <div className="members-section">
          <div className="section-title">
            <div className="red-accent"></div>
            <h2>Village Advisory Members</h2>
          </div>
          <div className="members-grid">
            {additionalMembers[3].names.map((name, idx) => (
              <div key={idx} className="member-item">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
