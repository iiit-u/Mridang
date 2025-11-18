import React from "react";
import texture from "../assets/texture.webp";
import mandala from "../assets/mandala.webp";
import underline from "../assets/underline.webp";
import Divider from "./Divider";
import { teamImages } from "../assets/team";

// --- FACULTY DATA ---
const facultyCoordinators = [
  {
    name: "Dr. Naveen Cheggoju",
    role: "Faculty Coordinator",
    image: teamImages.facultyLeft,
  },
  {
    name: "Prof. Manish Gaur",
    role: "Director, IIIT Una",
    image: teamImages.director,
    isDirector: true,
  },
  {
    name: "Dr. Sanjit Ningthoujam",
    role: "Faculty Coordinator",
    image: teamImages.facultyRight,
  },
];

// --- STUDENT DATA ---
const coreCoordinators = [
  { name: "Harsh Arora", role: "Convener", image: teamImages.harsh },
  { name: "Kartik Singh", role: "Convener", image: teamImages.kartik },
];

const teamRow2a = [
  { name: "Tarsem Gulab", image: teamImages.tarsem },
  { name: "Chirag Jain", image: teamImages.chirag },
  { name: "Abhishek", image: teamImages.abhishek },
];

const teamRow2b = [
  { name: "Devansh", image: teamImages.devansh },
  { name: "Mayank Saini", image: teamImages.mayank },
];

const teamRow3 = [
  { name: "Vinit Aggarwal", image: teamImages.vinit },
  { name: "Shashank Sharma", image: teamImages.shashank },
];

const teamRow4a = [
  { name: "Shiven Garg", role: "Design", image: teamImages.shiven },
  { name: "Kalash", role: "Videography", image: teamImages.kalash },
  { name: "Saksham", role: "Decoration", image: teamImages.saksham },
  { name: "Rachit", role: "PR", image: teamImages.rachit },
];

// --- STUDENT CARD ---
const StudentCard = ({ student }) => (
  <div className="flex flex-col items-center w-full sm:w-36 md:w-40">
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
      <img
        src={student.image}
        alt={student.name}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5C1E15]/10 to-transparent"></div>
    </div>

    <div className="mt-4 sm:mt-5 text-center">
      <h3 className="font-heading text-base sm:text-lg md:text-xl text-[#5C1E15]/95">
        {student.name}
      </h3>
      <p className="text-[#704832]/85 font-serif text-xs sm:text-sm md:text-base mt-1">
        {student.role}
      </p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const Coordinators = () => {
  const desktopPositions = ["20%", "40%", "60%", "80%"];
  const mobilePositions = ["15%", "35%", "55%", "75%"];

  return (
    <section
      id="coordinators"
      className="scroll-mt-26 relative py-14 md:py-20 text-[#5C1E15]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      {/* BG overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 pointer-events-none"></div>

      {/* MANDALA EFFECT (same as gallery) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {desktopPositions.map((pos, i) => (
          <React.Fragment key={i}>
            <img
              src={mandala}
              loading="lazy"
              className="hidden md:block absolute opacity-15 w-[420px]"
              style={{
                top: pos,
                left: i % 2 === 0 ? "-80px" : "-120px",
                transform: "translateY(-50%)",
              }}
            />
            <img
              src={mandala}
              loading="lazy"
              className="hidden md:block absolute opacity-15 w-[420px]"
              style={{
                top: pos,
                right: i % 2 === 0 ? "-120px" : "-80px",
                transform: "translateY(-50%)",
              }}
            />
          </React.Fragment>
        ))}

        {mobilePositions.map((pos, i) => {
          const isLeft = i % 2 === 0;
          return (
            <img
              key={`m-${i}`}
              src={mandala}
              loading="lazy"
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

        {/* FACULTY SECTION */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
            Leadership & Guidance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading">
            Coordinators
          </h2>
          <p className="text-[#704832] max-w-2xl mx-auto font-serif">
            The guiding force behind Mridang — inspiring, mentoring, and ensuring smooth orchestration.
          </p>
        </div>

        {/* FACULTY GRID */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-12 md:gap-20">
          {facultyCoordinators.map((coord) => {
            const isDirector = coord.isDirector;

            // Ring & hover visual styles
            const ringClass = isDirector
              ? "border-[5px] border-[#5C1E15] shadow-[0_0_14px_rgba(92,30,21,0.35)]"
              : "border-[4px] border-[#8A5A3D] shadow-[0_0_10px_rgba(138,90,61,0.30)]";

            const sizeClass = isDirector
              ? "w-[180px] h-[180px] sm:w-[230px] sm:h-[230px]"
              : "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]";

            const hoverScale = isDirector
              ? "hover:scale-[1.05]"
              : "hover:scale-[1.03]";

            return (
              <div key={coord.name} className={`flex flex-col items-center ${coord.isDirector ? "order-1" : "order-2"} sm:order-none`}
              >
                <div
                  className={`relative rounded-full overflow-hidden transition-all duration-500 ${ringClass} ${sizeClass} ${hoverScale}`}
                >
                  <img
                    src={coord.image}
                    alt={coord.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C1E15]/25 to-transparent"></div>
                </div>

                <div className="mt-8 text-center">
                  <h3
                    className={`font-heading ${isDirector ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                      }`}
                  >
                    {coord.name}
                  </h3>
                  <p className="text-[#704832]/85 font-serif mt-1">
                    {coord.role}
                  </p>
                  <img
                    src={underline}
                    loading="lazy"
                    alt="underline"
                    className="h-6 sm:h-7 mx-auto mt-2"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* DIVIDER */}
        <div className="my-16 md:my-20">
          <Divider />
        </div>

        {/* STUDENT TEAM */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
            The Driving Force
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading">
            Our Student Team
          </h2>
          <p className="text-[#704832] max-w-2xl mx-auto font-serif">
            The dedicated team working tirelessly to bring Mridang to life.
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-16">

          {/* CORE COORDINATORS */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading mb-8">
              Core Coordinators
            </h3>
            {/* Mobile layout */}
            <div className="sm:hidden flex flex-wrap justify-center gap-x-4 gap-y-10 max-w-md mx-auto">
              {coreCoordinators.map((s, index) => (
                <div key={s.name} className="w-[calc(50%-0.5rem)]"
                  style={index === coreCoordinators.length - 1 && coreCoordinators.length % 2 !== 0 ? { flexBasis: '100%' } : {}}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>
            {/* Desktop layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16">
              {coreCoordinators.map((s) => (
                <StudentCard key={s.name} student={s} />
              ))}
            </div>
          </div>

          {/* CO-COORDINATORS */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading mb-8">
              Co-Coordinators
            </h3>

            {/* Row 2A — 3 students - Mobile */}
            <div className="sm:hidden flex flex-wrap justify-center gap-x-4 gap-y-10 max-w-md mx-auto">
              {teamRow2a.map((s, index) => (
                <div key={s.name} className="w-[calc(50%-0.5rem)]"
                  style={index === teamRow2a.length - 1 && teamRow2a.length % 2 !== 0 ? { flexBasis: '100%' } : {}}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>
            {/* Row 2A - Desktop */}
            <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16">
              {teamRow2a.map((s) => (
                <StudentCard key={s.name} student={s} />
              ))}
            </div>

            {/* Row 2B — 2 students - Mobile */}
            <div className="sm:hidden flex flex-wrap justify-center gap-x-4 gap-y-10 max-w-md mx-auto mt-10">
              {teamRow2b.map((s, index) => (
                <div key={s.name} className="w-[calc(50%-0.5rem)]"
                  style={index === teamRow2b.length - 1 && teamRow2b.length % 2 !== 0 ? { flexBasis: '100%' } : {}}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>
            {/* Row 2B - Desktop */}
            <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16 mt-10">
              {teamRow2b.map((s) => (
                <StudentCard key={s.name} student={s} />
              ))}
            </div>
          </div>

          {/* EVENT LEAD — 2 students */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading mb-8">
              Event Lead
            </h3>
            {/* Mobile layout */}
            <div className="sm:hidden flex flex-wrap justify-center gap-x-4 gap-y-10 max-w-md mx-auto">
              {teamRow3.map((s, index) => (
                <div key={s.name} className="w-[calc(50%-0.5rem)]"
                  style={index === teamRow3.length - 1 && teamRow3.length % 2 !== 0 ? { flexBasis: '100%' } : {}}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>
            {/* Desktop layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16">
              {teamRow3.map((s) => (
                <StudentCard key={s.name} student={s} />
              ))}
            </div>
          </div>

          {/* DEPARTMENT LEADS — 4 students */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading mb-8">
              Department Leads
            </h3>
            {/* Mobile layout */}
            <div className="sm:hidden flex flex-wrap justify-center gap-x-4 gap-y-10 max-w-md mx-auto">
              {teamRow4a.map((s, index) => (
                <div key={s.name} className="w-[calc(50%-0.5rem)]"
                  style={index === teamRow4a.length - 1 && teamRow4a.length % 2 !== 0 ? { flexBasis: '100%' } : {}}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>
            {/* Desktop layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-10 md:gap-16">
              {teamRow4a.map((s) => (
                <StudentCard key={s.name} student={s} />
              ))}
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default Coordinators;