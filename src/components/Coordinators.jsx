import texture from "../assets/texture.jpeg";
import director from "../assets/director.jpg";
import facultyLeft from "../assets/faculty-left.jpg";
import facultyRight from "../assets/faculty-right.jpg";
import underline from "../assets/underline.png";
import mandala from "../assets/mandala.png";
// import frame1 from "../assets/frame1_00000.png";

const Coordinators = () => {
  const coordinators = [
    {
      name: "Dr. Naveen Cheggoju",
      role: "Faculty Coordinator",
      image: facultyLeft,
    },
    {
      name: "Prof. Manish Gaur",
      role: "Director, IIIT Una",
      image: director,
      isDirector: true,
    },
    {
      name: "Dr. Sanjit Ningthoujam",
      role: "Faculty Coordinator",
      image: facultyRight,
    },
  ];

  return (
    <section
      id="coordinators"
      className="scroll-mt-26 relative py-10 md:py-12 overflow-hidden text-[#5C1E15]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 backdrop-blur-[1px] pointer-events-none"></div>

      {/* Mandalas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Desktop mandalas */}
        <img
          src={mandala}
          alt="Decorative mandala"
          loading="lazy"
          className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-40 w-[480px]"
        />
        <img
          src={mandala}
          alt="Decorative mandala"
          loading="lazy"
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-40 w-[480px]"
        />

        {/* Mobile mandalas - multiple copies alternating left/right */}
        {[0, 1, 2, 3, 4].map((index) => {
          const isLeft = index % 2 === 0;
          const topPosition = `${15 + index * 18}%`;
          
          return (
            <img
              key={`mobile-mandala-${index}`}
              src={mandala}
              alt="Decorative mandala"
              loading="lazy"
              className={`md:hidden absolute opacity-40 w-[200px]`}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70 animate-fade-in">
            Leadership & Guidance
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Coordinators
          </h2>

          <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
            The guiding force behind Mridang — inspiring, mentoring, and ensuring the smooth orchestration of every cultural rhythm.
          </p>
        </div>

        {/* Coordinators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-12 md:gap-20">

          {coordinators.map((coord, index) => {
            const isDirector = coord.isDirector;

            // Mobile-first ordering
            const orderClass = isDirector
              ? "order-1 sm:order-2"
              : index === 0
              ? "order-2 sm:order-1"
              : "order-3 sm:order-3";

            // Responsive ring thickness - smaller on mobile
            const ringThickness = isDirector ? 5 : 4; // Mobile
            const ringThicknessDesktop = isDirector ? 7 : 6; // Desktop
            
            const ringStyle = {
              background: isDirector
                ? "linear-gradient(135deg, #5C1E15, #8A5A3D)"
                : "linear-gradient(135deg, #704832, #8A5A3D)",
              opacity: 1,
              mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${Math.max(
                ringThickness - 1,
                1
              )}px))`,
              WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${Math.max(
                ringThickness - 1,
                1
              )}px))`,
            };

            return (
              <div key={coord.name} className={`${orderClass} flex flex-col items-center`}>
                
                {/* Portrait */}
                <div className="relative flex items-center justify-center">
                  <div
                    className={`relative rounded-full overflow-hidden shadow-xl transition-all duration-500 ${
                      isDirector ? "scale-110 hover:scale-[1.13]" : "hover:scale-[1.06]"
                    } ${
                      isDirector 
                        ? "w-[180px] h-[180px] sm:w-[230px] sm:h-[230px]" 
                        : "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-full pointer-events-none" style={ringStyle}></div>
                    
                    <img
                      src={coord.image}
                      alt={coord.name}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C1E15]/20 to-transparent"></div>
                  </div>
                </div>

                {/* Text */}
                <div className="mt-8 text-center">
                  <h3
                    className={`font-heading leading-snug
                    ${isDirector ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl text-[#5C1E15]/90"}`}
                  >
                    {coord.name}
                  </h3>

                  <p className="text-[#704832]/85 font-serif text-sm sm:text-base mt-1">
                    {coord.role}
                  </p>

                  <div className="flex justify-center mt-2">
                    <img
                      src={underline}
                      alt="Decorative underline"
                      className={`${isDirector ? "h-6 sm:h-8" : "h-5 sm:h-6"} w-auto`}
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Coordinators;
