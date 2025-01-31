import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './imageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const onReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const services = [
    {
      id: 1,
      icon: "🎓",
      title: "Comprehensive Education Initiative at Paderu",
      image: "/imgs/student.png",
      
    },
    {
      id: 2,
      icon: "👥",
      title: "Central CAG meeting held",
      image: "/imgs/cc.png",
        },
    {
      id: 3,
      icon: "🎨",
      title: "Sankranti on campus",
      image: "/imgs/rangoli.png",
    },
    {
      id: 4,
      icon: "🤝",
      title: "SAC meeting held",
      image: "/imgs/SAPmeeting.jpeg",
    },
    {
      id: 5,
      icon: "♻️",
      title: "Waste Decomposer Training",
      image: "/imgs/decomposer.png"
    },
    {
      id: 6,
      icon: "🏢",
      title: "Sri PV Venkatesan Center Revamped",
      image: "/imgs/pv.png",
   },
    {
        id: 7,
        icon: "🐃",
        title: "Buffalo distribution to PWDs",
        image: "/imgs/pwds.png",
    },
    {
        id: 8,
        icon: "🎪",
        title: "Picnic time for school students ",
        image: "/imgs/field.png", 
   },
    {
        id: 9,
        icon: "👨‍👩‍👧‍👦",
        title: "Meeting the parents",
        image: "/imgs/meeting.png", 
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 3 : prevIndex - 1
    );
  };

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slides every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    let cards = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const index = i >= services.length ? i - services.length : i;
      cards.push(services[index]);
    }
    return cards;
  };

  return (
    <div className="slider-wrapper">
      <button className="nav-button prev" onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></button>
      
      <div className="services-slider">
        <div className="slider-track">
          {getVisibleCards().map((service, index) => (
            <div 
              key={currentIndex + index} 
              className="service-card"
            >
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className='ImgSlide-displayDiv'>
                <div className="icon-container">
                  <span>{service.icon}</span>
                </div>
                <h2 className="service-title">{service.title}</h2>
               
              </div>
             
              {/* <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="checkmark">✓</span>
                    {item}
                  </li>
                ))}
              </ul> */}
              <button 
                className="readmoreBtn"
                onClick={() => onReadMore(service.id)}
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-button next" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
      </button>

      <div className="slider-dots">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
          <span 
            key={index}
            className={`dot ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;