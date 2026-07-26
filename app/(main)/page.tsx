import { TextAnimate } from "@/components/ui/text-animate"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AuroraText } from "@/components/ui/aurora-text"
import { SkillsMarquee } from "@/components/skills-marquee"
import ProjectsGrid from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export default function Main() {
  return (
    <main className="mt-10 flex h-fit w-2/5 flex-col gap-10">
      <section className="flex w-full items-center justify-between">
        <div className="flex w-fit flex-col gap-4">
          <h1 className="text-5xl font-extrabold">
            Hi, I&apos;m
            <TextAnimate
              className="text-7xl font-extrabold"
              animation="blurInUp"
              by="character"
            >
              Bru Gladiador
            </TextAnimate>
          </h1>
          <h2 className="text-4xl font-bold tracking-tighter">
            <AuroraText>Software Engineer</AuroraText>
          </h2>
        </div>
        <div className="flex w-fit items-center justify-center">
          <Avatar className={"h-40 w-40"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <section className="flex w-full items-center justify-start gap-3">
        <a
          href="https://github.com/Br00ok"
          target="_blank"
          rel="noreferrer"
          className="inline-flex"
        >
          <Badge className="flex cursor-pointer items-center gap-2 bg-purple-50 p-4 text-xl text-purple-700 hover:scale-105 hover:text-white! dark:bg-purple-950 dark:text-purple-300">
            <span className="inline-flex h-8 w-8 items-center justify-center">
              <IconBrandGithub className="h-6 w-6" />
            </span>
            GitHub
          </Badge>
        </a>
        <a
          href="https://www.linkedin.com/in/brugladiadorllorella"
          target="_blank"
          rel="noreferrer"
          className="inline-flex"
        >
          <Badge className="flex cursor-pointer items-center gap-2 bg-blue-50 p-4 text-xl text-blue-700 hover:scale-105 hover:text-white! dark:bg-blue-950 dark:text-blue-300">
            <span className="inline-flex h-8 w-8 items-center justify-center">
              <IconBrandLinkedin className="h-6 w-6" />
            </span>
            LinkedIn
          </Badge>
        </a>
      </section>

      <section className="flex w-full items-center justify-center">
        <Card className="w-full bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl text-muted-foreground">
              @About
            </CardTitle>
            <CardContent className="text-lg">
              <p>
                Currently working as a Frontend Developer, I consider myself
                both a developer and a designer of digital solutions for
                real-world challenges. I’m always looking for ways to improve
                both professional processes and everyday tasks, with the goal of
                enhancing people’s lives.
              </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="flex w-full items-center justify-center">
        <Card className="w-full bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl text-muted-foreground">
              @WorkExperience
            </CardTitle>
            <CardContent className="text-lg">
              <div className="flex items-start justify-between gap-4 pb-4">
                <div className="min-w-0 flex-1">
                  <p>Allianz Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Frontend Developer
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    Contributing to the migration of a multinational
                    company&apos;s insurance web portal to Angular 20,
                    supporting the modernization of the frontend architecture,
                    implementing new features with UI component libraries, and
                    ensuring a consistent user interface.
                  </p>
                </div>
                <p className="shrink-0 text-base whitespace-nowrap">
                  November 2025 - Present
                </p>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p>Doole Health</p>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    Improved backend reliability through automated testing in
                    PHP (Laravel). Conducted QA testing with TestRail to
                    identify and document issues. Enhanced mobile and tablet
                    applications using Ionic and Angular to deliver a better
                    responsive user experience.
                  </p>
                </div>
                <p className="shrink-0 text-base whitespace-nowrap">
                  June 2024 - June 2025
                </p>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="flex w-full items-center justify-center">
        <Card className="w-full bg-card/80">
          <CardHeader>
            <CardTitle className="text-2xl text-muted-foreground">
              @Education
            </CardTitle>
            <CardContent className="text-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p>Universitat Pompeu Fabra</p>
                  <p className="text-sm text-muted-foreground">
                    Bachelor&apos;s Degree in Computer Science
                  </p>
                </div>
                <p className="text-lg">2020 - 2024</p>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="flex w-full items-center justify-center">
        <SkillsMarquee />
      </section>
      <section className="mt-6 flex w-full flex-col items-center justify-center">
        <ProjectsGrid />
      </section>
    </main>
  )
}
