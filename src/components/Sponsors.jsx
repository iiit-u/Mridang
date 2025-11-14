import React from "react";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

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

const sponsors = [
  { name: "Chai Booze", logo: chaiBooze },
  { name: "Chai Sutta Bar", logo: chaiSuttaBar },
  { name: "HPMC", logo: hpmc },
  { name: "Iskcon Chandigarh", logo: iskconChandigarh },
  { name: "Kwikpic", logo: kwikpic },
  { name: "Mr Burger", logo: mrBurger },
  { name: "Mugafi", logo: mugafi },
  { name: "Potato Hut", logo: potatoHut },
  { name: "State Bank of India", logo: stateBankOfIndia },
  { name: "The OG Vibe", logo: theOGVibe },
  { name: "Chai Booze", logo: chaiBooze },
  { name: "Chai Sutta Bar", logo: chaiSuttaBar },
  { name: "HPMC", logo: hpmc },
  { name: "Iskcon Chandigarh", logo: iskconChandigarh },
  { name: "Kwikpic", logo: kwikpic },
  { name: "Mr Burger", logo: mrBurger },
  { name: "Mugafi", logo: mugafi },
  { name: "Potato Hut", logo: potatoHut },
  { name: "State Bank of India", logo: stateBankOfIndia },
  { name: "The OG Vibe", logo: theOGVibe },
  { name: "Chai Booze", logo: chaiBooze },
  { name: "Chai Sutta Bar", logo: chaiSuttaBar },
  { name: "HPMC", logo: hpmc },
  { name: "Iskcon Chandigarh", logo: iskconChandigarh },
  { name: "Kwikpic", logo: kwikpic },
  { name: "Mr Burger", logo: mrBurger },
  { name: "Mugafi", logo: mugafi },
  { name: "Potato Hut", logo: potatoHut },
  { name: "State Bank of India", logo: stateBankOfIndia },
  { name: "The OG Vibe", logo: theOGVibe },
  { name: "Chai Booze", logo: chaiBooze },
  { name: "Chai Sutta Bar", logo: chaiSuttaBar },
  { name: "HPMC", logo: hpmc },
  { name: "Iskcon Chandigarh", logo: iskconChandigarh },
  { name: "Kwikpic", logo: kwikpic },
  { name: "Mr Burger", logo: mrBurger },
  { name: "Mugafi", logo: mugafi },
  { name: "Potato Hut", logo: potatoHut },
  { name: "State Bank of India", logo: stateBankOfIndia },
  { name: "The OG Vibe", logo: theOGVibe },
];

const Sponsors = () => {
  const duplicated = [...sponsors, ...sponsors];

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
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>

      {/* Mandalas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <img
          src={mandala}
          alt="Decorative mandala"
          loading="lazy"
          className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]"
        />
        <img
          src={mandala}
          alt="Decorative mandala"
          loading="lazy"
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]"
        />

        {/* Mobile decorative mandalas */}
        {[0, 1, 2, 3, 4].map((i) => {
          const isLeft = i % 2 === 0;
          return (
            <img
              key={i}
              src={mandala}
              alt=""
              className="md:hidden absolute opacity-20 w-[200px]"
              style={{
                top: `${15 + i * 18}%`,
                [isLeft ? "left" : "right"]: 0,
                transform: isLeft
                  ? "translateX(-50%) translateY(-50%)"
                  : "translateX(50%) translateY(-50%)",
              }}
            />
          );
        })}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading Section (unchanged) */}
        <div className="text-center mb-12 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">
            Proud Collaborators
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Our Past Sponsors
          </h2>
          <p className="text-[#704832]/85 max-w-2xl mx-auto font-serif text-base">
            Partners who made Mridang 2024 possible by supporting our cultural celebration.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden pt-6 pb-10 sponsors-container">
          {/* Sliding Track */}
          <div className="sponsors-track flex items-center gap-4 md:gap-8">
            {duplicated.map((s, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center justify-center px-6 md:px-10"
              >
                {/* Larger Logos */}
                <div className="h-32 md:h-40 flex items-center justify-center mb-4">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-full w-auto object-contain rounded-lg"
                  />
                </div>

                {/* Names */}
                <p className="text-[#704832] text-xs md:text-sm font-serif text-center opacity-80">
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Description */}
        <div className="text-center mt-6 md:mt-10">
          <p className="text-[#704832]/85 font-serif text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We extend our heartfelt gratitude to all our sponsors for their invaluable support in making
            Mridang 2024 a resounding success. Their contribution brought unforgettable moments and
            strengthened the cultural spirit of our celebration.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .sponsors-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        .sponsors-track {
          animation: slideSponsors 120s linear infinite;
          will-change: transform;
          width: fit-content;
          padding: 10px 0;
        }

        @keyframes slideSponsors {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
