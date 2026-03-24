import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from "@/components/ui/shine-border"
import { Badge } from "@/components/ui/badge"

// object with all my skills
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "CSS",
  "HTML",
  "Python",
  "SQL",
  "Git",
  "Jenkins",
  "Angular",
  "Express.js",
  "MongoDB",
  "Spring Boot",
  "Vercel",
]

export function SkillsCard() {
  return (
    <Card className="relative w-full overflow-hidden bg-transparent">
      <ShineBorder
        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={3}
      />
      <CardHeader>
        <CardTitle className="text-2xl">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        {skills.map((skill) => (
          <Badge
            className="text-back m-1 bg-accent-foreground/80 p-4 text-lg text-background"
            key={skill}
            variant="secondary"
          >
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}
