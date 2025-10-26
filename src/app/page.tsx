import Header from "@/components/Header";
import Hero from "@/pages/Hero";
import AboutMe from "@/pages/AboutMe";
import Background from "@/components/Background";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
export default function Home() {
  return (
    <main>
      <Background />
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
    </main>
  );
}
