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
import { SkillsCard } from "@/components/skills-card"

const projects = []

export default function Main() {
  return (
    <main className="mt-10 flex h-fit w-2/5 flex-col gap-8">
      <section className="flex w-full items-center justify-between">
        <div className="flex w-fit flex-col gap-4">
          <h1 className="text-7xl font-extrabold">
            <TextAnimate animation="blurInUp" by="word">
              Hi, I&apos;m Bru
            </TextAnimate>
          </h1>
          <h2 className="text-4xl font-bold tracking-tighter">
            <AuroraText>Software Developer</AuroraText>
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
                Currently working as a Frontend Developer at a multinational
                company service provider, I consider myself both a developer and
                a designer of digital solutions for real-world challenges. I’m
                always looking for ways to improve both professional processes
                and everyday tasks, with the goal of enhancing people’s lives.
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
                <p className="text-sm">November 2025 - Present</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Doole Health</p>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                </div>
                <p className="text-sm">June 2024 - June 2025</p>
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
                <p className="text-sm">2020 - 2024</p>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="flex w-full items-center justify-center">
        <SkillsCard />
      </section>
      <section className="mt-6 flex w-full flex-col items-center justify-center">
        <h4 className="pb-6 text-4xl font-extrabold">My Projects</h4>
        <div className="flex gap-4">
          <Card>
            <CardContent>drfg</CardContent>
          </Card>
          <Card></Card>
        </div>
      </section>
    </main>
  )
}
