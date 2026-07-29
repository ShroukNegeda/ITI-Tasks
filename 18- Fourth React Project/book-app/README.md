# BookNest

A modern and elegant book discovery app built with React and Vite. BookNest helps readers explore curated collections, browse featured titles, and search for books in a smooth and welcoming experience.

![BookNest Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![BookNest Preview](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![BookNest Preview](https://img.shields.io/badge/Bootstrap-5.x-7952B3?logo=bootstrap)

## Features

- Beautiful and polished home page with featured sections
- Browse books by catalog and discover curated picks
- Search books using the Open Library API
- Dedicated Library page for exploring your next read
- Responsive layout for desktop and mobile screens
- Smooth navigation with React Router

## Tech Stack

- React
- Vite
- React Router DOM
- Bootstrap
- Font Awesome
- Axios

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open your browser and visit:

```text
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── About/
│   ├── BookCard/
│   ├── BookSearch/
│   ├── Catalog/
│   ├── Featured/
│   ├── Footer/
│   ├── Home/
│   ├── Layout/
│   ├── Library/
│   ├── Navbar/
│   └── NotFound/
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Main Pages

- Home
- Catalog
- Library
- Featured
- About

## API

The Library search feature uses the Open Library API to fetch book data dynamically.

## Contributing

Contributions are welcome. If you want to improve the project, feel free to open a pull request or suggest an idea.

## Notes

This project is designed as a modern frontend assignment and focuses on layout, styling, routing, and user experience.