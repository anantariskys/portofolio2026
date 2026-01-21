# Ananta Risky Susanto - Creative Developer Portfolio

![Portfolio Preview](public/assets/frame/frame_0001.webp)

> A modern, immersive portfolio website built with Next.js, showcasing creative development skills through interactive scroll sequences, smooth parallax effects, and responsive design.

## 🌟 Overview

This portfolio is designed to be more than just a resume; it's an experience. It leverages the power of **Next.js 15** and **GSAP (GreenSock Animation Platform)** to create a fluid, engaging user journey. From the cinematic scroll-controlled hero sequence to the interactive skills and project showcases, every element is crafted to demonstrate technical proficiency and design sensibility.

## ✨ Key Features

-   **Cinematic Scroll Sequence**: A high-performance, canvas-based image sequence animation in the Hero section that reacts to scroll speed and direction, featuring a "ping-pong" loop for continuous motion.
-   **Smooth Scrolling**: Integrated **Lenis** for buttery-smooth scroll experiences across all devices.
-   **Interactive Animations**: Extensive use of **GSAP ScrollTrigger** for text reveals, parallax effects, and element transitions.
-   **Responsive Design**: Fully responsive layout built with **Tailwind CSS**, ensuring a perfect experience on mobile, tablet, and desktop.
-   **Dynamic Content**:
    -   **About Me**: Word-by-word scroll reveal text animation.
    -   **Tech Stack**: Organized, interactive skill categories.
    -   **Experience**: Timeline-style education and organizational history.
    -   **Contact**: Interactive "Let's Build Together" section with smoke parallax effects and direct WhatsApp integration.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, Tween)
-   **Smooth Scroll**: [Lenis](https://github.com/studio-freight/lenis)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portofolio2026.git
    cd portofolio2026
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open in Browser**
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/                # Next.js App Router pages and layouts
│   ├── layout.tsx      # Main layout with Lenis provider
│   └── page.tsx        # Main entry point assembling all sections
├── components/         # Reusable UI components
│   ├── scroll-sequence.tsx  # Hero section with canvas animation
│   ├── about.tsx            # About section with split-text reveal
│   ├── skills.tsx           # Tech stack grid
│   ├── experience.tsx       # Education & Experience timeline
│   ├── projects.tsx         # Projects showcase
│   ├── contact.tsx          # Contact section with smoke effect
│   ├── navbar.tsx           # Responsive navigation
│   └── footer.tsx           # Site footer
└── providers/          # Context providers (e.g., Lenis)
```

## 🎨 Design Philosophy

-   **Minimalism**: Clean typography and negative space to let the content breathe.
-   **Motion**: Meaningful animations that guide the user's eye without overwhelming them.
-   **Performance**: Optimized assets and efficient rendering techniques (Canvas API for sequences) to ensure 60fps performance.

## 📬 Contact

Interested in working together?

-   **WhatsApp**: [Chat with me](https://wa.me/6281234567890) (Replace with actual number)
-   **Email**: [your.email@example.com](mailto:your.email@example.com)
-   **LinkedIn**: [Ananta Risky Susanto](https://linkedin.com/in/yourprofile)

---

© 2026 Ananta Risky Susanto. All rights reserved.
