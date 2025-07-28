import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-100">
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

      <main className="h-screen">
        <div className="flex h-full flex-col justify-between gap-18 overflow-x-hidden pt-40 md:gap-24 md:pt-45 lg:gap-35 lg:pt-47.5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
              <span className="badge badge-primary shrink-0 rounded-full">
                Full-Stack
              </span>
              <span className="text-base-content/80">Software Developer</span>
            </div>
            <h1 className="text-base-content relative z-1 text-5xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance">
              <span>Bru Gladiador </span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-10 -z-1 max-lg:left-4 max-md:hidden"
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
            <p className="text-base-content/80 max-w-2xl">
              A design-oriented developer with a passion for creating beautiful
              and functional web applications.
            </p>

            <a href="#aboutme" className="btn btn-primary btn-gradient btn-lg">
              About me
              <span className="icon-[tabler--arrow-down] size-5 rtl:rotate-180"></span>
            </a>
          </div>
          <div id="aboutme" className="w-full h-screen bg-amber-400">
            <div className="avatar">
              <div className="size-16 rounded-md">
                <img src="/profile_image.jpg" alt="Profile Image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
