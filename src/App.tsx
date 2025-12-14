import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutUs from "./components/about-us";
import Cocktails from "./components/cocktails";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <AboutUs />
    </main>
  );
}

export default App;
