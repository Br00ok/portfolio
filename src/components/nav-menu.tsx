import React from "react";
export default function NavMenu() {
  return (
    //nav menu with links to home, about, projects, and contact
    <nav className="flex justify-center items-center gap-8">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
