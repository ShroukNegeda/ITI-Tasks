# React + Vite Task

A small **React** + **Vite** project applying the concepts covered in the session (Components, Props, State, Conditional Rendering, Lists, CSS Modules).

## Components

The project is split into multiple components, each in its own folder under `src/components`:

| Component | Purpose |
|---|---|
| `Navbar` | Top navigation bar with a dropdown and a search form |
| `Hero` | Simple hero section at the top of the page |
| `About` | Short about section |
| `Footer` | Page footer |
| `Home` | The main page that brings all the components above together, and holds the state/logic |

## Concepts Used

- **useState**: a `counter` that increases on button click, and a `fruits` array.
- **Conditional Rendering**: the counter card's style changes once `counter >= 40`.
- **List Rendering (`.map`)**: rendering the fruits array as list items.
- **Event Handling**: `onClick` calling the `increase` function.
- **CSS Modules**: each component has its own `*.module.css` file.

## Design

The look is custom-built with CSS Modules (not default Bootstrap), using design tokens (colors, fonts) defined in `index.css` and reused across components for a consistent, more polished look.

## Project Structure

```
src/
  components/
    Navbar/
      Navbar.jsx
      Navbar.module.css
    Hero/
      Hero.jsx
      Hero.module.css
    About/
      About.jsx
      About.module.css
    Footer/
      Footer.jsx
      Footer.module.css
    Home/
      Home.jsx
      Home.module.css
  App.jsx
  main.jsx
  index.css
```

## Running the Project

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

## Libraries Used

- [React](https://react.dev/)
- [Vite](https://vite.dev/)