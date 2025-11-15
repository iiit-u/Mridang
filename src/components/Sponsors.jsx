import React, { useState } from "react";
import { Link } from "react-router-dom";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

// --- Past Sponsor Logos (Your existing imports) ---
import chaiBooze from "../assets/SponsorLogo/Chai Booze.jpg";
import chaiSuttaBar from "../assets/SponsorLogo/Chai Sutta Bar.jpg";
import hpmc from "../assets/SponsorLogo/HPMC.jpg";
import iskconChandigarh from "../assets/SponsorLogo/Iskcon Chandigarh.jpg";
import kwikpic from "../assets/SponsorLogo/Kwikpic.jpg";
import mrBurger from "../assets/SponsorLogo/Mr Burger.jpg";
import mugafi from "../assets/SponsorLogo/Mugafi.jpg";
import potatoHut from "../assets/SponsorLogo/Potato Hut.jpg";
import stateBankOfIndia from "../assets/SponsorLogo/State Bank of India.jpg";
import theOGVibe from "../assets/SponsorLogo/The OG Vibe.jpg";

// --- Placeholder for new logos ---
const placeholderLogo = "https://placehold.co/400x300/f8f3e7/704832?text=Sponsor+Logo&font=serif";


// --- 1. UPDATED CURRENT SPONSORS (with website) ---
const currentSponsors2025 = [
  { name: "Main Title Sponsor", logo: placeholderLogo, level: "title", website: "https://www.google.com" }, // <-- ADDED
  { name: "Platinum Sponsor 1", logo: placeholderLogo, level: "platinum", website: "https://www.google.com" }, // <-- ADDED
  { name: "Platinum Sponsor 2", logo: placeholderLogo, level: "platinum", website: "https://www.google.com" }, // <-- ADDED
  { name: "Gold Sponsor 1", logo: placeholderLogo, level: "gold", website: "https://www.google.com" }, // <-- ADDED
  { name: "Gold Sponsor 2", logo: placeholderLogo, level: "gold" }, // <-- No website, won't be a link
  { name: "Gold Sponsor 3", logo: placeholderLogo, level: "gold", website: "https://www.google.com" }, // <-- ADDED
  { name: "Our Partner 1", logo: placeholderLogo, level: "partner", website: "https://www.google.com" }, // <-- ADDED
  { name: "Our Partner 2", logo: placeholderLogo, level: "partner" }, // <-- No website
];

// --- 2. UPDATED PAST SPONSORS (with website) ---
const pastSponsors2024 = [
  { name: "State Bank of India", logo: stateBankOfIndia, website: "https://www.onlinesbi.sbi" }, // <-- ADDED
  { name: "HPMC", logo: hpmc, website: "https://hpmc.in" }, // <-- ADDED
  { name: "Kwikpic", logo: kwikpic, website: "https://kwikpic.in" }, // <-- ADDED
  { name: "Mugafi", logo: mugafi }, // <-- No website
  { name: "Chai Booze", logo: chaiBooze }, // <-- No website
  { name: "Chai Sutta Bar", logo: chaiSuttaBar, website: "https://chaisuttabarindia.com" }, // <-- ADDED
  { name: "Iskcon Chandigarh", logo: iskconChandigarh, website: "https://www.iskconchandigarh.com" }, // <-- ADDED
  { name: "Mr Burger", logo: mrBurger }, // <-- No website
  { name: "Potato Hut", logo: potatoHut }, // <-- No website
  { name: "The OG Vibe", logo: theOGVibe }, // <-- No website
];


// --- 3. UPGRADED "SMART" SPONSOR CARD ---
// This component now conditionally renders an <a> tag
const SponsorCard = ({ sponsor }) => {
  let sizeClasses = "";
  let textClasses = "text-xs md:text-sm"; // Default text size

  switch (sponsor.level) {
    case 'title':
      sizeClasses = "h-40 md:h-56 max-w-[350px]"; // Largest
      textClasses = "text-sm md:text-base";
      break;
    case 'platinum':
      sizeClasses = "h-36 md:h-48 max-w-[300px]"; // Large
      textClasses = "text-sm md:text-base";
      break;
    case 'gold':
      sizeClasses = "h-32 md:h-40 max-w-[250px]"; // Medium
      break;
    case 'partner':
      sizeClasses = "h-28 md:h-32 max-w-[200px]"; // Small
      break;
    default:
      // This will apply to all PAST sponsors in the marquee
      sizeClasses = "h-32 md:h-40 max-w-[250px]";
      break;
  }

  // This is the content (image + name)
  const cardContent = (
    <>
      <div className={`flex items-center justify-center mb-4 ${sizeClasses}`}>
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-full w-auto object-contain rounded-lg"
        />
      </div>
      <p
        className={`text-[#704832] font-serif text-center opacity-80 ${textClasses}`}
      >
        {sponsor.name}
      </p>
    </>
  );

  // Define common classes
  const commonClasses = "flex-shrink-0 flex flex-col items-center justify-center px-4 transition-transform";

  // If a website URL exists, wrap the content in a link
  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
        className={`${commonClasses} hover:scale-105`} // Add hover effect only to links
      >
        {cardContent}
      </a>
    );
  }

  // If no website, just render the <div>
  return (
    <div className={commonClasses}>
      {cardContent}
    </div>
  );
};


// --- 4. NEW HIERARCHICAL LAYOUT COMPONENT ---
// (This component remains unchanged from before)
const CurrentSponsorsLayout = ({ sponsors }) => {
  const titleSponsors = sponsors.filter(s => s.level === 'title');
  const platinumSponsors = sponsors.filter(s => s.level === 'platinum');
  const goldSponsors = sponsors.filter(s => s.level === 'gold');
  const otherSponsors = sponsors.filter(s => s.level === 'partner');

  return (
    <div className="flex flex-col items-center pt-6 pb-10">
      
      {/* Title Sponsor */}
      {titleSponsors.length > 0 && (
        <div className="mb-10 w-full">
          <h3 className="text-center text-3xl font-heading text-[#5C1E15] mb-8">Title Sponsor</h3>
          <div className="flex justify-center gap-12">
            {titleSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {/* Platinum Sponsors */}
      {platinumSponsors.length > 0 && (
        <div className="mb-10 w-full">
          <h3 className="text-center text-3xl font-heading text-[#5C1E15] mb-8">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {platinumSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {/* Gold Sponsors */}
      {goldSponsors.length > 0 && (
        <div className="mb-10 w-full">
          <h3 className="text-center text-2xl font-heading text-[#5C1E15] mb-8">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {goldSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {/* Other Sponsors */}
      {otherSponsors.length > 0 && (
        <div className="w-full">
          <h3 className="text-center text-2xl font-heading text-[#5C1E15] mb-8">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {otherSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}
    </div>
  );
};


// --- 5. MAIN SPONSORS COMPONENT (PUTTING IT ALL TOGETHER) ---
// (This component remains unchanged from before)
const Sponsors = ({ show }) => {
  const [view, setView] = useState("current");

  // --- HOMEPAGE VIEW (Title + Platinum only) ---
  if (show === "platinum") {
    const homeSponsors = currentSponsors2025.filter(
      (s) => s.level === "title" || s.level === "platinum"
    );

    if (homeSponsors.length === 0) {
      return null;
    }

    return (
      <section
        id="sponsors"
        className="relative scroll-mt-26 py-10 md:py-12 overflow-hidden bg-[#f8f3e7]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
          backgroundBlendMode: "multiply",
          backgroundColor: "#f8f0e3",
        }}
      >
        <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]" />
          <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">
              Our Esteemed Supporters
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
              Mridang 2025 Sponsors
            </h2>
          </div>

          <CurrentSponsorsLayout sponsors={homeSponsors} />
          
          <div className="text-center mt-6 md:mt-10">
            <Link
              to="/sponsors"
              className="inline-block bg-[#5C1E15] text-white font-heading px-8 py-3 rounded-md shadow-lg transition-transform hover:scale-105 active:scale-95 text-lg"
            >
              See All Sponsors
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // --- FULL SPONSORS PAGE VIEW (with Toggle) ---
  const duplicatedPastSponsors = [...pastSponsors2024, ...pastSponsors2024, ...pastSponsors2024];

  return (
    <section
      id="sponsors"
      className="relative scroll-mt-26 py-10 md:py-12 overflow-hidden bg-[#f8f3e7] min-h-[60vh]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]" />
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-10 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">
            Proud Collaborators
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Our Sponsors
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
          <button
            onClick={() => setView("current")}
            className={`font-heading px-6 py-2 md:px-8 md:py-3 rounded-md text-lg transition-all duration-30all ${
              view === "current"
                ? "bg-[#5C1E15] text-white shadow-lg scale-105"
                : "bg-[#f8f3e7] text-[#704832] shadow-md hover:bg-[#eaddc7]"
            }`}
          >
            Mridang 2025
          </button>
          <button
            onClick={() => setView("past")}
            className={`font-heading px-6 py-2 md:px-8 md:py-3 rounded-md text-lg transition-all duration-300 ${
              view === "past"
                ? "bg-[#5C1E15] text-white shadow-lg scale-105"
                : "bg-[#f8f3e7] text-[#704832] shadow-md hover:bg-[#eaddc7]"
            }`}
          >
            Past Sponsors
          </button>
        </div>

        {view === "current" && (
          <div className="animate-fade-in">
            {currentSponsors2025.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-heading text-[#5C1E15] mb-4">
                  Sponsors for Mridang 2025 Coming Soon!
                </h3>
                <p className="text-[#704832]/85 font-serif text-base max-w-xl mx-auto">
                  We are actively partnering with amazing brands for our upcoming fest.
                </p>
              </div>
            ) : (
              <CurrentSponsorsLayout sponsors={currentSponsors2025} />
            )}
          </div>
        )}

        {view === "past" && (
          <div className="animate-fade-in">
            <h3 className="text-center text-2xl md:text-3xl font-heading text-[#5C1E15] leading-tight mb-8">
              Mridang 2024 Sponsors
            </h3>
            <div className="relative overflow-hidden pt-6 pb-10 sponsors-container">
              <div className="sponsors-track flex items-center gap-4 md:gap-8">
                {duplicatedPastSponsors.map((s, idx) => (
                  <SponsorCard key={idx} sponsor={s} />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-6 md:mt-10">
              <p className="text-[#704832]/85 font-serif text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                We extend our heartfelt gratitude to all our past sponsors for
                their invaluable support in making Mridang 2024 a resounding success.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Styles for Marquee & Fade-in */}
      <style>{`
        .sponsors-container {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
        .sponsors-track {
          animation: slideSponsors 100s linear infinite;
          will-change: transform;
          width: fit-content;
          padding: 10px 0;
        }
        @keyframes slideSponsors {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;