import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Sponsors from "./components/sponsors";
import Howworks from "./components/Howworks";
import Credits from "./components/credits";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Howworks />
      <Credits />
    </>
  );
}


 