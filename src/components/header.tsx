"use client";
import React from "react";
import NavMenu from "./nav-menu";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between w-full px-8 py-4 h-fit">
      <div className="w-1/3">
        <h1
          onClick={() => router.push("/")}
          className="text-4xl cursor-pointer"
        >
          Bru Gladiador
        </h1>
      </div>
      <div className="pt-4">
        <NavMenu />
      </div>
      <div className="w-1/3 flex justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
