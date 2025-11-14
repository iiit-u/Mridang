import React from "react";
import { Link } from "react-router-dom";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";
// Gallery images
import img1 from "../assets/Gallery/1.jpg";
import img2 from "../assets/Gallery/2.jpg";
import img3 from "../assets/Gallery/3.jpg";
import img4 from "../assets/Gallery/4.jpg";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
  ];

  return (
    <section
      id="gallery"
      className="scroll-mt-26 relative py-10 md:py-12 overflow-hidden bg-[#f8f3e7]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      {/* BG Overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 backdrop-blur-[1px] pointer-events-none"></div>

      {/* Mandala Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Desktop */}
        <img
          src={mandala}
          className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[430px]"
        />
        <img
          src={mandala}
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[430px]"
        />

        {/* Mobile */}
        <img
          src={mandala}
          className="md:hidden absolute opacity-15 w-[180px] top-4 left-0 -translate-x-1/2"
        />
        <img
          src={mandala}
          className="md:hidden absolute opacity-15 w-[180px] bottom-4 right-0 translate-x-1/2"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="text-center mb-5 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">Mridang Experience</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">Mridang Gallery 2024</h2>
          <p className="text-[#704832]/85 max-w-2xl mx-auto font-serif text-base">
            Relive the most beautiful, energetic and unforgettable moments from last year's celebration.
          </p>
        </div>


        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Card Fan */}
          <div>
            <div className="relative h-[340px] md:h-[420px] flex items-center justify-center mt-2">
              {galleryImages.map((image, index) => {
                const rotations = [-10, -5, 0, 5];
                const angle = rotations[index % rotations.length];
                const xOffset = index * 10;
                const yOffset = index * 10;
                const scale = 1 - index * 0.05;
                const opacity = 1 - index * 0.12;

                return (
                  <div
                    key={image.id}
                    className="absolute rounded-xl shadow-xl overflow-hidden"
                    style={{
                      width: "78%",
                      height: "78%",
                      transform: `
                        translateX(${xOffset}px)
                        translateY(${yOffset}px)
                        rotate(${angle}deg)
                        scale(${scale})
                      `,
                      zIndex: 20 - index,
                      opacity: opacity,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Gallery image ${image.id}`}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "3/2" }}
                    />
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Highlight Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading text-[#5C1E15] mb-6 text-center md:text-left">
              Mridang 2024 Highlights
            </h3>

            <p className="text-[#704832] font-serif leading-relaxed text-sm md:text-base text-justify md:text-left">
              Mridang 2024 lit up the campus with three unforgettable days of music,
              dance, art, and raw student talent. From the electric energy of DJ Priyank's
              EDM Night to the powerful live sets by Young Blood, every moment captured
              the spirit of celebration. Akhil's soulful performance headlined the fest,
              drawing an overwhelming crowd and creating memories that still echo across
              IIIT Una. Mridang 2024 wasn't just an event — it was an experience that
              brought the entire campus together.
            </p>

             <div className="flex justify-center md:justify-start mt-6">
               <Link
                 to="/gallery"
                 className="group inline-flex items-center gap-3 px-6 py-3 bg-[#5C1E15] text-[#f8f3e7] rounded-full shadow-lg hover:bg-[#8A5A3D] transition-all duration-300 text-sm"
               >
                 View Full Gallery
                 <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f3e7] text-[#5C1E15] group-hover:translate-x-1 transition-transform">
                   →
                 </span>
               </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
