"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { useTheme } from "next-themes"

// projects with title, description, image, link to github and link to live demo
const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    github: "",
    demo: "",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    github: "",
    demo: "",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200",
    github: "",
    demo: "",
  },
]

export default function ProjectsGrid() {
  const { theme } = useTheme()
  return (
    <>
      <h4 className="pb-8 text-4xl font-extrabold">My Projects</h4>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="w-full max-w-sm border-none p-0 shadow-none"
          >
            <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">{project.description}</CardContent>
            <CardFooter className="border-t border-border p-4 [.border-t]:pt-4">
              <Button className="w-full">Sign In</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
