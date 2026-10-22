"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBrandGithub, IconWorld } from "@tabler/icons-react"
import Image from "next/image"

// projects with title, description, image, link to github and link to live demo
const projects = [
  {
    title: "Weather App",
    description:
      "A simple weather application that displays current conditions and forecasts oriented towards mobile user experience.",
    image: "/assets/weather-app.png",
    github: "https://github.com/Br00ok/weather-app",
    demo: "https://bgl-weather-app.vercel.app/",
  },
  {
    title: "Pizza Dough Calculator",
    description:
      "A dough calculator that helps bakers determine the right amount of ingredients needed for their recipes.",
    image: "/assets/dough-calculator.png",
    github: "https://github.com/Br00ok/dough-calculator",
    demo: "https://bgl-dough-calculator.vercel.app/",
  },
  {
    title: "Portfolio Project",
    description:
      "The first project of my collection, a portofolio website to show my skills and projects.",
    image: "/assets/portfolio.png",
    github: "https://github.com/Br00ok/portfolio",
    demo: "https://bglportfolio.vercel.app/",
  },
]

export default function ProjectsGrid() {
  return (
    <>
      <h4 className="pb-6 text-3xl font-extrabold sm:pb-8 sm:text-4xl">
        My Projects
      </h4>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="w-full max-w-none border-none p-0 shadow-none md:max-w-sm"
          >
            <CardHeader className="flex flex-row items-center justify-between border-b border-border p-4 [.border-b]:pb-4">
              <CardTitle>{project.title}</CardTitle>
              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-border p-2 text-foreground transition-colors hover:bg-accent"
                  aria-label={`Open ${project.title} GitHub repository`}
                >
                  <IconBrandGithub className="h-5 w-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-border p-2 text-foreground transition-colors hover:bg-accent"
                  aria-label={`Open ${project.title} website`}
                >
                  <IconWorld className="h-5 w-5" />
                </a>
              </div>
            </CardHeader>

            <CardContent className="px-4 pb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="mb-4 h-40 w-full rounded-xl object-cover sm:h-48"
              />
              {project.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
