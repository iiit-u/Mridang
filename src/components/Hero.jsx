import { useEffect, useState, useRef } from "react";
import texture from "../assets/texture.webp";
import archs from "../assets/archs.webp";
import mandala from "../assets/mandala.webp";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const current = window.scrollY;
        const threshold = 500;
        const clamped = Math.min(current, threshold);
        const newProgress = clamped / threshold;
        if (Math.abs(newProgress - lastScrollRef.current) > 0.001) {
          setScrollProgress(newProgress);
          lastScrollRef.current = newProgress;
        }
        rafRef.current = null;
      });
    };
    const handleResize = () => handleScroll();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const translate = scrollProgress * 40;
  const scale = 1 + scrollProgress * 0.04;
  const fade = 1 - scrollProgress * 0.4;

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center bg-[#f8f3e7] overflow-hidden min-h-[90vh] md:min-h-screen"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
        backgroundPositionY: `${scrollProgress * 120}px`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px]"></div>

      {/* Mandalas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Desktop mandalas */}
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

        {/* Mobile mandalas - multiple copies alternating left/right */}
        {[0, 1, 2, 3, 4].map((index) => {
          const isLeft = index % 2 === 0;
          const topPosition = `${15 + index * 18}%`;
          
          return (
            <img
              key={`hero-mandala-${index}`}
              src={mandala}
              alt="Decorative mandala"
              loading="lazy"
              className={`md:hidden absolute opacity-20 w-[200px]`}
              style={{
                top: topPosition,
                [isLeft ? 'left' : 'right']: 0,
                transform: isLeft 
                  ? 'translateX(-50%) translateY(-50%)' 
                  : 'translateX(50%) translateY(-50%)',
              }}
            />
          );
        })}
      </div>

      {/* Text Content */}
      <div
        className="relative z-10 flex flex-col items-center max-w-5xl w-full gap-5 sm:gap-6 md:gap-8 px-5 will-change-transform"
        style={{
          transform: `translateY(${translate}px) scale(${scale})`,
          opacity: fade,
          transition: "transform 0.1s linear, opacity 0.1s linear",
        }}
      >
        <div className="uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.6em] text-[0.68rem] sm:text-xs text-[#8a5a3d]/80 font-semibold leading-relaxed">
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY UNA
        </div>

        <h1 className="text-[2.3rem] sm:text-5xl md:text-7xl font-heading text-[#5C1E15] tracking-wide leading-tight drop-shadow-[0_6px_12px_rgba(92,30,21,0.2)] px-3">
          <span className="text-[1.8rem] sm:text-5xl md:text-7xl">Welcome to </span><span className="relative whitespace-nowrap">Mridang 2025</span>
        </h1>

        <p className="text-[0.9rem] sm:text-base md:text-lg max-w-3xl text-[#704832] leading-relaxed font-serif px-5 sm:px-0">
A cultural experience that's both divine and dynamic. Mridang 2025 is going full retro. We're celebrating our heritage with a nostalgic twist, filled with soulful rhythms and psychedelic vibes.
        </p>

        <a
          href="#events"
          className="group inline-flex items-center gap-3 px-6 py-3 mt-5 bg-[#5C1E15] text-[#f8f3e7] rounded-full shadow-lg shadow-[#5C1E15]/30 hover:bg-[#8A5A3D] transition-all duration-300 text-sm sm:text-base"
        >
          Explore Events
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f3e7] text-[#5C1E15] group-hover:translate-y-1 transition-transform duration-300">
            ↓
          </span>
        </a>
      </div>

      {/* Bottom Decorative Element */}
      <img
        src={archs}
        alt="archs"
        className="absolute bottom-0 left-0 w-screen object-cover block"
        style={{
          height: "70px", // base for mobile
        }}
      />

      {/* Responsive thickness control */}
      <style>
        {`
          @media (min-width: 640px) {
            img[alt="archs"] {
              height: 100px !important;
            }
          }
          @media (min-width: 1024px) {
            img[alt="archs"] {
              height: 130px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
