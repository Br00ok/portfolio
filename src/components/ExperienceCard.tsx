import { Card, CardBody, CardHeader, Divider, CardFooter } from "@heroui/react";
export default function ExperienceCard({
  title,
  description,
  period,
}: {
  title: string;
  description: string;
  period: string;
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
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{period}</p>
      </CardFooter>
    </Card>
  );
}
