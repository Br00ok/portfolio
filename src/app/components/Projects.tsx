"use client";

import Link from "next/link";

export default function Projects() {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-base-100 px-6 py-12 md:py-24 md:min-h-screen mb-8 md:mb-0"
    >
      <div className="max-w-xl w-full flex flex-col items-center gap-8">
        {/* ICON ONLY ON DESKTOP/TABLET */}
        <span className="hidden md:inline-block icon-[tabler--code] text-primary/70 text-6xl lg:text-7xl mb-2"></span>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-base-content text-center">
          Projects
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg text-base-content/70 text-center leading-relaxed">
          This section is currently under construction 🚧
          <br />
          <br />
          Information about personal projects and collaborative initiatives will
          be added here in the near future. This section will showcase practical
          examples of development work, demonstrating skills, creativity, and
          technical contributions outside of formal professional experience.
        </p>

        {/* BUTTON */}
        <div className="flex gap-4 mt-4">
          <Link
            href="/"
            className="btn btn-text btn-sm md:btn-md"
            onClick={handleHomeClick}
          >
            Home
            <span className="icon-[tabler--arrow-up] size-4 sm:size-5 rtl:rotate-180"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
