"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";

const themes = [
  "light",
  "dark",
  "black",
  "corporate",
  "ghibli",
  "gourmet",
  "luxury",
  "pastel",
  "soft",
  "mintlify",
  "spotify",
  "valorant",
  "vscode",
  "perplexity",
  "shadcn",
  "claude",
];

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-100 scroll-smooth">
      <header className="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-0.25">
        <nav className="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:flex lg:items-center lg:gap-2">
            <div className="navbar-start w-fit items-center justify-between">
              <a
                className="text-base-content flex items-center gap-3 text-xl font-bold"
                href="/"
              >
                <img src="logo.png" className="size-16" alt="brand-logo" />
                Bru Gladiador
              </a>
              <div className="flex items-center gap-5 lg:hidden">
                <a href="/" className="btn btn-primary">
                  Login
                </a>
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-square"
                  data-collapse="#navbar-block-4"
                  aria-controls="navbar-block-4"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-5.5"></span>
                </button>
              </div>
            </div>
            <div
              id="navbar-block-4"
              className="navbar-center transition-height collapse grow overflow-hidden font-medium duration-300 flex justify-center"
            >
              <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
                <a href="/" className="hover:text-primary">
                  Home
                </a>
                <a href="/experience" className="hover:text-primary">
                  Experience
                </a>
                <a href="/projects" className="hover:text-primary">
                  Projects
                </a>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </div>
            </div>
            <div className="navbar-end w-fit flex gap-4 items-center">
              <label
                htmlFor="theme-dropdown"
                className="font-medium text-base-content"
              >
                Theme:
              </label>
              <select
                id="theme-dropdown"
                className="select select-bordered"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                {themes.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen scroll-smooth">
        <div className="flex h-full flex-col justify-between gap-18 overflow-x-hidden pt-40 md:gap-24 md:pt-45 lg:gap-35 lg:pt-47.5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
              <span className="badge badge-primary shrink-0 rounded-full text-xl">
                Full-Stack
              </span>
              <span className="text-base-content/80 text-2xl">
                Software Developer
              </span>
            </div>
            <h1 className="text-base-content relative z-1 text-8xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance">
              <span>Bru Gladiador </span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-1/3 -z-1 max-lg:left-4 max-md:hidden"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_10365_68643)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10365_68643"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stopColor="var(--color-primary)" />
                    <stop offset="1" stopColor="var(--color-primary-content)" />
                  </linearGradient>
                </defs>
              </svg>
            </h1>
            <p className="text-base-content/80 max-w-2xl text-xl">
              A design-oriented developer with a passion for creating beautiful
              and functional web applications🚀
            </p>
            <div className="flex gap-4">
              <a
                href="#aboutme"
                className="btn btn-primary btn-gradient btn-lg"
              >
                See more
                <span className="icon-[tabler--arrow-down] size-5 rtl:rotate-180"></span>
              </a>
              <a href="https://linkedin.com/in/brugladiadorllorella">
                <button className="btn btn-lg btn-gradient [--btn-color:#0a66c2] text-white">
                  <span className="icon-[tabler--brand-linkedin] size-4.5 shrink-0"></span>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <AboutMe />
        </div>
      </main>

      <footer className="footer bg-base-200/60 px-6 py-4">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-base-content">
            <a
              className="text-base-content flex items-center gap-3 text-xl font-bold"
              href="/"
            >
              <img src="logo.png" className="size-16" alt="brand-logo" />
              Bru Gladiador
            </a>
          </div>
          <aside className="grid-flow-col items-center">
            <p className="text-base-content/80 text-sm">
              ©2025 |{"  "}
              <a className="link link-hover font-medium" href="/">
                Bru Gladiador
              </a>{" "}
            </p>
          </aside>
          <div className="flex h-5 gap-4">
            <a href="#" className="link" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-linkedin] size-5"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
