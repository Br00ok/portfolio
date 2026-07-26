"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
]

export default function ProjectsGrid() {
  return (
    <>
      <h4 className="pb-8 text-4xl font-extrabold">My Projects</h4>
      <div className="mb-8 grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="w-full max-w-sm border-none p-0 shadow-none"
          >
            <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="px-4">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="mb-4 h-48 w-full rounded-xl object-cover"
              />
              {project.description}
            </CardContent>
            <CardFooter className="border-t border-border p-4 [.border-t]:pt-4">
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
