# ClearSocial Production Codebase Structure

```text
clear-social-next/
  .env.example
  .eslintrc.json
  .github/
    workflows/
      ci.yml
  .gitignore
  README.md
  PROJECT_STRUCTURE.md
  app/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    about-section.tsx
    catalog-section.tsx
    connect-section.tsx
    footer.tsx
    header.tsx
    hero-section.tsx
    latest-release.tsx
    release-card.tsx
    release-modal.tsx
  lib/
    utils.ts
  next-env.d.ts
  next.config.ts
  package.json
  postcss.config.js
  public/
    images/
      about-reflection.jpg
      born-to-feel-loved.jpg
      dance-with-you.jpg
      hero-logo-atmosphere.jpg
      moment-in-time.jpg
      o-yeah.jpg
      your-touch.jpg
    previews/
      desktop-home-mockup.png
      desktop-overlay-mockup.png
      mobile-home-mockup.png
      mobile-overlay-mockup.png
  releases/
    catalog.ts
  tailwind.config.ts
  tsconfig.json
  types/
    release.ts
  vercel.json
```

## Architecture

- `app/` contains the Next.js App Router entry points, global styles, metadata, robots, and sitemap.
- `components/` contains reusable UI sections and release-specific components.
- `releases/catalog.ts` is the typed content source for the current static catalog.
- `types/release.ts` defines the release schema.
- `lib/utils.ts` contains shared helpers.
- `public/images/` stores production image assets.
- `.env.example` is ready for future Supabase and site URL configuration.

## Deployment

The project is Vercel-compatible and can be deployed directly after pushing to GitHub.

```bash
npm install
npm run build
```

