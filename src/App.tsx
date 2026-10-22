import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationMap } from "@/components/LocationMap";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
