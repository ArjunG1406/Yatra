import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Sponsors from "./components/sponsors";
import Howworks from "./components/Howworks";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Howworks />
      <Footer />
    </>
  );
}
