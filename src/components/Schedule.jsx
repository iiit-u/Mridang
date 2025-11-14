import React from "react";
import scroll from "../assets/scroll.png";
import texture from "../assets/texture.jpeg";
import motif from "../assets/motif.png";
import mandala from "../assets/mandala.png";

const festivalSchedule = [
    {
        day: "Day 1",
        events: [
            { time: "2:00 - 2:30 PM", name: "Mridang Inauguration" },
            { time: "2:30 - 3:15 PM", name: "Flash Mob" },
            { time: "3:45 - 4:00 PM", name: "Revealing Ceremony" },
            { time: "4:00 - 5:30 PM", name: "Raag Samarpan" },
            { time: "5:30 - 7:00 PM", name: "Skit" },
            { time: "7:00 - 8:00 PM", name: "Kavi Sammelan" },
            { time: "8:15 - 9:30 PM", name: "Qawwali" },
            { time: "10:15 - 11:30 PM", name: "EDM Night" },
        ],
    },
    {
        day: "Day 2",
        events: [
            { time: "9:00 - 11:30 AM", name: "Mystery Detective Battle" },
            { time: "11:30 - 1:00 PM", name: "MemeFest" },
            { time: "2:00 - 4:00 PM", name: "Ad-War-Tize" },
            { time: "2:00 - 4:30 PM", name: "Student Stalls" },
            { time: "4:30 - 6:30 PM", name: "Dancers' Den" },
            { time: "7:00 - 8:30 PM", name: "Fashion Show" },
            { time: "9:00 - 9:15 PM", name: "Filler Event" },
            { time: "9:30 - 11:30 PM", name: "Local Artist 1" },
        ],
    },
    {
        day: "Day 3",
        events: [
            { time: "11:00 AM onwards", name: "FIFA" },
            { time: "11:00 AM onwards", name: "Art Exhibition" },
            { time: "4:15 - 5:15 PM", name: "Rap Showcase" },
            { time: "5:15 - 7:30 PM", name: "Battle of Bands" },
            { time: "7:30 - 8:30 PM", name: "Local Artist 2" },
            { time: "9:00 - 11:30 PM", name: "Main Artist" },
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
                            key={`schedule-mandala-${index}`}
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

            {/* Foreground content wrapper */}
            <div className="relative z-10">
                {/* Section Header (Unchanged) */}
                <div className="text-center mb-5 space-y-2">
                    <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70 animate-fade-in">
                        Mridang Experience
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
                        Festival Schedule
                    </h2>
                    <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base">
                        Three days of cultural splendor, unfurling memories of tradition and celebration
                    </p>
                </div>

                {/* Scrolls Grid */}
                <div 
                    className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16"
                    // Changed: `gap-12` is now `gap-8` for a smaller mobile gap.
                >
                    {festivalSchedule.map((schedule, idx) => (
                        <React.Fragment key={idx}>
                            <div
                                className="relative flex justify-center items-center md:scale-115 mb-0 md:mb-6 -mt-2 md:mt-0"
                            >
                                {/* Scroll Image (Unchanged) */}
                                <img
                                    src={scroll}
                                    alt={`${schedule.day} Scroll`}
                                    className="w-full h-auto select-none"
                                />

                                {/* Text Overlay (Unchanged from your original) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-12 sm:px-14 md:px-16 py-20 pointer-events-none">
                                    <h3 className="text-[38px] text-[#5C1E15] font-bold mb-2">
                                        {schedule.day}
                                    </h3>

                                    <div className="w-full max-w-[280px] text-[#704832] text-[13px] leading-[1.55]">
                                        {schedule.events.map((event, eidx) => (
                                            <div
                                                key={eidx}
                                                className="flex justify-between mb-[2px] border-b border-[#00000015] pb-[1px]"
                                            >
                                                <span className="text-right opacity-80 flex-shrink-0">
                                                    {event.time}
                                                </span>
                                                <span className="ml-3 text-left">
                                                    {event.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Motif between scrolls on mobile only */}
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