import React from "react";
import { Link } from "react-router-dom";
import texture from "../assets/texture.webp";
import mandala from "../assets/mandala.webp";

// Gallery images
import { gallery } from "../assets/Gallery/galleryImport";

const GalleryPage = () => {
  const images = [
    { id: 1, src: gallery.img1 },
    { id: 2, src: gallery.img2 },
    { id: 3, src: gallery.img3 },
    { id: 4, src: gallery.img4 },
    { id: 5, src: gallery.img5 },
    { id: 6, src: gallery.img6 },
    { id: 7, src: gallery.img7 },
    { id: 8, src: gallery.img8 },
    { id: 9, src: gallery.img9 },
    { id: 10, src: gallery.img10 },
    { id: 11, src: gallery.img11 },
    { id: 12, src: gallery.img12 },
    { id: 13, src: gallery.img13 },
    { id: 14, src: gallery.img14 },
    { id: 15, src: gallery.img15 },
    { id: 16, src: gallery.img16 },
    { id: 17, src: gallery.img17 },
    { id: 18, src: gallery.img18 },
    { id: 19, src: gallery.img19 },
    { id: 20, src: gallery.img20 },
    { id: 21, src: gallery.img21 },
    { id: 22, src: gallery.img22 },
  ];

  const desktopPositions = ["20%", "40%", "60%", "80%"];
  const mobilePositions = ["15%", "35%", "55%", "75%"];

  return (
    <section
      id="full-gallery"
      className="mt-20 relative py-14 md:py-20 text-[#5C1E15]"
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

      {/* MULTIPLE MANDALAS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* DESKTOP — alternating left/right */}
        {desktopPositions.map((pos, i) => (
          <React.Fragment key={i}>
            <img
              src={mandala}
              className="hidden md:block absolute opacity-15 w-[420px]"
              style={{
                top: pos,
                left: i % 2 === 0 ? "-80px" : "-120px",
                transform: "translateY(-50%)",
              }}
            />
            <img
              src={mandala}
              className="hidden md:block absolute opacity-15 w-[420px]"
              style={{
                top: pos,
                right: i % 2 === 0 ? "-120px" : "-80px",
                transform: "translateY(-50%)",
              }}
            />
          </React.Fragment>
        ))}

        {/* MOBILE — small alternating mandalas */}
        {mobilePositions.map((pos, i) => {
          const isLeft = i % 2 === 0;
          return (
            <img
              key={`m-${i}`}
              src={mandala}
              className="md:hidden absolute opacity-15 w-[160px]"
              style={{
                top: pos,
                [isLeft ? "left" : "right"]: "-40px",
                transform: "translateY(-50%)",
              }}
            />
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-xs text-[#8a5a3d]/70">
            Mridang Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mt-2">
            Mridang Moments 2024
          </h2>

          <p className="text-[#704832] max-w-2xl mx-auto font-serif mt-3">
            A nostalgic walk through last year’s celebration — music, dance, colours, emotions, and memories preserved forever.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {images.map((img) => (
            <div
              key={img.id}
              className="
                rounded-xl shadow-lg shadow-[#5C1E15]/20 
                border border-[#5C1E15]/10 
                overflow-hidden
                hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-500
              "
            >
              <img
                src={img.src}
                alt={`Mridang Gallery ${img.id}`}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
          ))}
        </div>

        {/* Back Button Bottom */}
        <div className="flex justify-center mt-10 pb-6">
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 text-[#5C1E15] hover:text-[#8A5A3D] font-medium transition-colors"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
