import React from "react";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import texture from "../assets/texture.webp";
import mandala from "../assets/mandala.webp";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

// CONTACT DATA
const contacts = [
  {
    role: "Festival Convener",
    people: [
      {
        name: "Harsh Arora",
        phone: "+91 89294 46382",
        email: "22221@iiitu.ac.ac.in",
      },
    ],
  },
  {
    role: "Management Head",
    people: [
      { name: "Chirag Jain", phone: "+91 80855 09019", email: "23218@iiitu.ac.in" },
      { name: "Tarsem Gulab", phone: "+91 78149 03883", email: "23158@iiitu.ac.in" },
    ],
  },
  {
    role: "Sponsorship Head",
    people: [
      { name: "Abhishek", phone: "+91 94670 20263", email: "23102@iiitu.ac.in" },
      { name: "Devansh Gupta", phone: "+91 97925 04543", email: "23220@iiitu.ac.in" },
    ],
  },
];

// SOCIAL LINKS
const socialLinks = [
  { name: "Mail", icon: FiMail, url: "mailto:mridang@iiitu.ac.in" },
  { name: "Call", icon: FiPhone, url: "tel:+917814903883" },
  { name: "Instagram", icon: FiInstagram, url: "https://www.instagram.com/mridang_iiitu/" },
  { name: "YouTube", icon: FiYoutube, url: "https://youtube.com/@mridangiiitu" },
];

// ADDRESS
const address = {
  line1: "Indian Institute of Information Technology",
  line2: "Saloh, Himachal Pradesh",
  line3: "Pin - 177209",
};

function ContactPage() {
  const desktopPositions = ["20%", "40%", "60%", "80%"];
  const mobilePositions = ["15%", "35%", "55%", "75%"];

  return (
    <>
      <section
        id="contact"
        className="mt-16 relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden text-[#5C1E15]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
          backgroundBlendMode: "multiply",
          backgroundColor: "#f8f0e3",
        }}
      >
        {/* SAME OVERLAY AS GALLERY */}
        <div className="absolute inset-0 bg-[#f8f3e7]/65 backdrop-blur-[1px] pointer-events-none"></div>

        {/* MANDALA BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          {desktopPositions.map((pos, i) => (
            <React.Fragment key={i}>
              <img
                src={mandala}
                className="hidden md:block absolute opacity-10 w-[420px]"
                style={{
                  top: pos,
                  left: i % 2 === 0 ? "-80px" : "-120px",
                  transform: "translateY(-50%)",
                }}
              />
              <img
                src={mandala}
                className="hidden md:block absolute opacity-10 w-[420px]"
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
                className="md:hidden absolute opacity-10 w-[160px]"
                style={{
                  top: pos,
                  [isLeft ? "left" : "right"]: "-40px",
                  transform: "translateY(-50%)",
                }}
              />
            );
          })}
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          {/* TITLE */}
          <div className="mb-10 md:mb-12">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#8a5a3d]/70">
              Have Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading leading-tight">
              Get In Touch
            </h2>
            <p className="text-[#704832] max-w-2xl mx-auto font-serif text-sm sm:text-base mt-2">
              We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* LEFT — CONTACTS */}
            <div className="bg-[#f8f3e7]/50 p-4 sm:p-5 md:p-6 rounded-md shadow-sm border border-[#5C1E15]/10 text-left">
              <h3 className="text-lg sm:text-xl font-heading text-center md:text-left mb-4">
                Key Contacts
              </h3>

              <div className="space-y-5">
                {contacts.map((group) => (
                  <div key={group.role}>
                    <h4 className="text-base sm:text-lg font-heading text-[#5C1E15]">
                      {group.role}
                    </h4>

                    {group.people.map((person, index) => (
                      <div key={person.name} className={`${index > 0 ? "mt-3" : ""}`}>
                        <p className="font-serif text-[#704832] text-sm sm:text-base mb-1">
                          {person.name}
                        </p>

                        <div className="flex items-center gap-3 mb-1">
                          <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A3D]" />
                          <a
                            href={`tel:${person.phone}`}
                            className="font-serif text-sm sm:text-base text-[#704832] hover:text-[#5C1E15]"
                          >
                            {person.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A3D]" />
                          <a
                            href={`mailto:${person.email}`}
                            className="font-serif text-sm sm:text-base text-[#704832] hover:text-[#5C1E15]"
                          >
                            {person.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — SOCIALS + ADDRESS */}
            <div className="space-y-8">

              {/* SOCIALS */}
              <div className="bg-[#f8f3e7]/50 p-4 sm:p-5 md:p-6 rounded-md shadow-sm border border-[#5C1E15]/10 text-left">
                <h3 className="text-lg sm:text-xl font-heading text-center md:text-left mb-4">
                  Find Us Online
                </h3>

                <div className="flex flex-wrap justify-center md:justify-start gap-5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    const isWeb = social.url.startsWith("http");

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target={isWeb ? "_blank" : undefined}
                        rel={isWeb ? "noopener noreferrer" : undefined}
                        className="text-[#5C1E15] hover:text-[#8A5A3D] transition-transform hover:scale-110"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="bg-[#f8f3e7]/50 p-4 sm:p-5 md:p-6 rounded-md shadow-sm border border-[#5C1E15]/10 text-left">
                <h3 className="text-lg sm:text-xl font-heading text-center md:text-left mb-3">
                  Our Location
                </h3>

                <div className="flex gap-4">
                  <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A5A3D] mt-1 flex-shrink-0" />
                  <address className="font-serif text-sm sm:text-base text-[#704832] not-italic leading-relaxed">
                    {address.line1} <br />
                    {address.line2} <br />
                    {address.line3}
                  </address>
                </div>
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="mt-14 md:mt-16">
            <h3 className="text-2xl sm:text-3xl font-heading text-[#5C1E15] mb-8">
              Visit Us
            </h3>

            <div className="w-full h-[330px] sm:h-[400px] md:h-[430px] rounded-lg overflow-hidden shadow-xl border-4 border-[#5C1E15]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6805.040635141687!2d76.187372!3d31.482378999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb5aa39796f9%3A0x3d5e714694324768!2sIIIT%20Una%2C%20Academic%20Block!5e0!3m2!1sen!2sin!4v1763226604767!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
