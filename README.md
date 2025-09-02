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
```
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
```

## Features & extension ideas

Mint makes it easy to add useful product features:

- Auth & role-based dashboards (hook a provider like Clerk, NextAuth, or JWT).

- Data visualisations (integrate Recharts, Chart.js, or Recharts + server-sent data).

- Headless CMS or CMS-like workflows (connect Contentful, Sanity, Supabase, or use Git-based MDX editing).

- Analytics & A/B testing (Vercel analytics, Plausible, GA4).

- E2E / integration tests (Cypress / Playwright) and CI (GitHub Actions).



### This repo demonstrates modern web engineering fundamentals: typed code (TypeScript), componentised UI, content-first thinking (MDX), and production-measured configuration. It’s ideal as both a showcase app to present to clients and a robust starting point for building feature-rich dashboards and marketing sites.


### Mint lets teams ship content and product features faster. Want a landing page + blog, plus an analytics/admin dashboard for editors and managers? Mint contains the structure and examples to deliver both with a single, maintainable stack — faster time-to-value and lower engineering cost.


## Contributing & Next Steps

We welcome contributions, feedback, and collaboration! Whether you’re a developer, designer, or product enthusiast, here’s how you can help Mint grow:

### Contributing

1. **Fork the repo** and create a new branch for your feature or fix:
```bash
git checkout -b feature/your-feature-name
```
2. **Make your changes** following the existing file structure and coding conventions.
3. **Test your changes locally** to ensure the app and MDX blog pages render correctly.
4. **Submit a pull request** with a clear description of your updates.

> We encourage contributions for bug fixes, new features, documentation improvements, or UI/UX enhancements.

## Next Steps

- **Add authentication:** Integrate providers like NextAuth, Clerk, or JWT to enable user login and dashboards.

- **Expand content:** Add more MDX blog posts, case studies, or portfolio items to showcase real use cases.

**Integrate APIs & data visualization:** Add charts, tables, or analytics dashboards for a richer user experience.

**Improve styling & theming:** Enhance Tailwind components, add dark mode, or create reusable UI primitives.

**Testing & CI/CD:** Add end-to-end tests (Cypress / Playwright) and set up automated deployments on Vercel or similar platforms.

**Documentation & examples:** Include detailed examples of MDX components, page layouts, or API usage to make onboarding faster for new contributors.

By following these steps, contributors can help Mint evolve into a fully-featured, production-ready dashboard + content platform.

## Contact

GitHub: enai-cathy/mint

LinkedIn: https://www.linkedin.com/in/enaikato-ige-edaba/
