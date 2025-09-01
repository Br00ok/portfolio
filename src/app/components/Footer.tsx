// app/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="h-auto md:h-25 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 footer px-6 py-6
      bg-base-100 dark:bg-base-100 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-base-content">
        <Link
          className="text-base-content flex items-center gap-2 text-lg md:text-xl font-bold"
          href="/"
        >
          Bru Gladiador
        </Link>
      </div>
      <aside className="text-center md:text-left">
        <p className="text-base-content/80 text-sm">
          ©2025 |{" "}
          <Link className="link link-hover font-medium" href="/">
            Bru Gladiador
          </Link>
        </p>
      </aside>
      <div className="flex gap-4">
        {/* <Link href="#" className="link" aria-label="Github Link">
          <span className="icon-[tabler--brand-github] size-5"></span>
        </Link> */}
        <Link
          href="https://linkedin.com/in/brugladiadorllorella"
          target="_blank"
          className="link"
          aria-label="LinkedIn Link"
        >
          <span className="icon-[tabler--brand-linkedin] size-5"></span>
        </Link>
      </div>
    </footer>
  );
}
