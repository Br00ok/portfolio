export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen min-w-screen p-0 m-0">
      <main className="flex flex-col  items-center">
        <div className="flex items-center justify-center min-h-screen min-w-screen">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">Software Developer</h2>
            <h1 className="text-8xl font-bold mt-5">Bru Gladiador</h1>
            <a href="/projects" className="mt-4 text-blue-500 hover:underline">
              View Projects
            </a>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
