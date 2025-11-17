import React from "react";
import texture from "../assets/texture.webp";
import underline from "../assets/underline.webp";
import mandala from "../assets/mandala.webp";
import Divider from "./Divider";
import { teamImages } from "../assets/team";
// --- FACULTY DATA (Unchanged) ---
const facultyCoordinators = [
  {
    name: "Dr. Naveen Cheggoju",
    role: "Faculty Coordinator",
    image: teamImages.facultyLeft, // <-- See?
  },
  {
    name: "Prof. Manish Gaur",
    role: "Director, IIIT Una",
    image: teamImages.director, // <-- Like this
    isDirector: true,
  },
  {
    name:"Dr. Sanjit Ningthoujam",
    role: "Faculty Coordinator",
    image: teamImages.facultyRight, // <-- And this
  },
];

// --- STUDENT DATA ---
const coreCoordinators = [
  { name: "Harsh Arora", role: "Convener", image: teamImages.harsh },
  { name: "Kartik Sharma", role: "Convener", image: teamImages.kartik },
  { name: "Sangharsh Verma", role: "Convener", image: teamImages.sangharsh },
];

const teamRow2a = [
  { name: "Tarsem Gulab", image: teamImages.tarsem },
  { name: "Chirag Jain", image: teamImages.chirag },
  { name: "Abhishek", image: teamImages.abhishek },
];

// Row 3: 2 people
const teamRow2b = [
  { name: "Devansh", image: teamImages.devansh },
  { name: "Mayank Saini", image: teamImages.mayank },
];

const teamRow3 = [
  { name: "Vinit Aggarwal", image: teamImages.vinit },
  { name: "Shashank Sharma", image: teamImages.shashank },
];

const teamRow4a = [
  { name: "Shiven Garg", role:"Design", image: teamImages.shiven },
  { name: "Kalash", role:"Videography", image: teamImages.kalash },
  { name: "Saksham", role:"Decoration", image: teamImages.saksham },
  { name: "Rachit", role:"PR", image: teamImages.rachit },
];



// --- 2. NEW REUSABLE STUDENT CARD COMPONENT ---
// We define this here to keep the main component clean.
const StudentCard = ({ student }) => (
  <div className="flex flex-col items-center w-36 sm:w-40">
    {/* Image */}
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={student.image}
        alt={student.name}
        className="w-full h-full object-cover"
      />
      {/* Simple ring overlay */}
      <div className="absolute inset-0 rounded-full border-4 border-[#8A5A3D]/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#5C1E15]/10 to-transparent"></div>
    </div>

    {/* Text */}
    <div className="mt-5 text-center">
      <h3 className="font-heading text-lg sm:text-xl leading-snug text-[#5C1E15]/95">
        {student.name}
      </h3>
      <p className="text-[#704832]/85 font-serif text-sm sm:text-base mt-1">
        {student.role}
      </p>
    </div>
  </div>
);


// --- MAIN COORDINATORS COMPONENT ---
const Coordinators = () => {
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

      {/* Mandalas (unchanged) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* (mandala images... unchanged) */}
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-40 w-[480px]" />
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-40 w-[480px]" />
      </div>

      {/* --- SECTION 1: FACULTY COORDINATORS (Unchanged) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70 animate-fade-in">
            Leadership & Guidance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Coordinators
          </h2>
          <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
            The guiding force behind Mridang — inspiring, mentoring, and
            ensuring the smooth orchestration of every cultural rhythm.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-12 md:gap-20">
          {facultyCoordinators.map((coord, index) => {
            // (faculty card logic... unchanged)
            const isDirector = coord.isDirector;
            const orderClass = isDirector ? "order-1 sm:order-2" : index === 0 ? "order-2 sm:order-1" : "order-3 sm:order-3";
            const ringThickness = isDirector ? 5 : 4;
            const ringStyle = {
              background: isDirector ? "linear-gradient(135deg, #5C1E15, #8A5A3D)" : "linear-gradient(135deg, #704832, #8A5A3D)",
              opacity: 1,
              mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${Math.max(ringThickness - 1, 1)}px))`,
              WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #000 calc(100% - ${Math.max(ringThickness - 1, 1)}px))`,
            };
            return (
              <div key={coord.name} className={`${orderClass} flex flex-col items-center`}>
                <div className="relative flex items-center justify-center">
                  <div className={`relative rounded-full overflow-hidden shadow-xl transition-all duration-500 ${isDirector ? "scale-110 hover:scale-[1.13]" : "hover:scale-[1.06]"} ${isDirector ? "w-[180px] h-[180px] sm:w-[230px] sm:h-[230px]" : "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"}`}>
                    <div className="absolute inset-0 rounded-full pointer-events-none" style={ringStyle}></div>
                    <img src={coord.image} alt={coord.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C1E15]/20 to-transparent"></div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className={`font-heading leading-snug ${isDirector ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl text-[#5C1E15]/90"}`}>{coord.name}</h3>
                  <p className="text-[#704832]/85 font-serif text-sm sm:text-base mt-1">{coord.role}</p>
                  <div className="flex justify-center mt-2">
                    <img src={underline} alt="Decorative underline" className={`${isDirector ? "h-6 sm:h-8" : "h-5 sm:h-6"} w-auto`} loading="lazy" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="my-16 md:my-20">
        <Divider />
      </div>

      {/* --- SECTION 2: STUDENT COORDINATORS (NEW LAYOUT) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
            The Driving Force
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Our Student Team
          </h2>
          <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
            The dedicated team of students working tirelessly to bring Mridang
            to life.
          </p>
        </div>

        {/* --- 3. NEW HIERARCHICAL STUDENT LAYOUT --- */}
        <div className="flex flex-col items-center gap-y-12 md:gap-y-16">

          {/* Row 1: 3 Core Coordinators */}
          {coreCoordinators.length > 0 && (
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-[#5C1E15] mb-8">
                Core Coordinators
              </h3>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {coreCoordinators.map((student) => (
                  <StudentCard key={student.name} student={student} />
                ))}
              </div>
            </div>
          )}

          {/* Row 2: 3 + 2 layout */}
          {(teamRow2a.length > 0 || teamRow2b.length > 0 || teamRow3.length>0) && (
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-[#5C1E15] mb-8">
                Co-Coordinators
              </h3>
              {/* Sub-row 1 (3 people) */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {teamRow2a.map((student) => (
                  <StudentCard key={student.name} student={student} />
                ))}
              </div>
              {/* Sub-row 2 (2 people) */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-8 md:mt-12">
                {teamRow2b.map((student) => (
                  <StudentCard key={student.name} student={student} />
                ))}
              </div>
            </div>
          )}

          {/* Row 3: 2 people */}
          {teamRow3.length > 0 && (
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-[#5C1E15] mb-8">
                Event Lead
              </h3>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {teamRow3.map((student) => (
                  <StudentCard key={student.name} student={student} />
                ))}
              </div>
            </div>
          )}

          {/* Row 2: 3 + 2 layout */}
          {(teamRow4a.length > 0) && (
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-[#5C1E15] mb-8">
                Department Leads
              </h3>
              {/* Sub-row 1 (3 people) */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                {teamRow4a.map((student) => (
                  <StudentCard key={student.name} student={student} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Coordinators;