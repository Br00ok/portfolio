import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-0.25">
      <nav className="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:flex lg:items-center lg:gap-2">
          <div className="navbar-start w-fit items-center justify-between">
            <a
              className="text-base-content flex items-center gap-3 text-xl font-bold"
              href="/"
            >
              <img src="logo.png" className="size-16" alt="brand-logo" />

              {pathname !== "/" && "Bru Gladiador"}
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
  );
}
