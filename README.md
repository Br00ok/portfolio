# Bru Gladiador — Portfolio

✨ Personal portfolio of **Bru Gladiador**, a software engineer specializing in frontend development. This project showcases my profile, experience, education, skills, and selected projects in a responsive website with a modern design and subtle animations.

🌐 **Live demo:** [bglportfolio.vercel.app](https://bglportfolio.vercel.app/)

## 📌 What's inside?

- **About me:** an introduction and an overview of my approach to frontend development.
- **Professional experience:** my experience in real software developer positions, including responsibilities and technologies used.
- **Skills:** technologies and tools displayed in an animated marquee.
- **Education and languages:** academic background, courses, and languages.
- **Projects:** cards featuring a description, an image, and links to the source code and live demos:
  - 🌦️ **Weather App** — a weather app with an experience designed for mobile users.
  - 🍕 **Pizza Dough Calculator** — a calculator that helps bakers work out ingredient quantities for pizza dough.
  - 💼 **Portfolio Project** — this personal portfolio.
- **Interface details:** light/dark mode, animated background grid, text animations, and a scroll progress indicator.

## 🧰 Tech stack

- **Next.js 16** with the **App Router** — React framework for the website.
- **React 19** and **TypeScript** — component-based UI with static typing.
- **Tailwind CSS 4** — responsive styling and visual design.
- **shadcn/ui** and custom UI components — reusable elements such as cards, buttons, avatars, and badges.
- **Motion** — animations and visual effects.
- **next-themes** — light and dark theme management.
- **Tabler Icons** and **Lucide** — interface icons.
- **ESLint** and **Prettier** — code quality and formatting.

## 🚀 Run the project locally

Make sure **Node.js** and **npm** are installed. In a terminal, clone the repository and run:

```bash
git clone https://github.com/Br00ok/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio locally. The development server uses Turbopack and automatically refreshes the page when you change the code.

### Other commands

```bash
npm run lint       # Check the code with ESLint
npm run typecheck  # Check TypeScript types
npm run build      # Create a production build
npm run start      # Serve the production build
```

To test the production build:

```bash
npm run build
npm run start
```

## 🗂️ Project structure

```text
app/
  (main)/page.tsx   # Main portfolio content
  page.tsx          # Entry page and global visual elements
  layout.tsx        # Root layout, fonts, and theme provider
  globals.css       # Global styles and design tokens
components/
  projects-grid.tsx # Project listing
  skills-marquee.tsx
  floating-dark-mode.tsx
  ui/               # Reusable visual components
public/
  assets/           # Profile and project images
```

## ✏️ Customization

- Update the profile, experience, education, and languages in `app/(main)/page.tsx`.
- Edit the projects and their links in `components/projects-grid.tsx`.
- Update the skills in `components/skills-marquee.tsx`.
- Add profile and project images to `public/assets/` and update their corresponding paths.

---

Made with 💜 and a passion for building useful digital experiences.
