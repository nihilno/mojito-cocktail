import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutUs from "./components/about-us";
import Art from "./components/art";
import Cocktails from "./components/cocktails";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Menu from "./components/menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <AboutUs />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
