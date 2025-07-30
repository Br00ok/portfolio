import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-100 scroll-smooth">
      <header className="border-base-content/20 bg-base-100 fixed top-0 z-10 w-full border-b py-0.25">
        <nav className="navbar mx-auto max-w-7xl rounded-b-xl px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:flex lg:items-center lg:gap-2">
            <div className="navbar-start items-center justify-between max-lg:w-full">
              <a
                className="text-base-content flex items-center gap-3 text-xl font-bold"
                href="#"
              >
                <img
                  src="https://cdn.flyonui.com/fy-assets/logo/logo.png"
                  className="size-8"
                  alt="brand-logo"
                />
                FlyonUI
              </a>
              <div className="flex items-center gap-5 lg:hidden">
                <a href="#" className="btn btn-primary">
                  Login
                </a>
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-square"
                  data-collapse="#navbar-block-4"
                  aria-controls="navbar-block-4"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-5.5"></span>
                </button>
              </div>
            </div>
            <div
              id="navbar-block-4"
              className="lg:navbar-center transition-height collapse hidden grow overflow-hidden font-medium duration-300 lg:flex"
            >
              <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
                <a href="#" className="hover:text-primary">
                  Home
                </a>
                <a href="#" className="hover:text-primary">
                  Products
                </a>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
                <a href="#" className="hover:text-primary">
                  Contacts
                </a>
              </div>
            </div>
            <div className="navbar-end max-lg:hidden">
              <a href="#" className="btn btn-primary">
                Login
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen scroll-smooth">
        <div className="flex h-full flex-col justify-between gap-18 overflow-x-hidden pt-40 md:gap-24 md:pt-45 lg:gap-35 lg:pt-47.5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
              <span className="badge badge-primary shrink-0 rounded-full text-xl">
                Full-Stack
              </span>
              <span className="text-base-content/80 text-2xl">
                Software Developer
              </span>
            </div>
            <h1 className="text-base-content relative z-1 text-8xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance">
              <span>Bru Gladiador </span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-1/3 -z-1 max-lg:left-4 max-md:hidden"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_10365_68643)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10365_68643"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stop-color="var(--color-primary)" />
                    <stop
                      offset="1"
                      stop-color="var(--color-primary-content)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </h1>
            <p className="text-base-content/80 max-w-2xl text-xl">
              A design-oriented developer with a passion for creating beautiful
              and functional web applications🚀
            </p>
            <div className="flex gap-4">
              <a
                href="#aboutme"
                className="btn btn-primary btn-gradient btn-lg"
              >
                See more
                <span className="icon-[tabler--arrow-down] size-5 rtl:rotate-180"></span>
              </a>
              <a href="https://linkedin.com/in/brugladiadorllorella">
                <button className="btn btn-lg btn-gradient [--btn-color:#0a66c2] text-white">
                  <span className="icon-[tabler--brand-linkedin] size-4.5 shrink-0"></span>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <div
            id="aboutme"
            className="w-full h-fit bg-gray-200 flex flex-col md:flex-row items-center justify-center p-10"
          >
            {/* Texto About Me */}
            <div className="w-1/2 md:w-1/2 h-fit text-gray-900 flex flex-col justify-center p-6 space-y-5">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                👋 About Me
              </h2>

              <p className="text-base leading-snug">
                Hi! I’m <span className="font-semibold">Bru Gladiador</span>, a{" "}
                <span className="font-semibold">
                  freshly graduated Junior Software Developer
                </span>{" "}
                with over <strong>1 year of professional experience</strong>{" "}
                building scalable and reliable applications. I’m passionate
                about clean architecture and writing code that lasts.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  💻 Professional Experience
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    Developed automated tests using <strong>PHP</strong> to
                    ensure high-quality releases.
                  </li>
                  <li>
                    Built backend services with <strong>Laravel</strong>{" "}
                    focusing on scalable APIs.
                  </li>
                  <li>
                    Worked in Quality Assurance to improve performance and
                    usability.
                  </li>
                  <li>
                    Contributed to mobile app development and UI with{" "}
                    <strong>Ionic, Angular, Node.js</strong>.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  📂 Personal Projects
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    Created e-commerce websites using{" "}
                    <strong>WordPress and WooCommerce</strong>.
                  </li>
                  <li>
                    Developed applications with <strong>Node.js</strong> to
                    deepen backend skills.
                  </li>
                  <li>
                    Currently mastering <strong>React</strong> for dynamic
                    frontends.
                  </li>
                  <li>
                    Exploring backend frameworks like{" "}
                    <strong>Spring Boot</strong> and <strong>Express.js</strong>
                    .
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  🌍 Vision & Approach
                </h3>
                <p className="text-base leading-snug mt-2">
                  Focused on growing as a well-rounded engineer tackling
                  frontend, backend, web, and mobile. I build apps with solid
                  design principles emphasizing maintainability and scalability.
                </p>
                <ul className="list-disc list-inside space-y-1 text-base mt-2">
                  <li>Write clean, readable, efficient code.</li>
                  <li>Prioritize scalable architecture.</li>
                  <li>Continuously learn and adapt.</li>
                </ul>
              </div>

              <p className="text-base italic font-semibold mt-5">
                🚀 Always learning. Always building. Always improving.
              </p>
            </div>

            {/* Avatar */}
            <div className="w-1/2 flex justify-center items-center avatar mt-8 md:mt-0 md:ml-10">
              <div className="size-100 rounded-4xl overflow-hidden shadow-lg">
                <img
                  src="/profile_image.jpg"
                  alt="Profile Image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-base-200 text-base-content/80 py-6 text-center">
          <p className="text-sm">Designed and developed by Bru Gladiador</p>
          <p className="text-xs mt-2">
            Built with{" "}
            <a
              href="https://nextjs.org/"
              className="text-primary hover:underline"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
