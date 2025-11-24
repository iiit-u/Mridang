# Mridang 2025 — Official Website

This repository contains the source code for the official website of Mridang 2025, the annual cultural festival organized by the Indian Institute of Information Technology (IIIT) Una. The site is intended to present event information, schedules, coordinators, sponsors, galleries, and contact details in a responsive and accessible manner.

## Key Features
- Dynamic 3D-style event slider and detailed event pages.
- Auto-generated event pages with structured content.
- Dedicated pages for Coordinators, Sponsors, Gallery, and Contact.
- Animated marquees for past performers and sponsors.
- Hierarchical sponsor presentation (Title, Platinum, Gold, Partner).
- Structured coordinator team listings (faculty and students).
- Embedded maps, contact information, and a site-wide registration call-to-action.
- Responsive design across devices.

## Technology Stack
- Vite
- React
- React Router
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint, PostCSS, Autoprefixer

## Repository Layout (selected)
- index.html
- package.json
- src/
  - main.jsx, App.jsx, index.css
  - components/ — UI components (NavBar, Hero, Events, Sponsors, etc.)
  - pages/ — Page-level components (ContactPage, EventPage, GalleryPage, etc.)
  - assets/ — Images, sponsor and performer imports, team data

## Prerequisites
- Node.js (recommended: 18.x or later)
- npm

## Local Development
1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the application in a browser:
   http://localhost:5173/

## Scripts
- npm run dev — Start Vite development server
- npm run build — Produce a production build
- npm run preview — Preview the production build locally
- npm run lint — Run ESLint

## Building for Production
1. npm run build
2. npm run preview (optional) to serve the build locally

## Contribution and Licensing
This repository is maintained for the official Mridang 2025 website. Contributions should follow project conventions and code quality standards. © Indian Institute of Information Technology Una, Himachal Pradesh — 2025.