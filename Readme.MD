# Muhammad Alfarizi — Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.546-4A90D9?style=for-the-badge\&logo=lucide\&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12.43-FF6B6B?style=for-the-badge\&logo=framer\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

![Portfolio Preview](https://raw.githubusercontent.com/alfrzimhmd/my-portfolio/main/public/preview.png)

> A modern, responsive, and interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing projects, technical skills, and professional experience as a Software Developer & UI/UX Designer.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [Key Features](#key-features)
* [Contact](#contact)
* [License](#license)
* [Acknowledgments](#acknowledgments)

---

## Overview

This portfolio website serves as a comprehensive digital resume and project showcase, designed to present professional capabilities in software development, UI/UX design, and reverse engineering.

Built with a focus on performance, responsive design, and visual presentation, the website demonstrates the use of modern frontend technologies to create an engaging and interactive user experience.

The platform integrates interactive elements such as animated typing effects, dynamic project galleries, developer workspace simulation, and multi-channel contact integration.

---

## Features

| Feature                   | Description                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Modern Design**         | Professional dark/light theme with gradient accents and smooth animations             |
| **Responsive Layout**     | Optimized for desktop, tablet, and mobile devices                                     |
| **Interactive UI**        | Smooth scrolling, typing animations, hover effects, and command palette               |
| **Developer Workspace**   | Interactive terminal with 5 tabs: Console, Code, APK Inspector, Telemetry, UI Preview |
| **Project Gallery**       | Project image slideshows with detailed case study views                               |
| **Video Demonstrations**  | Embedded video demos for selected projects                                            |
| **Skills Visualization**  | Technical disciplines with categorized technology stacks                              |
| **CV Modal**              | Printable A4-formatted curriculum vitae with PDF export                               |
| **Contact Integration**   | Direct WhatsApp and Email communication with form auto-fill                           |
| **Command Palette**       | Cmd+K quick navigation and actions                                                    |
| **Theme Toggle**          | Dark/Light mode with system preference detection                                      |
| **Performance Optimized** | Built with Vite for fast development and optimized production builds                  |

---

## Technologies Used

### Frontend

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.546-4A90D9?style=for-the-badge\&logo=lucide\&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12.43-FF6B6B?style=for-the-badge\&logo=framer\&logoColor=white)

### Tools & Services

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=for-the-badge\&logo=figma\&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge\&logo=google\&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge\&logo=gmail\&logoColor=white)

---

## Installation

### Prerequisites

Make sure you have the following installed:

* Node.js version 18 or later
* npm, yarn, or bun

### Clone the Repository

```bash
git clone https://github.com/alfrzimhmd/my-portfolio.git
cd my-portfolio
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
bun install
```

### Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

---

## Project Structure

```text
my-portfolio/
├── 📁 public/                      # Static assets served directly
│   └── 📁 assets/                  # Public assets directory
│       ├── 📁 aistudio/            # AI Studio related assets
│       └── 🖼️ profile.jpg          # Profile photo for the website
│
├── 📁 src/                         # Main source code directory
│   │
│   ├── 📁 assets/                  # Project assets and images
│   │   ├── 📁 images/              # General images used across the site
│   │   └── 📁 projects/            # Project screenshots and assets
│   │       ├── 📁 airvista/        # AirVista project screenshots
│   │       ├── 📁 apotek/          # Apotek Online project screenshots
│   │       ├── 📁 nutriscan/       # NutriScan project screenshots
│   │       ├── 📁 simawa/          # SIMAHO UI/UX project screenshots
│   │       ├── 📁 skrs/            # Sistem KRS project screenshots
│   │       └── 📁 umkm/            # SmartInventory project screenshots
│   │
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 📁 CommandPalette/      # ⌘K command palette for quick navigation
│   │   ├── 📁 ContactForm/         # Contact form with Email/WhatsApp tabs
│   │   ├── 📁 CustomCursor/        # Custom animated cursor
│   │   ├── 📁 CVModal/             # Curriculum Vitae modal with PDF export
│   │   ├── 📁 DeveloperWorkspace/  # Interactive developer workspace simulation
│   │   ├── 📁 Footer/              # Site footer with navigation and social links
│   │   ├── 📁 Hero/                # Hero section with typing animation
│   │   ├── 📁 Navbar/              # Navigation bar with theme toggle
│   │   ├── 📁 ProfileFrame/        # Profile photo decorative frame
│   │   ├── 📁 ProfilePhoto/        # Profile photo display component
│   │   ├── 📁 ProjectCard/         # Individual project card with image and details
│   │   ├── 📁 ProjectShowcase/     # Featured project showcase component
│   │   ├── 📁 SkillModule/         # Technical skill category display
│   │   ├── 📁 StudyMatePreview/    # Interactive preview for StudyMate project
│   │   ├── 📁 SystemStatusModal/   # System status telemetry modal
│   │   ├── 📁 Terminal/            # Interactive terminal component
│   │   ├── 📁 ThemeToggle/         # Dark/Light theme toggle button
│   │   └── 📁 Timeline/            # Developer journey timeline component
│   │
│   ├── 📁 data/                    # Static data files
│   │   ├── 📄 cv.ts                # Curriculum Vitae data
│   │   ├── 📄 projects.ts          # Projects data with case studies
│   │   ├── 📄 skills.ts            # Technical skills data
│   │   ├── 📄 socials.ts           # Social media links and personal info
│   │   └── 📄 timeline.ts          # Developer journey timeline entries
│   │
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── 📄 useCommandPalette.ts # Command palette state management
│   │   ├── 📄 useTheme.ts          # Theme management hook
│   │   └── 📄 useTypingAnimation.ts# Typing animation hook
│   │
│   ├── 📁 pages/                   # Page components
│   │   ├── 📁 About/               # About page with profile and philosophy
│   │   ├── 📁 Contact/             # Contact page with form
│   │   ├── 📁 Home/                # Home page with hero and featured projects
│   │   ├── 📁 ProjectDetail/       # Project detail with case study
│   │   ├── 📁 Projects/            # Projects gallery with filtering
│   │   └── 📁 Skills/              # Skills page with technical disciplines
│   │
│   ├── 📁 types/                   # TypeScript type definitions
│   │   └── 📄 index.ts             # Global type definitions
│   │
│   ├── 📄 App.tsx                  # Root application component with routing
│   ├── 📄 main.tsx                 # Application entry point
│   └── 📄 index.css                # Global styles and Tailwind imports
│
├── 📄 index.html                   # HTML template
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 vite.config.ts               # Vite build configuration
├── 📄 README.md                    # Project documentation
└── 📄 LICENSE                      # MIT License
```

---

## Key Features

### Hero Section

* Dynamic typing animation for name and professional titles
* Status indicator with pulse animation
* Social media integration with GitHub, LinkedIn, and Email
* Developer Workspace simulation with interactive terminal
* Technology stack badges

### About Section

* Professional biography with animated headline
* Core competencies with descriptive icons
* Engineering Philosophy with gradient text
* Developer Journey Timeline
* Technical domain tags

### Developer Workspace

Interactive workspace with 5 tabs:

1. **Console** - Interactive shell with command reference
2. **Code** - Syntax-highlighted code editor preview
3. **APK Inspector** - Static analysis simulation
4. **Telemetry** - Performance metrics visualization
5. **UI Preview** - Mobile interface mockup

### Projects Section

* Featured project showcase with detailed case study
* Responsive grid layout for project cards
* Automatic image slideshow for each project
* Detailed case study view with 9 sections:

  * Overview, Problem, Approach, Design
  * Development, Challenges, Result
  * Technology Stack, Links
* Video demonstrations for selected projects
* Technology stack tags with filtering

### Skills Section

* Technical disciplines with categorized technologies
* Interactive skill modules with hover effects
* Focus areas for each discipline

### CV Modal

* Printable A4-formatted curriculum vitae
* Professional summary, education, skills, projects, experience
* PDF export via browser print dialog
* Clean, ATS-compatible design

### Contact Section

* Tab switcher between Email and WhatsApp
* Dynamic form fields based on selected method
* Direct integration with messaging platforms
* Auto-fill messages from form input
* Contact coordinates panel with copy-to-clipboard

### Command Palette

* Cmd+K / Ctrl+K quick navigation
* Keyboard-driven actions
* Page navigation shortcuts

### Theme Support

* Dark/Light mode toggle
* System preference detection
* Consistent theming across all components

### Interactive Terminal

* Command history and auto-scroll
* Available commands:

  * `whoami` - Display developer identity
  * `current_focus` - List active technology domains
  * `status` - Check system status
  * `projects` - List all projects
  * `skills` - Display technical skills
  * `sudo` - Elevated mode
  * `clear` - Clear terminal

---

## Contact

[![Email](https://img.shields.io/badge/Email-mhmdalfrzi.03%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mhmdalfrzi.03@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mhmd-alfrzi-80b15334b?utm_source=share_via&utm_content=profile&utm_medium=member_android)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alfrzimhmd)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6285292165080)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments

This project was built using the following technologies and resources:

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.546-4A90D9?style=for-the-badge\&logo=lucide\&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12.43-FF6B6B?style=for-the-badge\&logo=framer\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

<div align="center">

**If you find this portfolio useful, feel free to give the repository a star.**

Built and designed by **Muhammad Alfarizi**

</div>
