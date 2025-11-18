import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Your existing components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
// import Coordinators from "./components/Coordinators"; // No longer needed in Home
import Gallery from "./components/Gallery";
// import Sponsors from "./components/Sponsors";
import PastPerformers from "./components/PastPerformers"; // You added this
import GalleryPage from "./pages/GalleryPage";
import EventPage from "./pages/EventPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer"; 
import Divider from "./components/Divider";

// --- IMPORT YOUR PAGES ---
import CoordinatorsPage from "./pages/CoordinatorsPage";
// import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";

// --- YOUR HOME COMPONENT ---
function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Remove hash from URL after scrolling
          setTimeout(() => {
            navigate(location.pathname, { replace: true });
          }, 500);
        }
      }, 100);
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Events />
      <Divider />
      <Schedule />
      <Divider />
      <Gallery />
      <Divider />
      <PastPerformers />
      {/* <Divider /> */}
      {/* <Sponsors show="platinum" />  */}
      <Footer />
    </>
  );
}

// --- YOUR MODIFIED APP COMPONENT ---
function App() {
  const [showRegisterButton, setShowRegisterButton] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home');
      const footerSection = document.querySelector('footer');
      
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button after scrolling 25% of hero section
      const shouldShow = scrolled > heroHeight * 0.25;

      // Hide button when footer is visible
      let isFooterVisible = false;
      if (footerSection) {
        const footerTop = footerSection.getBoundingClientRect().top;
        isFooterVisible = footerTop < windowHeight;
      }

      setShowRegisterButton(shouldShow && !isFooterVisible);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8f3e7]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventSlug" element={<EventPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/coordinators" element={<CoordinatorsPage />} />
          {/* <Route path="/sponsors" element={<SponsorsPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      
      {/* --- FLOATING REGISTER BUTTON --- */}
      <a
        href="https://linktr.ee/mridang2k25"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#5C1E15] text-white font-heading px-6 py-3 rounded-full shadow-xl transition-all duration-300 text-lg ${
          showRegisterButton 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:scale-105 active:scale-95`}
      >
        Register Now
      </a>
      
    </Router>
  );
}

export default App;