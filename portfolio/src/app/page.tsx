import LearnMoreButton from "./custom-components/LearnMoreButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen max-w-full w-screen p-0 m-0">
      <main className="flex flex-col items-center">
        <div className="flex items-center justify-center min-h-screen max-w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-7xl font-bold">Software Developer</h2>
            <h1 className="text-9xl font-bold mt-5">Bru Gladiador</h1>
            <LearnMoreButton />
          </div>
        </div>
      </main>
      <div className="h-screen" id="about">
        <></>
      </div>
      <footer></footer>
    </div>
  );
}
