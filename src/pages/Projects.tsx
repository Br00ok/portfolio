import { Card, CardBody, CardHeader, Divider, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
function ProjectCard({
  title,
  image,
  date,
  link,
}: {
  title: string;
  image: string;
  date: string;
  link: string;
}) {
  return (
    <Card className="max-w-3/4 md:max-w-1/2 p-2 flex items-center justify-center backdrop-blur-2xl bg-background/35 shadow-lg shadow-black/20">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-xl">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image
          src={image}
          width={300}
          height={300}
          alt="Picture of the project"
          loading="lazy"
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        {date}
        <Link href={link} target="_blank">
          <IconBrandGithub />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="gap-10 pt-20 h-screen w-full bg-transparent flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl">My projects.</h2>
      <div className="flex justify-center items-center w-9/10 md:w-1/2 h-fit">
        <ProjectCard
          title="Portfolio Website"
          image="/portfolio.webp"
          date="October 2025"
          link={process.env.PORTFOLIO_WEBSITE_URL || "#projects"}
        />
      </div>
      <p>More projects coming soon.</p>
    </section>
  );
}
