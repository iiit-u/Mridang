import React from "react";
import iiituLogo from "../assets/iiitu-logo.webp";
import mridangLogo from "../assets/mridang-logo.svg";
import mandala from "../assets/mandala.webp";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#3D0F0A] text-[#F8E7D5] pt-8 pb-6 overflow-hidden"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        backgroundColor: "#610806",
        backgroundImage: "url('/src/assets/texture.jpeg')",
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Decorative Mandalas */}
      <img
        src={mandala}
        className="absolute left-0 top-0 opacity-[0.07] w-[380px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        alt=""
      />
      <img
        src={mandala}
        className="absolute right-0 bottom-0 opacity-[0.07] w-[380px] translate-x-1/3 translate-y-1/3 pointer-events-none rotate-180"
        alt=""
      />

      {/* Golden Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D5B37A] to-transparent opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Main Footer Content - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 mb-6">
          
          {/* Left Column - Institute Info */}
          <div className="text-center md:text-left">
            <div className="flex flex-row items-center justify-center md:justify-start gap-3 mb-3">
              <img
                src={iiituLogo}
                alt="IIIT Una"
                className="h-14 w-auto drop-shadow-[0_0_20px_rgba(255,215,160,0.25)]"
              />
              <div className="h-14 w-[2px] bg-gradient-to-b from-[#D5B37A] to-transparent opacity-60 self-center"></div>
              <img
                src={mridangLogo}
                alt="Mridang"
                className="h-14 w-auto drop-shadow-[0_0_20px_rgba(255,215,160,0.25)]"
              />
            </div>
            <h2 className="text-base md:text-lg font-semibold text-[#F6E3C6] tracking-wide mb-1.5">
              Indian Institute of Information Technology Una
            </h2>
            <p className="text-[#E7D3BA] text-xs md:text-sm leading-relaxed">
              Vill. Saloh, Teh. Haroli, Distt. Una, Himachal Pradesh — 177209
            </p>
          </div>

          {/* Center-Left Column - Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-[#F6E3C6] uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-2 text-[#ECCFAF] text-sm">
              <a
                href="mailto:mridang@iiitu.ac.in"
                className="block hover:text-[#D5B37A] transition-colors break-all"
              >
                mridang@iiitu.ac.in
              </a>
              <a
                href="https://www.iiitu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D5B37A] transition-colors"
              >
                www.iiitu.ac.in
              </a>
            </div>
          </div>

          {/* --- NEW Center-Right Column - Other Fests --- */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-[#F6E3C6] uppercase tracking-wider mb-3">
              Other Fests
            </h3>
            <div className="space-y-2 text-[#ECCFAF] text-sm">
              <a
                href="https://esummit.iiitu.ac.in/" // <-- REPLACE THIS LINK
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D5B37A] transition-colors"
              >
                E-Summit
              </a>
              <a
                href="https://meraki.iiitu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D5B37A] transition-colors"
              >
                Meraki
              </a>
              {/* Add more links here as needed */}
            </div>
          </div>

          {/* Right Column - Social & Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-[#F6E3C6] uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex md:flex-col items-center md:items-start justify-center md:justify-start gap-3">
              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/mridang_iiitu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6E3C6] hover:text-[#D5B37A] transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* --- NEW YOUTUBE ICON --- */}
                <a
                  href="https://www.youtube.com/@mridangIIITU" // <-- REPLACE WITH YOUR YOUTUBE LINK
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6E3C6] hover:text-[#D5B37A] transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on YouTube"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                
                <a
                  href="mailto:mridang@iiitu.ac.in"
                  className="text-[#F6E3C6] hover:text-[#D5B37A] transition-all duration-300 hover:scale-110"
                  aria-label="Email us at mridang@iiitu.ac.in"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Credits */}
        <div className="border-t border-[#D5B37A]/20 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#E7D3BA]/80">
            <p className="tracking-wide">
              © Indian Institute of Information Technology Una, Himachal Pradesh 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;