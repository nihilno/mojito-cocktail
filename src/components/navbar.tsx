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
        backgroundColor: "#00000095",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav className="md:py-6">
      <div>
        <a href="#hero" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <p>Lazy Lagoon</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              {
                <a
                  className="hover:text-yellow capitalize transition-colors"
                  href={link.id}
                >
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
