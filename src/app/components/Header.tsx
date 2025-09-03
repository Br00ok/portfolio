"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const themes = ["black", "corporate"];

const sections = [
  { id: "/", label: "Home" },
  { id: "#aboutme", label: "About me" },
  { id: "#experience", label: "Experience" },
  { id: "#projects", label: "Projects" },
];

export default function Header() {
  const [theme, setTheme] = useState<string | null>(null);
  const [actualPath, setActualPath] = useState("/");

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

  useEffect(() => {
    const handleScroll = () => {
      let found = "/";
      for (const section of sections.slice(1)) {
        const el = document.querySelector(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = section.id;
            break;
          }
        }
      }
      setActualPath(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!theme) return null;

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActualPath("/");
  };

  return (
    <header className="fixed flex justify-center items-center h-screen z-20 ml-25">
      <div className="h-full w-fit grid grid-cols-1 grid-rows-8 gap-4">
        <div className="text-4xl font-extrabold flex justify-start items-center row-span-2"></div>
        <div className="flex justify-start row-span-4 row-start-3">
          <div className="flex-col flex justify-center gap-8 text-3xl">
            {sections.map((section) =>
              section.id === "/" ? (
                <a
                  key={section.id}
                  href="/"
                  className={
                    actualPath === "/"
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }
                  onClick={handleHomeClick}
                >
                  {section.label}
                </a>
              ) : (
                <Link
                  key={section.id}
                  href={section.id}
                  className={
                    actualPath === section.id
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }
                >
                  {section.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex items-center justify-start row-start-8">
          <Link
            href="https://linkedin.com/in/brugladiadorllorella"
            target="_blank"
            className="link"
            aria-label="LinkedIn Link"
          >
            <span className="icon-[tabler--brand-linkedin] size-10"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
