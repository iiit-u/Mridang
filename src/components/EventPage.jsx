import React from "react";
import { useParams, Link } from "react-router-dom";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

const eventsData = {
  "raag-samarpan": {
    title: "Raag Samarpan",
    description: "Soul-stirring solos and duets celebrating melodies of devotion.",
    details: "Raag Samarpan is a musical journey that brings together the finest voices and instruments to create an atmosphere of spiritual devotion. Participants showcase their talent through classical and semi-classical renditions, creating moments of pure musical bliss.",
  },
  "skit": {
    title: "Skit",
    description: "A heartfelt stage performance blending contemporary narratives with emotion.",
    details: "Skit brings stories to life on stage, combining drama, comedy, and emotion. Teams present original scripts that reflect social issues, campus life, and human experiences, leaving the audience both entertained and thoughtful.",
  },
  "kavi-sammelan": {
    title: "Kavi Sammelan",
    description: "An evening of poetry adorned with words strung like pearls.",
    details: "Kavi Sammelan is a celebration of words and emotions. Poets from across the campus share their verses, creating an evening filled with rhythm, rhyme, and profound expressions of human experience.",
  },
  "qawwali": {
    title: "Qawwali",
    description: "Sufi-inspired harmonies that ignite the spirit of the mehfil.",
    details: "Qawwali night brings the soulful sounds of Sufi music to Mridang. The powerful vocals and rhythmic instruments create an atmosphere of spiritual ecstasy, connecting hearts through the universal language of music.",
  },
  "mystery-detective-battle": {
    title: "Mystery Detective Battle",
    description: "Unravel high-stakes mysteries in a battle of sharp instincts.",
    details: "Test your detective skills in this thrilling competition. Participants solve complex mysteries, crack codes, and piece together clues in a race against time. Only the sharpest minds will emerge victorious.",
  },
  "memefest-script-writing-debate": {
    title: "MemeFest & Script Writing & Debate",
    description: "A triple treat of humor, creative scripts, and electric debates.",
    details: "Three competitions in one! MemeFest celebrates digital humor, Script Writing showcases creative storytelling, and Debate brings out the orator in you. A perfect blend of creativity, wit, and eloquence.",
  },
  "adwartize": {
    title: "Adwartize",
    description: "A creative showdown crafting captivating advertising videos.",
    details: "Adwartize challenges teams to create compelling advertising campaigns. From concept to execution, participants showcase their marketing creativity and video production skills in this competitive event.",
  },
  "student-stalls": {
    title: "Student Stalls",
    description: "A vibrant marketplace showcasing student innovation and creations.",
    details: "Student Stalls transform the campus into a bustling marketplace. From handmade crafts to innovative products, students showcase their entrepreneurial spirit and creativity in this vibrant exhibition.",
  },
  "dancers-den": {
    title: "Dancers' Den",
    description: "A dance battleground pulsing with rhythm, energy, and flair.",
    details: "Dancers' Den is where rhythm meets passion. Solo and group performances across various dance styles compete for the top spot, creating an electrifying atmosphere filled with energy and artistic expression.",
  },
  "fashion-show": {
    title: "Fashion Show",
    description: "A runway spectacle fusing cultural elegance with modern style.",
    details: "The Fashion Show brings together tradition and contemporary style. Models showcase creative designs that blend cultural heritage with modern fashion, creating a visual feast for the audience.",
  },
  "fifa": {
    title: "FIFA",
    description: "Digital football thrills take over the esports arena.",
    details: "FIFA esports brings the excitement of football to the digital realm. Gamers compete in intense matches, showcasing their skills and strategic thinking in this popular esports competition.",
  },
  "art-exhibition": {
    title: "Art Exhibition",
    description: "Emotions etched on canvas for an unforgettable art journey.",
    details: "The Art Exhibition showcases the creative talents of student artists. From paintings to sculptures, digital art to installations, this exhibition celebrates visual expression in all its forms.",
  },
  "rap-showcase": {
    title: "Rap Showcase",
    description: "A night drenched in rhyme, rhythm, and raw rap energy.",
    details: "Rap Showcase brings the raw energy of hip-hop to Mridang. Rappers deliver powerful verses, showcasing their lyrical prowess and stage presence in this high-energy competition.",
  },
  "battle-of-bands": {
    title: "Battle of Bands",
    description: "Live bands go head-to-head in an electrifying musical clash.",
    details: "Battle of Bands is the ultimate musical showdown. Bands compete with original compositions and covers, bringing the stage alive with rock, pop, and fusion performances that keep the audience on their feet.",
  },
};

const EventPage = () => {
  const { eventSlug } = useParams();
  const event = eventsData[eventSlug];

  if (!event) {
    return (
      <section className="relative py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading text-[#5C1E15] mb-4">Event Not Found</h2>
          <p className="text-[#704832] font-serif mb-6">The event you're looking for doesn't exist.</p>
          <Link to="/events" className="text-[#5C1E15] hover:text-[#8A5A3D] font-medium">
            ← Back to Events
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="mt-16 md:mt-26 relative py-10 md:py-12 overflow-hidden bg-[#f8f3e7] min-h-screen"
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {/* ... mandala images ... */}
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[50%] opacity-20 w-[480px]" />
        <img src={mandala} alt="Decorative mandala" loading="lazy" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[50%] opacity-20 w-[480px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/#events"
          className="inline-flex items-center gap-2 text-[#5C1E15] hover:text-[#8A5A3D] font-medium mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to Events</span>
        </Link>

        {/* Event Content */}
        <div className="bg-[#f8f4e7] rounded-3xl border border-[#5C1E15]/10 shadow-xl p-8 md:p-12">
          <div
            className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none rounded-3xl"
            style={{
              backgroundImage: `url(${texture})`,
              backgroundRepeat: "repeat",
              backgroundSize: "320px",
            }}
          ></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70 mb-4">
              Mridang Experience
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight mb-4">
              {event.title}
            </h1>
            <p className="text-xl text-[#704832] font-serif mb-8 italic">
              {event.description}
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#704832] font-serif leading-relaxed text-base md:text-lg">
                {event.details}
              </p>
            </div>

            {/* --- NEW BUTTON ADDED HERE --- */}
            <div className="text-center mt-10">
              <a
                href="https://linktr.ee/mridang2k25" // <-- **** REPLACE THIS URL ****
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5C1E15] text-white font-heading px-8 py-3 rounded-md shadow-lg transition-transform hover:scale-105 active:scale-95 text-lg"
              >
                Register Now
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;