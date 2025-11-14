import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Coordinators from "./components/Coordinators";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import GalleryPage from "./components/GalleryPage";
import EventPage from "./components/EventPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer"; 
import Divider from "./components/Divider";

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
      <Coordinators />
      <Divider />
      <Gallery />
      <Divider />
      <Sponsors />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8f3e7]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventSlug" element={<EventPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
