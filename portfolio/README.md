# Alex Kim — IT Infrastructure Engineer Portfolio

A static, dependency-free portfolio site (HTML/CSS/JS only — no build step, no framework).
Open `index.html` in any browser, or deploy the folder as-is to any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc).

## Structure
```
portfolio/
├── index.html        ← all page content and structure
├── css/style.css      ← design tokens + all styling (light/dark themes)
├── js/main.js          ← theme toggle, mobile nav, accordion, filter, scroll reveal
└── assets/
    ├── resume.pdf       ← ADD YOUR REAL RESUME HERE (same filename)
    └── gallery/          ← put real photos here, see below
```

## What to replace before publishing

1. **Name & identity** — search `index.html` for `Eunsoo Cho` and replace with your name
   (appears in `<title>`, hero, footer). Update the nav logo text `Eunsoo Cho`.
2. **Contact info** — in the Contact section, replace:
   - `universe5383@gmail.com` → your email (appears twice)
   - LinkedIn URL `www.linkedin.com/in/eunsooannacho`
\\   - GitHub URL `https://github.com/your-username`
3. **Resume** — drop your real PDF at `assets/resume.pdf` (same filename, used by 3 download buttons).
4. **Career section** — replace `Company Name Inc.` / `Previous Company Inc.` and the bullet points
   with your real employers, dates, responsibilities, and achievements.
5. **Gallery photos** — the 8 gallery tiles are placeholders (icon + label + "REPLACE IMAGE" tag).
   To use a real photo, replace a `.gallery-item` block's inner `<svg>...</svg>` with:
   ```html
   <img src="assets/gallery/rack.jpg" alt="Server rack">
   ```
   and remove the `<span>` label if you prefer the photo alone, or keep it as a caption below the image.
6. **Project details** — the 8 case studies under Projects are written from the project list you gave me.
   Adjust specifics (numbers, vendor names, exact tools) to match reality — interviewers will ask
   follow-up questions, so keep every claim true to what you actually did.

## Features included
- Sticky nav with scrollspy (active section highlight)
- Light/dark mode (auto-detects system preference, toggle in nav)
- Mobile responsive nav (hamburger menu)
- Project filter bar by category (Migration / Infrastructure / Networking / Cloud / Database / Security / Asset Mgmt)
- Expandable case-study cards (Overview → Problem → Role → Tech → Process → Solution → Result → Lessons Learned)
- 6 hand-drawn SVG architecture diagrams (office network, server room rack, Intune flow, Windows 11 deployment wave, Cisco phone config, cabling map)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Back-to-top button
- No external JS dependencies — only Google Fonts (Inter + JetBrains Mono) loaded via CDN

## Notes
- All colors are CSS custom properties in `:root` / `html[data-theme="dark"]` in `style.css` —
  change the palette in one place and it propagates everywhere, including inside the SVG diagrams.
- The small "SESSION 00:00:00" mono timer in the nav (desktop only) is a subtle nod to the
  infrastructure/uptime theme — purely cosmetic, resets on page reload.
