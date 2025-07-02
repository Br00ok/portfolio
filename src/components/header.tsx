// header component with NavMenu component and ModeToggle component
import React from "react";
import NavMenu from "./nav-menu";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex relative items-center justify-center">
      <div className="w-1/5 flex  items-center justify-center">
        <h1 className="text-4xl">Bru Gladiador</h1>
      </div>
      <div className="mt-16 flex  items-center justify-center">
        <NavMenu />
      </div>
      <div className="w-1/5 flex  items-center justify-center">
        <ModeToggle />
      </div>
    </header>
  );
}
