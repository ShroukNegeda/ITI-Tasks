# Session Log — React Practice Project

A small multi-page React app built while practicing core React concepts (state, context, routing, forms, and API calls) during an ITI front-end training session.

The visual identity is themed around the idea of a **developer's session log**: monospace labels, an amber "highlighter" accent, and a Register page styled like a code editor window.

## Features

- **Home** — reads user info and a counter from global context (`AppContext`)
- **About** — fetches and displays a live product catalog from the Fake Store API
- **Hero** — simple showcase page with a styled logo
- **Gallery** — local state demo (counter + name)
- **Pizza** — searches and displays recipes from the Forkify API, with a loading spinner and error handling
- **Register** — a form with client-side validation, loading state, and toast notifications on success/failure
- **404 page** — friendly not-found screen for unmatched routes

## Tech Stack

- [React 18](https://react.dev/) with functional components and hooks
- [React Router v6](https://reactrouter.com/) for client-side routing
- [Vite](https://vitejs.dev/) as the build tool / dev server
- [Axios](https://axios-http.com/) for HTTP requests
- [Bootstrap 5](https://getbootstrap.com/) for base grid/utility classes
- [react-hot-toast](https://react-hot-toast.com/) for toast notifications
- CSS Modules for component-scoped styling

## Project Structure

```
react-project/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # App entry point (Router + providers)
│   ├── App.jsx                # Route definitions
│   ├── index.css              # Global design tokens & base styles
│   ├── assets/
│   │   └── logo.svg
│   ├── context/
│   │   └── AppContext.jsx     # Global state: user, products, counter
│   └── components/
│       ├── Layout/            # Shared Navbar + Footer + <Outlet/>
│       ├── Navbar/
│       ├── Footer/
│       ├── Home/
│       ├── About/
│       ├── Hero/
│       ├── Gallery/
│       ├── Pizza/
│       ├── Register/
│       ├── Recieve/           # Product card used for a delete-item exercise
│       ├── Loader/
│       ├── NotFound/
│       └── Cat/                # Small standalone demo component
```

## Getting Started

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

### Other scripts

```bash
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

## Design System

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF8F3` | Page background |
| `--ink` | `#1C2321` | Primary text |
| `--ink-soft` | `#5B6560` | Secondary text |
| `--accent` | `#F5A623` | Buttons, highlights |
| `--success` | `#2E8B57` | Success states |
| `--danger` | `#D64550` | Error states |

Fonts: **Space Grotesk** (headings), **IBM Plex Sans** (body), **IBM Plex Mono** (labels & data).

## Notes

- `About.jsx` and `Home.jsx` pull shared state from `AppContext` — run the app and click **Get Products** / **Login** on the About page to see it populate.
- The `logo.svg` in `src/assets` is a placeholder — swap it for a real logo if you have one.
- The Register form posts to a public test API (`fakestoreapi.com/users`) and won't persist real accounts. Point it at your own backend endpoint for real registration.
- This project was built for learning purposes and is not production-ready (no real auth, no environment config, etc).

## License

For educational use.
