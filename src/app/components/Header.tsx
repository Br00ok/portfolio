"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const themes = ["black", "corporate"];

export default function Header() {
  const [theme, setTheme] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "black";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <header
      className="h-20 md:h-25 border-base-content/20 fixed top-0 z-20 w-full border-b
    bg-base-100/70 backdrop-blur-md transition-colors"
    >
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full bg-transparent">
        <div className="flex items-center justify-between w-full md:w-fit">
          <a
            className="text-base-content flex items-center gap-2 text-lg sm:text-xl font-bold"
            href="/"
          >
            Bru Gladiador
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-base-content"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="icon-[tabler--x] size-6"></span>
            ) : (
              <span className="icon-[tabler--menu-2] size-6"></span>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-6 font-medium text-base-content">
          <a
            href="/"
            className={
              pathname === "/"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
          >
            Home
          </a>
          <a
            href="/skills"
            className={
              pathname === "/skills"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
          >
            Skills
          </a>
          <a
            href="/experience"
            className={
              pathname === "/experience"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
          >
            Experience
          </a>
          <a
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
          >
            Projects
          </a>
        </div>

        {/* Theme Selector */}
        <div className="hidden md:flex items-center gap-2">
          <label
            htmlFor="theme-dropdown"
            className="font-medium text-base text-base-content"
          >
            Theme:
          </label>
          <select
            id="theme-dropdown"
            className="select select-bordered select-sm"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t === "corporate" ? "Light" : "Dark"}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-content/20 px-4 py-3 flex flex-col gap-3 font-medium text-base-content">
          <a
            href="/"
            className={
              pathname === "/"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/skills"
            className={
              pathname === "/skills"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="/experience"
            className={
              pathname === "/experience"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          {/* Mobile Theme Selector */}
          <div className="flex items-center gap-2 pt-2 border-t border-base-content/20">
            <label
              htmlFor="theme-dropdown-mobile"
              className="font-medium text-sm"
            >
              Theme:
            </label>
            <select
              id="theme-dropdown-mobile"
              className="select select-bordered select-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t === "corporate" ? "Light" : "Dark"}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
