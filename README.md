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
├── _components/                  # Shared, non-route components
│   └── loader.tsx                # Reusable inline loader (spinner + label)
├── (auth)/                       # Route group: auth pages share a layout
│   ├── layout.tsx                # Layout with Navbar + footer (Tailwind styled)
│   ├── loading.tsx               # Suspense fallback for auth segment
│   ├── navbar.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
└── (user)/                       # Route group: user-facing pages
    ├── layout.tsx                # Layout with header + footer (Tailwind styled)
    ├── loading.tsx               # Suspense fallback for (user) root
    ├── page.tsx                  # Home page
    ├── products/
    │   ├── page.tsx
    │   ├── loading.tsx
    │   └── [productId]/
    │       ├── page.tsx          # Dynamic route
    │       └── loading.tsx
    ├── articles/
    │   ├── page.tsx
    │   ├── loading.tsx
    │   └── [articleId]/
    │       ├── page.tsx          # Dynamic route
    │       └── loading.tsx
    ├── order-product/
    │   └── page.tsx              # Client component using useRouter
    └── docs/
        └── [[...slug]]/          # Optional catch-all route
            ├── page.tsx
            ├── loading.tsx
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
- Migrated the `(user)` layout and pages from inline styles to **Tailwind utility classes**.
- Added an `order-product` page demonstrating **programmatic navigation** via `useRouter()` in a Client Component.
- Added **`loading.tsx`** files at each route segment for streamed Suspense fallbacks during navigation.
- Built a shared **`<Loader />`** in `_components/loader.tsx` (inline spinner) reused by every `loading.tsx`, so only the page slot swaps while the shared layout (header/footer) stays mounted and interactive.

## Notes

- Tailwind v4 uses a single `@import "tailwindcss";` entrypoint — the old `base`/`components`/`utilities` imports are no longer exported.
- In **Server Components**, route `params` and `searchParams` arrive as Promises and must be awaited. In **Client Components**, use the `use()` hook to unwrap them.
- `loading.tsx` is wrapped automatically in a React `<Suspense>` boundary by Next.js — no manual `<Suspense>` needed for route-level loading states.
- Next.js performs **automatic route-based code splitting**: only the chunks for the current route are shipped on initial load; `<Link>` prefetches destination chunks in the background. Use `next/dynamic` for component-level lazy loading inside a route.
