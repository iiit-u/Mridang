import React from "react";
import texture from "../assets/texture.webp";
import mandala from "../assets/mandala.webp";
import { performerImages } from "../assets/performers/performers";
// --- Placeholder for Artist Image ---
// Replace this with your actual artist image import, e.g.:
// import headliner from "../assets/performers/headliner2025.jpg";
const currentArtists = [
  {
    name: "Popular Band",
    genre: "Fusion Rock",
    day: "Day 1 • Band",
    image: performerImages.snehi, // <--- Replace with your image variable
  },
  {
    name: "Headlining Artist",
    genre: "Bollywood / Sufi Rock",
    day: "Day 2 • Grand Finale",
    image: performerImages.shahid, // <--- Replace with your image variable
  },
  {
    // --- NEW DJ ENTRY ADDED HERE ---
    name: "DJ Artist",
    genre: "EDM / Bollywood",
    day: "Day 1 • EDM Night",
    image: performerImages.vj,
  },
];

const CurrentArtists = () => {
  return (
    <section
      id="current-artists"
      className="relative py-16 md:py-24 overflow-hidden bg-[#f8f3e7]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>

      {/* Rotating Mandalas (Slightly larger for impact) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <img
          src={mandala}
          alt=""
          className="hidden md:block absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10 w-[600px] animate-spin-slow"
        />
        <img
          src={mandala}
          alt=""
          className="hidden md:block absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-10 w-[600px] animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
            Mridang Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Star Performers
          </h2>

          <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
            Artists who brought the stage alive across the three days of Mridang
            2025.
          </p>
        </div>

        {/* Artist Cards Grid */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {currentArtists.map((artist, idx) => (
            <div
              key={idx}
              className="group relative w-full max-w-[350px] flex flex-col items-center"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[3/4] rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-[#5C1E15]/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(92,30,21,0.3)]">
                {/* The Image */}
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0F0A] via-transparent to-transparent opacity-60"></div>

                {/* Day Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#F8E7D5] text-[#5C1E15] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border border-[#5C1E15]">
                  {artist.day}
                </div>
              </div>

              {/* Artist Name */}
              <div className="text-center mt-8 space-y-1">
                <h3 className="text-3xl font-heading text-[#5C1E15] leading-none">
                  {artist.name}
                </h3>
                <p className="text-[#8A5A3D] font-serif text-lg italic">
                  {artist.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentArtists;
