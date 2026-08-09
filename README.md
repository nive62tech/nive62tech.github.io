# Niveditha S Nair — Portfolio Website

Personal portfolio website for **Niveditha S Nair**, B.Tech AI & ML student at Chinmaya Vishwavidyapeeth.  
Live at → **[nive62tech.github.io](https://nive62tech.github.io)**

---

## Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, no frameworks) |
| Logic | Vanilla JavaScript (no build tools) |
| Hosting | GitHub Pages |
| Fonts | Outfit · JetBrains Mono (Google Fonts) |

No React. No Node. No dependencies. Just two files — `index.html` and `style.css`.

---

## File Structure

```
nive62tech.github.io/
│
├── index.html              ← entire site — all content, sections, JS
├── style.css               ← all styling
├── README.md               ← this file
│
├── images/
│   ├── profile.jpg         ← hero portrait (half-body, PNG with transparent bg recommended)
│   ├── hero-poster.jpg     ← video fallback image
│   │
│   ├── vizora.jpg          ← project card + modal main image
│   ├── vizora-1.jpg        ← project gallery image 1
│   ├── vizora-2.jpg        ← project gallery image 2
│   ├── promptlens.jpg
│   ├── neuronote.jpg
│   ├── airwriter.jpg
│   ├── projectpilot.jpg
│   ├── emojitranslator.jpg
│   │
│   ├── exp/
│   │   ├── sauvc.jpg       ← SAUVC experience card image
│   │   ├── sauvc-1.jpg     ← SAUVC gallery image
│   │   ├── sauvc-2.jpg
│   │   ├── ieee.jpg
│   │   ├── ieee-1.jpg
│   │   ├── backend.jpg
│   │   └── debate.jpg
│   │
│   └── research/
│       ├── paddy-1.jpg     ← presentation/poster photos
│       ├── paddy-poster.jpg
│       ├── skin-tone-1.jpg
│       ├── skin-tone-pres.jpg
│       ├── coral-poster.jpg
│       ├── coral-1.jpg
│       └── emotional-pres.jpg
│
└── videos/
    └── hero-bg.mp4         ← hero background video (dark ambient loop)
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen video background, name, typewriter role, portrait, CTA buttons |
| **About** | Bio, education card, 4 stat cards, skills by category |
| **Projects** | Bento grid with category filters + load more. Click → in-page modal with gallery, highlights, clone command |
| **Experience** | Clickable cards for internships + roles. Click → modal with image gallery |
| **Research** | Papers list with Paper/IEEE links. Click → modal with presentation photos |
| **Achievements** | Competition wins and awards |
| **Contact** | Direct links + contact form |

---

## Features

- **Video hero background** — fullscreen looping video with dark overlay
- **In-page project modal** — no page redirects; click a card → modal slides up with image gallery, highlights, GitHub link, clone command with copy button
- **Experience galleries** — internship and role cards open the same modal with photos
- **Research galleries** — papers open with presentation photos + direct paper link button
- **Category filter** — filter projects by AI/ML, Computer Vision, Mobile, NLP, Tools, Open Source
- **Load More** — shows 6 projects at a time; expands on click
- **Typewriter effect** — cycling role descriptions in the hero
- **Scroll reveal animations** — sections animate in as you scroll
- **Responsive** — works on mobile, tablet, desktop
- **No external dependencies** — loads fast, works offline after first load

---

## How to Run Locally

No build step needed. Just open the file:

```bash
git clone https://github.com/nive62tech/nive62tech.github.io.git
cd nive62tech.github.io

# Open directly in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or use VS Code Live Server extension for hot reload.

---

