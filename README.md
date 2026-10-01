# personal-web

Personal portfolio site — single-page (hero, skills, experience, projects, contact) built with Next.js App Router, Tailwind CSS 4, and shadcn/ui components.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS 4 + shadcn/ui (components live in `components/ui/`)
- Site content is hardcoded in `lib/content.ts`

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

## Deploy

Hosted on Vercel — every push to `main` auto-deploys. To set up elsewhere, import the repo; build settings are detected automatically (`next build`).

## Notes

- `npm run lint` currently fails due to an `eslint-plugin-react` incompatibility with ESLint 10 (upstream issue) — `npm run build` still type-checks and passes.
