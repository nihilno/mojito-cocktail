import { navLinks } from "../lib/constants";

function Navbar() {
  return (
    <nav className="bg-[#00000090] md:py-6">
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
