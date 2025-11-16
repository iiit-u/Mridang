import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

const eventsList = [
  { title: "Raag Samarpan", description: "Soul-stirring solos and duets celebrating melodies of devotion.", link: "raag-samarpan" },
  { title: "Qayamat-e-Jungle", description: "A heartfelt stage performance blending contemporary narratives with emotion.", link: "skit" },
  { title: "Alfaaz", description: "An evening of poetry adorned with words strung like pearls.", link: "kavi-sammelan" },
  { title: "Mehfil-e-Mridang", description: "Sufi-inspired harmonies that ignite the spirit of the mehfil.", link: "qawwali" },
  { title: "Murder Mystery", description: "Unravel high-stakes mysteries in a battle of sharp instincts.", link: "mystery-detective-battle" },
  { title: "Plot Twist", description: "A triple treat of humor, creative scripts, and electric debates.", link: "memefest-script-writing-debate" },
  { title: "Ad-war-tize", description: "A creative showdown crafting captivating advertising videos.", link: "adwartize" },
  { title: "Student Stalls", description: "A vibrant marketplace showcasing student innovation and creations.", link: "student-stalls" },
  { title: "Dancers' Den", description: "A dance battleground pulsing with rhythm, energy, and flair.", link: "dancers-den" },
  { title: "Fashion Show", description: "A runway spectacle fusing cultural elegance with modern style.", link: "fashion-show" },
  { title: "FIFA", description: "Digital football thrills take over the esports arena.", link: "fifa" },
  { title: "Kala Darbaar", description: "Emotions etched on canvas for an unforgettable art journey.", link: "art-exhibition" },
  { title: "Rap Showcase", description: "A night drenched in rhyme, rhythm, and raw rap energy.", link: "rap-showcase" },
  { title: "Battle of Bands", description: "Live bands go head-to-head in an electrifying musical clash.", link: "battle-of-bands" },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const isMobile = window.innerWidth < 768;

  // -----------------------------
  // AUTO SLIDE
  // -----------------------------
  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventsList.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + eventsList.length) % eventsList.length);
    startAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % eventsList.length);
    startAutoPlay();
  };

  const goToSlide = (i) => {
    setCurrentIndex(i);
    startAutoPlay();
  };

  // -----------------------------
  // SWIPE SUPPORT FOR MOBILE
  // -----------------------------
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % eventsList.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + eventsList.length) % eventsList.length);
      }
      startAutoPlay();
    }
  };

  // -----------------------------
  // SIMPLE TRADITIONAL SLIDE MOVEMENT
  // -----------------------------
  const getCardStyle = (index) => {
    const diff = index - currentIndex;

    const GAP_1 = isMobile ? 110 : 75;
    const GAP_2 = isMobile ? 140 : 110;

    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    }

    if (Math.abs(diff) === 1) {
      return {
        transform: `translateX(${diff * GAP_1}%) scale(0.93)`,
        opacity: 0.55,
        zIndex: 20,
      };
    }

    return {
      transform: `translateX(${diff * GAP_2}%) scale(0.85)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  return (
    <section
      id="events"
      className="scroll-mt-26 relative py-10 md:py-12 bg-[#f8f3e7] overflow-x-hidden"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none backdrop-blur-[1px] z-0"></div>

      {/* Mandalas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {/* ... mandala images ... */}
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]" />
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]" />
        {[0, 1, 2, 3, 4].map((index) => {
            const isLeft = index % 2 === 0;
            const topPosition = `${15 + index * 18}%`;
            return (
                <img key={`events-mandala-${index}`} src={mandala} alt="Decorative mandala" loading="lazy" className={`md:hidden absolute opacity-20 w-[200px]`} style={{ top: topPosition, [isLeft ? 'left' : 'right']: 0, transform: isLeft ? 'translateX(-50%) translateY(-50%)' : 'translateX(50%) translateY(-50%)' }} />
            );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="text-center mb-5 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8A5A3D]/70">Mridang Experience</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">Upcoming Event Highlights</h2>
          <p className="text-[#704832]/85 max-w-2xl mx-auto font-serif text-base">
            Whether you're here to perform, compete, or just soak it all in, Mridang is a mix of culture, fun, and good energy.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
          className="relative h-[360px] sm:h-[380px] flex items-center justify-center overflow-visible max-w-full"
        >
          <div className="relative w-full max-w-sm h-[300px] sm:h-[330px] mx-auto overflow-visible">
            {eventsList.map((event, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={style}
                >
                  <div
                    className={`relative h-full rounded-3xl border border-[#5C1E15]/10 bg-[#f8f4e7] shadow-xl overflow-visible transition-all ${isActive ? "shadow-xl" : "shadow-md"
                      }`}
                  >
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                      style={{
                        backgroundImage: `url(${texture})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "320px",
                      }}
                    ></div>

                    <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <span className="text-xs uppercase tracking-[0.5em] text-[#8a5a3d]/70">Event {String(index + 1).padStart(2, "0")}</span>
                        <h3 className="text-2xl font-heading text-[#5C1E15]">{event.title}</h3>
                        <p className="text-[#704832] font-serif text-sm leading-relaxed">{event.description}</p>
                      </div>

                      {/* --- START: MODIFIED SECTION --- */}
                      {isActive && (
                        <div className="flex items-center justify-between">
                          <Link to={`/events/${event.link}`} className="group inline-flex items-center gap-2 text-[#5C1E15] font-medium hover:text-[#D5B37A] text-sm">
                            <span>View Details</span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5C1E15] text-[#f8f3e7] group-hover:translate-x-1 transition">→</span>
                          </Link>
                        </div>
                      )}
                      {/* --- END: MODIFIED SECTION --- */}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS (DESKTOP ONLY) */}
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#f8f3e7]/95 shadow-lg text-[#5C1E1A] hover:scale-110 transition border border-[#5C1E15]/10"
              >
                ←
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#f8f3e7]/95 shadow-lg text-[#5C1E1A] hover:scale-110 transition border border-[#5C1E15]/10"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-4">
          {eventsList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 h-2 bg-[#5C1E15]" : "w-2 h-2 bg-[#5C1E1F]/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;