"use client"

import { Marquee } from "@/components/ui/marquee"
import { Card } from "./ui/card"

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
  { name: "REST API" },
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
  { name: "Vercel" },
  { name: "Supabase" },
]

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

const SkillsCard = ({ name }: { name: string }) => {
  return (
    <Card className="h-fit w-fit border-none bg-black px-4 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-5 sm:text-lg dark:bg-white dark:text-black">
      <p>{name}</p>
    </Card>
  )
}

export function SkillsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] px-2 py-6 sm:gap-5 sm:px-0">
      <Marquee
        pauseOnHover
        className="bg-transparent [--duration:70s] sm:[--duration:90s]"
      >
        {firstRow.map((skill) => (
          <SkillsCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <Marquee
        reverse
        pauseOnHover
        className="bg-transparent [--duration:70s] sm:[--duration:90s]"
      >
        {secondRow.map((skill) => (
          <SkillsCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}
