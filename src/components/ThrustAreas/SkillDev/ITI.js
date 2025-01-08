// import React from 'react';
// import './ITI.css';
// import { 
//   FaTools, 
//   FaIndustry, 
//   FaUserGraduate, 
//   FaWrench,
//   FaHandsHelping,
//   FaLanguage
// } from 'react-icons/fa';

// const ITI = () => {
//   const trainingFeatures = [
//     {
//       icon: <FaTools />,
//       title: "Hands-on Projects",
//       description: "Application knowledge through practical projects and workshops"
//     },
//     {
//       icon: <FaIndustry />,
//       title: "Industrial Exposure",
//       description: "Regular exposure visits and industrial training sessions"
//     },
//     {
//       icon: <FaWrench />,
//       title: "Technical Skills",
//       description: "Understanding of job tools, framework techniques, and machinery"
//     },
//     {
//       icon: <FaLanguage />,
//       title: "Soft Skills",
//       description: "Enhanced communication through spoken English classes"
//     },
//     {
//       icon: <FaUserGraduate />,
//       title: "Expert Training",
//       description: "Practical sessions in laboratories under experienced trainers"
//     },
//     {
//       icon: <FaHandsHelping />,
//       title: "Support Services",
//       description: "Aids and appliances for comprehensive learning"
//     }
//   ];

//   return (
//     <div className="iti-container">
//       {/* Hero Section */}
//       <div className="iti-hero">
//         <div className="hero-content">
//           <h1>Industrial Training Institute</h1>
//           <div className="established-badge">Est. 2012</div>
//           <p className="hero-description">
//             An extension of BCT's rural youth empowerment initiative, training 100 students 
//             annually in Electrician and Fitter skills under the CTS scheme of NCVT.
//           </p>
//         </div>
//         <div className="hero-stats">
//           <div className="stat-item">
//             <h3>100+</h3>
//             <p>Students per Year</p>
//           </div>
//           <div className="stat-item">
//             <h3>2</h3>
//             <p>Trade Programs</p>
//           </div>
//           <div className="stat-item">
//             <h3>10+</h3>
//             <p>Years Experience</p>
//           </div>
//         </div>
//       </div>

//       {/* Image Gallery */}
//       <div className="image-gallery">
//         <img src="/imgs/RHS.png" alt="ITI Training" className="gallery-img" />
//         <img src="/imgs/group.png" alt="Workshop" className="gallery-img" />
//         <img src="/imgs/field.png" alt="Students" className="gallery-img" />
//         <img src="/imgs/boys.png" alt="Facilities" className="gallery-img" />
//       </div>

//       {/* Training Features */}
//       <div className="training-features">
//         <h2>Training Programs</h2>
//         <div className="features-grid">
//           {trainingFeatures.map((feature, index) => (
//             <div className="feature-card" key={index}>
//               <div className="feature-icon">
//                 {feature.icon}
//               </div>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Trade Programs */}
//       <div className="trade-programs">
//         <h2>Our Trade Programs</h2>
//         <div className="trade-cards_it">
//           <div className="trade-cardDiv electrician">
//             <FaTools className="trade-icon" />
//             <h3>Electrician</h3>
//             <p>Comprehensive electrical training with modern equipment and practical exposure</p>
//           </div>
//           <div className="trade-cardDiv fitter">
//             <FaWrench className="trade-icon" />
//             <h3>Fitter</h3>
//             <p>Advanced fitting techniques with hands-on workshop experience</p>
//           </div>
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default ITI;


import './ITI.css' ;

import { 
    FaTools, 
    FaIndustry, 
    FaUserGraduate, 
    FaWrench,
    FaHandsHelping,
    FaLanguage
  } from 'react-icons/fa';

function ITI(){
  return(
    <div>
        <div className="ITIHeaderFlex">
          <div className="ITI_Div_Left">
            <h1>Industrial Trai​ning Institute</h1>
            <p>The BCT Industrial Training Institute, established in 2012, trains 100 rural youth annually 
              in Electrician and Fitter skills under the CTS scheme, ensuring skill development and job placements.</p>
          </div>
          <div></div>
        </div>
        <div style={{marginTop:"30px"}} className='AboutIt'>
          <div className='ItImage'>
            <img className='realItimage' src='/imgs/teaching.jpg' alt='' />
          </div>
          <div className='AboutContent'>
            <h1>About ITI</h1>
            <p>
            Run under the CTS scheme of NCVT, the BCT ITI trains 100 students annually in Electrician and Fitter skills, ensuring strong job placements.
            Aspiring to become a leading ITI college, it plans to introduce market-relevant short-term programs. 
            These initiatives aim to attract more girl students, promoting inclusivity.
            </p>
            <button className='ItSupport'> Support Us</button>
          </div>
        </div>
        <div className='ITGallery'style={{marginTop:"30px", marginBottom:"30px"}} >
          <h1 style={{textAlign:"center"}}>Training programs</h1>
          <div className='itprograms'>
            <div className='ITDiv'><img className='ItPro_img'  src='/imgs/ramshit.jpg' alt='' /></div>
            <div className='ITDivContent'>< FaUserGraduate style={{fontSize:'40px',color:"#EC4342" ,padding:"5px"}} /><p style={{textAlign:"start"}}></p><li className='ListIT'>-More application knowledge through hands-on projects.</li>
          <li className='ListIT'>-More practical sessions in their laboratories and workshops under trainers.</li></div>
            <div className='ITDiv'><img className='ItPro_img' src='/imgs/hands.jpg' alt='' /></div>

          </div>
          <div className='itprograms'>
            <div className='ITDivContent'><p className=''><FaTools style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT'>-Better observation skills through exposure visits and industrial visits.</li>
            <li className='ListIT'>-Develop a thorough understanding of job tools, framework techniques, machinery parts etc.</li></p></div>
            <div className='ITDiv'><img className='ItPro_img' src='/imgs/eleIt.jpeg' alt='' /></div>
            <div className='ITDivContent'><p className=''><FaWrench style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT'>Develop soft skills through spoken English classes.</li>
            <li className='ListIT'>-Aids and appliances</li></p></div>
          </div>
        </div>

    </div>
  )
}
export default ITI;