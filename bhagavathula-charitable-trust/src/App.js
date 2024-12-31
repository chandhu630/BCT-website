import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SupportPage from './Components/SupportPage';
import DesignPage from './Components/TrustAreas/DesignPage';
import ServiceDetails from './Components/ServiceDetails';
import RhSchools from './Components/TrustAreas/Education/RhSchools';
import TribalEd from './Components/TrustAreas/Education/TribalEd';
import ITI from './Components/TrustAreas/SkillDev/ITI';
import SmartCenters from './Components/TrustAreas/SkillDev/SmartCenters';
import Agriculture from "./Components/TrustAreas/Agriculture";
import PWDs from './Components/TrustAreas/PWDs';
// import Community from './Components/TrustAreas/Community';
import Community from './Components/TrustAreas/Community';
import Footer from './Components/Footer';
import LegacyPage from './Components/About/LegacyPage';
import BankDetailsPage from './Components/BankDetailsPage';
import './App.css';
import StaffDirectory from './Components/StaffDirectory';
import VolunteersForm from './Components/VolnteersForm';

function App() {
  const aboutData = {
    about1: { title: "About Area 1", content: "Content for About Area 1" },
    about2: { title: "About Area 2", content: "Content for About Area 2" },
    about3: { title: "About Area 3", content: "Content for About Area 3" },
  };

  const trustAreaData = {
    trust1: { title: "Trust Area 1"},
    trust2: { title: "Trust Area 2" },
    trust3: { title: "Trust Area 3" },
    trust4: { title: "Trust Area 2" },
    trust5: { title: "Trust Area 3" },

  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route
            path="/about/:aboutId"
            element={<DesignPage data={aboutData} />}
          />
          <Route path="/about/legacy" element={<LegacyPage />} /> {/* Route for Residential High School */}
          
          <Route
            path="/trust-areas/:trustId"
            element={<DesignPage data={trustAreaData} />}
          />
          <Route path="/trust-areas/education/rhs" element={<RhSchools />} /> {/* Route for Residential High School */}
          <Route path="/trust-areas/education/tribalEd" element={<TribalEd />} /> {/* Route for Residential High School */}
          
          <Route path="/trust-areas/skill-dev/Iti" element={<ITI />} /> {/* Route for Residential High School */}
          <Route path="/trust-areas/skill-dev/smart-centers" element={<SmartCenters />} /> {/* Route for Residential High School */}
          {/* /trust-areas/trust3 */}
          <Route path="/trust-areas/pwds" element={<PWDs />} /> {/* Route for Residential High School */}
          <Route path="/trust-areas/agri" element={<Agriculture />} /> 
          <Route path="/trust-areas/community" element={<Community />} />
      
          <Route path="/support" element={<SupportPage />} />
          <Route path="/donate/inr" element={<BankDetailsPage />} />
          <Route path="/donate/teacher" element={<StaffDirectory />} />
          
          <Route path="/volunteer" element={<VolunteersForm />} />
       
        </Routes>
        </div>
        {/* <div id='footer'>
          <Footer />
        </div>  */}
      </div>
     
    </Router>
  );
}

export default App;
