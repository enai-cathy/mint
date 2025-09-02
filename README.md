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
