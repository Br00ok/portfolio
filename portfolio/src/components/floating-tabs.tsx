// floating tabs component
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "./ui/card";

interface FloatingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FloatingTabs({ activeTab, setActiveTab }: FloatingTabsProps) {
  const handleTabClick = (id: string, tab: string) => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="fixed top-4 left-1/2 transform -translate-x-1/2 w-fit max-w-3xl shadow-lg p-4 z-50">
      <Tabs value={activeTab} className="w-full">
        <TabsList className="bg-transparent">
          <TabsTrigger
            value="home"
            className="font-semibold p-6"
            onClick={() => handleTabClick("home", "home")}
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="font-semibold p-6"
            onClick={() => handleTabClick("about-me", "about")}
          >
            About me
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="font-semibold p-6"
            onClick={() => handleTabClick("experience", "experience")}
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="font-semibold p-6"
            onClick={() => handleTabClick("projects", "projects")}
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="font-semibold p-6"
            onClick={() => handleTabClick("contact", "contact")}
          >
            Contact
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Card>
  );
}
