# ClearSocial Catalog

Production-ready Next.js 15 + Tailwind CSS + TypeScript project for the
ClearSocial one-page music catalog website.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics
- Static release data, ready to replace with Supabase later

## Project Structure

```text
clear-social-next/
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
  releases/
    catalog.ts
  types/
    release.ts
  public/
    images/
    previews/
  vercel.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment

This project is ready for GitHub and Vercel.

1. Push `clear-social-next` to a GitHub repository.
2. Import the repository in Vercel.
3. Add environment variables from `.env.example` if needed.
4. Deploy.

## Updating Releases

Release content lives in:

```text
releases/catalog.ts
```

Each release includes:

- title
- artist
- type
- year
- cover image
- short description
- story
- LANDR/distribution URL
- details for the overlay

The real LANDR URL for `Dance With You` is already wired:

```text
https://artists.landr.com/055120728266
```

## Supabase Later

The current project uses static typed data. When ready, Supabase can replace or
augment `releases/catalog.ts` with tables such as:

- releases
- artists
- release_links
- tracks
- contacts
- mailing_list_signups

Recommended future setup:

- Add `@supabase/supabase-js`
- Create `lib/supabase/client.ts`
- Keep public reads cached through Server Components where possible
- Use API routes or Server Actions for contact form submissions
