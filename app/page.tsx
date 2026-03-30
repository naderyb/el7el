import Hero from "./components/heroSection";
import About from "./components/aboutSection";
import Agenda from "./components/agendaSection";
import Club from "./components/clubSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <Club />
    </main>
  );
}
