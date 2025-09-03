"use client";

export default function Experience() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 py-24"
      id="experience"
    >
      <div className="max-w-5xl w-full flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-5xl font-bold text-base-content text-center">
          Professional Experience
        </h1>

        <ul className="timeline timeline-vertical w-full">
          <li>
            <div className="timeline-middle">
              <span className="icon-[tabler--briefcase] text-primary size-6"></span>
            </div>
            <div className="timeline-start md:text-end mb-10 w-full max-w-4xl text-left">
              <time className="font-bold text-lg whitespace-nowrap inline-block">
                Software Developer June 2024 – June 2025
              </time>
              <p className="text-right text-base-content/70 mt-2">
                Improved backend reliability by maintaining{" "}
                <strong>automated tests</strong> for systems built with{" "}
                <strong>PHP (Laravel)</strong>, increasing system consistency.
                Enhanced product quality through comprehensive{" "}
                <strong>QA testing</strong> with <strong>TestRail</strong>,
                effectively identifying and documenting issues. Boosted mobile
                and tablet app performance by implementing{" "}
                <strong>responsive layouts</strong> and leveraging{" "}
                <strong>Ionic</strong> and <strong>Angular</strong>, delivering
                an improved user experience across devices within{" "}
                <strong>Agile workflows</strong>.
              </p>
            </div>
            <hr />
          </li>

          {/* Placeholder Future Experience */}
          <li>
            <hr />
            <div className="timeline-middle">
              <span className="icon-[tabler--circle-dashed] text-base-content/30 size-6"></span>
            </div>
            <div className="timeline-end mb-10 w-full max-w-4xl text-left">
              <time className="font-bold text-lg text-base-content/40">
                Future Experience
              </time>
              <p className="text-base-content/40 mt-2 italic">
                To be continued...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
