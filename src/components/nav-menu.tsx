import React from "react";
import NavItem from "./nav-item";
export default function NavMenu() {
  return (
    //nav menu with links to home, about, projects, and contact
    <nav className="flex justify-center items-center gap-8">
      <NavItem href="/" name="Home" />
      <NavItem href="/about" name="About" />
      <NavItem href="/projects" name="Projects" />
      <NavItem href="/contact" name="Contact" />
    </nav>
  );
}
