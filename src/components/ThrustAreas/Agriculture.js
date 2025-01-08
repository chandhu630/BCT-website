// import React, { useEffect } from "react";
// import "./Agriculture.css";

// const Agriculture = () => {
//   const data = [
//     {
//       title: "Frontline Demonstrations",
//       description: "Cluster frontline demonstrations bring together farmers across village-clusters and tribal areas to a common point for demonstration of relevant practices.",
//       image: "/imgs/agri/motive.jpg",
//     },
//     {
//       title: "On-Farm Trials",
//       description: "These trials are regularly conducted at farmers fields to study the crops. Scientists provide suggestions and inputs that enable farmers to increase outcomes and reduce disease incidences.",
//       image: "/imgs/agri/testing.jpeg",
//     },
//     {
//       title: "Technology Assessments",
//       description: "These are regularly conducted to understand current practices, address gaps and suggest meaningful technologies. Various weeders, cutters and other tools and technologies are continuously introduced to reduce the drudgery of work.",
//       image: "/imgs/agri/pro.jpg",
//     },
//     {
//       title: "Disease Management",
//       description: "​Disease management of crops is enabled through identifying the disease and suggesting relevant prevention, protection and treatment.",
//       image: "/imgs/agri/brinjal.jpg",
//     },
//     {
//       title: "Training Programs",
//       description: "​​Regular trainings are conducted for farmers on seed treatment, disease prevention and management, off season cultivation and other aspects. Farmers also learn about value addition activities to enable them to generate better income.",
//       image: "/imgs/agri/TechAssiss.jpg",
//     },
//     {
//       title: "Animal Husbandry",
//       description: "​​​In house veterinary scientists also enable veterinary support by distribution of livestock, conducting sessions on their care and enabling additional income to families through proper management.",
//       image: "/imgs/agri/cows.jpg",
//     },
//   ];

//   useEffect(() => {
//     const animateCounters = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const counters = document.querySelectorAll(".stat-item h2");
//           counters.forEach((counter) => {
//             const target = +counter.getAttribute("data-target");
//             const speed = 50;
//             const increment = Math.ceil(target / speed);

//             const updateCounter = () => {
//               const current = +counter.innerText;
//               if (current < target) {
//                 counter.innerText = current + increment;
//                 setTimeout(updateCounter, 10);
//               } else {
//                 counter.innerText = target;
//               }
//             };

//             updateCounter();
//           });

//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(animateCounters, {
//       threshold: 0.5,
//     });

//     const statsSection = document.querySelector(".statistics-section");
//     if (statsSection) observer.observe(statsSection);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="homepage_BctAgri">
//       <div className="hero-section_agricul_BctAgri">
//         <div className="hero-overlay_BctAgri"></div>
//         <div className="hero-content_agri_BctAgri">
//           <h1>BCT Krishi Vigyan Kendra</h1>
//           <p>Enhancing agricultural outcomes and empowering farmers since 1995</p>
          
//           <div className="hero-buttons">
//             <button className="btn-primary">Our Programs</button>
//             <button className="btn-secondary">Contact Us</button>
//           </div>
//         </div>

//         {/* Statistics Section */}
//         <div className="statistics-section_BctAgri">
//           <div className="stat-item_BctAgri">
//             <h2 data-target="45000">45000+</h2>
//             <p>Farmers Supported Annually</p>
//           </div>
//           <div className="stat-item_BctAgri">
//             <h2 data-target="1995">1995</h2>
//             <p>Years of Excellence</p>
//           </div>
//           <div className="stat-item_BctAgri">
//             <h2 data-target="7">7+</h2>
//             <p>Agricultural Initiatives</p>
//           </div>
//         </div>
//       </div>

//       <section className="about_kvk_section_BctAgri">
//         <div className="about_kvk_image_BctAgri">
//           <img src="/imgs/agri/krushi.JPG" alt="About KVK" />
//         </div>
//         <div className="about_kvk_content_BctAgri">
//           <h1>About Krishi Vigyan Kendra</h1>
//           <p>
//             Sanctioned to BCT in 1995, the BCT Krishi Vigyan Kendra (BCT-KVK)
//             works towards enhancing and improving agricultural outcomes for
//             farmers. Through various initiatives, BCT KVK aims to better the
//             quality of work and life for farmers in the region.
//           </p>
//         </div>
//       </section> 

//       <div className="showcase-container_BctAgri">
//         {data.map((item, index) => (
//           <div key={index} className="showcase-item_BctAgri">
//             <div className="image-container_BctAgri">
//               <img src={item.image} alt={item.title} className="showcase-image_BctAgri" />
//             </div>
//             <div className="content-container_BctAgri">
//               <h1 className="showcase-title_BctAgri">{item.title}</h1>
//               <p className="showcase-description_BctAgri">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Agriculture;

import React, { useEffect } from "react";
import "./Agriculture.css";

const Agriculture = () => {
  const data = [
    {
      title: "Frontline Demonstrations",
      description: "Cluster frontline demonstrations bring together farmers across village-clusters and tribal areas to a common point for demonstration of relevant practices.",
      image: "/imgs/agri/motive.jpg",
    },
    {
      title: "On-Farm Trials",
      description: "These trials are regularly conducted at farmers fields to study the crops. Scientists provide suggestions and inputs that enable farmers to increase outcomes and reduce disease incidences.",
      image: "/imgs/agri/testing.jpeg",
    },
    {
      title: "Technology Assessments",
      description: "These are regularly conducted to understand current practices, address gaps and suggest meaningful technologies. Various weeders, cutters and other tools and technologies are continuously introduced to reduce the drudgery of work.",
      image: "/imgs/agri/pro.jpg",
    },
    {
      title: "Disease Management",
      description: "​Disease management of crops is enabled through identifying the disease and suggesting relevant prevention, protection and treatment.",
      image: "/imgs/agri/brinjal.jpg",
    },
    {
      title: "Training Programs",
      description: "​​Regular trainings are conducted for farmers on seed treatment, disease prevention and management, off season cultivation and other aspects. Farmers also learn about value addition activities to enable them to generate better income.",
      image: "/imgs/agri/techAssiss.jpg",
    },
    {
      title: "Animal Husbandry",
      description: "​​​In house veterinary scientists also enable veterinary support by distribution of livestock, conducting sessions on their care and enabling additional income to families through proper management.",
      image: "/imgs/agri/cows.jpg",
    },
  ];

  useEffect(() => {
    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll(".item_BctAgri h2");
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

    const statsSection = document.querySelector(".statistics-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage_BctAgri">
      <div className="hero-section_agricul_BctAgri">
        <div className="hero-overlay_BctAgri"></div>
        <div className="hero-content_agri_BctAgri">
          <h1>BCT Krishi Vigyan Kendra</h1>
          <p>Enhancing agricultural outcomes and empowering farmers since 1995</p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Our Programs</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="statistics-section_BctAgri">
          <div className="stat-item_BctAgri">
            <h2 data-target="45000">45000+</h2>
            <p>Farmers Supported Annually</p>
          </div>
          <div className="stat-item_BctAgri">
            <h2 data-target="1995">1995</h2>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item_BctAgri">
            <h2 data-target="7">7+</h2>
            <p>Agricultural Initiatives</p>
          </div>
        </div>
      </div>

      <section className="about_kvk_section_BctAgri">
        <div className="about_kvk_image_BctAgri">
          <img src="/imgs/agri/krushi.JPG" alt="About KVK" />
        </div>
        <div className="about_kvk_content_BctAgri">
          <h1>About Krishi Vigyan Kendra</h1>
          <p>
            Sanctioned to BCT in 1995, the BCT Krishi Vigyan Kendra (BCT-KVK)
            works towards enhancing and improving agricultural outcomes for
            farmers. Through various initiatives, BCT KVK aims to better the
            quality of work and life for farmers in the region.
          </p>
        </div>
      </section> 

      <div className="showcase-container_BctAgri">
        {data.map((item, index) => (
          <div key={index} className="showcase-item_BctAgri">
            <div className="image-container_BctAgri">
              <img src={item.image} alt={item.title} className="showcase-image_BctAgri" />
            </div>
            <div className="content-container_BctAgri">
              <h1 className="showcase-title_BctAgri">{item.title}</h1>
              <p className="showcase-description_BctAgri">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agriculture;