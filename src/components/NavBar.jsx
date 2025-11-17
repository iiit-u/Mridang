import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import borderTop from "../assets/border-top.webp";
import borderBottom from "../assets/border-bottom.webp";
import mridangLogo from "../assets/mridang-logo.svg";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // --- 1. UPDATED menuItems ARRAY ---
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/#events" },
    { name: "Schedule", path: "/#schedule" },
    { name: "Coordinators", path: "/coordinators" }, // <-- CHANGED
    { name: "Gallery", path: "/gallery" },        // <-- CHANGED
    // { name: "Sponsors", path: "/sponsors" },        // <-- CHANGED
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- 2. UPDATED handleNavClick FUNCTION ---
  const handleNavClick = (path, e) => {
    setIsMenuOpen(false); // Close menu on any click

    if (path.startsWith("/#")) {
      e.preventDefault(); // Prevent default only for hash links
      const hash = path.substring(1);
      if (location.pathname === "/") {
        // If already on home, just scroll
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Navigate to home first, then scroll after navigation
        navigate(`/${hash}`);
      }
    } else if (path === "/") {
      e.preventDefault(); // Prevent default only for home link
      if (location.pathname === "/") {
        // If already on home, scroll to hero section
        setTimeout(() => {
          const heroElement = document.querySelector("#home");
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      } else {
        // Navigate to home
        navigate("/");
        // Scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }
    // For all other paths (e.g., "/gallery", "/sponsors", "/coordinators"):
    // We DON'T call e.preventDefault().
    // The <Link> component's default behavior will trigger and navigate to the new page.
  };

  return (
    <header className="fixed top-0 left-0 w-screen z-50">
      {/* === Top Border === */}
      <div className="w-screen">
        <img
          src={borderTop}
          alt="top border"
          className="w-full h-auto object-cover block"
          style={{ height: "28px" }}
        />
      </div>

      {/* === Navigation Bar === */}
      <nav
        className="relative flex items-center justify-between md:justify-center px-3 sm:px-4 font-heading text-[0.95rem] sm:text-base tracking-wide py-1.5 sm:py-2 md:py-4"
        style={{
          backgroundColor: "#610806",
          backgroundImage: "url('/src/assets/texture.jpeg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* === Mobile Logo (Left) === */}
        <div className="md:hidden flex items-center">
          <img
            src={mridangLogo}
            alt="Mridang Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* === Mobile Title (Centered) === */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden text-[#fff1d1] font-heading tracking-wide text-base sm:text-lg select-none">
          MRIDANG
        </div>

        {/* === Mobile Hamburger === */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#fff1d1] p-2 z-20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center justify-center gap-7">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.name}>
              {item.path.startsWith("/#") ? (
                // Use <a> for hash links
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className="px-1 text-[#fff1d1] transition-colors duration-300 hover:text-[#ffe482]"
                >
                  {item.name}
                </a>
              ) : (
                // Use <Link> for page routes
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className="px-1 text-[#fff1d1] transition-colors duration-300 hover:text-[#ffe482]"
                >
                  {item.name}
                </Link>
              )}
              {index < menuItems.length - 1 && (
                <span className="text-[#fff1d1] text-2xl select-none leading-none">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* === Mobile Dropdown === */}
      <div
        className={`
          md:hidden w-full overflow-hidden 
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "max-h-96"
              : "max-h-0"
          }
        `}
        style={{
          backgroundColor: "#610806",
          backgroundImage: "url('/src/assets/texture.jpeg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex flex-col items-center gap-3 py-3">
          {menuItems.map((item) =>
            item.path.startsWith("/#") ? (
              // Use <a> for hash links
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(item.path, e)}
                className="text-[#fff1d1] hover:text-[#ffe482] text-base transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              // Use <Link> for page routes
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(item.path, e)} // Simplified this onClick
                className="text-[#fff1d1] hover:text-[#ffe482] text-base transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>

      {/* === Bottom Border === */}
      <div className="w-screen">
        <img
          src={borderBottom}
          alt="bottom border"
          className="w-full h-auto object-cover block"
          style={{ height: "28px" }}
        />
      </div>

      {/* === Responsive Scaling === */}
      <style>
        {`
          /* Phones */
          @media (max-width: 640px) {
            img[alt="top border"],
            img[alt="bottom border"] {
              height: 22px !important;
            }
          }
          /* Tablets */
          @media (min-width: 640px) and (max-width: 1023px) {
            img[alt="top border"],
            img[alt="bottom border"] {
              height: 26px !important;
            }
          }
          /* Desktops */
          @media (min-width: 1024px) {
            img[alt="top border"],
            img[alt="bottom border"] {
              height: 30px !important;
            }
          }
        `}
      </style>
    </header>
  );
};

export default NavBar;