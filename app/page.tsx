import Hero from "./components/heroSection";
import About from "./components/aboutSection";
import Agenda from "./components/agendaSection";
import Club from "./components/clubSection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SectionSeparator from "./components/sectionSeparator";

export default function Home() {
  return (
    <main className="flex flex-col w-full" style={{ paddingTop: 64 }}>
      <Navbar />
      <Hero />
      <SectionSeparator className="max-w-6xl mx-auto px-4" />
      <About />
      <SectionSeparator className="max-w-6xl mx-auto px-4" />
      <Agenda />
      <SectionSeparator className="max-w-6xl mx-auto px-4" />
      <Club />
      <SectionSeparator className="max-w-6xl mx-auto px-4" />
      <Footer />
    </main>
  );
}
