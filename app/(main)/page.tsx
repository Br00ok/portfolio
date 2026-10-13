import { TextAnimate } from "@/components/ui/text-animate"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuroraText } from "@/components/ui/aurora-text"
import { SkillsMarquee } from "@/components/skills-marquee"
import ProjectsGrid from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export default function Main() {
  return (
    <main className="mx-auto mt-6 flex w-full max-w-2xl flex-col gap-8 px-4 py-4 sm:mt-10 sm:gap-10 sm:px-6 lg:max-w-3xl lg:px-0">
      <section className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl">
            Hi, I&apos;m
            <TextAnimate
              className="block text-5xl leading-tight font-extrabold sm:text-7xl"
              animation="blurInUp"
              by="character"
            >
              Bru Gladiador
            </TextAnimate>
          </h1>
          <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl">
            <AuroraText>Software Engineer</AuroraText>
          </h2>
        </div>
        <div className="flex w-full items-center justify-center sm:w-fit sm:justify-center">
          <Avatar className="h-32 w-32 sm:h-44 sm:w-44 lg:h-50 lg:w-50">
            <AvatarImage src="/assets/profile.jpg" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <section className="flex w-full flex-wrap items-center justify-center gap-3 sm:justify-start">
        <a
          href="https://github.com/Br00ok"
          target="_blank"
          rel="noreferrer"
          className="inline-flex"
        >
          <Badge className="flex cursor-pointer items-center gap-2 bg-purple-50 p-3 text-lg text-purple-700 hover:scale-105 hover:text-white! sm:p-4 sm:text-xl dark:bg-purple-950 dark:text-purple-300">
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
          <Badge className="flex cursor-pointer items-center gap-2 bg-blue-50 p-3 text-lg text-blue-700 hover:scale-105 hover:text-white! sm:p-4 sm:text-xl dark:bg-blue-950 dark:text-blue-300">
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
              <div className="flex flex-col gap-2 pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mt-4 flex justify-between">
                    <p>Allianz Technology</p>
                    <p className="text-sm sm:text-base">
                      November 2025 - Present
                    </p>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Frontend Developer
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    Successfully contributed to the migration of 10+ legacy
                    AngularJS applications to a modern Angular stack, while
                    establishing robust testing practices that consistently
                    maintained 90%+ code coverage and implementing end-to-end
                    automation that ensured platform-wide functional integrity
                    across every release cycle.<br></br>
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    <strong>Tech Stack:</strong> Angular 20/21/22, AngularJS,
                    TypeScript, JavaScript, HTML5, CSS3/SCSS, NDBX (Allianz UI
                    Library), RxJS, Jasmine, Karma, Jest, Playwright, Node.js,
                    Jenkins, ArgoCD, SonarQube, Git, GitHub, Jira, Confluence,
                    Agile/Scrum, AI Tools (GitHub Copilot, Claude Code, ChatGPT)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mt-4 flex justify-between">
                    <p>Doole Health</p>
                    <p className="text-sm sm:text-base">
                      June 2024 - June 2025
                    </p>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Frontend and Mobile Developer
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    Adapted Doole Health’s web interfaces for mobile and tablet
                    devices, transforming desktop layouts into responsive,
                    device-optimised experiences.<br></br>
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    <strong>Tech Stack:</strong> Angular, Ionic, TypeScript,
                    HTML5, CSS3/SCSS, PHP, Laravel, REST APIs, Git, GitHub,
                    Agile/Scrum
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Backend Developer
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    Built and maintained backend services for Doole Health’s
                    digital health platform, focusing on reliable server-side
                    logic, automated testing, and structured QA.<br></br>
                  </p>
                  <p className="pt-2 pb-2 text-sm">
                    <strong>Tech Stack:</strong> PHP, Laravel, TestRail, MySQL,
                    REST APIs, Git, GitHub, Agile/Scrum
                  </p>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="flex w-full items-center justify-center">
        <Card className="w-full bg-card/80">
          <CardHeader className="flex flex-col gap-8">
            <div className="h-full w-full">
              <CardTitle className="text-2xl text-muted-foreground">
                @Education
              </CardTitle>
              <CardContent className="mt-2 flex flex-col gap-4 text-base sm:text-lg">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p>Bachelor&apos;s Degree in Computer Science</p>
                    <p className="text-sm text-muted-foreground">
                      Universitat Pompeu Fabra
                    </p>
                  </div>
                  <p className="text-sm sm:text-lg">2020 - 2024</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p>Claude Code in Action</p>
                    <p className="text-sm text-muted-foreground">
                      Claude Academy
                    </p>
                  </div>
                  <p className="text-sm sm:text-lg">2026</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p>Cybersecurity Fundamentals</p>
                    <p className="text-sm text-muted-foreground">
                      Palo Alto Networks Academy
                    </p>
                  </div>
                  <p className="text-sm sm:text-lg">2025</p>
                </div>
              </CardContent>
            </div>
            <div className="h-full w-full">
              <CardTitle className="text-2xl text-muted-foreground">
                @Languages
              </CardTitle>
              <CardContent className="mt-2 flex flex-col gap-2 text-base sm:text-lg">
                <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
                  <div className="flexflex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p>English</p>
                      <p className="text-sm text-muted-foreground">
                        B2 — Professional Working Proficiency
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p>Spanish</p>
                      <p className="text-sm text-muted-foreground">Native</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p>Catalan</p>
                      <p className="text-sm text-muted-foreground">Native</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p>Chinese</p>
                      <p className="text-sm text-muted-foreground">
                        A1 — Basic
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
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
