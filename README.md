Mridang 2025 - Official Website

This repository contains the source code for the official website of Mridang 2025, the annual cultural fest of the Indian Institute of Information Technology (IIIT) Una.

This year's theme is a cultural and divine experience, channeling timeless cultural arts through the kaleidoscopic lens of a groovy retro past.

✨ Features

Dynamic Event Slider: A 3D-style card slider on the homepage to browse all events.

Detailed Event Pages: Each event has a dedicated, auto-generated page with full descriptions.

Multi-Page Structure: A fully routed site with dedicated pages for Coordinators, Sponsors, Gallery, and Contact.

Scrolling Marquees: Animated, infinite scrollers for "Past Performers" and "Past Sponsors."

Hierarchical Sponsor Layout: Dynamically renders current sponsors based on their level (Title, Platinum, Gold, Partner).

Dynamic Coordinator Team: Shows both faculty and a structured student team.

Contact Page: Includes key contacts by role, social media links, and an embedded Google Map.

Floating Register Button: A site-wide call-to-action button for registrations.

Fully Responsive: Designed to look great on all devices, from mobile phones to desktops.

🛠️ Tech Stack

This project is built with a modern, fast, and maintainable tech stack:

Vite: For a blazing-fast development server and optimized build process.

React: For building the component-based user interface.

React Router: For client-side routing and navigation between pages.

Tailwind CSS: For utility-first styling.

React Icons: For the icon library used on the Contact page and Footer.

🚀 Getting Started

To get a copy of the project up and running on your local machine, follow these simple steps.

Prerequisites

You must have Node.js (which includes npm) installed on your computer.

Installation

Clone the repository:

git clone [https://github.com/your-username/mridang-website.git](https://github.com/your-username/mridang-website.git)


Navigate to the project directory:

cd mridang-website


Install dependencies:

npm install


Run the development server:

npm run dev


Open in your browser:
Vite will show you a local URL to open, usually http://localhost:5173/.

📁 Folder Structure

The project structure is organized as follows:

mridang-website/
├── public/               # Static assets (like favicons)
├── src/
│   ├── assets/           # All images, fonts, etc.
│   │   ├── performers/   # Images for past performers
│   │   │   ├── index.js  # Barrel file to export performers
│   │   │   └── ...
│   │   ├── team/         # Images for the coordinator team
│   │   │   ├── index.js  # Barrel file to export team
│   │   │   └── ...
│   │   └── ...           # Other images (texture, mandala, logos)
│   │
│   ├── components/       # Reusable React components (NavBar, Footer, Hero)
│   │
│   ├── pages/            # Full-page components (CoordinatorsPage, SponsorsPage)
│   │
│   ├── App.jsx           # Main app component, handles routing
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles & Tailwind imports
│
├── .gitignore
├── index.html            # The HTML template Vite uses
├── package.json
└── vite.config.js        # Vite configuration


Content Management Guide

This website is designed to be easily updated. Most content is managed in data arrays at the top of their respective components.

1. How to Add/Change Student Coordinators

Add Image: Place the new student's image file inside the src/assets/team/ folder.

Export Image: Open src/assets/team/index.js. Import your new image and add it to the export const teamImages object.

import newStudent from './new-student.jpg'; // 1. Import

export const teamImages = {
  // ...other images
  newStudent, // 2. Export
};


Update Component: Open src/components/Coordinators.jsx. Add the new student's information to one of the data arrays (coreCoordinators, teamRow2a, teamRow2b, etc.) using the image you just exported.

const teamRow3 = [
  { name: "New Student", role: "Manager", image: teamImages.newStudent },
  // ...
];


2. How to Add/Change Sponsors

Update Component: Open src/components/Sponsors.jsx.

Edit Array: Add or edit objects in the currentSponsors2025 array.

Set Properties: Make sure to set the level ('title', 'platinum', 'gold', 'partner') and website (the sponsor's URL) correctly. The layout and sizing will update automatically.

3. How to Add Past Performers

This follows the same pattern as the student team.

Add Image: Place the performer's image in src/assets/performers/.

Export Image: Open src/assets/performers/index.js, import the new image, and add it to the export const performerImages object.

Update Component: Open src/components/PastPerformers.jsx and add the new performer to the performersList array.

4. How to Update the Registration Link (Linktree)

You must update the link in three different files:

src/App.jsx: Update the href in the floating "Register Now" button at the bottom of the file.

src/components/Events.jsx: Update the href in the "Register Now" button inside the isActive block.

src/components/EventPage.jsx: Update the href in the "Register Now" button at the bottom of the component.

5. How to Update Event Details

Update Component: Open src/components/EventPage.jsx.

Edit Object: Find the event you want to change in the eventsData object at the top of the file and edit its title, description, or details.

© 2025 IIIT Una • Mridang Cultural Fest