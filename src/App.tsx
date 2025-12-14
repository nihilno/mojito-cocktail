import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutUs from "./components/about-us";
import Art from "./components/art";
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
      <Art />
    </main>
  );
}

export default App;
