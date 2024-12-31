import React from 'react';
import './PWDs.css';
import Footer from '../Footer';
import { 
  FaWheelchair, 
  FaHandHoldingHeart, 
  FaHospital,
  FaGraduationCap,
  FaHandsHelping,
  FaHome,
  FaBriefcaseMedical,
  FaUserMd
} from 'react-icons/fa';

const PWDs = () => {
  const communityServices = [
    {
      icon: <FaBriefcaseMedical />,
      title: "Medical Support",
      description: "Aids, appliances, and medical certificates"
    },
    {
      icon: <FaUserMd />,
      title: "Physiotherapy",
      description: "Professional physiotherapy services at doorstep"
    },
    {
      icon: <FaHandsHelping />,
      title: "Employment Support",
      description: "Self-employment initiatives and training"
    },
    {
      icon: <FaHospital />,
      title: "Medical Care",
      description: "Comprehensive medical care and support"
    }
  ];

  const institutionBenefits = [
    {
      icon: <FaHome />,
      title: "Natural Environment",
      description: "Peaceful learning environment in Panchadarla farm"
    },
    {
      icon: <FaGraduationCap />,
      title: "Comprehensive Education",
      description: "Academic, vocational and social animation skills"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Health Support",
      description: "Speech therapy and wellness programs"
    }
  ];

  return (
    <div className="rehab-container">
      {/* Hero Section */}
      <div className="rehab-hero">
        <FaWheelchair className="hero-icon" />
        <h1>Skill & Health For Physically Challenged</h1>
        <p className="hero-description">
          Empowering physically challenged individuals in rural Visakhapatnam with equal opportunities 
          through comprehensive rehabilitation programs and dedicated support services.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        <img src="/images/RHS.png" alt="ITI Training" className="gallery-img" />
        <img src="/images/group.png" alt="Workshop" className="gallery-img" />
        <img src="/images/field.png" alt="Students" className="gallery-img" />
        <img src="/images/boys.png" alt="Facilities" className="gallery-img" />
       </div>

      {/* Community Based Rehabilitation */}
      <section className="community-rehab">
        <h2>Community Based Rehabilitation</h2>
        <p className="section-intro">
          Operating in over 12 mandals, bringing rehabilitation services directly to villages and communities.
        </p>
        <div className="services-grid">
          {communityServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Institution Based Rehabilitation */}
      <section className="institution-rehab">
        <h2>Sri PV Venkatesan Centre for the Challenged</h2>
        <p className="section-intro">
          Operational since 2000, providing residential rehabilitation and skill development.
        </p>
        <div className="benefits-grid">
          {institutionBenefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          <img src="/images/boys.png" alt="Tata Relief Committee" />
          <img src="/images/RHS.png" alt="Heart and Hand for the Handicapped" />
          <img src="/images/boat.png" alt="Partner Organization" />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default PWDs;