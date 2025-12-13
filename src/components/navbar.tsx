import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../lib/constants";

function Navbar() {
  useGSAP(() => {
    const navTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTimeline.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav className="md:py-6">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <p>Lazy Lagoon</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              {
                <a className="capitalize" href={link.id}>
                  {link.title}
                </a>
              }
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
