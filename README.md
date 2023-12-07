# Sharing Header between two React apps (React Vite SPA and Next.js)

## Architecture setup

It's a monorepo with two apps that share Header component from `ui` package. The main app `new-front` is a Next.js app.

The main domain should be pointed to the Next.js app `new-front` in order to handle all the routing including `old-front` app by Next.js rewrites definded in `new-front/next.config.js`.

> Note: In order to allow `Header` comoponent support full Next.js `next/link` soft navigation features it accept optional `Link` component as a prop.

### Apps and Packages

- `new-front`: a [Next.js](https://nextjs.org/) app
- `old-front`: React Vite SPA app
- `@repo/ui`: a stub React component library withHeader shared by both `new-front` and `old-front` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Install and Run

```
pnpm i
pnpm dev
```
