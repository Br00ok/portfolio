"use client";

import { Chip } from "@heroui/react";

const techColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Java: "#007396",
  SQL: "#F29111",

  React: "#61DAFB",
  Angular: "#DD0031",
  "Next.js": "#ffffff",
  "Tailwind CSS": "#06B6D4",
  Vite: "#646CFF",
  WordPress: "#21759B",
  "Material UI": "#0081CB",

  "Spring Boot": "#6DB33F",
  "Node.js": "#339933",
  Express: "#ffffff",
  "REST APIs": "#FF6F61",
  GraphQL: "#E10098",
  Laravel: "#FF2D20",

  MySQL: "#4479A1",
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
};

const categories = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Java", "SQL"],
  frontend: [
    "React",
    "Angular",
    "Next.js",
    "Tailwind CSS",
    "Vite",
    "WordPress",
    "Material UI",
  ],
  backend: [
    "Spring Boot",
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "Laravel",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
  ],
};
function Skills({ isLang = true, frontend = true, backend = true }) {
  const filteredTechs = Object.entries(techColors).filter(([tech]) => {
    if (isLang && categories.languages.includes(tech)) return true;
    if (frontend && categories.frontend.includes(tech)) return true;
    if (backend && categories.backend.includes(tech)) return true;
    return false;
  });

  return (
    <div className="flex flex-wrap gap-0 md:gap-8 items-center justify-center">
      {filteredTechs.length != 0 ? (
        filteredTechs.map(([tech, color]) => (
          <Chip
            size="lg"
            key={tech}
            variant="bordered"
            className="scale-85 md:scale-120"
            style={{
              borderColor: color,
              color: color,
              backgroundColor: color + "20",
            }}
          >
            {tech}
          </Chip>
        ))
      ) : (
        <p className="text-center text-base-content/70 whitespace-nowrap">
          No skills selected.
        </p>
      )}
    </div>
  );
}

import { useState } from "react";
import { Avatar, Card, Checkbox } from "@heroui/react";
import NextSectionButton from "@/components/NextSectionButton";
export default function AboutMe() {
  const [lang, setLang] = useState(true);
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(true);
  return (
    <section
      id="aboutme"
      className="gap-10 pt-20 h-fit md:h-screen w-full bg-transparent flex flex-col items-center justify-center"
    >
      <Card className="gap-10 p-5 w-3/4 h-full md:w-fit md:h-fit flex flex-col md:flex-row items-center justify-center backdrop-blur-2xl bg-background/35 shadow-lg shadow-black/20">
        <Avatar
          className="h-50 w-50"
          src="/profile_picture.webp"
          imgProps={{ loading: "lazy" }}
        />
        <p className="max-w-160">
          I'm a recent Computer Engineering graduate passionate about building
          impactful applications. I enjoy creating user-friendly solutions that
          combine functionality with thoughtful design. I'm always eager to
          learn and adapt, turning ideas into quality, scalable software. Beyond
          coding, I study languages and practice music—hobbies that sharpen my
          discipline, creativity, and cultural perspective.
        </p>
      </Card>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 mb-10">
          <Checkbox
            color="default"
            isSelected={lang}
            onChange={() => setLang(!lang)}
          >
            Languages
          </Checkbox>
          <Checkbox
            isSelected={frontend}
            onChange={() => setFrontend(!frontend)}
            color="primary"
          >
            Frontend
          </Checkbox>
          <Checkbox
            isSelected={backend}
            onChange={() => setBackend(!backend)}
            color="secondary"
          >
            Backend
          </Checkbox>
        </div>
        <div className="flex max-w-3/4 md:max-w-1/3 items-center justify-center">
          <Skills isLang={lang} frontend={frontend} backend={backend} />
        </div>
      </div>

      <NextSectionButton path="experience" />
    </section>
  );
}
