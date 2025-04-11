
import './SmartCenters.css';
import { 
    FaTools, 
    FaIndustry, 
    FaUserGraduate, 
    FaWrench,
    FaHandsHelping,
    FaLanguage
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        <div style={{marginTop:"30px",marginBottom:"60px"}} className='AboutIt_smart'>
          <div className='ItImage_smart'>
            <img className='realItimage_smart' src='/smartiti/handsit.jpeg' alt='' />
          </div>
          <div className='AboutContent_smart'>
            <h1> SMART Centers</h1>
            <p style={{marginBottom:"40px"}}>
            In 2014, BCT partnered with the Tech Mahindra Foundation to establish three SMART centers in Visakhapatnam, operating in Dwarakanagar and Gajuwaka.
            These centers focus on upskilling economically disadvantaged youth through short-term training programs designed for high school,
             intermediate, and graduate students. The training emphasizes employment-oriented learning to enhance the participants' employability
             . 
            </p>

            {/* <Link 
              to="/support-us" 
              className='ItSupport_smart'
            >
              Support Us
            </Link> */}
          </div>
        </div>
        <div className='ITGallery_smart' style={{marginTop:"30px", marginBottom:"30px"}} >
          <h1 style={{textAlign:"center"}}>Key features</h1>
          <div className='itprograms_smart'>
            <div className='ITDiv_smart' ><img className='ItPro_img_smart'  src='/smartiti/place.jpeg' alt='' /></div>
            <div className='ITDivContent_smart' >< FaIndustry style={{fontSize:'40px',color:"#EC4342" ,padding:"5px"}} /><p style={{textAlign:"start"}}><li className='ListIT_smart'>The SMART centers in Dwarakanagar and Gajuwaka operate with the objectives of providing training in IT and ICT tools.</li>
            <li className='ListIT_smart'>Students learn IT enabled services and Customer Relations & Sales.</li></p></div>
            <div className='ITDiv_smart'><img className='ItPro_img_smart' src='/imgs/gajuwaka2.jpeg' alt='' /></div>
          </div>
          <div className='itprograms_smart'>
            <div className='ITDivContent_smart'><p className=''><FaHandsHelping style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT_smart'>Students also learn conversational English and improve interpersonal skills that make them market-ready.</li>
            <li className='ListIT_smart'>The SMART-T (Technical) center at Autonagar imparts technical skills to students.</li></p></div>
            <div className='ITDiv_smart'><img className='ItPro_img_smart' src='/imgs/gajuwaka1.jpeg' alt='' /></div>
            <div className='ITDivContent_smart'><p className=''><FaLanguage style={{fontSize:'40px',color:"#EC4342",padding:"5px"}}/><li className='ListIT_smart'> Finally, entrepreneurial skills are imparted to promote self-employment among them.</li>
            <li className='ListIT_smart'>The students are provided NSDC complying Level 3 skill training on Electrical and Fitter skills, followed by effective placement support as well.</li></p></div>
          </div>
        </div>

    </div>
  )
}
export default SmartCenters;
