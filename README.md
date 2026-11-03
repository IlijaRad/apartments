# Apartments website

A one-page apartment marketing site built with Next.js App Router, TypeScript, React and Tailwind CSS.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads as files change.

## Useful commands

```bash
npm run lint   # Check code with ESLint
npm run build  # Create a production build
npm run start  # Serve the production build (run build first)
```

## Project map

- `app/page.tsx` — page sections, apartment details and home gallery
- `app/layout.tsx` — document metadata and font setup
- `components/` — header/mobile menu, reviews and back-to-top button
- `public/img/` and `public/logo.svg` — site images and logo

Reservations are handled by phone or email. There is no booking backend or availability calendar. The location section embeds a Google Map. Vercel provides the deployment URL used for absolute Open Graph URLs.
