# Next.js Practice

A practice project exploring the Next.js 16 App Router, route groups, dynamic & catch-all segments, and Tailwind CSS v4.

## Tech Stack

- **Next.js** 16.2.6 (App Router + Turbopack)
- **React** 19.2.4
- **TypeScript** 5
- **Tailwind CSS** v4 (via `@tailwindcss/postcss`)
- **ESLint** 9 with `eslint-config-next`

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Available Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Project Structure

```
src/app/
├── global.css                    # Tailwind v4 entrypoint (@import "tailwindcss")
├── not-found.tsx                 # Global 404 page
├── _private/                     # Private folder (excluded from routing)
│   └── page.tsx
├── (auth)/                       # Route group: auth pages share a layout
│   ├── layout.tsx                # Layout with Navbar + footer (Tailwind styled)
│   ├── navbar.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
└── (user)/                       # Route group: user-facing pages
    ├── layout.tsx                # Layout with header + footer (inline styled)
    ├── page.tsx                  # Home page
    ├── products/
    │   ├── page.tsx
    │   └── [productId]/page.tsx  # Dynamic route
    ├── articles/
    │   ├── page.tsx
    │   └── [articleId]/page.tsx  # Dynamic route
    └── docs/
        └── [[...slug]]/          # Optional catch-all route
            ├── page.tsx
            └── not-found.tsx
```

## Completed So Far

- Bootstrapped Next.js 16 project with the App Router.
- Organized routes using **route groups** `(auth)` and `(user)` so each section can have its own layout without affecting the URL.
- Added **dynamic segments**: `/products/[productId]`, `/articles/[articleId]`.
- Added an **optional catch-all segment**: `/docs/[[...slug]]` with a scoped `not-found.tsx`.
- Added a **global** `not-found.tsx` for unmatched routes.
- Demonstrated **private folders** with `_private/` (not exposed as a route).
- Set up shared metadata (title template + description) in each layout.
- Configured **Tailwind CSS v4** via PostCSS (`@import "tailwindcss"` in `global.css`).
- Built an auth `Navbar` component reused across the `(auth)` group.

## Notes

- Tailwind v4 uses a single `@import "tailwindcss";` entrypoint — the old `base`/`components`/`utilities` imports are no longer exported.
- The `(user)` layout currently uses inline styles; the `(auth)` layout uses Tailwind classes.
