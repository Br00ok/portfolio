"use client";

import Link from "next/link";

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body items-center text-center">
        {icon}
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    {
      icon: (
        <span className="icon-[tabler--brand-react] text-sky-400 text-5xl mb-2"></span>
      ),
      title: "Frontend",
      items: [
        "React / Angular",
        "Next.js / Vite",
        "Tailwind CSS / Material UI +",
        "TypeScript / JavaScript",
        "HTML5 / CSS3",
        "WordPress / WooCommerce",
      ],
    },
    {
      icon: (
        <span className="icon-[tabler--server] text-purple-500 text-5xl mb-2"></span>
      ),
      title: "Backend",
      items: [
        "Node.js / Express",
        "Java / Spring Boot",
        "PHP / Laravel",
        "REST APIs & GraphQL",
        "Authentication & Security",
        "Socket.io / Real-time",
      ],
    },
    {
      icon: (
        <span className="icon-[tabler--database] text-green-500 text-5xl mb-2"></span>
      ),
      title: "Databases",
      items: [
        "MySQL / PostgreSQL",
        "MongoDB / NoSQL",
        "Sequelize ORM",
        "Firebase",
        "Data Modeling & Migrations",
      ],
    },
    {
      icon: (
        <span className="icon-[tabler--brand-github] text-gray text-5xl mb-2"></span>
      ),
      title: "Git & DevOps",
      items: [
        "Git / GitHub",
        "CI/CD (GitHub Actions)",
        "Version Control",
        "Code Reviews",
      ],
    },
    {
      icon: (
        <span className="icon-[tabler--network] text-blue-800 text-5xl mb-2"></span>
      ),
      title: "Office & Networking",
      items: [
        "Microsoft 365 / Office Suite",
        "Slack / Teams",
        "Agile & Scrum",
        "Documentation & Planning",
        "ClickUp",
      ],
    },
    {
      icon: (
        <span className="icon-[tabler--chart-bubble] text-pink-500 text-5xl mb-2"></span>
      ),
      title: "Software Engineering",
      items: ["Software Architecture Patterns", "Requirements Analysis", "UML"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 pt-28 md:pt-32 pb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-base-content mb-8 text-center">
        My Skills
      </h1>
      <p className="text-base-content/80 max-w-4xl text-lg md:text-xl mb-10 text-center">
        A comprehensive set of skills that I have carefully developed through my
        academic studies, professional work experience, and hands-on personal
        projects over the years.
      </p>
      <div className="flex justify-center mb-6">
        <Link href="#hardskills">
          <button
            className="animate-bounce text-primary text-3xl rounded-full bg-primary/10 px-4 py-2 shadow-md transition-all hover:scale-110 hover:bg-primary/30 focus:outline-none"
            aria-label="Scroll down"
          >
            ↓
          </button>
        </Link>
      </div>

      <div
        id="hardskills"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl scroll-mt-30"
      >
        {skills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>

      <section className="mt-16 w-full max-w-3xl">
        <div className="card bg-base-200/80 shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg md:text-xl font-semibold mb-2">
              Soft Skills
            </h2>
            <ul className="flex flex-wrap justify-center gap-4 text-base-content/80 text-sm md:text-base mt-2">
              <li className="badge badge-outline badge-lg px-4 py-2">
                Communication
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Attention to Detail
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Teamwork
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Problem Solving
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Curiosity
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Adaptability
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Responsibility
              </li>
              <li className="badge badge-outline badge-lg px-4 py-2">
                Time Management
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
