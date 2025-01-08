// import React from 'react';
// import './SmartCenters.css';

// const SmartCenters = () => {
//   return (
//     <div className="smart-programs">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <img src="/imgs/boys.png" alt="BCT TMF Logo" className="main-logo" />
//           <h1>BCT TMF SMART Programs</h1>
//           <h2>Empowering Youth Through Skills Development</h2>
//         </div>
//       </div>

//       {/* Centers Overview */}
//       <div className="centers-overview">
//         <h2>SMART Centers</h2>
//         <div className="centers-content">
//           <div className="centers-text">
//             <p>BCT partners with the Tech Mahindra Foundation, to run 3 SMART centers in Visakhapatnam. These centers focus on upskilling youth from economically weaker sections of the society.</p>
//           </div>
//           <img src="/imgs/group.png" alt="SMART Center" className="center-image" />
//         </div>
//       </div>

//       {/* Origin Story */}
//       <div className="origin-section">
//         <div className="origin-content">
//           <img src="/imgs/field.png" alt="Students Learning" className="origin-image" />
//           <div className="origin-text">
//             <h2>How it started?</h2>
//             <p>When 33 villages got added to the Greater Visakhapatnam Municipal Corporation (GVMC), this peri-urban region was seen to be resource-rich with youth. However, it was seen that these young boys and girls lacked employable skills. BCT thus partnered with the Tech Mahindra Foundation to set up 3 SMART centers in the city.</p>
//           </div>
//         </div>
//       </div>

//       {/* Program Details */}
//       <div className="program-details">
//         <h2>What it does?</h2>
//         <div className="details-content">
//           <div className="details-text">
//             <p>Started in 2014, the centers operate in areas of Dwarakanagar and Gajuwaka, where they focus on upskilling economically backward youth in the region. With employment-oriented learning focused upon, the BCT TMF SMART centers provide short term training programs to high school/ intermediate/ graduate students.</p>
//           </div>
//           <img src="/imgs/kvk.jpeg" alt="Training Session" className="details-image" />
//         </div>
//       </div>

//       {/* Key Features */}
//       <div className="key-features">
//         <h2>Key Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <img src="/imgs/tribalShool.png" alt="Technical Training" className="feature-image" />
//             <div className="feature-content">
//               <h3>Technical Training</h3>
//               <ul>
//                 <li>IT and ICT tools training</li>
//                 <li>Customer Relations & Sales</li>
//                 <li>Technical skills at SMART-T center</li>
//               </ul>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-content">
//               <h3>Skill Development</h3>
//               <ul>
//                 <li>Conversational English</li>
//                 <li>Interpersonal skills</li>
//                 <li>Entrepreneurial skills</li>
//                 <li>NSDC Level 3 skill training</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
    
//     </div>
//   );
// };

// export default SmartCenters;

import './SmartCenters.css';

import { 
    FaTools, 
    FaIndustry, 
    FaUserGraduate, 
    FaWrench,
    FaHandsHelping,
    FaLanguage
} from 'react-icons/fa';

function SmartCenters(){
  return(
    <div>
        <div className="ITIHeaderFlex_smart">
          <div className="ITI_Div_Left_smart">
            <h1>BCT TMF SMART Programs</h1>
            <p>BCT partners with the Tech Mahindra Foundation, to run 3 SMART centers in Visakhapatnam. 
              These centers focus on upskilling youth from economically weaker sections of the society.</p>
          </div>
          <div></div>
        </div>
        <div style={{marginTop:"30px"}} className='AboutIt_smart'>
          <div className='ItImage_smart'>
            <img className='realItimage_smart' src='/imgs/agri/hands.jpg' alt='' />
          </div>
          <div className='AboutContent_smart'>
            <h1>SMART Centers</h1>
            <p>
            In 2014, BCT partnered with the Tech Mahindra Foundation to establish three SMART centers in Visakhapatnam, operating in Dwarakanagar and Gajuwaka.
            These centers focus on upskilling economically disadvantaged youth through short-term training programs designed for high school,
             intermediate, and graduate students. The training emphasizes employment-oriented learning to enhance the participants' employability
             . 
            </p>
            <button className='ItSupport_smart'> Support Us</button>
          </div>
        </div>
        <div className='ITGallery_smart' style={{marginTop:"30px", marginBottom:"30px"}} >
          <h1 style={{textAlign:"center"}}>Key features</h1>
          <div className='itprograms_smart'>
            <div className='ITDiv_smart'><img className='ItPro_img_smart'  src='/imgs/agri/place.jpeg' alt='Swapna' /></div>
            <div className='ITDivContent_smart'>< FaIndustry style={{fontSize:'40px',color:"#EC4342" ,padding:"5px"}} /><p style={{textAlign:"start"}}></p><li className='ListIT_smart'>The SMART centers in Dwarakanagar and Gajuwaka operate with the objectives of providing training in IT and ICT tools.</li>
          <li className='ListIT_smart'>Students learn IT enabled services and Customer Relations & Sales.</li></div>
            <div className='ITDiv_smart'><img className='ItPro_img_smart' src='/imgs/cel.jpeg' alt='' /></div>

          </div>
          <div className='itprograms_smart'>
            <div className='ITDivContent_smart'><p className=''><FaHandsHelping style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT_smart'>Students also learn conversational English and improve interpersonal skills that make them market-ready.</li>
            <li className='ListIT_smart'>The SMART-T (Technical) center at Autonagar imparts technical skills to students.</li></p></div>
            <div className='ITDiv_smart'><img className='ItPro_img_smart' src='/imgs/agri/softsma.jpeg' alt='Kiran' /></div>
            <div className='ITDivContent_smart'><p className=''><FaLanguage style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT_smart'> Finally, entrepreneurial skills are imparted to promote self-employment among them.</li>
            <li className='ListIT_smart'>The students are provided NSDC complying Level 3 skill training on Electrical and Fitter skills, followed by effective placement support as well.</li></p></div>
          </div>
        </div>

    </div>
  )
}
export default SmartCenters;