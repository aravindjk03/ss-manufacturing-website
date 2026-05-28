# SS Manufacturing Private Limited — Corporate Website

  Official corporate website for **SS Manufacturing Private Limited (SSMPL)**, a Chennai-region automotive safety component manufacturer near Kanchipuram, Tamil Nadu.

  ## Tech Stack

  - **React 19** + **Vite 7** + **TypeScript**
  - **Tailwind CSS v4** (dark navy / steel gray / red accent palette)
  - **Framer Motion** — scroll animations, counter animations, page transitions
  - **shadcn/ui** — Radix UI primitives
  - **Wouter** — lightweight client-side routing

  ## Pages

  | Route | Page |
  |---|---|
  | `/` | Home — hero, customers, products, certifications, ESG teaser, stats, CTA |
  | `/about` | About Us — overview, vision/mission, values, timeline |
  | `/products` | Products — seat belts, retractors, buckles, safety assemblies |
  | `/esg` | ESG & Sustainability — E/S/G pillars, commitments, certifications |
  | `/policies` | Policies — 8 policy accordion items |
  | `/infrastructure` | Infrastructure — facility, capabilities, process flow |
  | `/contact` | Contact — validated inquiry form, address, map |

  ## Certifications

  IATF 16949 · ISO 14001 · ISO 45001 · ISO 50001 · ISO 27001 · ISO 37001

  ## Deploy

  ### Cloudflare Pages (Recommended)

  1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Pages
  2. Connect this GitHub repository
  3. Set **Build command**: `npm run build`
  4. Set **Output directory**: `dist`
  5. Click Deploy

  ### Netlify

  Build command: `npm run build`
  Publish directory: `dist`

  ### Vercel

  Import repository — zero config needed (auto-detected).

  ### Manual build

  ```bash
  npm install
  npm run build
  # Serve the dist/ folder on any static host
  ```

  ## Local Development

  ```bash
  npm install
  npm run dev
  ```

  ---

  © 2025 SS Manufacturing Private Limited (SSMPL). All Rights Reserved.
  