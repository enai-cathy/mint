# Mint — Next.js App Router Course Starter (Dashboard + MDX Blog)

> A modern, production-ready starter for building dashboard-style apps and content sites with the Next.js App Router.  
> Built with TypeScript, Tailwind CSS, and MDX support — optimised for developer experience, accessible UI, and quick iteration.

---

## Why this starter

If you want a polished, maintainable codebase that’s ready for feature work or demonstration to stakeholders, **Mint** is designed to deliver:

- **Modern stack**: Next.js App Router, TypeScript and Tailwind — fast developer feedback loops and predictable types.
- **Content + UI**: Integrated MDX blog support (`content/blog/` + `mdx-components.tsx`) so marketing content, docs, or case studies live in the same repo.
- **Dashboard layout**: App structure under `app/` provides a natural place for authenticated dashboards, admin panels, or analytics pages.
- **Production-conscious defaults**: config files present (Tailwind, PostCSS, Next config) so deployments to Vercel (or similar) are straightforward.
- **Easy to extend**: clear file structure and example components make it fast to add new routes, pages, or data integrations.

---

## What’s included 

Files & folders present at project root :

- `app/` — Next.js App Router application code (pages / dashboard / UI).
- `content/blog/` — MDX-based blog posts / content.
- `public/` — static assets (images, icons).
- `mdx-components.tsx` — MDX component mappings (custom renders for headings, code blocks, etc.).
- `next.config.ts` — Next.js configuration.
- `tailwind.config.ts` & `postcss.config.js` — styling toolchain.
- `.env.example` — environment variable examples.
- TypeScript: `tsconfig.json` and TypeScript source files (codebase is TypeScript-first).
- Lockfiles: `package-lock.json` and `pnpm-lock.yaml` (supports npm and pnpm workflows).

> Languages detected: **TypeScript**, **MDX**.

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Content**: MDX for blog/content pages
- **Bundler/Runtime**: Next.js defaults (ready for Vercel/other hosts)
- **Dev tooling**: ESLint config included

---

## Quick start (developer)

> Use whichever package manager you prefer — `npm` or `pnpm` — both are supported by lockfiles in the repo.

1. Clone:
```bash
git clone https://github.com/enai-cathy/mint.git
cd mint

2.Install dependencies:

# npm
npm install
# or pnpm
pnpm install

3.Copy environment example:

cp .env.example .env.local
# then edit .env.local as needed

4.Run development server:

# npm
npm run dev
# or pnpm
pnpm dev

5.Build for production:

npm run build
npm run start


If a script name differs in your package.json, use that script. The repo includes the standard Next.js configuration files.
```

## Project structure (summary view)

/app
  └─ (Next.js App Router routes & layouts — dashboard, pages, APIs)
content/
  └─ blog/         (MDX blog posts)
public/            (images, favicons, static files)
mdx-components.tsx (MDX component mapping for headings, code, etc.)
next.config.ts
tailwind.config.ts
postcss.config.js
.env.example
tsconfig.json
package.json

## Features & extension ideas

Mint makes it easy to add useful product features:

- Auth & role-based dashboards (hook a provider like Clerk, NextAuth, or JWT).

- Data visualisations (integrate Recharts, Chart.js, or Recharts + server-sent data).

- Headless CMS or CMS-like workflows (connect Contentful, Sanity, Supabase, or use Git-based MDX editing).

- Analytics & A/B testing (Vercel analytics, Plausible, GA4).

- E2E / integration tests (Cypress / Playwright) and CI (GitHub Actions).



### This repo demonstrates modern web engineering fundamentals: typed code (TypeScript), componentised UI, content-first thinking (MDX), and production-measured configuration. It’s ideal as both a showcase app to present to clients and a robust starting point for building feature-rich dashboards and marketing sites.



### Mint lets teams ship content and product features faster. Want a landing page + blog, plus an analytics/admin dashboard for editors and managers? Mint contains the structure and examples to deliver both with a single, maintainable stack — faster time-to-value and lower engineering cost.

## Contributing & next steps

- Add examples for authentication and API routes if you want an auth-enabled demo.

- Expand content/blog/ with use-case posts (case studies, metrics, product copy) to show stakeholders real content.


## Contact

GitHub: enai-cathy/mint


---

