# AquibX — Personal Portfolio

A premium, animated, fully responsive portfolio built with **React 18 + Vite + Tailwind CSS + Framer Motion**, for Md Akib Khan (Final Year B.Tech CSE Student & Frontend Developer).

## ✨ Features

- Dark / light mode toggle (persisted)
- Typing animation hero, particle + gradient-mesh background, custom cursor
- Scroll-reveal animations throughout (Framer Motion)
- Skills, Projects, Education (timeline), Certifications (lightbox gallery), Connect, and Contact sections
- Contact form wired to **EmailJS**, with validation, loading state, duplicate-submission prevention, and a 30s client-side rate limit
- SEO metadata (Open Graph + Twitter Cards), `robots.txt`, `sitemap.xml`, favicon
- All content centralized in `src/data/data.js` — update projects, skills, or certificates in one place

## 🚀 Getting started

```bash
npm install
npm run dev       # starts local dev server (usually http://localhost:5173)
npm run build      # production build to /dist
npm run preview     # preview the production build locally
```

## 🔐 Environment variables (EmailJS)

Your EmailJS credentials are already populated in `.env` (create it from `.env.example` if it's missing):

```
VITE_EMAILJS_SERVICE_ID=service_b6j19uo
VITE_EMAILJS_TEMPLATE_ID=template_zg2l7gp
VITE_EMAILJS_PUBLIC_KEY=ex0i9OqTsPpoJCnPy
```

**Important:** in your EmailJS template, make sure the template body/subject use these exact merge tags: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`. Also confirm the template's "To email" field is set to your Gmail address so submissions land in your inbox.

`.env` is already excluded via `.gitignore` — never commit it to a public repo. If you ever need to rotate the EmailJS public key, do it from the EmailJS dashboard and just update `.env`.

## 🗂 Updating content

Everything you'll want to change lives in **`src/data/data.js`**:
- `projects` — add a new object with `title`, `description`, `tech`, `github`, `demo`, `icon` (`image` | `mic` | `grid`)
- `certifications` — drop a new image into `src/assets/certs/`, import it at the top of `data.js`, and add an entry
- `skills`, `education`, `socials`, `navLinks` — same pattern

## 🖼 Assets

- `src/assets/profile.jpg` — your profile photo (used in Hero + About, cropped via `object-fit: cover` inside a fixed circular frame)
- `public/resume.pdf` — powers the "Download Resume" button (served at `/resume.pdf`)
- `src/assets/certs/*` — certificate images used in the Certifications gallery

## 🌐 Deploying

This is a static Vite build, so it deploys cleanly to **Vercel**, **Netlify**, or **GitHub Pages**:

1. `npm run build`
2. Deploy the generated `/dist` folder (or connect your GitHub repo directly to Vercel/Netlify — both auto-detect Vite)
3. Add the same three `VITE_EMAILJS_*` environment variables in your hosting provider's dashboard (Vercel/Netlify project settings), since your local `.env` is never uploaded
4. Update the `og:url`, `canonical`, and `sitemap.xml` domain once you have your real production URL

## ℹ️ A note on "Connect With Me" live data

The brief asked for live profile stats (GitHub/LinkedIn/Instagram/X) where the platform APIs allow it. In practice, GitHub, LinkedIn, Instagram, and X don't provide public, key-free endpoints for this kind of unauthenticated, client-side fetch — pulling live data would require a backend proxy plus OAuth for each platform. To keep this deployable as a static site without exposing private API tokens in the browser, the Connect cards currently render your provided profile details directly (which is also the explicit fallback behavior requested in the brief). If you'd like, this can be extended later with a small serverless function per platform.

## 🧱 Tech stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · React Router (available, not yet used for multi-page routing) · EmailJS
