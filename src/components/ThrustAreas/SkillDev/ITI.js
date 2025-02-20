

import './ITI.css' ;

import { 
    FaTools, 
    FaIndustry, 
    FaUserGraduate, 
    FaWrench,
    FaHandsHelping,
    FaLanguage
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

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
            <img className='realItimage' src='/smartiti/teaching.jpg' alt='' />
          </div>
          <div className='AboutContent'>
            <h1>About ITI</h1>
            <p style={{marginBottom:"40px"}}>
            Run under the CTS scheme of NCVT, the BCT ITI trains 100 students annually in Electrician and Fitter skills, ensuring strong job placements.
            Aspiring to become a leading ITI college, it plans to introduce market-relevant short-term programs. 
            These initiatives aim to attract more girl students, promoting inclusivity.
            </p>
            <Link 
              to="/support-us" 
             className='ItSupport'
             
            >
              Support Us
            </Link>
          </div>
        </div>
        <div className='ITGallery'style={{marginTop:"30px", marginBottom:"30px"}} >
          <h1 style={{textAlign:"center"}}>Training programs</h1>
          <div className='itprograms'>
            <div className='ITDiv'><img className='ItPro_img'  src='/smartiti/ramshit.jpg' alt='' /></div>
            <div className='ITDivContent'>< FaUserGraduate style={{fontSize:'40px',color:"#EC4342" ,padding:"5px"}} /><p style={{textAlign:"start"}}><li className='ListIT'>-More application knowledge through hands-on projects.</li>
          <li className='ListIT'>-More practical sessions in their laboratories and workshops under trainers.</li></p></div>
            <div className='ITDiv'><img className='ItPro_img' src='/smartiti/hands.jpg' alt='' /></div>

          </div>
          <div className='itprograms itprograms2'>
            <div className='ITDivContent'><p className='paragraph'><FaTools style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT'>-Better observation skills through exposure visits and industrial visits.</li>
            <li className='ListIT'>-Develop a thorough understanding of job tools, framework techniques, machinery parts etc.</li></p></div>
            <div className='ITDiv'><img className='ItPro_img' src='/smartiti/eleIt.jpeg' alt='' style={{width:"100%",height:"270px"}} /></div>
            <div className='ITDivContent'><p className=''><FaWrench style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT'>Develop soft skills through spoken English classes.</li>
            <li className='ListIT'>-Aids and appliances</li></p></div>
          </div>
        </div>

    </div>
  )
}
export default ITI;