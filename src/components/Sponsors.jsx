import React, { useState } from "react";
import { Link } from "react-router-dom";
import texture from "../assets/texture.webp";
import mandala from "../assets/mandala.webp";

// --- Past Sponsor Logos (Your existing imports) ---
import { sponsors } from "../assets/SponsorLogo/sponsorImport";

// --- Placeholder for new logos ---
const placeholderLogo = "https://placehold.co/400x300/f8f3e7/704832?text=Sponsor+Logo&font=serif";


// --- 1. CURRENT SPONSORS ---
const currentSponsors2025 = [
  { name: "Brand Integration", logo: sponsors.hunar, level: "platinum", website: "https://www.google.com" },
  // { name: "Curated By", logo: placeholderLogo, level: "platinum" },
  { name: "Powered By", logo: sponsors.unstop, level: "gold", website: "https://www.unstop.com" },
  // { name: "Our Partner 1", logo: placeholderLogo, level: "partner", website: "https://www.google.com" },
  // { name: "Our Partner 2", logo: placeholderLogo, level: "partner" },
];

// --- 2. PAST SPONSORS ---
const pastSponsors2024 = [
  { name: "State Bank of India", logo: sponsors.stateBankOfIndia, website: "https://www.onlinesbi.sbi" },
  { name: "HPMC", logo: sponsors.hpmc, website: "https://hpmc.in" },
  { name: "Kwikpic", logo: sponsors.kwikpic, website: "https://kwikpic.in" },
  { name: "Mugafi", logo: sponsors.mugafi },
  { name: "Chai Booze", logo: sponsors.chaiBooze },
  { name: "Chai Sutta Bar", logo: sponsors.chaiSuttaBar, website: "https://chaisuttabarindia.com" },
  { name: "Iskcon Chandigarh", logo: sponsors.iskconChandigarh, website: "https://www.iskconchandigarh.com" },
  { name: "Mr Burger", logo: sponsors.mrBurger },
  { name: "Potato Hut", logo: sponsors.potatoHut },
  { name: "The OG Vibe", logo: sponsors.theOGVibe },
];


// --- 3. UPDATED SPONSOR CARD (Name Above Logo) ---
const SponsorCard = ({ sponsor }) => {
  let sizeClasses = "";
  let textClasses = "text-xs md:text-sm";

  switch (sponsor.level) {
    case 'title':
      sizeClasses = "h-40 md:h-56 max-w-[350px]";
      textClasses = "text-sm md:text-base";
      break;
    case 'platinum':
      sizeClasses = "h-36 md:h-48 max-w-[300px]";
      textClasses = "text-sm md:text-base";
      break;
    case 'gold':
      sizeClasses = "h-32 md:h-40 max-w-[250px]";
      break;
    case 'partner':
      sizeClasses = "h-28 md:h-32 max-w-[200px]";
      break;
    default:
      sizeClasses = "h-32 md:h-40 max-w-[250px]";
      break;
  }

  const cardContent = (
    <>
      {/* NAME IS NOW FIRST (ABOVE) */}
      <p
        className={`text-[#704832] font-serif text-center opacity-80 mb-3 ${textClasses}`}
      >
        {sponsor.name}
      </p>
      
      {/* LOGO IS NOW SECOND (BELOW) */}
      <div className={`flex items-center justify-center ${sizeClasses}`}>
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-full w-auto object-contain rounded-lg"
        />
      </div>
    </>
  );

  const commonClasses = "flex-shrink-0 flex flex-col items-center justify-center px-4 transition-transform";

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} hover:scale-105`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={commonClasses}>
      {cardContent}
    </div>
  );
};


// --- 4. LAYOUT ---
const CurrentSponsorsLayout = ({ sponsors }) => {
  const titleSponsors = sponsors.filter(s => s.level === 'title');
  const platinumSponsors = sponsors.filter(s => s.level === 'platinum');
  const goldSponsors = sponsors.filter(s => s.level === 'gold');
  const otherSponsors = sponsors.filter(s => s.level === 'partner');

  return (
    <div className="flex flex-col items-center pt-6 pb-10">
      
      {titleSponsors.length > 0 && (
        <div className="mb-12 w-full">
          <div className="flex justify-center gap-12">
            {titleSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {platinumSponsors.length > 0 && (
        <div className="mb-12 w-full">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {platinumSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {goldSponsors.length > 0 && (
        <div className="mb-12 w-full">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {goldSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}

      {otherSponsors.length > 0 && (
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {otherSponsors.map(s => <SponsorCard key={s.name} sponsor={s} />)}
          </div>
        </div>
      )}
    </div>
  );
};


// --- 5. MAIN SPONSORS COMPONENT ---
const Sponsors = ({ show }) => {
  const [view, setView] = useState("current");

  if (show === "platinum") {
    const homeSponsors = currentSponsors2025.filter(
      (s) => s.level === "title" || s.level === "platinum" || s.level === "gold"
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