# Project notes for agents

- This is a single-page apartment marketing site using Next.js App Router, React, TypeScript and Tailwind CSS 4. Keep edits consistent with the existing design; avoid broad visual rewrites unless requested.
- Main page content and apartment/gallery data live in `app/page.tsx`. Metadata and fonts are in `app/layout.tsx`; shared interactive pieces are in `components/`.
- Images are stored in `public/img/`. Use `next/image`, provide accurate dimensions or a wrapper with a stable aspect ratio, and set responsive `sizes` for fill images. Keep below-the-fold images lazy; prioritize only above-the-fold LCP candidates.
- Reservations are contact-only (phone/email). There is no booking backend, availability feed, or calendar integration. Do not add external booking services unless explicitly requested.
- Use Node.js 20.9 or newer. Available checks are `npm run lint` and `npm run build`.
