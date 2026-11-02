# Leap Sports Co. — Website Project

## Student Information
- **Module:** Web Development (Introduction), WEDE5020
- **Student:** Kamogelo Modiba
- **Student Number:** ST10511953
- **Group:** 1
- **Target Organisation:** Leap Sports Co. (fictional)

---

## Project Overview
Leap Sports Co. is a fictional, locally owned sports brand founded in 2015.
Starting out by supplying a single local running club, the business has grown
to supply footwear, apparel, and training accessories to amateur athletes and
fitness enthusiasts in the community. This project delivers a functional,
responsive, five-page website for Leap Sports Co., built with semantic HTML5
and CSS3, as the Web Development Introduction Portfolio of Evidence (PoE).

---

## Website Goals and Objectives
- Increase brand awareness and online visibility for Leap Sports Co.
- Increase online traffic to a searchable, professional web presence.
- Generate qualified product and stock enquiries through a simple enquiry form.

**Key Performance Indicators (KPIs):**
- Monthly website visitors and page views
- Average time on site
- Number of enquiry/contact form submissions

---

## Key Features and Functionality
- Responsive navigation menu linking all five pages
- Homepage with a hero section, brand introduction, and quick links
- About page with company history, mission/vision, and team profiles
- Products page outlining the footwear, apparel, and accessories ranges
- Enquiry page with a product/stock enquiry form
- Contact page with two store locations, embedded maps, and a contact form

---

## Timeline and Milestones
| Weeks | Milestone |
|-------|-----------|
| 1–2   | Research, planning, and project proposal |
| 3–5   | Content sourcing, sitemap, and initial HTML structure |
| 6–9   | Full HTML/CSS build and navigation across all pages |
| 10–12 | Testing and refinement |

---

## Sitemap
```
Leap Sports Co.
│
├── Home (index.html)
├── About (about.html)
├── Products (products.html)
├── Enquiry (enquiry.html)
└── Contact (contact.html)
```
All five pages link to one another directly via the main navigation menu
(a hub structure), rather than a strict parent-child hierarchy.

---

## File and Folder Structure
```
leap-sports-co/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
└── images/
```

---

## Design Notes
- **Colour scheme:** Navy (`#101c3d`) and red (`#e4402c`), as specified in the
  Website Project Proposal, plus a warm off-white (`#f5f3ee`) background.
- **Typography:** Anton (bold condensed display face) for headings, Work Sans
  for body text and UI labels.
- Product and team photography sourced from public domain/Creative Commons
  libraries, credited below under References.

---

## Part 1 Details
Part 1 (Building the Foundation) delivers:
- The Website Project Proposal (submitted separately as a Word/PDF document)
- The sitemap (above)
- A well-organised file/folder structure
- Five HTML pages with semantic structure, basic content, and working navigation
- This README, tracking the project overview and changelog

---

## Part 2 Details
Part 2 (Designing the Visuals) delivers:
- An external stylesheet (`css/style.css`) linked to all five pages
- Base styles (font-family, colour variables, CSS reset)
- Flexbox/Grid layout for the homepage hero and products page cards
- Media queries for tablet (768px) and mobile (480px) breakpoints
- Hover/focus states on navigation links and buttons
- Responsive images using `srcset`/`picture` where applicable

## Part 3 Details
Part 3 (Adding Interactivity) delivers:

- An external script (js/script.js) linked to all five pages
- All code wrapped in a DOMContentLoaded listener so it runs once the page has loaded
- Mobile navigation toggle that opens and closes the menu via an open class on .main-nav
- Accessibility support through aria-expanded updates and a button label that switches between     “Menu” and “Close”
- Auto-close of the mobile menu when a navigation link is chosen
- Generic client-side validation for the Enquiry and Contact forms, driven by the data-validate attribute
- Required-field checks that trim whitespace so empty or space-only entries are rejected
- Email format validation using a regular expression (text, @, domain and extension, no spaces)
- Telephone validation allowing digits, +, spaces, brackets and hyphens, with a minimum of seven characters
- Invalid fields flagged by toggling an invalid class on the parent .field wrapper for CSS highlighting
- Visitor feedback in the .form-status element: a customisable success message (via data-success-message) or an error prompt
- Live error clearing as the visitor types, and form.reset() after a successful submission
- Defensive checks (if (wrapper), if (status), if (toggle && nav)) to prevent errors on pages with different markup

---

## Changelog
| Date       | Change |
|------------|--------|
| 2026-08-14 | Initial project setup: file/folder structure, five HTML pages, README created. |
| 2026-08-30 | Part 1 feedback: [add specific corrections once received from lecturer] |
| 2026-09-01 | Part 2: added external stylesheet, base styles, and layout structure. |
| 2026-09-05 | Part 2: implemented responsive breakpoints for tablet and mobile. |
| 2026-10-12 | Part 3: created external script (`js/script.js`) and linked it to all five pages. |
| 2026-10-15 | Part 3: added mobile navigation toggle with `aria-expanded` support and auto-close on link click. |
| 2026-10-19 | Part 3: implemented client-side validation for the Enquiry and Contact forms (required fields, email and telephone formats). |
| 2026-10-22 | Part 3: added visitor feedback messages, live error clearing and form reset on successful submission. |
| 2026-10-25 | Part 3: tested forms and navigation across desktop, tablet and mobile; fixed issues found. |

---

## References
- Google Fonts, 2026. *Anton* and *Work Sans* [online]. Available at: https://fonts.google.com [Accessed 14 August 2026].
- Google Maps, 2026. *Google Maps embed* [online]. Available at: https://maps.google.com [Accessed 14 August 2026].
- The Independent Institute of Education (Pty) Ltd, 2026. *WEDE5020: Web Development (Introduction) — Portfolio of Evidence*. Module guide.

General references will continue to be compiled here as the project
progresses. Sources specific to the chosen organisation are listed in the
Website Project Proposal document.
