# 📚 Book Finder App

A sleek, modern, and fully responsive book search application built for **Alex**, a college student who loves discovering new books.  
This app allows users to **search, filter, favorite, and explore books** using the Open Library API — all wrapped in a polished dark/light themed UI.

---

## 🌟 Live Demo

🔗 **Deployed App:** [https://your-deployment-link.vercel.app](#)  
💾 **GitHub Repo:** [https://github.com/your-username/book-finder](#)  
🤖 **ChatGPT Work Log:** [ChatGPT Conversation Link](#)

---

## 🧠 Overview

**Book Finder** helps users like Alex quickly search for books, view details, and save favorites for later.  
Built using **React + Tailwind + shadcn/ui + Framer Motion**, it demonstrates modern frontend best practices, a clean design system, and smooth user experience.

---

## 🚀 Features

| Feature | Description |
|----------|-------------|
| 🔍 **Search Books** | Search for books by title (real Open Library API data) |
| 🧭 **Filters** | Filter results by author and publication year |
| 📖 **Pagination & Infinite Scroll** | Browse results like Google’s search pages |
| ❤️ **Favorites Drawer** | Save and manage favorite books (stored in localStorage) |
| 🌗 **Dark / Light Mode** | Beautiful theme toggle with smooth transitions |
| 📱 **Responsive Design** | Works seamlessly on mobile, tablet, and desktop |
| 🎞 **Animations** | Framer Motion for smooth transitions and interactivity |
| ☁️ **API Integration** | Data fetched live from Open Library’s public API |

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | [React (Vite)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **State Management** | React Context API |
| **API Source** | [Open Library Search API](https://openlibrary.org/developers/api) |
| **Deployment** | Vercel / Netlify / CodeSandbox |

---

## 📦 Folder Structure

book-finder/
├─ src/
│ ├─ components/
│ │ ├─ App.jsx
│ │ ├─ Header.jsx
│ │ ├─ SearchBar.jsx
│ │ ├─ FilterBar.jsx
│ │ ├─ BookList.jsx
│ │ ├─ BookCard.jsx
│ │ ├─ FavoritesDrawer.jsx
│ │ ├─ ScrollToTop.jsx
│ │ └─ ThemeToggle.jsx
│ ├─ context/
│ │ └─ FavoritesContext.jsx
│ ├─ lib/
│ │ └─ api.js
│ ├─ styles/
│ │ └─ index.css
│ └─ main.jsx
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ README.md


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
