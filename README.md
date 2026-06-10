# FLUX — Landing Page

Marketing site for **FLUX**, a progressive overload tracker built Arabic-first. Brutal honesty, no gamification — every set, every rep, every kg documented.

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- Plain CSS (modular, no UI framework)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Type check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── FluxLanding.tsx          # Page composer
├── main.tsx                 # App entry
└── landing/
    ├── components/          # Section components (Nav, Hero, Features, etc.)
    ├── data/
    │   └── content.ts       # Static copy & demo data
    ├── hooks/
    │   └── useReveal.ts     # Scroll reveal animation
    └── styles/              # Section-scoped CSS
        ├── index.css        # Style entry point
        ├── base.css
        ├── nav.css
        ├── hero.css
        └── ...
```

## Sections

| Section    | Description                                      |
| ---------- | ------------------------------------------------ |
| Hero       | Headline, PR background, early access CTA        |
| Ticker     | Scrolling feature keywords                       |
| Stats      | Product metrics                                  |
| Manifesto  | Problem statement vs. typical fitness apps       |
| Features   | Six core capabilities                            |
| Log Demo   | Live session widget preview                      |
| CTA        | Email waitlist signup                            |
| Footer     | Brand & copyright                                |

## Design

- **Fonts:** Bebas Neue (display), Courier Prime (body), Cairo (nav links)
- **Palette:** Black `#080808`, off-white `#EDEBE6`, lime `#C8FF00`

---

Developed by JINX
