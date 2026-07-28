# React Task – useState, useEffect & Routing (with Nesting)

A small practice project built with **React**, **Vite**, **React Router v6**, and **Bootstrap 5**.
It demonstrates:

- `useState` for managing component state
- `useEffect` covering **all of its lifecycle cases**
- Client-side routing with **2+ routes**, including **one nested route**
- A catch-all **404 / Not Found** page

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

To build for production:

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── main.jsx                     # App entry point + Router configuration
├── index.css                    # Global styles
├── Components/
│   ├── Layout/Layout.jsx        # Wraps every page with Navbar + Outlet + Footer
│   ├── Navbar/Navbar.jsx        # Navigation bar with active-link highlighting
│   ├── Footer/Footer.jsx        # Site footer
│   └── NotFound/NotFound.jsx    # 404 page (catch-all route)
└── Pages/
    ├── Home/Home.jsx            # Landing page
    ├── About/About.jsx          # About page
    ├── Gallery/
    │   ├── Gallery.jsx          # Parent route (has its own nav + <Outlet />)
    │   ├── GalleryOverview.jsx  # Nested index route – useEffect demo
    │   └── Photos.jsx           # Nested route – /gallery/photos
    └── Store/
        ├── Store.jsx            # Parent component – useState demo
        └── ProductCard.jsx      # Child component, receives product via props
```

---

## Routing Map

| Path              | Component        | Notes                              |
|--------------------|-------------------|-------------------------------------|
| `/`                | `Home`            | Index route                         |
| `/about`           | `About`           |                                      |
| `/gallery`         | `Gallery`         | Parent route (renders `<Outlet />`) |
| `/gallery` (index) | `GalleryOverview` | Nested route inside `Gallery`       |
| `/gallery/photos`  | `Photos`          | Nested route inside `Gallery`       |
| `/store`           | `Store`           |                                      |
| `*`                | `NotFound`        | Catch-all 404 page                  |

`Gallery` is the route that contains the **nested routing**: it renders its own
sub-navigation and an `<Outlet />`, which swaps between `GalleryOverview` (index)
and `Photos` depending on the URL.

---

## `useState` Example — `Store` page

- `products` — an array of product objects, held in state.
- `name` / `price` — controlled form inputs, also held in state.
- Submitting the form adds a new product to the `products` array.
- Each product is passed down as a `product` prop to the child component
  `ProductCard`, along with an `onDelete` callback used to remove it from state.

## `useEffect` Example — `Gallery` → Overview page

The `GalleryOverview` component demonstrates **all four common `useEffect` cases**,
and logs each execution on screen so you can watch the order without opening
the browser console:

1. **No dependency array** — runs after *every* render (mount + every update).
2. **Empty dependency array `[]`** — runs once, only on mount.
3. **Dependency array with a value `[counter]`** — runs on mount, then again
   every time `counter` changes.
4. **Cleanup function** — sets up a `setInterval`, and returns a cleanup
   function that clears it. The cleanup runs both before the effect re-runs
   and when the component unmounts (try navigating to `/gallery/photos` and
   back to see it in action).

---

## Not Found Page

Any URL that doesn't match a defined route (e.g. `/random-page`) falls through
to the catch-all `*` route and renders the `NotFound` component, which shows a
404 image and a link back to the home page.

---

## Notes

This project was built as a redo of an earlier practice session, fixing a few
bugs that existed in the original files (undefined variables, unused props,
reserved prop names, mismatched destructuring) while keeping the same core
concepts: `useState`, `useEffect`, nested routing, and a Not Found page.
