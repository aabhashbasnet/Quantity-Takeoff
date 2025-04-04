import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/Cta';
import Contractors from './pages/WhoWeServe/Contractors';
import SubContractors from './pages/WhoWeServe/SubContractors';
import Suppliers from './pages/WhoWeServe/Suppliers';
import Landscaping from './pages/Industries/Landscaping';
import Paving from './pages/Industries/Paving';
import FacilitiesMaintainance from './pages/Industries/FacilitiesMaintainance';
import GeneralConstruction from './pages/Industries/GeneralConstruction';
import OurMission from './pages/OurMission/OurMission';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import DemoRequestPopup from './pages/DemoRequestPopup/DemoRequestPopup'; // ✅ Import the popup
import BookADemo from './pages/BookADemo/BookADemo'; // ✅ Import the popup
import FreeTrial from './pages/FreeTrial/FreeTrial'; // ✅ Import the popup
import NewProject from './pages/NewProject/NewProject';
import Dashboard from './Project/Dashboard';
import Blog from './pages/Blog/Blog';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import VideoTutorials from './pages/VideoTutorials/VideoTutorials';
import Documentation from './pages/Documentation/Documentation';
import Careers from './pages/Careers/Careers';
import Portfolio from './pages/Portfolio/Portfolio';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
// import NewProjectModal from './Project/NewProjectModal';
// import Upload from './pages/Upload/Upload';


function App() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup only on the homepage ('/') and after 2 seconds
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false); // Hide popup on other pages
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {/* ✅ Show popup only on homepage */}
      {showPopup && <DemoRequestPopup onClose={() => setShowPopup(false)} />}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Benefits />
            <Pricing />
            <Testimonials />
            <CTA />
          </>
        }/>
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/sub-contractors" element={<SubContractors />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/paving" element={<Paving />} />
        <Route path="/facilities-maintainance" element={<FacilitiesMaintainance />} />
        <Route path="/general-construction" element={<GeneralConstruction />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/get-started" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/tutorials" element={<VideoTutorials />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
        <Route path="/terms" element={<TermsOfService />} />
        {/* <Route path="/get-started" element={<NewProjectModal />} /> */}
        {/* <Route path="/upload" element={<Upload />} /> */}
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
