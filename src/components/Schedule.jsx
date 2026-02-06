import React from "react";
import scroll from "../assets/scroll.webp";
import texture from "../assets/texture.webp";
import motif from "../assets/motif.webp";
import mandala from "../assets/mandala.webp";

const festivalSchedule = [
  {
    day: "Day 1",
    events: [
      { time: "1:30 - 2:00 PM", name: "Mridang Inauguration" },
      { time: "2:00 - 2:30 PM", name: "Flash Mob" },
      { time: "2:30 - 3:00 PM", name: "Revealing Ceremony" },
      { time: "3:00 - 4:30 PM", name: "Rap Showcase" },
      { time: "4:30 - 5:30 PM", name: "Kavi Sammelan" },
      { time: "5:30 - 6:30 PM", name: "Skit" },
      { time: "6:30 - 9:00 PM", name: "Band" },
      { time: "9:30 - 11:30 PM", name: "EDM Night" },
    ],
  },
  {
    day: "Day 2",
    events: [
      { time: "9:00 AM onwards", name: "Art Exhibition" },
      { time: "12:30 PM onwards ", name: "Student Stalls" },
      { time: "12:30 - 2:00 PM", name: "Raag Samarpan" },
      { time: "2:00 - 4:00 PM", name: "Battle of Bands" },
      { time: "4:00 - 5:30 PM", name: "Dancers' Den" },
      { time: "5:30 - 6:30 PM", name: "Mehfil-e-Mridang" },
      { time: "6:30 - 11:30 PM", name: "Main Artist" },
    ],
  },
  {
    day: "Day 3",
    events: [
      { time: "10:30 - 1:00 PM", name: "Murder Mystery" },
      { time: "2:00 - 4:00 PM", name: "Ad-War-Tize" },
      { time: "2:00 - 6:00 PM", name: "FIFA" },
      { time: "6:00 - 8:00 PM", name: "Plot Twist" },
    ],
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-26 relative py-10 md:py-12 overflow-hidden bg-[#f8f3e7]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "360px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#f8f0e3",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#f8f3e7]/65 backdrop-blur-[1px] z-0 pointer-events-none"></div>

      {/* Mandalas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

        {[0, 1, 2, 3, 4].map((index) => {
          const isLeft = index % 2 === 0;
          const topPosition = `${15 + index * 18}%`;
          return (
            <img
              key={`schedule-mandala-${index}`}
              src={mandala}
              alt="Decorative mandala"
              loading="lazy"
              className="md:hidden absolute opacity-20 w-[200px]"
              style={{
                top: topPosition,
                [isLeft ? "left" : "right"]: 0,
                transform: isLeft
                  ? "translateX(-50%) translateY(-50%)"
                  : "translateX(50%) translateY(-50%)",
              }}
            />
          );
        })}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-5 space-y-2">
          <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
            Mridang Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
            Festival Timeline
          </h2>

          <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
            A chronological glimpse into the three days that shaped Mridang
            2025.
          </p>
        </div>

        {/* Scrolls Grid */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16">
          {festivalSchedule.map((schedule, idx) => (
            <React.Fragment key={idx}>
              <div className="relative flex justify-center items-center md:scale-115 mb-0 md:mb-6 -mt-2 md:mt-0">
                {/* Scroll Image */}
                <img
                  src={scroll}
                  alt={`${schedule.day} Scroll`}
                  className="w-full h-auto select-none"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-12 sm:px-14 md:px-16 py-20 pointer-events-none">
                  <h3 className="text-[38px] text-[#5C1E15] font-bold mb-2">
                    {schedule.day}
                  </h3>

                  {/* Events List (Blur Removed) */}
                  <div className="w-full max-w-[280px] text-[#704832] text-[13px] leading-[1.55]">
                    {schedule.events.map((event, eidx) => (
                      <div
                        key={eidx}
                        className="flex justify-between mb-[2px] border-b border-[#00000015] pb-[1px]"
                      >
                        <span className="text-right opacity-80 shrink-0">
                          {event.time}
                        </span>
                        <span className="ml-3 text-left">{event.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Motif between scrolls (mobile only) */}
              {idx < festivalSchedule.length - 1 && (
                <div className="flex justify-center items-center md:hidden">
                  <img
                    src={motif}
                    alt="Decorative motif"
                    className="h-6 w-auto opacity-70"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
