import React from "react";
import { performerImages } from "../assets/performers/performers.js";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

const performersList = [
  { name: "Amrit Maan", image: performerImages.amrit },
  { name: "Akhil", image: performerImages.akhil },
  { name: "DJ Priyank", image: performerImages.priyank },
  { name: "YoungBlood", image: performerImages.youngblood },
];

const duplicatedPerformers = [...performersList, ...performersList];

const PastPerformers = () => {
  return (
    <section
      id="past-performers"
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
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]" />
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 space-y-2 px-4">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">
            Glimpses of the Past
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Our Past Performers
          </h2>
          <p className="text-[#704832]/85 max-w-2xl mx-auto font-serif text-base">
            The stars who have graced the Mridang stage.
          </p>
        </div>

        {/* --- Scroller --- */}
        <div className="relative overflow-hidden pt-6 pb-10 scroller-container">
          {/* Sliding Track */}
          <div className="scroller-track flex items-center gap-8 md:gap-12">
            {duplicatedPerformers.map((performer, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center justify-center w-[250px] md:w-[300px] group" // Added 'group' class here
              >
                {/* Performer Image Card */}
                <div className="h-[300px] w-[250px] md:h-[350px] md:w-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 transition-transform duration-300 group-hover:scale-105"> {/* Added transition and hover scale */}
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <p className="text-[#704832] text-lg font-heading text-center opacity-90 mt-4">
                  {performer.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Styles for the scroller --- */}
      <style>{`
        .scroller-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .scroller-track {
          animation: slidePerformer 60s linear infinite; /* You can change 60s to make it faster/slower */
          will-change: transform;
          width: fit-content;
          padding: 10px 0;
        }

        @keyframes slidePerformer {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PastPerformers;