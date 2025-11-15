import React from "react";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import texture from "../assets/texture.jpeg";
import mandala from "../assets/mandala.png";

// Import the icons you just installed
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  // FiFacebook, // No longer needed
} from "react-icons/fi";

// --- Data for the page (Edit this) ---
// --- Data for the page (Edit this) ---
const contacts = [
  {
    role: "Festival Convener",
    people: [
      {
        name: "Harsh Arora",
        phone: "+91 89294 46382",
        email: "22221@iiitu.ac.in",
      },
    ],
  },
  {
    role: "Management Head", // <-- Single heading
    people: [ // <-- Array with two people
      {
        name: "Chirag Jain",
        phone: "+91 80855 09019",
        email: "23217@iiitu.ac.in",
      },
      {
        name: "Tarsem Gulab", // (Replace with real name)
        phone: "+91 78149 03883", // (Replace with real phone)
        email: "23158@iiitu.ac.in", // (Replace with real email)
      },
    ],
  },
  {
    role: "Sponsorship Head",
    people: [
      {
        name: "Abhishek",
        phone: "+91 94670  20263",
        email: "23102@iiitu.ac.in",
      },
    ],
  },
];

const socialLinks = [
    {
    name: "Mail",
    icon: <FiMail />,
    url: "mailto:mridang@iiitu.ac.in", // <-- ADDED (Update email if needed)
  },
  {
    name: "Call",
    icon: <FiPhone />,
    url: "tel:+911234567890", // <-- ADDED (Update phone if needed)
  },
  { name: "Instagram", icon: <FiInstagram />, url: "https://www.instagram.com/mridang_iiitu/" },
  { name: "LinkedIn", icon: <FiLinkedin />, url: "https://www.linkedin.com" },
  { name: "YouTube", icon: <FiYoutube />, url: "https://youtube.com/@mridangiiitu" },
];

const address = {
  line1: "Indian Institute of Information Technology",
  line2: "Saloh, Himachal Pradesh",
  line3: "Pin - 177209",
};
// -------------------------------------

function ContactPage() {
  return (
    <>
      <section
        id="contact"
        className="relative pt-32 pb-16 md:pb-24 overflow-hidden text-[#5C1E15]"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
          backgroundBlendMode: "multiply",
          backgroundColor: "#f8f0e3",
        }}
      >
        {/* Overlays and Mandalas */}
        <div className="absolute inset-0 bg-[#f8f3e7]/65 backdrop-blur-[1px] pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
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
        </div>

        {/* --- Content --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-xs text-[#8a5a3d]/70">
              Have Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#5C1E15] leading-tight">
              Get In Touch
            </h2>
            <p className="text-[#704832] max-w-2xl mx-auto font-serif text-base mt-2">
              We're here to help. Reach out to us through any of the
              channels below.
            </p>
          </div>

          {/* --- Contact Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            
{/* Column 1: Key Contacts */}
            <div className="text-left bg-[#f8f3e7]/50 p-6 md:p-8 rounded-lg shadow-md border border-[#5C1E15]/10">
              <h3 className="text-2xl font-heading text-[#5C1E15] mb-6 text-center md:text-left">
                Key Contacts
              </h3>
              <div className="space-y-6">
                {contacts.map((group) => (
                  <div key={group.role}>
                    <h4 className="text-lg font-heading text-[#5C1E15]">
                      {group.role}
                    </h4>
                    
                    {/* --- NESTED LOOP --- */}
                    {/* This loops over the 'people' array for each role */}
                    {group.people.map((person, index) => (
                      <div key={person.name} className={index > 0 ? "mt-4" : ""}> {/* Adds space between people in the same group */}
                        <p className="font-serif text-[#704832] text-base mb-2">
                          {person.name}
                        </p>
                        <div className="flex items-center gap-4 mb-1">
                          <FiPhone className="w-4 h-4 text-[#8A5A3D]" />
                          <a
                            href={`tel:${person.phone}`}
                            className="font-serif text-[#704832] hover:text-[#5C1E15] transition-colors"
                          >
                            {person.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-4">
                          <FiMail className="w-4 h-4 text-[#8A5A3D]" />
                          <a
                            href={`mailto:${person.email}`}
                            className="font-serif text-[#704832] hover:text-[#5C1E15] transition-colors"
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

            {/* Column 2: Socials & Address */}
            <div className="space-y-8">
              {/* Socials */}
              <div className="text-left bg-[#f8f3e7]/50 p-6 md:p-8 rounded-lg shadow-md border border-[#5C1E15]/10">
                <h3 className="text-2xl font-heading text-[#5C1E15] mb-6 text-center md:text-left">
                  Find Us Online
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  {socialLinks.map((social) => {
                    // --- KEY CHANGE: Check if it's a web link ---
                    const isWebLink = social.url.startsWith("http");

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        // --- KEY CHANGE: Only add target/rel for web links ---
                        target={isWebLink ? "_blank" : undefined}
                        rel={isWebLink ? "noopener noreferrer" : undefined}
                        title={social.name}
                        className="text-[#5C1E15] hover:text-[#8A5A3D] transition-transform hover:scale-110"
                      >
                        {React.cloneElement(social.icon, {
                          className: "w-10 h-10",
                        })}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Address */}
              <div className="text-left bg-[#f8f3e7]/50 p-6 md:p-8 rounded-lg shadow-md border border-[#5C1E15]/10">
                <h3 className="text-2xl font-heading text-[#5C1E15] mb-4 text-center md:text-left">
                  Our Location
                </h3>
                <div className="flex gap-4">
                  <FiMapPin className="w-5 h-5 text-[#8A5A3D] flex-shrink-0 mt-1" />
                  <address className="font-serif text-[#704832] text-base not-italic">
                    {address.line1} <br />
                    {address.line2} <br />
                    {address.line3}
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* --- Map Section --- */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-heading text-[#5C1E15] mb-8">
              Visit Us
            </h3>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-[#5C1E15]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6805.040635141687!2d76.187372!3d31.482378999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb5aa39796f9%3A0x3d5e714694324768!2sIIIT%20Una%2C%20Academic%20Block!5e0!3m2!1sen!2sin!4v1763226604767!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <Divider />
      <Footer />
    </>
  );
}

export default ContactPage;