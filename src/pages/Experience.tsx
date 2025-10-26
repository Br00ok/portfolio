import { Card, CardBody, CardHeader, Divider, CardFooter } from "@heroui/react";
import ExperienceCard from "@/components/ExperienceCard";
import NextSectionButton from "@/components/NextSectionButton";
export default function Experience() {
  return (
    <section
      id="experience"
      className="gap-10 pt-20 h-screen w-full bg-transparent flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl">My experience.</h2>
      <ExperienceCard
        title="Software Developer"
        description="Improved backend reliability by maintaining automated tests for systems built with PHP (Laravel), increasing system consistency. Enhanced product quality through comprehensive QA testing with TestRail, effectively identifying and documenting issues. Boosted mobile and tablet app performance by implementing responsive layouts and leveraging Ionic and Angular, delivering an improved user experience across devices within Agile workflows."
        period="June 2024 - June 2025"
      />
      <p>- Future experience -</p>
      <NextSectionButton path="projects" />
    </section>
  );
}
