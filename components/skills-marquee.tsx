"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { Card } from "./ui/card"
import { MagicCard } from "./ui/magic-card"
import { useTheme } from "next-themes"
import { clipPath } from "motion/react-client"
const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Java" },
  { name: "SQL" },
  { name: "React" },
  { name: "Angular" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Vite" },
  { name: "WordPress" },
  { name: "Material UI" },
  { name: "Spring Boot" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "REST APIs" },
  { name: "Jenkins" },
  { name: "Laravel" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "Playwright" },
  { name: "Jest" },
  { name: "Karma" },
  { name: "Jasmine" },
]

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

const SkillsCard = ({ name }: { name: string }) => {
  const { theme } = useTheme()

  return (
    <Card className="h-fit w-fit border-none bg-black p-4 text-sm font-bold text-white dark:bg-white dark:text-black">
      <p>{name}</p>
    </Card>
  )
}

export function SkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
      {" "}
      <Marquee pauseOnHover className="bg-transparent [--duration:90s]">
        {firstRow.map((skill) => (
          <SkillsCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="bg-transparent [--duration:90s]">
        {secondRow.map((skill) => (
          <SkillsCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}
