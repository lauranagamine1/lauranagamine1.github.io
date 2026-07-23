# Laura Nagamine — Personal Portfolio

Personal portfolio and online CV. Built with React, TypeScript, Vite, Tailwind CSS,
Framer Motion and React Icons, in a soft pastel design system.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The site runs at http://localhost:5173.

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload   |
| `npm run build`   | Typecheck and build to `dist/`         |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | Run oxlint                             |

## Editing your content

**Almost everything you'll want to change lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Components only read from it, so you rarely need to touch the JSX.

| What to change             | Where                                             |
| -------------------------- | ------------------------------------------------- |
| Name, role, intro, email    | `PERSON`                                          |
| Hero stat boxes             | `HERO_STATS`                                      |
| About paragraphs            | `ABOUT_PARAGRAPHS`                                |
| Interest tags               | `ABOUT_INTERESTS`                                 |
| Skill cards                 | `SKILL_CATEGORIES`                                |
| Projects                    | `PROJECTS`                                        |
| Education / experience      | `EDUCATION`, `EXPERIENCE`, `LANGUAGES`            |
| Social & contact links      | `SOCIAL_LINKS`                                    |

### Replacing the resume

The file at `public/resume.pdf` is a **placeholder**. Drop your real resume there
with the same file name and every Download Resume button picks it up — no code
changes needed.

### Adding project images

Each project card currently shows a pastel gradient placeholder. To use a real
screenshot, put the image in `public/assets/` and follow the comment inside
[`src/components/sections/ProjectCard.tsx`](src/components/sections/ProjectCard.tsx),
which shows the exact `<img>` tag to swap in.

Set a project's `github` or `demo` field to `null` to hide that button on the card.

### Adding a portrait photo

`src/components/sections/About.tsx` renders an "LN" monogram by default. The
comment in that file shows the `<img>` tag to replace it with.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, Loader, ScrollProgress, ScrollToTop
    sections/   Hero, About, Skills, Projects, ProjectCard, Resume, Contact
    ui/         Button, Card, Section, Chip  (reusable primitives)
  data/site.ts  All site content
  hooks/        useActiveSection, useScrolled
  lib/          accents (pastel class maps), motion (animation presets), cn
  types/        Shared TypeScript types
  index.css     Design tokens: colors, fonts, shadows
```

Colors, fonts and shadows are defined once as Tailwind theme tokens in
`src/index.css` under `@theme`. Change a value there and it updates site-wide.

## Deployment

The site is deployed on **Cloudflare Pages** with automatic deployments from
GitHub.

**To update the live site, just push to `main`:**

```bash
git add . && git commit -m "Update portfolio content" && git push
```

Cloudflare rebuilds and redeploys automatically, usually within a minute or two.
You can watch the progress in the Cloudflare dashboard under
**Workers & Pages → your project → Deployments**.

### Build settings

If you ever need to recreate the Pages project, use:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Vite

## Accessibility

Semantic landmarks, a skip-to-content link, keyboard-navigable controls with
visible focus rings, ARIA labels on icon-only links, a single `h1` with ordered
headings, and full `prefers-reduced-motion` support.
