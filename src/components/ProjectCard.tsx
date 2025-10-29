import { Card, CardBody, CardHeader, Divider, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
export default function ProjectCard({
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
