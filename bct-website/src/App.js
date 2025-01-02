import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/about";
import Contactus from "./components/Contact/contact";
import CarrierPage from "./components/Carrier/carrier";
import Chatbotpage from "./components/Chatbot/chatbot";
import LegacyPage from "./components/Legacy/legacy";
import BlogCard from "./components/Blogs/blogcard";
import SupportPage from "./components/Support/support";
import Timeline from "./components/TimeLine/timeline";
import MeetOurTeam from "./components/Team/team";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import VolunteersForm from "./components/Volunteer/volunteer";
import DonationCard from "./components/Remaning/donation";
import BankDetailsPage from "./components/BankDetails/bankdetails";
import ImageSlider from "./components/ImageSlider/imageSlider";
import StaffDirectory from "./components/StaffDic/staffDic";
import Program from "./components/Programs/program";
import ServiceDetails from "./components/ServiceDetails/servicedetails";
import BlogDetails from "./components/Blogs/blogcard";
import BlogPage from "./components/Blogs/blog";
import RhSchools from "./components/ThrustAreas/Education/RhSchools";
import TribalEd from "./components/ThrustAreas/Education/TribalEd";
import ITI from "./components/ThrustAreas/SkillDev/ITI";
import SmartCenters from "./components/ThrustAreas/SkillDev/SmartCenters";
import PWDs from "./components/ThrustAreas/PWDs";
import Agriculture from "./components/ThrustAreas/Agriculture";
import Community from "./components/ThrustAreas/Community";
import DesignPage from "./components/ThrustAreas/DesignPage";

function App() {
  const thrustAreaData = {
    trust1: { title: "Trust Area 1" },
    trust2: { title: "Trust Area 2" },
    trust3: { title: "Trust Area 3" },
    trust4: { title: "Trust Area 4" },
    trust5: { title: "Trust Area 5" },
  };

  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/career" element={<CarrierPage />} />
        <Route path="/chatbot" element={<Chatbotpage />} />
        <Route path="/legacy" element={<LegacyPage />} />
        <Route path="/blogcard" element={<BlogCard />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<MeetOurTeam />} />
        <Route path="/volunteer" element={<VolunteersForm />} />
        <Route path="/donation" element={<DonationCard />} />
        <Route path="/bankDetails" element={<BankDetailsPage />} />
        <Route path="/slider" element={<ImageSlider />} />
        <Route path="/staff" element={<StaffDirectory />} />
        <Route path="/service" element={<ServiceDetails />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/trust-areas/:trustId" element={<DesignPage data={thrustAreaData} />} />
        <Route path="/trust-areas/education/rhs" element={<RhSchools />} />
        <Route path="/trust-areas/education/tribalEd" element={<TribalEd />} />
        <Route path="/trust-areas/skill-dev/Iti" element={<ITI />} />
        <Route path="/trust-areas/skill-dev/smart-centers" element={<SmartCenters />} />
        <Route path="/trust-areas/pwds" element={<PWDs />} />
        <Route path="/trust-areas/agri" element={<Agriculture />} />
        <Route path="/trust-areas/community" element={<Community />} />
      </Routes>

      {/* Conditionally render the footer */}
      <ConditionalFooter />
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const hideFooterPaths = ["/"]; // Add paths where footer should be hidden

  // Check if the current path matches any of the paths where footer should be hidden
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return !shouldHideFooter ? <Footer /> : null;
}

export default App;
