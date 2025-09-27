import Intro from "./Intro";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="m-0 p-0 w-full flex flex-col min-h-screen">
      <Header />
      <main className="m-0 p-0 w-full h-full flex flex-col items-center justify-center">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}
