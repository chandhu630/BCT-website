import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

import About from './components/About/about';
import LegacyPage from "./components/Legacy/legacy";
import Timeline from "./components/TimeLine/timeline";
import Team from './components/Team/team';

import RhSchools from './components/ThrustAreas/Education/RhSchools';
import TribalEd from './components/ThrustAreas/Education/TribalEd';
import ITI from './components/ThrustAreas/SkillDev/ITI';
import SmartCenters from './components/ThrustAreas/SkillDev/SmartCenters';
import Agriculture from './components/ThrustAreas/Agriculture';
import Community from './components/ThrustAreas/Community';
import PWDs from './components/ThrustAreas/PWDs';

import Career from './components/Career/careers';
import Contact from './components/Contact/contact';
import Blog from './components/Blogs/blog';

import SupportPage from './components/Support/SupportPage';
import BankDetailsPage from './components/Support/BankDetails/BankDetailsPage';
import StaffDirectory from './components/Support/StaffDirectory/StaffDirectory';
import VolunteersForm from './components/Support/VolunteerSupport/VolnteersForm';
import DesignPage from './components/ThrustAreas/DesignPage';
import ServiceDetails from "./components/ServiceDetails/servicedetails";

function App() {
  const thrustAreaData = {
    trust1: { title: "Trust Area 1" },
    trust2: { title: "Trust Area 2" },
    trust3: { title: "Trust Area 3" },
    trust4: { title: "Trust Area 4" },
    trust5: { title: "Trust Area 5" },
  };

  const aboutData = {
    key1: "About information 1",
    key2: "About information 2",
  };

  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:aboutId" element={<DesignPage data={aboutData} />} />
        <Route path="/legacy" element={<LegacyPage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trust-areas/:trustId" element={<DesignPage data={thrustAreaData} />} />
        <Route path="/trust-areas/education/rhs" element={<RhSchools />} />
        <Route path="/trust-areas/education/tribalEd" element={<TribalEd />} />
        <Route path="/trust-areas/skill-dev/Iti" element={<ITI />} />
        <Route path="/trust-areas/skill-dev/smart-centers" element={<SmartCenters />} />
        <Route path="/trust-areas/pwds" element={<PWDs />} />
        <Route path="/trust-areas/agri" element={<Agriculture />} />
        <Route path="/trust-areas/community" element={<Community />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/donate/inr" element={<BankDetailsPage />} />
        <Route path="/donate/teacher" element={<StaffDirectory />} />
        <Route path="/volunteer" element={<VolunteersForm />} />
      </Routes>

      {/* Conditionally render the footer */}
      <ConditionalFooter />
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const hideFooterPaths = ["/"]; // Add paths where footer should be hidden
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  return !shouldHideFooter ? <Footer /> : null;
}

export default App;
