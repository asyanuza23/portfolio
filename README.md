# L'ATELIER ROUGE — EDITORIAL PLAYGROUND & CREATIVE ARCHIVE

An original, elegant, and playful personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript**. Designed as an interactive digital scrapbook and independent art-directed editorial magazine.

---

## 🍒 Creative Direction & Aesthetics

- **Theme:** Elegant Editorial + Playful Minimalism
- **Atmosphere:** Independent creative studio meets high-fashion art zine and curated scrapbook.
- **Visual Devices:**
  - **Tactile Scrapbook Ephemera:** Translucent washi masking tape, pushpins, serrated airmail postage stamps, polaroid frames with handwritten notes (*Caveat*), and a live corkboard memo vault.
  - **Interactive Digital Sticker Tray:** A floating dock allowing visitors to stamp stickers anywhere on the screen (🍒 Cherries, 🎀 Silk Bows, ✦ Starbursts, ♡ Hearts, 💮 Postmarks, 🏷️ Washi Tape) with drag-and-drop repositioning and double-click to remove.
  - **Synthesized Ambient Studio Audio:** A built-in ambient lo-fi soundscape (warm pink noise + Satie-inspired dream chord) generated live via the Web Audio API with animated audio bars — **zero external audio dependencies**.
  - **Asymmetrical Magazine Layout:** Dynamic column spans (`spread-tall`, `spread-wide`, `spread-standard`), folio indicators, editorial barcodes, registration marks, and quick-look modal dossiers.
  - **Live Running Folio Clock:** Real-time CET studio clock in the masthead.

---

## 🎨 Color Identity

| Color Role | Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | Warm Ivory | `#F7F4EE` | Overall background, clean paper canvas |
| **Secondary Surface** | Soft Cream | `#EDE8DF` | Card surfaces, polaroid backgrounds, tags |
| **Borders & Dividers** | Sand Beige | `#DCD3C6` | Subtle hairlines, editorial grid dividers |
| **Muted Text & Metadata** | Warm Grey | `#A8A29A` | Folio labels, captions, dates |
| **Primary Typography** | Charcoal | `#252525` | Headlines, prose, high-contrast editorial serifs |
| **Signature Accent (10–15%)** | **Cherry Red** | **`#C62838`** | Highlighted words, stamps, stickers, pins, buttons, active dots |

---

## 🗂️ File Architecture

```text
portfolio/
├── index.html        # Semantic HTML5 layout, editorial folios, collage hero, memo vault
├── styles.css        # Pure CSS design system, typography, scrapbook elements, responsive queries
├── script.js         # Interactive sticker stamping, Web Audio ambient generator, modal dossiers, clock
└── README.md         # Documentation & customization guide
```

---

## 🚀 How to Run & Preview

Since this project uses pure vanilla web technologies with **zero build tools or dependencies**, you can preview it immediately:

1. **Directly in Browser:** Double-click `index.html` to open in any web browser.
2. **Local Development Server:**
   ```bash
   # Using Python 3:
   python3 -m http.server 8000

   # Or using npx:
   npx serve .
   ```
   Open `http://localhost:8000` in your browser.

---

## ✏️ Customization Guide

- **Personal Information:** Update the name "Valérie Vance" and email `bonjour@valerievance.studio` in `index.html` and `script.js`.
- **Works & Projects:** Edit the `WORK_DOSSIERS` object at the top of `script.js` to change titles, clients, years, materials, and curatorial notes.
- **Imagery:** Replace the Unsplash imagery URLs in `index.html` and `script.js` with your own photography or creative project mockups.
