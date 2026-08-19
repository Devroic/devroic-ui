# Devroic UI

The frontend for [devroic.com](https://devroic.com) — Andreas Eracleous's personal
project hub, showcasing published Java libraries, mobile apps, and machine
learning projects.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for tooling and dev server
- [MUI](https://mui.com/) for components and theming
- [React Router](https://reactrouter.com/) for routing

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The app is served at `http://localhost:5173`.

## Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Type-check and build for production      |
| `npm run lint`      | Run ESLint                               |
| `npm run preview`   | Preview the production build locally     |

## Project Structure

```
src/
  components/   Shared UI components (Header, Footer, Layout, ProjectCard, ...)
  constants/    Static data - project list, colors, nav links, types
  hooks/        Shared hooks
  routes/       Page components, one per route
    projects/   One page per published project
  Routes.tsx    Route definitions
  theme.ts      MUI theme configuration
public/
  icons/        Favicons and logo assets
  javadocs/     Static generated JavaDocs, served as-is
```

Adding a new project means adding an entry to `src/constants/projects.ts`, a
page under `src/routes/projects/`, and a route in `src/Routes.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com/), auto-deploying from `main`
(see `vercel.json`).
