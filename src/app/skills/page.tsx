"use client";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 pt-28 md:pt-32 pb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center">
        My Skills
      </h1>
      <p className="text-base-content/80 max-w-4xl text-lg md:text-xl mb-10 text-center">
        A comprehensive set of skills that I have carefully developed and
        refined through my academic studies, professional work experience, and
        hands-on personal projects over the years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body items-center text-center">
            <span className="icon-[tabler--brand-react] text-sky-400 text-5xl mb-2"></span>
            <h2 className="card-title text-xl font-semibold mb-2">Frontend</h2>
            <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
              <li>React / Next.js</li>
              <li>Tailwind CSS / Material UI +</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Figma (Design)</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body items-center text-center">
            <span className="icon-[tabler--server] text-purple-500 text-5xl mb-2"></span>
            <h2 className="card-title text-xl font-semibold mb-2">Backend</h2>
            <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
              <li>Node.js / Express</li>
              <li>Spring Boot / Java</li>
              <li>Laravel / PHP</li>
              <li>REST APIs & GraphQL</li>
              <li>Authentication & Security</li>
              <li>Socket.io / Real-time</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body items-center text-center">
            <span className="icon-[tabler--database] text-green-500 text-5xl mb-2"></span>
            <h2 className="card-title text-xl font-semibold mb-2">Databases</h2>
            <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
              <li>MySQL / PostgreSQL</li>
              <li>MongoDB / NoSQL</li>
              <li>Sequelize ORM</li>
              <li>Firebase</li>
              <li>Data Modeling & Migrations</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body items-center text-center">
            <span className="icon-[tabler--brand-github] text-gray text-5xl mb-2"></span>
            <h2 className="card-title text-xl font-semibold mb-2">
              Git & DevOps
            </h2>
            <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
              <li>Git / GitHub</li>
              <li>CI/CD (GitHub Actions)</li>
              <li>Version Control</li>
              <li>Code Reviews</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body items-center text-center">
            <span className="icon-[tabler--network] text-blue-800 text-5xl mb-2"></span>
            <h2 className="card-title text-xl font-semibold mb-2">
              Office & Networking
            </h2>
            <ul className="list-disc list-inside text-base-content/80 text-left text-sm md:text-base">
              <li>Microsoft 365 / Office Suite</li>
              <li>Slack / Teams</li>
              <li>Agile & Scrum</li>
              <li>Documentation & Planning</li>
              <li>ClickUp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
