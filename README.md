# FUTURE_FS_01 — Personal Portfolio Website

> **Future Interns** · Full Stack Web Development Track · Task 1 of 3

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://portfolio-alove.netlify.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 🔗 Live Demo

**[portfolio-alove.netlify.app](https://portfolio-alove.netlify.app)**

---

## 📋 Task Completion Checklist

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Interactive resume & portfolio sections | ✅ | About, Skills, Projects, Experience, Internship |
| Contact form with email notifications | ✅ | Web3Forms API — delivers to inbox, no backend |
| SEO-friendly structure | ✅ | `<meta>` description, og:tags, semantic HTML5 |
| Live deployment | ✅ | Netlify — auto-deploy from GitHub |

### Bonus features delivered
- ✅ **EN / FR language switcher** — full bilingual UI, zero external library
- ✅ **CV download** — accessible from nav, hero, about and contact sections
- ✅ **Academic & professional timeline** — BEPC → BAC → ESIG + internship experience
- ✅ **Internship progress tracker** — live status on all 3 tasks + program roadmap
- ✅ **6 custom animations** — particles, counters, 3D tilt, stagger, SVG draw, nav pill
- ✅ **Fully commented codebase** — every design decision documented inline

---

## 🎨 Design — "Forest + Indigo"

The visual identity was built from scratch to avoid the
dark-navy + neon-cyan + glassmorphism aesthetic that has become the default
output of AI-generated portfolio templates.

### Color palette

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#10160F` | Deep forest green — page background |
| `--accent` | `#7C8FE8` | Indigo blue — replaces cyan everywhere |
| `--text` | `#F2F0E8` | Warm off-white — not stark `#ffffff` |
| `--text-secondary` | `#9CA89A` | Sage grey for body copy |

### Typography — 3 fonts, 3 jobs

| Font | Role | Rationale |
|------|------|-----------|
| **Fraunces** | Hero name & section headings | Chunky display serif — strong character, warm feel |
| **Sora** | Body copy & UI text | Geometric sans — clean, readable at small sizes |
| **Space Mono** | Technical labels only | Stack tags, index numbers, status badges — meaningful, not decorative |

Reserving `Space Mono` strictly for technical-feeling elements keeps it
significant. Using mono everywhere would turn it into decoration.

---

## ✨ Features

### Sections
| Section | Content |
|---------|---------|
| **Hero** | Typed name animation · floating particle canvas · animated stat counters |
| **About** | Bio · academic timeline (BEPC → BAC → ESIG) · spec-sheet info card |
| **Skills** | 7 skill groups · stagger reveal animation on scroll |
| **Projects** | 5 projects with live links · 3D tilt hover · live/wip status badges |
| **Experience** | Professional timeline (Future Interns · SECOPS · CISCO certification) |
| **Internship** | Task 1–3 tracker with status · program roadmap visualization |
| **Contact** | Web3Forms form · email delivery · CV download link |

### Animations (6, all Vanilla JS/CSS — no library)

| Animation | Trigger | Technique |
|-----------|---------|-----------|
| Floating particle canvas | Continuous | Canvas 2D API · `requestAnimationFrame` |
| Typed hero name | Page load | Recursive `setTimeout` |
| SVG line draw | Page load | CSS `stroke-dashoffset` animation |
| Stat counters 0 → N | Hero enters viewport | `IntersectionObserver` + easeOutQuart |
| Skill tag stagger | Skills enters viewport | `IntersectionObserver` + `setTimeout` delays |
| 3D card tilt | Mouse hover | `mousemove` → `perspective()` + `rotateX/Y` |
| Nav indicator pill | Scroll / hover | `IntersectionObserver` + dynamic `left/width` |
| Scroll reveal | Each section enters viewport | `IntersectionObserver` + CSS `opacity/transform` |

### EN / FR i18n — no library

Every UI string lives in a `const i18n = { en: {…}, fr: {…} }` object
in `main.js`. `applyLang(lang)` walks all `[data-i18n]` elements and
replaces `innerHTML` and `placeholder` attributes in one pass.
The active language is highlighted in the nav toggle via a `.fr` CSS class.
Adding a third language requires only one new object — no framework needed.

---

## 🛠 Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Markup | HTML5 | Semantic elements, accessibility attributes, SEO meta |
| Styles | CSS3 — custom properties | Zero framework — full control over every design token |
| Logic | Vanilla JS (ES2020+) | No build step, no bundler, fully auditable code |
| Fonts | Google Fonts | Fraunces · Sora · Space Mono |
| Contact | Web3Forms API | Free email delivery without a custom backend |
| Hosting | Netlify | Continuous deployment from GitHub |

### Why Vanilla JS and not React?

The internship brief lists React as "recommended" for Task 1 but explicitly
marks backend and database as "optional". For a static portfolio — a site with
no shared state, no dynamic data fetching, no component reuse at scale — React
would introduce a build pipeline and bundle overhead with zero visual or UX gain.

Web3Forms replaces the Node.js backend for the contact form, which is a sound
architectural decision: the right tool for the scope of the problem.

React is used intentionally in **Task 2** (Mini CRM), where component-based UI,
shared state management across a lead list, and API data fetching genuinely
justify the framework overhead.

---

## 📁 Project Structure

```
FUTURE_FS_01/
├── index.html        # Single-page, all 7 sections, i18n attributes, SEO meta
├── src/
│   ├── style.css     # Design tokens → layout → components → animations → responsive
│   ├── main.js       # i18n engine · animations · form · nav logic
│   └── cv.pdf        # Downloadable CV
└── README.md
```

### `style.css` — internal organization
```
Design tokens (CSS custom properties)
Reset & base styles
Utilities (.accent, .mono)
Button variants (primary, ghost, outline, cv pill)
Nav + lang toggle + mobile burger
Hero section + SVG organic line
About section + academic timeline
Skills grid
Projects grid + status badges
Experience timeline
Internship task cards + program roadmap
Contact form
Footer
Animation classes (reveal, tag stagger, SVG draw)
Responsive breakpoints (900px · 768px · 600px · 480px)
prefers-reduced-motion override
```

### `main.js` — internal organization
```
i18n translations (EN + FR, all UI strings)
applyLang() — applies translations to all [data-i18n] elements
Lang toggle click handler
Typed name effect
Nav scroll border + active link tracking
Mobile burger menu
Scroll reveal (IntersectionObserver)
Contact form (Web3Forms)
Particle canvas (hero background)
Animated stat counters
3D card tilt on hover
Skill tag stagger
SVG path draw
Nav indicator pill
```

---

## 📦 Projects Showcased

| Project | Type | Stack | Link |
|---------|------|-------|------|
| Dinease | Mobile App | Flutter · Dart · Firebase | [GitHub](https://github.com/resval696) |
| Smart Budget Planner | Web App | JS · Chart.js | [Live](https://smart-budgetplanner.netlify.app) |
| EcoWeather | Web App | JS · OpenWeatherMap API | [Live](https://eco-wheater.netlify.app) |
| GymNova | Landing Page | HTML · CSS · JS · Figma | [Live](https://resval696.github.io/gym-nova/) |
| AutoÉcole Online | Full Stack | React · Node.js · MongoDB | In progress |

---

## 🗂 Internship Progress — FUTURE_FS Track

| Task | Repo | Description | Status |
|------|------|-------------|--------|
| Task 1 | `FUTURE_FS_01` | Personal Portfolio Website | ✅ Done |
| Task 2 | `FUTURE_FS_02` | Client Lead Management System (Mini CRM) | ◌ In progress |
| Task 3 | `FUTURE_FS_03` | Local Business Website & Live Pitch | ○ To do |

---

## 👤 Author

**ALOVE Koffi Israël** · `vadlord`

Licence Développement d'Applications — ESIG Global Success, Lomé, Togo  
[github.com/resval696](https://github.com/resval696)

---

*Future Interns · Full Stack Web Development Track · FUTURE_FS_01*
