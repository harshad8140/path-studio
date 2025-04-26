import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
