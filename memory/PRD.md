# ANAND CONSTRUCTION Website - Product Requirements Document

## Project Overview
**Project Name:** ANAND CONSTRUCTION Professional Website  
**Type:** Construction Business Landing Page  
**Status:** MVP Complete (Frontend Only)  
**Date Created:** February 21, 2026  
**Last Updated:** February 21, 2026

---

## Original Problem Statement
Create a professional construction business website with a fixed left-side vertical taskbar navigation. The taskbar should smoothly collapse and expand, with menu items animating sequentially. Clicking an item should trigger smooth scrolling to that section.

Sections in order: Home, Services, Our Work, Pricing, Why Choose Us, Contact.

Use a modern, elegant design with soft neutral colors, smooth gradients, and warm construction accents. Buttons should have rounded corners, realistic shadows, and hover-lift animations.

Add soft background images or crafted architectural illustrations for every section, using a different subtle image per section.

---

## Business Information
- **Business Name:** ANAND CONSTRUCTION
- **Tagline:** Complete Construction & Interior Solutions
- **Phone Numbers:** +91 9175615999, +91 9175412525
- **WhatsApp:** +91 9175615999
- **Email:** constructionanand10@gmail.com
- **Instagram:** https://www.instagram.com/anand_construction_pune
- **Location:** Pune, India

---

## User Personas
1. **Homeowners**: Individuals looking to build their dream home or renovate existing property
2. **Real Estate Developers**: Companies seeking construction partners for residential/commercial projects
3. **Interior Design Clients**: People wanting professional interior design and finishing services

---

## Core Requirements (Static)

### Design & User Experience
- Fixed left sidebar navigation (collapsible)
- Mobile responsive with hamburger menu
- Smooth scroll animations between sections
- Professional construction color palette (greys, whites, amber/orange accents)
- High-quality background images for each section
- Hover effects and micro-animations throughout
- Glass-morphism effects with backdrop filters

### Sections
1. **Home/Hero**: Business name, tagline, CTA buttons (Call, WhatsApp), contact info, Instagram link
2. **Services**: 6 service cards with icons, titles, and descriptions
3. **Our Work**: 5 real project images with hover effects and project details
4. **Pricing**: 3 pricing tiers (Basic, Standard, Premium) with ₹/sq.ft pricing
5. **Why Choose Us**: 6 reasons with icons highlighting company strengths
6. **Contact**: Contact form with name, email, phone, message fields
7. **Footer**: Business info, contact details, social links

### Functionality
- Clickable phone numbers (tel: links)
- WhatsApp integration with pre-filled message
- Email links (mailto:)
- Instagram redirect
- Contact form (currently saves to localStorage - mock implementation)
- Active section highlighting in sidebar
- Smooth scroll behavior
- Google Analytics placeholder ready

---

## What's Been Implemented ✅

### Completed Features (February 21, 2026)
1. ✅ **Full Frontend Website**
   - React-based single-page application
   - Fixed left sidebar with collapse/expand functionality
   - All 6 sections implemented with proper content
   - Mobile responsive with hamburger menu

2. ✅ **Design & Styling**
   - Professional construction color scheme (slate, grey, white, amber accents)
   - Custom CSS animations and transitions
   - Hover effects on all interactive elements
   - Glass-morphism effects with backdrop blur
   - Smooth scroll behavior
   - Custom scrollbar styling

3. ✅ **Background Images**
   - Hero section: Modern architecture
   - Services: Construction materials
   - Pricing: Blueprint/architectural plans
   - Why Choose Us: Team collaboration
   - All images optimized from Unsplash/Pexels

4. ✅ **Real Project Images**
   - 5 actual project photos from client uploaded
   - Displayed in "Our Work" section
   - Hover zoom and shadow effects
   - Project titles and locations

5. ✅ **Interactive Features**
   - Call Now buttons (2 phone numbers)
   - WhatsApp button with pre-filled message
   - Email link (mailto:)
   - Instagram link
   - Contact form with validation
   - Form submissions saved to localStorage (mock)

6. ✅ **Analytics & SEO**
   - Google Analytics placeholder added (ready for tracking ID)
   - Meta description updated
   - Page title updated
   - Structured for SEO

7. ✅ **Mobile Responsiveness**
   - Hamburger menu for mobile
   - Sidebar slides in/out
   - Overlay for mobile menu
   - All sections responsive
   - Touch-friendly buttons

### File Structure Created
```
/app/frontend/src/
├── data/
│   └── mock.js (business info, services, projects, pricing, etc.)
├── components/
│   ├── Sidebar.jsx (navigation component)
│   └── ui/ (shadcn components)
├── pages/
│   └── HomePage.jsx (main page with all sections)
├── App.js (main app with routing)
├── App.css (global styles)
└── index.css (Tailwind + custom CSS)
```

---

## Current State (MOCK Implementation)

### What's MOCKED:
- **Email Notifications**: Contact form submissions saved to localStorage only (no actual email sent)
- **Google Analytics**: Code structure ready, but tracking ID needs to be added

### What's LIVE:
- All UI/UX features
- Phone call links (work on actual devices)
- WhatsApp links (work on actual devices)
- Email links (work on actual devices)
- Instagram links
- Form validation
- Smooth animations

---

## Prioritized Backlog

### P0 Features (Critical - Next Phase)
1. **Backend Integration**
   - Set up FastAPI backend
   - MongoDB models for contact submissions
   - Email notification service (SendGrid or SMTP)
   - API endpoint for contact form: POST /api/contact
   - Store form submissions in database

2. **Analytics Integration**
   - Add Google Analytics tracking ID
   - Set up event tracking for:
     - Call button clicks
     - WhatsApp button clicks
     - Form submissions
     - Section navigation
     - Get Quote button clicks

### P1 Features (High Priority)
1. **Admin Dashboard**
   - View contact form submissions
   - Filter by date range
   - Export to CSV
   - Mark as contacted/resolved

2. **Enhanced Features**
   - Image gallery with lightbox for projects
   - Client testimonials section
   - Before/After project comparisons
   - Video testimonials

3. **SEO Optimization**
   - Add structured data (Schema.org)
   - Generate sitemap.xml
   - Add robots.txt
   - Optimize images (lazy loading, WebP format)
   - Add Open Graph tags for social sharing

### P2 Features (Nice to Have)
1. **Blog Section**
   - Construction tips and guides
   - Project case studies
   - Industry news

2. **Quote Calculator**
   - Interactive tool to estimate project cost
   - Based on area, package, and features

3. **Multi-language Support**
   - English and Marathi language options

4. **Advanced Contact Features**
   - Schedule consultation/site visit
   - Upload project requirements/sketches
   - Live chat support

---

## Next Tasks
1. Obtain Google Analytics tracking ID from client
2. Decide on email service (SendGrid vs SMTP)
3. Implement backend API for contact form
4. Set up MongoDB schema for contact submissions
5. Integrate email notifications
6. Test end-to-end functionality with real email delivery

---

## Technical Stack
- **Frontend:** React, Tailwind CSS, shadcn/ui, Lucide React icons
- **Backend (Planned):** FastAPI, Python
- **Database (Planned):** MongoDB
- **Email Service (Planned):** SendGrid or SMTP
- **Analytics:** Google Analytics (placeholder ready)
- **Hosting:** Emergent Platform

---

## Design Guidelines Followed
✅ No purple/pink gradients  
✅ Warm construction colors (greys, whites, amber accents)  
✅ Icons from lucide-react (no emojis)  
✅ Proper spacing and whitespace  
✅ Smooth animations on all interactions  
✅ Professional shadows and hover effects  
✅ Mobile-first responsive design  
✅ Accessibility considerations (focus states, ARIA labels)  

---

## Notes
- Website is fully functional as a frontend-only application
- All interactive elements work (calls, WhatsApp, email, Instagram)
- Contact form currently saves to browser localStorage
- Google Analytics code is ready - just needs tracking ID
- Real project images from client are integrated
- Design follows professional agency-level standards
