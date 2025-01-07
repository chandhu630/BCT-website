import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import Program from '../Programs/program';
import Footer from '../Footer/footer';
import ImageSlider from '../ImageSlider/imageSlider';

const Home = () => {
  const countersRef = useRef([]);
  const [counts, setCounts] = useState({
    villagers: "0",
    villages: "0",
    projects: "0",
    years: "0"
  });

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const animateValue = (id, start, end, duration) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentNumber = Math.floor(progress * (end - start) + start);
      
      setCounts(prev => ({
        ...prev,
        [id]: end > 1000 ? formatNumber(currentNumber) : currentNumber.toString()
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const dataset = element.dataset;
            const finalValue = parseInt(dataset.value);
            animateValue(dataset.id, 0, finalValue, 2000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    countersRef.current.forEach(counter => {
      if (counter) {
        observer.observe(counter);
      }
    });

    return () => {
      countersRef.current.forEach(counter => {
        if (counter) {
          observer.unobserve(counter);
        }
      });
    };
  }, []);

  const counterData = [
    { id: "villagers", value: 100000, text: "Villagers impacted per year" },
    { id: "villages", value: 100, text: "Villages Served" },
    { id: "projects", value: 300, text: "Projects championed" },
    { id: "years", value: 46, text: "Years of Services" }
  ];

  return (
    
    <div className="container_home">
      <div className="displayDiv">
        <div className="text-container">
          <div className="heading_home">Transforming Rural Lives</div>
          <div className="subheading">Empowering Communities</div>
          <p style={{color:"rgb(241, 237, 161)"}} className="description">
            Building sustainable futures through education, agriculture, and skill development in Visakhapatnam's villages. Together, we're creating models of learning and growth.
          </p>
          <div className="buttons">
            <a href="#" className=" buttonHome button-primaryhome">Support Our Cause</a>
            <a href="#" className=" buttonHome button-secondaryhome">Learn More</a>
          </div>
        </div>
        <div className="card-container">
          {counterData.map((data) => (
            <div className="card" key={data.id}>
              <h3 
                ref={el => countersRef.current.push(el)}
                data-value={data.value}
                data-id={data.id}
              >
                {counts[data.id]}+
              </h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,218.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className='ProgramsPage'>
        <div className="subheading1">Our Programs</div>
        <Program/> 
      </div>
      <div className='sliderPart'>
        <div className="subheading1">Success Stories</div>
        <ImageSlider/>
      </div>
      <div className='footerPageHome'>
      <Footer/>
      </div>
      
    </div>
  );
};

export default Home;