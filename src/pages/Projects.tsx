import ProjectCard from "@/components/ProjectCard";

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
          image="/portfolio.png"
          date="October 2025"
          link={process.env.PORTFOLIO_WEBSITE_URL || "#projects"}
        />
      </div>
      <p>More projects coming soon.</p>
    </section>
  );
}
