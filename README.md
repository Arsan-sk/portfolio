# My Portfolio

Welcome to my personal portfolio website! I built this project to showcase my skills, professional experience, and the projects I've worked on. It's designed to be a comprehensive representation of my journey as a developer, featuring a modern, responsive, and interactive user interface.

## 🚀 Overview

This portfolio is a single-page application (SPA) built with **React** and **TypeScript**. I focused heavily on user experience, implementing a **mobile-first design** approach to ensure it looks great on all devices. The site features smooth animations, a dark/light mode toggle, and interactive elements to keep visitors engaged.

## ✨ Key Features

-   **🎨 Modern & Responsive Design**: Built with **Tailwind CSS**, the layout adapts seamlessly from mobile phones to large desktop screens.
-   **dark/Light Mode**: Fully supported theming with a toggle to switch between dark and light aesthetics, managed via React Context.
-   **⚡ Smooth Animations**: Powered by **Framer Motion**, elements fade in, slide up, and scale interactively as you scroll and hover.
-   **📱 Mobile-First Navigation**: A custom full-screen overlay menu for mobile devices ensures easy navigation.
-   **💼 Interactive Experience Section**: A vertical timeline that reveals detailed information about my roles and achievements on hover (or tap on mobile).
-   **projects Showcase**: A grid of my projects with standardized cards that expand to show more details, tech stacks, and links.
-   **📜 Certifications**: A dedicated section for my certifications, complete with a custom "Updating Soon" fallback page for pending certificates.
-   **🛠️ Tech Stack Display**: A clean, visual representation of the technologies I work with.

## 🛠️ Tech Stack

I chose a modern and robust stack to build this application:

-   **Frontend Framework**: [React](https://react.dev/) (v18)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **State Management**: React Context API & [TanStack Query](https://tanstack.com/query/latest)
-   **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives & [Lucide React](https://lucide.dev/) icons
-   **Testing**: [Vitest](https://vitest.dev/) & React Testing Library

## 📂 Project Structure

Here's a quick look at how I organized the codebase:

```
src/
├── components/        # Reusable UI components
│   ├── ui/            # Base UI elements (buttons, inputs, etc.)
│   ├── Navbar.tsx     # Main navigation
│   ├── Hero.tsx       # Landing section
│   ├── About.tsx      # Skills and Services
│   ├── Experience.tsx # Professional timeline
│   ├── Projects.tsx   # Project showcase
│   └── ...
├── context/           # React Contexts (ThemeContext)
├── pages/             # Route pages (Index, NotFound, UpdatingSoon)
├── index.css          # Global styles and Tailwind directives
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

If you want to run this project locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Arsan-sk/My_Portfolio.git
    cd My_Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Development Server

To start the local development server with hot-reload:

```bash
npm run dev
```

The app will be available at `http://localhost:8080` (or the port shown in your terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder containing the static assets ready for deployment.

## 📬 Contact

Feel free to reach out to me!

-   **Name**: Shaikh Mohd Arsan
-   **Email**: skarsan02@gmail.com
-   **GitHub**: [Arsan-sk](https://github.com/Arsan-sk)

---

*Built with ❤️ by Shaikh Mohd Arsan*
