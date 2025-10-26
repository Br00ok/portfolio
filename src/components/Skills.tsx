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

export default function Skills({
  isLang = true,
  frontend = true,
  backend = true,
}) {
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
