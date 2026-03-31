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
              <div className="flex items-center justify-between pb-2">
                <div>
                  <p>Allianz Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Frontend Developer
                  </p>
                </div>
                <p className="text-lg">November 2025 - Present</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Doole Health</p>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                </div>
                <p className="text-lg">June 2024 - June 2025</p>
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
