# Sara Santos Portfolio

Personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn-style UI primitives. The site presents Sara Ataide Santos's profile, experience, featured projects, and contact information in a clean multi-page layout with light and dark theme support.

## Overview

This project is a developer portfolio focused on:

- a homepage with a concise hero section
- an about page with profile cards, experience, education, and skills sections
- a projects page with featured work cards linking to GitHub repositories
- a contact page with direct links and a contact form UI
- theme switching with persisted light and dark modes

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- Radix UI icons
- shadcn/ui-style component setup

## Pages

- `/` - hero and main introduction
- `/about` - profile summary, experience, education, and skills
- `/projects` - featured projects grid
- `/contact` - email, LinkedIn, GitHub, and contact form

## Project Structure

```text
app/
  about/page.tsx
  contact/page.tsx
  projects/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  contactForm.tsx
  education.tsx
  experience.tsx
  footer.tsx
  header.tsx
  hero.tsx
  projects-cards.tsx
  provider.tsx
  skills.tsx
  theme-toggle.tsx
  ui/
lib/
public/
  docs/
  images/
types/
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Installation

```bash
npm install
```

### Run In Development

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Current Content

The portfolio currently highlights Sara's background in:

- web development with React, Next.js, Node.js, and JavaScript
- data and BI work with Power BI, SQL, and Python
- machine learning and text mining studies at ISCTE
- academic and internship experience across IPS, ISCTE, Volkswagen Autoeuropa, Caixa Magica, and Valtech

Featured repositories shown on the projects page include:

- Job Application
- BookStore
- Weather Application
- todo-app

## Notes

- The contact form is currently a presentational UI and does not submit data to a backend or email service.
- Images used by the portfolio are stored under `public/images`.
- The root layout loads Google fonts and wraps the app with a theme provider.

## Customization

To adapt this portfolio for new content, the main places to update are:

- `components/hero.tsx` for the landing copy and profile image
- `app/about/page.tsx` plus the related section components for profile details
- `components/projects-cards.tsx` for featured projects
- `app/contact/page.tsx` and `components/contactForm.tsx` for contact details and form behavior
- `app/layout.tsx` for site metadata

## Author

Sara Ataide Santos

- GitHub: https://github.com/Sara18Santos
- LinkedIn: https://www.linkedin.com/in/sara-ata%C3%ADde-santos-34933a224/
- Email: sataide.santos@gmail.com