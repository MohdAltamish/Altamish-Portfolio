# Mohd Altamish - Personal Portfolio

A modern, interactive, and responsive personal portfolio website built with the latest web technologies. This project showcases my skills, experience, and projects through a visually engaging interface featuring 3D elements and smooth animations.

Portfolio Preview https://altamish-portfolio.netlify.app/

## 🚀 fast Tech Stack

This project is built using a robust modern stack:

*   **Core:** [React](https://react.dev/) (v19) with [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/) - For lightning-fast development and optimized builds.
*   **Key Libraries:**
    *   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid and responsive design.
    *   **Animations:** [Framer Motion](https://www.framer.com/motion/) - For complex, production-ready animations.
    *   **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - Immersive 3D experiences (hero scene).
    *   **Icons:** [Lucide React](https://lucide.dev/) - Beautiful, consistent icons.

## ✨ Features

*   **Immersive 3D Hero Section:** Features a custom "Quantum Scene" built with Three.js.
*   **Responsive Design:** Fully optimized for all device sizes (Mobile, Tablet, Desktop).
*   **Dark/Light Mode:** System-aware theme switching with manual toggle.
*   **Scroll Animations:** Smooth reveal animations using Framer Motion.
*   **Single Page Navigation:** Smooth scrolling to sections (About, Skills, Experience, Projects, Contact).
*   **Interactive Components:**
    *   Live Project Cards
    *   Skill Visualization
    *   Experience Timeline
    *   Certification Showcase

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MohdAltamish/research-visualization.git
    cd research-visualization
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
# or for Netlify emulation
npx netlify dev
```

The application will be available at `http://localhost:3000` (or `http://localhost:8888` if using Netlify Dev).

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist` folder, ready for deployment.

## 🚀 Deployment

This project is configured for seamless deployment on **Netlify**.

1.  **Netlify Configuration:** A `netlify.toml` file is included to handle build settings and redirects for SPA routing.
2.  **Deploy Command:**
    ```bash
    npm run build
    ```
3.  **Publish Directory:** `dist`

## 📂 Project Structure

```
├── components/          # Reusable React components
│   ├── Diagrams.tsx    # Cards, Timelines, Skill visualizations
│   ├── QuantumScene.tsx # 3D Hero Scene logic
│   └── ...
├── public/              # Static assets (images, redirects)
├── App.tsx              # Main application component & layout
├── main.tsx            # Entry point
├── index.css           # Tailwind imports & global styles
├── netlify.toml        # Netlify deployment configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 👤 Author

**Mohd Altamish**
*   **Role:** Full Stack Developer & AI Enthusiast
*   **Email:** altamish6589@gmail.com
*   **LinkedIn:** [linkedin.com/in/mohd-altamish](https://linkedin.com/in/mohd-altamish)
*   **GitHub:** [github.com/MohdAltamish](https://github.com/MohdAltamish)

---
© 2025 Mohd Altamish. All rights reserved.
