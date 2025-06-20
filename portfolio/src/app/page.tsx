"use client";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingTabs from "@/components/floating-tabs";

const sections = [
  { id: "home", tab: "home" },
  { id: "about-me", tab: "about" },
  { id: "experience", tab: "experience" },
  { id: "projects", tab: "projects" },
  { id: "contact", tab: "contact" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const found = sections.find((s) => s.id === entry.target.id);
          if (found) setActiveTab(found.tab);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center min-h-screen w-full p-0 m-0">
      <ModeToggle />
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-col min-h-screen w-full flex items-center justify-center">
        <div className="flex w-2/3 h-screen items-center mx-24" id="home">
          <div className="flex justify-center flex-col w-1/2 h-1/2">
            <h1 className="text-7xl font-bold p-4">Bru Gladiador</h1>
            <h2 className="text-5xl font-bold p-4">Software Engineer</h2>
            <div>
              <Button
                className="w-fit m-4"
                onClick={() => {
                  document
                    .getElementById("about-me")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About me
              </Button>
              <Button variant={"outline"} className="w-fit m-4">
                Check out my CV
              </Button>
            </div>
          </div>
          <div className="flex w-1/2 h-1/2">
            <Card className="w-full h-full"></Card>
          </div>
        </div>
        <div
          className="w-full min-h-screen flex items-center justify-center mx-24"
          id="about-me"
        >
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-5xl font-bold">About Me</h2>
          </div>
          <div className="w-full h-full flex items-center justify-center"></div>
        </div>
        <div
          className="w-full min-h-screen flex items-center justify-center mx-24"
          id="experience"
        >
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-5xl font-bold">Experience</h2>
          </div>
          <div className="w-full h-full flex items-center justify-center"></div>
        </div>
        <div
          className="w-full min-h-screen flex items-center justify-center mx-24"
          id="projects"
        >
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-5xl font-bold">Projects</h2>
          </div>
          <div className="w-full h-full flex items-center justify-center"></div>
        </div>
        <div
          className="w-full min-h-screen flex items-center justify-center mx-24"
          id="contact"
        >
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-5xl font-bold">Contact</h2>
          </div>
          <div className="w-full h-full flex items-center justify-center"></div>
        </div>
      </main>
      <footer className="flex items-center justify-center"></footer>
    </div>
  );
}
