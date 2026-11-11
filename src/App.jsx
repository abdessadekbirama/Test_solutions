import "./App.css";
import About from "./components/About";
import Boxes from "./components/Boxes";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Portfolio from "./components/Portfolio";
import Interior from "./components/Interior";
import Solutions from "./components/Solutions";
import Logos from "./components/Logos";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Hero />
      <About />
      <Boxes />
      <FeaturesSection />
      <Portfolio />
      <Interior />
      <Solutions />
      <Logos />
      <Testimonials />
      <Blog />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
