import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Games } from "@/components/Games";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Games />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
